const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

const PORT = 8080;
const DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  let reqPath = decodeURI(req.url.split('?')[0]);
  if (reqPath === '/' || reqPath === '') reqPath = '/index.html';

  const filePath = path.join(DIR, reqPath);
  if (!filePath.startsWith(DIR)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*'
    });
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  const nets = os.networkInterfaces();
  const ips = [];
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === 'IPv4' && !net.internal) {
        ips.push(net.address);
      }
    }
  }

  console.log('\n======================================================');
  console.log('  🥛 डेयरी हिसाब (Dairy Hisab) - मोबाइल सर्वर चालू है!');
  console.log('======================================================\n');
  console.log('अपने Android मोबाइल के Google Chrome में यह लिंक खोलें:');
  ips.forEach(ip => {
    console.log(`  👉  http://${ip}:${PORT}`);
  });
  console.log('\n📲 मोबाइल में ऐप कैसे इंस्टॉल करें:');
  console.log('  1. मोबाइल के Chrome में ऊपर दिया गया लिंक खोलें।');
  console.log('  2. Chrome के ऊपर दाएं कोने में 3 बिंदु (⋮) दबाएं।');
  console.log('  3. "Add to Home screen" (होम स्क्रीन पर जोड़ें) या "Install app" दबाएं।');
  console.log('  4. आपके मोबाइल स्क्रीन पर "Dairy Hisab" का ऐप आइकन आ जाएगा!\n');
  console.log('नोट: सर्वर बंद करने के लिए इस विंडो को बंद कर दें।\n');
});
