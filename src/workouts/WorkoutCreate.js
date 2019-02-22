import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

class WorkoutCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            definition: '',
            description: '',
            result: '',
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        console.log(this.state)
        event.preventDefault();
        fetch("http://localhost:3000/log/create", {
            method: 'POST',
            body:JSON.stringify({log:this.state}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        }) 
        .then(response => response.json())
        // .then(logData => console.log(logData))
        .then((logData) => {
            // after we create a og we want to pull data from the server //
            this.props.updateWorkoutsArray();
            this.setState({
                    definition: '',
                    description: '',
                    result: '',
                })
                })
    }

    render() {
        return (
            <div>
                <h3>Log a Workout</h3>
                <hr />
                {/* after the form is submitted, the data gets sent to the method above */}
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                        <Label for="result">Result</Label>
                        <Input id="result" type="text" name="result" value={this.state.result} placeholder="enter result" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="definition">Type</Label>
                        <Input type="select" name="definition" id="definition" value={this.state.definition} onChange={this.handleChange} placeholder="Type">
                            <option></option>
                            <option value="Time">Time</option>
                            <option value="Weight">Weight</option>
                            <option value="Distance">Distance</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Notes</Label>
                        <Input id="description" type="text" name="description" value={this.state.description} placeholder="enter description" onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="submit" color="primary"> Submit </Button>
                </Form>
            </div>
        )
    }
}

export default WorkoutCreate;