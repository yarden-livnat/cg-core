/**
 * Created by yarden on 5/31/16.
 */

import d3 from 'd3';

function variance(a) {
  if (a.var == undefined) {
    if (a.mean == undefined)  a.mean = d3.mean(a);
    let ss = 0;
    for (let v of a) {
      ss += v * v;
    }
    a.var = ss - a.length * a.mean;
  }

  return a.var;
}


export function pearson(a, b) {
  let n = a.length,
    cov = -n * a.mean * b.mean;

  for (let i=0; i<n; i++) {
    cov += a[i] * b[i];
  }

  return cov*cov / (variance(a) * variance(b));
}