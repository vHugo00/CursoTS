import http from 'http';

const server = http.createServer((req, res) => {
  return res.end('Hello World');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});