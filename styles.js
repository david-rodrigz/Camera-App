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
    thumbnailContainer: {
      width: 80, 
      height: 80,
      borderWidth: 2,
    },
    galleryThumbnail: { width: 42, height: 42 },
    thumbnail: { width: 76, height: 76 },
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

  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //   },
  //   buttonsContainer: {
  //     flexDirection: 'row',
  //     justifyContent: 'space-around',
  //     alignItems: 'center',
  //     padding: 10,
  //   },
  //   thumbnailContainer: {
  //     padding: 8,
  //     borderWidth: 2
  //     borderRadius: 6,
  //     marginVertical: 4,
  //     marginHorizontal: 20,
  //   },
  //   text: {
  //     fontSize: 20,
  //   },
  //   newItemPrompt: {
  //     position: 'absolute',
  //     bottom: 10,
  //     width: '100%',
  //     flexDirection: 'row',
  //     justifyContent: 'space-around',
  //     alignItems: 'center',
  //   },
  //   input: {
  //     paddingVertical: 15,
  //     paddingHorizontal: 15,
  //     marginBottom: 10,
  //     borderWidth: 1,
  //     borderRadius: 60,
  //     backgroundColor: 'white',
  //     borderColor: '#C0C0C0',
  //     width: '90%',
  //   },
  // });