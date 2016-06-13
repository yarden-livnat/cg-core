/**
 * Created by yarden on 5/26/16.
 */

import createElement from './createElement';

export default function() {

  function render(selection) {
    return selection
      .classed('node', true)
      .attr('r', 4);
  }

  render.create = function() {
    return createElement.call(this, 'circle');
  };

  render.update = function(selection) {
    selection
      .attr('cx', d => d.x)
      .attr('cy', d => d.y);
  };

  return render;
}