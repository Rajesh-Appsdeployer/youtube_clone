import axios from "axios";

const BASE_URL = 'https://youtube138.p.rapidapi.com';

const options = {
    params: { hl: "en", gl: "in" },
    headers: {
        "X-RapidAPI-Key":
            '474790e9f9msha2e8554d2862b4dp12c614jsn627e7868f1d0' || "YOUR_API_KEY",
        "X-RapidAPI-Host": 'youtube138.p.rapidapi.com',
    },
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};
