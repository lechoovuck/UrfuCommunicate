import {API_ROOT} from "../constants/Default";
import axios from 'axios';

export const httpPost = async (url, data) => {
    // from https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    return fetch(url, {
        body: JSON.stringify(data),
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'content-type': 'application/json',
        },
        method: 'POST',
        mode: 'cors',
        redirect: 'follow',
        referrer: 'no-referrer',
    }).then(response => response.json())// parses response to JSON
}

export const httpPostFiles = async (url, data) => {
    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        body: data
    }).then(response => response.json())
}

/*JSON.stringify(data)*/
export const httpPostGetFile = async (url, data) => {
    return  axios.post(url, {data}, {responseType: 'blob'})
}

// export const httpDelete = async (url,data) => {
//     return   axios.delete(url, {data})
// }

export const httpGet = async (url) => {
    // from https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    return fetch(url).then(response => response.json())// parses response to JSON
}

export function checkResponse(res) {
    return res.status === 'ok';
}

export function checkResponseGetFile(res) {
    return Boolean(res);
}