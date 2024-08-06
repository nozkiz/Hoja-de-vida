import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './type';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seleccione una opción</Text>
      <Button title="Hoja de Vida" onPress={() => navigation.navigate('Hoja de Vida')} />
      <Button title="Inicio Sesión" onPress={() => navigation.navigate('Inicio Sesión')} />
      <Button title="Registro Usuario" onPress={() => navigation.navigate('Registro Usuario')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default HomeScreen;
