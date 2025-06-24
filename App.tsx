import "./global.css"
import React from 'react';
import WelcomeScreen from './src/features/Welcome/screens/WelcomeScreen';

import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import { View,Text, ActivityIndicator } from "react-native";

function App() {
  const [fontsLoaded, fontError] = useFonts({
    'FlorishaBold': require('./assets/fonts/florishabold-drnv7.otf'),
    'QurovaBold': require('./assets/fonts/qurova/QurovaDEMO-Bold-BF67a5c637eed62.otf'),
  
  });

  const onLayoutRootView = useCallback(() => {
    if (fontsLoaded) {
      console.log('¡Fuentes cargadas exitosamente!');
    }
    if (fontError) {
      console.error('Error al cargar alguna fuente:', fontError);
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return (
      <View className="flex-1 items-center justify-center bg-gray-900">
        <ActivityIndicator size="large" color="#ffffff" />
        <Text className="text-white mt-4">Cargando fuentes...</Text>
      </View>
    );
  }
  return (
      <WelcomeScreen />
  );
}

export default App;