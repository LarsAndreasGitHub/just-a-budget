import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Budget from './Budget';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default () => (
    <View style={styles.container}>
        <Text style={{flex: 1, marginTop: 50}}>Welcome!</Text>
        <Budget/>
    </View>
);