import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, Button, Alert } from 'react-native'
import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/AntDesign'
const lankaNIC = require("lanka-nic");


const UserScreen = () => {
  const [idNumber, setIdNumber] = React.useState("");
  const [getDob, setGetDob] = React.useState("");
  const [getGender, setGetGender] = React.useState("");


  const renderItem = () => {
    let { dateOfBirth, gender } = lankaNIC.getInfoFromNIC(idNumber);
    setGetDob(dateOfBirth);
    setGetGender(gender);
  };

  const clearItems = () => {
    setGetDob("");
    setGetGender("");
    setIdNumber("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <Image style={{ width: "70%", height: 150,marginLeft:55}} source={require('../images/pngwing.com.png')} />

        <View style={{ paddingHorizontal: 25 }}>

          <Text style={styles.logintxt}>Find Details using NIC number</Text>

          

          <View style={styles.txtinput}>
            <FontAwesome name='user' size={20} color="#666" style={{ paddingTop: 5, marginRight: 5 }} />
            <TextInput
              placeholder='User ID number'
              style={{ flex: 1, paddingVertical: 0 }}
              value={idNumber}
              onChangeText={text => setIdNumber(text)}

            />
          </View>


            

          <TouchableOpacity
            onPress={() => renderItem()}
            style={{
              backgroundColor: '#f3722c',
              padding: 12,
              borderRadius: 16,
              marginBottom: 30,
              marginTop: 20
            }}>
            <Text style={{ textAlign: 'center', fontWeight: '700', fontSize: 18, color: 'white' }}>Submit</Text>
          </TouchableOpacity>

          <View style={styles.txtinput}>
            <MaterialIcons name='date-range' size={20} color="#666" style={{ paddingTop: 5, marginRight: 5 }} />
            <TextInput
              placeholder='Birthday'
              style={{ flex: 1, paddingVertical: 0 }}
              value={getDob.toString()}

            />
          </View>

          <View style={styles.txtinput}>
            <Ionicons name='ios-lock-closed-outline' size={20} color="#666" style={{ paddingTop: 5, marginRight: 5 }} />
            <TextInput
              placeholder='Gender'
              style={{ flex: 1, paddingVertical: 0 }}
              value={getGender}
              

            />
          </View>
          <TouchableOpacity
            onPress={() => clearItems()}
            style={{
              backgroundColor: '#f3722c',
              padding: 12,
              borderRadius: 16,
              marginBottom: 30,
              marginTop: 20
            }}>
            <Text style={{ textAlign: 'center', fontWeight: '700', fontSize: 18, color: 'white' }}>Clear</Text>
          </TouchableOpacity>




          

        </View>




      </ScrollView>
    </SafeAreaView>
  )
}

export default UserScreen;

const styles = StyleSheet.create({
  container: {

    marginVertical: 10



  },
  logintxt: {
    fontSize: 28,
    fontWeight: 500,
    color: '#240046',
    marginBottom: 30,
    textAlign: 'center'
  },
  txtinput: {

    flexDirection: 'row',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginBottom: 25




  }
})