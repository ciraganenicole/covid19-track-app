import axios from 'axios';

const url = 'https://api.covid19tracking.narrativa.com/api/2020-03-22';
const retrieveCases = () => axios.get(url);
const retrieveSingle = (country) => axios.get(`${url}/country/${country}`);

export { retrieveCases, retrieveSingle };
