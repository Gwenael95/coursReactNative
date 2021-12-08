import {Text, TextInput, TouchableOpacity, View} from "react-native";
import React from "react";
import {stylesTodoList} from "./exos/ppt5/TodoListScreen";

export const AddTodoForm = ({value, onChange, onSubmit}) => (
    <View style={[stylesTodoList.createContainer, stylesTodoList.width100]}>
        <TextInput style={[stylesTodoList.inputForm, stylesTodoList.flex3]} placeholder="A faire" value={value} onChangeText={onChange}></TextInput>
        <TouchableOpacity onPress={onSubmit} style={stylesTodoList.flex1}>
            <View style={stylesTodoList.button}>
                <Text style={stylesTodoList.buttonText}>Ajouter</Text>
            </View>
        </TouchableOpacity>
    </View>
);