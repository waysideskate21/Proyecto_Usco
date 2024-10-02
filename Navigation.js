import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
//Screens
import Usuarios from "./screens/usuarios";
import Sedes from "./screens/sedes";
import Login from "./SplashScreens";
import MapScreen from "./screens/ToolMap";

//Constantes
const bottom = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen
        name="SplashScreen"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="usuarios"
        component={Usuarios}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Sedes"
        component={Sedes}
        options={{
          headerShown: false,
        }}
      />
            <Stack.Screen
        name="Mapscreen"
        component={MapScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

function MainBottom() {
  return (
    <bottom.Navigator>
      <bottom.Screen
        name="Users"
        component={Usuarios}
        options={{
          headerShown: false,
        }}
      />
      <bottom.Screen
        name="Sedes"
        component={Sedes}
        options={{
          headerShown: false,
        }}
      />
    </bottom.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MainStack/>
    </NavigationContainer>
  );
}

export function BottomNav () {
    return (
        <NavigationContainer>
            <MainBottom/>
        </NavigationContainer>
    )
}
