import { success, failure} from '../helpers/response.js';

let users = {};
let max_user_id = 0;

const userController = (server) => {
	
	server.get('/', (req, res, next) => {
		success(res, next, users);
	});

	server.get('/user/:id', (req, res, next) => {
		if (typeof(users[req.param.id]) === 'undefined') {
			failure(res, next, 404, 'User not found')
		}
		success(res, next, users[parseInt(req.params.id)])
	});

	server.post('/user', (req, res, next) => {
		let user = req.params;
		max_user_id++;
		user.id = max_user_id;
		users[user.id] = user;
		success(res, next, user);
	});

	server.put('/user/:id', (req, res, next) => {
		let user = users[parseInt(req.params.id)];
		let updates = req.params;
		for (let attr in updates) {
			user[attr] = updates[attr];
		}
		success(res, next, user);
	});

	server.del('/user/:id', (req, res, next) => {
		const data = delete users[parseInt(req.params.id)];
		success(res, next, data);
	});
}

export default userController;