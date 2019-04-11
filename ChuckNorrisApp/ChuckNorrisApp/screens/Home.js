import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Alert
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import uuid from 'uuid/v1';

class Home extends React.Component {
 
  constructor() {
    super();
    this.state = { 
      query: 'Search...', 
      categories : [],
      isLoading: true
      }
  }

  componentDidMount() {
    fetch('https://api.chucknorris.io/jokes/categories', {
      method: 'GET'
    }).then(response => response.json())
      .then(categories => {
        for(let category of categories){
          this.state.categories.push({key: uuid(), value: category})
        }
        this.setState({isLoading: false});
      })
  }

   static navigationOptions = {
    title: 'Home',
    headerStyle: {
    backgroundColor: '#03A9F4',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
 
  }; 

  onPressSearch = () => {
    //Passing data to another screen
  }
 
  render() {
    if(this.state.isLoading){
      return <View><Text>Loading...</Text></View>
    }
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Home Activity</Text>
        <TextInput 
          onChangeText = {(query) => this.setState({query})}
          style ={{height: 40,width: 300, borderColor: 'gray', borderWidth: 1}}
          value = { this.state.query }
        />
        <Button
          title="Search"
          style ={{float: 'right'}}
          color="#841584"
          onPress= {this.onPressSearch}
        />
        <Button
          title="Go to Profile Activity"
          onPress={() => this.props.navigation.navigate('SearchResults')}
        />
        {this.state.categories.map(category => (
          <Button key={category.key} title={category.value} />
        ))}
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
 fontWeight: 'bold'
  },
  
});

export default Home;