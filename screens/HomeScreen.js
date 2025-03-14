import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import Resultado from '../components/Resultado';

export default function HomeScreen() {
  const [nomeProduto, setNomeProduto] = useState('');
  const [valorProduto, setValorProduto] = useState('');
  const [porcentagemAumento, setPorcentagemAumento] = useState('');
  const [mostrarResultado, setMostrarResultado] = useState(false);

  const calcularAumento = () => {
    if (!nomeProduto || !valorProduto || !porcentagemAumento) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }
    setMostrarResultado(true);
  };

  return (
    <View style={styles.container}>
      {/* <Image style={styles.imagem} source={require('../assets/calculadora.png')} /> */}
      {/* <Image source={require('../assets/calculadora_logo.png')} style={styles.imagem} /> */}

      <Image
        source={{
          uri: 'https://img.freepik.com/vetores-premium/logotipo-da-calculadora_10250-2607.jpg',
        }}
        style={styles.imagem}
      />

      <Text style={styles.titulo}>CP 1 - Calculadora</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do Produto"
        placeholderTextColor="#ccc"
        value={nomeProduto}
        onChangeText={setNomeProduto}
      />
      <TextInput
        style={styles.input}
        placeholder="Valor do Produto"
        placeholderTextColor="#ccc"
        keyboardType="numeric"
        value={valorProduto}
        onChangeText={setValorProduto}
      />
      <TextInput
        style={styles.input}
        placeholder="Porcentagem de Aumento"
        placeholderTextColor="#ccc"
        keyboardType="numeric"
        value={porcentagemAumento}
        onChangeText={setPorcentagemAumento}
      />
      <TouchableOpacity style={styles.button} onPress={calcularAumento}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      {mostrarResultado && (
        <Resultado nomeProduto={nomeProduto} valorProduto={valorProduto} porcentagemAumento={porcentagemAumento} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFFFFF',
  },
  imagem: {
    width: 300,
    height: 150,
    marginBottom: 40,
  },
  input: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#444',
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#2D2D2D',
    color: '#FFFFFF',
  },
  button: {
    backgroundColor: '#FF9800',
    padding: 12,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
