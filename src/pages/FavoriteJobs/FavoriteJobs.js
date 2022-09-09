import React from 'react';
import {FlatList, SafeAreaView, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import JobCard from '../../components/JobCard';
import styles from './FavoriteJobs.styles';
import {REMOVE_FROM_LIST} from '../../context/FavoriteJobsProvider/FavoriteTypes';

const FavoriteJobs = ({navigation}) => {
  const favoritesList = useSelector(s => s.favoritesList);

  const dispatch = useDispatch();

  const navigateJobDetail = id => {
    navigation.navigate('JobDetail', {id: id});
  };

  const favoriteCard = ({item}) => {
    return (
      <JobCard
        job={item}
        isFavorite
        removeButtonPress={() => removeFavorite(item)}
        onPress={() => navigateJobDetail(item.id)}
      />
    );
  };

  const removeFavorite = item => {
    dispatch({type: REMOVE_FROM_LIST, payload: item});
  };

  return (
    <SafeAreaView>
      <FlatList data={favoritesList} renderItem={favoriteCard} />
    </SafeAreaView>
  );
};

export default FavoriteJobs;
