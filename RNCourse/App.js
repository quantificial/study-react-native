import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {

  // React Hook
  const [message, setMessage] = useState('This is Testing!!!');

  const [dialogState, setDialogState] = useState(true);

  // On Press Handler
  const onPressEventHandler = e => {
    setMessage('Ah haaa !');
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text style={styles.dummyText}>{message}</Text>
      <Button title='Tap me!' onPress={onPressEventHandler} />


      <StatusBar style="auto" />
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
  dummyText: {
    margin: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 10,
    backgroundColor: 'green',
    color: 'white'
  }
});
