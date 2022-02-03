import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.modal}></View>
      <Text style={styles.climeight}>climeight.</Text>
      <StatusBar style="auto" />
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
    left: "1%",
    top: "1%",
    color: "black",
    fontSize: 22,
    fontWeight: 700,
  }
});
