import React, { useRef } from "react";
import { Image, View } from "react-native";
import LottieView from "lottie-react-native";
import animationData from "../../../../assets/images/hero-animation.json";

function LockImage() {
  const animationRef = useRef<LottieView>(null);

  return (
      <LottieView
        ref={animationRef}
        source={animationData}
        autoPlay
        loop={false}
        style={{ width: 400, height: 600 }}
        resizeMode="contain"
        speed={1}
        
      />
  );
}

export default LockImage;
