import * as React from 'react';
import { Button, TextInput, View, Alert, StyleSheet } from "react-native";
import MonthPicker from "./MonthPicker";
import CategoryPicker from "./CategoryPicker";
import { addExpense } from "../storage/storage";
import { Category, Expense, noCategory } from '../domain';
import commonStyles from '../commonStyles';

const categories = [
    {"name": "Lunch"},
    {"name": "Party"},
    {"name": "Food"},
    {"name": "Household items"}
];

const styles = StyleSheet.create({
    wrapper: {
        flex: 3,
        justifyContent: 'space-around',
    }
});


class ExpenseAdder extends React.Component<{}, Expense> {
    constructor(props: {}) {
        super(props);
        this.state = {
            month: '',
            value: 0,
            category: noCategory,
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
                    style={commonStyles.textInput}
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