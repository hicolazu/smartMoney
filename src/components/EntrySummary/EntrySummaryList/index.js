import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

const EntrySummaryList = ({entriesGrouped}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Categorias </Text>
      <FlatList
        data={entriesGrouped}
        renderItem={({item}) => (
          <Text style={styles.entry}>
            {' '}
            - {item.description}: ${item.amount}{' '}
          </Text>
        )}
      />
    </View>
  );
};

export default EntrySummaryList;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginVertical: 10,
  },
  entry: {},
});
