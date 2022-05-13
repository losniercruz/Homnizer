import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Data from '../../data/dataTest.json';

const brandView = () => {
    return (
        <View>
            <Text style = { styles.brandMainTitle }> Brands: </Text>
            <View style = { styles.brandMainContainer }>

                <View style = { styles.brandContainer }>
                    <Text> Id: { Data.brand[0].brandId } </Text>
                    <Text> Name: { Data.brand[0].name } </Text>
                    <Text> Website: { Data.brand[0].shortName } </Text>
                    <Text> Description: { Data.brand[0].description } </Text> 
                </View>

                <View style = { styles.brandContainer }>
                    <Text> Id: { Data.brand[1].brandId } </Text>
                    <Text> Name: { Data.brand[1].name } </Text>
                    <Text> Website: { Data.brand[1].shortName } </Text>
                    <Text> Description: { Data.brand[1].description } </Text> 
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    brandMainTitle: {
        color: '#000',
        fontWeight: 'bold',
        fontFamily: '',
        fontSize: 15
    },
    brandMainContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    brandContainer: {
        margingTop: '1%',
        marginBottom: '1%',
        marginStart: '1%',
        marginEnd: '1%',
        flex: 0,
        backgroundColor: '#f5c16f',
        borderRadius: 2.5,
        width: '45%'
    }
});

export default brandView;