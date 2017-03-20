/**
 * Created by yarden on 5/26/16.
 */

import createElement from './createElement';
import * as d3 from 'd3';

export default function () {
  let widthScale = d3.scaleQuantize()
    .domain([0, 1])
    // .range([0.5, 0.75, 1, 1.25]),
    .range([0.5, 1, 1.5, 2]),

    opacityScale = d3.scaleLinear()
      .domain([0.2,1])
      // .range([0.4, 0.8]);
      .range([0.5,0.7]);

  function Link(selection) {
    selection.attr('class', 'link');
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
      .style('stroke-width', function (d) { return  widthScale(d.value)+ 'px'; })
      .style('stroke-opacity', d => opacityScale(d.value))
    ;
  };

  Link.highlight = function(selection, func) {
		selection
      // .transition()
      // .duration(250)
      .style('stroke', d => func(d) && 'red' || '#ddd');
      // .classed('highlight', d => on && (d.source == node || d.target == node));
  };

  return Link;
}