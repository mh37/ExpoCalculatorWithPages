import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function HomeScreen({ navigation }) {

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
  
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
      buttonContainer: {
        flexDirection: "row",
        justifyContent: 'space-around',
        marginHorizontal: 25
      },
      text: {
        marginTop: 50,
        marginBottom: 5,
      },
      button: {
        width: '30%',
        height: 40
      },
      input: {
        marginBottom: 5,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1 
      }
    });
  
  
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
            style={styles.button}
          />
          <Button 
            title="-" 
            onPress={minusButtonPressed} 
            style={styles.button}
          />  
          <Button
          title="History"
          style={styles.button}
          onPress={() => 
            navigation.navigate('History', {data})
          }
        />
        </View>
      </View>
    );
  }
  