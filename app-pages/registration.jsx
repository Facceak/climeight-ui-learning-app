import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';

import OffersButton from "../assets/components/OffersButton"

export default function Registration() {
  return (
    <View style={styles.inner_container}>
      <View style={styles.form_registration}>
        <View style={styles.registration_view}>
          <Text style={styles.label_registration}>E-Mail Adresse:</Text>
          <TextInput style={styles.input_email}/>
        </View>
        <View style={styles.registration_view}>
          <Text style={styles.label_registration}>Vorname</Text>
          <TextInput style={styles.input_first_name}/>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  inner_container: {
    width: "100%",
    height: "100%",
    top: "7%",
    borderRadius: 30,
    backgroundColor: "black",
    alignItems: 'center',
    justifyContent: 'center',
  },
  form_registration: {
    width: "80%",
    height: "70%",
    borderRadius: 30,
    backgroundColor: "white"
  },
  label_registration: {
    marginLeft: "10%",
    marginTop: 15,
    fontSize: 15,
  },
  input_email: {
    marginLeft: "7%",
    width: "85%",
    height: "10%",
    borderWidth: 1,
    borderColor: "rgb(224, 224, 224)",
    borderRadius: 20,
  },
  registration_view: {
    position: "absolute",
    width: "100%",
    height: "100%"
  },
  input_first_name: {
    marginLeft: "7%",
    width: "85%",
    height: "10%",
    borderWidth: 1,
    borderColor: "rgb(224, 224, 224)",
    borderRadius: 20,
  }
});