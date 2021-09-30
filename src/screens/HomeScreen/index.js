import React from "react";

import { Text, StyleSheet, View, ScrollView, FlatList } from "react-native";

import  { style, styles1 } from "./style";
import Friend from './component/Friend';

const HomeScreen = () => {
  
  const friendList = [
    {id:1, name: "Nagaraj"},
    {id:2, name: "Keerthana"},
    {id:3, name: "Ashok"}
  ];
  
  const renderItem = ({item, index}) => (
    <Friend name = {`${item.name} ${index}`}/>
  );

  return (
    <FlatList
    data = {friendList}
    renderItem = {renderItem}
    keyExtractor = {item => `${item.id} ${item.name}`}
    />
  )
};



export default HomeScreen;
