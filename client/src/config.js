let BASE_URL = "https://post-it-jt47.onrender.com/";
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  BASE_URL = "https://post-it-jt47.onrender.com/";
}

export { BASE_URL };
