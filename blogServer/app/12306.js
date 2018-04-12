const cheerio = require('cheerio');
const request = require('superagent');
const fs = require('fs');
let getTicket = function (params) {
    this.params = params;
}
getTicket.prototype.setParams = function (params) {
    this.params = params;
    return this;
}
getTicket.prototype.getTicket = async function (params, cb) {
    let cishu = 0;
    let timer = setInterval(async function () {
        let ticketUrl = 'https://kyfw.12306.cn/otn/leftTicket/queryO?leftTicketDTO.train_date=' + params.train_date + '&leftTicketDTO.from_station=SJP&leftTicketDTO.to_station=TJP&purpose_codes=ADULT';
        let res = await request.get(ticketUrl);
        cishu++;
        let text = JSON.parse(res.text)
        console.log(cishu)
        var ticketsList = text.data.result;
        ticketsList.forEach((v,index) => {
            var ticketArr = v.split('|')
            if (ticketArr.indexOf(params.checi) > -1 && ticketArr[31] != '无') {
                console.log(ticketArr)
                clearInterval(timer)
                if (typeof cb == 'function') cb.call(null, ticketArr);
            }
        });
    }, params.time)
    // return res;
}
module.exports = getTicket;