// src/navigation/AppNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import  WelcomeScreen  from '../features/Welcome/screens/WelcomeScreen';

const AppStack = createNativeStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="GeneratePassword" component={WelcomeScreen} />
    </AppStack.Navigator>
  );
};

export default AppNavigator;