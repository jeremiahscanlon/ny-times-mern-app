var React = require('react');
var Query = require('./Search/Query');
var Results = require('./Search/Results');
var axios = require('axios');

// Here we created the home component
var Search = React.createClass({
    getInitialState: function(){
        return {
            data:[]
        }
    },
    componentWillMount(){
        this.search('beyonce',19980101,20100101)
            .then(function(data){
                this.setState({
                    data: data.data.response.docs,
                    meta: data.data.response.meta
                })
                // This bind function allows us to reference the higher level this
                // and not the "this" in the smaller context function.
            }.bind(this)
            );
    },
    search: function(text, begin, end){
        var url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${text}&begin_date=${begin}&end_date=${end}&api-key=876979a9db203dc5eec31096c3b8678b:0:74628681`;
        return axios.get(url);
    },
    render: function(){
        return(
            <div className="holder">
                <div className="row">
                    <Query />
                </div>
                <div className="row">
                    <Results results={this.state.data} meta ={this.state.meta}/>
                </div>
            </div>
        )
    }

});

// Exporting the component effectively means we can deploy the component in any other file.
module.exports = Search;