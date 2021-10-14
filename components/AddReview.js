import React, { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from "@expo/vector-icons";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";


const AddReview = ({route:{params:{course}}, navigation}) => {
  
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 0,
    comment: "",
    submitting: false,
  });
 useEffect(()=>{
   getData()
 },[])

const storeData = async () => {
  try {
    const jsonValue = JSON.stringify(newReview)
    await AsyncStorage.setItem(course.code, jsonValue)
    navigation.goBack()
  } catch (e) {
    console.log(e)
  }
}

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(course.code)
    if(jsonValue !== null) {
     setNewReview({...newReview,...JSON.parse(jsonValue)})
    }
  } catch(e) {
    console.log(e)
  }
}




  return (
    <SafeAreaView style={styles.root}>
      
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
        value={newReview.comment}
        onChangeText = {(text)=> setNewReview({...newReview,comment:text})}
      />
      <TouchableOpacity style={styles.submitButton} 
      onPress={()=>{
        setNewReview({...newReview, submitting: true})
        setTimeout(() => {
          storeData()
        }, 1000);
      }}
      >
          <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
      {
        newReview.submitting&& <ActivityIndicator size='large' color='#00ff00'/>
      }
      
    </SafeAreaView>
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
