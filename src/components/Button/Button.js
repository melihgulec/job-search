import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../constants/Colors';

import styles from './Button.style';

const Button = ({text, icon, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name={icon} size={30} color={Colors.white} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
