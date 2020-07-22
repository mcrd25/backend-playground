import restify from 'restify';
import { userController } from './controllers/index.controller.js';



async function createServer() {
	const server = restify.createServer();

	server.use(restify.plugins.acceptParser(server.acceptable));
	server.use(restify.plugins.queryParser());
	server.use(restify.plugins.bodyParser());

	userController(server);

	return server;
}

export { createServer };


