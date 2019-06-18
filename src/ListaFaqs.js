import React from 'react';
import { ListGroupItem, Collapse, Card, CardBody } from 'reactstrap';

class ListaFaqs extends React.Component {
  constructor(props) {
    super(props);
    
    this.toggle = this.toggle.bind(this);
    this.state = {collapse: false};
  }
  
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  
  render() {
    const conteudo = this.props.cat;
    return (
      <ListGroupItem color="primary">
        <div>
          <p onClick={this.toggle}>
            <strong>{conteudo.pergunta}</strong>
          </p>
          <Collapse isOpen={this.state.collapse}>
            <Card>
                <CardBody>
                    {conteudo.resposta}
                </CardBody>
            </Card>
            
          </Collapse>
        </div>
      </ListGroupItem>
    );
  }
}

export default ListaFaqs