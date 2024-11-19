const API_KEY = 'WS2sWpl8J2xj1BQb5e0KTdRgQqdlhNGO';

const BASE_URL = 'https://api.nytimes.com/svc/';

const endpoints = {
    mostPopularByViews: 'mostpopular/v2/viewed/'

}

export async function fetchMostPopularByViews(days = 1) {
    const url = new URL(`${days}.json`, BASE_URL + endpoints.mostPopularByViews);

    url.searchParams.set('api-key', API_KEY);

    const response = await fetch(url);
    const data = await response.json();

    return data;
}

//module.exports