import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Jobs from './pages/Jobs/Jobs';
import FavoriteJobs from './pages/FavoriteJobs/FavoriteJobs';
import Texts from './constants/Texts';
import Colors from './constants/Colors';
import JobDetail from './pages/JobDetail';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FavoritesProvider from './context/FavoriteJobsProvider/Provider';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const JobDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: Colors.red,
      }}>
      <Drawer.Screen
        name="JobsDrawer"
        component={Jobs}
        options={{
          title: Texts.jobsPageHeaderTitle,
          headerTitleAlign: 'center',
          headerTintColor: Colors.red,
        }}
      />
      <Drawer.Screen
        name="FavoriteJobsPage"
        component={FavoriteJobs}
        options={{
          drawerLabel: Texts.favoriteJobsTitle,
          headerTitle: Texts.favoriteJobsTitle,
          headerTitleAlign: 'center',
          headerTintColor: Colors.red,
        }}
      />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <FavoritesProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="JobDrawer"
            component={JobDrawer}
            options={{headerShown: false}}
          />
          <Stack.Screen name="JobDetail" component={JobDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoritesProvider>
  );
};

export default App;
