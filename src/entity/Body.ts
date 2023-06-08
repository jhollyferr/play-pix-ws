import { z } from 'zod';
import { Body as Schema } from '~/schemas/body';

export type Body = z.infer<typeof Schema>;
