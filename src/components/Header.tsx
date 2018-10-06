import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export interface Props {
    headerText: string
}

export default class Header extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{this.props.headerText}</Text>
        </View>
        );
    }
}
  
const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center', // center vertically
        alignItems: 'center', // center horizontally
        height: 60,
        paddingTop: 20,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative',
    },
    textStyle: {
        fontSize: 30
    }
});