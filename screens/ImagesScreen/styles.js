import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  wrapper: {
    paddingHorizontal: 24,
    width: '100%',
    flexGrow: 1,
  },
  image: {
    width: '25%',
    height: '40%',
    backgroundColor: '#6dcfb6',
  },
  imageContainer: {
    width: '100%',
    height: 150,
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#6dcfb6',
    padding: 10,
    borderRadius: 20,
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: 'white',
  },
  dateText: {
    marginLeft: 20,
  },
});

export default styles;
