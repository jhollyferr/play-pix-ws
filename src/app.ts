import fastify from 'fastify';
import { ZodError } from 'zod';

import { Env } from './env';
import { scrappingRoutes } from './http/controllers/routes';

export const app = fastify({ logger: true });

app.register(scrappingRoutes);

app.get('/', (_, reply) => {
	return reply.status(200).send({
		message: 'Welcome to WS API',
		version: '1.0.0',
	});
});

app.setErrorHandler((error, _, reply) => {
	if (error instanceof ZodError)
		return reply.status(400).send({
			message: 'Validation error',
			issues: error.format(),
		});

	if (!(Env.NODE_ENV === 'production')) console.error(error);

	return reply.status(500).send({
		message: 'Internal Server Error',
	});
});
