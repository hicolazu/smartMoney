import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalencePanelChart';

import {saveEntry} from '../../services/Entries';

const BalancePanel = ({navigation, currentBalance}) => {
  const save = () => {
    saveEntry();
  };

  return (
    <View style={styles.container}>
      <BalancePanelLabel currentBalance={currentBalance} />
      <Button title="+" onPress={save} />
      <BalancePanelChart />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});

export default BalancePanel;
