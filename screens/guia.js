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
  const [selectedImages, setSelectedImages] = useState([]); // Estado para almacenar las imágenes seleccionadas

  return (
    <View style={styles.body}>
      <Head currentImage2={currentImage2} selectedImages={selectedImages} />
      <Sectionsite />
      <MapSelection
        setcurrentImage2={setcurrentImage2}
        setSelectedImages={setSelectedImages}
      />
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

export const Head = ({ currentImage2, selectedImages }) => {
  const blinkingAnimation = useBlinkingAnimation(!currentImage2);
  const [isModalVisible, setisModalVisible] = useState(false);
  const questionIconColor = currentImage2 ? "#D8CEA3" : "#D8CEA3";

  const getModalContent = () => {
    if (!currentImage2) {
      return (
        <View style={styles.bodyModal}>
          <Text style={styles.TitleM}>Bienvenido a la guía de ubicaciones</Text>
          <Text style={styles.modalText}>
            Selecciona una entrada para comenzar a explorar.
          </Text>
          <View style={styles.imageContainer}>
            {selectedImages.map((imgObj, index) => (
              <View key={index} style={styles.imageWithCita}>
                <Image source={imgObj.src} style={styles.modalImage} />
                <Text style={styles.imageCita}>{imgObj.cita}</Text>
              </View>
            ))}
          </View>
        </View>
      );
    }
    if (selectedImages && selectedImages.length > 0) {
      return (
        <View style={styles.bodyModal}>
          <Text style={styles.TitleM}>{currentImage2}</Text>
          <Text style={styles.modalText}>
            {Guias[currentImage2]?.descripcion}
          </Text>
          <View style={styles.imageContainer}>
            {selectedImages.map((imgObj, index) => (
              <View key={index} style={styles.imageWithCita}>
                <Image source={imgObj.src} style={styles.modalImage} />
                <Text style={styles.imageCita}>{imgObj.cita}</Text>
              </View>
            ))}
          </View>
        </View>
      );
    }

    switch (currentImage2) {
      case "Biblioteca":
        return (
          <View style={styles.bodyModal}>
            <View style={styles.TitleModal}>
              <Text style={styles.TitleM}>Esta es la Biblioteca Central</Text>
            </View>
            <View style={styles.ModalImageContain}>
              <Image
                source={require("../assets/biblioteca-central.jpeg")}
                style={styles.imgModal}
              />
            </View>
          </View>
        );
        break;
      case "Laboratorio Biologia":
        return (
          <View style={styles.bodyModal}>
            <View style={styles.TitleModal}>
              <Text style={styles.TitleM}>
                Esta es el Laborario de biologia
              </Text>
            </View>
            <View style={styles.ModalImageContain}>
              <Image
                source={require("../assets/lab-biologia.png")}
                style={styles.imgModal}
              />
            </View>
          </View>
        );
        break;
      case "Salon Saya":
        return (
          <View style={styles.bodyModal}>
            <View style={styles.TitleModal}>
              <Text style={styles.TitleM}>Esta es el Salon Saya</Text>
            </View>
          </View>
        );
        break;
      case "Salud":
        return (
          <View style={styles.bodyModal}>
            <View style={styles.TitleModal}>
              <Text style={styles.TitleM}>Esta es Salud</Text>
            </View>
          </View>
        );
        break;
      case "Salon M":
        return (
          <View style={styles.bodyModal}>
            <View style={styles.TitleModal}>
              <Text style={styles.TitleM}>Esta es el Salon M</Text>
            </View>
          </View>
        );
        break;
      default:
        return null;
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
          <View style={styles.HeaderModal}>
            <TouchableOpacity onPress={() => setisModalVisible(false)}>
              <Text style={styles.bottonback}>Volver</Text>
            </TouchableOpacity>
          </View>
          <View>{getModalContent()}</View>
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

const MapSelection = ({ setcurrentImage2, setSelectedImages }) => {
  // Una sola función de selección
  const seleccionarOpcion = (tipo, item) => {
    if (tipo === "entrada") {
      setSelectedEntrada(item);
      setSelectedEntrada();
    } else if (tipo === "aoa") {
      setSelectedAOA(item);
      setcurrentImage2(item.titulo); // Actualizamos currentImage2
    }
  };

  // Primera Lista
  const [listaExpandida, setListaExpandida] = useState(false);
  const [selectedEntrada, setSelectedEntrada] = useState(null); // Guarda la selección de la primera lista
  // Fin Primera
  // Segunda Lista
  const [listaExpandida2, setListaExpandida2] = useState(false);
  const [selectedAOA, setSelectedAOA] = useState(null); // Guarda la selección de la segunda lista
  const [staticImage, setStaticImage] = useState(null); // Imagen estática para la lista 2
  const [overlayImage, setOverlayImage] = useState(null); // Imagen superpuesta

  // Fin Segunda Lista
  const Guias = {
    EntradaBiens: {
      titulo: "Entrada bienestar",
      descripcion: "Bienvenido al area de Bienestar",
      imagenes: [
        require("../assets/BienesT.jpeg"),
        require("../assets/BienesR.jpeg"),
        require("../assets/BienesL.jpeg"),
      ],
    },
    EntradaEduca: {
      titulo: "Entrada bienestar",
      descripcion: "Bienvenido al area de Educacion",
      imagenes: [
        require("../assets/EducacionT.jpeg"),
        require("../assets/EducacionR.jpeg"),
        require("../assets/BienesL.jpeg"),
      ],
    },
  };

  const entradas = [
    {
      id: "1",
      titulo: "Entrada Bienestar",
      imagen: require("../assets/EntradaBienestar.png"),
      imagenEstatica: require("../assets/PlanoBiens.png"),
    },
    {
      id: "2",
      titulo: "Entrada Parqueadero",
      imagen: require("../assets/gato.jpg"),
      imagenEstatica: require("../assets/PlanoBiens.png"),
    },
    // Para futuras entradas repetir el mismo detallado y asignar la imagen estatica que estara en el segundo mapa
  ];
  const AOABienestar = [
    {
      id: "1",
      titulo: "Salon Saya",
      imagen: require("../assets/Saya_Line.png"),
    },
    {
      id: "2",
      titulo: "Laboratorio Biologia",
      imagen: require("../assets/Laboratorio_line.png"),
    },
    {
      id: "3",
      titulo: "Biblioteca",
      imagen: require("../assets/Biblioteca_line.png"),
    },
    {
      id: "4",
      titulo: "Salud",
      imagen: require("../assets/Salud_line.png"),
    },
    {
      id: "5",
      titulo: "Salon M",
      imagen: require("../assets/Salon_M.png"),
    },
  ];

  const toggleLista = () => {
    setListaExpandida(!listaExpandida);
  };

  const toggleLista2 = () => {
    setListaExpandida2(!listaExpandida2);
  };

  const seleccionarOpcion1 = (item) => {
    setSelectedEntrada(item);
    setListaExpandida(false);
    setStaticImage(item.imagenEstatica);
    setOverlayImage(null);
    const selectedGuide = Guias[item.titulo] || {};
    setcurrentImage2(selectedGuide.titulo);
    setSelectedImages(selectedGuide.imagenes || []);
  };
  const seleccionarOpcion2 = (item) => {
    setcurrentImage2(item.titulo);
    setSelectedAOA(item);
    setListaExpandida2(false);
    setOverlayImage(item.imagen);
  };

  return (
    <View>
      {/* Primer bloque */}
      <View style={styles.SelectionContainer}>
        <View style={styles.boton}>
          <TouchableOpacity onPress={toggleLista}>
            <View style={styles.botonlist}>
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
                  style={styles.botFla}
                  onPress={() => seleccionarOpcion1(item)}
                >
                  <Text style={styles.opcion}>{item.titulo}</Text>
                </TouchableOpacity>
              )}
            />
          )}
        </View>
        <View style={styles.image_content}>
          {selectedEntrada && (
            <Image
              source={selectedEntrada.imagen}
              style={styles.imagenFlist1}
            />
          )}
        </View>
      </View>
      {/* Segundo bloque */}
      {selectedEntrada && (
        <View style={styles.SelectionContainer2}>
          <View style={styles.boton}>
            <TouchableOpacity onPress={toggleLista2}>
              <View style={styles.botonlist}>
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
                    style={styles.botFla}
                    onPress={() => seleccionarOpcion2(item)} // Cambiado aquí
                  >
                    <View style={styles.botFla}>
                      <Text style={styles.opcion}>{item.titulo}</Text>
                    </View>
                  </TouchableOpacity>
                )}
              />
            )}
          </View>

          {/* Mostrar las imágenes en la segunda lista */}
          <View style={styles.image_content}>
            {staticImage && (
              <Image source={staticImage} style={styles.imagenFlist} /> // Imagen estática
            )}
            {overlayImage && (
              <Image
                source={overlayImage}
                style={[styles.imagenFlist, styles.overlayImage]}
              /> // Imagen superpuesta
            )}
          </View>
        </View>
      )}
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

  // Selection
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
    marginTop: 20,
  },
  image_content: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  imagenFlist1: {
    marginTop: 10,
    width: "100%",
    height: 185,
    resizeMode: "contain",
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

  botonlist: {
    height: 45,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    borderWidth: 1,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "white",
  },
  botonTexto: {
    color: "black",
    paddingLeft: 10,
    fontSize: 18,
    alignContent: "center",
    fontWeight: "bold",
    fontFamily: "Montserrat",
  },
  opcion: {
    alignContent: "center",
    textAlignVertical: "center",
    height: 45,
    paddingLeft: 10,
    fontSize: 18,
    fontFamily: "Montserrat",
    fontWeight: "bold",
    borderWidth: 1,
  },

  botFla: {
    alignContent: "center",
    backgroundColor: "white",
  },

  overlayImage: {
    position: "absolute", // Superpone la imagen en el contenedor
    top: 0,
    left: 0,
    width: "100%", // Asegura que la imagen se superponga correctamente
    height: 180, // Igual que la imagen estática para que coincidan
    resizeMode: "stretch",
  },

  backgroundModal: {
    backgroundColor: "#8D191D",
    flexGrow: 1,
  },
  HeaderModal: {
    flexDirection: "row",
    borderWidth: 1,
    width: "23%",
    marginLeft: 5,
    marginBottom: 10,
    height: "5%",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D8CEA3",
  },
  bottonback: {
    fontSize: 18,
    fontFamily: "Montserrat",
    fontWeight: "bold",
  },

  TitleM: {
    fontFamily: "Montserrat",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
  },

  bodyModal: {
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: "white",
    marginLeft: 20,
    marginRight: 20,
  },
  modalText: {
    textAlign: "center",
  },

  ModalImageContain: {
    height:250,
    alignItems: "center",
    justifyContent: "center",
  },
  imgModal: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
});
