import React from 'react';
import {View, Text, Platform} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../config/colors';
import styles, {ICON_SIZE} from './styles';

export const Row = ({label, body, actions = []}) => {
  return (
    <View style={styles.actionRow}>
      <View style={styles.actionInfo}>
        <Text style={styles.actionLabel}>{label}</Text>
        <Text style={styles.actionBody}>{body}</Text>
      </View>
      <View style={styles.actionIcons}>
        {actions.map((action, index) => (
          <TouchableOpacity onPress={action.onPress} key={index}>
            <Icon
              color={colors.link}
              size={ICON_SIZE}
              style={styles.actionIcon}
              name={`${Platform.OS === 'ios' ? 'ios' : 'md'}-${action.icon}`}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
