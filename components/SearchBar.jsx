import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View className=" px-2 my-3 flex-row items-center justify-around">
      <View className=" bg-white w-[70%] h-14  items-center  flex-row justify-center px-3 rounded-xl ">
        <Ionicons
          name="search"
          size={20}
          color={"black"}
          className=" w-[10%]"
        />
        <TextInput
          placeholder="Search Place..."
          className=" h-full w-[90%] ml-2 "
        />
      </View>
      <TouchableOpacity
        style={{ backgroundColor: "orange", padding: 8, borderRadius: 10 }}
      >
        <Ionicons name="options" size={30} color={"white"} className="" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
