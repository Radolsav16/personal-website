const baseUrl = 'https://personal-project-70dbf-default-rtdb.europe-west1.firebasedatabase.app/Messagers.json';


async function requester(method,url,data){
    const options = {
        method,
        headers:{
            'Content-Type':'application/json'
        }
    }

    if(data){
        options.body = JSON.stringify(data);
    }

    const res = await fetch(url,options);
    const result = await res.json();

    return result;
}



async function get() {
    return await requester('GET',baseUrl)   
}

async function post(data) {
    return await requester('POST',baseUrl,data)   
}

async function put(url,data) {
    return await requester('PUT',url,data)   
}

async function del(url) {
    return await requester('DELETE',url)   
}


export const requsterApi = {
    get,
    post,
    put,
    del
}