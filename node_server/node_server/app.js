const express = require('express');
const app = express();
const querystring = require('querystring');
const url = require('url');
const moment = require('moment');


app.use('/images', express.static('./images'));

app.use((req, res, next) => {
    setTimeout(() => {
        next();
    }, 1000);
});

app.get('/diy/iap/metric/list', (req, res) => {
    res.json({
        meta: {
            code: 200
        },
        data: require("./push_detail")
    });
});
app.post('/diy/iap/metric/get', (req, res) => {
    res.json({
        meta: {
            code: 200
        },
        data: require("./push_list")
    });
});
app.post('/diy/iap/metric/renewal_ratio', (req, res) => {
    res.json({
        meta: {
            code: 200
        },
        data: require("./push_object")
    });
});
app.get('/diy/push/video_library/get', (req, res) => {
    res.json({
        meta: {
            code: 200
        },
        data: require("./push_group_list")
    });
});
app.post('/diy/push/real_time_monitoring/list', (req, res) => {
    res.json({
        meta: {
            code: 200
        },
        data: require("./statistical")
    });
});
app.get('/diy/spider/youtube/playlist/gather', (req, res) => {
    res.json({
        meta: {
            code: 200
        },
        data: {data: require("./statistical")}
    });
});
app.get('/diy/nsfw/list', (req, res) => {
    res.json({
        meta: {
            code: 200
        },
        data: {
            data: require("./material"),
            total_num: 1201
        }
    });
});

app.listen(4000, () => console.log('server is running on port 4000!'));
