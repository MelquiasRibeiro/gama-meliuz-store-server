import jsonServer from 'json-server'


const server =jsonServer.create();

const routes =jsonServer.router('db.json');

console.log("test")
const middleware = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middleware)
server.use(routes)
server.listen(port)

