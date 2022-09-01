import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  const [result, setResult] =  React.useState(null);
  const [inputValue1, onChangeValue1] = React.useState(0);
  const [inputValue2, onChangeValue2] = React.useState(0);
  const [data, setData] = React.useState([]);

  const minusButtonPressed = () => {
    let calcResult = parseInt(inputValue1) - parseInt(inputValue2)
    setResult(calcResult)
    setData([...data, { key: inputValue1 + " - " + inputValue2 + " = " + calcResult }]);
  }

  const plusButtonPressed = () => {
    let calcResult = parseInt(inputValue1) + parseInt(inputValue2)
    setResult(calcResult)
    setData([...data, { key: inputValue1 + " + " + inputValue2 + " = " + calcResult }]);
  }

  return (
    <View style={styles.container}>
      <Text id="resultText" style = {styles.text}>
        Result: {result}
      </Text>
      <TextInput 
        id="inputValue1" 
        style={styles.input}
        onChangeText={onChangeValue1}
        value={inputValue1}
        keyboardType="numeric"
        placeholder='First value'
      />
      <TextInput 
        id="inputValue2" 
        style={styles.input}
        onChangeText={onChangeValue2}
        value={inputValue2}
        keyboardType="numeric"
        placeholder='Second value'
      />
      <View style={styles.buttonContainer}>
        <Button 
          style={styles.buttons}
          title="+"
          onPress={plusButtonPressed} 
        />
        <Button 
          style={styles.buttons}
          title="-" 
          onPress={minusButtonPressed} 
        />  
        <Button
          style={styles.buttons}
          title="History"
          onPress={() => navigation.navigate('History')}
        />
      </View>
    </View>
  );
}

function HistoryScreen({data}) {
  
  return (
    <View style={styles.container}>
      <Text>History</Text>
      <FlatList style={styles.list}
        data={data}
        renderItem={({ item }) =>
          <Text>{item.key}</Text>
        }
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Calculator" component={HomeScreen} />
        <Stack.Screen name="History" component={HistoryScreen} />
      </Stack.Navigator>
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
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'center'
  },
  input: {
    marginTop: 10,
    marginBottom: 5,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1 
  },
  buttons:{
    
  }
});
