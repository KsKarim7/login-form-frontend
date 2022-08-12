import axios from "axios";

const url = 'http://localhost:5000';

export const authenticateSignup = async (data) => {
    try {
        return await axios.post(`${url}/signup`, data)
    }
    catch (error) {
        console.log('Error coming from sign up api', error);
    }
}