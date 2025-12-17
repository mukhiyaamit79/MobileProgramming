// screens/Counseling.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

export default function Counseling() {
  const [name, setName] = useState("");
  const [question, setQuestion] = useState("");

  const handleSubmit = () => {
    if (!name || !question) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    Alert.alert("Submitted", `Name: ${name}\nQuestion: ${question}`);
    setName("");
    setQuestion("");
  };

  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Text style={styles.title}>Parent Counseling</Text>

        <TextInput
          style={styles.input}
          placeholder="Your Name"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Your Question"
          value={question}
          onChangeText={setQuestion}
          multiline
        />

        <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
          <Text style={styles.btnText}>Submit</Text>
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
  textArea: {
    height: 120,
    textAlignVertical: "top",
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
