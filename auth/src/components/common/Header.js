// Import libraries for creating a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a functional component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>;
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#E6E6E6',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        paddingTop: 35,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: '#000',
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};

// Make component available to other parts of the app
export { Header };
