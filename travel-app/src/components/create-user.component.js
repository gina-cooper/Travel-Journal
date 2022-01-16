import React, {Component} from 'react';
import axios from 'axios';


export default class CreateUser extends Component {
    constructor(props) {
        super(props); 
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {username:""}
    }
    onChangeUsername(e) {
        this.setState({username: e.target.value });
    }
    onSubmit(e) { //prevent html form submit behavior from taking place
        e.preventDefault();
        const newuser = {username: this.state.username}
        console.log(newuser);
        //send user data to backend
        axios.post('http://localhost:3001/users/add', newuser)
        .then(res => console.log(res.data));
    //allow to add several users
        this.setState({
            username: ''
        });
    } 
    render(){
    return  (
    <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Username"  aria-describedby="btnAdd" value={this.state.username} onChange={this.onChangeUsername}/> 
                <button class="btn btn-outline-secondary" type="submit" id="btnAdd">Create User</button>
            </div>
        </form>
   </div>
    )
    }
}