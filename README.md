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
- [Getting Started](#getting_started)
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

| :triangular_flag_on_post: This means to select all `h3` in any `div` element with the classname of `sc-fKFxtB ivoVis` |
| --------------------------------------------------------------------------------------------------------------------- |

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

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them.

```
Give examples
```

### Installing

A step by step series of examples that tell you how to get a development env running.

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo.

## ⛏️ Built Using <a name = "built_using"></a>

- [NODE](https://nodejs.org/en/) - Yep! **Node**...... not python
- [PUPPETEER](https://pptr.dev/) - Headless 3rd party browser emulator
- [CONVERT-ARRAY-TO-CSV](https://www.npmjs.com/package/convert-array-to-csv) - Npm package

## ✍️ Author <a name = "author"></a>

- [@oddFEELING](https://github.com/oddFEELING) - Author and Owner

See also the list of [contributors](https://github.com/oddFEELING/web-scrapper/graphs/contributors) who participated in this project.
