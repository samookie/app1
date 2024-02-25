
import {View, Text,StyleSheet,TouchableOpacity,Modal, TextInput,Button} from 'react-native';
import React , {useState}from 'react';
import { Checkbox } from 'react-native-paper';

const GoalItem = ({id, title, checked, onToggle, onEdit}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [newTitle, setNewTitle] = useState(title);
    const handleEdit = () =>{
        onEdit(id, newTitle);
        setModalVisible(false);
    }
    return (
        <View>
            <TouchableOpacity onPress={()=>  setModalVisible(true)} style={styles.item}>
            <View style={styles.item}>
                

                
                <Text style={[styles.title, checked && styles.checkedTitle]  }>{title}</Text>
                <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    value={checked}
                    onPress={()=>onToggle(id)} 
                />
            </View>
            <Modal
                animationType="slide"
                transparent ={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}    
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TextInput
                            style={styles.input}
                            value={newTitle}
                            onChangeText={setNewTitle}
                        />
                        <Button title="Change" onPress={handleEdit}/>
                    </View>
                </View>
            </Modal>
            </TouchableOpacity>
        </View> 
    );
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#822edc',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'white',
    },
    checkedTitle:{
        textDecorationLine:'line-through',
        color:'#888',
    },
    centeredView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:22,
    },
    modalView:{
        margin:20,
        backgroundColor:'white',
        borderRadius:20,
        padding:35,
        alignItems:'center',
        shadowColor:'#000',
        shadowOpacity:0.25,
        shadowRadius:4,
        elevation:5,
    },
    input:{
        height:40,
        width:'100%',
        borderColor:'gray',
        borderWith:1,
        paddingHorizontal:10,
        marginBottom:20,
    },
    
});

export default GoalItem;