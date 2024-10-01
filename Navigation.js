import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
//Screens
import Usuarios from "./screens/usuarios";
import Sedes from "./screens/sedes";
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Users"
        component={Usuarios}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Sedes"
        component={Sedes}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
