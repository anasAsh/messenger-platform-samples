const request = require('request');

module.exports.get = (text) => {
  const options = {
    url: 'https://api.wit.ai/message?v=20170804&q='+encodeURI(text),
    headers: {
      'Authorization': 'Bearer R3KXVHFW3TEN5HRLAQUGISWCGHHGZTHQ'
    }
  };
  return new Promise((resolve, reject) => {
    request(options, (error, response, body) => {
      if (!error && response.statusCode == 200) {
         var witResponse = JSON.parse(body);
         console.log('witResponse', witResponse);
         resolve(witResponse);
      }
      reject(error);
    });
  });

};
