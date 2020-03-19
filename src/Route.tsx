import React, { useState, useEffect, useContext } from "react";
import {
  createStackNavigator,
  StackNavigationProp
} from "@react-navigation/stack";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { ActivityIndicator, AsyncStorage } from "react-native";
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './page3';
import Page4 from './page4';


interface RoutesProps {

}

const Stack =createStackNavigator()

export default function App1() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Page1">
      <Stack.Screen name="Page1" component={Page1} />
      <Stack.Screen
        name="Page2"
        component={Page2}
        options={{ title: 'Page 2' }}
      />
      <Stack.Screen
        name="Page3"
        component={Page3}
        //options={{ title: 'John Doe' }}
      />
      <Stack.Screen
        name="Page4"
        component={Page4}
        // options={{ title: 'John Doe' }}
      />
    </Stack.Navigator>
    </NavigationContainer>
  );
}