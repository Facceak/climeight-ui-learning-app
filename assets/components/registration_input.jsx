import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function Input({labelname}) {
    return (

        
        <View style={styles.input_view}>

          <Text style={styles.label_name}>{labelname}</Text>
          <TextInput style={styles.input_field}/>

        </View>

        
    );
  };

const styles = StyleSheet.create({
    input_view: {
        position: "absolute",
        width: "100%",
        height: "100%"
    },
    label_name: {
        marginLeft: "10%",
        marginTop: 15,
        fontSize: 15,
    },
    input_field: {
        marginLeft: "7%",
        width: "85%",
        height: "10%",
        borderWidth: 1,
        borderColor: "rgb(224, 224, 224)",
        borderRadius: 20,
    }


});