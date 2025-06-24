import { View, SafeAreaView } from 'react-native';
import LockImage from '../components/LockImage';
import WelcomeMessage from '../components/WelcomeMessage';
import ButtonStart from '../components/ButtonStart';

function WelcomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#121212]">
      <View className="flex-1 justify-center items-center">
        <View className="items-center">
          <LockImage />
          <WelcomeMessage />
        </View>
      </View>

      <View className="items-center mb-20">
        <ButtonStart />
      </View>
    </SafeAreaView>
  );
}

export default WelcomeScreen;
