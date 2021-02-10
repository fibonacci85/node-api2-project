// require your server and launch it here

const server = require('./api/server');

server.listen(4000, () => {
    console.log('server is running at http://localhost/4000')
})




//initial GET
server.get('/', (req, res) => {
    res.send(`<h1> server is running<h1/>`)
})