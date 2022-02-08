import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Registration from './app-pages/registration';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>climeight.</Text>
      <Registration></Registration>
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
  subtitle: {
    position: "absolute",
    left: "7%",
    top: "3%",
    fontSize: 18,
    fontWeight: 600,
    color: "black"
  }
});
