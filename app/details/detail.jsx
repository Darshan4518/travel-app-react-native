import { View, Text, Image } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";

const detail = () => {
  const { item } = useRoute().params;

  return (
    <SafeAreaView>
      <View>
        <Image source={{ uri: item.image }} className=" w-full h-[300px]" />
      </View>
      <View className=" bg-white p-5">
        <Text className=" text-2xl font-bold text-gray-800 px-3">
          {item.name}
        </Text>
        <View className=" flex-row items-center my-4">
          <Entypo name="location-pin" size={25} color="orange" />
          <Text className=" font-bold text-xl pr-2" numberOfLines={1}>
            {item.location}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default detail;
