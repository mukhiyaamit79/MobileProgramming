import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";

export default function AddProducts({ navigation }: any) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleAdd = () => {
    if (!name || !price || !image) {
      Alert.alert("Error", "All fields are required");
      return;
    }

    Alert.alert("Success", "Product added successfully");
    navigation.goBack();
  };

  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Text style={styles.title}>Add Product</Text>

        <TextInput placeholder="Product Name" style={styles.input} value={name} onChangeText={setName} />
        <TextInput placeholder="Price" style={styles.input} value={price} onChangeText={setPrice} />
        <TextInput placeholder="Image URL" style={styles.input} value={image} onChangeText={setImage} />

        <TouchableOpacity style={styles.btn} onPress={handleAdd}>
          <Text style={styles.btnText}>Add Product</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#A8D8EA", justifyContent: "center", padding: 20 },
  card: { backgroundColor: "#FFF", padding: 20, borderRadius: 12 },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 15 },
  input: { backgroundColor: "#F7F7F7", padding: 12, borderRadius: 8, marginBottom: 12 },
  btn: { backgroundColor: "#FF7A00", padding: 14, borderRadius: 8 },
  btnText: { color: "#FFF", textAlign: "center", fontWeight: "bold" },
});
