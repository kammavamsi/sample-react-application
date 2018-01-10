import React from "react";

export class Login extends React.Component {

    loginDetails = {
        userName: 'Pullarao',
        password: 'Kamma'
    }

    constructor(props) {
        super(props);
        this.state = {loginDetails: this.loginDetails};
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleChange(event){
        this.loginDetails[event.target.name] = event.target.value;
        this.setState({loginDetails: this.loginDetails});
    }

    submit(e){debugger;
        alert("success");
        window.sessionStorage.setItem("username", this.loginDetails.userName);
        this.props.history.push("/");
    }

    render(){
        return (
            <form onSubmit={this.submit}>
                <label>UserName :</label> <input type="text" name="userName" value={this.loginDetails.userName} onChange={this.handleChange} required/><br />
                <label>Password :</label> <input type="password" name="password" value={this.loginDetails.password} onChange={this.handleChange} required/> <br/>
                <button type="submit">Submit</button>
            </form>
        );
    }
}