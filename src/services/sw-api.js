const baseUrl = "https://swapi.dev/api"

export function getAllStarships() {
    return fetch(`${baseUrl}/starships`)
    .then(res => res.json())
}

export function getShipDetails(apiUrl){
    return fetch(`${apiUrl}`)
    .then(res =>  res.json())
}