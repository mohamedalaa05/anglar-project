import { styles } from "./components/css";
import AddTasks from "./components/addTasks";
import { useState } from "react";
import { View, Text, Button } from "react-native";

export default function App() {
  const [tasks, setTasks] = useState([]);

  let check_item = (item) => {
    let items = [];
    for (let i of tasks) {
      if (i != item) {
        items.push(i);
      }
    }
    setTasks(items);
  };

  return (
    <View style={styles.container}>
      <AddTasks
        addTask={(data) => {
          setTasks([...tasks, data]);
        }}
      />
      {tasks.map((item, index) => {
        return (
          <Text style={styles.txtStyle} key={index}>
            idx:{index} task : {item}
            <Button
              title="remove"
              onPress={(item) => {
                check_item(item);
                // setTasks(tasks.filter((data)=>{
                //   data.id!==item.id;
                // }))
              }}
            />
          </Text>
        );
      })}
      <Button
        title="Clear"
        onPress={() => {
          setTasks([]);
        }}
      />
    </View>
  );
}
