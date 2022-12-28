import React from 'react';
import {View} from 'react-native';
import {Row} from './Row';
import {toPhoneNumber} from '../../helpers/string';
import styles from './styles';

const Actions = ({email, cell, phone}) => {
  return (
    <View style={styles.actionContainer}>
      <Row
        label="email"
        body={email}
        actions={[{onPress: () => null, icon: 'mail'}]}
      />
      <Row
        label="cell"
        body={toPhoneNumber(cell)}
        actions={[
          {onPress: () => null, icon: 'call'},
          {
            onPress: () => null,
            icon: 'chatbox',
          },
        ]}
      />
      <Row
        label="home"
        body={toPhoneNumber(phone)}
        actions={[{onPress: () => null, icon: 'call'}]}
      />
    </View>
  );
};

export default Actions;
