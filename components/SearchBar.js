import {TextInput, View} from "react-native";
import React from "react";
import {stylesTodoList} from "./exos/ppt5/TodoListScreen";

export const SearchBar = ({value, onChange}) => (
    <View style={stylesTodoList.width100}>
        <TextInput style={[stylesTodoList.createContainer, stylesTodoList.width100]}
                   placeholder="Rechercher" value={value} onChangeText={onChange}></TextInput>
    </View>
);
