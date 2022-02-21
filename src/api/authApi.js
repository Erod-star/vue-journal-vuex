
import axios from 'axios'

const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key: 'AIzaSyB0F1fZRmvlEFITKl14Em6bSXiZZat0C8I',
    }
})

export default authApi