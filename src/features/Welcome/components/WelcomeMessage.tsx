// src/features/GeneratePassword/components/WelcomeText.tsx
import React from 'react';
import { Text, TextProps } from 'react-native';
  import { View } from 'react-native';


function WelcomeText () {

  return (
    <View className='flex justify-center items-center'>
      <Text className='text-center text-3xl text-gray-400'>Welcome</Text>
      <Text className='text-center text-4xl text-gray-200 font-bold'>Need a password? {'\n'}
                                                                        Let’s keep it safe
      </Text>
    </View>
  );
};

export default WelcomeText;