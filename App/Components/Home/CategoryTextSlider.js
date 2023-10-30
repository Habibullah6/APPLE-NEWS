import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Color from "../../Shared/Color";

export default function CategoryTextSlider({ selectCategory }) {
  const [active, setActive] = useState(1);
  const categoryData = [
    { id: 1, name: "Latest" },
    { id: 2, name: "World" },
    { id: 3, name: "Business" },
    { id: 4, name: "Sports" },
    { id: 5, name: "Life" },
    { id: 6, name: "Movie" },
  ];

  const onCategoryClick = (id) => {
    setActive(id);
  };
  return (
    <View style={{ marginTop: 10 }}>
      <FlatList
        data={categoryData}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              onCategoryClick(item.id);
              selectCategory(item.name);
            }}
          >
            <Text
              style={
                item.id === active ? styles.selectedText : styles.unselectedText
              }
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  unselectedText: {
    marginRight: 15,
    fontSize: 20,
    fontWeight: "bold",
    color: Color.gray,
  },
  selectedText: {
    marginRight: 15,
    fontSize: 20,
    fontWeight: "bold",
    color: Color.primary,
  },
});
