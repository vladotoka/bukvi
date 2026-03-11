import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Link } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import { Calendar } from './Calendar';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>А́ а́ Ъ́ ъ́ О́ о́ У́ у́ е́ Е́ И́ и́ Ю́ ю́ Я́ я́</Text>
      <Link screen="Calendar">Календар</Link>
      <Button screen="UselessInfo">Знание</Button>
    </View>
  );
}

function UselessInfo() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Списък книги от Рик и Морти 6 х1</Text>
      <Text>"Барнс и Нобъл".</Text>
      <Text>"Четири споразумения",</Text>
      <Text>148</Text>
      <Text>'00:10:32,798 -- `{'>'}` 00:10:35,634'</Text>
      <Text>"Яж, моли се и обичай",</Text>
      <Text>'"Черният рицар се завръща".'</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: 'aquamarine' },
       }}
    >
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Начало' }} />
      <Stack.Screen name="Calendar" component={Calendar} options={{ title: 'Календар' }} />
      <Stack.Screen name="UselessInfo" component={UselessInfo} options={{ title: 'Полезно знание' }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
