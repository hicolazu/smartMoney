// Domain Driven Desing (DDD)
import {Alert} from 'react-native';
import {getRealm} from './Realm';

export const saveEntry = async (/*entry*/) => {
  const realm = await getRealm();
  let data = {};

  try {
    realm.write(() => {
      data = {
        id: '123',
        amount: 1,
        entryAt: new Date(),
        isInit: false,
      };
      realm.create('Entry', data, true);
    });
  } catch (e) {
    console.error('Deu erro!', e.message);
    Alert.alert('Erro', 'Erro ao salvos os dados de lançamento!');
  }

  return data;
};
