import { userController } from '../controllers/index.controller.js';
import { createServer } from '../app.js';

const PORT = process.env.PORT || 3000;

createServer().then(
    server => {
		server.listen(PORT, () => {
		  console.log('%s listening at %s', server.name, server.url);
		});
    },
    err => {
        console.log('Error while starting up server', err);
        process.exit(1);
    }
);