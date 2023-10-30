import React, { useEffect } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Share,
  Text,
  View,
} from "react-native";
import Color from "../Shared/Color";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

import * as WebBrowser from "expo-web-browser";

export default function ReadNews() {
  const navigation = useNavigation();
  const news = useRoute().params.news;
  useEffect(() => {}, []);

  const shareNews = () => {
    Share.share({
      message: news.title + "\n Read more" + news.description,
    });
  };
  return (
    <ScrollView style={{ backgroundColor: Color.white, flex: 1 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 10,
          marginTop: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => shareNews()}>
          <Ionicons name="share-outline" size={28} color="black" />
        </TouchableOpacity>
      </View>
      <Image
        source={{ uri: news.urlToImage }}
        style={{ width: "100%", height: 300, borderRadius: 15 }}
      />
      <Text style={{ marginTop: 10, color: Color.primary, fontSize: 16 }}>
        {news.source.name}
      </Text>
      <Text style={{ marginTop: 10, fontSize: 22, fontWeight: "bold" }}>
        {news.title}
      </Text>
      <Text
        style={{
          marginTop: 10,
          color: Color.gray,
          fontSize: 16,
          lineHeight: 30,
        }}
      >
        {news.description}
      </Text>

      <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync(news.url)}>
        <Text
          style={{
            marginTop: 10,
            color: Color.primary,
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          Read More
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
