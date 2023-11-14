import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '89fada529d88434cafa78c0e29e85b1c'
    }
})