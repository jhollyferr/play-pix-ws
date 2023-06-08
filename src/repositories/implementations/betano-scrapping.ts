import { Body } from '~/entity/Body';
import { ScrappingRepository } from '../scrapping';

export class BetanoRepository implements ScrappingRepository {
	async collect({ zone, game_id, competition_id }: Body): Promise<any> {
		return { zone, game_id, competition_id };
	}
}
