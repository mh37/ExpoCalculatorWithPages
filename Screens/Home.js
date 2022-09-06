import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, TextInput, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Home = () => {

    const Stack = createNativeStackNavigator();
    const navigation = useNavigation();

    const [data, setData] = React.useState([]);
    const [result, setResult] =  React.useState(null)

    const [inputValue1, onChangeValue1] = React.useState(0);
    const [inputValue2, onChangeValue2] = React.useState(0);

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
            title="+"
            onPress={plusButtonPressed} 
          />
          <Button 
            title="-" 
            onPress={minusButtonPressed} 
          />  
        </View>
        <Stack.Navigator>
            <Stack.Screen  name="History" component={History} />
        </Stack.Navigator>
         
  
        <Text style = {styles.text}>
          History
        </Text>
        <FlatList style={styles.list}
          data={data}
          renderItem={({ item }) =>
            <Text>{item.key}</Text>
          }
          extraData={result}
        />
      </View>
    )
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


export default Home