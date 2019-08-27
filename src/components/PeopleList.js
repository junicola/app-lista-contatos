import React from 'react';
import {FlatList, Text, StyleSheet} from 'react-native';
import PeopleListItem from './PeopleListItem';

const PeopleList = props => {
    const {people, onPressItem} = props;
    
    return(
        <FlatList 
            style = {styles.container}
            data = {people}
            renderItem = {({item}) => (
                <PeopleListItem 
                    person={item}
                    onPressItem = {onPressItem}
                />
            )}
            keyExtractor = { (item, index) => item.name.first+index }
        />
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f7dff6'
    }
})

export default PeopleList;