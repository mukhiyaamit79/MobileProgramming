import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Image,
} from "react-native";

export default function LoginScreen({ navigation }: any) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const correctUsername = "Amit";
    const correctPassword = "4040";

    if (username.trim() === "" || password.trim() === "") {
      Alert.alert("Error", "Username or password cannot be empty!");
      return;
    }

    if (username !== correctUsername || password !== correctPassword) {
      Alert.alert("Error", "Invalid username or password!");
      return;
    }

    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>

      <Image
        source={{ uri: "C:\Users\Asus\Downloads\—Pngtree—child care icon flat design_9809772 (1).png" }}
        style={styles.logo}
      />

      <Text style={styles.title}>Child Care</Text>

      <TextInput
        placeholder="Enter Username"
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        placeholder="Enter Password"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      {/* Custom Dark Blue Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      {/* Sign Up Link */}
      <Text
        style={styles.signupText}
        onPress={() => navigation.navigate("SignUp")}
      >
        Don't have an account? Sign Up
      </Text>

    </View>
  );
}

const DARK_BLUE = "#003366";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#E6F0FF", // light blue background
  },

  logo: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginBottom: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: DARK_BLUE, // title in dark blue
  },

  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: "#FFF",
  },

  loginButton: {
    backgroundColor: DARK_BLUE, // dark blue button
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },

  loginButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  signupText: {
    marginTop: 15,
    color: DARK_BLUE, // dark blue sign-up text
    textAlign: "center",
    fontWeight: "bold",
  },
});

