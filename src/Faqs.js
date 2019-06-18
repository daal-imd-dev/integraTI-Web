import React, { Component } from 'react'
import {Col, Row, Container, Card, CardBody, ListGroupItem, Collapse} from 'reactstrap';
import ListaFaqs from './ListaFaqs';

const lista = {
    pergunta1: {
      pergunta: 'O que faz o Diretório Acadêmico?',
      resposta: 'Resposta sobre O que faz o Diretório Acadêmico? aqui nesse espaço'
    },
    pergunta2: {
      pergunta: 'Quais são as áreas de atuação?',
      resposta: 'Resposta sobre Quais são as áreas de atuação? aqui nesse espaço'
    },
    pergunta3: {
      pergunta: 'Que eventos são organizados?',
      resposta: 'Resposta sobre Que eventos são organizados? aqui nesse espaço'
    },
    pergunta4: {
        pergunta: 'Como posso fazer parte?',
        resposta: 'Resposta sobre Como posso fazer parte? aqui nesse espaço'
      }    
  }
class Faqs extends Component{
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }
    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }
    render(){
        return(
            <Container>
                <Row>
                    <Col m={8} s={12}>
                        <h5 className="subtitle">Lista de perguntas de respostas</h5>
                        <Card>
                            <CardBody>
                            {Object.keys(lista).map((key, index) =>
                                <ListaFaqs key={index} cat={lista[key]} />
                                )}
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }

}

export default Faqs