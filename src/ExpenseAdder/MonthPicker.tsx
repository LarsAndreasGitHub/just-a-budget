import * as React from 'react';
import { AppRegistry, Picker } from "react-native";

const style = {
    height: 50,
};

export type Month = string;

interface Props {
    month: Month;
    pickMonth: (month: Month) => void;
}

class MonthPicker extends React.Component<Props> {
    render() {
        return (
            <Picker
                selectedValue={this.props.month}
                style={style}
                onValueChange={(month) => this.props.pickMonth(month)}>
                <Picker.Item label="Pick month..." value="0" />
                <Picker.Item label="January" value="1" />
                <Picker.Item label="February" value="2" />
                <Picker.Item label="March" value="3" />
                <Picker.Item label="April" value="4" />
                <Picker.Item label="May" value="5" />
                <Picker.Item label="June" value="6" />
                <Picker.Item label="July" value="7" />
                <Picker.Item label="August" value="8" />
                <Picker.Item label="September" value="9" />
                <Picker.Item label="October" value="10" />
                <Picker.Item label="November" value="11" />
                <Picker.Item label="December" value="12" />
            </Picker>
        );
    }
}

export default MonthPicker;

AppRegistry.registerComponent('empty-project', () => MonthPicker);