/** Iterative traversal: no recursion limit, duplicates, or category-induced breaks. */
export function reachable(start, adjacency) {
  const found = new Set([start]), queue = [start];
  for (let head = 0; head < queue.length; head++) {
    for (const next of adjacency[queue[head]]) {
      if (!found.has(next)) { found.add(next); queue.push(next); }
    }
  }
  found.delete(start);
  return found;
}

