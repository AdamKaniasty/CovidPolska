import React, { Component } from "react";
import * as firebase from "firebase";
import { RFValue } from "react-native-responsive-fontsize";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";

import {
  StyleSheet,
  Image,
  SafeAreaView,
  StatusBar,
  Platform,
  View,
  Dimensions,
  Text,
  ScrollView,
} from "react-native";
import { color } from "react-native-reanimated";

class Safety extends Component {
  render() {
    const screenHeight = Dimensions.get("window").height;
    return (
      <SafeAreaView style={styles.main_conteiner}>
        <View style={styles.Header}>
          <Text style={styles.HeaderText}>Bezpieczeństwo</Text>
        </View>
        <View style={styles.object}>
          <View style={styles.imageHolder}>
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("./assets/1.png")}
            ></Image>
          </View>
          <Text style={styles.textHolder}>
            Pamietaj o maseczce. Pomoże ona chronić Ciebie i innych
          </Text>
        </View>
        <View style={styles.object}>
          <View style={styles.imageHolder}>
            <Image
              style={{ width: "95%", height: "100%" }}
              source={require("./assets/2.png")}
            ></Image>
          </View>
          <Text style={styles.textHolder}>
            Ogranicz wychodzenie z domu do minimum.
          </Text>
        </View>
        <View style={styles.object}>
          <View style={styles.imageHolder}>
            <Image
              style={{ width: "84%", height: "100%" }}
              source={require("./assets/3.png")}
            ></Image>
          </View>
          <Text style={styles.textHolder}>
            W razie podejrzenia zakażeniem zadzwoń pod 800 190 590
          </Text>
        </View>
        <View style={styles.object}>
          <View style={styles.imageHolder}>
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("./assets/4.png")}
            ></Image>
          </View>
          <Text style={styles.textHolder}>
            Myj dokładnie jedzenie przed spożyciem
          </Text>
        </View>
        <View style={styles.object}>
          <View style={styles.imageHolder}>
            <Image
              style={{ width: "95%", height: "100%" }}
              source={require("./assets/5.png")}
            ></Image>
          </View>
          <Text style={styles.textHolder}>
            Często myj ręcę. Obowiązkowo przed jedzeniem oraz po przyjściu do
            domu
          </Text>
        </View>
        <View style={styles.object}>
          <View style={styles.imageHolder}>
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("./assets/6.png")}
            ></Image>
          </View>
          <Text style={styles.textHolder}>
            W miejscach publicznych zachowaj odstęp 1.5 metra
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  main_conteiner: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: "space-evenly",
    height: "100%",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#F5F5F6",
  },
  HeaderText: {
    fontSize: RFValue(30),
    marginLeft: "6%",
    color: "rgba(359, 72, 100, 100)",
  },
  Header: {
    width: "100%",
    height: "10%",
    justifyContent: "center",
  },
  object: {
    marginTop: "2.5%",
    width: "46%",
    height: "27%",
    backgroundColor: "#FFFEFE",
    borderRadius: 10,
  },
  imageHolder: {
    width: "60%",
    height: "50%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",

    marginTop: "10%",
  },
  textHolder: {
    margin: "7%",
    marginTop: "5%",
    fontSize: RFValue(10),
    textAlign: "center",
  },

  //   main_conteiner: {
  //     justifyContent: "space-around",
  //     alignItems: "flex-start",
  //     backgroundColor: "red",
  //     height: Dimensions.get("screen").height * 2,
  //     width: Dimensions.get("screen").width,
  //     flexDirection: "row",
  //     flexWrap: "wrap",
  //   },
});

export default Safety;
