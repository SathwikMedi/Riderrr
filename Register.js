import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const Register = ({ navigation }) => {
  return (
    <View
      style={{
        // alignItems: "center",
        paddingHorizontal: "5%",
        height: "100%",
        backgroundColor: "#010101",
        paddingTop: "15%",
      }}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={require("./assets/back.png")} />
      </TouchableOpacity>

      <Text style={{ fontSize: 40, color: "#fff", fontWeight: "bold" }}>
        Hey Rider!
      </Text>

      <View style={{ alignItems: "center" }}>
        <Image
          source={require("./assets/avatar.png")}
          style={{ marginVertical: "10%" }}
        />
        <Image
          source={require("./assets/plus.png")}
          style={{ position: "absolute", bottom: 28 }}
        />
      </View>
      <View style={styles.textInputView}>
        <Image
          source={require("./assets/userAvatar.png")}
          //   style={{ position: "absolute", bottom: 28 }}
        />
        <TextInput
          placeholder="Enter Your Full Name"
          placeholderTextColor={"#6B6B6B"}

          style={{ marginHorizontal: "10%" , color:'#fff'}}
        />
      </View>
      <View style={[styles.textInputView]}>
        <Image
          source={require("./assets/call.png")}
          //   style={{ position: "absolute", bottom: 28 }}
        />
        <TextInput
          placeholder="Enter Your Full Name"
          placeholderTextColor={"#6B6B6B"}
          style={{ marginHorizontal: "10%",color:'#fff' }}
        />

        <Text
          style={{
            color: "#00CB20",
            fontSize: 15,
            fontWeight: "bold",
            left: 40,
          }}
        >
          Send OTP
        </Text>
      </View>

      <View style={styles.textInputView}>
        {/* <Image
          source={require("./assets/call.png")}
          //   style={{ position: "absolute", bottom: 28 }}
        /> */}
        <TextInput
          placeholder="Enter OTP"
          placeholderTextColor={"#6B6B6B"}
            style={{ color:'#fff' }}
        />
        <Text
          style={{
            color: "#00CB20",
            fontSize: 15,
            fontWeight: "bold",
            left: "370%",
          }}
        >
          Verify OTP
        </Text>
      </View>

      <View style={styles.textInputView}>
        <Image
          source={require("./assets/message.png")}
          //   style={{ position: "absolute", bottom: 28 }}
        />
        <TextInput
          placeholder="Enter Your Email ID"
          placeholderTextColor={"#6B6B6B"}
          style={{ color:'#fff' }}
        />
      </View>

      <View style={styles.textInputView}>
        <TextInput
          placeholder="Select your ID for Verification"
          placeholderTextColor={"#6B6B6B"}
            style={{ color:'#fff' }}
        />

        <Image
          source={require("./assets/Dropdown.png")}
          style={{ left: "250%" }}
        />
      </View>

      <View style={styles.textInputView}>
        <TextInput
          placeholder="Enter Adhaar Number"
          placeholderTextColor={"#6B6B6B"}
            style={{ color:'#fff' }}
        />
      </View>

      <TouchableOpacity
        style={{
          height: 50,
          borderRadius: 25,
          borderWidth: 1,
          borderColor: "#fff",
          width: "50%",
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "center",
          marginVertical: "10%",
        }}
     onPress={() => navigation.navigate('App')}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
          Proceed
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;

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
