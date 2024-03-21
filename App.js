import { useState } from 'react';
import { SafeAreaView } from 'react-native';
import CameraView from './CameraView'; // Import CameraView
import GalleryView from './GalleryView';
import PhotoView from './PhotoView';
import styles from './styles'; // Import styles

export default function App() {
  const [view, setView] = useState('camera');
  const [photosList, setPhotosList] = useState([]);
  const [clickedPhotoUri, setClickedPhotoUri] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      {view === 'camera' && <CameraView photosList={photosList} setPhotosList={setPhotosList} setView={setView} />}
      {view === 'gallery' && <GalleryView photosList={photosList} setPhotosList={setPhotosList} setClickedPhotoUri={setClickedPhotoUri} setView={setView} />}
      {view === 'photo' && <PhotoView photoUri={clickedPhotoUri} setView={setView} />}
    </SafeAreaView>
  );
}