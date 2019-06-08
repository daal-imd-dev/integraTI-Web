import React, { Component } from 'react'
import Nave from './Nave'
import op3 from './imagens/op3.jpg'

class Home extends Component{
    render(){
        return(
            <div className="Navbar">
                <Nave/>
                <img src={op3}  alt="Logo-Home"/>
            </div>
        );
    }

}

export default Home