import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";

export default function AddCounseling({ navigation }: any) {
  const [name, setName] = useState("");
  const [question, setQuestion] = useState("");

  const handleSubmit = () => {
    if (!name || !question) {
      Alert.alert("Error", "All fields required");
      return;
    }

    Alert.alert("Success", "Counseling question added");
    navigation.goBack();
  };

  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Text style={styles.title}>Add Counseling</Text>

        <TextInput placeholder="Parent Name" style={styles.input} value={name} onChangeText={setName} />
        <TextInput placeholder="Question" style={[styles.input, styles.textArea]} value={question} onChangeText={setQuestion} multiline />

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
  textArea: { height: 120, textAlignVertical: "top" },
  btn: { backgroundColor: "#A8D8EA", padding: 14, borderRadius: 8 },
  btnText: { color: "#FFF", textAlign: "center", fontWeight: "bold" },
});
