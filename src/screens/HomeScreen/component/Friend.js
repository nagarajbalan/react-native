import React from "react";

import { View } from "react-native";
import Label from '../../../components/Label';

const Friend = ({name}) => {
    
    return (
    <View>
        <Label text = 'Hey' textStyle = {{fontSize: 20}}/>
        <Label text = {name} />
        <View style = {{flex: 1, backgroundColor: 'blue', height: 1}}/>
    </View>)
};

export default Friend;