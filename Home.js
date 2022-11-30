import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Home = ({navigation}) => {
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
        <View
          style={{
            alignItems: "center",
            // paddingHorizontal: "10%",
            flexDirection: "row",
            // justifyContent: "space-between",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("./assets/avatar.png")}
              style={{ marginVertical: "10%" }}
            />
            <Image
              source={require("./assets/plus.png")}
              style={{ position: "absolute", bottom: 10, right: 2 }}
            />
            <View></View>
          </View>

          <View style={{ justifyContent: "center", marginHorizontal: "5%" }}>
            <View style={{ alignItems: "center", flexDirection: "row" }}>
              <Text style={{ fontSize: 14, color: "#fff", marginLeft: 5 }}>
                Rider
              </Text>
              <Image
                source={require("./assets/rider.png")}
                style={{ marginHorizontal: "5%" }}
              />
            </View>
            <Text style={{ fontSize: 20, color: "#fff" }}> Peter Parker</Text>
          </View>
        </View>

        <View
          style={{
            height: 50,
            width: 50,
            backgroundColor: "#222222",
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Image
            source={require("./assets/settings.png")}
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
          paddingHorizontal: "5%",
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "700" }}>
              Selected Two Wheeler
            </Text>
            <View
              style={{
                paddingHorizontal: "5%",
                paddingVertical: "1%",
                borderWidth: 1,
                borderColor: "#FFBD98",
                borderRadius: 15,
              }}
            >
              <Text style={{ fontSize: 12, color: "#F67732" }}>Scooter</Text>
            </View>
            <View
              style={{
                paddingHorizontal: "3%",
                paddingVertical: "1%",
                borderWidth: 1,
                borderColor: "#D899FF",
                borderRadius: 15,
                backgroundColor: "#DCD2FF",
              }}
            >
              <Text style={{ fontSize: 12, color: "#4E10FF" }}>
                Motor Cycle
              </Text>
            </View>
          </View>

          <TouchableOpacity style={{ alignItems: "center", marginVertical: "5%" }} onPress={() => navigation.navigate('route')}>
            <Image
              source={require("./assets/fstBike.png")}
              style={{ width: "100%" }}
            />
          </TouchableOpacity>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Image
                source={require("./assets/1stBike.png")}
                // style={{ width: "100%" }}
              />
              <Image
                source={require("./assets/2ndBike.png")}
                // style={{ width: "100%" }}
              />
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
