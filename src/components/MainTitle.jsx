import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const MainTitle = () => {
    return (
        <View style = { styles.mainTitleContainer }>
            <Text style = { styles.mainTitleText }>
                Homnizer
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainTitleContainer: {
        paddingTop: '1%',
        paddingBottom: '2%',
    },
    mainTitleText: {
        color: '#000',
        fontWeight: 'bold',
        fontFamily: '',
        fontSize: 25
    }
});

export default MainTitle;