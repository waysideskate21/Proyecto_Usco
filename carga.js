import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export default function Charge() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/Escudo_usco.png")}
        style={styles.escudo}
      />
      <Text style={styles.title}>GUIDE USco</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8f141b",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 60,
    fontWeight: "800",
    color: "#dfd4a6",
    textDecorationStyle: 'any'
  },
  escudo: {
    width: 195,
    height: 210,
    marginTop: 15,
  },
});
