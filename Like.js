import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Like = ({navigation}) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#000", paddingTop: "10%" }}>
      <View
        style={{
          paddingHorizontal: "5%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require("./assets/back.png")} />
        </TouchableOpacity>

        <Text style={{ fontSize: 26, fontWeight: "bold", color: "#fff" }}>
        Favourites
        </Text>

        <View
          style={{
            height: 50,
            width: 50,
            backgroundColor: "#222222",
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("./assets/bell.png")}
            style={{ marginHorizontal: "5%" }}
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "#F9F9F9",
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          marginTop: "10%",
          paddingVertical: "5%",
          //   paddingHorizontal: "5%",
        }}
      >
        <Image
          source={require("./assets/bike2.png")}
          style={{
            marginVertical: "2%",
            alignSelf: "center",
            width: 400,
            height: 150,
          }}
        />
          <Image
          source={require("./assets/bike1.png")}
          style={{
            marginVertical: "2%",
            alignSelf: "center",
            width: 400,
            height: 150,
          }}
        />
          <Image
          source={require("./assets/bike2.png")}
          style={{
            marginVertical: "2%",
            alignSelf: "center",
            width: 400,
            height: 150,
          }}
        />
          <Image
          source={require("./assets/bike1.png")}
          style={{
            marginVertical: "2%",
            alignSelf: "center",
            width: 400,
            height: 150,
          }}
        />
      </View>
    </View>
  );
};

export default Like;

const styles = StyleSheet.create({});
