import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
    StyleSheet, View, TouchableOpacity, Text
} from 'react-native';
import { AccountHeader } from "../../AccountHeader"
import { FormContent} from "../../FormContent";
import {apiNasaApod, handleUrlParams} from "../../../src/assets/js/api.js"

//@todo remove all script for api call (src/assets ...)
async function test(){
    //let res = await apiNasaApod()
    //alert(res.explanation)
    //alert(handleUrlParams({rovers:"curiosity", }))
}

export const FormEnhanced = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [isPasswordValid, setIsPasswordValid] = useState(null)
    const [arePasswordEqual, setArePasswordEqual] = useState(null)

    useEffect(()=>{
        setIsPasswordValid(password.length>=3)
    }, [password])

    const checkPasswords = useMemo( ()=>{
        setArePasswordEqual( password === confirmPassword)
    }, [password, confirmPassword])

    const onSubmit = useCallback(() =>{
        alert("Bonjour " + firstName + " " + lastName + ", votre mot de passe est " + password)
    }, [firstName, lastName, password])

    return (
        <View style={stylesForm.main}>
            <AccountHeader></AccountHeader>
            <TouchableOpacity onPress={test}><Text>test</Text></TouchableOpacity>
            <FormContent
                firstName={firstName} onChangeFirstName={setFirstName}
                lastName={lastName} onChangeLastName={setLastName}
                password={password} onChangePassword={setPassword}
                confirmPassword={confirmPassword} onChangeConfirmPassword={setConfirmPassword}
                memoPassword={checkPasswords}
                isPasswordValid={isPasswordValid} arePasswordEqual={arePasswordEqual}
                onSubmit={onSubmit}
            ></FormContent>
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
    badInput:{
        borderColor: "red",
        borderWidth: 1,
        borderStyle: "solid"
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
