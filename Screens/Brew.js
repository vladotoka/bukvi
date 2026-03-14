import React from "react";
import { View, Text, TextInput } from "react-native";
import { OpenURLButton } from "../Components/OpenURLButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
//import APIkey from Async storage

export function Brew() {
  const [keyField, setKeyField] = useState("");
  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("my-key", value);
    } catch (e) {
      // saving error
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>brewdata here</Text>
      <OpenURLButton url={"https://breww.com/dashboard"}>
        https://breww.com
      </OpenURLButton>
    </View>
  );
}

// get request https://breww.com/api/
