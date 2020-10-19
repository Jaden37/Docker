import React from 'react';
import logo from '../../assets/images/MB_Logo.png';

export default class Navbar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
             counter: 0 
        };
    }

    render(){
        return(
            <div className="navbar">
                <div className="navbar-item">Company</div>
                <div className="navbar-item">Design</div>
                <div className="navbar-item">Lifestyle</div>
                <div className="navbar-logo">
                    <img src={logo}/>
                </div>
                <div className="navbar-item">Vehicles</div>
                <div className="navbar-item">Sports</div>
                <div className="navbar-item">Vintage</div>
            </div>
        )
    }
}