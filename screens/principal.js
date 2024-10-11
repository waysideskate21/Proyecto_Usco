import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useFonts } from "expo-font";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  ImageBackground,
} from "react-native";

export default function Guide() {
  const [fontsLoaded] = useFonts({
    Montserrat: require("../fonts/Montserrat-VariableFont_wght.ttf"),
  });
  return (
    <ScrollView style={styles.body}>
      <Head />
      <Inputs />
      <Sectionsite />
      <Filters />
      <Campus />
    </ScrollView>
  );
}

const Head = () => {
  return (
    <View style={styles.head}>
      <View style={styles.IconsHeader}>
        <Image
          source={require("../assets/Logo_Usuario.png")}
          style={styles.icon}
        />
      </View>
      <View style={styles.IconsHeader}>
        <Image source={require("../assets/Title.png")} style={styles.TitleI} />
      </View>
    </View>
  );
};

const Inputs = () => {
  return (
    <View style={styles.searchSection}>
      <View style={styles.SectionSearch}>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.inputSection}
            placeholder="Buscar sitio en la U"
            placeholderTextColor="#999"
          />
          <Icon name={"map-marker"} style={styles.iconInput} />
          <View style={styles.iconPlaceholder} />
        </View>
      </View>
    </View>
  );
};
const Sectionsite = () => {
  return (
    <View style={styles.Section}>
      <View style={styles.containerImg}>
        <ImageBackground
          source={require("../assets/Sede_Principal.jpeg")}
          style={styles.SectionImg}
        >
          <Text style={styles.SecText}>¿A donde quieres ir?</Text>
        </ImageBackground>
      </View>
    </View>
  );
};

const Filters = () => {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={styles.filters}
      showsHorizontalScrollIndicator={false}
    >
      <TouchableOpacity style={styles.ffilterButton}>
        <Image
          source={require("../assets/CentralB.png")}
          style={styles.filtersimg}
        />
        <Text style={styles.ffilterText}>TODO</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.filterButton}>
        <Image
          source={require("../assets/oficinas.jpg")}
          style={styles.filtersimg}
        />
        <Text style={styles.filterText}>Oficinas</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.filterButton}>
        <Image
          source={require("../assets/salones.jpg")}
          style={styles.filtersimg}
        />
        <Text style={styles.filterText}>Aulas</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const Campus = () => {
  return (
    <View style={styles.grid}>
      {[
        {
          name: "Bloque Educación",
          campus: "Central",
          image: require("../assets/CentralB.png"),
        },
        {
          name: "Ágoras",
          campus: "Central",
          image: require("../assets/agoras.jpg"),
        },
        {
          name: "Oficinas Planeación",
          campus: "Planeación",
          image: require("../assets/Sede_Postgrados.jpg"),
        },
        {
          name: "IleUsco",
          campus: "Central",
          image: require("../assets/bloques.jpeg"),
        },
        {
          name: "Aulas Bloque",
          campus: "Central",
          image: require("../assets/salones.jpg"),
        },
        {
          name: "Bienestar",
          campus: "Central",
          image: require("../assets/bienestar.jpg"),
        },
      ].map((location, index) => (
        <TouchableOpacity key={index} style={styles.locationCard}>
          <Image source={location.image} style={styles.locationImage} />
          <Text style={styles.locationTitle}>{location.name}</Text>
          <Text style={styles.locationSubtitle}>{location.campus}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  // Head
  body: {
    flexGrow: 1,
    backgroundColor: "#8D191D",
  },
  head: {
    flexWrap: "wrap",
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: "space-between",
  },
  icon: {
    width: 150,
    height: 55,
    resizeMode: "contain",
  },
  TitleI: {
    width: 150,
    height: 55,
    resizeMode: "contain",
  },
  // Fin Head
  // Section Image
  Section: {
    justifyContent: "center",
    flexDirection: "row",
  },
  containerImg: {
    justifyContent: "center",
    marginTop: 10,
    width: "80%",
    borderRadius: 10,
  },
  SectionImg: {
    width: "100%",
    height: 190,
    textAlign: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: 15,
  },
  SecText: {
    fontFamily: "Montserrat",
    textShadowColor: "red",
    textShadowRadius: 3,
    textShadowOffset: { width: 0, height: 0 },
    color: "white",
    fontSize: 15,
    lineHeight: 84,
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
  },
  // Fin Section Image
  // Inputs
  searchSection: {
    marginTop: 10,
  },
  searchSection2: {
    marginTop: 15,
  },
  SectionSearch: {
    marginLeft: 30,
    alignContent: "center",
    marginRight: 30,
    marginTop: 5,
    marginBottom: 10,
    justifyContent: "center",
  },
  searchTitle: {
    width: "70%",
    color: "white",
    fontSize: 25,
    fontFamily: "Montserrat",
    fontWeight: "bold",
    marginBottom: 15,
    textShadowColor: "black",
    textShadowRadius: 3,
    textShadowOffset: { width: 0, height: 0 },
  },
  searchBar: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
  },
  inputSection: {
    flexGrow: 1,
    marginLeft: 15,
    fontSize: 16,
    alignItems: "center",
    fontWeight: "bold",
    fontFamily: "Montserrat",
  },
  iconPlaceholder: {
    width: 20,
  },
  //Fin inputs

  // Inicio Campus
  sectionTitle: {
    fontSize: 22,
    fontFamily: "Montserrat",
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 15,
    textAlign: "center",
    textShadowColor: "black",
    textShadowRadius: 3,
    textShadowOffset: { width: 0, height: 0 },
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  locationCard: {
    backgroundColor: "#fff",
    width: "45%",
    marginBottom: 20,
    borderRadius: 10,
    alignItems: "center",
    padding: 10,
  },
  locationImage: {
    width: "100%",
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  locationTitle: {
    fontSize: 16,
    fontFamily: "Montserrat",
    fontWeight: "bold",
    color: "8D191D",
    textAlign: "center",
  },
  // Fin Campus

  // Filters

  filters: {
    marginTop: 15,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 15,
    flexDirection: "row",
    flexGrow: 1,
    justifyContent: "center",
  },
  filterButton: {
    flexDirection: "row",
    height: "90%",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    marginRight: 5,
    marginLeft: 5,
  },
  filtersimg: {
    resizeMode: "contain",
    width: 70,
    borderRadius: 20,
    overflow: "hidden",
    height: 70,
    margin: 8,
  },
  filterText: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Montserrat",
    color: "black",
    margin: 8,
  },
  ffilterButton: {
    flexDirection: "row",
    height: "90%",
    alignItems: "center",
    backgroundColor: "black",
    borderRadius: 20,
    marginRight: 5,
    marginLeft: 5,
  },
  ffilterText: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Montserrat",
    color: "white",
    margin: 8,
  },
  // Fin Filters
});
