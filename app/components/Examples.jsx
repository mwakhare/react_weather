var React = require ('react');
var {Link} = require ('react-router');

var Examples = React.createClass ({
  render: function (){
    return (
      <div>
      <h1>Examples</h1>
      <p>Here are some example locatioins:</p>
      <ol>
        <li>
          <Link to="?location=Nashik">Nashik</Link>
        </li>
        <li>
          <Link to="?location=Thane">Thane</Link>
        </li>
      </ol>
      </div>
    );
  }
});

module.exports = Examples;
