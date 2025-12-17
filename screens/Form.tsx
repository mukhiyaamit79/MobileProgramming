// screens/Form.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

export default function Form() {
  const [email, setEmail] = useState("");
  const [childName, setChildName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = () => {
    if (!email || !childName || !age) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    Alert.alert(
      "Success",
      `Parent Email: ${email}\nChild Name: ${childName}\nChild Age: ${age}`
    );

    setEmail("");
    setChildName("");
    setAge("");
  };

  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Text style={styles.title}>Register Your Child</Text>

        <TextInput
          style={styles.input}
          placeholder="Parent Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Child Name"
          value={childName}
          onChangeText={setChildName}
        />

        <TextInput
          style={styles.input}
          placeholder="Child Age"
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
          <Text style={styles.btnText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#A8D8EA", // full screen background
    justifyContent: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 3,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#F7F7F7",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#DDD",
    marginBottom: 15,
  },
  btn: {
    backgroundColor: "#A8D8EA",
    padding: 14,
    borderRadius: 10,
    marginTop: 10,
  },
  btnText: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#FFF",
  },
});
