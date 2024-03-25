import { StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import TransactionsListScreen from "./screens/TransactionsListScreen";
import TransactionDetailScreen from "./screens/TransactionDetailScreen";
import SummaryScreen from "./screens/SummaryScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#F05A24",
        }}
      >
        <Tab.Screen
          name="Transactions "
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <FontAwesome5 name="money-bill-wave" size={24} color="#F05A24" />
            ),
          }}
        >
          {() => (
            <Stack.Navigator>
              <Stack.Screen
                name="Transactions"
                component={TransactionsListScreen}
                options={{ headerShown: true }}
              />
              <Stack.Screen
                name="Transaction Details"
                component={TransactionDetailScreen}
                options={{
                  title: "Transaction Details",
                  headerBackTitle: "Transactions",
                }}
              />
            </Stack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen
          name="Summary"
          options={{
            tabBarIcon: () => (
              <FontAwesome5 name="th-list" size={24} color="#F05A24" />
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
