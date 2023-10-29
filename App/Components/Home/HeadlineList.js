import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import Color from "../../Shared/Color";

export default function HeadlineList({ newsList }) {
  return (
    <View>
      <FlatList
        style={{ marginBottom: 30 }}
        data={newsList}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View>
            <View
              style={{
                height: 2,
                backgroundColor: Color.lightGray,
                marginTop: 10,
              }}
            ></View>
            <TouchableOpacity
              onPress={() => console.log("click")}
              style={{
                marginTop: 15,

                display: "flex",
                flexDirection: "row",
              }}
            >
              <Image
                source={{ uri: item.urlToImage }}
                style={{ width: 130, height: 130, borderRadius: 10 }}
              />

              <View style={{ marginRight: 130, marginLeft: 12 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  {item.title}
                </Text>
                <Text style={{ marginTop: 5, color: Color.primary }}>
                  {item?.source?.name}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
