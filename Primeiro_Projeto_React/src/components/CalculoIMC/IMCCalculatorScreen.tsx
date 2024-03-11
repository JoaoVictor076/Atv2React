import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const IMCCalculatorScreen: React.FC = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const calculateIMC = () => {
    if (!weight || !height) {
      return;
    }

    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height) / 100; // Convert height to meters

    const imc = weightValue / (heightValue * heightValue);
    setResult(imc);
  };

  return (
    <View style={styles.container}>
      <Text>Weight (kg):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />

      <Text>Height (cm):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />

      <Button title="Calculate" onPress={calculateIMC} />

      {result !== null && (
        <Text style={styles.result}>Your IMC: {result.toFixed(2)}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  result: {
    marginTop: 16,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default IMCCalculatorScreen;
