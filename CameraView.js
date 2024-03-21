import { Camera, CameraType } from 'expo-camera';
import { useEffect, useRef, useState } from 'react';
import {
  Text, 
  TouchableOpacity,
  View 
} from 'react-native';
import styles from './styles'; // Import styles

export default function CameraView({ setView, setPhotosList }) {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const cameraRef = useRef(null);

  // Request camera permission
  useEffect(() => {
    (async () => {
      if (permission.status == null || permission.status === 'undetermined' || permission.status == 'denied') {
        console.log("Requesting camera permission...");
        await requestPermission();
      }
    })();
  });

  function capture() {
    (async () => {
      if (cameraRef.current) {
        const photo = await cameraRef.current.takePictureAsync(); // returns CameraCapturedPicture
        console.log("Photo taken!");
        setPhotosList((currentPhotos) => [...currentPhotos, photo]);
      }
    })();
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  return (
    <Camera ref={cameraRef} style={styles.camera} type={type}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => setView('gallery')}>
          <Text style={styles.ButtonText}>gallery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.captureButton} onPress={capture} />
        <TouchableOpacity style={styles.buttonContainer} onPress={toggleCameraType}>
          <Text style={styles.ButtonText}>flip</Text>
        </TouchableOpacity>
      </View>
    </Camera>
  );
}