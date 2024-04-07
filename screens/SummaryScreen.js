import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
// Firebase Load
import { load } from "../database/config";

const SummaryScreen = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    load()
      .then((loadedTransactions) => {
        // Update the state with the loaded transactions
        setTransactions(loadedTransactions);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading transactions:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  const totalTransactions = transactions.length;
  const totalAmount = transactions
    .reduce((acc, curr) => acc + parseFloat(curr.price), 0)
    .toFixed(2);

  const highSpendingTransaction = transactions.reduce((prev, current) =>
    parseFloat(prev.price) > parseFloat(current.price) ? prev : current
  );
  const lowSpendingTransaction = transactions.reduce((prev, current) =>
    parseFloat(prev.price) < parseFloat(current.price) ? prev : current
  );

  return (
    <View style={{ padding: 20 }}>
      <View style={styles.container}>
        <Text style={styles.boldText}>Total Transactions</Text>
        <Text style={styles.text}>{totalTransactions}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.boldText}>Balance</Text>
        <Text style={styles.text}>${totalAmount}</Text>
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
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
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
  loadingText: {
    textAlign: "center",
    padding: 10,
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
