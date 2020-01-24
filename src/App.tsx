import React, {Component} from 'react'
import {Grid, Header, Form, TextArea, Card, Label, Table, Checkbox} from 'semantic-ui-react'
import DiscoveryMatrixHeatMap from './components/DiscoveryMatrixHeatMap'
import MindMapGraph from './components/MindMapGraph'
import DoubleDiamondGraph from './components/DoubleDiamondGraph'
import ScammperrDonutChart from './components/ScammperrDonutChart'
import BrainWritingGraph from './components/BrainWritingGraph'
import SwotAnalysisMatrix from './components/SwotAnalysisMatrix'
import ModelCanvasTreeMap from './components/ModelCanvasTreeMap'
import WhysGraph from './components/WhysGraph'
import {ParentSize} from '@vx/responsive'

interface Props{
}

interface State{
}

class App extends  Component<Props, State> {
  constructor(props: any){
    super(props);
    this.state = {

    };
  }

  render(){
      return (
      <Grid padded stackable>
        <Grid.Row width={16}>
          <Grid.Column width={16}  textAlign='center'>
                <Header as="h1">
                  <Header.Content>
                    Scientific Approach in HCI
                  </Header.Content>
                  <Header.Subheader>
                    This page describes my personal experience of the scientific approach in HCI.
                  </Header.Subheader>
                </Header>
          </Grid.Column>
          <Grid.Column width={16} style={{paddingTop:'1rem'}} textAlign='center'>
                <Header as="h2" textAlign='left' >1. Vision</Header>
                <Form>
                  <TextArea placeholder='I pursued the vision of Tangible User Interfaces.' />
                </Form>
          </Grid.Column>
          <Grid.Column width={16} style={{paddingTop:'1rem'}} textAlign='center'>
                <Header as="h2" textAlign='left'>2. Motivation</Header>
                <Form>
                  <TextArea placeholder='I focused on societal challenges regarding Energy Demand-Side Managment (e.g., energy demand saving, energy demand shifting).' />
                </Form>
          </Grid.Column>
          <Grid.Column width={16} style={{paddingTop:'1rem'}} textAlign='center'>
                <Header as="h2" textAlign='left'>3. Question</Header>
                <Form>
                  <TextArea placeholder='I asked, how can Tangible User Interfaces help in Energy Demand-Side Managment?' />
                </Form> 
          </Grid.Column>
          <Grid.Column width={16} style={{paddingTop:'1rem'}} textAlign='center'>
                <Header as="h2" textAlign='left'>4. State of the Art</Header>
                <Card>
                  <Card.Content>
                    <Card.Header>Systematic Litterature Review
                    </Card.Header>
                    <Card.Meta>Moher et al. (2009)</Card.Meta>
                    <Card.Description>
                    <Form>
                    <Label as='a'  color='green' content='Reproductive' icon='plus' horizontal/>
                    <Label as='a' color='red' content='Subjective' icon='minus' horizontal/>
                    </Form>
                    <br/>
                    <Form>
                        <Label attached='top left'>1. Identification</Label>
                        <TextArea placeholder='I gathered the 1000th articles from 2005 to 2015 using keywords (HCI, Energy Demand-Side Managment, and Energy Saving) in the databases (Google Scholar and ACM).' />
                    </Form>
                    <br/>
                    <Form>
                        <Label attached='top left'>2. Exclusion</Label>
                        <TextArea placeholder='I excluded articles that are duplicated, are not about the subject in the title and the abstract, lack description and/or illustration of the prototype.' />
                    </Form>
                    <br/>
                    <Form>
                        <Label attached='top left'>3. Evaluation</Label>
                        <TextArea placeholder='I assessed articles using 15 criteria (targeted social space, temporal scale of data, persuasion functions, type of interface, etc.) organized in four classes (Context, User, Interface, System)' />
                    </Form>
                    </Card.Description>
                  </Card.Content>
                </Card>
          </Grid.Column>
          <Grid.Column width={16} style={{paddingTop:'1rem'}} textAlign='center'>
               <Header as="h2" textAlign='left'>5. Hypothesis</Header>
          </Grid.Column>
          <Grid.Column width={8} style={{paddingTop:'1rem'}} textAlign='center'>
                <Card fluid>
                    <Card.Content>
                      <Card.Header>Discovery Matrix
                      </Card.Header>
                      <Card.Meta>Moher (1954)</Card.Meta>
                      <Card.Description>
                      <ParentSize>
                          {parent => (
                              <DiscoveryMatrixHeatMap 
                                  width={parent.width}
                                  height={300}
                                  parentRef={parent.ref}
                              />
                          )}
                      </ParentSize>
                      </Card.Description>
                    </Card.Content>
                  </Card>      
          </Grid.Column>
          <Grid.Column width={8} style={{paddingTop:'1rem'}} textAlign='center'>
                <Card fluid>
                    <Card.Content>
                      <Card.Header>MindMap
                      </Card.Header>
                      <Card.Meta>Tony Buzan (1974)</Card.Meta>
                      <Card.Description>
                      <ParentSize>
                          {parent => (
                              <MindMapGraph 
                                  width={parent.width}
                                  height={300}
                                  parentRef={parent.ref}
                              />
                          )}
                      </ParentSize>
                      </Card.Description>
                    </Card.Content>
                  </Card>      
          </Grid.Column>
          <Grid.Column width={8} style={{paddingTop:'1rem'}} textAlign='center'>
                <Card fluid>
                    <Card.Content>
                      <Card.Header>Double Diamond
                      </Card.Header>
                      <Card.Meta>British Design Council (2005)</Card.Meta>
                      <Card.Description>
                      <ParentSize>
                          {parent => (
                              <DoubleDiamondGraph 
                                  width={parent.width}
                                  height={300}
                                  parentRef={parent.ref}
                              />
                          )}
                      </ParentSize>
                      </Card.Description>
                    </Card.Content>
                  </Card>      
          </Grid.Column>
          <Grid.Column width={8} style={{paddingTop:'1rem'}} textAlign='center'>
                <Card fluid>
                    <Card.Content>
                      <Card.Header>SCAMMPERR
                      </Card.Header>
                      <Card.Meta>Michael Michalko (2002)</Card.Meta>
                      <Card.Description>
                      <ParentSize>
                          {parent => (
                              <ScammperrDonutChart 
                                  width={parent.width}
                                  height={300}
                                  parentRef={parent.ref}
                              />
                          )}
                      </ParentSize>
                      </Card.Description>
                    </Card.Content>
                  </Card>      
          </Grid.Column>
          <Grid.Column width={8} style={{paddingTop:'1rem'}} textAlign='center'>
                <Card fluid>
                    <Card.Content>
                      <Card.Header>6-3-5 Brainwriting
                      </Card.Header>
                      <Card.Meta>Bernd Rohrbach (1968)</Card.Meta>
                      <Card.Description>
                      <ParentSize>
                          {parent => (
                              <BrainWritingGraph 
                                  width={parent.width}
                                  height={300}
                                  parentRef={parent.ref}
                              />
                          )}
                      </ParentSize>
                      </Card.Description>
                    </Card.Content>
                  </Card>      
          </Grid.Column>
          <Grid.Column width={8} style={{paddingTop:'1rem'}} textAlign='center'>
                <Card fluid>
                    <Card.Content>
                      <Card.Header>5 Whys
                      </Card.Header>
                      <Card.Meta>Sakichi Toyoda (1930)</Card.Meta>
                      <Card.Description>
                      <ParentSize>
                          {parent => (
                              <WhysGraph 
                                  width={parent.width}
                                  height={300}
                                  parentRef={parent.ref}
                              />
                          )}
                      </ParentSize>
                      </Card.Description>
                    </Card.Content>
                  </Card>      
          </Grid.Column>
          <Grid.Column width={8} style={{paddingTop:'1rem'}} textAlign='center'>
                <Card fluid>
                    <Card.Content>
                      <Card.Header>SWOT Analysis
                      </Card.Header>
                      <Card.Meta>George Albert Smith and C Roland Christiensen (1960)</Card.Meta>
                      <Card.Description>
                      <ParentSize>
                          {parent => (
                              <SwotAnalysisMatrix 
                                  width={parent.width}
                                  height={300}
                                  parentRef={parent.ref}
                              />
                          )}
                      </ParentSize>
                      </Card.Description>
                    </Card.Content>
                  </Card>      
          </Grid.Column>
          <Grid.Column width={8} style={{paddingTop:'1rem'}} textAlign='center'>
                <Card fluid>
                    <Card.Content>
                      <Card.Header>SWOT Analysis
                      </Card.Header>
                      <Card.Meta>George Albert Smith and C Roland Christiensen (1960)</Card.Meta>
                      <Card.Description>
                      <ParentSize>
                          {parent => (
                              <ModelCanvasTreeMap
                                  width={parent.width}
                                  height={300}
                                  parentRef={parent.ref}
                              />
                          )}
                      </ParentSize>
                      </Card.Description>
                    </Card.Content>
                  </Card>      
          </Grid.Column>
            <Header as="h4" textAlign='left'>6. Prediction</Header>
            <Header as="h4" textAlign='left'>7. Experimentation</Header>
            <Header as="h4" textAlign='left'>8. Analysis</Header>
            <Header as="h4" textAlign='left'>9. Dissemination</Header>
        </Grid.Row>
      </Grid>
    );
  }
}

export default App;
