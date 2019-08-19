import React from 'react';
import './app.css';


// const API ='https://rickandmortyapi.com/api/character/?page=2';


function UserList({name,image}) {
  return (
    <div>
      <img className='userImg' src={image} alt={name} />
      <h3>{name}</h3>
    </div>
  )
}

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      part: [],
      api: 'https://rickandmortyapi.com/api/character/?page=2',
      prev: ''
    }
  
    // this.getUser();
  }

  // nextStep = ()=> {
  //   return fetch(this.state.api).then(res => {
  //      return res.json();
  //   }).then(data=>{
  //     return data.results;
  //   }).then(users=> {
  //     this.setState({
  //       part: users.slice(0,9),
  //       api: users.api,
  //       prev: users.prev
  //     })
  //     console.log(this.state.part);
  //   })
  // }
  
  nextStep = ()=> {
    return fetch(this.state.api).then(res => {
       return res.json();
    }).then(data=>{
      return data.info;
    }).then(users=> {
      this.setState({
        part: users.results,
        api: users.next,
        prev: users.prev
      })
      console.log(users);
      console.log(this.state.part);
      console.log(this.state.api);
      console.log(this.state.prev);
    })
  }
  
  prevStep = ()=> {
    return fetch(this.state.api).then(res => {
       return res.json();
    }).then(data=>{
      return data.results;
    }).then(users=> {
      this.setState({
        part: users.slice(0,9),
        api: users.api,
        user: users.user
      })
      // console.log(this.state.part);
    })
  }


// componentDidMount(){
//   return fetch(this.state.api).then(res => {
//         return res.json();
//       }).then(data =>{
//         return data.results;
//       }).then(users =>{
//         this.setState({
//           part: users.slice(0,9)
//         })
//         console.log(this.state.user);
//       })
// }
  // getUser = () => {
  //   return fetch(this.state.api).then(res => {
  //     return res.json();
  //   }).then(data =>{
  //     return data.results;
  //   }).then(users =>{
  //     this.setState({user: users})
  //     console.log(this.state.user);
  //   })
  // }


  render() {
    return (
      <div className='userList'>
        {this.state.part ?
          this.state.part.map(user =>
            <div>
              <UserList {...user} key={user.id}/>
            </div>
          ) : ''
        }
        <button onClick={this.nextStep}>next</button>
        <button onClick={this.prevStep}>prev</button>
      </div>
    )
  }
}

