import { BetanoRepository } from '~/repositories/implementations/betano-scrapping';
import { BetanoUseCase } from '~/use-cases/betano';

export function Betano(): BetanoUseCase {
	const scrappingRepository = new BetanoRepository();
	const useCase = new BetanoUseCase(scrappingRepository);

	return useCase;
}
