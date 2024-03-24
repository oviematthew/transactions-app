// TransactionDetailScreen.js
import React from "react";
import { View, Text, Button } from "react-native";

const TransactionDetailScreen = ({ route, navigation }) => {
  const { transaction } = route.params;

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        {transaction.name}
      </Text>
      <Text>Amount: {transaction.amount}</Text>
      <Text>Date: {transaction.date}</Text>
      <Text>Category: {transaction.category}</Text>
      {/* Add more details as needed */}
      <Button
        title="Back to Transactions"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default TransactionDetailScreen;
