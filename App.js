import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { Calendar } from "./Calendar";
import { HomeScreen } from "./HomeScreen";
import { Dumi } from "./Screens/Dumi";
import { UselessInfo } from "./UselessInfo";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: "aquamarine" },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Начало" }}
      />
      <Stack.Screen
        name="Calendar"
        component={Calendar}
        options={{ title: "Календар" }}
      />
      <Stack.Screen
        name="UselessInfo"
        component={UselessInfo}
        options={{ title: "Полезно знание" }}
      />
      <Stack.Screen name="Dumi" component={Dumi} options={{ title: "Думи" }} />
    </Stack.Navigator>
  );
}

export default function App() {
  const [loaded, error] = useFonts({
    "Shafarik-Regular": require("./assets/fonts/Shafarik-Regular.otf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
