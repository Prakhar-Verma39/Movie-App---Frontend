import axios from "axios";

// configure and export axios objects that we will use to make http requests to the relevant remote API through this code.
export default axios.create({
    //now we needn't to add baseURL everytime
    // baseURL:'http://9c96-103-106-239-104.ap.ngrok.io',

    // added to overcome the restrictions imposed by the IE explorer(cross-origin problem!)
    headers: {"ngrok-skip-broswer-warning": "true"},
    
});


