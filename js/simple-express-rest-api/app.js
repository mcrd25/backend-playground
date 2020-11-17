import restify from 'restify';
import { userController } from './controllers/index.controller.js';
import restifyValidator from 'restify-validator';


async function createServer() {
	const server = restify.createServer();

	server.use(restify.plugins.acceptParser(server.acceptable));
	server.use(restify.plugins.queryParser());
	server.use(restify.plugins.bodyParser());
	server.use(restifyValidator);

	userController(server);

	return server;
}

export { createServer };


