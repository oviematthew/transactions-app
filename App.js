import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TransactionsScreen from "./screens/TransactionsListScreen";
import SummaryScreen from "./screens/SummaryScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Transactions"
          options={{
            tabBarIcon: () => (
              <FontAwesome5 name="money-bill-wave" size={24} color="yellow" />
            ),
          }}
          component={TransactionsScreen}
        />
        <Tab.Screen
          name="Summary"
          options={{
            tabBarIcon: () => (
              <FontAwesome5 name="th-list" size={24} color="yellow" />
            ),
          }}
          component={SummaryScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
