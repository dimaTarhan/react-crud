export class AppBackend {
    constructor() {
        this.baseUrl = `http://localhost:1010`;
    }

    getPlayers(page, limit) {
        return fetch(`${this.baseUrl}/players?page=${page}&limit=${limit}`, {
            method: "GET",
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
            .then(
                function (response) {
                    if (response.status !== 200) {
                        console.error('Looks like there was a problem. Status Code: ' +
                            response.status);
                        return;
                    }

                    return response.json();
                }
            )
            .catch(function (err) {
                console.error('Fetch Error :-S', err);
            });
    }

    removeUser(userId){
        return fetch(`${this.baseUrl}/users`, {
            method: "DELETE",
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({userId})
        });
    }

    addPlayer(player){
        return fetch(`${this.baseUrl}/players`, {
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(player)
        });
    }
}
