
const requestHandler = (req, res) => {
   const { url, method } = req;
    if(url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<head><title>My first page</title></head>')
        res.write('<body><h1>Hi, user1</h1>');
        res.write('<form action="/create-user" method="POST"><input type="text" name="username" /><button type="submit">send</button></form>')
        res.write('</body>')
        res.write('</html>')
        return res.end();
    }
    if(url === '/users'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<head><title>My first page</title></head>')
        res.write('<body><ul><li>user 1</li><li>user 2</li></ul></body>');
        res.write('</html>')
        return res.end();
    }
    if(url === '/create-user' && method === 'POST'){
        const data = [];
        req.on('data', (chunk) => {
            data.push(chunk);
        })
        req.on('end', () => {
            const parseBody = Buffer.concat(data).toString();
            const username = parseBody.split('=')[1];
            console.log(username);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        })
    }
}

module.exports = requestHandler;