const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://www.facebook.com');
  //   await page.screenshot({ path: 'example.png' });

  const userName =
    readlineSync.question('Please, type your username: ') || 'sesisnando.lagos';
  const password =
    readlineSync.question('Please, type your password: ') || 'uphard123';

  await page.type('#email', userName);
  await page.type('#pass', password);

  await page.click('[type="submit"]');

  //   await browser.close();
})();
