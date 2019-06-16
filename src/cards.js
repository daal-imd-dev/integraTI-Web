import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Card, CardHeader, CardText, Row, Col , Container} from 'reactstrap';

class Cards extends React.Component{

  
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      nestedModal: false,
      closeAll: false
    };

    this.toggle = this.toggle.bind(this);
    this.toggleNested = this.toggleNested.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  toggleNested() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: false
    });
  }

  toggleAll() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: true
    });
  }

  render(){
    

    return (
      <Container>
        <Row >
          <Col sm="6">
            <Card body>
              <CardHeader style={{textAlign:"center"}}>Introdução a Linguagem C</CardHeader>
              <CardText> <p>Carga Horária: 10H</p>
                         <p>Data de ínicio: 23/07/2019</p>
                         <p>Sala: A303 </p>
                         <p>Contato: daal@imd.ufrn.br</p>
              </CardText>
              <Button color="primary" onClick={this.toggle}>Ver curso</Button>
            </Card>
          </Col>
          <Col sm="6">
            <Card body>
              <CardHeader style={{textAlign:"center"}}>React Básico</CardHeader>
              <CardText> <p>Carga Horária: 20H</p>
                         <p>Data de ínicio: 18/06/2019</p>
                         <p>Sala: A101</p>
                         <p>Contato: daal@imd.ufrn.br </p>
              </CardText>
              <Button color="primary" onClick={this.toggle}>Ver curso</Button>
            </Card>
          </Col>
        </Row>
        <Row >
        <Col sm="6">
          <Card body>
            <CardHeader style={{textAlign:"center"}}>Introdução a Lógica de Programação</CardHeader>
            <CardText> <p>Carga Horária: 5H</p>
                       <p>Data de ínicio: 30/07/2019</p>
                       <p>Sala: A303</p> 
                       <p>Contato: daal@imd.ufrn.br</p>
            </CardText>
            <Button color="primary" onClick={this.toggle}>Ver curso</Button>
          </Card>
        </Col>
        <Col sm="6">
          <Card body>
            <CardHeader style={{textAlign:"center"}}>Angular</CardHeader>
            <CardText> <p>Carga Horária: 30H</p>
                       <p>Data de ínicio: 28/09/2019</p>
                       <p>Sala: A309</p> 
                       <p>Contato: daal@imd.ufrn.br</p>
            </CardText>
            <Button color="primary" onClick={this.toggle}>Ver curso</Button>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="6">
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}> Informação do Curso ...</ModalHeader>
            <ModalBody>
              Curso com carga horária de ... tendo como pré-requisito ..., será ministrado por João Maria com experiência na área ... e 10 anos em na área de TI.
              <br/>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggle}>Inscrever-se</Button>{' '}
              <Button color="secondary" onClick={this.toggle}>Cancelar</Button>
            </ModalFooter>
          </Modal>
        </Col>
      </Row>
      </Container>
    );
  };
}


export default Cards;