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
    <View>
      <View style={styles.backButtonContainer}>
        <Button title='Back' onPress={() => setView('gallery')} />
      </View>
      <Image source={{ uri: photoUri }} style={styles.fullSizeImage} />
      <Button title='share' onPress={() => share({ uri: photoUri })} />
    </View>
  )
}