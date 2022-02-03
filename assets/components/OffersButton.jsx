import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const { View } = require("react-native-web");

class OffersButton extends React.Component {
    render() {
        return (
            <View style={styles.button_bg}>
                <Text style={styles.btnvalue}></Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button_bg: {
        width: "50%",
        height: 20,
        backgroundColor: "blue",
        
    },
    btnvalue: {
        fontSize: 15,
        color: "white"
    }

});