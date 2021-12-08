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
import { useColorScheme } from 'react-native';
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

export default App;
