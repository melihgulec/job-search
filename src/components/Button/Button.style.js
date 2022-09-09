import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
import TextStyles from '../../constants/TextStyles';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.red,
    padding: 8,
    borderRadius: 8,
    height: 45,
    flex: 1,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    fontWeight: 'bold',
    fontSize: TextStyles.subtitle,
    color: Colors.white,
    marginLeft: 5,
  },
});
