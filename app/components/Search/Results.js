var React = require('react');

// Here we created the home component
var Results = React.createClass({
    render: function(){
        var results = this.props.results.map(function(result, index){
            return(
                <li className="list-group-item">
                    <h3>
                        <span><em>{result.headline.main}</em></span>
                        <span className="btn-group pull-right" >
                            <button className="btn btn-default ">View Article</button>
                            <button className="btn btn-primary">Save</button>
                        </span>
                    </h3>
                    <p>Date Published: {result.pub_date}</p>
                </li>
            )
        });
        return(
            <div className="col-lg-12">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h1 className="panel-title"><strong><i className="fa fa-list-alt"></i>  Results</strong></h1>
                    </div>
                    <div className="panel-body">
                        <ul className="list-group">
                            {results}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

});

// Exporting the component effectively means we can deploy the component in any other file.
module.exports = Results;