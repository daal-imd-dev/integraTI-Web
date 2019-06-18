import React, { Component } from 'react'
import {Card, Col, Row, Container, CardTitle, CardBody} from 'reactstrap';
class About_us extends Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col m={8} s={12}>
                        <h5 className="subtitle">About Us</h5>
                        <Card>
                            <CardBody>
                                <CardTitle>
                                    <h5 className="title">Diretório Acadêmico Ada Lovelace - Tecnologia da Informação - UFRN</h5>
                                </CardTitle>
                            <div>
                                <p>
                                    Entidade de representação dos estudantes do BTI - UFRN com suas áreas de concentração 
                                    em Engenharia de Software, Ciência da Computação, Sistemas de Informação de Gestão, 
                                    Informática Educacional, Sistemas Embarcados e Bioinformática.
                                </p>
                            </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }

}

export default About_us