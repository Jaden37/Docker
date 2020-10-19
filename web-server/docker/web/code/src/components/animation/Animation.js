import React from 'react';
import close from '../../assets/images/300SL/close.jpg'
import open from '../../assets/images/300SL/open.jpg'

export default class Animation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isFixed: false,
            isFirst: true,
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
  
    handleScroll = (event) => {
        let isFixed = false;
        if(window.scrollY > 500 && this.state.isFixed === false){
            isFixed = true;
            this.setState({isFixed});
            console.log('isFixed')
        } else if (window.scrollY < 500){
            isFixed = false;
            this.setState({isFixed});
            console.log('isNotFixed')
        }

        let isFirst = true;
        if(window.scrollY > 700 && this.state.isFirst === true){
            isFirst = false;
            this.setState({isFirst});
        } else if (window.scrollY < 700){
            isFirst = true;
            this.setState({isFirst});
        }
    }
    
    render(){
        return(
            <div className="animation child" onScroll={this.handleScroll}>
                <div className={`animation-img first ${this.state.isFixed ? "fixed" : ""}`}>
                {/* <div className={`animation-img first ${this.state.isFixed ? "fixed" : ""} ${this.state.isFirst ? "no-opacity" : "opacity"}`}> */}
                 </div>
                <div className={`animation-img second ${this.state.isFirst ? "opacity" : "no-opacity"}`}>
                </div>
            </div>
        )
    }
}