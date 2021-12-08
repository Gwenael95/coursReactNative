/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from "./components/navigators/AppNavigator" // exo ppt 6 - 1
import { AppTabNavigator } from "./components/navigators/AppTabNavigator"  // exo ppt 6 - 2



const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
      <NavigationContainer>
        <AppTabNavigator></AppTabNavigator>
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
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
  },
  bold:{
    color:"black",
    fontWeight:900
  },
});
export default App;
