import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Alert
} from 'react-native';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import uuid from 'uuid/v1';

class Home extends React.Component {
 
  constructor() {
    super();
    this.state = { 
      query: '', 
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

  onCategoryPressed = (category) => {
    fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
      .then(response => response.json())
      .then(res => {
        Alert.alert(
          category,
          res.value,
          [{
            text: 'Funny'
          }],
          {cancelable:false}
        )
      })
  }
 
  render() {
    if(this.state.isLoading){
      return <View><Text>Loading...</Text></View>
    }
    return (
      <View>
        <View style={{marginLeft: 3,marginTop:20, flexDirection: 'row'}}>
          <TextInput 
            onChangeText = {(query) => this.setState({query})}
            style ={{ height: 40,width: 300, borderColor: 'gray', borderWidth: 1}}
            placeholder = "Enter search query"
            value = { this.state.query }
          />
          <Button
            title="Search"
            style ={{ width:50 ,float: 'right'}}
            color="#841584"
            onPress= {() => {
              this.props.navigation.navigate('SearchResults', { query: this.state.query });
            }}
          />
        </View>
        <View style={{marginTop: 5}}>
          {this.state.categories.map(category => (
            <Button onPress={ this.onCategoryPressed.bind(this, category.value)} key={category.key} title={category.value} />
          ))}
        </View>
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