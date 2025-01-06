import axios from "axios";

const fetcher = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Fetcher error:", error);
    throw error;
  }
};

export default fetcher;
