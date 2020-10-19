import React from 'react';

export default class Vintage extends React.Component{
    render(){
        let leftArrow = "<";
        let rightArrow = ">";
        return(
            <div className="vintage">
                <div className="vintage-text">Mercedes 300 SL</div>
                <div className="vintage-bottom">
                    <div className="vintage-bottom-item video"></div>
                    <div className="vintage-bottom-item text">The 300 SL was inpired by Max Hoffman, Mercedes-Ben's authorized United States importer at the time, who correctly perceived a large American market for such car.</div>
                    <div className="vintage-bottom-item arrow left">{leftArrow}</div>
                    <div className="vintage-bottom-item arrow right">{rightArrow}</div>
                </div>
            </div>
        )
    }
}