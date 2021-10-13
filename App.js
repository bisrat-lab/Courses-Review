import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import Constants from 'expo-constants';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator()
const BTab = createDrawerNavigator()

export default function App() {

  return (
      <NavigationContainer>
         
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});
