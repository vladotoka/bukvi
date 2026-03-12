import React from 'react';
import { View, Text } from 'react-native';

export function UselessInfo() {
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
