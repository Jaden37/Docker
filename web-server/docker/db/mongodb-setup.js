// https://docs.mongodb.com/manual/tutorial/write-scripts-for-the-mongo-shell/
// Fonction JS de la commande shell 'use myDatabase'
db = db.getSiblingDB('myDatabase')
db.createUser(
{
    user: 'myUser',
    pwd: 'myPassword',
    roles: [
      { role: 'readWrite', db: 'myDatabase' }
    ]
})
db.players.insertOne(
    { 
        name: 'Jules', 
        age: 21,
        games: [
            {name: 'Pokémon', since: '2007'},
            {name: 'Zelda',  since: '2010'}
        ] 
    }
 )