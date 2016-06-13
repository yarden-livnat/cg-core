/**
 * Created by yarden on 5/23/16.
 */
import constant from "./constant";
//import {quadtree} from "d3-quadtree";
import {quadtree} from "d3";

export default function (extent) {
  var nodes,
    extents,
    strength = 1,
    iterations = 1;

  var x = function(d) { return d.x + d.vx; };
  var y = function(d) { return d.y + d.vy; };

  if (typeof extent !== "function") extent = constant(extent == null ? {w:1, h:1} : extent);

  function force(alpha) {
    var i, n = nodes.length,
      tree,
      node,
      xi, yi,
      wi, hi,
      cxi, cyi;

    for (var k = 0; k < iterations; ++k) {
      tree = quadtree(nodes, x, y).visitAfter(prepare);
      for (i = 0; i < n; ++i) {
        node = nodes[i];
        wi = extents[i].w;
        hi = extents[i].h;
        xi = x(node);
        yi = y(node);
        cxi = xi + wi/2;
        cyi = yi + hi/2;
        tree.visit(apply);
      }
    }

    function apply(quad, x0, y0, x1, y1) {
      var data = quad.data, wj = quad.w, hj = quad.h, w = (wi + wj)/2, h = (hi + hj)/2;
      if (data) {
        if (data.index > i) {
          var dx = cxi - (x(data) + wj/2);
          var dy = cyi - (y(data) + hj/2);
          var pdx = dx < 0 ? -dx : dx;
          var pdy = dy < 0 ? -dy : dy;

          if (pdx < w && pdy  < h) {
            if (pdx +2 < w && pdy  +2 < h)
              node.overlap = data.overlap = true;

            let f = Math.min((w - pdx) / pdx, (h - pdy) / pdy) * (1-alpha) * strength;
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
          if (quad[i].w > quad.w) { quad.w = quad[i].w; }
          if (quad[i].h > quad.h) { quad.h = quad[i].h; }
        }
      }
    }
  }

  force.initialize = function(_) {
    var i, n = (nodes = _).length; extents = new Array(n);
    for (i = 0; i < n; ++i) extents[i] = extent(nodes[i], i, nodes);
  };

  force.iterations = function(_) {
    return arguments.length ? (iterations = +_, force) : iterations;
  };

  force.strength = function(_) {
    return arguments.length ? (strength = +_, force) : strength;
  };

  force.extent = function(_) {
    return arguments.length ? (extent = typeof _ === "function" ? _ : constant(+_), force) : extent;
  };

  force.x = function(_) {
    return arguments.length ? (x = _ , force) : x;
  };

  force.y = function(_) {
    return arguments.length ? (y = _ , force) : y;
  };

  return force;
}