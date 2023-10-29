import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CategoryTextSlider from "../Components/Home/CategoryTextSlider";
import Color from "../Shared/Color";
import { Ionicons } from "@expo/vector-icons";
import TopHeadlineSlider from "../Components/Home/TopHeadlineSlider";
import HeadlineList from "../Components/Home/HeadlineList";

export default function Home() {
  return (
    <View>
      <View style={styles.topAppBar}>
        <Text style={styles.appName}>Apple News</Text>
        <Ionicons name="notifications-outline" size={26} color="black" />
      </View>
      <CategoryTextSlider />
      <TopHeadlineSlider />
      <HeadlineList />
    </View>
  );
}

const styles = StyleSheet.create({
  appName: {
    fontSize: 24,
    fontWeight: "bold",
    color: Color.primary,
  },

  topAppBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
});
