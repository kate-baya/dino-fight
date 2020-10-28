const server = require("./server")

const port = process.env.PORT || 3000

server.listen(port, () => {
    console.info('Server listening on http://localhost:' + port)
})