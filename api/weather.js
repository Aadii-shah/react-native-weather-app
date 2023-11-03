import axios from "axios";
import { apiKey, apiLondon } from "../constants";
import { apiKathamndu } from "../constants";

//const forecastEndpoint = params=> `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${params.cityName}&days=${params.days}`;
const forecastEndpoint = params=> `${apiKathamndu}`;

//const locationsEndpoint = params=> `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${params.name}`;
const locationsEndpoint = params=> `${apiLondon}`;

const apiCall = async (endpoint)=>{
    const options = {
        method: 'GET',
        url: endpoint,
    };

      try{
        const response = await axios.request(options);
        return response.data;
      }catch(error){
        console.log('error: ',error);
        return {};
    }
}

export const fetchWeatherForecast = params=>{
    let forecastUrl = forecastEndpoint(params);
    return apiCall(forecastUrl);
}

export const fetchLocations = params=>{
    let locationsUrl = locationsEndpoint(params);
    return apiCall(locationsUrl);
}
