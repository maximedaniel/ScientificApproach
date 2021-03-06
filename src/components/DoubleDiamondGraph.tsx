import React, {Component} from 'react'
import * as d3 from 'd3'

interface Props{width:any,height:any,parentRef: HTMLDivElement | null}
interface State{height:number,width:number}


const margin = {top: 30, right: 30, bottom: 30, left: 30}
const lineStrokeWidth = 3
const textStrokeWidth = 4
const circleWidth = 8
const fontSize = 10

class DoubleDiamondGraph extends  Component<Props, State> {

  draw(){
    var svg = d3.select('#DoubleDiamondGraph');
    svg.selectAll("*").remove();

    var width = this.props.width - margin.left - margin.right,
    height = this.props.height - margin.top - margin.bottom;

    svg = svg
    .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");
    
    var nodes = [
        {id:0, x: 0, y: height/2},
        {id:1, x: width/4, y: height/2},
        {id:2, x: width/4, y: 0},
        {id:3, x: width/4, y: height},
        {id:4, x: width/2, y: height/2},
        {id:5, x: width-width/4, y: height/2},
        {id:6, x: width-width/4, y: 0},
        {id:7, x: width-width/4, y: height},
        {id:8, x: width, y: height/2},
    ]
    var links = [
        {from: 0, to: 1, text:'INSPIRATION', angle:0},
        {from: 0, to: 2, text:'DISCOVER', angle:-45},
        {from: 0, to: 3, text:'', angle:0},
        {from: 1, to: 3, text:'', angle:0},
        {from: 1, to: 4, text:'INTERPRETATION', angle:0},
        {from: 2, to: 3, text:'', angle:0},
        {from: 2, to: 4, text:'DEFINE', angle:45},
        {from: 3, to: 4, text:'', angle:0},
        {from: 4, to: 5, text:'IDEATION', angle:0},
        {from: 4, to: 6, text:'DEVELOP', angle:-45},
        {from: 4, to: 7, text:'', angle:0},
        {from: 5, to: 7, text:'', angle:0},
        {from: 5, to: 8, text:'IMPLEMENTATION', angle:0},
        {from: 6, to: 7, text:'', angle:0},
        {from: 6, to: 8, text:'DELIVER', angle:45},
        {from: 7, to: 8, text:'', angle:0}
    ]
    var getNodeFromId = (nodeId) => nodes.filter((node) => node.id === nodeId)[0];

    svg.selectAll()
    .data(links)
    .enter()
    .append("line")
    .attr("x1", (link) => getNodeFromId(link.from).x)
    .attr("y1", (link) => getNodeFromId(link.from).y)
    .attr("x2", (link) => getNodeFromId(link.to).x)
    .attr("y2", (link) => getNodeFromId(link.to).y)
    .attr("stroke","#f7931e")
    .attr("stroke-width",lineStrokeWidth);
    
    svg.selectAll()
    .data(nodes)
    .enter()
    .append("circle")
    .attr("cx", d => d.x)
    .attr("cy", d => d.y)
    .attr("r", circleWidth)
    .attr("fill","#f7931e")
    .attr("stroke","#fff")
    .attr("stroke-width", textStrokeWidth);

    svg.selectAll()
    .data(links)
    .enter()
    .append("text")
    .text(link => link.text)
    .attr("x", link => (getNodeFromId(link.to).x + getNodeFromId(link.from).x)/2)
    .attr("y", link =>  (getNodeFromId(link.to).y + getNodeFromId(link.from).y)/2)
    .attr("transform",link => "rotate("+ link.angle +"," + (getNodeFromId(link.to).x + getNodeFromId(link.from).x)/2 + "," + (getNodeFromId(link.to).y + getNodeFromId(link.from).y)/2 + ")")
    .attr("fill", "white")
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "middle")
    .attr("font-size",  fontSize)
    .attr("paint-order", "stroke")
    .attr("stroke","#f7931e")
    .attr("stroke-width", lineStrokeWidth)
    .attr("stroke-linecap", "butt")
    .attr("stroke-linejoin", "miter")
    .attr("font-weight", "800");

    // Link 1-2
    /*svg.append("line")
    .attr("x1", 0)
    .attr("y1", height/2)
    .attr("x2", width/4)
    .attr("y2", height/2)
    .attr("stroke","#f7931e")
    .attr("stroke-width",lineStrokeWidth);*/

  }

  componentDidMount(){
      this.draw();
  }

  componentDidUpdate(prevProps:any, prevState:any) {
    if (prevProps.width !== this.props.width) {
        this.draw();
    }
  }

  render(){
      return (
                <svg 
                id="DoubleDiamondGraph"
                width={this.props.width}
                height={this.props.height}
                />
    );
  }
}

export default DoubleDiamondGraph;
