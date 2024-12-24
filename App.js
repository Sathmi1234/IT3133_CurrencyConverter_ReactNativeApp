import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Text, Picker } from "react-native";

export default function App() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("LKR");
  const [convertedAmount, setConvertedAmount] = useState("");
  const [error, setError] = useState("");

  const conversionRates = {
    USD: { LKR: 320, EUR: 0.85 },
    LKR: { USD: 0.0031, EUR: 0.0026 },
    EUR: { USD: 1.18, LKR: 380 },
  };

  const convertCurrency = () => {
    if (!amount || isNaN(amount)) {
      setError("Please enter a valid amount");
      return;
    }
    setError("");
    const rate = conversionRates[fromCurrency][toCurrency];
    const result = parseFloat(amount) * rate;
    setConvertedAmount(result.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Currency Converter</Text>
      
      <Text style={styles.label}>Amount:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      
      <Text style={styles.label}>From Currency:</Text>
      <Picker
        selectedValue={fromCurrency}
        style={styles.picker}
        onValueChange={(itemValue) => setFromCurrency(itemValue)}
      >
        <Picker.Item label="USD" value="USD" />
        <Picker.Item label="LKR" value="LKR" />
        <Picker.Item label="EUR" value="EUR" />
      </Picker>
      
      <Text style={styles.label}>To Currency:</Text>
      <Picker
        selectedValue={toCurrency}
        style={styles.picker}
        onValueChange={(itemValue) => setToCurrency(itemValue)}
      >
        <Picker.Item label="USD" value="USD" />
        <Picker.Item label="LKR" value="LKR" />
        <Picker.Item label="EUR" value="EUR" />
      </Picker>
      
      <Button title="Convert" onPress={convertCurrency} />
      
      {convertedAmount ? (
        <Text style={styles.result}>Converted Amount: {convertedAmount} {toCurrency}</Text>
      ) : null}
      
      {error ? <Text style={styles.error}>{error}</Text> : null}
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
