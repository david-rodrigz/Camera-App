import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
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
    galleryThumbnailContainer: {
      width: 50,
      height: 50,
      borderWidth: 4,
      borderColor: 'rgba(255, 255, 255, 0.8)',
    },
    galleryThumbnail: { width: 42, height: 42 },
    galleryView: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    thumbnail: { width: 90, height: 90, borderWidth: 4, },
    backButtonContainer: {
      width: '100%',
      padding: 12,
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },
    photoView: {
      flex: 1,
      width: '100%',
      height: null,
      resizeMode: 'contain',
    },
    fullSizeImage: {
      flex: 1,
      width: null,
      height: null,
      resizeMode: 'contain',
    },
    shareButtonContainer: { padding: 12 },
  });