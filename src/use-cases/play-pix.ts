/* eslint-disable no-unused-vars */

import { Body } from '~/entity/Body';
import { Extract } from '~/entity/Extract';
import { ScrappingRepository } from '~/repositories/scrapping';

export class PlayPixUseCase {
	constructor(private scrappingRepository: ScrappingRepository) {}

	async execute(data: Body): Promise<Extract[]> {
		return await this.scrappingRepository.collect(data);
	}
}
