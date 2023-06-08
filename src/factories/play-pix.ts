import { PlayPixRepository } from '~/repositories/implementations/play-pix-scrapping';
import { PlayPixUseCase } from '~/use-cases/play-pix';

export function PlayPix(): PlayPixUseCase {
	const scrappingRepository = new PlayPixRepository();
	const useCase = new PlayPixUseCase(scrappingRepository);

	return useCase;
}
