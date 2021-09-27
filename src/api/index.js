// This env var is stored in .env and is set at build time
// it cannot be passed in to the container via yaml, as react produces static content
// edit the .env file to set the value to http://IP.Address/ - where IP.Address
// is the  external IP of your API service
// NB. Your service type will need to be LoadBalancer, not ClusterIP, if you are using AJAX
const url = process.env.REACT_APP_SERVER;

const headers = {
    accept: 'application/json',
    'content-type': 'application/json'
};

export const fetchAllEvents = () => {
    return fetch(url + 'events').then((response) => {
        return response.json();
    });
}

export const addEvent = (event) => {
    return fetch(url + 'event',
        {
            method: 'post',
            mode: 'cors',
            headers: headers,
            body: JSON.stringify(event)
        }).then((response) => {
            return response.json();
        });
};

