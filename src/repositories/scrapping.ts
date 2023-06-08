import { Body } from '~/entity/Body';
import { Extract } from '~/entity/Extract';

export interface ScrappingRepository {
	collect: (data: Body) => Promise<Extract[]>;
}
