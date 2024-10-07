import react from "react";
import { useNavigation } from "@react-navigation/native";

import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

export default function MapScreen() {
  return (
    <View Style={styles.Container}>
      <Header />
    </View>
  );
}

function Header() {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <View style={styles.title}>
        <Image
          source={require("../assets/Title.png")}
          style={styles.image_title}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#F2EBEC",
  },
  header: {},

  title: {
    width: 350,
    resizeMode: "contain",
    height: 100,
  },
  image_title: {
    width: 350,
    resizeMode: "contain",
    height: 100,
  },
});
