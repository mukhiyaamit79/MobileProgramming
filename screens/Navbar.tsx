// components/Navbar.tsx
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface Props {
  active: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ active, onNavigate }: Props) {
  const menu = [
    { label: "Home", key: "Home" },
    { label: "Features", key: "Features" },
    { label: "Products", key: "Products" },
    { label: "Counseling", key: "Counseling" },
    { label: "Contact Us", key: "ContactUs" },
    { label: "Form", key: "Form" },
  ];

  return (
    <View style={styles.nav}>
      {menu.map((item) => (
        <TouchableOpacity key={item.key} onPress={() => onNavigate(item.key)}>
          <Text style={[styles.link, active === item.key && styles.active]}>
            {item.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#A8D8EA",
    paddingVertical: 14,
  },
  link: {
    color: "#FFF",
    fontSize: 15,
    opacity: 0.8,
  },
  active: {
    opacity: 1,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
