import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
} from "react-native";

const stories = [
  {
    name: " Short Stories in \nEnglish",
    key: 1,
  },
  {
    name: "Switchblade",
    key: 2,
  },
  {
    name: " The light at The \nEnd of The Day",
    key: 3,
  },
  {
    name: " Ladybird Tales of \nAdventure Girls",
    key: 4,
  },
  {
    name: " What Is Not Yours \nIs Not Yours",
    key: 5,
  },
  {
    name: " Life And Other \nShortcomings",
    key: 6,
  },
  {
    name: " A Book of Short \nStories",
    key: 7,
  },
];

const url = [
  require("../assets/images/1.jpg"),
  require("../assets/images/2.jpg"),
  require("../assets/images/3.jpg"),
  require("../assets/images/4.jpg"),
  require("../assets/images/5.jpg"),
  require("../assets/images/6.jpg"),
  require("../assets/images/7.jpg"),
];

export default function ShortStories({ navigation }) {
  return (
    <View>
      <FlatList
        style={{ marginHorizontal: 7 }}
        numColumns="2"
        data={stories}
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
