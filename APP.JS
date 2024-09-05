import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Importação das telas
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import ClientScreen from './screens/ClientScreen';
import TransactionsScreen from './screens/TransactionsScreen';
import ExpenseCalculatorScreen from './screens/ExpenseCalculatorScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const DashboardTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === 'Dashboard') {
          iconName = 'home';
        } else if (route.name === 'Clientes') {
          iconName = 'people';
        } else if (route.name === 'Transações') {
          iconName = 'cash';
        } else if (route.name === 'Calculadora') {
          iconName = 'calculator';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}
  >
    <Tab.Screen name="Dashboard" component={DashboardScreen} />
    <Tab.Screen name="Clientes" component={ClientScreen} />
    <Tab.Screen name="Transações" component={TransactionsScreen} />
    <Tab.Screen name="Calculadora" component={ExpenseCalculatorScreen} />
  </Tab.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dashboard"
          component={DashboardTabs}
          options={{ title: 'ContabilidadeApp' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
