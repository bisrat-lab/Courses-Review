import React, { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import Stars from "./Stars";

const AddReview = () => {
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 0,
    comment: "",
    submitting: false,
  });
  return (
    <View style={styles.root}>
      <Text style={styles.addReview}>Add Review</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={newReview.name}
        onChangeText={(text) => setNewReview({ ...newReview, name: text })}
      />
      <Text style={styles.rating}>Your Rating</Text>

      <View style={styles.stars}>
        {[1, 2, 3, 4, 5].map((i) => {
          return (
            <TouchableOpacity
              style={styles.starButton}
              onPress={()=>setNewReview({ ...newReview, rating: i })}
              key={i}
            >
              <AntDesign
                name={i}
                name="star"
                size={50}
                color={i <= newReview.rating ? "#FDCC0D" : "#d6d8d9"}
              />
            </TouchableOpacity>
          );
        })}
      </View>
      <TextInput
        placeholder="Review"
        style={styles.bogInput}
        onChangeText = {(text)=> setNewReview({...newReview,comment:text})}
      />
      <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  button: {
    paddingHorizontal: 10,
  },
  addReview: {
    fontSize: 25,
    color: "#444",
    textAlign: "center",
    margin: 20,
  },
  input: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 3,
  },
  rating: {
    fontSize: 20,
    color: "grey",
    textAlign: "center",
    marginVertical: 40,
  },
  stars: {
    marginBottom: 80,
    flexDirection: "row",
    justifyContent: "center",
  },
  starButton: {
    padding: 5,
  },
  submitButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#0066cc",
    borderRadius: 4,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  submitButtonText: {
    fontSize: 18,
    color: "#ffffff",
    textAlign: "center",
  },
  bogInput:{
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 3,
    height :80
  }
});

export default AddReview;
