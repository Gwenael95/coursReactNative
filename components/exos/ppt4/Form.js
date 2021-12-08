import React from 'react';
import {
    StyleSheet, Text, View, TouchableOpacity, Image, TextInput
} from 'react-native';
import { IMAGE_ACCOUNT } from 'src/assets/image'; //IMAGE_ACCOUNT

const _onPressButton = () =>{
    alert('Inscription enregistrée!')
}
const uriAccount = "https://virl.bc.ca/wp-content/uploads/2019/01/AccountIcon2.png"


export const Form = () => {

    return (
        <View style={stylesForm.main}>
            <View style={stylesForm.header}>
                <Text style={stylesForm.title}>Inscription</Text>
                <Image
                    style={stylesForm.accountImage}
                    source={{uri:uriAccount}}
                />
            </View>
            <View style={[stylesForm.form]}>
                <TextInput style={stylesForm.inputForm} placeholder="Prénom"></TextInput>
                <TextInput style={stylesForm.inputForm} placeholder="Nom"></TextInput>
                <TextInput secureTextEntry={true} style={stylesForm.inputForm} placeholder="Mot de passe"></TextInput>
                <TextInput secureTextEntry={true} style={stylesForm.inputForm} placeholder="Confirmation mot de passe"></TextInput>
                <TouchableOpacity onPress={_onPressButton}>
                    <View style={stylesForm.button}>
                        <Text style={stylesForm.buttonText}>Envoyer</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export const stylesForm = StyleSheet.create({
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
    form:{
        flex:5,
        padding:20,
        justifyContent:"space-evenly",
        flexDirection:"column",
        alignItems:"center"
    },
    accountImage:{
        height:70,
        width:70,
    },
    inputForm:{
        width:"100%",
        backgroundColor:"#BCBFBFBF",
        borderRadius:5,
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
        color: 'grey'
    },
    flexAround:{
        justifyContent:"space-evenly",
        alignItems:"center",
        flexDirection:"row"
    }
})
