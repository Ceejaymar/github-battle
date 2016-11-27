// const USER_DATA = {
//   name: 'Carlos Martinez',
//   username: 'ceejaymar',
//   image: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAg5AAAAJGZkY2I1NTk5LTEyYjktNGJhNC04ODg0LTcxNjg3NzllMzhiMQ.jpg'
// }

const React = require('react');
const ReactDOM = require('react-dom');

const routes = require('./config/routes');

// const ProfilePic = React.createClass({
//   render: function(){
//     return (
//       <div>
//         <img src={this.props.imageURL} style={{height: 200, width: 200}} />
//       </div>
//     )
//   }
// });
//
// const Link = React.createClass({
//   changeURL: function () {
//     window.location.replace(this.props.href)
//   },
//   render: function () {
//     return (
//       <span style={{color: 'blue', cursor: 'pointer'}} onClick={this.changeURL}>
//         {this.props.children}
//       </span>
//     )
//   }
// })
//
// const ProfileLink = React.createClass({
//   render: function(){
//     return (
//     <div>
//       <h1><Link href={'http://www.github.com/' +  this.props.username}>
//         {this.props.username}
//       </Link>
//       </h1>
//     </div>
//     )
//   }
// });
//
// const ProfileName = React.createClass({
//   render: function(){
//     return (
//     <div>
//       <h1>{this.props.name}</h1>
//     </div>
//     )
//   }
// });
//
// const Avatar = React.createClass({
//   render: function(){
//     return (
//       <div>
//         <ProfileName name={this.props.user.name}/>
//         <ProfilePic imageURL={this.props.user.image}/>
//         <ProfileLink username={this.props.user.username}/>
//       </div>
//     )
//   }
// });

ReactDOM.render(
  routes,
  document.getElementById('app')
);
