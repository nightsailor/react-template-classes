import axios from 'axios'

export const loginCall = payload => axios.post(`/auth/login`, payload)
export const registerCall = payload => axios.post(`/auth/register`, payload)

const apis = {
    loginCall,
    registerCall
}

export default apis