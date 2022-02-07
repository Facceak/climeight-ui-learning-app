import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Registration from './app-pages/registration';
export default function App() {
  return (
    <View style={styles.container}>
      <Registration></Registration>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

});
