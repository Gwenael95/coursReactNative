import {Text, TextInput, TouchableOpacity, View} from "react-native";
import React from "react";
import {stylesForm} from "./exos/ppt5/FormEnhanced";

export const FormContent = ({firstName, onChangeFirstName, lastName, onChangeLastName, password, onChangePassword,
                         confirmPassword, onChangeConfirmPassword, memoPassword, isPasswordValid,
                         arePasswordEqual, onSubmit}) =>(
    <View style={[stylesForm.form]}>
        <TextInput style={stylesForm.inputForm} placeholder="Prénom" value={firstName} onChangeText={onChangeFirstName}></TextInput>
        <TextInput style={stylesForm.inputForm} placeholder="Nom" value={lastName} onChangeText={onChangeLastName}></TextInput>
        <TextInput secureTextEntry={true}
                   style={isPasswordValid ? [stylesForm.inputForm] : [stylesForm.inputForm, stylesForm.badInput ]}
                   placeholder="Mot de passe" value={password} onChangeText={onChangePassword}></TextInput>
        <TextInput secureTextEntry={true}
                   style={arePasswordEqual ? [stylesForm.inputForm] : [stylesForm.inputForm, stylesForm.badInput ]}
                   placeholder="Confirmation mot de passe" value={confirmPassword}
                   onChangeText={onChangeConfirmPassword} onEndEditing={memoPassword}></TextInput>
        <TouchableOpacity onPress={onSubmit}>
            <View style={stylesForm.button}>
                <Text style={stylesForm.buttonText}>Envoyer</Text>
            </View>
        </TouchableOpacity>
    </View>
)
