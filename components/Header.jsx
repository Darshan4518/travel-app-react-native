import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

import { FontAwesome } from "@expo/vector-icons";
const Header = () => {
  return (
    <View className=" flex-row items-center justify-between my-3">
      <TouchableOpacity>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStsz-ePYChlKmmDp0G6-3nUZOJQ3d8KmY7DA&s",
          }}
          className=" w-[40px] h-[40px] ml-4  rounded-2xl "
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome name="bell-o" size={28} color="black" className=" mr-4 " />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
