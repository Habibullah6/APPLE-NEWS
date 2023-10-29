import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import CategoryTextSlider from "../Components/Home/CategoryTextSlider";
import Color from "../Shared/Color";
import { Ionicons } from "@expo/vector-icons";
import TopHeadlineSlider from "../Components/Home/TopHeadlineSlider";
import HeadlineList from "../Components/Home/HeadlineList";
import GlobalApi from "../Services/GlobalApi";

export default function Home() {
  const [newsList, setNewsList] = useState([]);
  useEffect(() => {
    getTopHeadline();
  }, []);

  const getTopHeadline = async () => {
    const result = (await GlobalApi.getTopHeadline).data;
    setNewsList(result?.articles);
  };
  return (
    <ScrollView style={{ backgroundColor: Color.white }}>
      <View style={styles.topAppBar}>
        <Text style={styles.appName}>Apple News</Text>
        <Ionicons name="notifications-outline" size={26} color="black" />
      </View>
      <CategoryTextSlider />
      <TopHeadlineSlider newsList={newsList} />
      <HeadlineList newsList={newsList} />
    </ScrollView>
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
