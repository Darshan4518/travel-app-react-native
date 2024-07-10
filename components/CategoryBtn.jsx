import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import DestinationCategories from "../data/DestinationCategories";

const CategoryBtn = () => {
  const [activeBar, setActiveBar] = useState(0);

  return (
    <View className=" p-2">
      <Text className=" font-bold text-xl  text-gray-600 my-3">Category</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={DestinationCategories}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              setActiveBar(item.id);
            }}
            key={item.id}
          >
            <View
              className={` flex-row mx-3 items-center py-2 px-3 
               ${
                 activeBar == item.id ? "bg-yellow-300 " : " bg-white"
               } justify-center rounded-xl shadow-xl shadow-gray-600`}
            >
              <View className="px-1">{item.icon}</View>
              <Text className=" font-bold text-lg">{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CategoryBtn;
