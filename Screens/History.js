import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';


const History = () => {
    return (
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text>History</Text>
            <FlatList style={styles.list}
            data={data}
            renderItem={({ item }) =>
                <Text>{item.key}</Text>
            }
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

export default History