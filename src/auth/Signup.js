import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName:'',
            lastName:'',
            email: '',
            password: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch("http://localhost:3000/user/createuser", {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then((response) => response.json())
         .then((data) => {this.props.setToken(data.sessionToken)
        }).catch(err => err.message);
    }

    render() {
        return (
            <div>
                <h1>Sign Up</h1>
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellat, atque nulla, soluta vero reprehenderit numquam incidunt, rem quaerat quos voluptatum perferendis. Distinctio culpa iste atque blanditiis placeat qui ipsa?</h6>
                    <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                        <Label for="firstname">First Name</Label>
                        <Input id="firstname" type="text" name="firstName" placeholder="enter first name" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="lastname">Last Name</Label>
                        <Input id="lastname" type="text" name="lastName" placeholder="enter last name" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input id="email" type="text" name="email" placeholder="enter email" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input id="su_password" type="password" name="password" placeholder="enter password" onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="submit"> Submit </Button>
                </Form>
            </div>
        )
    }
}

export default Signup;
                   