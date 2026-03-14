 import React from 'react';
 import { View, Text } from 'react-native';
 import { OpenURLButton } from '../Components/OpenURLButton';
 
 
 export function Brew() {
   return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Text>brewdata here</Text>
       <OpenURLButton url={'https://breww.com/dashboard'}>https://breww.com</OpenURLButton>
     </View>
   );
 }
 