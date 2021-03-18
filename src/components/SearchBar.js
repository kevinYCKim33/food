import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
// https://icons.expo.fyi/
import { Feather } from "@expo/vector-icons"; // Feather: Icon library like FontAwesome

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false} // some restaurants have funky names
        style={styles.inputStyle}
        placeholder="Search" // placeholder is clutch
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
    // alignItems: "center", // don't do this because...
  },
  iconStyle: {
    fontSize: 35, // fontSize actually
    // alignSelf: "center", // why not alignItems center for the whole View?
    // ...by default, inputStyle will stretch vertically as alignItems is set to stretch
    // ...if you do alignItems: center though, the input div's height will shrink to bare minimum
    // now user has much less thumbspace to click on Search to start typing...
    marginHorizontal: 15,
  },
  inputStyle: {
    flex: 1, // since flexDirection is set to row, this will now take up remaining horz space of the screen
    fontSize: 18,
    // borderWidth: 1,
    // borderColor: "black",
  },
});

export default SearchBar;
