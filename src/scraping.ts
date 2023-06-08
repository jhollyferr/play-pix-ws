import puppeteer from 'puppeteer';
import { Extract } from './entity/Extract';

export async function Scraping(url: string): Promise<Extract[]> {
	try {
		const browser = await puppeteer.launch({ headless: true });
		const page = await browser.newPage();

		await page.goto(url);
		await page.waitForSelector('.sgm-market-g-head-bc');

		const response = await page.evaluate(() => {
			const headers = [...document.querySelectorAll('.sgm-market-g-head-bc')];

			return headers.map((header) => {
				const nameList = [
					...(header.nextSibling as Element).querySelectorAll(
						'.market-name-bc',
					),
				];

				const oddList = [
					...(header.nextSibling as Element).querySelectorAll('.market-odd-bc'),
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

		return response as Extract[];
	} catch (error) {
		console.log(error);
		throw new Error('Ocorreu um erro durante o web scraping.');
	}
}
