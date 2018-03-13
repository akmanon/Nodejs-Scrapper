const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

let Data = [];

console.log("started");

for (let index = 1; index < 10; index++) {
    // url here
    request(`http://www.example.com/page/${index}`, function (error, response, html) {

        if (!error && response.statusCode == 200) {
            var $ = cheerio.load(html);

            console.log("enter 1");
            // jquery selector
            $('selector').each(function (i, element) {
                console.log("enter 2");
                var a = $(this).next().text();
                // Scrapped Data Here
                var scraps = {
                };
                Data.push(scraps);
            });
        }

        fs.writeFile('./Data.json', JSON.stringify(Data), 'utf-8', function (err) {
            if (err) throw err
            console.log('Done!')
        })
    });
}