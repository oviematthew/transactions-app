import React from "react";
import { View, Text, StyleSheet } from "react-native";
import transactionsData from "../assets/transactions.json";

const SummaryScreen = () => {
  const totalTransactions = transactionsData.length;
  const totalAmount = transactionsData.reduce(
    (acc, curr) => acc + curr.price,
    0
  );
  const highSpendingTransaction = transactionsData.find(
    (transaction) =>
      transaction.price ===
      Math.max(...transactionsData.map((transaction) => transaction.price))
  );
  const lowSpendingTransaction = transactionsData.find(
    (transaction) =>
      transaction.price ===
      Math.min(...transactionsData.map((transaction) => transaction.price))
  );

  return (
    <View style={{ padding: 20 }}>
      <View style={styles.container}>
        <Text style={styles.boldText}>Total Transactions</Text>
        <Text style={styles.text}>{totalTransactions}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.boldText}>Balance</Text>
        <Text style={styles.text}>
          ${totalAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.boldText}>Highest Spending</Text>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{highSpendingTransaction.transaction}</Text>
          <Text style={styles.text}>${highSpendingTransaction.price}</Text>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.boldText}>Lowest Spending</Text>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{lowSpendingTransaction.transaction}</Text>
          <Text style={styles.text}>${lowSpendingTransaction.price}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F05A24",
    color: "#fff",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 10,
    marginTop: 10,
  },
  textContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  boldText: {
    color: "#fff",
    fontWeight: "700",
  },
  text: {
    color: "#fff",
    marginBottom: 5,
  },
});

export default SummaryScreen;
