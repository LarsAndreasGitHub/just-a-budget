import * as React from 'react';
import { Category, noCategory } from '../domain';
import { Button, Modal, View } from 'react-native';
import CategoryAdder from './CategoryAdder';

interface State {
    category: Category;
    showModal: boolean;
}

export default class CategoryAdderButton extends React.Component<{}, State> {
    state = {
        showModal: false,
        category: noCategory,
    };

    render() {
        return (
            <>
                <Button
                    title={"Add category..."}
                    onPress={() => this.setState({showModal: true})}
                />
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.showModal}
                    onRequestClose={() => console.log('Modal has been closed.')}
                >
                    <View>
                        <CategoryAdder />
                        <Button
                            title={"Cancel"}
                            onPress={() => this.setState({showModal: false})}
                        />
                    </View>
                </Modal>
            </>
        );
    }
}