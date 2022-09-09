import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './JobCard.style';
import Button from '../Button/Button';
import Texts from '../../constants/Texts';

const JobCard = ({job, onPress, isFavorite, removeButtonPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{job.categories[0].name}</Text>
        <Text style={styles.description}>{job.company.name}</Text>
        <View style={styles.locationContainer}>
          <Text style={styles.locationText}>{job.locations[0].name}</Text>
        </View>
        <View style={styles.levelContainer}>
          <Text style={styles.levelText}>{job.levels[0].name}</Text>
        </View>
        {isFavorite && (
          <Button text={Texts.remove} onPress={removeButtonPress} />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default JobCard;
