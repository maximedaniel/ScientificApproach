import React, {Component} from 'react'
import {Grid, Header, Form, TextArea, Card, Label, Table, Checkbox} from 'semantic-ui-react'
import DiscoveryMatrixHeatMap from './components/DiscoveryMatrixHeatMap'
import MindMapGraph from './components/MindMapGraph'
import DoubleDiamondGraph from './components/DoubleDiamondGraph'
import ScammperrDonutChart from './components/ScammperrDonutChart'
import BrainWritingGraph from './components/BrainWritingGraph'
import SwotAnalysisMatrix from './components/SwotAnalysisMatrix'
import ModelCanvasTreeMap from './components/ModelCanvasTreeMap'
import EisenhowerDecisionMatrix from './components/EisenhowerDecisionMatrix'
import TrizWindowsMatrix from './components/TrizWindowsMatrix'
import SixThinkingHatsGraph from './components/SixThinkingHatsGraph'
import WhysGraph from './components/WhysGraph'
import BioStatGvMatrix from './components/BioStatGvMatrix'
import TheoryCKGraph from './components/TheoryCKGraph'
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
          <Grid.Column width={16} style={{paddingTop:'1rem'}} textAlign='left'>
                <Header as="h2">
                  <Header.Content>
                    1. Vision
                  </Header.Content>
                  <Header.Subheader>
                    How do you envision HCI in the future?
                  </Header.Subheader>
                </Header>
                {/*<p><b>Example:</b> I envision Programmable Matter.
                Programmable Matter is defined as a cyber-physical conjugation. This technology would enable a synthetic reality; an environment in which all the objects in a users environment (including the ones inserted by the computer) are physically realized.
                Programmable Matter promises to bridge the gap between the physicality of Tangible User Interfaces (TUIs) and the flexibility of Graphical User Interfaces (GUIs).
                </p>*/}
          </Grid.Column>
          
          <Grid.Column width={8} style={{paddingTop:'1rem'}} textAlign='center'>
                <Card fluid>
                    <Card.Content>
                      <Card.Header>TRIZ 9-windows
                      </Card.Header>
                      <Card.Meta>Genrich Altshuller (1984)</Card.Meta>
                      <Card.Description>
                      <ParentSize>
                          {parent => (
                              <TrizWindowsMatrix
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
          <Grid.Column width={16} style={{paddingTop:'1rem'}} textAlign='left'>
                <Header as="h2">
                  <Header.Content>
                    2. Challenge
                  </Header.Content>
                  <Header.Subheader>
                    What does challenge the advent of this vision?
                  </Header.Subheader>
                </Header>
                {/*<p><b>Example:</b> Need to demonstrate the feasability, utility and usability <i>in situ</i> of new form factors for Shape-Changing Interfaces.
                </p>*/}
          </Grid.Column>
          <Grid.Column width={16} style={{paddingTop:'1rem'}} textAlign='left'>
                <Header as="h2">
                  <Header.Content>
                    3. Question
                  </Header.Content>
                  <Header.Subheader>
                    Could you give answers to a challenge e.g. in regards to a societal issue?
                  </Header.Subheader>
                </Header>
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
          <Grid.Column width={16} style={{paddingTop:'1rem'}} textAlign='left'>
                <Header as="h2">
                  <Header.Content>
                    7. Hypothesis & Prediction
                  </Header.Content>
                  <Header.Subheader>
                  </Header.Subheader>
                </Header>
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
                      <Card.Header>C-K Theory
                      </Card.Header>
                      <Card.Meta>A. Hatchuel and B. Weil (2003)</Card.Meta>
                      <Card.Description>
                      <ParentSize>
                          {parent => (
                              <TheoryCKGraph
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
                      <Card.Header>Six Thinking Hats
                      </Card.Header>
                      <Card.Meta>Edward de Bono (1985)</Card.Meta>
                      <Card.Description>
                      <ParentSize>
                          {parent => (
                              <SixThinkingHatsGraph
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
          <Grid.Column width={16} style={{paddingTop:'1rem'}} textAlign='left'>
                <Header as="h2">
                  <Header.Content>
                    8. Experimentation
                  </Header.Content>
                  <Header.Subheader>
                  </Header.Subheader>
                </Header>
          </Grid.Column>
          <Grid.Column width={16} style={{paddingTop:'1rem'}} textAlign='left'>
                <Header as="h2">
                  <Header.Content>
                    8. Analysis
                  </Header.Content>
                  <Header.Subheader>
                  </Header.Subheader>
                </Header>
          </Grid.Column>
          <Grid.Column width={16} style={{paddingTop:'1rem'}} textAlign='center'>
                <Card fluid>
                    <Card.Content>
                      <Card.Header>Inferential Statistic Matrix
                      </Card.Header>
                      <Card.Meta>BiostaTGV (2020)</Card.Meta>
                      <Card.Description>
                      <ParentSize>
                          {parent => (
                              <BioStatGvMatrix 
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
          <Grid.Column width={16} style={{paddingTop:'1rem'}} textAlign='left'>
                <Header as="h2">
                  <Header.Content>
                    9. Dissemination
                  </Header.Content>
                  <Header.Subheader>
                  </Header.Subheader>
                </Header>
          </Grid.Column>
          <Grid.Column width={16} style={{paddingTop:'1rem'}} textAlign='left'>
                <Header as="h2">
                  <Header.Content>
                    Others tools
                  </Header.Content>
                  <Header.Subheader>
                  </Header.Subheader>
                </Header>
          </Grid.Column>
          <Grid.Column width={8} style={{paddingTop:'1rem'}} textAlign='left'>
            <Card fluid>
                    <Card.Content>
                      <Card.Header>Eisenhower Decision Matrix
                      </Card.Header>
                      <Card.Meta>Dwight D. Eisenhower (1960)</Card.Meta>
                      <Card.Description>
                      <ParentSize>
                          {parent => (
                              <EisenhowerDecisionMatrix
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
                      <Card.Header>Business Model Canvas
                      </Card.Header>
                      <Card.Meta>Alexander Osterwalder (2008)</Card.Meta>
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
          
        </Grid.Row>
      </Grid>
    );
  }
}

export default App;
