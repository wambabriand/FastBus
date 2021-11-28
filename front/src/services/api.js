/* eslint-disable react-hooks/rules-of-hooks */
import useAxios from 'axios-hooks';
//const baseUrl = "http://back:8080/";
const baseUrl = "http://localhost:8081/";

const doGetNoAuth = url => {
    return useAxios({url: baseUrl+url});
}

export { doGetNoAuth };


