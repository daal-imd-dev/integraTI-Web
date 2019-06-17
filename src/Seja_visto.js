import React, { Component } from 'react';
import {Col, Row, Card} from 'reactstrap';
import UserProfile from './User_Profile';

class Seja_visto extends Component{
    render(){
        return(
            <Row>
                <Col sm="6">
                    <Card className="cardProfile">
                        <UserProfile/>
                    </Card>
                    <Card className="cardProfile">
                        <UserProfile/>
                    </Card>
                </Col>
                <Col sm="6">
                    <Card className="cardProfile">
                        <UserProfile/>
                    </Card>
                    <Card className="cardProfile">
                        <UserProfile/>
                    </Card>
                </Col>
            </Row>
        );
    }

}

export default Seja_visto