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
- [Authors](#authors)

## 🧐 About <a name = "about"></a>

Web crawler for scraping web pages

## 🎥 Demo / Working <a name = "demo"></a>

![Working](/assets/demo.gif)

## 💭 How it works <a name = "working"></a>

Scraper first takes in a **_Search Object_** which sets a level of needed criterias for the scrape to be processed and the files to be saved as **_CSV_** and **_JSON_**.

Async function to handle scrape is called drawing arguments from the **_Search Object_**.

The bot uses the Pushshift API to fetch comments, PRAW module to reply to comments and Heroku as a server.

The entire bot is written in Python 3.6

## 🎈 Usage <a name = "usage"></a>

To use the Scraper, clone repository and install packages with:

```
npm install
```

This installs puppeteer and convert-array-to-csv as dependencies.

The bot will then give you the Oxford Dictionary (or Urban Dictionary; if the word does not exist in the Oxford Dictionary) definition of the word as a comment reply.

### Example:

> !dict what is love

**Definition:**

Baby, dont hurt me~
Dont hurt me~ no more.

**Example:**

Dude1: Bruh, what is love?
Dude2: Baby, dont hurt me, dont hurt me- no more!
Dude1: dafuq?

**Source:** https://www.urbandictionary.com/define.php?term=what%20is%20love

---

<sup>Beep boop. I am a bot. If there are any issues, contact my [Master](https://www.reddit.com/message/compose/?to=PositivePlayer1&subject=/u/Wordbook_Bot)</sup>

<sup>Want to make a similar reddit bot? Check out: [GitHub](https://github.com/kylelobo/Reddit-Bot)</sup>

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

## ✍️ Authors <a name = "authors"></a>

- [@oddFEELING](https://github.com/oddFEELING) - Author and Owner

See also the list of [contributors](https://github.com/kylelobo/The-Documentation-Compendium/contributors) who participated in this project.
