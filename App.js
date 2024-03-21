import { useState } from 'react';
import { Button, Image, View, SafeAreaView } from 'react-native';
import CameraView from './CameraView'; // Import CameraView
import GalleryView from './GalleryView';
import PhotoView from './PhotoView';
import styles from './styles'; // Import styles
import * as Sharing from 'expo-sharing';

export default function App() {
  const [view, setView] = useState('camera');
  const [photosList, setPhotosList] = useState([]);
  const [clickedPhotoUri, setClickedPhotoUri] = useState(null);

  // async function share({ uri }) {
  //   if (!(await Sharing.isAvailableAsync())) {
  //     alert(`Uh oh, sharing isn't available on your platform`);
  //     return;
  //   }
  
  //   Sharing.shareAsync(uri);
  // }

  return (
    <SafeAreaView style={styles.container}>
      {view === 'camera' && <CameraView setView={setView} setPhotosList={setPhotosList} />}
      {view === 'gallery' && <GalleryView photosList={photosList} setPhotosList={setPhotosList} setClickedPhotoUri={setClickedPhotoUri} setView={setView} />}
      {/* {view === 'gallery' && photosList.length != 0 && 
        <View>
          <Image source={{ uri: photosList[0].uri }} style={{ width: 100, height: 100 }} />
          <Button title='share' onPress={() => share({ uri: photosList[0].uri })} />
        </View>
      } */}
      {view === 'photo' && <PhotoView photoUri={clickedPhotoUri} setView={setView} />}
    </SafeAreaView>
  );
}