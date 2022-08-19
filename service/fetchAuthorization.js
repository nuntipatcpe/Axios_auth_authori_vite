import axios from "axios";

axios.interceptors.request.use(async (config) => {
    const token = localStorage.getItem("token");
    
    if (token !== null) {
        config.headers = {
            "Authorization": `Bearer ${token}`
        }
      }

      return config;
})

axios.interceptors.response.use((response)=>{
    //status<200
    return response;
},
function (error) {
    //status>200

    if (error.response.status === 403) {
        localStorage.removeItem('token')
    }

    return Promise.reject(error);
})


export const fetchAuthorization = axios