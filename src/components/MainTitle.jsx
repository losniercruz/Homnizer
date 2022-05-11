import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const MainTitle = () => {
    return (
        <View style = { styles.container }>
            <Text style = { styles.mainTitle }>
                Homnizer
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: '10%',
        paddingBottom: '5%',
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    mainTitle: {
        color: '#000',
        fontWeight: 'bold',
        fontFamily: '',
        fontSize: 25
    }
});

export default MainTitle;