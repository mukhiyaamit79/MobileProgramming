import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Navbar from "./Navbar";

export default function Home({ navigation }: any) {
  return (
    <View style={{ flex: 1 }}>
      {/* Navbar */}
      <Navbar
        active="Home"
        onNavigate={(page) => navigation.navigate(page)}
      />

      <View style={styles.container}>
        <Text style={styles.title}>Welcome to ChildCare+</Text>
        <Text style={styles.text}>
          Your trusted partner for safe baby products, growth tracking, and
          parenting support.
        </Text>

        <Image
          source={{
            uri: "https://yourdomain.com/baby-care.png",
          }}
          style={styles.hero}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  text: {
    fontSize: 16,
    color: "#555",
    lineHeight: 22,
    marginBottom: 20,
  },
  hero: {
    width: "100%",
    height: 200,
    borderRadius: 12,
  },
});
