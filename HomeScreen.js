import { Button } from "@react-navigation/elements";
import { Link } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>А́ а́ Ъ́ ъ́ О́ о́ У́ у́ е́ Е́ И́ и́ Ю́ ю́ Я́ я́</Text>
      <Text style={styles.text}>а̀ ъ̀ о̀ у̀ ѐ ѝ ю̀ я̀ А̀ Ъ̀ О̀ У̀ Ѐ Ѝ ю̀ Я̀</Text>
      <Text style={styles.text}>Й̀ ѝ̀, Й́, ѝ́</Text>
      <Text style={styles.blanc}>Й̀ ѝ̀, Й́, ѝ́</Text>
      <Text style={styles.blanc}>Й̀ѝ̀, Й́, й</Text>


      <Button screen="Calendar">Календар</Button>
      <Button screen="UselessInfo">Знание</Button>
      <Button screen="Dumi">Думи</Button>
      {/* Linking bg.calendar */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Shafarik-Regular",
    fontSize: 20,
  },
  blanc: {},
});
