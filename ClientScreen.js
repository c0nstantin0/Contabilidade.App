import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';

const ClientScreen = () => {
  const [name, setName] = useState('');
  const [clients, setClients] = useState([]);

  const addClient = () => {
    if (name) {
      setClients([...clients, name]);
      setName('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Clientes</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do Cliente"
        value={name}
        onChangeText={setName}
      />
      <Button title="Adicionar Cliente" onPress={addClient} />
      <FlatList
        data={clients}
        renderItem={({ item }) => <Text style={styles.client}>{item}</Text>}
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
  client: {
    fontSize: 18,
    paddingVertical: 4,
  },
});

export default ClientScreen;
