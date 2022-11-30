import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Map = ({navigation}) => {
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
      Nearby Bikes
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
          //   paddingVertical: "5%",
          //   paddingHorizontal: "5%",
        }}
      >
        <Image
          source={require("./assets/map2.png")}
          style={{
            resizeMode: "cover",
            width: 400,
            height:700,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
          }}
        />
        </View>
    </View>
  )
}

export default Map

const styles = StyleSheet.create({})