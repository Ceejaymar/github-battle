const React = require('react');
const ConfirmBattle = require('../components/ConfirmBattle');
const githubHelpers = require("../utils/githubHelpers");

const ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    return {
      isLoading: true,
      playerInfo: []
    }
  },
  componentWillMount: function (){
    console.log('Component will mount')
  },

  componentDidMount: function(){
    const query = this.props.location.query;
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
    .then(function (players){
      this.setState({
        isLoading: false,
        playersInfo: [players[0], players[1]]
      })
    }.bind(this))
    console.log('component did mount')
    //fetch info from github then update state
  },
  // componentWillReceiveProps: function () {
  //   console.log('component will recieve props')
  // },
  // componentWillUnmount: function () {
  //   console.log('component Will Unmount')
  // },
  render: function(){
    return (
      <ConfirmBattle isLoading={this.state.isLoading} playerInfo={this.state.playerInfo}/>
    )
  }
})

module.exports = ConfirmBattleContainer;
