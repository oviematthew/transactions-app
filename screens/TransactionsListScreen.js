// TransactionsListScreen.js
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import transactionsData from "../assets/transactions.json";
import { FontAwesome5 } from "@expo/vector-icons";

const TransactionsListScreen = ({ navigation }) => {
  const [transactions, setTransactions] = useState([]);

  //as component mounts set the transactions from the json file
  useEffect(() => {
    setTransactions(transactionsData);
  }, []);

  const handleTransactionPress = (transaction) => {
    navigation.navigate("Transaction Details", { transaction });
  };

  const renderTransactionItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleTransactionPress(item)}>
      <View style={styles.container}>
        <View>
          <Text style={styles.bigText}>{item.transaction}</Text>
          <Text>{item.price}</Text>
        </View>
        <View>
          <FontAwesome5
            name="arrow-right"
            size={24}
            color="black"
            onPress={() => handleTransactionPress(item)}
          />
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={transactions}
        renderItem={renderTransactionItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
  },
  bigText: {
    fontSize: 20,
    fontWeight: "700",
  },
});

export default TransactionsListScreen;
