import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";

const TransactionDetailScreen = ({ route }) => {
  const { transaction } = route.params;
  return (
    <SafeAreaView>
      <View style={{ padding: 16 }}>
        <View style={styles.imgView}>
          <Image style={styles.img} src={transaction.imgUrl} />
        </View>
        <View>
          <View style={styles.container}>
            <Text style={styles.text}>Transaction:</Text>
            <Text style={styles.text}>{transaction.transaction}</Text>
          </View>

          <View style={styles.container}>
            <Text style={styles.text}>Transaction ID:</Text>
            <Text style={styles.text}>{transaction.transactionId}</Text>
          </View>

          <View style={styles.container}>
            <Text style={styles.text}>Item:</Text>
            <Text style={styles.text}>{transaction.item}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>Amount:</Text>
            <Text style={styles.text}>${transaction.price}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>Date:</Text>
            <Text style={styles.text}>{transaction.date}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>Location:</Text>
            <Text style={styles.text}>{transaction.location}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F05A24",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginTop: 10,
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
  imgView: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },
  img: {
    width: "30%",
    height: 100,
    objectFit: "fill",
  },
  text: {
    color: "#fff",
  },
});

export default TransactionDetailScreen;
