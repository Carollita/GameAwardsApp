export async function performSignIn() {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Origin','http://localhost:3000');

    fetch(baseApiURL, {
        mode: 'no-cors',
        credentials: 'include',
        method: 'POST',
        headers: headers
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log('Authorization failed: ' + error.message));
}


const baseApiURL = 'http://192.168.99.108:8080/api/'

export async function clientGetGames() {
    const response = await fetch(`${baseApiURL}games`)
    const json = await response.json()
    console.log(json)
    return json
}

export async function clientSendVotes(id:number) {
    const requestOption = {
        method: 'PATCH'
    }

    fetch(`${baseApiURL}games/${id}/vote`, requestOption)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error))
}

export async function clientGetWinner() { 
    const response = await fetch(`${baseApiURL}games`)
    const json = await response.json()
    return json[0]
}