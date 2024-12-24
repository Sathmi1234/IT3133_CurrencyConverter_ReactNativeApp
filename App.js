import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View } from 'react-native';
import { Button, TextInput, Text } from 'react-native-paper';
import { Picker } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text variant="displayLarge">Currency Converter</Text>
      </View>
      <Text >Amount:</Text>
      <TextInput
        placeholder="Enter amount"
        keyboardType="numeric"
      />
      
      <Text >From Currency:</Text>
      <Picker>
        <Picker.Item label="USD" value="USD" />
        <Picker.Item label="LKR" value="LKR" />
        <Picker.Item label="EUR" value="EUR" />
      </Picker>
      
      <Text>To Currency:</Text>
      <Picker>
        <Picker.Item label="USD" value="USD" />
        <Picker.Item label="LKR" value="LKR" />
        <Picker.Item label="EUR" value="EUR" />
      </Picker>
      
      <Button title="Convert"/>
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
  header:{
    alignItems:'center'
  }
});
