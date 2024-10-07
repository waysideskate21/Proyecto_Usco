import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';

export default function Princ() {
    const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuIcon}>
          <Image source={require('../assets/logo_usco.png')} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Guide Usco</Text>
        <TouchableOpacity style={styles.profileIcon}>
          <Image source={require('../assets/betty.png')} style={styles.usuario} />
        </TouchableOpacity>
      </View>

      {/* Main Image */}
        <TouchableOpacity style={styles.menuIcon} onPress={() => navigation.navigate("guia")}>
            <Image source={require('../assets/botonMain.png')} style={styles.mainImage} />
            <Text style={styles.mainText}>¿A donde quieres ir?</Text>
        </TouchableOpacity>
      
      

      {/* Filters */}
      <ScrollView horizontal contentContainerStyle={styles.filters} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={styles.filterButton}>
        <Image source={require('../assets/bloqueCentral.png')} style={styles.botonTodo} />
          <Text style={styles.filterText}>TODO</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
        <Image source={require('../assets/botonOficinas.png')} style={styles.botonOficinas} />
          <Text style={styles.filterText}>Oficinas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
        <Image source={require('../assets/botonAulas.png')} style={styles.botonAulas} />
          <Text style={styles.filterText}>Aulas</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Locations */}
      <View style={styles.grid}>
        {[
          { name: "Bloque Educación", campus: "Central", image: require('../assets/bloqueCentral.png') },
          { name: "Ágoras", campus: "Central", image: require('../assets/agoras.png') },
          { name: "Oficinas Planeación", campus: "Planeación", image: require('../assets/planeacion.png') },
          { name: "IleUsco", campus: "Central", image: require('../assets/ileusco.png') },
          { name: "Aulas Bloque", campus: "Central", image: require('../assets/aulasCentral.png') },
          { name: "Bienestar", campus: "Central", image: require('../assets/bienestar.png') },
        ].map((location, index) => (
          <TouchableOpacity key={index} style={styles.locationCard}>
            <Image source={location.image} style={styles.locationImage} />
            <Text style={styles.locationTitle}>{location.name}</Text>
            <Text style={styles.locationSubtitle}>{location.campus}</Text>
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
    width: 30,
    height: 30,
  },
  input: {
    flex: 1,
    height: 40,
    color: '#000',
  },
  searchIcon: {
    padding: 10,
  },
  mainImage: {
    width: 260,
    height: 100,
    borderRadius: 10,
    marginBottom: 15,
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
    justifyContent: 'center',
  },
  filters: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  filterButton: {
    backgroundColor: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  filterText: {
    fontSize: 16,
    color: '#8B0000',
  },
  grid: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
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
  },
  locationSubtitle: {
    fontSize: 14,
    color: '#8B0000',
  },
  usuario:{
    borderRadius: 30,
    width: 30,
    height: 30,
  },
  botonTodo:{
    
  },
});


