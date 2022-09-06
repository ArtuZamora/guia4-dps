/** 
* @format
* @flow strict-local 
*/

import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from 'react-native';
import colors from './src/utils/colors';
import Form from './src/components/Form';
import Footer from './src/components/Footer';
import Result from './src/components/Result';

export default function App() {
  const [name, setName] = useState(null);
  const [salary, setSalary] = useState(null);
  const [deductions, setDeductions] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (name && salary)
      calculate();
    else
      reset();
  },
    [name, salary]);

  const calculate = () => {
    reset();
    if (!name) {
      setErrorMessage('Ingrese el nombre del empleado');
    }
    else if (!salary) {
      setErrorMessage('Ingrese el salario base');
    }
    else {
      const isss = salary * .03;
      const afp = salary * .04;
      const rent = salary * .05;
      const total = salary - isss - afp - rent;
      setDeductions({
        isss: isss.toFixed(2),
        afp: afp.toFixed(2),
        rent: rent.toFixed(2),
      })
      setTotal(total.toFixed(2));
    }
  };
  const reset = () => {
    setErrorMessage('');
    setTotal(null);
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.Header}>
        <Text style={styles.HeadApp}>Cotizador de salario</Text>
        <Form
          setName={setName}
          setSalary={setSalary}
        />
      </SafeAreaView>
      <Result name={name} salary={salary} deductions={deductions} total={total} errorMessage={errorMessage} />
      <View>
        <Text></Text>
      </View>
      <Footer></Footer>
    </>);
}

const styles = StyleSheet.create({
  Header: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center'
  },
  HeadApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15
  }
})
