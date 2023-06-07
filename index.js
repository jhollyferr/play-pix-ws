const puppteer = require("puppeteer");

const { input } = require("@inquirer/prompts");

(async () => {
  // const browser = await puppteer.launch({ headless: false });

  const url = await input({ message: "Enter URL: " });

  if (!url) process.exit(1);

  console.log(url);

  const browser = await puppteer.launch({ headless: "new" });

  const page = await browser.newPage();

  await page.goto(url);

  await page.waitForSelector(".sgm-market-g-head-bc");

  const response = await page.evaluate(() => {
    const headers = [...document.querySelectorAll(".sgm-market-g-head-bc")];

    return headers.map((header) => {
      const nameList = [
        ...header.nextSibling.querySelectorAll(".market-name-bc"),
      ];

      const oddList = [
        ...header.nextSibling.querySelectorAll(".market-odd-bc"),
      ];

      const values = nameList.map((name, index) => ({
        key: name.textContent.trim(),
        value: oddList[index].textContent.trim(),
      }));

      const title = header.querySelector("p").textContent.trim();

      return { title, values };
    });
  });

  console.log(JSON.stringify(response, null, 2));

  await browser.close();
})();
