import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OffersButton from "../assets/components/OffersButton";

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.modal}></View>
      <Text style={styles.climeight}>climeight.</Text>
      <View style={styles.btnposition}>
        <OffersButton btntext={"ANMELDEN"}/>
      </View>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    position: "absolute",
    bottom: -30,
    width: "100%",
    height: "95%",
    borderRadius: 30,
    backgroundColor: "black"
  },
  climeight: {
    position: "absolute",
    left: 20,
    top: 30,
    color: "black",
    fontSize: 22,
    fontWeight: 700,
  },


});