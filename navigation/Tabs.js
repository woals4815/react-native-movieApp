import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import Fav from "../screens/Favs/FavContainer";
import { useLayoutEffect } from "react";
import { Platform } from "react-native";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const Tabs = createBottomTabNavigator();

const getHeaderName = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Favourites";
  return routeName; //route?.state?.routeNames[route.state.index] || "Movies"; (temporary solution)
};
export default (props) => {
  const { route, navigation } = props;
  useLayoutEffect(() => {
    const title = getHeaderName(route);
    navigation.setOptions({
      title: title,
    });
  }, [route]);
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName = Platform.OS === "ios" ? "ios-" : "md-";
          if (route.name === "Movies") {
            iconName += "film";
          } else if (route.name === "TV") {
            iconName += "tv";
          } else if (route.name === "Search") {
            iconName += "search";
          } else if (route.name === "Discovery") {
            iconName += "heart";
          }
          return (
            <Ionicons
              name={iconName}
              color={focused ? "white" : "grey"}
              size={26}
            />
          );
        },
      })}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: "black",
          borderTopColor: "black",
        },
      }}
    >
      <Tabs.Screen name="TV" component={Tv} />
      <Tabs.Screen name="Movies" component={Movies} />
      <Tabs.Screen name="Search" component={Search} />
      <Tabs.Screen name="Discovery" component={Fav} />
    </Tabs.Navigator>
  );
};
