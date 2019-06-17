import React from "react";
import {Col, Row, Card} from "reactstrap";
import avatar from "./imagens/avatar.png";
import social from "./imagens/social.png"




class User_Profile extends React.Component{
    render(){
        return(
            <Card>
                <Row>
                    <Col sm="6">
                        <img src={avatar} alt="Avatar" className="avatar"/>
                        <h5 >Maria Gabriela</h5>
                        <p className="grey darken-2 white-text">Ruby Developer</p>
                    </Col>
                    <Col sm="6">
                        <div>
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt laborum."</p>
                            <img src={social} className="social" alt="Rede Social"/>
                            <br/>
                        </div>
                    </Col>
                </Row>
            </Card>
        );
    }
}

export default User_Profile