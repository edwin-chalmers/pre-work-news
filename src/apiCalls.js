export function fetchData() {
    return fetch(`https://newsapi.org/v2/everything?q=finance&apiKey=${process.env.REACT_APP_NEWS_KEY}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Failed to fetch ${'news'}`)
        }
        return response.json()
    })
    .catch(error => {
        console.log(`Error fetching ${'news'}:`, error);
        throw error; 
    });
}