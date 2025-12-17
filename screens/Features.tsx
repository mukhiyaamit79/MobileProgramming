// screens/Features.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Features() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Features</Text>

      <Text style={styles.item}>• Baby Growth Tracking</Text>
      <Text style={styles.item}>• Immunization Alerts</Text>
      <Text style={styles.item}>• Expert Parenting Tips</Text>
      <Text style={styles.item}>• Child Safety Guidelines</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { padding: 20 },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  item: {
    paddingVertical: 6,
    fontSize: 17,
    color: "#444",
  },
});
