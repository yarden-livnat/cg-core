/**
 * renderd by yarden on 5/27/16.
 */
import d3 from 'd3';
import createElement from './createElement';

export default function() {
  let initialized = false,
    radius = 3,
      scale = d3.scaleLinear()
        .domain([0.4,1])
        .range([0.6, 1])
        .clamp(true);

  var label = d => d.label;
  

  function render(selection) {
    let g = selection
      .classed('node', true)
      .classed('tagNode', true);

    g.append('circle')
      .attr('class', 'anchor')
      .attr('r', radius);

    let tag = g.append('g')
      .attr('class', 'tag')
      .attr('transform', function(d) { return 'translate(7, 0) scale(1.0)' });

    let frame = tag.append('g')
      .classed('frame', true)
      .style('opacity', 0);

    frame.append('rect')
      .classed('border', true);

    frame.append('rect')
      .classed('bg', true);

    let text = tag.append('text')
      .attr('class', 'tag')
      .attr('dy', '.35em')
      .attr('text-anchor', 'start')
      .text(label);

    tag.each(function(d) { d.bbox = d3.select(this).node().getBBox();});

    text.attr('transform', function (d) { return `scale(${scale(d.scale)})`; });
    selection.transition().style('opacity', 1);
  }

  render.create = function() {
    return createElement.call(this, 'g');
  };

  render.update = function (selection) {
    selection.select('text')
      .each( d => d.s = scale(d.scale))
      // .attr('stroke', function (d) { return d.color; })
      .attr('fill', function (d) { return d.color; })
      .classed('selected', function(d) { return d.selected;})
      .classed('excluded', function(d) {return d.excluded; });

    let t = selection.transition('visnode').ease(d3.easeLinear).duration(750);

    t.select('text')
      .attr('transform', function (d) { return `scale(${d.s})`; });

    t.select('.bg')
      .attr('width', function(d) { return d.bbox.width * d.s; })
      .attr('height', function(d) { return d.bbox.height* d.s; })
      .attr('x', function(d) { return d.bbox.x; })
      .attr('y', function(d) { return d.bbox.y* d.s; });

    t.select('.border')
      .attr('width', function(d) { return d.bbox.width* d.s+2  ; })
      .attr('height', function(d) { return d.bbox.height* d.s +2 ; })
      .attr('x', function(d) { return d.bbox.x-1; })
      .attr('y', function(d) { return d.bbox.y* d.s -1; });

    t.select('.frame')
      .style('opacity', d => (d.selected || d.excluded) ? 1: 0);

    selection
      .each(function (d) {
        d.bx = -3;
        d.by = d.bbox.y * d.s;
        d.w = d.bbox.width * d.s +10;
        d.h = d.bbox.height * d.s ;
      });
  };

  render.label = function(_) {
    if (!arguments.length ) return label;
    label = _;
    return render;
  };

  return render;
}