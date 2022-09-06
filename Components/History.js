import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function HistoryScreen({ route }) {
    console.log(route.params);
    const  {data} = route.params;
    return (
      <View style={styles.container}>
        <Text style = {styles.text}>
          History
        </Text>
        <FlatList style={styles.list}
          data={data}
          renderItem={({ item }) =>
            <Text>{item.key}</Text>
          }
        />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });