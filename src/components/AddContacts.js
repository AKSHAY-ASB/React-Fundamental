import React, { Component } from 'react'

export default class AddContacts extends Component {

    state = {
        name: "",
        email: "",
    }

    Add = (e) => {
        e.preventDefault();
        if(this.state.name === "" & this.state.email === ""){
            alert("All fields are mandatory");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"", email:""});
        console.log(this.state);
    }

    render() {
        return (
            <div className='ui main'>
                <h2>Add Contact</h2>
                <form className='ui form' onSubmit={this.Add}>
                    <div className='field'>
                        <label>Name</label>
                        <input 
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={(e) => this.setState({name:e.target.value})} 
                            placeholder='Name' />
                    </div>

                    <div className='field'>
                        <label>Email</label>
                        <input 
                            type="email" 
                            name="email"
                            value={this.state.email}
                            onChange={(e) => this.setState({email:e.target.value})} 
                            placeholder='Email' />
                    </div>

                    <button className='ui button blue'>Add</button>
                </form>
            </div>
        )
    }
}
