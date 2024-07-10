import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import "../global.css";
const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="details/detail" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;
