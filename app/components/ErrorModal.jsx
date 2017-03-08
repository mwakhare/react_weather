var React = require ('react');

var ErrorModal = React.createClass ({
  componentDidMount: function () {
    var modal = Foundation.Reveal($('#errorModal'));
    modal.open ();
  },

  render: function (){

    var {temp, location} = this.props;

    return (
      <div className="reveal tiny text-center" id="errorModal" data-reveal="">
        <h1 className="text-center">Error</h1>
        <p className="lead">Pls don't mind.</p>
            <button className="close-button" data-close="" type="button">
            </button>
      </div>
    );
  }
});

module.exports = ErrorModal;
