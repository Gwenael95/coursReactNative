import React from 'react';
import {
    StyleSheet, Text, View, TouchableOpacity, FlatList, ScrollView
} from 'react-native';


const _onPressButton =  (name) =>{
    alert('Bonjour ' + name + ' ! ')
}
const NAME_LIST = ["Hugo", "Antoine", "Alyssia", "Gwen", "Houssam", "Florent", "Emerick", "Marine", "Marion"]

const Item = ({name} ) => (
    <View style={stylesNamesList.item}>
        <TouchableOpacity onLongPress={_onPressButton.bind(this, name)}>
            <View style={stylesNamesList.button}>
                <Text style={stylesNamesList.buttonText}>{name}</Text>
            </View>
        </TouchableOpacity>
    </View>
);

const renderItem = ({ item }) => (
    <Item name={item} />
);

export const NamesListArray = () => {
    return (
        <View style={stylesNamesList.flexCenter}>
            <FlatList
                data={NAME_LIST}
                renderItem={renderItem}
            />
        </View>
    );
}

export const stylesNamesList = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:"#D1DEDEDE"
    },
    title:{
        color:"black",
        fontWeight:"900",
        fontSize:28
    },
    header:{
        flex:2,
        justifyContent: "center",
        alignItems:"center",
        textAlign: "center"
    },
    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius:20,
        borderColor:"black",
        borderWidth:2,
        borderStyle:"solid"
    },
    buttonText: {
        textAlign: 'center',
        padding: 20,
        color: 'black',
        fontWeight: "900"
    },
    flexAround:{
        justifyContent:"space-evenly",
        alignItems:"center",
        flexDirection:"row"
    },
    flexCenter:{
        justifyContent:"center",
        alignItems:"center"
    },
})
