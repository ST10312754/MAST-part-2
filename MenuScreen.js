import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import AddMenuItemScreen from './AddMenuItemScreen';

const MenuScreen = () => {
  const [menuItems, setMenuItems] = useState([]);

  const handleAddMenuItem = (newItem) => {
    setMenuItems([...menuItems, newItem]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <Text>Total Items: {menuItems.length}</Text>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text>{item.dishName}</Text>
            <Text>{item.description}</Text>
            <Text>{item.course}</Text>
            <Text>${item.price}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <AddMenuItemScreen onAddMenuItem={handleAddMenuItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  menuItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});

export default MenuScreen;
