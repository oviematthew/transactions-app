// TransactionsListScreen.js
import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import transactionsData from "../assets/transactions.json"; // Import your transaction data

const TransactionsListScreen = ({ navigation }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    setTransactions(transactionsData);
  }, []);

  const handleTransactionPress = (transaction) => {
    navigation.navigate("TransactionDetailScreen", { transaction });
  };

  const renderTransactionItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleTransactionPress(item)}>
      <View
        style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: "#ccc" }}
      >
        <Text>{item.name}</Text>
        <Text>{item.amount}</Text>
        <Text>{item.date}</Text>
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

export default TransactionsListScreen;
