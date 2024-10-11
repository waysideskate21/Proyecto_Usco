import { useState, useEffect, useRef } from "react";
import { useFonts } from "expo-font";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Animated,
  Easing,
  ImageBackground,
  Modal,
} from "react-native";

export default function Guide() {
  const [fontsLoaded] = useFonts({
    Montserrat: require("../fonts/Montserrat-VariableFont_wght.ttf"),
  });
  const [currentImage2, setcurrentImage2] = useState(null);
  return (
    <View style={styles.body}>
      <Head currentImage2={currentImage2} />
      <Sectionsite />
      <MapSelection setcurrentImage2={setcurrentImage2} />
    </View>
  );
}

export const useBlinkingAnimation = (condition) => {
  const blinkingAnimation = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (!condition) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(blinkingAnimation, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
            easing: Easing.linear,
          }),
          Animated.timing(blinkingAnimation, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
            easing: Easing.linear,
          }),
        ])
      ).start();
    } else {
      blinkingAnimation.setValue(1);
    }
  }, [condition]);

  return blinkingAnimation;
};

const Head = ({ currentImage2 }) => {
  const blinkingAnimation = useBlinkingAnimation(!currentImage2);
  const [isModalVisible, setisModalVisible] = useState(false);
  const questionIconColor = currentImage2 ? "#D8CEA3" : "#D8CEA3";

  const getModalContent = () => {
    switch (currentImage2) {
      case "Salon M":
        return <Text>Este es el contenido del Salon M.</Text>;
        break;
      case "Laboratorio Biologia":
        return <Text>Este es el contenido del Laboratorio de Biología.</Text>;
        break;
      case "Salon Saya":
        return <Text>Este es el contenido del Salon Saya.</Text>;
        break;
      default:
        break;
    }
  };
  return (
    <View style={styles.head}>
      <View style={styles.IconsHeader}>
        <Image
          source={require("../assets/Logo_Usuario.png")}
          style={styles.icon}
        />
      </View>
      <View style={styles.IconsHeader}>
        <TouchableOpacity onPress={() => setisModalVisible(true)}>
          <Animated.Image
            source={require("../assets/question.png")}
            style={[
              styles.TitleI,
              { borderColor: questionIconColor },
              { opacity: blinkingAnimation },
            ]}
          />
        </TouchableOpacity>
      </View>
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setisModalVisible(false)}
        animationType="fade"
      >
        <View style={styles.backgroundModal}>
          <TouchableOpacity onPress={() => setisModalVisible(false)}>
            <View>
              <Text>Volver</Text>
            </View>
          </TouchableOpacity>
          {getModalContent()}
        </View>
      </Modal>
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
          <Text style={styles.SecText}>¿Por donde entraste?</Text>
        </ImageBackground>
      </View>
    </View>
  );
};

// const Inputs = () => {
//   return (
//     <View style={styles.searchSection}>
//       <View style={styles.SectionSearch}>
//         <Text style={styles.searchTitle}>¿En dónde estás?</Text>
//         <View style={styles.searchBar}>
//           <TextInput
//             style={styles.inputSection}
//             placeholder="Buscar sitio en la U"
//             placeholderTextColor="#999"
//           />
//           <Icon name={"map-marker"} style={styles.iconInput} />
//           <View style={styles.iconPlaceholder} />
//         </View>
//       </View>
//       <View style={styles.searchSection2}>
//         <View style={styles.SectionSearch}>
//           <Text style={styles.searchTitle}>¿A donde vas?</Text>
//           <View style={styles.searchBar}>
//             <TextInput
//               style={styles.inputSection}
//               placeholder="Buscar sitio en la U"
//               placeholderTextColor="#999"
//             />
//             <Icon name={"run-fast"} style={styles.iconInput} />
//             <View style={styles.iconPlaceholder} />
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

const MapSelection = ({ setcurrentImage2 }) => {
  const [selectedEntrada, setSelectedEntrada] = useState(null);
  const [selectedAOA, setSelectedAOA] = useState(null);

  // Una sola función de selección
  const seleccionarOpcion = (tipo, item) => {
    if (tipo === "entrada") {
      setSelectedEntrada(item);
    } else if (tipo === "aoa") {
      setSelectedAOA(item);
      setcurrentImage2(item.titulo); // Actualizamos currentImage2

    }
  };

  // Primera Lista
  const [listaExpandida, setListaExpandida] = useState(false);

  // Fin Primera
  // Segunda Lista
  const [listaExpandida2, setListaExpandida2] = useState(false);

  // Fin Segunda Lista
  const entradas = [
    { id: "1", titulo: "Entrada Artes", imagen: require("../assets/icon.png") },
    {
      id: "2",
      titulo: "Entrada Bienestar",
      imagen: require("../assets/EntradaBienestar.png"),
    },
  ];
  const AOABienestar = [
    { id: "1", titulo: "Salon M", imagen: require("../assets/SalonM.png") },
    { id: "2", titulo: "Salon Saya", imagen: require("../assets/LabSa.png") },
    {
      id: "3",
      titulo: "Laboratorio Biologia",
      imagen: require("../assets/Laboratorio.png"),
    },
  ];

  const toggleLista = () => {
    setListaExpandida(!listaExpandida);
  };

  const toggleLista2 = () => {
    setListaExpandida2(!listaExpandida2);
  };

  // Función que maneja la selección de una opción para la PRIMERA lista
  const seleccionarOpcion1 = (titulo, imagen) => {
    setListaExpandida(false); // Colapsa la lista después de seleccionar una opción
  };

  // Función que maneja la selección de una opción para la SEGUNDA lista
  const seleccionarOpcion2 = (titulo, imagen) => {
    setcurrentImage2(titulo);
    setListaExpandida2(false);
  };
  return (
    <View>
      {/* Primer bloque */}
      <View style={styles.SelectionContainer}>
        <View style={styles.boton}>
          <TouchableOpacity onPress={toggleLista}>
            <View>
              <Text style={styles.botonTexto}>
                {listaExpandida
                  ? "Selecciona una opción"
                  : selectedEntrada
                  ? selectedEntrada.titulo
                  : "Entradas"}
              </Text>
            </View>
          </TouchableOpacity>

          {/* Lista expandida si se toca el botón */}
          {listaExpandida && (
            <FlatList
              data={entradas}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => seleccionarOpcion("entrada", item)}
                >
                  <Text style={styles.opcion}>{item.titulo}</Text>
                </TouchableOpacity>
              )}
            />
          )}
        </View>
        <View style={styles.image_content}>
          {selectedEntrada && (
            <Image source={selectedEntrada.imagen} style={styles.imagenFlist} />
          )}
        </View>
        {/* Mostrar la imagen seleccionada */}
      </View>

      {/* Segundo bloque (nuevo) */}
      <View style={styles.SelectionContainer2}>
        <View style={styles.boton}>
          <TouchableOpacity onPress={toggleLista2}>
            <View>
              <Text style={styles.botonTexto}>
                {listaExpandida2
                  ? "Selecciona otra opción"
                  : selectedAOA
                  ? selectedAOA.titulo
                  : "¿A donde vas?"}
              </Text>
            </View>
          </TouchableOpacity>

          {/* Lista expandida si se toca el botón */}
          {listaExpandida2 && (
            <FlatList
              data={AOABienestar}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => seleccionarOpcion("aoa", item)}
                >
                  <Text style={styles.opcion}>{item.titulo}</Text>
                </TouchableOpacity>
              )}
            />
          )}
        </View>
        <View style={styles.image_content}>
          {selectedAOA && (
            <Image source={selectedAOA.imagen} style={styles.imagenFlist} />
          )}
          <Text style={styles.TextSuper}>*</Text>
        </View>

      </View>
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
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
    marginTop: 35,
    justifyContent: "space-between",
  },
  icon: {
    width: 150,
    height: 60,
    resizeMode: "contain",
  },
  TitleI: {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#D8CEA3",
    height: 50,
    width: 50,
    resizeMode: "center",
  },
  // Fin Head
  // Section Image
  Section: {
    justifyContent: "center",
    flexDirection: "row",
  },
  containerImg: {
    alignContent: "center",
    width: "80%",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
    borderRadius: 20,
  },
  SectionImg: {
    flexDirection: "row",
    justifyContent: "center",
    resizeMode: "cover",
    overflow: "hidden",
    borderRadius: 20,
  },
  SecText: {
    fontFamily: "Montserrat",
    textShadowColor: "red",
    textShadowRadius: 3,
    textShadowOffset: { width: 0, height: 0 },
    color: "white",
    fontSize: 20,
    lineHeight: 40,
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
  },

  // Map Selection
  SelectionContainer: {
    justifyContent: "center",
    maxWidth: "100%",
    flexDirection: "column",
    marginLeft: 30,
    marginRight: 30,
  },
  SelectionContainer2: {
    maxWidth: "100%",
    flexDirection: "column",
    marginLeft: 30,
    marginRight: 30,
  },
  image_content: {
    justifyContent: "center",
    alignItems: "center",
  },
  imagenFlist: {
    marginTop: 10,
    width: "100%",
    height: 185,
    resizeMode: "stretch",
  },
  boton: {
    marginTop: 30,
  },
  botonTexto: {
    padding: 8,
    color: "black",
    fontSize: 18,
    borderWidth: 1,
    fontWeight: "bold",
    backgroundColor: "white",
    fontFamily: "Montserrat",
  },
  opcion: {
    padding: 8,
    fontSize: 18,
    fontFamily: "Montserrat",
    fontWeight: "bold",
    backgroundColor: "white",
    borderWidth: 1,
  },

  // Fin Section Image
  // // Inputs
  // searchSection: {
  //   marginTop: 25,
  // },
  // searchSection2: {
  //   marginTop: 15,
  // },
  // SectionSearch: {
  //   marginLeft: 30,
  //   alignContent: "center",
  //   marginRight: 30,
  //   marginTop: 5,
  //   marginBottom: 10,
  //   justifyContent: "center",
  // },
  // searchTitle: {
  //   width: "70%",
  //   color: "white",
  //   fontSize: 25,
  //   fontFamily: "Montserrat",
  //   fontWeight: "bold",
  //   marginBottom: 15,
  //   textShadowColor: "black",
  //   textShadowRadius: 3,
  //   textShadowOffset: { width: 0, height: 0 },
  // },
  // searchBar: {
  //   height: 50,
  //   flexDirection: "row",
  //   alignItems: "center",
  //   backgroundColor: "white",
  //   borderRadius: 10,
  // },
  // inputSection: {
  //   flexGrow: 1,
  //   marginLeft: 15,
  //   fontSize: 16,
  //   alignItems: "center",
  //   fontWeight: "bold",
  //   fontFamily: "Montserrat",
  // },
  // iconPlaceholder: {
  //   width: 20,
  // },
  //Fin inputs
});
