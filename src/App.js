import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { CategoriesPage, MealDetail, MealList } from "./pages";

const Stack = createStackNavigator();

function CategoryDetailsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='MealList' component={MealList} />
      <Stack.Screen name='MealDetail' component={MealDetail} />
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
