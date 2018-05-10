import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {

    const { inputStyle, labelStyle, containerStlye } = styles;

    return (
       <View style={containerStlye}>
           <Text style={labelStyle}>{label}</Text>
           <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                value={value}
                onChangeText={onChangeText} 
                style={inputStyle}
           />
        </View>
    );
};

const styles = {
    inputStyle: {
       color: '#000',
       paddingRight: 5,
       paddingLeft: 5,
       fontSize: 18,
       lineHeight: 23,
       flex: 2
    },
    labelStyle: {
       fontSize: 18,
       paddingLeft: 20,
       flex: 1
    },
    containerStlye: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    }
};

export { Input };
