import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Christoffel's Restaurant</Text>
      <Text>This is a brief description of the restaurant.</Text>
      <Button title="View Menu" onPress={() => navigation.navigate('Menu')} />
      <Button title="View Orders" onPress={() => navigation.navigate('Orders')} />
      <Button title="Make a Reservation" onPress={() => navigation.navigate('Reservation')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default HomeScreen;
