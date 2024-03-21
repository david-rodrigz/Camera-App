import * as Sharing from 'expo-sharing';
import { Button, Image, View } from "react-native";
import styles from "./styles";

export default function PhotoView({ photoUri, setView }) {

  async function share({ uri }) {
    if (!(await Sharing.isAvailableAsync())) {
      alert(`Uh oh, sharing isn't available on your platform`);
      return;
    }
  
    Sharing.shareAsync(uri);
  }

  return (
    <View style={styles.photoView}>
      <View style={styles.backButtonContainer}>
        <Button title='Back' onPress={() => setView('gallery')} />
      </View>
      <Image source={{ uri: photoUri }} style={styles.fullSizeImage} />
      <View style={styles.shareButtonContainer}>
        <Button title='Share' onPress={() => share({ uri: photoUri })} />
      </View>
    </View>
  )
}