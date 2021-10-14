import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View, TextInput, FlatList } from "react-native";
import Constants from "expo-constants";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import CoursesList from "./components/CoursesList";
import CourseDetails from "./components/CourseDetails";
import AddReview from "./components/AddReview";

import About from "./components/About";
const Stack = createStackNavigator();
const BTab = createMaterialBottomTabNavigator();

export default function App() {
  const CourseStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="CoursesList"
          component={CoursesList}
          options={{ title: "Courses List" }}
        />
        <Stack.Screen
          name="CourseDetails"
          component={CourseDetails}
          options={{ title: "Course Details" }}
        />
        <Stack.Screen
          name = "AddReview"
          component = {AddReview}
          options ={{title: "Add Review"}}
          />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <BTab.Navigator activeColor="#fff">
        <BTab.Screen
          name="Courses"
          component={CourseStack}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <BTab.Screen
          name="AboutUs"
          component={About}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
      </BTab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Constants.statusBarHeight,
  },
});
