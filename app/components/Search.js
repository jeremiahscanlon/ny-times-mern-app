var React = require('react');
var Query = require('./Search/Query');
var Results = require('./Search/Results');

// Here we created the home component
var Search = React.createClass({
    render: function(){
        return(
            <div className="holder">
                <div className="row">
                    <Query />
                </div>
                <div className="row">
                    <Results />
                </div>
            </div>
        )
    }

});

// Exporting the component effectively means we can deploy the component in any other file.
module.exports = Search;