let baseURL = "http://numbersapi.com"

axios.get(`${baseURL}/6`)
.then(res => 
    {$("#facts-section").append(`<li> ${res.data} </li> </br>`)
    return axios.get(`${baseURL}/6`)
})
.then(res1 => 
    {$("#facts-section").append(`<li> ${res1.data}  </li> </br>` );
    return axios.get(`${baseURL}/6`)
})
.then(res2 => 
    {$("#facts-section").append(`<li> ${res2.data}  </li> </br>`);
    return axios.get(`${baseURL}/6`)
})
.then(res3 => 
    {$("#facts-section").append(`<li> ${res3.data}  </li> </br>`);
    return axios.get(`${baseURL}/6`)
})