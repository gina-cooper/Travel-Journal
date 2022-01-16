import React, {Component} from 'react';
import axios from 'axios';

export default class AddLocation extends Component {
//need to add constructor
constructor(props) {
    super(props); 

    //bind class to these functions
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePlace = this.onChangePlace.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeRating = this.onChangeRating.bind(this);
    this.onChangeLatitude = this.onChangeLatitude.bind(this);
    this.onChangeLongitude = this.onChangeLongitude.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    //set the state to initial values
    this.state = {
        username:"",
        place: "",
        description : "",
        rating: 0,
        latitude:  0,
        longitude: 0,
        users: []
    }
}

//lifecycle method - going to hard code a user rather than use one from the database
//data is an array - map allows you to return something for every element in the array
componentDidMount() { //will automatically be called before anything is displayed to the page

    axios.get("http://localhost:3001/users")
    .then(response => {
        if (response.data.length >0) {
            this.setState ( {
        users: response.data.map(user => user.username),
        username: response.data[0].username
        })
        }
    })
}

//webform - whenever user enters username it will set state. target is textbox. set value of username to what is in textbox
onChangeUsername(e) {
    this.setState({username: e.target.value});
}
onChangePlace(e) {
    this.setState({ place: e.target.value});
}
onChangeDescription(e) {
    this.setState({description: e.target.value});
}
onChangeRating(e) {
    this.setState({rating: e.target.value});
}
onChangeLatitude(e) {
    this.setState({latitude: e.target.value });
}
onChangeLongitude(e) {
    this.setState({longitude: e.target.value});
}
onSubmit(e) { //prevent html form submit behavior from taking place
    e.preventDefault();

    const location = {
        username: this.state.username,
        place: this.state.place,
        description: this.state.description,
        rating: this.state.rating,
        latitude: this.state.latitude,
        longitude: this.state.longitude
    }

            //send location data to backend
            axios.post('http://localhost:3001/locations/add', location)
            .then(res => console.log(res.data));
    console.log(location);

    window.location = '/'; //take person back to home page
}

//when submit call this.onsubmit
//username is a drop down menu
//inside a select box - we are getting the options from the users array
//this.state.users.map - .map allows us to return something for each element in an array
//for each user in the array return an option in the select box
    render(){
    return  (
        <div>
            <h3> Add a New Location</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Username: </label>
                    <select  className="form-control"alue={this.state.username}
                        onChange ={this.onChangeUsername}>
                        {
                            this.state.users.map(function(user) {
                                return <option key={user} value = {user}>{user}</option>;

                            })
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label>Place:</label>
                    <input type="text" required  className="form-control" value={this.state.place} onChange={this.onChangePlace} />
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <input type="text" required className="form-control" value={this.state.description} onChange={this.onChangeDescription} />
                </div>
                <div className="form-group">
                    <label>Rating (0 to 5):</label>
                    <input type="text" required className="form-control" value={this.state.rating} onChange={this.onChangeRating} />
                </div>
                <div className="form-group">
                    <label>Latitude:</label>
                    <input type="text"  className="form-control" value={this.state.latitude} onChange={this.onChangeLatitude} />
                </div>
                <div className="form-group">
                    <label>Longitude:</label>
                    <input type="text"  className="form-control" value={this.state.longitude} onChange={this.onChangeLongitude} />
                </div>
                <div className="form-group">
                    <input type="submit" value="Add Location" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
    }
}
