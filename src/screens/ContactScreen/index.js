import React from "react";

import { Text, StyleSheet, View } from "react-native";

import  { style, styles1 } from "./style";

const ContactScreen = () => {
  return <View style = {{backgroundColor:'red'}}>
    <Text style={styles1.text}>ContactScreen Screen1</Text>
    <Text style={styles1.text}>ContactScreen Screen2</Text>
    <View>
    <Text style={styles1.text}>ContactScreen Screen3</Text>
    <Text style={styles1.text}>ContactScreen Screen4</Text>
    </View>
  </View>
};



export default ContactScreen;
