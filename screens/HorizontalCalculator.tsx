import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { CalculatorButton } from '../components/CalculatorButton';
import { StatusBar } from 'expo-status-bar';

export const HorizontalCalculator = () => {
  return (
    <View style={styles.root}>
      <StatusBar style="auto"/>
      <View style={styles.outputContainer}>
        <Text style={styles.output}>
          123,456,789
        </Text>
      </View>
      <View style={styles.row}>
        <CalculatorButton value="C" type="utility"/>
        <CalculatorButton value="+/-" type="utility"/>
        <CalculatorButton value="%" type="utility"/>
        <CalculatorButton value="/" type="operator"/>
      </View>
      <View style={styles.row}>
        <CalculatorButton value="7"/>
        <CalculatorButton value="8"/>
        <CalculatorButton value="9"/>
        <CalculatorButton value="x" type="operator"/>
      </View>
      <View style={styles.row}>
        <CalculatorButton value="4"/>
        <CalculatorButton value="5"/>
        <CalculatorButton value="6"/>
        <CalculatorButton value="-" type="operator"/>
      </View>
      <View style={styles.row}>
        <CalculatorButton value="1"/>
        <CalculatorButton value="2"/>
        <CalculatorButton value="3"/>
        <CalculatorButton value="+" type="operator"/>
      </View>
      <View style={styles.row}>
        <CalculatorButton value="0" type="number" size="lg"/>
        <CalculatorButton value="." type="number"/>
        <CalculatorButton value="=" type="operator"/>
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