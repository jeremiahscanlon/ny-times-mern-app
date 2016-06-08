var React = require('react');
var Query = require('./Search/Query');
var Results = require('./Search/Results');
var axios = require('axios');
var helpers = require('../utils/helper');

// Here we created the home component
var Search = React.createClass({
    getInitialState: function(){
        return {
            data:[]
        }
    },
    componentWillMount(){
        var searchData = {
            text: 'beyonce',
            begin:'19980101',
            end:'20100101'
        };
        helpers.search(searchData)
            .then(function(data){
                this.setState({
                    data: data.data.response.docs,
                    meta: data.data.response.meta
                })
            }.bind(this)
            );
    },
    render: function(){
        return(
            <div className="holder">
                <div className="row">
                    <Query onUpdate={this.onUpdate} />
                </div>
                <div className="row">
                    <Results results={this.state.data} meta ={this.state.meta}/>
                </div>
            </div>
        )
    },
    onUpdate:function (searchData) {
        console.log('in search');
        console.log(searchData);
        helpers.search(searchData)
            .then(function(data) {
                this.setState({
                    data: data.data.response.docs,
                    meta: data.data.response.meta
                })
            }.bind(this)
            );
    }
});

// Exporting the component effectively means we can deploy the component in any other file.
module.exports = Search;