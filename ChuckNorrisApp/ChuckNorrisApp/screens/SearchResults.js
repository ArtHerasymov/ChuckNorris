import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import uuid from 'uuid/v1';


class SearchResults extends React.Component {
  static navigationOptions = {
    title: "SearchResults",
    headerStyle: {
      backgroundColor: "#E91E63",
    }
  };

  state = {
    jokes: [],
    isLoading: true
  };

  componentDidMount(){
    const { navigate } = this.props.navigation;
    let query = this.props.navigation.state.params.query;
    fetch(`https://api.chucknorris.io/jokes/search?query=${query}`, {method: 'GET'})
      .then(response => response.json())
      .then(res => {
        for(let joke of res.result){
          this.state.jokes.push({key: uuid(), value:joke.value})
        }
        this.setState({isLoading: false});
      })
  }



  render() {
    
    if(this.state.isLoading){
      return <View><Text>Loading...</Text></View>
    } else if(this.state.jokes.length == 0){
      return (
        <View>
          <Text style={styles.headerText}>Search result for :</Text>
          <Text style={{textAlign: 'center', fontSize:30, fontStyle: 'italic'}}>{this.props.navigation.state.params.query}</Text>
          <Text>No matches...</Text>
        </View>
        )
    }
    return (
      <View>
        <Text style={styles.headerText}>Search result for :</Text>
        <Text style={{textAlign: 'center', fontSize:30, fontStyle: 'italic'}}>{this.props.navigation.state.params.query}</Text>
        <ScrollView>
          {this.state.jokes.map(joke => (
              <Text style={{margin: 3, borderWidth:2, borderColor: 'gray'}} key={joke.key}>{joke.value}</Text>    
            ))}
        </ScrollView>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  }
});

export default SearchResults;