import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
const getPhotos = async (query, currentPage) => {
  const response = await axios.get("/search1/photos", {
    params: {
      client_id: "MjN-F65eTx6Qz_uhi3g42D28XkDOGv0_ZTECflbAUkk",
      page: currentPage,
      per_page: 12,
      query: query,
    },
  });
  return response.data.results;
};
export default getPhotos;
