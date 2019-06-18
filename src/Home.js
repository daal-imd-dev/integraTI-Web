import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';

class Home extends Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        {/* Colocar texto aqui !!! */}
                    </Col>
                </Row>
            </Container>
        );
    }

}

export default Home