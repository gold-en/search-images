import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID Edf42oFcjv3kfZAWFPCIuTuQ7wdO7X6l-f6_1pUFXmQ",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
