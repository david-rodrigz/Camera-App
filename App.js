import { Camera, CameraType } from 'expo-camera';
import { useEffect, useRef, useState } from 'react';
import {
  Image,
  SafeAreaView, 
  StyleSheet, 
  Text, 
  TouchableOpacity,
  View 
} from 'react-native';

export default function App() {
  const [view, setView] = useState('camera');
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const cameraRef = useRef(null);
  const [photosList, setPhotosList] = useState([]);

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
        const photo = await cameraRef.current.takePictureAsync();
        console.log("Photo taken!");
        setPhotosList((currentPhotos) => [...currentPhotos, photo]);
      }
    })();
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  return (
    <SafeAreaView style={styles.container}>
      <Camera ref={cameraRef} style={styles.camera} type={type}>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.ButtonText}>gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.captureButton} onPress={capture} />
          <TouchableOpacity style={styles.buttonContainer} onPress={toggleCameraType}>
            <Text style={styles.ButtonText}>flip</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    height: `100%`,
    width: `100%`,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  buttonContainer: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonText: {
    fontSize: 18,
    fontWeight: '900',
    color: 'rgba(255, 255, 255, 0.8)',
  },
  captureButton: {
    width: 100,
    height: 100,
    borderRadius: 50, // half of your width and height
    borderWidth: 10,
    borderColor: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
