/**
 * Created by yarden on 5/26/16.
 */

import * as d3 from 'd3';
import createElement from './createElement';

let defs = [
  {id: 'forward', stops: [
    {offset: '0%', color: 'red'},
    {offset: '10%', color: 'red'},
    {offset: '20%', color: 'lightgray'},
    {offset: '100%', color: 'lightgray'}
  ]},
  {id: 'backward', stops:[
    {offset: '0%', color: 'lightgray'},
    {offset: '80%', color: 'lightgray'},
    {offset: '90%', color: 'red'},
    {offset: '100%', color: 'red'}
  ]}
];

export default function () {

  let widthScale = d3.scaleQuantize()
        .domain([0, 1])
        .range([0.5, 0.75, 1, 1.25]),
      opacityScale = d3.scaleLinear()
        .domain([0.4,1])
        .range([0.4, 0.5]);

  function Link(selection) {
    selection
      .attr('class', 'link')
  }

  Link.create = function() {
    return createElement.call(this, 'line');
  };

  Link.update = function(selection) {
    selection
      .attr('x1', function(d) { return d.source.zx; })
      .attr('y1', function(d) { return d.source.zy; })
      .attr('x2', function(d) { return d.target.zx; })
      .attr('y2', function(d) { return d.target.zy; })
      .style('stroke', d =>
        d.direction == 1 ? 'url(#forward-gradient)' :
        d.direction == -1 ? 'url(#backward-gradient)' :
        'lightgray')
      .style('stroke-width', function (d) { return  widthScale(d.value)+ 'px'; })
      .style('stroke-opacity', d => opacityScale(d.value));
  };

  Link.move = function(selection) {

  };

  Link.highlight = function() {}

  Link.init = function(svg) {
    let svgDefs = svg.select('defs');
    if (svgDefs.empty()) svgDefs = svg.append('defs');

    svgDefs.selectAll('linearGradient').data(defs)
      .enter().append('linearGradient')
        .attr('id', d => d.id + '-gradient')
        .selectAll('stop').data(d => d.stops)
        .enter().append('stop')
          .attr('offset', d => d.offset)
          .attr('stop-color', d => d.color);
  };

  return Link;
}