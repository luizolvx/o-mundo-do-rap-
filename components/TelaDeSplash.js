// components/TelaDeSplash.js
import React, { useEffect } from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import estilos from '../css/estilo';

const TelaDeSplash = ({ aoConcluir }) => {
  useEffect(() => {
    const temporizador = setTimeout(() => {
      aoConcluir();
    }, 2000);
    return () => clearTimeout(temporizador);
  }, [aoConcluir]);

  return (
    <View style={estilos.estilosSplash.container}>
      <Image
        source={require('../assets/imagens/iconeRap.png')}
        style={estilos.estilosSplash.logo}
        accessibilityLabel="Logo Rap Anos 90"
      />
      <Text style={estilos.estilosSplash.title}>Bem-vindo ao Mundo do Rap dos Anos 90</Text>
      <ActivityIndicator size="large" color="#FFD700" style={estilos.estilosSplash.spinner} />
    </View>
  );
};

export default TelaDeSplash;
