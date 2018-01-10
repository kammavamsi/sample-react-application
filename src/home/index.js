import React from 'react';


export class Home extends React.Component {

    user = {
        firstName: 'Pullarao',
        lastName: 'Kamma'
    }

    constructor(props) {
        super(props);
        this.state = {};
        // this.doAction = this.doAction.bind(this);
        this.getGreeting = this.getGreeting.bind(this);
        this.formatname = this.formatname.bind(this);
    }

    getGreeting(user) {
        if (user) {
            return <h1>Hello, {this.formatname(user)} !!</h1>
        }
        return <h1>Helllo, Stranger!!</h1>
    }

    formatname(user) {
        return user.firstName + " " + user.lastName;
    }

    render() {
        return (
            <div>
                <h2>Home</h2>
                <div>
                    <div>
                        {this.getGreeting()} <br />
                        {this.getGreeting(this.user)} <br />
                        <h1> Updating the Rendered Element</h1>
                        <div id="ticker"></div>
                    </div>

                    {/* <Welcome user={user} />

                    <Clock />

                    <button onClick={(e) => this.doAction(e)}>Click me</button>

                    <Toggle /> */}
                </div>
            </div>
        );
    }

}
