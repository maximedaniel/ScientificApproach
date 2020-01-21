import React, {createRef, Component, RefObject} from 'react';
import {Grid, Sticky, Ref, Image, Responsive, Header, List, Visibility} from 'semantic-ui-react'
import Experience from './components/experience';
import Education from './components/education';
import Teaching from './components/teaching';
import Project from './components/project';
import Publication from './components/publication';
import Methodology from './components/methodology';
import Scrollspy from './components/scrollspy';

interface Props{

}
interface State{
}

class App extends  Component<Props, State> {
  constructor(props: any){
    super(props);
    this.state = {}
  }

  render(){
      return (
      <Grid padded stackable>
        <Grid.Row>
          <Grid.Column width={16}>
            <Header as="h3" textAlign='left'>Scientific Approach in HCI</Header>
            <Header as="h4" textAlign='left'>1. Vision</Header>
            <p>Programmable Matter</p>
            <Header as="h4" textAlign='left'>2. Context</Header>
            <p>Energy Demand-Side Management</p>
            <Header as="h4" textAlign='left'>3. Question</Header>
            <p>How can Programmable Matter help Energy Demand-Side Management?</p>
            <Header as="h4" textAlign='left'>4. State of the art</Header>
            <Header as="h4" textAlign='left'>Database and keywords Selection</Header>
            <Header as="h4" textAlign='left'>Exclusion Criteria Definition</Header>
            <Header as="h4" textAlign='left'>Evaluation Criteria Definition</Header>
            <Header as="h4" textAlign='left'>5. Hypothesis</Header>
            <Header as="h4" textAlign='left'>6. Prediction</Header>
            <Header as="h4" textAlign='left'>7. Experimentation</Header>
            <Header as="h4" textAlign='left'>8. Analysis</Header>
            <Header as="h4" textAlign='left'>9. Dissemination</Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default App;
