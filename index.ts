import express from 'express'
import cors from 'cors'

const quotes = [
    {
        id: 1,
        user: {
            username: "Amer",
            gamertag: "H3LL G",
            age: 18,
        },
        quote: "welcome to H3LL"
    },
    {
        id: 2,
        user: {
            username: "Amer",
            gamertag: "H3LL G",
            age: 18,
        },
        quote: "welcome to H3LL"
    },
    {
        id: 3,
        user: {
            username: "Amer",
            gamertag: "H3LL G",
            age: 18,
        },
        quote: "welcome to H3LL"
    },
    {
        id: 4,
        user: {
            username: "Amer",
            gamertag: "H3LL G",
            age: 18,
        },
        quote: "welcome to H3LL"
    }
]

const app = express()
app.use(cors())
const port = 3000

app.get('/', (req, res) => {
    res.send('Nope')
})

app.get('/quotes', (req, res) => {
    let quotesDoSend = quotes
    if(req.query.age) {
      quotesDoSend = quotesDoSend.filter(quote => quote.user.age === Number(req.query.age))
    }
    res.send(quotesDoSend)
})

app.get('/quotes/:id', (req, res) => {
    const id = Number(req.params.id)
    const quote = quotes.find(q => q.id === id)
    if (!quote) {
        res.status(404).send('Quote not found. Try a different id')
    }
    res.send(quote)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })