import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults(); // custom hook!
  // anyways

  // oh executed thrice...doesn't seem very O(n) friendly...
  // why not just do one pass and organize it into categories?
  const filterResultsByPrice = (price) => {
    // price === '$' || '$$' || '$$$'
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        // couple useStates dropped as props into SearchBar
        term={term}
        onTermChange={setTerm} // this seems different from (newValue) => setTerm(newValue) from TextScreen.js
        onTermSubmit={
          () => searchApi(term) // this is an interesting take...
          // it doesn't seem quite hook-y...
          // trigger searchApi which will re-set what results are
          // [results, searchApi, errorMessage] would've been a slightly familiar syntax
        }
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("$")}
          title="Cost Effective"
        />
        <ResultsList results={filterResultsByPrice("$$")} title="Bit Pricier" />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title="Big Spender"
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
