const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname })
})
app.get('/community', (req, res) => {
    res.sendFile('./views/community.html', { root: __dirname })
})
app.get('/solutions', (req, res) => {
    res.sendFile('./views/solutions.html', { root: __dirname })
})


app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname })
})

app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`))