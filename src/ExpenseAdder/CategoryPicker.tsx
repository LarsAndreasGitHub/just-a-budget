import * as React from 'react';
import { AppRegistry, Picker } from "react-native";

export type Category = {
    name: string
};

const style = {
    height: 50,
};

interface Props {
    categories: Category[];
    chosenCategory: Category;
    pickCategory: (category: Category) => void;
}

const CategoryPicker = (props: Props) => {
    const categoryItems = props.categories.map(category => (
        <Picker.Item label={category.name} value={category.name} key={category.name} />
    ));

    return (
        <Picker
            selectedValue={props.chosenCategory}
            style={style}
            onValueChange={(category) => props.pickCategory(category)}>
            <Picker.Item label="Pick category..." value="0" />
            {categoryItems}
        </Picker>
    );
};

export default CategoryPicker;

AppRegistry.registerComponent('empty-project', () => CategoryPicker);