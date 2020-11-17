const respond = (res, next, status, httpCode, data) => {
	const response = {
		'status': status,
		'data': data
	};
	res.setHeader('content-type', 'application/json');
	res.writeHead(httpCode);
	res.end(JSON.stringify(response));
	return next();
}

const success = (res, next, data) => {
	respond(res, next, 'OK', 200, data);
}

const failure = (res, next, httpCode, data) => {
	respond(res, next, 'ERROR', httpCode, data);
}

export { success, failure };