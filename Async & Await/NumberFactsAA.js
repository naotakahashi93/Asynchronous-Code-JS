let baseURL = "http://numbersapi.com"

async function part1(){
    let res = await axios.get(`${baseURL}/6`)
    $("#facts-section").append(`<li> ${res.data} </li> </br>`)
}
part1()

const numbers = [6,3,4,1]
async function part3(){
    let res = await axios.get(`${baseURL}/${numbers}`)
    console.log(res.data)
    for (i in res.data){
        $("#facts-section").append(`<li> ${res.data[i]} </li> </br>`)
    }
}

part3()
