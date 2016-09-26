/**
 * Created by yarden on 5/26/16.
 */

import * as d3 from 'd3';
import createElement from './createElement';

let defs = [
  {id: 'arrowhead-start', path: "M10,-5L0,0L10,5", box: "0 -5 10 10", color: '#aaa', refx: -5, refy: -1.5 },
  {id: 'arrowhead-end', path: "M0,-5L10,0L0,5", box: "0 -5 10 10", color: '#ccc', refx: 15, refy: -1.5}
];

export default function () {

  let widthScale = d3.scaleQuantize()
        .domain([0, 1])
        .range([0.5, 0.75, 1, 1.25, 1.5]),
      opacityScale = d3.scaleLinear()
        .domain([0.2,1])
        .range([0.2, 0.6]);

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
      .attr("marker-start", function (d) { return d.direction == -1 ? "url(#arrowhead-start)" : ""; })
      .attr("marker-end", function (d) { return d.direction == 1 ? "url(#arrowhead-end)" : ""; })
      .style('stroke-width', function (d) { return  widthScale(d.value)+ 'px'; })
      .style('stroke-opacity', d => opacityScale(d.value));

  };

  Link.init = function(svg) {
    let svgDefs = svg.select('defs');
    if (svgDefs.empty()) svgDefs = svg.append('defs');

    svgDefs.selectAll('marker')
      .data(defs, d => d.id)
      .enter()
      .append('marker')
        .attr('id', d => d.id)
        .attr("viewBox", d => d.box)
        .attr("refX", d => d.refx)
        .attr("refY", d => d.refy)
        .attr("markerWidth", 6)
        .attr("markerHeight", 6)
        .attr("orient", "auto")
        .attr('markerUnits', 'userSpaceOnUse')
        .attr('stroke-width', '1px')
        .append("path")
        .attr("d", d => d.path)
        .attr('fill', d => d.color);
  };

  return Link;
}