import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";

export default function Login() {
  return <Inicio />;
}

function Inicio() {
  const navigation = useNavigation();
  return (
      <TouchableOpacity onPress={() => navigation.navigate("usuarios")} style={styles.container}>
        <Image source={require("./assets/Title.png")} style={styles.title} />
        <Image
          source={require("./assets/logo_usco.png")}
          style={styles.escudo}
        />
      </TouchableOpacity>

  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#8f141b",
    justifyContent: 'center',
    alignItems: "center"
  },
  title: {
    justifyContent: "center",
    resizeMode: "contain",
    alignItems: "center",
    width: 320,
    height: 100,
  },
  escudo: {
    width: 500,
    resizeMode: "contain",
    alignContent: "center",
    justifyContent: "center",
    height: 200,
  },
});
