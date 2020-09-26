import React from 'react';
import {StyleSheet, View} from 'react-native';

import EntrySummaryChart from './EntrySummaryChart';
import EntrySummaryList from './EntrySummaryList';

const EntrySummary = ({entriesGrouped}) => {
  return (
    <View style={styles.container}>
      <EntrySummaryChart />
      <EntrySummaryList entriesGrouped={entriesGrouped} />
    </View>
  );
};

export default EntrySummary;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
