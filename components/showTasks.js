
  import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import {styles} from './css';

import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
} from "react-native";

export default function  ShowTasks() {
  const [text, setText] = useState("");
   const [copy, setCopy] = useState("");
   let [counter, setCounter] = useState(1);
 
  return (
    <View style={styles.container}>
       <TextInput
        style={styles.txtInput}
        onChangeText={(e) => {
          setText(e);
        }}
        value={text}
      />
  
      <Button
        title="Clear"
        onPress={() => {
          setText("");
          setCopy("");

        }}
      />
      
      <Button
        title="Fill"
        onPress={() => {
          setCopy(text);
        }}
      />
    <Text style={styles.txtStyle}>{copy}</Text>

      <StatusBar style="auto" />
      <ScrollView>
        
       
      </ScrollView>
    </View>
  );
}
 