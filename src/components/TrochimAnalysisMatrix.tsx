import React, {Component} from 'react'
import * as d3 from 'd3'
import { Table, Icon, Header } from 'semantic-ui-react'

interface Props{width:any,height:any,parentRef: HTMLDivElement | null}
interface State{height:number,width:number}

class TrochimAnalysisMatrix extends  Component<Props, State> {
  render(){
      return (
        <Table celled structured  textAlign='center'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan='3'></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
    
        <Table.Body>
        </Table.Body>
      </Table>
    );
  }
}

export default TrochimAnalysisMatrix;
