import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID kOSfi2kPif6jlBdnG9IOp2xl3SCGWfzeUYPJfXu5tf0",
  },
});
