import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
} from "react-native";

const drama = [
  {
    name: "Macbeth",
    key: 1,
  },
  {
    name: " Harry Potter and The \nCursed Child",
    key: 2,
  },
  {
    name: "Romeo and Juliet",
    key: 3,
  },
  {
    name: " Hamlet -\nPrince of Denmark",
    key: 4,
  },
  {
    name: "Tempest",
    key: 5,
  },
  {
    name: "King Lear",
    key: 6,
  },
  {
    name: "Othello",
    key: 7,
  },
];

const url = [
  require("../assets/drama/1.jpg"),
  require("../assets/drama/2.jpg"),
  require("../assets/drama/3.jpg"),
  require("../assets/drama/4.jpg"),
  require("../assets/drama/5.jpg"),
  require("../assets/drama/6.jpg"),
  require("../assets/drama/7.jpg"),
];

export default function Drama({ navigation }) {
  return (
    <View>
      <FlatList
        style={{ marginHorizontal: 7 }}
        numColumns="2"
        data={drama}
        renderItem={({ item }) => (
          <ScrollView>
            <View style={{ alignItems: "center" }}>
              <Image style={styles.image} source={url[item.key - 1]} />
              <Text style={{ textAlign: "center", marginTop: -10 }}>
                {item.name}
              </Text>
            </View>
          </ScrollView>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 230,
    alignSelf: "center",
    margin: 15,
  },
});
