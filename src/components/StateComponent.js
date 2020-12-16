import React, { Component } from 'react';

class StateComponent extends Component{
    state = {
        nama: 'Deni Gunawan',
        semester: 5,
        hobi: 'Membaca'
    };

    render(){
        return(
            <div>
                <h3>nama    = {this.state.nama}</h3>
                <p>semester = {this.state.semester}</p>
                <div>{ this.state.hobi}</div>
                <p>======================================</p>
            </div>
        );
    }
}

export default StateComponent;