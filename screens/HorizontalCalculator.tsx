import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { CalculatorButton } from '../components/CalculatorButton';
import { StatusBar } from 'expo-status-bar';
import { useCalculator } from '../hooks/useCalculator';

export const HorizontalCalculator = () => {
  const {value, dispatch} = useCalculator();
  return (
    <View style={styles.root}>
      <StatusBar style="auto"/>
      <View style={styles.outputContainer}>
        <Text style={styles.output}>
          {value}
        </Text>
      </View>
      <View style={styles.row}>
        <CalculatorButton onPress={dispatch} value="C" type="utility"/>
        <CalculatorButton onPress={dispatch} value="+/-" type="utility"/>
        <CalculatorButton onPress={dispatch} value="%" type="utility"/>
        <CalculatorButton onPress={dispatch} value="/" type="operator"/>
      </View>
      <View style={styles.row}>
        <CalculatorButton onPress={dispatch} value="7"/>
        <CalculatorButton onPress={dispatch} value="8"/>
        <CalculatorButton onPress={dispatch} value="9"/>
        <CalculatorButton onPress={dispatch} value="x" type="operator"/>
      </View>
      <View style={styles.row}>
        <CalculatorButton onPress={dispatch} value="4"/>
        <CalculatorButton onPress={dispatch} value="5"/>
        <CalculatorButton onPress={dispatch} value="6"/>
        <CalculatorButton onPress={dispatch} value="-" type="operator"/>
      </View>
      <View style={styles.row}>
        <CalculatorButton onPress={dispatch} value="1"/>
        <CalculatorButton onPress={dispatch} value="2"/>
        <CalculatorButton onPress={dispatch} value="3"/>
        <CalculatorButton onPress={dispatch} value="+" type="operator"/>
      </View>
      <View style={styles.row}>
        <CalculatorButton onPress={dispatch} value="0" type="number" size="lg"/>
        <CalculatorButton onPress={dispatch} value="." type="number"/>
        <CalculatorButton onPress={dispatch} value="=" type="operator"/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexGrow: 1,
  },
  root: {
    flex: 1,
    backgroundColor: "#000000",
    justifyContent: "flex-end"
  },
  outputContainer: {
    margin: 10,
    height: '25%',
    justifyContent: 'flex-end'
  },
  output: {
    color: "#fff",
    fontSize: 60,
    fontWeight: '300',
    textAlign: "right",
    marginRight: 20,
  }
});