
  import { useState } from "react";
  import {styles} from './css';
  
  import {
    View,
     
    TextInput,
    Button,
    
  } from "react-native";
  
export default function AddTasks(props) {
    const [task, setTask] = useState("");
    
    return (
      <View style={styles.container}>
         <TextInput
          style={styles.txtInput}
          onChangeText={(e) => {
            setTask(e);
          }}
          value={task}
          placeholder={"Enter Your Task"}
        />
    
        <Button
          title="addTask"
          onPress={() => {
            props.addTask(task);
            setTask("");

          }}
        />
        
      </View>
    );
  }
