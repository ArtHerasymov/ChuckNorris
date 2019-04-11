import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, YellowBox } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './screens/Home';
import SearchResults from './screens/SearchResults';

const RootStack = createStackNavigator(
{
  Home: { screen: Home },
  SearchResults: { screen: SearchResults },
},
{
    initialRouteName: 'Home',
}

);

const App = createAppContainer(RootStack);

export default App;