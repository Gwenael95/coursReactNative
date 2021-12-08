import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Image} from "react-native";
import { TodoNavigator } from "./TodoNavigator"
import {FormEnhanced} from "../exos/ppt5/FormEnhanced";
import {NamesList} from "../exos/ppt4/NamesList";
import {Flexbox} from "../exos/ppt4/Flexbox";
import {Form} from "../exos/ppt4/Form";

const Tab = createBottomTabNavigator();

export const AppTabNavigator = ()=>{
    return (
        <Tab.Navigator initialRouteName="TodoList"
           screenOptions={({ route }) => ({
               tabBarIcon: ({ focused, color, size }) => {
                   let iconUri;

                   if (route.name === "FormSimple") {
                       iconUri = "https://www.vhv.rs/dpng/d/306-3060594_black-and-white-form-icon-icon-form-transparent.png"
                   } else if (route.name === "TodoList") {
                       iconUri = "http://cdn.onlinewebfonts.com/svg/img_568523.png"
                   }
                   else if(route.name === "Flexbox"){
                       iconUri = "https://static.thenounproject.com/png/137357-200.png"
                   }
                   else if(route.name === "FormEnhanced"){
                       iconUri = "https://static.thenounproject.com/png/145052-200.png"
                   }
                   else{
                       iconUri = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/VisualEditor_-_Icon_-_Bullet-list-ltr.svg/1200px-VisualEditor_-_Icon_-_Bullet-list-ltr.svg.png"
                   }
                   return <Image style={{width:20, height:20}} source={{uri:iconUri}} size={size} color={color} tintColor={color}/>;
               },
               tabBarActiveTintColor: "tomato",
               tabBarInactiveTintColor: "gray",
           })}
        >
            <Tab.Screen name="Flexbox" component={Flexbox} />
            <Tab.Screen name="FormSimple" component={Form} />
            <Tab.Screen name="NameList" component={NamesList} />

            <Tab.Screen name="FormEnhanced" component={FormEnhanced} />
            <Tab.Screen name="TodoList" component={TodoNavigator} />
        </Tab.Navigator>
    )
}