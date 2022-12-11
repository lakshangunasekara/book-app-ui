import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
} from "react-native";

const novel = [
  {
    name: "Anatomy of a Scandal",
    key: 1,
  },
  {
    name: " Harry Potter and the \nChamber of Secrets",
    key: 2,
  },
  {
    name: "The Kite Runner",
    key: 3,
  },
  {
    name: " An Offer From a \nGentleman",
    key: 4,
  },
  {
    name: "My Brilliant Life",
    key: 5,
  },
  {
    name: "Solar Bones",
    key: 6,
  },
  {
    name: "Bravely",
    key: 7,
  },
];

const url = [
  require("../assets/novels/1.jpg"),
  require("../assets/novels/2.jpg"),
  require("../assets/novels/3.jpg"),
  require("../assets/novels/4.jpg"),
  require("../assets/novels/5.jpg"),
  require("../assets/novels/6.jpg"),
  require("../assets/novels/7.jpeg"),
];

export default function Novel({ navigation }) {
  return (
    <View>
      <FlatList
        style={{ marginHorizontal: 7 }}
        numColumns="2"
        data={novel}
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
