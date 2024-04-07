import React, { useState, useEffect } from "react";
import {
  View,
  Alert,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaView } from "react-navigation";

// Import Firebase
import { addDoc } from "firebase/firestore";
import { dbCollection } from "../database/config";

const AddTransaction = () => {
  const [transaction, setTransaction] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [item, setItem] = useState("");

  function generateTransactionId() {
    const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const idLength = 12;
    let transactionId = "";

    for (let i = 0; i < idLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      transactionId += characters[randomIndex];
    }

    return transactionId;
  }

  const AddNewTransaction = async () => {
    try {
      const newTransactionId = generateTransactionId();
      const docRef = await addDoc(dbCollection, {
        transaction,
        imgUrl,
        price,
        date,
        location,
        item,
        transactionId: newTransactionId,
      });

      setTransaction("");
      setImgUrl("");
      setPrice("");
      setDate("");
      setLocation("");
      setItem("");
      Alert.alert("Transaction", "Transaction Added Successfully", [
        { text: "OK" },
      ]);
    } catch (error) {
      console.error("Error adding transaction:", error);
    }
  };

  return (
    <SafeAreaView>
      <Text style={styles.text}>Add A New Transaction</Text>
      <TextInput
        style={styles.input}
        placeholder="Transaction Name"
        onChangeText={setTransaction}
        value={transaction}
      />
      <TextInput
        style={styles.input}
        placeholder="Transaction Image Url"
        onChangeText={setImgUrl}
        value={imgUrl}
      />
      <TextInput
        style={styles.input}
        placeholder="Transaction Price"
        onChangeText={setPrice}
        value={price}
      />
      <TextInput
        style={styles.input}
        placeholder="Transaction Date"
        onChangeText={setDate}
        value={date}
      />
      <TextInput
        style={styles.input}
        placeholder="Transaction Location"
        onChangeText={setLocation}
        value={location}
      />
      <TextInput
        style={styles.input}
        placeholder="Transaction Item"
        onChangeText={setItem}
        value={item}
      />
      <TouchableOpacity style={styles.buttonCont}>
        <Button
          style={styles.button}
          onPress={AddNewTransaction}
          labelStyle={{ color: "#ffffff" }}
        >
          Add Transaction
        </Button>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderRadius: 10,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  buttonCont: {
    display: "flex",
    justifyContent: "center",
    marginVertical: 10,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#F05A24",
    width: "80%",
  },
});

export default AddTransaction;
