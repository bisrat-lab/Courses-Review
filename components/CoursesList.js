import React, { useState } from 'react';
import { StyleSheet, Platform, SafeAreaView, View, Image, TextInput, FlatList } from 'react-native';
import { useEffect } from 'react/cjs/react.development';

import Course from './Course';
import Header from './Header';

const data = [
    { title: 'Web Application Programming', faculty: 'Asaad Saad', code: 'CS472', rating: 4 },
    { title: 'Modern Web Application', faculty: 'Asaad Saad', code: 'CS572', rating: 5 },
    { title: 'Enterprise Architecture', faculty: 'Joe Bruen', code: 'CS557', rating: 4 },
    { title: 'Algorithms', faculty: 'Clyde Ruby', code: 'CS421', rating: 5 },
    { title: 'Object Oriented JavaScript', faculty: 'Keith Levi', code: 'CS372', rating: 3 },
    { title: 'Big Data', faculty: 'Prem Nair', code: 'CS371', rating: 5 },
    { title: 'Web Application Architecture', faculty: 'Rakesh Shrestha', code: 'CS377', rating: 5 },
    { title: 'Big Data Analytics', faculty: 'Mrudula Mukadam', code: 'CS378', rating: 5 },
];

export default function CoursesList() {
    const [courses, setCourse] = useState([])
    const [search, setSearch] = useState('')

    useEffect(()=>{
        setCourse(data)
    },[])
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: '#FFFFFF',
                paddingTop: Platform.OS === 'android' ? 30 : 0,
                paddingBottom: 200
            }}>
            <View>
                <Header />
                <TextInput
                    style ={styles.input}
                    placeholder="Enter the Name"
                    onChangeText = {(text)=> setSearch(text)}
                />
                <FlatList
                   data = {courses.filter((c)=>{
                       return c.title.toLowerCase().indexOf(search.toLowerCase()) > -1;
                   })}
                   renderItem={({item,index})=> <Course data={{...item,index}}/>}
                   keyExtractor = {(code)=> code.code}
                />
            </View >
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    input: {
        padding: 10,
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        borderBottomWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#F5F5F5',
    },
});
