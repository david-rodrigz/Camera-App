import React, { useState, useRef } from 'react';
import { 
  Button,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  VirtualizedList,
} from 'react-native';
import styles from './styles'; // Import styles

const handleOnSelect = (selectedIds, setSelected, id) => {
  if (selectedIds.includes(id)) {
    setSelected(selectedIds.filter((selectedId) => selectedId !== id));
  } else {
    setSelected([...selectedIds, id]);
  }
}

const renderItem = (selectedIds, setSelected) => ({ item }) => {
  const borderColor = selectedIds.includes(item.id) ? '#72a4d4' : 'white';
  const backgroundColor = selectedIds.includes(item.id) ? '#f4f4f4' : 'white';

  return (
    <TouchableOpacity
      onPress={() => handleOnSelect(selectedIds, setSelected, item.id)}
      style={[
        styles.textContainer, 
        { borderWidth: 2 }, 
        { backgroundColor: backgroundColor }, 
        { borderColor: borderColor }
      ]}
    >
      <Text style={styles.text}>{item.text}</Text>
    </TouchableOpacity>
  );
};

export default function GalleryView({ setView, photosList }) {
  const [data, setData] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [newText, setNewText] = useState();
  const [displayPrompt, setDisplayPrompt] = useState(false);
  const inputRef = useRef();

  const joinSelectedItems = () => {
    // join every selected item's text
    let itemText = "";
    for(let i = 0; i < selectedIds.length; i++) {
      const item = data.find(item => item.id === selectedIds[i]);
      itemText += item.text;
      if (i != selectedIds.length - 1) {
        itemText += ", ";
      }
    }

    // remove selected items from data
    const newData = data.filter(item => !selectedIds.includes(item.id));
    
    // add new item to data
    const newId = newData.length == 0 ? 0 : Math.max(...newData.map(item => parseInt(item.id))) + 1;
    const newItem = { id: newId, text: itemText ? itemText : "" };
    setData([...newData, newItem]);
    
    setSelectedIds([]); // Clear selection after joining
    setSelectedIds([newId]); // Select new item after joining
  }

  const splitSelectedItems = () => {
    // split selected item's text into multiple items
    const item = data.find(item => item.id === selectedIds[0]);
    const itemText = item.text;
    const splitText = itemText.split(", ");

    // remove selected item from data
    const newData = data.filter(item => !selectedIds.includes(item.id));

    // add new items to data
    const newIds = [];
    for(let i = 0; i < splitText.length; i++) {
      const newId = newData.length == 0 ? 0 : Math.max(...newData.map(item => parseInt(item.id))) + 1;
      const newItem = { id: newId, text: splitText[i] ? splitText[i] : "" };
      newData.push(newItem);
      newIds.push(newId);
    }
    setData(newData);
    setSelectedIds(newIds); // Select new items after splitting
  }

  const deleteSelectedItems = () => {
    const newData = data.filter(item => !selectedIds.includes(item.id));
    setData(newData);
    setSelectedIds([]); // Clear selection after deletion
  };

  const addNewItem = (itemText) => {
    if (!itemText) {
      return;
    }
    const newId = data.length == 0 ? 0 : Math.max(...data.map(item => parseInt(item.id))) + 1;
    const newItem = { id: newId, text: itemText};
    setData([...data, newItem]);
    setSelectedIds([]); // Clear selection after addition
    setDisplayPrompt(false); // Hide prompt after addition
  };

  return (
    <View style={styles.container}>
      <VirtualizedList
        data={data}
        renderItem={renderItem(selectedIds, setSelectedIds)}
        getItem={(data, index) => data[index]}
        getItemCount={(data) => data.length}
        keyExtractor={(item) => item.id}
        extraData={selectedIds}
      />
      <View style={styles.buttonsContainer}>
        <Button title="Join" disabled={selectedIds.length <= 1} onPress={joinSelectedItems} />
        <Button title="Split" 
        disabled={selectedIds.length != 1 
          || (selectedIds.length == 1 && !data.find(item => item.id === selectedIds[0]).text.includes(", "))} 
        onPress={splitSelectedItems} />
        <Button title="Delete" disabled={selectedIds.length == 0} onPress={deleteSelectedItems} />
        <Button title="Add" onPress={() => { 
          setDisplayPrompt(true); 
          inputRef.current.focus(); // Focus on text input
        }} />
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          title="Save"
          onPress={() => handleSave(data)}
        />
        <Button
          title="Load"
          onPress={() => handleLoad(data, setData, setSelectedIds)}
        />
      </View>

      {/* New list item prompt text box */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.newItemPrompt}
      >
        <TextInput 
          ref={inputRef} // Ref for focusing on text input
          style={[styles.input, {display: displayPrompt ? 'flex' : 'none'}]} 
          placeholder={'New Item'} 
          value={newText} 
          onChangeText={text => setNewText(text)} 
          onBlur={() => setDisplayPrompt(false)} // Hide prompt when text input is deselected
          onSubmitEditing= {() => {
            addNewItem(newText);
            setNewText(null);
          }}
        />
      </KeyboardAvoidingView>
    </View>
  );
}
