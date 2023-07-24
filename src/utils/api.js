import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    method: 'GET',
    url: 'https://youtube138.p.rapidapi.com/auto-complete/',
    params: {
      q: 'desp',
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key': '4db30a9b54msh83572af5e83111dp196e18jsna4a1ce0ae8ce',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};
