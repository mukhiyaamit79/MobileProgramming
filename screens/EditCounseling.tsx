import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";

export default function EditCounseling() {
  const [question, setQuestion] = useState("How to improve baby sleep?");

  const handleUpdate = () => {
    Alert.alert("Updated", "Counseling updated");
  };

  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Text style={styles.title}>Edit Counseling</Text>

        <TextInput
          style={[styles.input, styles.textArea]}
          value={question}
          onChangeText={setQuestion}
          multiline
        />

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
  textArea: { height: 120 },
  btn: { backgroundColor: "#A8D8EA", padding: 14, borderRadius: 8 },
  btnText: { color: "#FFF", textAlign: "center", fontWeight: "bold" },
});
