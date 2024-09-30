import { StatusBar } from "expo-status-bar";
import React from "react";
import { useFonts } from "expo-font";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export default function Users() {
  const [fontsLoaded] = useFonts({
    Montse: require("../fonts/Montserrat-VariableFont_wght.ttf"),
    MontsItalic: require("../fonts/Montserrat-Italic-VariableFont_wght.ttf"),
  });
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
        <View style={styles.logo1}>
          <Image source={require("../assets/Title.png")} style={styles.logo} />
        </View>
        <View style={styles.logo2}>
          <Image
            source={require("../assets/logo_usco.png")}
            style={styles.logoApp}
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
    flexGrow: 1,
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
  logo1: {
    justifyContent: "center",
    alignItems: "center",
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

  logo: {
    width: 350,
    resizeMode: "contain",
    height: 100,
  },
  logo2: {
    justifyContent: "center",
    alignItems: "center",
  },
  logoApp: {
    width: 160,
    resizeMode: "contain",
    height: 140,
  },
});
