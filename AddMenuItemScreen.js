import React, { useState } from 'react';
import { View, TextInput, Button, Picker, StyleSheet } from 'react-native';

const AddMenuItemScreen = ({ onAddMenuItem }) => {
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('starters');
  const [price, setPrice] = useState('');

  const handleAddMenuItem = () => {
    if (dishName && description && price) {
      onAddMenuItem({ dishName, description, course, price });
      setDishName('');
      setDescription('');
      setPrice('');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Dish Name:</Text>
      <TextInput
        style={styles.input}
        value={dishName}
        onChangeText={setDishName}
        placeholder="Enter dish name"
      />
      <Text>Description:</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Enter description"
      />
      <Text>Select Course:</Text>
      <Picker
        selectedValue={course}
        onValueChange={(itemValue) => setCourse(itemValue)}
      >
        <Picker.Item label="Starters" value="starters" />
        <Picker.Item label="Mains" value="mains" />
        <Picker.Item label="Desserts" value="desserts" />
      </Picker>
      <Text>Price:</Text>
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        placeholder="Enter price"
      />
      <Button title="Add Menu Item" onPress={handleAddMenuItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default AddMenuItemScreen;
