import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Resultado({ nomeProduto, valorProduto, porcentagemAumento }) {
  const valor = parseFloat(valorProduto);
  const aumento = parseFloat(porcentagemAumento);
  const valorAumento = (valor * aumento) / 100;
  const novoValor = valor + valorAumento;

  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>Nome: {nomeProduto}</Text>
      <Text style={styles.resultText}>Valor Original: R$ {valor.toFixed(2)}</Text>
      <Text style={styles.resultText}>Aumento: {aumento}%</Text>
      <Text style={styles.resultText}>Valor do Aumento: R$ {valorAumento.toFixed(2)}</Text>
      <Text style={styles.resultText}>Novo Valor: R$ {novoValor.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#333',
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  resultText: {
    fontSize: 16,
    color: '#FFF',
    marginBottom: 5,
  },
});
