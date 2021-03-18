import { useEffect, useState } from "react";
import yelp from "../api/yelp";

// interesting export default convention
// custom hook because it uses useState and useEffect
// though you don't use this anywhere else so this seems kind of silly...
export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  // https://www.yelp.com/developers/documentation/v3/business_search
  const searchApi = async (searchTerm) => {
    // oh wow totally missed the try catch block
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "new york",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []); // hmmm could have also used some sort of debounce here?

  return [searchApi, results, errorMessage];
};
