import * as React from 'react';
import {AppRegistry, Button, Alert } from "react-native";
import ExpenseAdder, { Expense } from "./ExpenseAdder/ExpenseAdder";
import { getExpenses } from './storage/storage';

interface State {
    expenses: Expense[];
}

class Budget extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            expenses: [],
        }
    }

    render() {
        return (
            <>
                <ExpenseAdder/>
                <Button // Use Touchable for cooler buttons
                    title="Show expenses"
                    onPress={async () => Alert.alert(JSON.stringify(await getExpenses()))}
                />
            </>
        );
    }
}

export default Budget;

AppRegistry.registerComponent('AwesomeProject', () => Budget);