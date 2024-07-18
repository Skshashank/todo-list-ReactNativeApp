import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "home",
          tabBarLabelStyle: { color: "#7CB9E8" },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesome name="tasks" size={24} color="#7CB9E8" />
            ) : (
              <FontAwesome name="tasks" size={24} color="black" />
            ),
        }}
      />
      <Tabs.Screen
        name="calendar"
        option={{
          tabBarLabel: "calendar",
          tabBarLabelStyle: { color: "#7CB9E8" },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesome name="calendar" size={24} color="#7CB9E8" />
            ) : (
              <FontAwesome name="calendar" size={24} color="black" />
            ),
        }}
      />
      <Tabs.Screen
        name="profile"
        option={{
          tabBarLabel: "profile",
          tabBarLabelStyle: { color: "#7CB9E8" },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <AntDesign name="profile" size={24} color="#7CB9E8" />
            ) : (
              <AntDesign name="profile" size={24} color="black" />
            ),
        }}
      />
    </Tabs>
  );
}
