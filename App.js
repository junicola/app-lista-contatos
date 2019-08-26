import PeoplePage from './src/screens/PeoplePage';
import {createStackNavigator, createAppContainer} from 'react-navigation';

const StackNavigator = createStackNavigator({
  'Main': {
    screen: PeoplePage
  }
});

const AppContainer = createAppContainer(StackNavigator);


export default AppContainer;