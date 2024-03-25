import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
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
        <View style={styles.flex}>
          <Image style={styles.img} src={item.img} />
          <View>
            <Text style={styles.bigText}>{item.transaction}</Text>
            <Text>${item.price}</Text>
          </View>
        </View>
        <View>
          <FontAwesome5
            name="arrow-circle-right"
            size={24}
            color="#F05A24"
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
    backgroundColor: "#F8F8F8",
    padding: 15,
    borderBottomWidth: 2,
    borderBottomColor: "white",
  },
  bigText: {
    fontSize: 20,
    fontWeight: "700",
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
  },
  img: {
    width: 40,
    height: "auto",
    objectFit: "fill",
    alignItems: "center",
  },
});

export default TransactionsListScreen;
