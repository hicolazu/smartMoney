import React from 'react';
import {SafeAreaView, StyleSheet, View, Button, Picker} from 'react-native';

import BalanceLabel from '../../components/BalanceLabel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

const Report = ({navigation}) => {
  const currentBalance = '$2.064,49';

  const entries = [
    {key: '1', description: 'Padaria Asa Branca', amount: 10},
    {key: '2', description: 'Supermercado Isadora', amount: 190},
    {key: '3', description: 'Posto Ipiranga', amount: 190},
  ];

  const entriesGrouped = [
    {key: '1', description: 'Alimentação', amount: 200},
    {key: '2', description: 'Combustível', amount: 12},
    {key: '3', description: 'Aluguel', amount: 120},
    {key: '4', description: 'Lazer', amount: 250},
    {key: '5', description: 'Outros', amount: 1200},
  ];

  return (
    <SafeAreaView>
      <BalanceLabel currentBalance={currentBalance} />
      <View>
        <Picker selectedValue={'all'}>
          <Picker.Item label="Todas Categorias" value="all">
            {' '}
          </Picker.Item>
          <Picker.Item label="Últimos 7 dias" value="last">
            {' '}
          </Picker.Item>
        </Picker>
      </View>
      <EntrySummary entriesGrouped={entriesGrouped} />
      <EntryList entries={entries} />
      <View style={{flexDirection: 'row'}}>
        <Button title="Salvar" onPress={() => {}} />
        <Button
          title="Fechar"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Report;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
