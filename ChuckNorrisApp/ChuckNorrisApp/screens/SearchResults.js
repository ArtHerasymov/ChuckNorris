import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";

class SearchResults extends React.Component {
  static navigationOptions = {
    title: "SearchResults",
    headerStyle: {
      backgroundColor: "#E91E63"
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
        this.setState({jokes: res.result}); // Array of jokes
        this.setState({isLoading: false});
      })
  }

  render() {
    
    if(this.state.isLoading){
      return <View><Text>Loading...</Text></View>
    }
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>SearchResults</Text>
        <Text>{this.props.navigation.state.params.query}</Text>
        <Button
          title="Go Back"
          onPress={() => this.props.navigation.goBack()}
        />
        {this.state.jokes.map(joke => (
          <Text>{joke.value}</Text>
        )
        )}
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