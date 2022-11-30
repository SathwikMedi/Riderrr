import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Confirm = ({navigation}) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#000", paddingTop: "10%",  }}>
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
        </View>

        <View style={{alignItems:'center', justifyContent:'center', flex:0.8}}>
<TouchableOpacity onPress={() => navigation.navigate('Tab')}>

      <Image source={require("./assets/confirm.png")} style={{resizeMode:'contain', alignSelf:'center', marginVertical:25, height:250, width:250}}/>
</TouchableOpacity>
        </View>
    </View>
  )
}

export default Confirm

const styles = StyleSheet.create({})