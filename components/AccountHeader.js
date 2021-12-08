import {Image, Text, View} from "react-native";
import React from "react";
import {stylesForm} from "./exos/ppt5/FormEnhanced";

const uriAccountImg = "https://virl.bc.ca/wp-content/uploads/2019/01/AccountIcon2.png"

export const AccountHeader = () =>(
    <View style={stylesForm.header}>
        <Text style={stylesForm.title}>Inscription</Text>
        <Image
            style={stylesForm.accountImage}
            source={{uri:uriAccountImg}}
        />
    </View>
);
