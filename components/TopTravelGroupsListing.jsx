import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import travelGroupsInIndia from "../data/TravelGroupsList";
import { AntDesign } from "@expo/vector-icons";
const TopTravelGroupsListing = () => {
  return (
    <View className=" my-1 p-2">
      <Text className=" font-bold text-xl text-gray-600">
        TopTravelGroupsListing
      </Text>
      <View>
        <FlatList
          horizontal
          data={travelGroupsInIndia}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View className=" flex-row my-3 items-center bg-white mx-3 px-3 py-2 rounded-xl">
              <View className=" w-[60px] h-[60px]">
                <Image
                  source={{ uri: item.image }}
                  className=" w-[100%] h-[100%]"
                />
              </View>
              <View>
                <Text className=" font-bold my-2">{item.name}</Text>
                <View className=" flex-row items-center">
                  <AntDesign name="star" size={18} color="orange" />
                  <Text className=" font-bold px-2">{item.rating} /1223 </Text>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default TopTravelGroupsListing;
