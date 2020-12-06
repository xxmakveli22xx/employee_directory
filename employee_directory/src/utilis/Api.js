import axios from "axios";
const url = "https://randomuser.me/api/?results=50";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getUsers: function () {
        console.log("in the API");
        return axios.get(url)
    }
}