import React from 'react';
import { View , StyleSheet } from 'react-native';
import MainTitle from './components/MainTitle';
import StoreView from './components/StoreView';
import BrandView from './components/BrandView';

const Main = () => {
    return (
        <View style = { styles.mainContainer }>
            <MainTitle/>
            <StoreView/>
            <BrandView/>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        paddingTop: '8%',
        paddingBottom: '5%',
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    }
});

export default Main;