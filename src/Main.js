import React from "react";
import { Switch, Route, HashRouter } from 'react-router-dom';
import { Container } from 'reactstrap';
import Home from './Home';
import Sejavisto from './Seja_visto';
import Atualizese from './Atualizese'
import Aboutus from './About_us'
import Faqs from './Faqs'

class Main extends React.Component{
    render(){
        return(
            <main>
                <Container>
                  <HashRouter>
                    <Switch>
                    <Route exact path='/home' component={Home}/>
                    <Route path='#/sejavisto' component={Sejavisto}/>
                    <Route path='#/atualizese' component={Atualizese}/>
                    <Route path='#/aboutus' component={Aboutus}/>
                    <Route path='#/faqs' component={Faqs}/>
                    </Switch>
                  </HashRouter>
                </Container>
            </main> 

        );
    }
}

export default Main