import React, { useState } from 'react';
import { 
  Button,
  Image, 
  TouchableOpacity,
  View,
  VirtualizedList,
} from 'react-native';
import styles from './styles'; // Import styles

// const handleOnSelect = (selectedIds, setSelected, id) => {
//   if (selectedIds.includes(id)) {
//     setSelected(selectedIds.filter((selectedId) => selectedId !== id));
//   } else {
//     setSelected([...selectedIds, id]);
//   }
// }

// const renderItem = (isSelecting, selectedIds, setSelected) => ({ item }) => {
//   const borderColor = selectedIds.includes(item.uri) ? '#72a4d4' : 'white';

//   return (
//     <TouchableOpacity
//       onPress={() => isSelecting ? handleOnSelect(selectedIds, setSelected, item.uri) : setView('image')}
//       style={[
//         styles.textContainer, 
//         { borderColor: borderColor }
//       ]}
//     >
//       {/* thumbnail */}
//       <Image source={{ uri: item.uri }} style={{ width: 80, height: 80 }} />
//     </TouchableOpacity>
//   );
// };

export default function GalleryView({ photosList, setPhotosList, setClickedPhotoUri, setView }) {
  const [selectedIds, setSelectedIds] = useState([]);
  const [isSelecting, setIsSelecting] = useState(false);

  const handleOnSelect = () => {
    if (selectedIds.includes(id)) {
      setSelected(selectedIds.filter((selectedId) => selectedId !== id));
    } else {
      setSelected([...selectedIds, id]);
    }
  };

  const openPhoto = (uri) => {
    setView('photo');
    setClickedPhotoUri(uri);
  };
  
  const renderItem = () => ({ item }) => {
    const borderColor = selectedIds.includes(item.uri) ? '#72a4d4' : 'white';

    return (
      <TouchableOpacity
        onPress={() => isSelecting ? handleOnSelect() : openPhoto(item.uri)}
        style={[
          styles.thumbnailContainer, 
          { borderColor: borderColor }
        ]}
      >
        {/* thumbnail */}
        <Image source={{ uri: item.uri }} style={styles.thumbnail} />
      </TouchableOpacity>
    );
  };

  const deleteSelectedItems = () => {
    const newList = photosList.filter(item => !selectedIds.includes(item.uri));
    setPhotosList(newList);
    setSelectedIds([]); // Clear selection after deletion
  };

  return (
    <View>
      <View style={styles.backButtonContainer}>
        {!isSelecting && <Button title='Back' onPress={() => setView('camera')} />}
        {isSelecting && <Button title='Cancel' onPress={() => setIsSelecting(false)} />}
      </View>
      <VirtualizedList
        data={photosList}
        renderItem={renderItem(isSelecting, selectedIds, setSelectedIds)}
        getItem={(photosList, index) => photosList[index]} // todo
        getItemCount={(photosList) => photosList.length}
        keyExtractor={(item) => item.uri}
        extraData={selectedIds}
      />
      <View style={styles.buttonsContainer}>
        {/* 4 buttons: back, add, select, delete */}
        <Button title="Select" onPress={() => setIsSelecting(true)} />
        <Button title="Delete" disabled={selectedIds.length == 0} onPress={deleteSelectedItems} />
        <Button title="Add" onPress={() => setView('camera')} />
      </View>
    </View>
  );
}
