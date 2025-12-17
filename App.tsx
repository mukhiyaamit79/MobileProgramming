import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

/* Auth Screens */
import LoginScreen from "./screens/LoginScreen";
import SignUp from "./screens/SignUp";
import Home from "./screens/Home";
import Features from "./screens/Features";
import Products from "./screens/Products";
import Counseling from "./screens/Counseling";
import ContactUs from "./screens/ContactUs";
import Form from "./screens/Form";
import AddProducts from "./screens/AddProducts";
import EditProducts from "./screens/EditProducts";
import AddCounseling from "./screens/AddCounseling";
import EditCounseling from "./screens/EditCounseling";

import AddForm from "./screens/AddForm";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: { backgroundColor: "#A8D8EA" },
          headerTintColor: "#333",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        {/* Authentication */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="SignUp" component={SignUp} />

        {/* Main App Screens */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Features" component={Features} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="Counseling" component={Counseling} />
        <Stack.Screen name="ContactUs" component={ContactUs} />
        <Stack.Screen name="Form" component={Form} />

        {/* Product Management */}
        <Stack.Screen
          name="AddProducts"
          component={AddProducts}
          options={{ title: "Add Product" }}
        />
        <Stack.Screen
          name="EditProducts"
          component={EditProducts}
          options={{ title: "Edit Product" }}
        />

        {/* Counseling Management */}
        <Stack.Screen
          name="AddCounseling"
          component={AddCounseling}
          options={{ title: "Add Counseling" }}
        />
        <Stack.Screen
          name="EditCounseling"
          component={EditCounseling}
          options={{ title: "Edit Counseling" }}
        />

        {/* Form Management */}
        <Stack.Screen
          name="AddForm"
          component={AddForm}
          options={{ title: "Add Child Form" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
