import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

export default function ContactUs() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Contact Us</Text>

      <View style={styles.infoCard}>
        <Text style={styles.text}>📞 Phone: +123 456 789</Text>
        <Text style={styles.text}>📧 Email: support@childcareplus.com</Text>
        <Text style={styles.text}>📍 Location: Kathmandu, Nepal</Text>
      </View>

      <View style={styles.formCard}>
        <Text style={styles.formTitle}>Register Your Child</Text>

        <TextInput placeholder="Parent Email" style={styles.input} />
        <TextInput placeholder="Child Name" style={styles.input} />
        <TextInput placeholder="Child Age" style={styles.input} />

        <TouchableOpacity style={styles.registerBtn}>
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // FULL SCREEN BACKGROUND COLOR
  container: {
    flex: 1,
    backgroundColor: "#A8D8EA", // SAME COLOR YOU PROVIDED
    padding: 20,
  },

  header: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#4C3A2F",
  },

  infoCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 18,
    marginBottom: 20,
    elevation: 4,
  },

  text: {
    fontSize: 16,
    marginBottom: 8,
    color: "#4C3A2F",
  },

  formCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 20,
    elevation: 4,
  },

  formTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#4C3A2F",
  },

  input: {
    backgroundColor: "#F4F4F4",
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },

  registerBtn: {
    backgroundColor: "#A8D8EA", // Baby blue (from your design)
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },

  registerText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
