<p align="center">
  <a href="" rel="noopener">
 <img width=300px height=180px src="/assets/logo__1.png" alt="Bot logo"></a>
</p>

<h3 align="center">web-scrapper</h3>

<div align="center">

[![Dependencies](https://img.shields.io/badge/dependencies-up%20to%20date-blue.svg)]()
[![Platform](https://img.shields.io/badge/platform-git-orange.svg)](https://www.reddit.com/user/Wordbook_Bot)
[![GitHub Issues](https://img.shields.io/badge/issues-0%20open-yellowgreen.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
[![GitHub Pull Requests](https://img.shields.io/badge/pull%20requests-0%20open-yellowgreen.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> 🤖 Manual web scraper for pages with hot reload and Pagination
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Demo / Working](#demo)
- [How it works](#working)
- [Usage](#usage)
- [All Options](#Options)
- [Built Using](#built_using)
- [Contributing](../CONTRIBUTING.md)
- [Author](#author)

## 🧐 About <a name = "about"></a>

Web crawler for scraping web pages

## 🎥 Demo / Working <a name = "demo"></a>

![Working](/assets/demo.gif)

## 💭 How it works <a name = "working"></a>

An Object **_Search Object_** is initialized which sets a level of needed criterias for the scrape to be processed and also for the files to be saved as **_CSV_** and **_JSON_**.

Async function to handle scrape is called drawing arguments from the **_Search Object_**,then the browser(chromium) is is launched and navigates to the given url.

If the Pages to be scraped exceeds 1 page then puppeteer emulates clicks to navigate the pages and store new scapped data in an array of before returning

The entire Scrapper is written in JavaScript

## 🎈 Usage <a name = "usage"></a>

1. Clone repository and install packages:

```
npm install
```

2. Navigate to the `Search_Object` object and enter initial values

### **Example**

```
const Search__Object = {
  data__source: 'oddFEELING PortFolio',
  source__url: 'https://odd-portfolio.web.app/',
  total__pages: 2,
  Scrape__cli: 'false',
  JSON__name: 'Links__json',
  JSON__path: path.resolve(__dirname, './Scrapped__Data/JSON__files'),
  CSV__name: 'Links__csv',
  CSV__path: path.resolve(__dirname, './Scrapped__Data/CSV__files'),
};
```

3. Naviget to the item selector to input an element selector

```
    //-->  select main query element
            let items = document.querySelectorAll(`## Selector`);
```

replace `## Selector` with a selector e.g `div.sc-fKFxtB ivoVis > h3`

| :triangular_flag_on_post: This selects all `h3` in any `div` element with the classname of `sc-fKFxtB ivoVis` |
| ------------------------------------------------------------------------------------------------------------- |

4. Navigate to the loop that pushes an object to the finl result then enter the values that should be extracted from the element.
   The attributes are taken from the `item` object

### **Example**

```
//-->  loop through items and add to result
            items.forEach((item) => {
              results.push({
                source: `oddFEELING portfolio`, //-->  ##Source
                url: item.getAttribute('href'),
                content: item.textContent
              });
            });
```

| :triangular_flag_on_post: This gets the `href` of the element and `textContent` |
| ------------------------------------------------------------------------------- |

5. If the site that is to be scraped is paginated (makes an API call and renders items into different pages) `Puppeteer` would need to auto click and navigate the page.
   Specify the element to click by setting its selector in the `page.click(## Paginator)`

   ```
          //-->  puppeteer auto click next button (pagination)
          if (currentPage < pagesToScrape) {
            await Promise.all([
              await page.click(`div.sc-fKFxtB ivoVis > h3`),
              await page.waitForSelector(`## selector`),
            ]);
          }

   ```

   THen set an element to wait for before continuing the scrape process in the `page.waitForSelector( ## selector)`

   ```
          //-->  puppeteer auto click next button (pagination)
          if (currentPage < pagesToScrape) {
            await Promise.all([
              await page.click(`div.sc-fKFxtB ivoVis > h3`),
              await page.waitForSelector(`div`),
            ]);
          }

   ```

| :triangular_flag_on_post: This waits for all `divs` to render before continuing |
| ------------------------------------------------------------------------------- |

6. **_Your're set!!_**.

   Navigate to your terminal or press `cntrl` + `shift` + `~`
   then run code using

```
node scraper.js
```

## 📦 Options <a name = "options"></a>

Options to be filled

> - ` ## Selector` --> element to query
> - `## Paginator `--> element to click for page integration
> - `## source `--> source of data
> - `$$ Name` --> Names of file given to written files
> - `$$ boolean `--> true or false

## ⛏️ Built Using <a name = "built_using"></a>

- [NODE](https://nodejs.org/en/) - Yep! **Node**...... not python
- [PUPPETEER](https://pptr.dev/) - Headless 3rd party browser emulator
- [CONVERT-ARRAY-TO-CSV](https://www.npmjs.com/package/convert-array-to-csv) - Npm package

## ✍️ Author <a name = "author"></a>

- [@oddFEELING](https://github.com/oddFEELING) - Author and Owner

See also the list of [contributors](https://github.com/oddFEELING/web-scrapper/graphs/contributors) who participated in this project.
