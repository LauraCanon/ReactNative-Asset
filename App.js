import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import styles from "./components/Card/styles";
import Cards from "./components/Card";

export default function App() {
  return (
    <View style={styles.container}>
      <Cards />
      <StatusBar style="auto" />
    </View>
  );
}
