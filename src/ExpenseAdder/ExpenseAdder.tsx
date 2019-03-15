import * as React from 'react';
import { AppRegistry, Button, TextInput, View, Alert, StyleSheet } from "react-native";
import MonthPicker, { Month } from "./MonthPicker";
import CategoryPicker, { Category } from "./CategoryPicker";
import { addExpense } from "../storage/storage";

const categories = [
    {"name": "Lunch"},
    {"name": "Party"},
    {"name": "Food"},
    {"name": "Household items"}
];

const styles = StyleSheet.create({
    textInput: {
        height: 60,
        width: 300,
        borderColor: 'black',
        borderWidth: 2,
        fontFamily: 'Roboto',
        textAlign: 'center',
        fontSize: 40,
    },
    wrapper: {
        flex: 3,
        justifyContent: 'space-around',
    }
});

export interface Expense {
    month: Month;
    value: number;
    category: Category;
}

class ExpenseAdder extends React.Component<{}, Expense> {
    constructor(props: {}) {
        super(props);
        this.state = {
            month: '',
            value: 0,
            category: {name: 'no-category'},
        }
    }

    addExpenseValue(input: string) {
        this.setState({
            value: Number(input)
        });
    }

    async addExpense() {
        try {
            await addExpense(this.state);
            Alert.alert("expense added");
        } catch (error) {
            Alert.alert("Error: " + error);
        }

        this.setState({
            value: 0,
        });
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <MonthPicker
                    month={this.state.month}
                    pickMonth={month => this.setState({month: month})}
                />
                <CategoryPicker
                    categories={categories}
                    chosenCategory={this.state.category}
                    pickCategory={(category: Category) => this.setState({category: category})}
                />
                <TextInput
                    style={styles.textInput}
                    onChangeText={text => this.addExpenseValue(text)}
                    keyboardType={"numeric"}
                    value={'' + this.state.value}
                />
                <Button // Use Touchable for cooler buttons
                    title="Add expense"
                    onPress={() => this.addExpense()}
                />
            </View>
        );
    }
}

export default ExpenseAdder;

AppRegistry.registerComponent('AwesomeProject', () => ExpenseAdder);