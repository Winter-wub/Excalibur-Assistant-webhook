const port = process.env.PORT || 3003;


//Production 
const channelAccessToken = 'DvWUMt4/HO35bxaw7gB8iakGcQ9XpCLPCNFFx4QG32WXCrUTaWuWNyfiBi3OgveStgdgP1rU0t0porXG8rbtrA+GGSet2+f24uxFfSZfVI0tA4CDJJL39eWoB0VclGV2yXN1n2BEEOGZ3fnysEOVuAdB04t89/1O/w1cDnyilFU='; 
const channelSecret = '07e6be49c56c7f5b0dc477d5295d611d';


//--- Development --- //
// const channelAccessToken = 'JaO5vXIRtENhyJDaeRq3klFB8wlRaAqpx3Ykgr7THZku8Eylt3lWQXVOtbxYp0xuPg5sxrrXlhKbolEm+Kswsh9Kcn2Y5BtLrNz3S46spcZXkgQ5J39CwmKnJ5h8B6E+eGo+B6r1a+Us0ckkf5P5VgdB04t89/1O/w1cDnyilFU=';
// const channelSecret = '51c00251de813ee59ce74d5602b02419';


const lineUrl =  'https://api.line.me/v2/bot/message/reply';


// -- Mongo -- //
const dbuser = 'waveblur';
const dbpass = 'waveza555';
const mongoUrl = `mongodb://${dbuser}:${dbpass}@ds123532.mlab.com:23532/heroku_c5rxsb5d`;

export default {
    port,
    channelAccessToken,
    channelSecret,
    mongoUrl,
    lineUrl,
}