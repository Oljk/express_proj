const express = require('express')
const app = express()
const appConf = require('./myconf.js')

const auth = require('./routes/auth')
const posts = require('./routes/posts')

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
    appConf.getVar('PorT1');
    const ok = Boolean(Math.round(Math.random()));
    if (!ok) {
        throw  new Error('Random Math error at get / '); // ошибка будет валится рандомно
    }
    res.send('Hello World!')
})

app.use(auth);
app.use(posts);

app.listen(appConf.getVar('Port'), () => {
    console.log(`Example app listening at http://${appConf.Host}:${appConf.Port}`)
})

app.use(writeLog); // сначала в лог
app.use(errorHandler); // при падении ошибки обработает
app.use(allErrorsHandle);

