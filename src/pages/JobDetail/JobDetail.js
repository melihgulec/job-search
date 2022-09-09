import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import styles from './JobDetail.styles';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import Texts from '../../constants/Texts';
import RenderHtml from 'react-native-render-html';
import Button from '../../components/Button/Button';
import {useDispatch, useSelector} from 'react-redux';
import {
  ADD_LIST,
  REMOVE_FROM_LIST,
} from '../../context/FavoriteJobsProvider/FavoriteTypes';

const JobDetail = ({route, navigation}) => {
  const {id} = route.params;
  const url = Config.API_JOBS_URL + '/' + id;

  const {data, error, loading} = useFetch(url);

  const favoritesList = useSelector(s => s.favoritesList);
  let isFavorite = favoritesList.find(x => x.id === data.id);

  const screenSize = Dimensions.get('window');

  const dispatch = useDispatch();

  const addFavorite = () => {
    dispatch({type: ADD_LIST, payload: data});
  };

  const removeFavorite = () => {
    dispatch({type: REMOVE_FROM_LIST, payload: data});
  };

  if (error) return <Text>{error}</Text>;

  useEffect(() => {
    navigation.setOptions({
      title: loading ? Texts.jobDetailPageHeaderTitle : data.name,
    });
  }, [loading]);

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <ScrollView>
          <Text style={styles.jobText}>{data.name}</Text>
          <Text style={styles.locationsText}>
            Locations:{' '}
            <Text style={styles.locationDetailText}>
              {data.locations[0].name}
            </Text>
          </Text>
          <Text style={styles.locationsText}>
            Job Level:{' '}
            <Text style={styles.locationDetailText}>{data.levels[0].name}</Text>
          </Text>
          <Text style={styles.jobDetailText}>Job Detail</Text>
          <RenderHtml
            source={{html: data.contents}}
            contentWidth={screenSize.width}
          />
        </ScrollView>
      )}
      {!loading && (
        <View style={styles.buttonContainer}>
          <Button icon={'logout'} text={Texts.submit} />
          <Button
            icon={!isFavorite ? 'heart' : 'heart-off'}
            text={isFavorite ? Texts.remove : Texts.favoriteJob}
            onPress={isFavorite ? removeFavorite : addFavorite}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default JobDetail;
