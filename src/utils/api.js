import axios from 'axios';


const api = axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID qMhPnMlTfv9Ou0Xh1sQmQAopRKu-CUv178fWRJzw_3c'
    }
})


export default api;