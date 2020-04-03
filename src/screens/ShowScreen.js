import React, { useContext } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { AntDesign } from "@expo/vector-icons";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const blogPost = state.find(
    blogPost => blogPost.id === navigation.getParam("id")
  );
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>{blogPost.title}</Text>
        <Text style={styles.text}>{blogPost.content}</Text>
      </View>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerStyle: {
      backgroundColor: "#70a1ff"
    },
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Edit", { id: navigation.getParam("id") })
        }
      >
        <AntDesign name="edit" size={30} />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#70a1ff"
  },
  row: {
    flexDirection: "column",
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: "#f1f2f6"
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "600",
    textAlign: "center"
  },
  icon: {
    fontSize: 24
  },
  text: {
    fontSize: 14
  }
});

export default ShowScreen;
