import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PeopleListItem from './PeopleListItem';

const PeopleList = props => {
    const {people} = props;


    const items = people.map(person => {
        return <PeopleListItem key={person.name.first} person={person} />
    })
    
    return(
        <View style={styles.container}>
           { items }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f7dff6'
    }
})

export default PeopleList;