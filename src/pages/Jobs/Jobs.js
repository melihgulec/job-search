import React from 'react';
import {ActivityIndicator, FlatList, SafeAreaView, Text} from 'react-native';
import styles from './Jobs.styles';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import JobCard from '../../components/JobCard';

const Jobs = ({navigation}) => {
  const {data, error, loading} = useFetch(Config.API_JOBS_URL + '?page=8');

  const navigateJob = id => {
    navigation.navigate('JobDetail', {id: id});
  };

  const renderJobCards = ({item}) => {
    return <JobCard job={item} onPress={() => navigateJob(item.id)} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <FlatList data={data.results} renderItem={renderJobCards} />
      )}
    </SafeAreaView>
  );
};

export default Jobs;
