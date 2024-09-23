import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('./assets/Escudo_usco.png')} // Asegúrate de tener tu logo en la carpeta assets
        style={styles.logo}
      />
      {/* Título */}
      <Text style={styles.title}>GUIDE USCO</Text>
      {/* Imagen del escudo */}
      <Image
        source={require('./assets/Escudo_usco.png')} // Asegúrate de tener el escudo
        style={styles.escudo}
      />
      {/* Subtítulo */}
      <Text style={styles.subtitle}>¿Qué tipo de usuario eres?</Text>

      

      {/* Botones para tipos de usuario */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.buttonInvitado}>
          <Image source={require('./assets/invitado.svg')} style={styles.icon} />
          <Text style={styles.buttonText}>Invitado</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.buttonEstudiante}>
          <Image source={require('./assets/invitado.svg')} style={styles.icon} />
          <Text style={styles.buttonText}>Estudiante</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.buttonDocente}>
          <Image source={require('./assets/invitado.svg')} style={styles.icon} />
          <Text style={styles.buttonText}>Docente</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.buttonAdmin}>
          <Image source={require('./assets/invitado.svg')} style={styles.icon} />
          <Text style={styles.buttonText}>Administrativos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  <StatusBar style="auto" />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8B0000', // Color de fondo rojo oscuro
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 50, // Tamaño de los logos superiores
    height: 50,
    position: 'absolute',
    top: 20,
    left: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 100,
  },
  escudo: {
    width: 120, // Ajusta según el tamaño que prefieras
    height: 120,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    marginVertical: 20,
  },
  buttonsContainer: {
    width: 350,
    alignItems: 'center',


  },
  buttonEstudiante: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingVertical: 15,
    marginVertical: 10,
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  buttonInvitado: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingVertical: 15,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonDocente: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingVertical: 15,
    marginVertical: 10,
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  buttonAdmin: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingVertical: 15,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    marginHorizontal: 20,
  },
  buttonText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#8B0000',
    textAlignVertical: 'center'
  },
  
});
