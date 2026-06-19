const https = require('https');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'clients');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

https.get('https://www.adityachemicals.in/', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    // find all img src
    const regex = /<img[^>]+src="([^">]+)"/gi;
    let match;
    const urls = new Set();
    while ((match = regex.exec(data)) !== null) {
      if (match[1].includes('br_logo') || match[1].includes('main-logo')) {
        urls.add(match[1]);
      }
    }

    console.log(`Found ${urls.size} logos. Downloading...`);

    urls.forEach(url => {
      const filename = path.basename(url);
      const dest = url.includes('main-logo')
        ? path.join(__dirname, 'public', filename)
        : path.join(__dirname, 'public', 'clients', filename);

      const file = fs.createWriteStream(dest);
      https.get(url, (response) => {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Downloaded ${filename}`);
        });
      }).on('error', (err) => {
        fs.unlink(dest);
        console.error(`Error downloading ${url}: ${err.message}`);
      });
    });
  });
}).on('error', (err) => {
  console.log("Error: " + err.message);
});
