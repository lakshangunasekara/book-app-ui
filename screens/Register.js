import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
  Alert,
} from "react-native";

function RegisterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 20, width: "95%" }}>
        <Text style={{ marginBottom: 5, fontSize: 16 }}>E-mail</Text>
        <TextInput
          keyboardType="email-address"
          style={{
            borderWidth: 2,
            padding: 5,
            height: 35,
            borderWidth: 0,
            borderBottomWidth: 2,
          }}
        />
      </View>
      <View style={{ marginBottom: 20, width: "95%" }}>
        <Text style={{ marginBottom: 5, fontSize: 16 }}>Username</Text>
        <TextInput
          style={{
            borderWidth: 2,
            padding: 5,
            height: 35,
            borderWidth: 0,
            borderBottomWidth: 2,
          }}
        />
      </View>
      <View style={{ marginBottom: 20, width: "95%" }}>
        <Text style={{ marginBottom: 5, fontSize: 16 }}>Mobile number</Text>
        <TextInput
          keyboardType="numeric"
          style={{
            borderWidth: 2,
            padding: 5,
            height: 35,
            borderWidth: 0,
            borderBottomWidth: 2,
          }}
        />
      </View>
      <View style={{ marginBottom: 20, width: "95%" }}>
        <Text style={{ marginBottom: 5, fontSize: 16 }}>Password</Text>
        <TextInput
          secureTextEntry={true}
          style={{
            borderWidth: 2,
            padding: 5,
            height: 35,
            borderWidth: 0,
            borderBottomWidth: 2,
          }}
        />
      </View>
      <View style={{ marginBottom: 30, width: "95%" }}>
        <Text style={{ marginBottom: 5, fontSize: 16 }}>Confirm password</Text>
        <TextInput
          secureTextEntry={true}
          style={{
            borderWidth: 2,
            padding: 5,
            height: 35,
            borderWidth: 0,
            borderBottomWidth: 2,
          }}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          Alert.alert("Successfully registered");
          navigation.navigate("Home");
        }}
      >
        <Text style={{ fontSize: 18, color: "#fff" }}>REGISTER</Text>
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
    alignItems: "center",
  },
  button: {
    width: 250,
    padding: 12,
    margin: 25,
    alignItems: "center",
    backgroundColor: "darkorange",
    borderRadius: 20,
  },
});

export default RegisterScreen;
