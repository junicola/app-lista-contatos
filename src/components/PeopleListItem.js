import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import capitalizeFirstLetter from '../util/capitalizeFirstLetter';

const PeopleListItem = props => {
    const {person, onPressItem} = props;
    const {title, first, last} = person.name;
    const{thumbnail} = person.picture;

    return(
        <TouchableOpacity onPress={() => {
            onPressItem({person});
        }}>
            <View style={styles.line}>
                <Image source={{uri: thumbnail}} style={styles.avatar} />
                <Text style={styles.lineText}>{capitalizeFirstLetter(title) + ' ' + capitalizeFirstLetter(first)+
                ' ' +capitalizeFirstLetter(last)}</Text>
            </View>
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: "#bbb",
        alignItems: 'center',
        flexDirection: 'row'
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 15,
        flex: 7
    },
    avatar: {
        aspectRatio: 1,
        flex: 1,
        marginLeft: 15,
        borderRadius: 50
    }
})


export default PeopleListItem;