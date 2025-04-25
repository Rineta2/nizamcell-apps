import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import React from "react";

import Colors from "../../constant/Colors";

import { router } from "expo-router";

export default function index() {
  const handleContinue = () => {
    router.push("/login/signin");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 40,
        }}
      >
        <Image
          source={require("../../assets/images/login.jpg")}
          style={styles.image}
        />
      </View>

      <View
        style={{
          marginTop: 20,
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 20,
        }}
      >
        <View>
          <Text style={styles.title}>Hardware</Text>
        </View>

        <View>
          <Text style={styles.title}>Software</Text>
        </View>

        <View>
          <Text style={styles.title}>Pulsa & Voucher</Text>
        </View>
      </View>

      <View
        style={{
          padding: 25,
          height: "100%",
          backgroundColor: Colors.PRIMARY,
          marginTop: 20,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        <Text
          style={{
            fontSize: 36,
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
            lineHeight: 40,
            marginBottom: 20,
          }}
        >
          Selamat datang di Nizam Cellular Leuwiliang
        </Text>

        <Text
          style={{
            fontSize: 18,
            color: "white",
            textAlign: "center",
            lineHeight: 30,
            marginBottom: 20,
          }}
        >
          Kami menangani berbagai masalah handphone dengan teknisi berpengalaman
          dan harga terjangkau
        </Text>

        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <Text
            style={{
              fontSize: 18,
              color: Colors.PRIMARY,
              fontWeight: "bold",
            }}
          >
            Continue
          </Text>
        </TouchableOpacity>

        <Text
          style={{
            color: "white",
            textAlign: "center",
            marginTop: 20,
            fontSize: 16,
          }}
        >
          Note: Klik continue button, untuk melanjutkan
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 300,
    borderRadius: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },

  button: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginTop: 25,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
