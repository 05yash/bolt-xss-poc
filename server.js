const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<html><body><h1>Demo App</h1><p>Welcome!</p></body></html>');
});

server.listen(port, () => {
  // OSC 8 hyperlink: displayed text looks like a normal localhost URL
  // but the actual href is javascript: — xterm.js renders it as clickable
  process.stdout.write(
    '\x1b[32m✓\x1b[0m Server ready at ' +
    '\x1b]8;;javascript:alert(document.domain)\x07' +
    'http://localhost:' + port +
    '\x1b]8;;\x07' +
    '\n'
  );
});
