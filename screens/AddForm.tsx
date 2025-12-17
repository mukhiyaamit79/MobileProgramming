import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";

export default function AddForm({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [child, setChild] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = () => {
    if (!email || !child || !age) {
      Alert.alert("Error", "All fields required");
      return;
    }

    Alert.alert("Success", "Child registered successfully");
    navigation.goBack();
  };

  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Text style={styles.title}>Add Child Form</Text>

        <TextInput placeholder="Parent Email" style={styles.input} value={email} onChangeText={setEmail} />
        <TextInput placeholder="Child Name" style={styles.input} value={child} onChangeText={setChild} />
        <TextInput placeholder="Child Age" style={styles.input} value={age} onChangeText={setAge} keyboardType="numeric" />

        <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
          <Text style={styles.btnText}>Submit</Text>
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
  btn: { backgroundColor: "#A8D8EA", padding: 14, borderRadius: 8 },
  btnText: { color: "#FFF", textAlign: "center", fontWeight: "bold" },
});
