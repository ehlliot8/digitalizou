import { Camera } from "@tamagui/lucide-icons"
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Button, Paragraph, YStack, Image } from "tamagui"

export default function BtnCamCapture() {


  const [image, setImage] = useState('');
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    // let result = await ImagePicker.launchImageLibraryAsync({
    //   mediaTypes: ImagePicker.MediaTypeOptions.All,
    //   allowsEditing: true,
    //   aspect: [4, 3],
    //   quality: 1,
    // });
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <YStack>

      <Button
        size={'$10'}
        icon={Camera}
        onPress={pickImage}
      >

      </Button>
      <YStack>

        {image && <Image source={{ uri: image,  width:105, height:105}} />}
      </YStack>
    </YStack>

  )
}