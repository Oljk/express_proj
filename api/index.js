const express = require('express')
const app = express()

require('dotenv').config({ encoding: 'latin1' });

const port = process.env.PORT;

function writeLog (err, req, res, next) {
    console.log('index.js mes: ' + err.message)
    next(err);
}

function errorHandler (err, req, res, next) {
    if (res.headersSent) { //the app sent HTTP headers for the response
        return next(err)
    }
    res.status(500)
    res.send('error');
}

function allErrorsHandle (err, req, res, next) {
    res.status(501);
    res.send('unknown error, please contact admin');
    next(err);
}

app.get('/', (req, res) => {
    const ok = Boolean(Math.round(Math.random()));
    if (!ok) {
        throw  new Error('Random Math error at get / '); // ошибка будет валится рандомно
    }
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.use(writeLog); // сначала в лог
app.use(errorHandler); // при падении ошибки обработает
app.use(allErrorsHandle);

