import type { FastifyInstance } from 'fastify';
import { scrapping } from './scrapping';

export async function scrappingRoutes(app: FastifyInstance): Promise<void> {
	app.post('/scrapping', scrapping);
}
