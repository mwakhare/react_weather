var React = require ('react');
var {Link, IndexLink} = require ('react-router');


var Nav = React.createClass ({
  onSearch: function (e){
    e.preventDefault();
    alert ("Not yet wired up!")
  },
  render: function (){
    return (
        <div className="top-bar">
          <div class="top-bar-left">
            <ul className="dropdown menu" data-dropdown-menu>
              <li className="menu-text">Weather App</li>
              <li>
                <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Get Weather</IndexLink>
              </li>
              <li>
                <IndexLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</IndexLink>
              </li>
              <li>
                <IndexLink to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</IndexLink>
              </li>
            </ul>
          </div>
          <div className="top-bar-right">
            <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li><input type="search" placeholder="Search"/></li>

              <li><button type="button" className="button">Search</button></li>
            </ul>
            </form>
          </div>
        </div>
    );
  }
});

module.exports = Nav;


//<a href="#/about">Go to About Page</a>


// <div>
// <h3>Nav component</h3>
// <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Get Weather</IndexLink>
// <IndexLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</IndexLink>
// <IndexLink to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</IndexLink>
// </div>
