import PeoplePage from './src/screens/PeoplePage';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import PersonDetail from './src/screens/PersonDetails'; 
import capitalizeFirstLetter from './src/util/capitalizeFirstLetter';

const StackNavigator = createStackNavigator({
  'Main': {
    screen: PeoplePage
  },
  'PersonDetail': {
    screen: PersonDetail,
    navigationOptions: ({navigation}) => {
      const personName = navigation.state.params.person.name.first
      return({
        title: capitalizeFirstLetter(personName),
        headerTitleStyle: {
          color: 'white',
          fontSize: 30,
        }
      })
    }
  }
}, 
{
  defaultNavigationOptions: {
    title: 'Contatos',
    headerTitleStyle: {
      color: 'white',
      fontSize: 30,
      flexGrow: 1,
      textAlign: 'center'
    },
    headerStyle: {
      backgroundColor: '#f8c5fc',
      borderBottomWidth: 1,
      borderBottomColor: '#C5C5C5',
    }
  }

}); 

const AppContainer = createAppContainer(StackNavigator);


export default AppContainer;