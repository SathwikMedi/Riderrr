import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Loading = ({ navigation }) => {
  return (
    <View
      style={{
        alignItems: "center",
        height: "100%",
        backgroundColor: "#010101",
        paddingTop: "15%",
      }}
    >
      <Text style={{ fontSize: 64, color: "#fff", fontWeight: "bold" }}>
        Riderrr.
      </Text>

      <View style={{ marginVertical: "5%" }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text style={{ fontSize: 17, color: "#fff" }}>Let’s Ride</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={{ fontSize: 17, color: "#fff" }}>Wanna Host!</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{ fontSize: 17, color: "#fff" }}>or Login using</Text>
        <Image
          source={require("./assets/google.png")}
          style={{ marginHorizontal: "5%" }}
        />
        <Image source={require("./assets/facebook.png")} />
      </View>
      {/* <Text onPress={() => navigation.navigate("App")}>Loading</Text> */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          marginVertical: "30%",
        }}
      >
        <Image
          source={require("./assets/Screen_1_Black_Bike.png")}
          style={{ marginLeft: "-10%", resizeMode: "cover" }}
        />
        <Image
          source={require("./assets/Screen1_Black_Scooty.png")}
          style={{ marginLeft: "-10%", resizeMode: "cover" }}
        />
      </View>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  button: {
    width: 219,
    height: 55,
    backgroundColor: "#383838",
    borderRadius: 37,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
});
