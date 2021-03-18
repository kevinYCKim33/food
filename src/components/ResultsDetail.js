import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

// Each Card in a category of Cost Effective, Bit Pricier, etc...
const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15, // I wonder if there is :not-last-child prop or something
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4, // yes I see the rounded corners in the image
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
  },
});

export default ResultsDetail;
