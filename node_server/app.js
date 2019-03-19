const express = require("express");
const app = express();
const querystring = require("querystring");
const url = require("url");
const moment = require("moment");

app.use('/images', express.static('./images'));

/*设置延时，请求显得更真实*/
app.use((req, res, next) => {
    setTimeout(() => {
        next();
    }, 1000);
});

app.get('/diy/list', (req, res) => {
    res.json({
        meta: {
            code: 200
        },
        data: require('./list')
    });
});

app.listen(4000, () => console.log('server is running on port 4000!'));
