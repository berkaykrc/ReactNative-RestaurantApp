import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { CategoriesPage, CategoryList, CategoryDetail } from "./pages";

const Stack = createStackNavigator();

function CategoryDetailsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='CategoryList' component={CategoryList} />
      <Stack.Screen name='CategoryDetail' component={CategoryDetail} />
    </Stack.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Categories' component={CategoriesPage} />
        <Stack.Screen name='CategoryDetailsStack' component={CategoryDetailsStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
