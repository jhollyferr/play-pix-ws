import type { FastifyReply, FastifyRequest } from 'fastify';
import { Betano } from '~/factories/betano';
import { PlayPix } from '~/factories/play-pix';
import { Body } from '~/schemas/body';

const scrappingBuilder = {
	playpix: PlayPix,
	betano: Betano
};

export async function scrapping(
	request: FastifyRequest,
	reply: FastifyReply,
): Promise<FastifyReply> {
	try {
		const data = Body.parse(request.body);

		const scrappingUseCase = scrappingBuilder[data.type]();

		const response = await scrappingUseCase.execute(data);

		return reply.status(200).send(response);
	} catch (error) {
		// if (error instanceof InvalidCredentialsError)
		// 	return reply.status(400).send({ message: error.message });

		throw error;
	}
}
