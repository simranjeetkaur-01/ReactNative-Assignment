import React from "react";
import {
  Image,
  Text,
  View,
  TextInput,
  Alert,
  TouchableHighlight
} from "react-native";
import Heart from "./assets/heart.png";
import Facebook from "./assets/facebook.png";
import Google from "./assets/google.png";

function App() {
  return (
    <View
      style={{
        backgroundColor: "lightgrey",
        height: "100%",
        justifyContent: "space-evenly"
      }}
    >
      <View
        style={{
          alignItems: "center",
          height: "20%",
          justifyContent: "center"
        }}
      >
        <Image source={Heart} style={{ height: 70, width: 80 }} />
      </View>
      <View
        style={{
          height: 180,
          justifyContent: "space-between",
          alignSelf: "center",
          width: "80%"
        }}
      >
        <View style={{ width: "100%" }}>
          <Text
            style={{ color: "#BD0909", fontWeight: "600", marginBottom: 10 }}
          >
            USERNAME
          </Text>
          <TextInput
            style={{
              borderBottomWidth: 1,
              borderColor: "#BD0909",
              outline: "none",
              paddingVertical: 10
            }}
            placeholder="Enter username"
          />
        </View>
        <View style={{ width: "100%" }}>
          <Text
            style={{ color: "#BD0909", fontWeight: "600", marginBottom: 10 }}
          >
            PASSWORD
          </Text>
          <TextInput
            style={{
              borderBottomWidth: 1,
              borderColor: "#BD0909",
              outline: "none",
              paddingVertical: 10
            }}
            secureTextEntry="true"
            placeholder="Enter password"
          />
        </View>
        <TouchableHighlight style={{ alignSelf: "flex-end" }}>
          <Text style={{ color: "white", fontWeight: "600" }}>
            Forgot Password ?
          </Text>
        </TouchableHighlight>
      </View>

      <View
        style={{
          justifyContent: "space-evenly",
          height: "30%",
          alignItems: "center"
        }}
      >
        <TouchableHighlight
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: 40,
            width: 270,
            backgroundColor: "white",
            borderRadius: 40
          }}
          underlayColor="white"
          onPress={() => alert("Enter valid credentials")}
        >
          <Text style={{ color: "red", fontWeight: "700" }}>LOGIN</Text>
        </TouchableHighlight>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ borderBottomWidth: 1, width: 70, marginRight: 10 }} />
          <View
            style={{
              alignItems: "center",
              color: "grey",
              marginRight: 10,
              fontSize: 11
            }}
          >
            OR CONNECT WITH
          </View>
          <View style={{ borderBottomWidth: 1, width: 70 }} />
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableHighlight
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: 40,
              width: 140,
              backgroundColor: "#36609f",
              borderRadius: 40,
              marginRight: 10
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: 100
              }}
            >
              <Image source={Facebook} style={{ height: 20, width: 16 }} />
              <Text style={{ color: "white", fontWeight: "700" }}>
                FACEBOOK
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: 40,
              width: 140,
              backgroundColor: "#BD0909",
              borderRadius: 40
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: 85
              }}
            >
              <Image source={Google} style={{ height: 15, width: 16 }} />
              <Text
                style={{
                  color: "white",
                  fontWeight: "700",
                  justifyContent: "space-between",
                  alignItems: "space-between"
                }}
              >
                GOOGLE
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}

export default App;
