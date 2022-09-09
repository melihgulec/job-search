import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
import TextStyles from '../../constants/TextStyles';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    justifyContent: 'center',
  },
  locationsText: {
    fontWeight: 'bold',
    color: Colors.red,
    marginVertical: 5,
  },
  locationDetailText: {
    fontWeight: 'bold',
    color: Colors.black,
  },
  jobDetailText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: TextStyles.title,
    color: Colors.black,
  },
  jobText: {
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: TextStyles.bigger,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});
