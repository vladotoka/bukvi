import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from '@react-navigation/elements';
import { Link } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Calendar } from './Calendar';
import { HomeScreen } from './HomeScreen';
import { UselessInfo } from './UselessInfo';
import { Dumi } from './Dumi';


// function Dumi() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>А́ а́ Ъ́ ъ́ О́ о́ У́ у́ е́ Е́ И́ и́ Ю́ ю́ Я́ я́</Text>
//     </View>
//   );
// }

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
      <Stack.Screen name="Dumi" component={Dumi} options={{ title: 'Думи' }} />

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
