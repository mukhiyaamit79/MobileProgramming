// screens/Products.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Alert,
} from "react-native";

export default function Products({ navigation }: any) {
  const [cart, setCart] = useState<string[]>([]);

  const products = [
    {
      id: "1",
      name: "Baby Soap (Gentle & Safe)",
      price: "Rs. 180",
      image:
        "https://i0.wp.com/mamahood.co.za/wp-content/uploads/2020/07/Johnson-Top-To-Toe-Wash.png?fit=800%2C800&ssl=1",
    },
    {
      id: "2",
      name: "Baby Lotion",
      price: "Rs. 250",
      image:
        "https://www.johnsonsbaby.co.uk/sites/jbaby_uk_2/files/styles/product_image/public/product-images/johnsons-baby-lotion_0.png",
    },
    {
      id: "3",
      name: "Vitamin Syrups",
      price: "Rs. 350",
      image:
        "https://www.vitalabo.com/media/image/48/31/0c/phytopharma-kids-vit-sirup-200-ml-420x420.png",
    },
    {
      id: "4",
      name: "Baby Diapers",
      price: "Rs. 500",
      image: "https://pngimg.com/uploads/diapers/diapers_PNG38.png",
    },
  ];

  const addToCart = (productName: string) => {
    setCart([...cart, productName]);
    Alert.alert("Added to Cart", `${productName} has been added to your cart!`);
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Child Care Products</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.price}>{item.price}</Text>

              <TouchableOpacity
                style={styles.btn}
                onPress={() => addToCart(item.name)}
              >
                <Text style={styles.btnText}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <Text style={styles.cartTitle}>Cart Items: {cart.length}</Text>
      {cart.map((item, index) => (
        <Text key={index} style={styles.cartItem}>
          • {item}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#D0EEF7", // full screen background
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 3,
  },
  productImage: {
    width: 85,
    height: 85,
    borderRadius: 10,
    marginRight: 15,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 17,
    fontWeight: "600",
    color: "#333",
    marginBottom: 6,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FF7A00",
    marginBottom: 10,
  },
  btn: {
    backgroundColor: "#FF7A00",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
    alignSelf: "flex-start",
  },
  btnText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },
  cartTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    color: "#333",
  },
  cartItem: {
    fontSize: 16,
    color: "#555",
    paddingVertical: 2,
  },
});
