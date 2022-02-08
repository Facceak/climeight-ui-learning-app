import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';
import OffersButton from "../assets/components/OffersButton"

export default function Registration() {
  return (
    <View style={styles.anmeldemodal}>
      <View style={styles.regform}>
        <View style={styles.email}>
          <Text style={styles.reglabel}>E-Mail Adresse:</Text>
          <TextInput style={styles.emailinp}/>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  anmeldemodal: {
    width: "100%",
    height: "100%",
    top: "7%",
    borderRadius: 30,
    backgroundColor: "black",
    alignItems: 'center',
    justifyContent: 'center',
  },
  regform: {
    width: "80%",
    height: "70%",
    borderRadius: 30,
    backgroundColor: "white"
  },
  reglabel: {
    marginLeft: "10%",
    marginTop: 15,
    fontSize: 15,
  },
  emailinp: {
    marginLeft: "7%",
    width: "85%",
    height: "10%",
    borderWidth: 1,
    borderColor: "rgb(224, 224, 224)",
    borderRadius: 20,
  },
  email: {
    height: "100%"
  }
});