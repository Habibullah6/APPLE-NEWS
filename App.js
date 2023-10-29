import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Home from "./App/Screen/Home";
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigator from "./App/Navigations/HomeNavigator";

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <HomeNavigator />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
});
