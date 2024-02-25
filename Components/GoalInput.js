import {View,TextInput, StyleSheet} from 'react-native';
import React from 'react';

const GoalInput = ({onChange, inputValue}) => {    
  return(
      <View>
    <TextInput style={styles.input}
      placeholder="Placez votre goal"
      onChangeText={onChange}
      value={inputValue}
    />
  </View>
  );
};

const styles = StyleSheet.create({
    inputContainer:{
      flexDirection:'row',
      alightItems:'center',
      paddingHorizontal:16,
      paddingBottom:16,
    },
    input:{
      flex: 1,
      height:40,
      borderColor:'#5e17d2',
      borderWidth:1,
      marginRight:8,
      paddingHorizontal:8,
      backgroundColor:'rgb(241, 243, 242)',
    },
 
  });

export default GoalInput;