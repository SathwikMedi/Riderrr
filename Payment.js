import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const Payment = ({navigation}) => {
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
          Payment Details
        </Text>
        <View style={{ width: "10%" }} />
      </View>

      <View style={{ paddingHorizontal: "10%", paddingTop: 50 }}>
        <Text style={{ fontSize: 16, color: "#fff", fontWeight: "bold" }}>
          Enter your Driving licence Number
        </Text>
        <Text style={{ fontSize: 14, color: "#7D7D7D", marginVertical: 5 }}>
          Enter your 15 digit alphanumeric driving licence{"\n"}
          number
        </Text>

        <View style={styles.textInputView}>
          <TextInput
            placeholder="Enter licence number"
            placeholderTextColor={"#6B6B6B"}
            //   style={{ marginHorizontal: "10%" }}
          />
        </View>

        <Text
          style={{
            fontSize: 16,
            color: "#fff",
            fontWeight: "bold",
            marginVertical: "5%",
          }}
        >
          Enter your Driving Hours
        </Text>
        <View style={styles.textInputView}>
          <TextInput
            placeholder="Enter driving hour"
            placeholderTextColor={"#6B6B6B"}
            //   style={{ marginHorizontal: "10%" }}
          />
        </View>
        <Image source={require("./assets/card.png")} style={{resizeMode:'contain', height:300, width:350, marginVertical:25}}/>
<TouchableOpacity onPress={() => navigation.navigate('confirm')}>
        <Image source={require("./assets/pay.png")} style={{resizeMode:'contain', alignSelf:'center', marginVertical:25}}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  textInputView: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 55,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#fff",
    paddingHorizontal: 20,
    marginVertical: "2%",
  },
});
