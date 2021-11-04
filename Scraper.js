//-->  impprts
const fs = require('fs');
const puppeteer = require('puppeteer');
const { convertArrayToCSV } = require('convert-array-to-csv');
const path = require('path');

//--------------------------------------->
//-->  Search Object
//--------------------------------------->

/*  Dynamic loading of some object properties broke puppeteer
    so These properties will be managed manually 
    ##selector --> element to query
    ##Paginator --> element to click for page integration
    ##source --> source of data
*/

const Search__Object = {
  data__source: '',
  source__url: '',
  total__pages: 30,
  JSON__name: 'New__json',
  JSON__path: path.resolve(__dirname, './Scrapped__Data/JSON__files'),
  CSV__name: 'New__csv',
  CSV__path: path.resolve(__dirname, './Scrapped__Data/CSV__files'),
};

//--------------------------------------->
//-->  File converter and Handler
//--------------------------------------->
async function handleFiles(Object__array) {
  //-->  save JSON file
  fs.writeFileSync(
    `${Search__Object.JSON__path}/${Search__Object.JSON__name}.json`,
    JSON.stringify(Object__array),
    (err) => {
      console.warn(err);
    }
  );

  //-->  save csv file
  const csv__file = convertArrayToCSV(Object__array);
  fs.writeFileSync(
    `${Search__Object.CSV__path}/${Search__Object.CSV__name}.csv`,
    csv__file,
    (err) => {
      console.warn(err);
    }
  );
}

//--------------------------------------->
//-->  ###  SCRAPPER MAIN
//--------------------------------------->
function handleScrape(url, pagesToScrape) {
  return new Promise(async (resolve, reject) => {
    try {
      //-->  check for single page scrape
      if (!pagesToScrape) {
        pagesToScrape = 1;
      }

      //-->  create browser instance
      const browser = await puppeteer.launch({
        headless: false,
        ignoreHTTPSErrors: true,
        defaultViewport: {
          width: 1000,
          height: 1200,
        },
      });

      try {
        //-->  create new page
        const page = await browser.newPage();
        //-->  visit page
        await page.goto(url);
        let currentPage = 1;
        let urls = [];

        //-->  loop through the pages to iterate request
        while (currentPage < pagesToScrape) {
          let newUrls = await page.evaluate(() => {
            let results = [];
            //-->  select main query element
            let items = document.querySelectorAll(''); //-->  ##selector
            //-->  loop through items and add to result
            items.forEach((item) => {
              /*fields here depend on the type of element queried */
              results.push({
                source: ``, //-->  ##Source
                /* 
                Every other attribute you wish to query goes here
               */
              });
            });
            return results;
          });

          urls = urls.concat(newUrls);
          //-->  puppeteer auto click next button (pagination)
          if (currentPage < pagesToScrape) {
            await Promise.all([
              await page.click(''), //-->  ##Paginator
              await page.waitForSelector(''), //-->  ##Selector
            ]);
          }
          //-->  increment current page
          currentPage++;
        }
        browser.close();
        return resolve(urls);
      } catch {
        (err) => reject(err);
      }
    } catch {
      (err) => console.log(err);
    }
  });
}

//--------------------------------------->
//-->  call scraper function
//--------------------------------------->
handleScrape(Search__Object.source__url, Search__Object.total__pages).then(
  (result) => {
    handleFiles(result);
  }
);
