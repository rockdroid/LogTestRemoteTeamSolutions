const csv = require('csv-parser');
const fs = require('fs');
const parser = require('ua-parser-js');
const geolite2 = require('geolite2');
const maxmind = require('maxmind');
const ObjectsToCsv = require('node-create-csv'); 
const file = 'gobankingrates.com.access.log'
const headers = ['IP', '1', '2', 'Date', 'timeZone', 'Asset', 
                'ServerResponse', 'Size', 'URI', 'userAgent']
var lookupCity = maxmind.open(geolite2.paths.city)
var data = []
    fs.createReadStream(file)
    .pipe(csv({ headers: headers, separator: ' ' }))
    .on('data', (row) => {
        userAgent = parser(row.userAgent)
        row.browser = userAgent.browser.name
        row.deviceType = userAgent.device.type
        if (lookupCity.get(row.IP) != null ) {
            if (typeof lookupCity.get(row.IP).city !== 'undefined') {
                row.city = lookupCity.get(row.IP).city.names.en
            } else {
                row.city = undefined
            }
            if (typeof lookupCity.get(row.IP).country !== 'undefined') {
                row.country = lookupCity.get(row.IP).country.names.en
            } else {
                row.country = lookupCity.get(row.IP).continent.names.en
            }
        } else {
            row.country = undefined
        }
        data.push(row)
    }, this)
    .on('end', () => {
        let otc = new ObjectsToCsv(data);
        otc.toDisk('./test.csv', {append: false, showHeader: true, allColumns: true,});
        console.log('CSV file successfully processed');
    });