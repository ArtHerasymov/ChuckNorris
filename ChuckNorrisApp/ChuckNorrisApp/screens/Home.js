import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

class Home extends React.Component {
 
  constructor() {
    super();
    this.state = { query: 'Search...' }
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
    // Making HTTP request and going to another activity
  }
 
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText} >Home Activity</Text>
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