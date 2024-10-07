import React from "react";
// Screens
import Usuarios from "./screens/usuarios";
import Sedes from "./screens/sedes";
import Login from "./SplashScreens";
import MapScreen from "./screens/ToolMap";
// Fin Screens
import { View, ScrollView } from "react-native";
import StackNav from "./Navigation";
export default function App() {
  return (
    <StackNav/>
  );
}
