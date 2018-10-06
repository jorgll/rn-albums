import React from 'react';
import { View, StyleSheet } from 'react-native';

export interface Props {
    children: any;
}

export default class CardSection extends React.Component<Props> {
    
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                {this.props.children}
            </View>
        );
    }
};

const styles = StyleSheet.create({
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',
    }
});
