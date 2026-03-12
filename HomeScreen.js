import { Button } from '@react-navigation/elements';
import { Link } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';

export function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>А́ а́ Ъ́ ъ́ О́ о́ У́ у́ е́ Е́ И́ и́ Ю́ ю́ Я́ я́</Text>
      <Link screen="Calendar">Календар</Link>
      <Button screen="UselessInfo">Знание</Button>
      <Button screen="Dumi">Думи</Button>

    </View>
  );
}
