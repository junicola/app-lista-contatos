import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//Stateless component
const Header = (props) => (
        <View style={Styles.header}>
            <Text style={Styles.text}>{props.label}</Text>
        </View>
);

const Styles = StyleSheet.create({
    header:  {
        marginTop: 1,
        backgroundColor: '#f8c5fc',
        alignItems: 'center'
    },
    text:  {
        fontSize: 40,
        color: '#ffffff'
    }
})

export default Header;