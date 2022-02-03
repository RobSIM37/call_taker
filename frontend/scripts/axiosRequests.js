const baseURL = "http://localhost:8080";
const callsEndpoint = "/api/calls/";
const needsEndpoint = "/api/needs/";

const unpackAndBuildCallList=res=>{

    callData = res.data;
    callListBuilder();

}

const rebuildCallList=res=> {

    getAllCalls();
    
}

const getAllCalls=()=> {

    axios.get(`${baseURL}${callsEndpoint}`)
    .then(unpackAndBuildCallList)
    .catch(res=>alert(res.data));

}

const postCall=(call)=> {

    axios.post(`${baseURL}${callsEndpoint}`, call)
    .then(rebuildCallList)
    .catch(res=>alert(res.data));

}

const updateCall=(call)=> {

    axios.put(`${baseURL}${callsEndpoint}${call.call_id}`, call)
    .then(rebuildCallList)
    .catch(res=>alert(res.data));

}

const deleteCall=(id)=> {

    axios.delete(`${baseURL}${callsEndpoint}${id}`)
    .then(rebuildCallList)
    .catch(res=>alert(res.data));

}