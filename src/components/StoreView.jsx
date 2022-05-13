import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Data from '../../data/dataTest.json';

const storeView = () => {
    return (
        <View>
            <Text style = { styles.storeMainTitle }> Stores: </Text>
            <View style = { styles.storeMainContainer }>
                <View style = { styles.storeContainer }>
                    <Text> Id: { Data.store[0].storeId } </Text>
                    <Text> Name: { Data.store[0].name } </Text>
                    <Text> Website: { Data.store[0].website } </Text>
                    <Text> Description: { Data.store[0].description } </Text> 
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({ 
    storeMainTitle: {
        color: '#000',
        fontWeight: 'bold',
        fontFamily: '',
        fontSize: 15
    },
    storeMainContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    storeContainer: {
        margingTop: '1%',
        marginBottom: '1%',
        flex: 0,
        backgroundColor: '#fb9851',
        borderRadius: 2.5
    }
});

export default storeView;