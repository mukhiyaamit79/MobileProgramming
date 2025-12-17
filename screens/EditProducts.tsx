import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";

export default function EditProducts() {
  const [name, setName] = useState("Baby Soap");
  const [price, setPrice] = useState("180");

  const handleUpdate = () => {
    Alert.alert("Updated", "Product updated successfully");
  };

  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Text style={styles.title}>Edit Product</Text>

        <TextInput style={styles.input} value={name} onChangeText={setName} />
        <TextInput style={styles.input} value={price} onChangeText={setPrice} />

        <TouchableOpacity style={styles.btn} onPress={handleUpdate}>
          <Text style={styles.btnText}>Update</Text>
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
