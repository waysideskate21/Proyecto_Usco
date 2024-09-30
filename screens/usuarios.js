import { StatusBar } from "expo-status-bar";
import React from "react";
import { useFonts } from "expo-font";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export default function Users() {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require("../assets/Escudo_usco.png")}
            style={styles.header_images}
          />
          <Image
            source={require("../assets/Certificado_Icontec.png")}
            style={styles.header_images}
          />
        </View>
        <View style={styles.title}>
          <Image
            source={require("../assets/Title.png")}
            style={styles.image_title}
          />
        </View>
        <View style={styles.logo_box}>
          <Image
            source={require("../assets/logo_usco.png")}
            style={styles.logo}
          />
        </View>
        <View style={styles.title}>
          <Text style={styles.text}>¿Que tipo de Usuario eres?</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#8D191D",
    flexGrow: 1
  },

  header: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  header_images: {
    width: 145,
    resizeMode: "contain",
    height: 100,
  },

  title: {
    justifyContent: "center",
    alignItems: "center",

  },
  text: {
    fontSize: 25,
    padding: 10,
    color: "#ffffff",
    fontWeight: "bold",
    fontFamily: "Montserrat",
    justifyContent: "center",
  },

  image_title: {
    width: 350,
    resizeMode: "contain",
    height: 100,
  },
  logo_box: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 160,
    resizeMode: "contain",
    height: 140,
  },
});
