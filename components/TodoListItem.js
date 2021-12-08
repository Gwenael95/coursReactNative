import {Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {stylesTodoList} from "./exos/ppt5/TodoListScreen";

export const TodoListItem = ({name, callback, goto,  index}) => (
    <View style={stylesTodoList.item}>
        <TouchableOpacity style={stylesTodoList.item} onPress={goto.bind(this, name, index)}>
            <View>
                <Text style={stylesTodoList.buttonText}>{name}</Text>
            </View>

            <TouchableOpacity onPress={callback.bind(this, index)}>
                <View style={stylesTodoList.button}>
                    <Text style={stylesTodoList.buttonText}>Supprimer</Text>
                </View>
            </TouchableOpacity>
        </TouchableOpacity>

    </View>
);