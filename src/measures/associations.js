/**
 * Created by yarden on 5/31/16.
 */

function shared(a, b) {
  let count = 0,
    ia = 0, ib = 0, // indices 
    na = a.length, nb = b.length,
    va, vb;

  if (a.length === 0 || b.length === 0) { return count; }

  va = a[0].id;
  vb = b[0].id;
  while (true) {
    if (va < vb) {
      if (++ia === na) { return count; }
      va = a[ia].id;
    } else if (va > vb) {
      if (++ib === nb) { return count; }
      vb = b[ib].id;
    } else { // va== vb
      count++;
      if (++ia === na || ++ib === nb) { return count; }
      va = a[ia].id;
      vb = b[ib].id;
    }
  }
}

export function suggest(a, b) {
  let s = shared(a, b);
  return s/min(a.length, b.length);
}

export function jaccard(a, b) {
  let s = shared(a, b);
  return s/(a.length + b.length -s);
}