import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Color from "../../Shared/Color";
import { useNavigation } from "@react-navigation/native";

export default function TopHeadlineSlider({ newsList }) {
  const navigation = useNavigation();
  return (
    <View style={{ marginTop: 15 }}>
      <FlatList
        data={newsList}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("read-news", { news: item })}
            style={{
              width: Dimensions.get("screen").width * 0.8,
              marginRight: 10,
            }}
          >
            <Image
              source={{ uri: item.urlToImage }}
              style={{
                height: Dimensions.get("screen").width * 0.75,
                borderRadius: 10,
              }}
            />
            <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 10 }}>
              {item.title}
            </Text>
            <Text style={{ marginTop: 5, color: Color.primary }}>
              {item?.source?.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
