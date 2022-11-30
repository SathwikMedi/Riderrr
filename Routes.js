import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import SwipeButton from "rn-swipe-button";

const Routes = ({ navigation }) => {
  const [book, setBook] = useState(false);
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
          Routes
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
          source={require("./assets/map.png")}
          style={{
            resizeMode: "cover",
            width: "100%",
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
          }}
        />
        <Image source={require("./assets/direction.png")} style={{position:'absolute', height:290, width:200, top:100, left:50}}/>

        <View
          style={{
            height: "50%",
            backgroundColor: "#F9F9F9",
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            //   marginTop: "-15%",
            paddingVertical: "5%",
            //   paddingHorizontal: "5%",
          }}
        >
          <View
            style={{
              height: 5,
              width: "10%",
              backgroundColor: "#B5B5B5",
              borderRadius: 15,
              alignSelf: "center",
            }}
          />
          {!book ? (
            <View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginHorizontal: "5%",
                  marginTop: "10%",
                }}
              >
                <Image
                  source={require("./assets/bike.png")}
                  style={{ resizeMode: "cover" }}
                />

                <View>
                  <Text
                    style={{ fontSize: 26, fontWeight: "bold", color: "#000" }}
                  >
                    Honda Dio{" "}
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={{ alignItems: "center" }}>
                      <Text
                        style={{
                          color: "#BDBDBD",
                          fontWeight: "700",
                          fontSize: 12,
                        }}
                      >
                        Distance
                      </Text>
                      <Text
                        style={{
                          color: "#000",
                          fontWeight: "900",
                          fontSize: 13,
                        }}
                      >
                        21Km
                      </Text>
                    </View>
                    <View
                      style={{
                        width: 2,
                        height: 40,
                        backgroundColor: "#B5B5B5",
                        marginHorizontal: "5%",
                      }}
                    />

                    <View style={{ alignItems: "center" }}>
                      <Text
                        style={{
                          color: "#BDBDBD",
                          fontWeight: "700",
                          fontSize: 12,
                        }}
                      >
                        Speed
                      </Text>
                      <Text
                        style={{
                          color: "#000",
                          fontWeight: "900",
                          fontSize: 13,
                        }}
                      >
                        90kmh
                      </Text>
                    </View>
                    <View
                      style={{
                        width: 2,
                        height: 40,
                        backgroundColor: "#B5B5B5",
                        marginHorizontal: "5%",
                      }}
                    />

                    <View style={{ alignItems: "center" }}>
                      <Text
                        style={{
                          color: "#BDBDBD",
                          fontWeight: "700",
                          fontSize: 12,
                        }}
                      >
                        Power
                      </Text>
                      <Text
                        style={{
                          color: "#000",
                          fontWeight: "900",
                          fontSize: 13,
                        }}
                      >
                        750CC
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              <Image
                source={require("./assets/hosted.png")}
                style={{
                  resizeMode: "cover",
                  alignSelf: "center",
                  marginVertical: 10,
                }}
              />

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingHorizontal: "5%",
                }}
              >
                <Image
                  source={require("./assets/3km.png")}
                  style={{
                    resizeMode: "cover",
                    alignSelf: "center",
                    marginVertical: 15,
                  }}
                />
                <TouchableOpacity onPress={() => setBook(true)}>
                  <Image
                    source={require("./assets/rent.png")}
                    style={{
                      resizeMode: "cover",
                      alignSelf: "center",
                      marginVertical: 15,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View
              style={{ alignItems: "center", justifyContent: "space-around" }}
            >
              <Image
                source={require("./assets/calendar.png")}
                style={{
                  resizeMode: "contain",
                  alignSelf: "center",
                  marginVertical: 15,
                  width: 350,
                  height: 150,
                }}
              />
              <SwipeButton
                disabled={false}
                //disable the button by doing true (Optional)
                swipeSuccessThreshold={70}
                height={45}
                //height of the button (Optional)
                width={330}
                //width of the button (Optional)
                title="Swipe to Book"
                //Text inside the button (Optional)
                //   thumbIconImageSource={<Image source={require('./assets/export.png')}/>}
                //You can also set your own icon (Optional)
                onSwipeSuccess={() => {
                  navigation.navigate("payment");
                }}
                //After the completion of swipe (Optional)
                railFillBackgroundColor="#10C600" //(Optional)
                railFillBorderColor="#10C600" //(Optional)
                thumbIconBackgroundColor="#002A78" //(Optional)
                thumbIconBorderColor="#10C600" //(Optional)
                railBackgroundColor="#3172E9" //(Optional)
                //   railBorderColor="#bbeaff" //(Optional)
              />
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default Routes;

const styles = StyleSheet.create({});
