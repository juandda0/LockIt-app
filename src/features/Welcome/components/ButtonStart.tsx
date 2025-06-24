import { View, Text, Alert } from "react-native";
import ButtonAnimated from "../../../components/ButtonAnimated";
const generatePassword = () => {
  Alert.alert("Password:");
};
  
function ButtonStart() {
  return (
    <View className="flex justify-center items-center">
      <ButtonAnimated
        onPress={generatePassword}
        className="py-3 px-12 bg-gray-50 rounded-lg">
        <Text className="text-gray-900 font-bold">Get started</Text>
      </ButtonAnimated>
    </View>
  );
}

export default ButtonStart;