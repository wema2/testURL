import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
// import MemoCreateScreen from './src/screens/MemoCreateScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

const App = createStackNavigator({
  Home:       { screen: MemoListScreen },
  Login:      { screen: LoginScreen },
  Signup:     { screen: SignupScreen },
  MemoDetail: { screen: MemoDetailScreen },
  MemoEdit:   { screen: MemoEditScreen },
  // MemoCreate: { screen: MemoCreateScreen },
}, {
  defaultNavigationOptions: {
    headerTitle: 'Memott',
    headerTintColor: '#fff',
    headerBackTitle: null,
    headerStyle: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      backgroundColor: '#265366',
      // ...Platform.select({
      //   android: {
      //     height: 80,
      //     paddingTop: 20,
      //   },
      // }),
    },
    headerTitleStyle: {
      color: '#fff',
    },
  },
});

export default createAppContainer(App);
