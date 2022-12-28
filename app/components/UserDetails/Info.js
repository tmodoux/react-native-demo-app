import moment from 'moment/moment';
import React from 'react';
import {View} from 'react-native';
import {capitalizeFirstLetter} from '../../helpers/string';
import {Row} from './Row';
import styles from './styles';

const Info = ({login, dob, location, registered}) => {
  return (
    <View style={styles.infoContainer}>
      <Row label="city" body={capitalizeFirstLetter(location.city)} />
      <Row label="birthday" body={moment(dob).format('MMM Do, YYYY')} />
      <Row
        label="registered"
        body={moment(registered).format('MMM Do, YYYY')}
      />
      <Row label="username" body={login.username} />
    </View>
  );
};

export default Info;
