import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons"; // what is Feather??

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit} // onEndEditing is a new one for me
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row", // aah I can think clearer now
    marginBottom: 10,
    // alignItems: "center", // yes you can also do this
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center", // why not alignItems center for the whole View?
    marginHorizontal: 15,
  },
  inputStyle: {
    flex: 1, // what does flex 1 do here? stretch out horizontally
    fontSize: 18,
  },
});

export default SearchBar;
