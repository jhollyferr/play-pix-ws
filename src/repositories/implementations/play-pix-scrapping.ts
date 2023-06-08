import puppeteer from 'puppeteer';
import { Body } from '~/entity/Body';
import { Extract } from '~/entity/Extract';
import { Env } from '~/env';
import { ScrappingRepository } from '../scrapping';

export class PlayPixRepository implements ScrappingRepository {
	async collect({ zone, game_id, competition_id }: Body): Promise<Extract[]> {
		console.log({
			url: `${Env.PLAY_PIX_URL}/${zone}/${competition_id}/${game_id}`,
		});
		return new Promise<Extract[]>(async (resolve, reject) => {
			try {
				const browser = await puppeteer.launch({ headless: 'new' });

				const page = await browser.newPage();

				await page.goto(
					`${Env.PLAY_PIX_URL}/${zone}/${competition_id}/${game_id}`,
				);

				await page.waitForSelector('.sgm-market-g-head-bc');

				const response = await page.evaluate(() => {
					const headers = [
						...document.querySelectorAll('.sgm-market-g-head-bc'),
					];

					return headers.map((header) => {
						const nameList = [
							...(header?.nextSibling as Element)?.querySelectorAll(
								'.market-name-bc',
							),
						];

						const oddList = [
							...(header?.nextSibling as Element)?.querySelectorAll(
								'.market-odd-bc',
							),
						];

						const items = nameList.map((name, index) => ({
							key: name?.textContent?.trim(),
							value: oddList[index]?.textContent?.trim(),
						}));

						const title = header?.querySelector('p')?.textContent?.trim();

						return { title, items };
					});
				});

				await browser.close();

				resolve(response as Extract[]);
			} catch (error) {
				console.error(error);
				reject(new Error('Ocorreu um erro durante o web scraping.'));
			}
		});
	}
}
