# Log Test Remote Team Solutions
Test for Backend Developer. 

##Overview

Create a log parser that can:
- Read an access log file (gobankingrates.com.access.log)
- Resolve Country and State from IP address (IE MaxMind GeoLite2 Free)
- Translate useragent to device type (Mobile, Desktop, Tablet) and Browser
(Safari, Chrome, etc)
- Combine new Geo & Device fields with existing fields on access log file and
output/export a CSV

The goal of this test is to showcase your ability to leverage existing libraries without writing an
exhaustive amount of code.

---
Requirements
- Any libraries must be installed via a package manager
- Must be run from the cli
- Provide instructions on how to build and run
- Must be written in either PHP, Python or NodeJS
---
Bonus
- Do this all with Docker
- Unit Test

**Instructions**
---

1. Enter logNode directory
2. `npm install`
3. `node app.js`

---
**Node Dependencies**
---
1. csv-parser
2. geolite2
3. maxmind
4. node-create-csv
5. ua-parser-js
