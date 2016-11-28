const React = require('react');
var propTypes = React.Proptypes;
const transparentBg = require('../styles').transparentBg;

function Prompt(props) {
  return (
    <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
      <h1>{props.header}</h1>
      <div className="col-sm-12">
        <form onSubmit={props.onSubmitUser}>
          <div className="form-group">
            <input className="form-control" onChange={props.onUpdateUser} value={props.username} placeholder="Github Username" type="text" />
          </div>
          <div className="form-group col-sm-4-offset-4">
            <button className="btn btn-block btn-succes" type="submit">Continue</button>
          </div>
        </form>
      </div>
    </div>
  )
}

Prompt.propTypes = {
  header: PropTypes.string.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  onSubmitUser: PropTypes.func.isRequired,
  username: PropTypes.func.isRequired
}

// const Prompt = React.createClass({
//   propTypes: ,
//   render: function(){
//
//   }
// })

module.exports = Prompt;
