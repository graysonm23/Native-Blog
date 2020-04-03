import React, { useState } from "react";
import { Text, TextInput, Button, View, StyleSheet } from "react-native";

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Enter Title:</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={text => {
            setTitle(text);
          }}
        />
        <Text style={styles.label}>Enter Content:</Text>
        <TextInput
          multiline={true}
          maxLength={900}
          style={styles.input}
          value={content}
          onChangeText={content => {
            setContent(content);
          }}
        />
        <Button
          onPress={() => onSubmit(title, content)}
          title="Save Blog Post"
        />
      </View>
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: "",
    content: ""
  }
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
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5
  }
});

export default BlogPostForm;
