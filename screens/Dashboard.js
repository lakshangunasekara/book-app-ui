import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";

function Dashboard({ navigation }) {
  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: "darkorange",
          paddingVertical: 5,
          paddingTop: 20,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          height: 80,
        }}
      ></View>
      <View style={{ marginHorizontal: "3%" }}>
        <ScrollView>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "flex-end",
            }}
          >
            <Text
              style={{ fontSize: 25, fontWeight: "bold", marginVertical: 10 }}
            >
              Drama
            </Text>
            <Text
              style={{ marginVertical: 10 }}
              onPress={() => navigation.push("Drama")}
            >
              View more
            </Text>
          </View>
          <ScrollView horizontal={true} style={{ flexDirection: "row" }}>
            <Image
              source={require("../assets/drama/3.jpg")}
              style={styles.image}
            />
            <Image
              source={require("../assets/drama/4.jpg")}
              style={styles.image}
            />
            <Image
              source={require("../assets/drama/5.jpg")}
              style={styles.image}
            />
          </ScrollView>
        </ScrollView>
        <ScrollView>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "flex-end",
            }}
          >
            <Text
              style={{ fontSize: 25, fontWeight: "bold", marginVertical: 10 }}
            >
              Novels
            </Text>
            <Text
              style={{ marginVertical: 10 }}
              onPress={() => navigation.push("Novels")}
            >
              View more
            </Text>
          </View>
          <ScrollView horizontal={true} style={{ flexDirection: "row" }}>
            <Image
              source={require("../assets/novels/3.jpg")}
              style={styles.image}
            />
            <Image
              source={require("../assets/novels/4.jpg")}
              style={styles.image}
            />
            <Image
              source={require("../assets/novels/1.jpg")}
              style={styles.image}
            />
          </ScrollView>
        </ScrollView>
        <ScrollView>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "flex-end",
            }}
          >
            <Text
              style={{ fontSize: 25, fontWeight: "bold", marginVertical: 10 }}
            >
              Short stories
            </Text>
            <Text
              style={{ marginVertical: 10 }}
              onPress={() => navigation.push("Short Stories")}
            >
              View more
            </Text>
          </View>
          <ScrollView horizontal={true} style={{ flexDirection: "row" }}>
            <Image
              source={require("../assets/images/4.jpg")}
              style={styles.image}
            />
            <Image
              source={require("../assets/images/1.jpg")}
              style={styles.image}
            />
            <Image
              source={require("../assets/images/5.jpg")}
              style={styles.image}
            />
          </ScrollView>
        </ScrollView>
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          title="LOG OUT"
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text>LOG OUT</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
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
    width: 150,
    padding: 12,
    margin: 20,
    alignItems: "center",
    backgroundColor: "darkorange",
    borderRadius: 20,
  },
  image: {
    width: 120,
    height: 200,
    alignSelf: "center",
    justifyContent: "center",
    margin: 15,
  },
});

export default Dashboard;

function BookScreen(url) {
  return (
    <View>
      <Text style={{ fontSize: 40 }}>{url}</Text>
    </View>
  );
}
