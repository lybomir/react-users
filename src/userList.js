import React from 'react';
import axios from 'axios';
import './usersList.css';



class UserList extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            users: [],
            api: 'https://rickandmortyapi.com/api/character/?page=2',
            prev: ''
        }
    }
    PrevStep = () => {
        axios.get(this.state.api).then(res =>{
            this.setState({
                users: res.data.results.slice(0,9),
                api: res.data.info.next,
                prev: res.data.info.prev
            })
            console.log(res);
            console.log(this.state.users);
            console.log(this.state.api);
            console.log(this.state.prev);
        })
    }
    NextStep = () => {
        axios.get(this.state.api).then(res =>{
            this.setState({
                users: res.data.results.slice(0,9),
                prev: res.data.info.prev,
                api: res.data.info.next
                
            })
            console.log(res);
            console.log(this.state.users);
            console.log(this.state.api);
            console.log(this.state.prev);
        })
    }
componentDidMount(){
    axios.get('https://rickandmortyapi.com/api/character/').then(res=>{
        this.setState({
            users: res.data.results.slice(0,9)
        })
    })
}
    render() {
        return (
            <div className="container">{
                this.state.users.map(userlist =>
                    <div>
                        <CartUser {...userlist} key={userlist.id} />
                    </div>
                )
            }
                <div>
                    <button onClick={this.PrevStep}>Prev</button>
                    <button onClick={this.NextStep}>Next</button>
                </div>
            </div>
        )
    }
}

function CartUser({name,image}) {
    return(
        <div>
            <img className = 'image' src={image} />
            <h3>{name}</h3>
        </div>
    )
}

export default UserList;