import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";

// V4 isn't so bad...V5 reads much nicer of course...
const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search", // what will always be at the top
    },
  }
);

// any child inside this thing gets the {navigator} prop
export default createAppContainer(navigator); // just the v4 way of doing things
