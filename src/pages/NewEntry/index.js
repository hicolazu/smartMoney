import React from 'react';
import {StyleSheet, SafeAreaView, Text, View} from 'react-native';

import BalanceLabel from '../../components/BalanceLabel';
import NewEntryForm from '../../components/NewEntryForm';

const NewEntry = ({navigation}) => {
  const currentBalance = '$2.064,69';
  return (
    <SafeAreaView style={styles.container}>
      <BalanceLabel currentBalance={currentBalance} />
      <NewEntryForm navigation={navigation} />
    </SafeAreaView>
  );
};

export default NewEntry;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
