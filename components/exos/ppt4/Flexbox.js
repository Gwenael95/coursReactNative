import React from 'react';
import {
    SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View
} from 'react-native';

function YellowSquare(props) {
    return<View style={stylesFlexbox.yellowSquare}></View>;
}

export const Flexbox = () => {
    return (
        <View style={stylesFlexbox.main}>
        <View style={stylesFlexbox.element1}>
        </View>
        <View style={[stylesFlexbox.element2, stylesFlexbox.flexAround]}>
            <YellowSquare/>
            <YellowSquare/>
            <YellowSquare/>
        </View>
        <View style={stylesFlexbox.element3}>
        </View>
        </View>
    );
}

// @todo comprendre comment utiliser le style de cette class component sand devoir le mettre dans App.js
export const stylesFlexbox = StyleSheet.create({
    main:{
        flex:1
    },
    element1:{
        flex:1,
        backgroundColor:"#FF0000"
    },
    element2:{
        flex:1,
        backgroundColor:"#00FF00"
    },
    element3:{
        flex:3,
        backgroundColor:"#0000FF"
    },
    yellowSquare:{
        backgroundColor:"#FFFF00",
        height:50,
        width:50,
        borderColor: '#000000',
        borderWidth: 2,
        borderStyle: 'solid',
    },
    flexAround:{
        justifyContent:"space-evenly",
        alignItems:"center",
        flexDirection:"row"
    }
})
