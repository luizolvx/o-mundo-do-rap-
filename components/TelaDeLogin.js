// components/TelaDeLogin.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import estilos from '../css/estilo';

const TelaDeLogin = ({ aoLogin }) => {
  const [nomeDeUsuario, setNomeDeUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagemDeErro, setMensagemDeErro] = useState('');

  const lidarComLogin = () => {
    if (nomeDeUsuario === 'rap' && senha === '1234') {
      aoLogin();
    } else {
      setMensagemDeErro('Usuário ou senha inválidos. Tente "rap" e "1234".');
    }
  };

  return (
    <View style={estilos.estilosLogin.container}>
      <Text style={estilos.estilosLogin.title}>Entrar</Text>
      <TextInput
        style={estilos.estilosLogin.input}
        placeholder="Nome de Usuário"
        placeholderTextColor="#bbb"
        value={nomeDeUsuario}
        onChangeText={setNomeDeUsuario}
        autoCapitalize="none"
      />
      <TextInput
        style={estilos.estilosLogin.input}
        placeholder="Senha"
        placeholderTextColor="#bbb"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      {mensagemDeErro ? <Text style={estilos.estilosLogin.errorText}>{mensagemDeErro}</Text> : null}
      <TouchableOpacity style={estilos.estilosLogin.button} onPress={lidarComLogin}>
        <Text style={estilos.estilosLogin.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TelaDeLogin;
