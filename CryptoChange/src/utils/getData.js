const API = 'https://api.coinlore.net/api/tickers/';
const APISIMPLE = 'https://api.coinlore.net/api/ticker/';

const getData = async (id) => {
    const apiURL = id ? `${APISIMPLE}?id=${id}` : API;

    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        return data;
    } catch(error) {
        console.log('Fetch Error..!!', error);
    };
    
};

export default getData;