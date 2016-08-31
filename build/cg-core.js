!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in v||(v[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=v[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(g.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=v[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},r.name);t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=v[s],f=y[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=p(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=v[e];if(t)t.declarative?f(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=p(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=v[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(m)for(var n in r)"default"!==n&&c(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,x(t,"__useDefault",{value:!0}),t}function c(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&x(e,t,n)}catch(o){return e[t]=r[t],!1}}function f(r,t){var n=v[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==g.call(t,u)&&(v[u]?f(u,t):p(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function p(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return D(e.substr(6));var r=v[e];if(!r)throw"Module "+e+" not present.";return a(e),f(e,[]),v[e]=void 0,r.declarative&&x(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var v={},g=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){m=!1}var x;!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var y={},D="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,I={"@empty":{}};return function(e,n,o,a){return function(u){u(function(u){for(var d={_nodeRequire:D,register:r,registerDynamic:t,get:p,set:function(e,r){I[e]=r},newModule:function(e){return e}},i=0;i<n.length;i++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[i],arguments[i]);a(d);var l=p(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)p(e[i]);return o?l["default"]:l})}}}("undefined"!=typeof self?self:global)

(["1","2"], ["3","4"], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
$__System.register('1', ['3', '4'], function (_export, _context) {
  "use strict";

  var quadtree, d3, _slicedToArray;

  /**
   * Created by yarden on 6/1/16.
   */
  function createElement(name) {
    return this.ownerDocument.createElementNS(this.namespaceURI, name);
  }

  function Link() {
    var widthScale = d3.scaleQuantize().domain([0, 1]).range([0.5, 0.75, 1, 1.25]),
        opacityScale = d3.scaleLinear().domain([0.4, 1])
    // .range([0.4, 0.8]);
    .range([0.5, 0.5]);

    function Link(selection) {
      selection.attr('class', 'link');
    }

    Link.create = function () {
      return createElement.call(this, 'line');
    };

    Link.update = function (selection) {
      selection.attr('x1', function (d) {
        return d.source.zx;
      }).attr('y1', function (d) {
        return d.source.zy;
      }).attr('x2', function (d) {
        return d.target.zx;
      }).attr('y2', function (d) {
        return d.target.zy;
      }).style('stroke-width', function (d) {
        return widthScale(d.value) + 'px';
      }).style('stroke-opacity', function (d) {
        return opacityScale(d.value);
      });
    };

    return Link;
  }

  function tagNode() {
    var initialized = false,
        radius = 3,
        scale = d3.scaleLinear().domain([0.4, 1]).range([0.6, 1]).clamp(true);

    var label = function label(d) {
      return d.label;
    };

    function render(selection) {
      var g = selection.classed('node', true).classed('tagNode', true);

      g.append('circle').attr('class', 'anchor').attr('r', radius);

      var tag = g.append('g').attr('class', 'tag').attr('transform', function (d) {
        return 'translate(7, 0) scale(1.0)';
      });

      var frame = tag.append('g').classed('frame', true).style('opacity', 0);

      frame.append('rect').classed('border', true);

      frame.append('rect').classed('bg', true);

      var text = tag.append('text').attr('class', 'tag').attr('dy', '.35em').attr('text-anchor', 'start').attr('fill', function (d) {
        return d.color || 'black';
      }).text(label);

      tag.each(function (d) {
        d.bbox = d3.select(this).node().getBBox();
      });

      text.attr('transform', function (d) {
        return 'scale(' + scale(d.scale) + ')';
      });
      // selection.transition().style('opacity', 1);
    }

    render.create = function () {
      return createElement.call(this, 'g');
    };

    render.update = function (selection) {
      selection.select('text').each(function (d) {
        return d.s = scale(d.scale);
      })
      // .attr('stroke', function (d) { return d.color; })
      .attr('fill', function (d) {
        return d.color;
      }).classed('selected', function (d) {
        return d.selected;
      }).classed('excluded', function (d) {
        return d.excluded;
      });

      selection.select('.tag').classed('highlighted', function (d) {
        return d.highlighted;
      });

      var t = selection.transition('visnode').ease(d3.easeLinear).duration(750);

      t.select('text').attr('transform', function (d) {
        return 'scale(' + d.s + ')';
      });

      t.select('.bg').attr('width', function (d) {
        return d.bbox.width * d.s;
      }).attr('height', function (d) {
        return d.bbox.height * d.s;
      }).attr('x', function (d) {
        return d.bbox.x;
      }).attr('y', function (d) {
        return d.bbox.y * d.s;
      });

      t.select('.border').attr('width', function (d) {
        return d.bbox.width * d.s + 2;
      }).attr('height', function (d) {
        return d.bbox.height * d.s + 2;
      }).attr('x', function (d) {
        return d.bbox.x - 1;
      }).attr('y', function (d) {
        return d.bbox.y * d.s - 1;
      });

      t.select('.frame').style('opacity', function (d) {
        return d.selected || d.excluded || d.highlighted ? 1 : 0;
      });

      selection.each(function (d) {
        d.bx = -3;
        d.by = d.bbox.y * d.s;
        d.w = d.bbox.width * d.s + 10;
        d.h = d.bbox.height * d.s;
      });
    };

    render.label = function (_) {
      if (!arguments.length) return label;
      label = _;
      return render;
    };

    return render;
  }

  /**
   * Created by yarden on 5/23/16.
   */
  function constant(x) {
    return function () {
      return x;
    };
  }

  function collide(extent) {
    var nodes,
        extents,
        strength = 1,
        iterations = 1;

    var x = function x(d) {
      return d.x + d.vx;
    };
    var y = function y(d) {
      return d.y + d.vy;
    };

    if (typeof extent !== "function") extent = constant(extent == null ? { w: 1, h: 1 } : extent);

    function force(alpha) {
      var i,
          n = nodes.length,
          tree,
          node,
          xi,
          yi,
          wi,
          hi,
          cxi,
          cyi;

      for (var k = 0; k < iterations; ++k) {
        tree = quadtree(nodes, x, y).visitAfter(prepare);
        for (i = 0; i < n; ++i) {
          node = nodes[i];
          wi = extents[i].w;
          hi = extents[i].h;
          xi = x(node);
          yi = y(node);
          cxi = xi + wi / 2;
          cyi = yi + hi / 2;
          tree.visit(apply);
        }
      }

      function apply(quad, x0, y0, x1, y1) {
        var data = quad.data,
            wj = quad.w,
            hj = quad.h,
            w = (wi + wj) / 2,
            h = (hi + hj) / 2;
        if (data) {
          if (data.index > i) {
            var dx = cxi - (x(data) + wj / 2);
            var dy = cyi - (y(data) + hj / 2);
            var pdx = dx < 0 ? -dx : dx;
            var pdy = dy < 0 ? -dy : dy;

            if (pdx < w && pdy < h) {
              if (pdx + 2 < w && pdy + 2 < h) node.overlap = data.overlap = true;

              var f = Math.min((w - pdx) / pdx, (h - pdy) / pdy) * (1 - alpha) * strength;
              // if (w-pdx < h-pdy) {
              pdx = (w - pdx) / pdx * strength;
              node.vx += (dx *= f) * (w = (wj *= wj) / (wi * wi + wj));
              data.vx -= dx * (1 - w);
              // } else {
              pdy = (h - pdy) / pdy * strength;
              node.vy += (dy *= f) * (h = (hj *= hj) / (hi * hi + hj));
              data.vy -= dy * (1 - h);
              // }
              // if (window.cg_dragging == node) {
              //   console.log('overlap:', data.id, dx, dy, ' vx = ', node.vx, data.vx, ' vy = ', node.vy, data.vy) ;
              // }
            }
          }
          return;
        }
        return x0 > xi + w || x1 < xi - w || y0 > yi + h || y1 < yi - h;
      }
    }

    function prepare(quad) {
      if (quad.data) {
        quad.w = extents[quad.data.index].w;
        quad.h = extents[quad.data.index].h;
      } else {
        for (var i = quad.w = quad.h = 0; i < 4; ++i) {
          if (quad[i]) {
            if (quad[i].w > quad.w) {
              quad.w = quad[i].w;
            }
            if (quad[i].h > quad.h) {
              quad.h = quad[i].h;
            }
          }
        }
      }
    }

    force.initialize = function (_) {
      var i,
          n = (nodes = _).length;extents = new Array(n);
      for (i = 0; i < n; ++i) {
        extents[i] = extent(nodes[i], i, nodes);
      }
    };

    force.iterations = function (_) {
      return arguments.length ? (iterations = +_, force) : iterations;
    };

    force.strength = function (_) {
      return arguments.length ? (strength = +_, force) : strength;
    };

    force.extent = function (_) {
      return arguments.length ? (extent = typeof _ === "function" ? _ : constant(+_), force) : extent;
    };

    force.x = function (_) {
      return arguments.length ? (x = _, force) : x;
    };

    force.y = function (_) {
      return arguments.length ? (y = _, force) : y;
    };

    return force;
  }

  function panel() {
    var width = 400,
        height = 400;
    var graph = { nodes: [], links: {} },
        version = 0;

    var svg = void 0,
        svgNodes = void 0,
        svgLinks = void 0,
        overlay = void 0,
        d3nodes = void 0,
        d3links = void 0,
        listeners = d3.dispatch('select', 'exclude', 'highlight'),
        visNode = tagNode().label(function (d) {
      return d.label;
    }),
        visLink = Link(),
        showEdges = false;

    var dbg_bboxes = void 0;

    /*
     * Simulation
     */

    var forceCharge = d3.forceManyBody().strength(-150);

    var forceLink = d3.forceLink().id(function (d) {
      return d.id;
    }).strength(function (d) {
      return d.value / 50;
    }).iterations(5);

    var forceCollide = collide().extent(function (d) {
      return { w: d.w, h: d.h };
    }).x(function (d) {
      return d.bx + d.zx;
    }).y(function (d) {
      return d.by + d.zy;
    }).iterations(10).strength(0.05);

    var simulation = d3.forceSimulation().force('charge', forceCharge).force('link', forceLink).force('collide', forceCollide)
    // .force('center', d3.forceCenter(width/2, height/2))
    // .force('x', d3.forceX(width/2))
    // .force('y', d3.forceY(height/2))
    .on('tick', ticked)
    // .on('end', () => console.log('simulation ended'))
    .stop();

    function ticked() {
      // console.log('tick');
      updatePositions(svgNodes.selectAll('.node'));
      if (!window.cg_dragging) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = graph.nodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _node = _step.value;
            _node.overlap = false;
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }

    /*
     * Zoom
     */

    var zoom = d3.zoom().on('start', zoomStarted).on('zoom', zoomed);

    function enableZoom() {
      overlay.call(zoom);
    }

    function disableZoom() {
      overlay.on('zoom', null);
    }

    function zoomStarted() {}

    function zoomed() {
      updatePositions();
    }

    /*
     * behavior
     */

    var CLICK_MIN_TIME = 200;
    var clickStartTime = void 0;
    var dragTransform = void 0;

    var drag = d3.drag().on('start', nodeDragStart).on('drag', nodeDrag).on('end', nodeDragEnd);

    function nodeDragStart(d) {
      window.cg_dragging = d;
      var k = d3.zoomTransform(overlay.node()).k;
      dragTransform = d3.zoomIdentity.translate(d3.event.x - d.x * k, d3.event.y - d.y * k).scale(k);
      // simulation.fix(d);
      d.fx = d.x;
      d.fy = d.y;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = graph.nodes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var node = _step2.value;

          node.overlap = false;
          // simulation.fix(node);
          node.fx = node.x;
          node.fy = node.y;
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      simulation.alphaTarget(0.2).restart();
    }

    function nodeDrag(d) {
      // simulation.fix(d, d.x, d.y);

      var _dragTransform$invert = dragTransform.invert([d3.event.x, d3.event.y]);

      var _dragTransform$invert2 = _slicedToArray(_dragTransform$invert, 2);

      d.x = _dragTransform$invert2[0];
      d.y = _dragTransform$invert2[1];
      var _ref = [d.x, d.y];
      d.fx = _ref[0];
      d.fy = _ref[1];

      updatePositions(d3.select(this));

      var now = +Date.now();
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = graph.nodes[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var node = _step3.value;

          if (!node.fixed && node != d) {
            if (node.overlap) {
              // simulation.unfix(node);
              delete node.fx;
              delete node.fy;
              node.dragStart = now;
            } else {
              if (now - node.dragStart > 1000) {
                var _ref2 = [node.x, node.y];
                // simulation.fix(node);

                node.fx = _ref2[0];
                node.fy = _ref2[1];
              }
            }
          }
          node.overlap = false;
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }

    function nodeDragEnd(d) {
      window.cg_dragging = false;
      // if (!d.fixed) simulation.unfix(d);
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = graph.nodes[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var node = _step4.value;

          if (!node.fixed) {
            // simulation.unfix(node);
            delete node.fx;
            delete node.fy;
          }
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      simulation.alphaTarget(0);
    }

    function behavior(selection) {
      selection.on('mouseenter', function (d) {
        return highlight(d, true);
      }).on('mouseleave', function (d) {
        return highlight(d, false);
      }).on('mousedown', nodeDown).on('click', nodeClicked);

      selection.selectAll('.anchor').on('click', function (d) {
        d3.event.preventDefault();
        d3.event.stopPropagation();
        if (d.fixed = !d.fixed) {
          var _ref3 = [d.x, d.y];
          // simulation.fix(d);

          d.fx = _ref3[0];
          d.fy = _ref3[1];
        } else {
          // simulation.unfix(d);
          delete d.fx;
          delete d.fy;
        }
        d3.select(this).classed('fixed', d.fixed);
      });

      selection.call(drag);

      // selection.on('mousewheel', function() { console.log('tag mouse wheel')});
    }

    function nodeDown(d) {
      clickStartTime = d3.event.timeStamp;
      disableZoom();
    }

    function nodeClicked(d) {
      enableZoom();
      if (d3.event.timeStamp - clickStartTime < CLICK_MIN_TIME) {
        // simulation.stop();  // TODO: why does this cause the simulation not to start after visNNode.update with transition?
        if (d3.event.metaKey) listeners.call('exclude', this, d);else listeners.call('select', this, d);
      }
    }

    function highlight(d, state) {
      listeners.call('highlight', this, d, state);
    }

    /*
     * positions
     */

    function updatePositions(nodes) {
      // console.log('updatePositions');
      nodes = nodes || svgNodes.selectAll('.node').data(graph.nodes, function (d) {
        return d.id;
      });

      var transform = d3.zoomTransform(overlay.node());
      nodes.each(function (d) {
        var _transform$apply = transform.apply([d.x, d.y]);

        var _transform$apply2 = _slicedToArray(_transform$apply, 2);

        d.zx = _transform$apply2[0];
        d.zy = _transform$apply2[1];
      }).attr('transform', function (d) {
        return 'translate(' + d.zx + ',' + d.zy + ')';
      });

      d3links.call(visLink.update);

      // dbg_showBBoxes(nodes)
    }

    function dbg_showBBox(nodes) {
      var b = dbg_bboxes.selectAll('.bbox').data(graph.nodes, function (d) {
        return d.id;
      });

      b.enter().append('rect').attr('class', 'bbox').attr('opacity', 0.4).merge(b).attr('x', function (d) {
        return d.zx + d.bx;
      }).attr('y', function (d) {
        return d.zy + d.by;
      }).attr('width', function (d) {
        return d.w;
      }).attr('height', function (d) {
        return d.h;
      }).style('fill', function (d) {
        return d.overlap && '#d00' || '#ddd';
      });

      b.exit().remove();
    }

    function run() {
      simulation.alpha(1).nodes(graph.nodes).stop(); //.restart();
      forceLink.links(graph.links);
      var go = false;
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
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = graph.nodes[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var node = _step5.value;

          //   if (node.version + 5 > version && !node.fixed) {
          //     simulation.unfix(node);
          //     console.log('unfix', node.id);
          //   }
          node.version = version;
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5.return) {
            _iterator5.return();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }

      updatePositions(svgNodes.selectAll('.node'));
      go = true;
      if (go) simulation.alpha(0.2).restart();
    }

    function render() {
      var nodeTransition = d3.transition().ease(d3.easeLinear).duration(300);
      var edgeTransition = d3.transition().ease(d3.easeLinear).duration(300);

      // svg.selectAll("*").interrupt();

      var selection = void 0;

      selection = svgNodes.selectAll('.node').data(graph.nodes, function (d) {
        return d.id;
      });

      selection.exit().transition(nodeTransition).style('opacity', 0).remove();

      d3nodes = selection.enter().append(visNode.create).call(visNode).call(behavior).style('opacity', 0).merge(selection);

      d3nodes.call(visNode.update).transition(nodeTransition).style('opacity', 1);

      selection = svgLinks.selectAll('.link').data(showEdges && graph.links || [], function (d) {
        return d.id;
      });

      selection.exit()
      // .transition(edgeTransition).style('opacity', 0)
      .remove();

      d3links = selection.enter().append(visLink.create)
      // .style('opacity', 0)
      .call(visLink)
      // .transition(edgeTransition).style('opacity', 0.5)
      // .selection()
      .merge(selection).call(visLink.update);
    }

    function resize(w, h) {
      width = w;
      height = h;

      if (!svg) return;

      svg.attr('width', width).attr('height', height);
      overlay.attr('width', width).attr('height', height);

      var force = void 0;

      if (force = simulation.force('center')) force.x(width / 2).y(height / 2);
      if (force = simulation.force('x')) force.x(width / 2);
      if (force = simulation.force('y')) force.y(height / 2);
    }

    var cg = function cg(selection) {
      svg = selection.append('svg').attr('class', 'cg');
      visLink.init && visLink.init(svg);

      var g = svg.append('g');
      overlay = g.append('rect').attr('class', 'overlay'); //.on('mousewheel', () => console.log('overlay mouse wheel'));
      // dbg_bboxes = g.append('g');
      svgLinks = g.append('g').attr('class', 'links');
      svgNodes = g.append('g').attr('class', 'nodes');

      enableZoom();

      var parent = selection.node();
      resize(parent.offsetWidth, parent.offsetHeight);
      return cg;
    };

    cg.width = function (_) {
      if (!arguments.length) return width;
      resize(+_, height);
      return cg;
    };

    cg.height = function (_) {
      if (!arguments.length) return height;
      resize(width, +_);
      return cg;
    };

    cg.graph = function (_) {
      if (!arguments.length) return graph;
      try {
        simulation.stop();

        _ = _ || { nodes: [], links: [] };

        _.nodes.forEach(function (node) {
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
      } catch (err) {
        console.log('graph err', err);
      }
      return cg;
    };

    cg.update = function () {
      d3nodes.call(visNode.update);
      d3links.call(visLink.update);
      forceCollide.initialize(graph.nodes); // use new nodes sizes
      // simulation.alpha(0.1).restart();
    };

    cg.resize = resize;

    cg.layout = function () {
      // for (let node of graph.nodes)
      //   if (!node.fixed) simulation.unfix(node);
      simulation.alpha(0.5).restart();
    };

    cg.showEdges = function (_) {
      if (!arguments.length) return showEdges;
      showEdges = _;
      render();
    };

    cg.on = function () {
      var value = listeners.on.apply(listeners, arguments);
      return value === listeners ? cg : value;
    };

    return cg;
  }

  /**
   * Created by yarden on 5/31/16.
   */

  function shared(a, b) {
    var count = 0,
        ia = 0,
        ib = 0,

    // indices
    na = a.length,
        nb = b.length,
        va = void 0,
        vb = void 0;

    if (a.length === 0 || b.length === 0) {
      return count;
    }

    va = a[0].id;
    vb = b[0].id;
    while (true) {
      if (va < vb) {
        if (++ia === na) {
          return count;
        }
        va = a[ia].id;
      } else if (va > vb) {
        if (++ib === nb) {
          return count;
        }
        vb = b[ib].id;
      } else {
        // va== vb
        count++;
        if (++ia === na || ++ib === nb) {
          return count;
        }
        va = a[ia].id;
        vb = b[ib].id;
      }
    }
  }

  function suggest(a, b) {
    var s = shared(a, b);
    return s / min(a.length, b.length);
  }

  function jaccard(a, b) {
    var s = shared(a, b);
    return s / (a.length + b.length - s);
  }

  /**
   * Created by yarden on 6/6/16.
   */

  function constFilter(x) {
    return function (item) {
      return item === x;
    };
  }

  function not(f) {
    f = typeof f === 'function' ? f : constFilter(f);
    return function (item) {
      return !f(item);
    };
  }

  function and() {
    var filters = new Set();

    function filter(item) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = filters[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var f = _step.value;

          if (!f(item)) return false;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return true;
    }

    filter.add = function (f) {
      filters.add(f);
      return filter;
    };

    filter.remove = function (f) {
      filters.remove(f);
      return filter;
    };

    return filter;
  }

  function or() {
    var filters = new Set();

    function filter(item) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = filters[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var f = _step2.value;

          if (f(item)) return true;
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return false;
    }

    filter.add = function (f) {
      filters.add(f);
      return filter;
    };

    filter.remove = function (f) {
      filters.remove(f);
      return filter;
    };

    return filter;
  }

  /**
   * Created by yarden on 6/5/16.
   */

  function groupAnd(emptyValue) {
    var empty = true;
    var groups = new Map();
    var domain = new Set();
    if (arguments.length == 0) emptyValue = true;

    function intersect(current, items) {
      var _ref = current.size < items.size ? [current, items] : [items, current];

      var _ref2 = _slicedToArray(_ref, 2);

      var a = _ref2[0];
      var b = _ref2[1];

      var s = new Set();
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = a[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;

          if (b.has(item)) s.add(item);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return s;
    }

    function filter(item) {
      return empty ? emptyValue : domain.has(item);
    }

    filter.add = function (id, items) {
      if (groups.has(id)) return;

      groups.set(id, items);
      domain = empty ? new Set(items) : intersect(domain, items);
      empty = false;
      return filter;
    };

    filter.remove = function (id) {
      if (!groups.delete(id)) return;

      empty = groups.size == 0;
      if (empty) domain = new Set();else {
        domain = null;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = groups.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var items = _step2.value;

            domain = domain ? intersect(domain, items) : new Set(items);
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }
      return filter;
    };

    filter.items = function () {
      return domain;
    };

    filter.groups = function () {
      return groups.keys();
    };

    return filter;
  }

  function groupOr(emptyValue) {
    var empty = true;
    var groups = new Map();
    var domain = new Set();
    if (arguments.length == 0) emptyValue = true;

    function add(items) {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = items[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var item = _step3.value;
          domain.add(item);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }

    function filter(item) {
      return empty ? emptyValue : domain.has(item);
    }

    filter.add = function (id, items) {
      if (groups.has(id)) return;

      groups.set(id, items);
      add(items);
      empty = false;
      return filter;
    };

    filter.remove = function (id) {
      if (!groups.delete(id)) return;

      domain = new Set();
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = groups.values()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var items = _step4.value;

          add(items);
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      empty = false;
      return filter;
    };

    filter.items = function () {
      return domain;
    };

    filter.groups = function () {
      return groups.keys();
    };

    return filter;
  }

  return {
    setters: [function (_2) {
      quadtree = _2.quadtree;
      d3 = _2;
    }, function (_3) {}],
    execute: function () {
      _slicedToArray = function () {
        function sliceIterator(arr, i) {
          var _arr = [];
          var _n = true;
          var _d = false;
          var _e = undefined;

          try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);

              if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"]) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }

          return _arr;
        }

        return function (arr, i) {
          if (Array.isArray(arr)) {
            return arr;
          } else if (Symbol.iterator in Object(arr)) {
            return sliceIterator(arr, i);
          } else {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          }
        };
      }();

      _export('panel', panel);

      _export('suggest', suggest);

      _export('jaccard', jaccard);

      _export('and', and);

      _export('or', or);

      _export('not', not);

      _export('groupAnd', groupAnd);

      _export('groupOr', groupOr);
    }
  };
});
$__System.register("2", [], function() { return { setters: [], execute: function() {} } });

$__System.register('styles/cg.css!github:systemjs/plugin-css@0.1.23/css.js', [], false, function() {});
(function(c){if (typeof document == 'undefined') return; var d=document,a='appendChild',i='styleSheet',s=d.createElement('style');s.type='text/css';d.getElementsByTagName('head')[0][a](s);s[i]?s[i].cssText=c:s[a](d.createTextNode(c));})
(".tagNode .anchor{fill:#d3d3d3;stroke:green;stroke-width:.5px}.tagNode .anchor.fixed{fill:red}.tagNode .tag .frame{fill:#707070}.tagNode .tag .bg{fill:#f0f0f0}.tagNode .tag text{font-size:1.5em;font-weight:400;stroke:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.tagNode .tag text.excluded{text-decoration:line-through}.tagNode .tag.highlighted .bg{fill:#ff0}.cg .overlay{fill:none;pointer-events:all}.cg .link{fill:none;stroke:#ddd;stroke-width:.5px;opacity:1}.cg .link.highlight{stroke:red;stroke-opacity:1}");
})
(function(factory) {
  if (typeof define == 'function' && define.amd)
    define(["d3/build/d3.node.js","styles/cg.css!css/css.js"], factory);
  else if (typeof module == 'object' && module.exports && typeof require == 'function')
    module.exports = factory(require("d3/build/d3.node.js"), require("styles/cg.css!css/css.js"));
  else
    throw new Error("Module must be loaded as AMD or CommonJS");
});
//# sourceMappingURL=cg-core.js.map