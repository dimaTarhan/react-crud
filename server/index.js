const express = require('express');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const cors = require('cors');
const multer  = require('multer');
const upload = multer({ dest: 'static/images/' });

const port = 1010;
const host = `http://localhost:${port}`;

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static('static'));

const adapter = new FileSync('data.json');
const db = low(adapter);


app.get('/players', (request, response) => {
    let {limit, page} = request.query;

    limit = Number(limit);
    page = Number(page);

    let players = db.get('players').map((player) => {
        return {
            ...player,
            foto: `${host}/images/${player.foto}`
        }
    });

    if (limit > 0 && page > 0) {
        players = players.value().slice((page - 1) * limit, page * limit);
    }

    response.send(players);
});

app.post('/players', upload.single('foto'), function (req, res) {
    const newPlayer = req.body;

    function searchNumber (playersArr) {
        [...playersArr].forEach((onePlayer) => {
            if (Number(onePlayer.number) === Number(newPlayer.player.number)) {
                newPlayer.player.number = String(Number(newPlayer.player.number) + 1);

                searchNumber (playersArr);
            }
        });
    }

    console.log(newPlayer.player.name);
    if (newPlayer.player.name){
        searchNumber(db.get('players'));
        db.get('players')
            .push(newPlayer.player)
            .write();
        res.end();
    } else {
        res.status(400);
        res.send('Please provide object with name!')
    }
    res.end();
});


app.listen(port, function () {
    console.log('Example app listening on port 1010!');
});