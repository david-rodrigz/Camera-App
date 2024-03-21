import React, { useState } from 'react';
import { 
  Button,
  FlatList, 
  Image, 
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles'; // Import styles

export default function GalleryView({ photosList, setPhotosList, setClickedPhotoUri, setView }) {
  const [selectedIds, setSelectedIds] = useState([]);
  const [isSelecting, setIsSelecting] = useState(false);

  const handleOnSelect = (uri) => {
    if (selectedIds.includes(uri)) {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== uri));
    } else {
      setSelectedIds([...selectedIds, uri]);
    }
  };

  const openPhoto = (uri) => {
    setView('photo');
    setClickedPhotoUri(uri);
  };
  
  const renderItem = () => ({ item }) => {
    const borderColor = selectedIds.includes(item.uri) ? '#72a4d4' : 'white';

    return (
      <TouchableOpacity onPress={() => isSelecting ? handleOnSelect(item.uri) : openPhoto(item.uri)}>
        {/* thumbnail */}
        <Image 
          source={{ uri: item.uri }} 
          style={[styles.thumbnail, { borderColor: borderColor }]} 
        />
      </TouchableOpacity>
    );
  };

  const deleteSelectedItems = () => {
    const newList = photosList.filter(item => !selectedIds.includes(item.uri));
    setPhotosList(newList);
    setIsSelecting(false);
    setSelectedIds([]); // Clear selection after deletion
  };

  return (
    <View style={styles.galleryView}>
      <View style={styles.backButtonContainer}>
        {!isSelecting && <Button title='Back' onPress={() => setView('camera')} />}
        {isSelecting && 
          <Button 
          title='Cancel' 
          onPress={() => {
            setIsSelecting(false);
            setSelectedIds([]); // Clear selection
          }} />
        }
      </View>
      <FlatList
        data={photosList}
        renderItem={renderItem(isSelecting, selectedIds, setSelectedIds)}
        keyExtractor={(item) => item.uri}
        extraData={selectedIds}
        numColumns={4} // replace 3 with the number of columns you want
      />
      <View style={styles.buttonsContainer}>
        <Button title="Select" disabled={isSelecting} onPress={() => setIsSelecting(true)} />
        <Button title="Delete" disabled={selectedIds.length == 0} onPress={deleteSelectedItems} />
        <Button title="Add" disabled={isSelecting} onPress={() => setView('camera')} />
      </View>
    </View>
  );
}
