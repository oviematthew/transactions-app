// screens/SummaryScreen.js

import React from "react";
import { View, Text } from "react-native";
import transactionsData from "../assets/transactions.json";

const SummaryScreen = () => {
  const totalTransactions = transactionsData.length;
  const totalAmount = transactionsData.reduce(
    (acc, curr) => acc + curr.price,
    0
  );
  const highSpending = Math.max(
    ...transactionsData.map((transaction) => transaction.price)
  );
  const lowSpending = Math.min(
    ...transactionsData.map((transaction) => transaction.price)
  );

  return (
    <View style={{ padding: 20 }}>
      <Text>Total Transactions: {totalTransactions}</Text>
      <Text>Total Amount Spent: {totalAmount}</Text>
      <Text>Highest Spending: {highSpending}</Text>
      <Text>Lowest Spending: {lowSpending}</Text>
    </View>
  );
};

export default SummaryScreen;
