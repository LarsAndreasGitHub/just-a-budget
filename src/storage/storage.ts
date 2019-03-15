import { AsyncStorage } from "react-native";
import { Expense } from '../ExpenseAdder/ExpenseAdder';
import { Category } from '../ExpenseAdder/CategoryPicker';

const CATEGORIES = 'categories';
const EXPENSES = 'expenses';

const PREFIX = "simpleBudget.";

export const addCategory = async (category: Category) => {
    const oldCategories = await get(CATEGORIES);
    save(CATEGORIES, [...oldCategories, category]);
};

export const getCategories = async () => {
    const categories = await get(CATEGORIES);
    return categories || [];
};

export const getExpenses = async () => {
    const expenses = await get(EXPENSES);
    return expenses || [];
};

export const addExpense = async (expense: Expense) => {
    const oldExpenses = await get(EXPENSES);
    if (!oldExpenses) {
        save(EXPENSES, [expense]);
    } else {
        save(EXPENSES, [...oldExpenses, expense]);
    }
};

const save = async (key: string, value: any) => {

    await AsyncStorage.setItem(PREFIX + key, JSON.stringify(value));
};
 
const get = async (key: string): Promise<any> => {
    const value: any = await AsyncStorage.getItem(PREFIX + key);
    return JSON.parse(value);
};