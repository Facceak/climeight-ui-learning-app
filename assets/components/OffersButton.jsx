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
        width: "80%",
        height: "20%",
        backgroundColor: "white",     
    },
    btnvalue: {
        width: "100%",
        textAlign: "center",
        fontWeight: 600,
        fontSize: 20,
        color: "black",
        
    },


});