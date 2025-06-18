import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Tipo para los parámetros de navegación
type RootStackParamList = {
  Passwords: undefined;
  Generate: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Passwords'>;

const PasswordScreen: React.FC<Props> = ({ navigation }) => {
  return (
    // Using ScrollView to make it scrollable if content grows (good practice)
    <ScrollView className="flex-1 bg-gray-100">
      <View className="flex-1 items-center px-6 py-10">
        {/* Header Section */}
        <View className="w-full items-center mb-8">
          <Text className="text-4xl font-extrabold text-gray-800 text-center mb-2">
            Mis Contraseñas
          </Text>
          <Text className="text-lg text-gray-600 text-center leading-6">
            Gestiona y guarda tus contraseñas de forma segura y organizada.
          </Text>
        </View>

        {/* Placeholder for future password list */}
        <View className="w-full bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-200">
          <Text className="text-xl font-semibold text-gray-700 mb-4">
            No tienes contraseñas guardadas
          </Text>
          <Text className="text-base text-gray-500 mb-6">
            Parece que aún no has añadido ninguna contraseña. ¡Empieza a generar
            o añadir las tuyas ahora!
          </Text>
          {/* Main Call to Action Button */}
          <TouchableOpacity
            className="flex-row items-center justify-center px-6 py-4 bg-indigo-600 rounded-xl shadow-md active:bg-indigo-700"
            onPress={() => navigation.navigate('Generate')}
          >
            <Text className="text-white text-lg font-bold">Generar Nueva Contraseña</Text>
          </TouchableOpacity>
        </View>

        {/* You could add other sections here, e.g., "Recently Used" */}
        {/* <View className="w-full bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
          <Text className="text-xl font-semibold text-gray-700 mb-4">
            Contraseñas Recientes
          </Text>
          <Text className="text-base text-gray-500">
            Aún no hay actividad reciente.
          </Text>
        </View> */}
      </View>
    </ScrollView>
  );
};

export default PasswordScreen;