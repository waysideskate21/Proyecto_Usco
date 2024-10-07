import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';

export default function Guide() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuIcon}>
          <Image source={require('../assets/logo_usco.png')} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Guide Usco</Text>
        <TouchableOpacity style={styles.profileIcon}>
          <Image source={require('../assets/betty.png')} style={styles.iconB} />
        </TouchableOpacity>
      </View>

      {/* Main Image */}
      <Image source={require('../assets/Sede_Principal.jpeg')} style={styles.mainImage} />
      <Text style={styles.mainText}>¿A dónde quieres ir?</Text>

      {/* Search Bars */}
      <View style={styles.searchSection}>
        <Text style={styles.searchTitle}>¿En dónde estás?</Text>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.input}
            placeholder="Buscar sitio en la U"
            placeholderTextColor="#999"
          />
          <TouchableOpacity style={styles.searchIcon}>
            <Image source={require('../assets/icon.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.searchSection}>
        <Text style={styles.searchTitle}>¿A dónde vas?</Text>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.input}
            placeholder="Buscar sitio en la U"
            placeholderTextColor="#999"
          />
          <TouchableOpacity style={styles.searchIcon}>
            <Image source={require('../assets/icon.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Campus Section */}
      <Text style={styles.sectionTitle}>Campus</Text>
      <View style={styles.grid}>
        {[
          { name: "Oficinas", image: require('../assets/oficinas.jpg') },
          { name: "Bloques", image: require('../assets/bloques.jpeg') },
          { name: "Aulas", image: require('../assets/salones.jpg') },
          { name: "Zonas Comunes", image: require('../assets/agoras.png') },
        ].map((location, index) => (
          <TouchableOpacity key={index} style={styles.locationCard}>
            <Image source={location.image} style={styles.locationImage} />
            <Text style={styles.locationTitle}>{location.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#8B0000',
    alignItems: 'center',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  menuIcon: {
    padding: 10,
  },
  profileIcon: {
    padding: 10,
  },
  icon: {
    resizeMode: 'contain',
    width: 40,
    height: 40,
  },
  iconB: {
    width: 40,
    height: 40,
    borderRadius: 10
  },
  mainImage: {
    width: '100%',
    height: 150,
    borderRadius: 15,
    marginBottom: 10,
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
    textAlign: 'center',
  },
  searchSection: {
    width: '90%',
    marginBottom: 20,
  },
  searchTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 15,
  },
  input: {
    flex: 1,
    height: 40,
    color: '#000',
  },
  searchIcon: {
    padding: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  locationCard: {
    backgroundColor: '#fff',
    width: '45%',
    marginBottom: 20,
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
  },
  locationImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  locationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8B0000',
    textAlign: 'center',
  },
});
