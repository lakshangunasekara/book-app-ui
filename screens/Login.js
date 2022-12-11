import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
  Image,
} from "react-native";

function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Image
          source={require("../assets/images/book-app-icon-8.jpg")}
          style={{ width: 150, height: 150, marginBottom: 100 }}
        />
      </View>
      <View style={{ width: "80%" }}>
        <TextInput
          placeholder="Username"
          style={{
            borderWidth: 2,
            padding: 5,
            height: 40,
            borderWidth: 0,
            borderBottomWidth: 2,
          }}
        />
      </View>
      <View style={{ marginTop: 25, width: "80%" }}>
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={{
            borderWidth: 2,
            padding: 5,
            height: 40,
            borderWidth: 0,
            borderBottomWidth: 2,
          }}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.push("Dash")}
      >
        <Text style={{ fontSize: 18, color: "#fff" }}>LOGIN</Text>
      </TouchableOpacity>
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
    width: 250,
    padding: 12,
    margin: 50,
    alignItems: "center",
    backgroundColor: "darkorange",
    borderRadius: 20,
  },
});

export default LoginScreen;
