import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  $mainColor: '#00AFFF',
  $secondColor: '#FFAF00',
  container: {
    flex: 1,
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#22b8cf',
  },
  loginBox: {
    flex: 1,
    height: 220,
    marginRight: 50,
    marginLeft: 50,
    backgroundColor: 'white',
    borderRadius: 7,
    elevation: 2,
    '@media ios': {
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1
    }
  },
  loginTitle : {
    margin : 2,
    textAlign : 'center',
    fontSize : 18,
    paddingTop : 10,
    paddingBottom :10,
    fontFamily: 'VazirBold',
  },
  inputGroups : {
    margin : 5,
    marginRight: 20,
    marginLeft: 20,
  },
  buttonGroups : {
    marginTop : 20,
    marginRight: 20,
    marginLeft: 20,
  },
  labelText : {
    textAlign: 'right',
    marginBottom : 10,
    color : '#5256c9',
    fontFamily: 'VazirMedium',
    overflow: 'hidden',
  },
  inputText : {
    textAlign : 'right',
    borderColor : 'rgba(0,0,0,.1)',
    borderWidth : 1,
    padding : 10,
    borderRadius: 2,
    height: 40,
    fontFamily: 'VazirThin',
    fontSize: 10
  },
  button: {
    backgroundColor: '$mainColor',
    padding: 10,
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 10,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width:0, height: 2},
    shadowOpacity: 0.1,
    overflow: 'hidden'
  },
  buttonText: {
    textAlign : 'center',
    color: 'white',
    fontFamily: 'Vazir',
  },
  headerTitle: {
    color: '$secondColor',
    fontSize: 18,
    fontFamily: 'Vazir',
    marginRight: 10,
  }
});

export default styles;