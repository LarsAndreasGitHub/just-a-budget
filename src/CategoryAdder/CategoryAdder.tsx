import * as React from 'react';
import { Category, noCategory } from '../domain';
import { TextInput, Text, Button, View } from 'react-native';
import commonStyles from '../commonStyles';

export default class CategoryAdder extends React.Component<{}, Category> {
    state: Category = noCategory;

    setCategoryName(name: string) {
        this.setState({name: name});
    }

    setCategoryAmount(amountStr: string) {
        this.setState({amount: Number(amountStr)});
    }

    render() {
        const amountText = `${this.state.amount || ''}`;
        return (
            <View style={{height: 400}}>
                <Text> Category name </Text>
                <TextInput
                    onChangeText={text => this.setCategoryName(text)}
                    value={this.state.name}
                    style={{...commonStyles.textInput, marginBottom: 50}}
                />
                <Text> Amount? </Text>
                <TextInput
                    onChangeText={text => this.setCategoryAmount(text)}
                    keyboardType={"numeric"}
                    value={amountText}
                    style={{...commonStyles.textInput, marginBottom: 50}}

                />
                <Button
                    title={"Add category"}
                    onPress={() => {}}
                />
            </View>
        );
    }
}