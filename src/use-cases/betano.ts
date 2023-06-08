/* eslint-disable no-unused-vars */

import { Body } from '~/entity/Body';
import { ScrappingRepository } from '~/repositories/scrapping';

export class BetanoUseCase {
	constructor(private scrappingRepository: ScrappingRepository) {}

	async execute(data: Body): Promise<any> {
		return await this.scrappingRepository.collect(data);
	}
}
