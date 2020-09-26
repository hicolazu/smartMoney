import React from 'react';
import {StyleSheet, Button, View, TextInput} from 'react-native';

const NewEntryForm = ({navigation}) => {
  return (
    <>
      <View>
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <Button title="Camera" onPress={() => {}} />
        <Button title="GPS" onPress={() => {}} />
      </View>
      <View>
        <Button
          title="Adicionar"
          onPress={() => {
            navigation.navigate('Report');
          }}
        />
        <Button title="Cancelar" onPress={() => navigation.goBack()} />
      </View>
    </>
  );
};

export default NewEntryForm;

const styles = StyleSheet.create({
  input: {
    borderColor: '#000',
    borderWidth: 1,
  },
});
