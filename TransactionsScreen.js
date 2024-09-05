import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';

const TransactionsScreen = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [transactions, setTransactions] = useState([]);

  const addTransaction = () => {
    if (description && amount) {
      setTransactions([...transactions, { description, amount: parseFloat(amount) }]);
      setDescription('');
      setAmount('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Transações</Text>
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Valor"
        value={amount}
        keyboardType="numeric"
        onChangeText={setAmount}
      />
      <Button title="Adicionar Transação" onPress={addTransaction} />
      <FlatList
        data={transactions}
        renderItem={({ item }) => (
          <Text style={styles.transaction}>
            {item.description}: R${item.amount.toFixed(2)}
          </Text>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  transaction: {
    fontSize: 18,
    paddingVertical: 4,
  },
});

export default TransactionsScreen;
