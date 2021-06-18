import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: 'white',
  },
  wrapper: {
    paddingHorizontal: 24,
    width: '100%',
    height: '100%',
    flex: 1,
  },
  preview: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    paddingBottom: 20,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#6dcfb6',
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: 'white'
  },
});

export default styles;
