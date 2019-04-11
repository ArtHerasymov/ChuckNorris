import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";

class SearchResults extends React.Component {
  static navigationOptions = {
    title: "SearchResults",
    headerStyle: {
      backgroundColor: "#E91E63"
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>SearchResults</Text>
        <Button
          title="Go to Home Activity"
          onPress={() => this.props.navigation.navigate("Home")}
        />

        <Text style={styles.headerText}>create new profile screen </Text>
        <Button
          title="Go to new Profile Activity"
          onPress={() => this.props.navigation.push("SearchResults")}
        />

        <Text style={styles.headerText}> Go Back </Text>
        <Button
          title="Go Back"
          onPress={() => this.props.navigation.goBack()}
        />

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