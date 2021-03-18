import { useEffect, useState } from "react";
import yelp from "../api/yelp";

// interesting export default convention
// custom hook because it uses useState and useEffect
// though you don't use this anywhere else so this seems kind of silly...
export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
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

  // Call searchApi when component
  // is first rendered.  BAD CODE!
  // searchApi('pasta');
  useEffect(() => {
    searchApi("pasta"); // this is bad code?? idk...maybe a default screen would have helped
  }, []); // hmmm could have also used some sort of debounce here?

  return [searchApi, results, errorMessage];
};
