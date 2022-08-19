# Axios

```
pnpm i axios
```

# Axios Interceptors

```
import axios from "axios";
```

```
axios.interceptors.request.use(async (config) => {
    const token = localStorage.getItem("token");

    if (token !== null) {
        config.headers = {
            "Authorization": `Bearer ${token}`
        }
      }

      return config;
})
```

```
axios.interceptors.response.use((response)=>{
    //status ticker < 200
    return response;
},
function (error) {
    //status>200

    if (error.response.status === 403) {

    }

    return Promise.reject(error);
})

```

```
export const fetchAuthorization = axios
```

**useage**

```
import { fetchAuthorization } from "../../../service/fetchAuthorization";
```

```
  async function getData() {
    await fetchAuthorization
      .get("https://..")
  }
```
