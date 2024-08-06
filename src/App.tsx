import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Category from './Page/Category';
import Detail from './Page/Detail';
import Meal from './Page/Meal';

const Stack = createNativeStackNavigator()

export default function App(): React.JSX.Element {

  return (
    <NavigationContainer >
      <Stack.Navigator 
        screenOptions={
          {headerStyle: 
            {backgroundColor: "#FFA500",}, 
            headerTintColor: "white"
            }}>
            <Stack.Screen name="Category" component = {Category} options={{headerTitle: "Kategoriler"}}/>
            <Stack.Screen name="Meal" component = {Meal} options={{headerTitle: "Yemekler"}}/>
            <Stack.Screen name="Detail" component = {Detail} options={{headerTitle: "Yapılışı"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )}
