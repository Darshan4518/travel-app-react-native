import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import topDestinations from "../data/DestinationPlaces";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
const Listing = () => {
  const navigate = useNavigation();
  return (
    <View className=" p-2 my-2">
      <Text className=" font-bold text-xl text-gray-600">Listing</Text>
      <View className=" my-3">
        <FlatList
          data={topDestinations}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                navigate.navigate("details/detail", { item: item });
              }}
            >
              <View className=" mx-3 bg-white p-3 rounded-xl">
                <View className=" w-[250px] h-[220px] mb-2">
                  <Image
                    source={{ uri: item.image }}
                    className=" w-[100%] h-[100%] rounded-xl  "
                  />
                </View>
                <View className=" mt-4 px-2">
                  <Text
                    className=" text-xl font-bold text-gray-800"
                    numberOfLines={1}
                  >
                    {item.name}
                  </Text>
                  <View className=" flex-row items-center justify-between">
                    <View className=" flex-row items-center my-2">
                      <Entypo name="location-pin" size={20} color="orange" />
                      <Text
                        className=" font-bold text-sm pr-2"
                        numberOfLines={1}
                      >
                        {item.location}
                      </Text>
                    </View>
                    <Text className=" text-orange-400 font-bold">
                      INR {item.price}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Listing;
