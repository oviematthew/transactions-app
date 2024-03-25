// TransactionDetailScreen.js
import React from "react";
import { View, Text, Button } from "react-native";

const TransactionDetailScreen = ({ route }) => {
  const { transaction } = route.params;

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        {transaction.name}
      </Text>
      <Text>Transaction: {transaction.transaction}</Text>
      <Text>Amount: {transaction.price}</Text>
      <Text>Date: {transaction.date}</Text>
      <Text>Category: {transaction.category}</Text>
    </View>
  );
};

export default TransactionDetailScreen;
