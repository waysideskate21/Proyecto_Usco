import React from "react";
import { View, Text, StatusBar, Button, StyleSheet } from 'react-native';


function Mytabs() {
  return (
      <Tab.Navigator>
        <Tab.Screen name= "Entries" component={EntriesScreens}/>
        <Tab.Screen name= "SessionScreens" component={SessionScreens} />
      </Tab.Navigator>
  )
  
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Mytabs/>
    </NavigationContainer>
  ) 
  
}