import React from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Image
          source={require("../assets/images/book-app-icon-8.jpg")}
          style={{ width: 150, height: 150 }}
        />
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Book App</Text>
      </View>
      <View style={{ marginTop: 100 }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={{ fontSize: 20, color: "#fff" }}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={{ fontSize: 20, color: "#fff" }}>REGISTER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    width: "100%",
    position: "relative",
    alignItems: "center",
  },
  button: {
    width: 300,
    padding: 15,
    margin: 15,
    alignItems: "center",
    backgroundColor: "darkorange",
    borderRadius: 20,
  },
});

export default HomeScreen;
