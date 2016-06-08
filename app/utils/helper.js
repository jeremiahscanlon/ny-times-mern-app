var axios = require('axios');

var helpers = {
    getSearchResults: function(text, begin, end){
        var url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${text}&begin_date=${begin}&end_date=${end}&api-key=876979a9db203dc5eec31096c3b8678b:0:74628681`;
        return axios.get(url)
            .then(
                (data) => {
                    this.setState({
                        data:data
                    })
                }
            );
    }
}

module.exports = helpers;