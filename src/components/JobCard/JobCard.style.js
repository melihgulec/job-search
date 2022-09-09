import {StyleSheet} from 'react-native';
import TextStyles from '../../constants/TextStyles';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    borderColor: '#b0b0b0',
    borderWidth: 1,
    margin: 5,
    padding: 5,
    borderRadius: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: TextStyles.title,
    color: Colors.black,
  },
  description: {
    fontsize: TextStyles.subtitle,
    color: Colors.black,
    marginVertical: 5,
  },
  locationContainer: {
    alignSelf: 'flex-start',
    padding: 5,
    borderRadius: 100,
    backgroundColor: Colors.red,
  },
  locationText: {
    fontWeight: 'bold',
    color: Colors.white,
  },
  levelContainer: {
    alignItems: 'flex-end',
  },
  levelText: {
    fontWeight: 'bold',
    color: Colors.red,
  },
});
