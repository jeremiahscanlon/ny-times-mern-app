var axios = require('axios');

var helpers = {
    search: function(searchData){
        var url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchData.text}&begin_date=${searchData.begin}&end_date=${searchData.end}&api-key=876979a9db203dc5eec31096c3b8678b:0:74628681`;
        return axios.get(url);
    },
}

module.exports = helpers;