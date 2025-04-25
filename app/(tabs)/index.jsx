import { View, Text } from "react-native";
import React from "react";
import { Redirect } from "expo-router";

export default function index() {
  return (
    <View>
      <Text>index</Text>
      <Redirect href={"login"} />
    </View>
  );
}
