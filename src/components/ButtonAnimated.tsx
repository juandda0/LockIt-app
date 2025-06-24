import { ReactElement } from "react";
import {
  TouchableOpacity, // Cambiamos de Pressable a TouchableOpacity
} from "react-native";
import type { ReactNode } from "react";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

import { twMerge } from "tailwind-merge";

interface ButtonAnimatedProps {
  children: ReactNode;
  onPress: () => void;
  className?: string;
  // Puedes añadir activeOpacity si quieres controlar la opacidad al presionar
  activeOpacity?: number;
}

const ButtonAnimated = ({
  children,
  onPress,
  className,
  activeOpacity = 0.8, 
}: ButtonAnimatedProps) => {
  const scale = useSharedValue(1);

  const handlePressIn = () => {
    scale.value = withSpring(0.95);
  };
  const handlePressOut = () => {
    scale.value = withSpring(1);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  return (
    
    <TouchableOpacity
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={activeOpacity} 
    >
      <Animated.View
        style={animatedStyle}
        className={className}
      >
        {children}
      </Animated.View>
    </TouchableOpacity>
  );
};

export default ButtonAnimated;