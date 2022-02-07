import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'react-native-svg';

export default function OffersButton({btntext}) {
    return (
        <LinearGradient colors={[' #ed83f2', ' #dafc74', ' #ed4a7b']}
        style={styles.linearGradient}> 
            <View style={styles.button_bg}>
                <Text style={styles.btnvalue}>{btntext}</Text>
            </View>
        </LinearGradient>
        
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
        height: 800,
        justifyContent: "center",
        textAlign: "center",
        fontWeight: 600,
        fontSize: 20,
        color: "black",
        
    },
    linearGradient: {

    }

});