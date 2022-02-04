import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function OffersButton({btntext}) {
    return (
            <View style={styles.button_bg}>
                <Text style={styles.btnvalue}>{btntext}</Text>
            </View>
    );
  };

const styles = StyleSheet.create({
    button_bg: {
        width: "90%",
        height: "6%",
        borderRadius: 15,
        backgroundColor: "white",

        
    },
    btnvalue: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        textAlign: "center",
        fontWeight: 600,
        fontSize: 20,
        color: "black",
        
    }

});