import axios from "axios";

// not sure where this authorization thing comes from, but that's okay...
// just weirded out by axios syntax but that's okay
// see useResults.js to see why axios.create is much cleaner
export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer l2cmhf2ezRl6ZkcHWNYKoDpiaro1zlqUjwkA7nVxnWzryiTwFDk35PJiucoLhjjFY9ECD8GTBGaHBg5yv5YDLiszKQx8EMvm30ply0UWoHQOnYFjLozpYnZOx-UsXXYx",
  },
});
