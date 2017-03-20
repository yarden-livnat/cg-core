/**
 * Created by yarden on 5/26/16.
 */

import * as d3 from 'd3';
import Link from './renderer/lineLink';
// import Link from './renderer/directionalLink';
// import Link from './renderer/arcLink';
// import Link from './renderer/gradientLink';
import tagNode from './renderer/tagNode';
import collide from './forceRectCollide'; 
// import '../styles/cg-core.css!';

export default function() {
  let width = 400, height = 400;
  let graph = {nodes: [], links: {}},
    version = 0;
  let charge = -30, charge_dist = 100;

  let svg, svgNodes, svgLinks, overlay,
    d3nodes, d3links,
    listeners = d3.dispatch('select', 'exclude', 'highlight', 'highlight_link'),
    visNode = tagNode().label(d => d.label),
    visLink = Link(),
    showEdges = false
  ;

  let dbg_bboxes;
  
  /*
   * Simulation
   */

  let forceCharge = d3.forceManyBody().strength(function() {return charge;}).distanceMax(charge_dist);

  let forceLink = d3.forceLink()
    .id(function(d) { return d.id; })
    .strength(function(d) {return d.value/50; })
    .iterations(5);
  
  let forceCollide = collide()
    .extent(function(d) { return {w: d.w, h: d.h}; })
    .x( function(d) { return d.bx + d.zx;})
    .y( function(d) { return d.by + d.zy;})
    .iterations(10)
    .strength(0.05);


  let simulation = d3.forceSimulation()
    .force('charge', forceCharge)
    .force('link', forceLink)
    .force('collide', forceCollide)
    // .force('center', d3.forceCenter().x(width/2).y(height/2))
    // .force('x', d3.forceX(width/2).strength(0.01))
    // .force('y', d3.forceY(height/2).strength(0.01))
    .on('tick', ticked)
    // .on('end', () => console.log('simulation ended'))
    .stop();

  function ticked() {
    // console.log('tick');
    updatePositions(svgNodes.selectAll('.node'));
    if (!window.cg_dragging ) for (let node of graph.nodes) { node.overlap = false;}
  }

  /*
   * Zoom
   */

  let zoom = d3.zoom().on('start', zoomStarted).on('zoom', zoomed);

  function enableZoom() {
    overlay.call(zoom);
  }

  function disableZoom() {
    overlay.on('zoom', null);
  }

  function zoomStarted() {
  }

  function zoomed() {
    updatePositions();
  }

  /*
   * behavior
   */

  let CLICK_MIN_TIME = 200;
  let clickStartTime;
  let dragTransform;

  let drag = d3.drag()
    .on('start', nodeDragStart)
    .on('drag', nodeDrag)
    .on('end', nodeDragEnd);
  
  function nodeDragStart(d) {
    window.cg_dragging = d;
    let k = d3.zoomTransform(overlay.node()).k;
    dragTransform = d3.zoomIdentity.translate(d3.event.x-d.x*k, d3.event.y-d.y*k).scale(k);
    // simulation.fix(d);
    d.fx = d.x;
    d.fy = d.y;
    for (let node of graph.nodes) {
      node.overlap = false;
      // simulation.fix(node);
      node.fx = node.x;
      node.fy = node.y;
    }
    simulation.alphaTarget(0.2).restart();
  }

  function nodeDrag(d) {
    [d.x, d.y] = dragTransform.invert([d3.event.x, d3.event.y]);
    // simulation.fix(d, d.x, d.y);
    [d.fx, d.fy] = [d.x, d.y];

    updatePositions(d3.select(this));

    let now = +Date.now();
    for (let node of graph.nodes) {
      if (!node.fixed && node != d) {
        if (node.overlap) {
          // simulation.unfix(node);
          delete node.fx;
          delete node.fy;
          node.dragStart = now;
        }
        else {
          if (now - node.dragStart > 1000) {
            // simulation.fix(node);
            [node.fx, node.fy] = [node.x, node.y];
          }

        }
      }
      node.overlap = false;
    }
  }

  function nodeDragEnd(d) {
    window.cg_dragging = false;
    // if (!d.fixed) simulation.unfix(d);
    for (let node of graph.nodes) {
      if (!node.fixed) {
        // simulation.unfix(node);
        delete node.fx;
        delete node.fy;
      }
    }
    simulation.alphaTarget(0);
  }

  function behavior(selection) {
    selection
      .on('mouseenter', d => highlight(d, true))
      .on('mouseleave', d => highlight(d, false))
      .on('mousedown', nodeDown)
      .on('click', nodeClicked)
     ;

    selection.selectAll('.anchor')
      .on('click', function(d) {
        d3.event.preventDefault();
        d3.event.stopPropagation();
        if (d.fixed = !d.fixed) {
          // simulation.fix(d);
          [d.fx, d.fy] = [d.x, d.y];
        } else {
          // simulation.unfix(d);
          delete d.fx;
          delete d.fy;
        }
        d3.select(this).classed('fixed', d.fixed);
      });

    selection.call(drag);
  }

  function linkBehavior(selection) {
    selection
      .on('mouseenter', function(d) { highlight_link(this, d, true);})//d => highlight_link(d, true))
      .on('mouseleave', function(d) { highlight_link(this, d, false);}); //d => highlight_link(d, false));
  }

  function nodeDown(d) {
    clickStartTime = d3.event.timeStamp;
    disableZoom();
  }

  function nodeClicked(d) {
    enableZoom();
    if (d3.event.timeStamp - clickStartTime < CLICK_MIN_TIME ) {
      // simulation.stop();  // TODO: why does this cause the simulation not to start after visNNode.update with transition?
      if (d3.event.altKey) listeners.call('exclude', this, d);
      else listeners.call('select', this, d);
    }
  }
  
  function highlight(node, on) {
    visLink.highlight(d3links, d => on && (d.source == node || d.target == node));
    listeners.call('highlight', this, node, on);
  }

  function highlight_link(that, link, on) {
    visLink.highlight(d3.select(that), d => on);
    // visNode.highlight(d3nodes, d => state && (d == link.source || d == link.target));
    listeners.call('highlight_link', this, link, on);
  }
  /*
   * positions
   */

  function updatePositions(nodes) {
    // console.log('updatePositions');
    if (!graph.nodes || graph.nodes.length == 0) return;

    nodes = nodes || svgNodes.selectAll('.node')
        .data(graph.nodes, function(d) { return d.id;});

    let transform = d3.zoomTransform(overlay.node());
    nodes
      .each(function (d) { [d.zx, d.zy] = transform.apply([d.x, d.y]); /*console.log([d.x, d.y]);*/})
      .attr('transform', function (d) { return 'translate(' + d.zx + ',' + d.zy + ')'; });

    d3links.call(visLink.update);

    // dbg_showBBoxes(nodes)
  }

  function dbg_showBBox(nodes) {
    let b = dbg_bboxes.selectAll('.bbox')
      .data(graph.nodes, d => d.id);

    b.enter()
      .append('rect')
      .attr('class', 'bbox')
      .attr('opacity', 0.4)
      .merge(b)
      .attr('x', function(d) { return d.zx + d.bx;})
      .attr('y', function(d) { return d.zy + d.by;})
      .attr('width', function(d) { return d.w;})
      .attr('height', function(d) { return d.h;})
      .style('fill', function(d) { return d.overlap && '#d00'|| '#ddd'});

    b.exit().remove();
  }

  function run() {
    simulation.alpha(1).nodes(graph.nodes).stop();//.restart();
    forceLink.links(graph.links);
    let go = false;
    // console.log('\n***');
    // for (let node of graph.nodes) {
    //   if (node.version + 6 > version) {
    //     simulation.fix(node);
    //     console.log('temp fix', node.id, node.fixed);
    //   } else go = true;
    // }
    //
    // //for (let i=0; i<100; i++) simulation.tick();
    //
    version++;
    for (let node of graph.nodes) {
    //   if (node.version + 5 > version && !node.fixed) {
    //     simulation.unfix(node);
    //     console.log('unfix', node.id);
    //   }
      node.version = version;
    }
    updatePositions(svgNodes.selectAll('.node'));
    go = true;
    if (go) simulation.alpha(0.2).restart();
  }


  function render() {
    if (!svg) return;

    let nodeTransition = d3.transition().ease(d3.easeLinear).duration(300);
    let edgeTransition = d3.transition().ease(d3.easeLinear).duration(300);

    // svg.selectAll("*").interrupt();

    let selection;

    selection = svgNodes.selectAll('.node')
      .data(graph.nodes, function(d) { return d.id;});

    selection.exit()
      .transition(nodeTransition).style('opacity', 0)
      .remove();

    d3nodes = selection.enter().append(visNode.create)
      .call(visNode)
      .call(behavior)
      .style('opacity', 0)
      .merge(selection);

    d3nodes
        .call(visNode.update)
        .transition(nodeTransition).style('opacity', 1)
    ;


    selection = svgLinks.selectAll('.link')
      .data(showEdges  && graph.links || [], d => d.id);

    selection.exit()
      // .transition(edgeTransition).style('opacity', 0)
      .remove();

    d3links = selection.enter().append(visLink.create)
      // .style('opacity', 0)
      .call(visLink)
      .call(linkBehavior)
      // .transition(edgeTransition).style('opacity', 0.5)
      // .selection()
      .merge(selection)
      .call(visLink.update);
  }

  function resize(w, h) {
    width = w;
    height = h;

    if (!svg) return;

    svg.attr('width', width).attr('height', height);
    overlay.attr('width', width).attr('height', height);

    let force;

    if (force = simulation.force('center')) force.x(width/2).y(height/2);
    if (force = simulation.force('x')) force.x(width/2);
    if (force = simulation.force('y')) force.y(height/2);
  }

  let cg = function(selection) {
    svg = selection.append('svg').attr('class', 'cg');
    visLink.init && visLink.init(svg);

    let g = svg.append('g');
    overlay = g.append('rect').attr('class', 'overlay');//.on('mousewheel', () => console.log('overlay mouse wheel'));
    // dbg_bboxes = g.append('g');
    svgLinks = g.append('g').attr('class', 'links');
    svgNodes = g.append('g').attr('class', 'nodes');

    enableZoom();

    let parent = selection.node();
    resize(parent.offsetWidth, parent.offsetHeight);
    return cg;
  };

  cg.width = function(_) {
    if (!arguments.length ) return width;
    resize(+_, height);
    return cg;
  };

  cg.height = function(_) {
    if (!arguments.length ) return height;
    resize(width, +_);
    return cg;
  };

  cg.graph = function(_) {
    if (!arguments.length) return graph;
    try {
      simulation.stop();

      _ = _ || {nodes: [], links: []};

      _.nodes.forEach(node => {
        if (!node.version) {
          if (node.scale == undefined) node.scale = 1;
          node.fixed = !!node.fixed;
          node.x = Math.random() * width;
          node.y = Math.random() * height;
        }
      });

      graph = _;
      render();
      run();
    } catch(err) {
      console.log('graph err', err);
    }
    return cg;
  };

  cg.update = function() {
    d3nodes.call(visNode.update);
    d3links.call(visLink.update);
    forceCollide.initialize(graph.nodes); // use new nodes sizes
    // simulation.alpha(0.1).restart();
    return cg;
  };

  cg.resize = resize;

  cg.layout = function() {
    // for (let node of graph.nodes)
    //   if (!node.fixed) simulation.unfix(node);
    simulation.alpha(0.5).restart();
    return cg;
  };

  cg.showEdges = function(_) {
    if (!arguments.length) return showEdges;
    showEdges = _;
    render();
    return cg;
  };

  cg.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? cg : value;
  };

  cg.charge = function(_) {
    if (!arguments.length) return charge;
    charge = _;
    console.log('set charge ', _);
    simulation.alpha(0.5).restart();
    return cg;
  };

  cg.charge_dist = function(_) {
    if (!arguments.length) return charge_dist;
    charge_dist = _;
    forceCharge.distanceMax(_);
    simulation.alpha(0.5).restart();
    return cg;
  };

  return cg;
}