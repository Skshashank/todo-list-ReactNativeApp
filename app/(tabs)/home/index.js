import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { BottomModal } from "react-native-modals";
import { ModalTitle,ModalContent} from 'react-native-modals';
import { SlideAnimation } from 'react-native-modals'
const index = () => {
  const todos = [];
  const [isModalVisible, setModalVisisble] = useState(false);
  const [todo, setTodo ] = useState("");
  return (
    <>
      <View
        style={{
          marginHorizontal: 10,
          marginVertical: 40,
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
        }}
      >
        <Pressable
          style={{
            backgroundColor: "#7CB9E8",
            paddingHorizontal: 10,
            paddingVertical: 6,
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>All</Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: "#7CB9E8",
            paddingHorizontal: 10,
            paddingVertical: 6,
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>Work</Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: "#7CB9E8",
            paddingHorizontal: 10,
            paddingVertical: 6,
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
            marginRight: "auto",
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>Personal</Text>
        </Pressable>
        <Pressable>
          <AntDesign name="pluscircle" size={30} color="#007FFF" />
        </Pressable>
      </View>

      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ padding: 10 }}>
          {todos?.length > 0 ? (
            <View></View>
          ) : (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                marginTop: 130,
                marginLeft: "auto",
                marginRight: "auto",
                alignItems: "center",
              }}
            >
              <Image
                style={{ width: 200, height: 200, resizeMode: "contain" }}
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/128/2387/2387679.png",
                }}
              />
              <Text
                style={{
                  fontSize: 16,
                  marginTop: 15,
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                No Tasks for Today! add a task
              </Text>
              <Pressable style={{ marginTop: 15 }}>
                <AntDesign name="pluscircle" size={30} color="#007FFF" />
              </Pressable>
            </View>
          )}
        </View>
      </ScrollView>

      <BottomModal onBackdropPress={() => setModalVisisble(!isModalvisible)}
        onHardwareBackPress = {() => setModalVisisble(!isModalvisible)}
        swipeDirection = {["up", "down"]}
        swipeThreshold = {200}
        modalTittle = {<ModalTitle title=" Add todo" />}
        modalAnimation =
        {
          new SlideAnimation({
            slideFrom: "bottom",
          })
        }
        visible = {isModalvisible}
        onTouchOutside = {() => setModalVisisble(!isModalVisible)}
         >
        <ModalContent style = {{width: "100%",height:200}}>
        <View>
            <TextInput 
            value={todo} 
            onChangeText = {(text) => setTodo("text")} 
            placeholder ="Input a new task here"
            />
        </View>
        </ModalContent>
      </BottomModal>
    </>
  );
};

export default index;

const styles = StyleSheet.create({});
