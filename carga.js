import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export default function Charge() {
  return <Inicio />;
}

export function Inicio() {
  return (
    <View style={styles.container}>
      <Image source={require("./assets/Title.png")} style={styles.title} />
      <Image source={require("./assets/logo_usco.png")} style={styles.escudo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#8f141b",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    justifyContent: "center",
    resizeMode: "contain",
    alignItems: "center",
    width: 400,
    height: 100,
    marginBottom: 20
  },
  escudo: {
    width: 500,
    resizeMode: "contain",
    height: 200,
  },
});
