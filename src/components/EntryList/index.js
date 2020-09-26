import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

import EntryListItem from './EntryListItem';

const EntryList = ({entries}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Últimos lançamentos </Text>
      <FlatList
        data={entries}
        renderItem={({item}) => (
          <Text style={styles.entry}>
            - {item.description}: ${item.amount}{' '}
          </Text>
        )}
      />
    </View>
  );
};

export default EntryList;

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
