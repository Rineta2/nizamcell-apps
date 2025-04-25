import React from "react";

import { Tabs } from "expo-router";

import AntDesign from "@expo/vector-icons/AntDesign";

import Entypo from "@expo/vector-icons/Entypo";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="AddNew"
        options={{
          tabBarLabel: "Create",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="pluscircle" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="user" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
