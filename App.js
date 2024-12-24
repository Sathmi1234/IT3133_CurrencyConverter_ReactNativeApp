import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View } from 'react-native';
import { Button, TextInput, Text } from 'react-native-paper';
import { Picker } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Currency Converter</Text>
      
      <Text style={styles.label}>Amount:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter amount"
        keyboardType="numeric"
      />
      
      <Text style={styles.label}>From Currency:</Text>
      <Picker
        style={styles.picker}
      >
        <Picker.Item label="USD" value="USD" />
        <Picker.Item label="LKR" value="LKR" />
        <Picker.Item label="EUR" value="EUR" />
      </Picker>
      
      <Text style={styles.label}>To Currency:</Text>
      <Picker
        style={styles.picker}
      >
        <Picker.Item label="USD" value="USD" />
        <Picker.Item label="LKR" value="LKR" />
        <Picker.Item label="EUR" value="EUR" />
      </Picker>
      
      <Button title="Convert" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "100%",
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  picker: {
    height: 40,
    width: "100%",
    marginBottom: 20,
  },
  result: {
    fontSize: 18,
    color: "green",
    marginTop: 20,
  },
  error: {
    fontSize: 16,
    color: "red",
    marginTop: 20,
  },
});
