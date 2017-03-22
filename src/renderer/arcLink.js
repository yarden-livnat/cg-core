/**
 * Created by yarden on 5/26/16.
 */

import createElement from './createElement';

let pos_color = '#bbb';
let neg_color = '#f3562f';
let highlight_color = '#4369e0';

export default function () {

  function Link(selection) {
    selection.attr('class', 'link');
  }

  Link.create = function() {
    return createElement.call(this, 'path');
  };
  
  Link.update = function(selection) {
    selection
      .attr('d', d => {
        let dx = d.target.zx - d.source.zx,
          dy = d.target.zy - d.source.zy,
          dr = 3*Math.sqrt(dx * dx + dy * dy);
        return "M" + d.source.zx + "," + d.source.zy + "A" + dr + "," + dr + " 0 0,1 " + d.target.zx + "," + d.target.zy;
      });
  };

  Link.highlight = function() {};
  return Link;
}