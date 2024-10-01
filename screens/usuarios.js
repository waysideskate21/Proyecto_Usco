import { useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export default function Usuarios() {
  const [fontsLoaded] = useFonts({
    Montserrat: require("../fonts/Montserrat-VariableFont_wght.ttf"),
  });
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayout = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container} onLayout={onLayout}>
      <Header />
      <Body />
    </View>
  );
}

export function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require("../assets/Logo_Usuario.png")}
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
export function Body() {
  const navigation = useNavigation();

  return (
    <View style={styles.section}>
      <View style={styles.grid}>
        {/* caja */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(Usuarios)}>
          <View style={styles.image_box}>
            <Image
              source={require("../assets/invitado.png")}
              style={styles.buttonImage}
            />
          </View>
          <View style={styles.text_box}>
            <Text style={styles.buttonText}>Invitado</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <View style={styles.image_box}>
            <Image
              source={require("../assets/estudiante.png")}
              style={styles.buttonImage}
            />
          </View>
          <View style={styles.text_box}>
            <Text style={styles.buttonText}>Estudiante</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <View style={styles.image_box}>
            <Image
              source={require("../assets/Maestro.png")}
              style={styles.buttonImage}
            />
          </View>
          <View style={styles.text_box}>
            <Text style={styles.buttonText}>Docente</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <View style={styles.image_box}>
            <Image
              source={require("../assets/Trabajador.png")}
              style={styles.buttonImage}
            />
          </View>
          <View style={styles.text_box}>
            <Text style={styles.buttonText}>Administrativo</Text>
          </View>
        </TouchableOpacity>
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
  section: {
    flexGrow: 1,
  },
  box: {
    backgroundColor: "white",
    borderRadius: 35,
    margin: 12,
  },

  grid: {
    alignItems: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",

    justifyContent: "space-around",
  },

  button: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 20,
  },

  buttonImage: {
    width: 130,
    resizeMode: "contain",
    height: 90,
  },

  buttonText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Montserrat",
  },
});
