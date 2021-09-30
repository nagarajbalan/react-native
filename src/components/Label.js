import React from "react";

import { Text, StyleSheet, View, ScrollView } from "react-native";

const Label = ({text, textStyle}) => {
    
    return (
        <Text style={[styles.text, textStyle]}>{text}</Text>)
};

const styles = StyleSheet.create({
    text: {
        fontSize: 27, 
        fontFamily:'Helvetica',
        fontWeight:'bold'
    }
})
export default Label;