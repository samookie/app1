
import {Button, StyleSheet} from 'react-native';
import React from 'react';

const GoalSubmit = ({onSubmit}) => {

    return (
        <Button style={styles.buttonSubmit} onPress={onSubmit} title="Submit" />
    );

};

const styles = StyleSheet.create({
    buttonSubmit:{
        backgroundColor:'Orange',
        height:40,
        paddingHorizontal:16,
        borderRadius:8,
        justifyContent:"center",
        alignItems:'center',
        width:100,
        marginLeft:18,
    },
 
  });

export default GoalSubmit;