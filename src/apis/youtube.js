import axios from 'axios';

const KEY = 'AIzaSyDAs0qg4aE5XdtF5ae-lS4gfCZZjTPjbNs';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});

