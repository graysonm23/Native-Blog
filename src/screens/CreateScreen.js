import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);
  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate("Index"));
      }}
    />
  );
};

CreateScreen.navigationOptions = ({ navigation }) => {
  return {
    headerStyle: {
      backgroundColor: "#70a1ff"
    }
  };
};

const styles = StyleSheet.create({});

export default CreateScreen;
