import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import React from 'react';
import { StyleSheet, ImageBackground, View, FlatList, Modal, Pressable, Alert, Text} from 'react-native';
import GoalInput from './Components/GoalInput';
import GoalSubmit from './Components/GoalSubmit';
import GoalDelete from './Components/GoalDelete';
import GoalItem from './Components/GoalItem';
import { Checkbox } from 'react-native-paper';


export default function App() {
  const sampleGoals =[
    {
      id :'0',
      title : "Faire les courses",
    },
    {
      id :'1',
      title : "Aller à la salle de sport 3 fois par semaine",
    },
    {
      id :'2',
      title : "Monter à plus de 5000m d altitude",
    },
    {
      id :'3',
      title : "Perdre 5 kgs",
    },
    {
      id :'4',
      title : "Apprendre un nouveau langage",
    },
    ];

  const [inputValue, setInputValue] = useState('');
  const [dataList, setDataList] = useState(sampleGoals);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedItemsId, setSelectedItemsId] = useState('');
  const [editedItemTitle,setEditedItemTitle] = useState('');

  const [modalVisible, setModalVisible] = useState(false);

  const handleEdit = (id, newTitle)=>{
    const updateList = dataList.map(item =>
      item.id === id ? {...item, title: newTitle}:item

    );
    setDataList(updateList);
    onEdit(id, newTitle)
    setModalVisible(false);
  }
  const handleSubmission = () => {
    if (inputValue.trim() !== ''){
      const newGoal = {
        id : Math.random().toString(),
        title : inputValue.trim(),
        checked: false,
      };
      setDataList([...dataList, newGoal]);
      setInputValue('');
    }
  };
  const handleInputChange = (text) => {
    setInputValue(text);
    setEditedItemTitle(text);
  }
  const handleCheckBox = (id) =>{
    const itemCheck = dataList.find(item => item.id === id);
    if (itemCheck){
      const updateList = dataList.map(item => item.id === id ? { ... item, checked: !item.checked}:item);
      setDataList(updateList);
    }
    else
    {
      console.error("Not found");
    }

  }
  const handleDelete = () =>{
    const selectedDeleted = dataList.filter(item => !item.checked);
    setDataList(selectedDeleted);
    setSelectedItems([]);
  }
  const fond=require("./images/fond.jpg");
  return (
    
    <View style={styles.container}>
      <ImageBackground source={fond} resizeMode="cover" style={styles.background}>
        <Text style={styles.text}> Goal List :</Text>
        <FlatList
            data={dataList}
            renderItem={({item}) =>
            <View>
              <GoalItem title={item.title} checked={item.checked} onToggle={() => handleCheckBox(item.id)} onEdit={()=>{
                setSelectedItemsId(item.id);
                setEditedItemTitle(item.title);
                setModalVisible(true);
              }}/>
            </View> 
            }
            keyExtractor={item =>item.id}
          />
          <View style={styles.inputContainer}>
            <GoalInput onChange={handleInputChange} inputValue={inputValue} />
            <GoalSubmit onSubmit={handleSubmission}/>
            <GoalDelete onDelete={handleDelete}/>
          </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
  },
  inputContainer:{
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal:16,
    paddingBottom:16,
  },
  itemContainer:{
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:8,
  },
  background:{
    flex:1,
    height:'100%',
    width:'100%',
  },
  text: {
    color: '#822edc',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
});
