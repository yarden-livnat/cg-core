/**
 * Created by yarden on 6/5/16.
 */

export function groupAnd(emptyValue){
  let empty = true;
  let groups = new Map();
  let domain = new Set();
  if (arguments.length == 0) emptyValue = true;

  function intersect(current, items) {
    let [a, b] = current.size < items.size ? [current, items] : [items, current];
    let s = new Set();
    for (let item of a) {
      if (b.has(item)) s.add(item);
    }
    return s;
  }

  function filter(item) {
    return empty ? emptyValue : domain.has(item);
  }

  filter.add = function(id, items) {
    if (groups.has(id)) return;

    groups.set(id, items);
    domain = empty ? new Set(items) : intersect(domain, items);
    empty = false;
    return filter;
  };

  filter.remove = function(id) {
    if (!groups.delete(id)) return;

    empty = groups.size == 0;
    if (empty) domain = new Set();
    else {
      domain = null;
      for (let items of groups.values()) {
        domain = domain ? intersect(domain, items) : new Set(items);
      }
    }
    return filter;
  };

  filter.items = function() {
    return domain;
  };

  filter.groups = function() {
    return groups.keys();
  };

  return filter;
}

export function groupOr(emptyValue){
  let empty = true;
  let groups = new Map();
  let domain = new Set();
  if (arguments.length == 0) emptyValue = true;

  function add(items) {
    for (let item of items) domain.add(item);
  }

  function filter(item) {
    return empty ? emptyValue : domain.has(item);
  }

  filter.add = function(id, items) {
    if (groups.has(id)) return;

    groups.set(id, items);
    add(items);
    empty = false;
    return filter;
  };

  filter.remove = function(id) {
    if (!groups.delete(id)) return;

    domain = new Set();
    for (let items of groups.values()) {
      add(items);
    }
    empty = false;
    return filter;
  };

  filter.items = function() {
    return domain;
  };

  filter.groups = function() {
    return groups.keys();
  };

  return filter;
}