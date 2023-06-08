import { z } from 'zod';

export const Body = z.object({
	type: z.enum(['playpix', 'betano']),
	zone: z.string(),
	competition_id: z.number(),
	game_id: z.number(),
});
