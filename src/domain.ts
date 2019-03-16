export type Category = {
    name: string;
    amount?: number;
};

export const noCategory = {name: ''};

export interface Expense {
    month: Month;
    value: number;
    category: Category;
}

export type Month = string;
