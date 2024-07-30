import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                username: "",
                address: {},
                image: "user-image"
            }
        };
    }

    async componentDidMount() {
        console.log('this is called after render the JSX');

        const data = await fetch('https://dummyjson.com/users/1');
        const json = await data.json();

        this.setState({
            userInfo: json
        });
        console.log(this.state.userInfo)
    }

    componentDidUpdate() {
        console.log('This called when the data is going to update in JSX after componentDidMount()');
    }

    componentWillUnmount() {
        console.log('This.is called when we go to other page');
    }

    render() {
        console.log('llll', this.state.userInfo)
        // const { name, locality } = this.props;
        const {username, address, image, email } = this.state.userInfo;

        return (
            <div className="user-cards">
                <img src={image}/>
                <h2>Name: {username}</h2>
                <h3>Locality: {address.city}</h3>
                <h3>Email: {email}</h3>
            </div>
        )
    }
}

export default UserClass;


/****
 *
 * --- MOUNTING ----
 *
 * Constructor (dummy)
 * Render (dummy)
 *      <HTML Dummy >
 * Component Did MOunt
 *      <API Call>
 *      <this.setState> -> State variable is updated
 *
 * ---- UPDATE
 *
 *      render(APi data)
 *      <HTML (new API data>)
 *      ccomponentDid Update
 *
 */