import axios from 'axios';

const GET_WEATHER = 'GET_WEATHER';

const initialState = {weather:[]}

export function getWeather(url) {
    const weather = axios.get(url)
        .then((response) => { return response.data.results })

    return {
        type: GET_WEATHER,
        payload: weather
    }
}

export default function(state = initialState, action) {
    switch(action.type) {
        case 'GET_WEATHER_FULFILLED':
        return Object.assign({}, state, {weather:action.payload})

        default:
            return state;
    }
}