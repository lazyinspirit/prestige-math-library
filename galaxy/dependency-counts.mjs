/** Count distinct transitive consumers, excluding self, without double-counting shared paths.
 * Collapse strongly connected components first so even imperfect cyclic content is handled exactly.
 * Bitsets are retained only for components with outgoing edges (about 52 MiB worst-case at 21k items).
 */
export function downstreamCounts(length, edges) {
  const consumers = Array.from({ length }, () => []), suppliers = Array.from({ length }, () => []);
  for (const [consumer, supplier] of edges) { consumers[supplier].push(consumer); suppliers[consumer].push(supplier); }
  const visited = new Uint8Array(length), cursor = new Uint32Array(length), order = [];
  for (let start = 0; start < length; start++) {
    if (visited[start]) continue;
    const stack = [start]; visited[start] = 1;
    while (stack.length) {
      const node = stack[stack.length - 1];
      if (cursor[node] < consumers[node].length) {
        const next = consumers[node][cursor[node]++];
        if (!visited[next]) { visited[next] = 1; stack.push(next); }
      } else { order.push(node); stack.pop(); }
    }
  }
  const component = new Int32Array(length).fill(-1), sizes = [];
  for (let i = order.length - 1; i >= 0; i--) {
    const start = order[i];
    if (component[start] !== -1) continue;
    const id = sizes.length, stack = [start]; let size = 0; component[start] = id;
    while (stack.length) {
      const node = stack.pop(); size++;
      for (const next of suppliers[node]) if (component[next] === -1) { component[next] = id; stack.push(next); }
    }
    sizes.push(size);
  }
  const dag = sizes.map(() => new Set()), indegree = new Uint32Array(sizes.length);
  for (const [consumer, supplier] of edges) {
    const from = component[supplier], to = component[consumer];
    if (from !== to && !dag[from].has(to)) { dag[from].add(to); indegree[to]++; }
  }
  const sorted = [];
  indegree.forEach((degree, id) => { if (!degree) sorted.push(id); });
  for (let head = 0; head < sorted.length; head++) for (const next of dag[sorted[head]]) if (--indegree[next] === 0) sorted.push(next);
  const words = Math.ceil(sizes.length / 32), reach = new Array(sizes.length), counts = new Uint32Array(sizes.length);
  const singleton = sizes.every(size => size === 1);
  for (let i = sorted.length - 1; i >= 0; i--) {
    const id = sorted[i]; counts[id] = sizes[id] - 1;
    if (!dag[id].size) continue;
    const bits = reach[id] = new Uint32Array(words);
    for (const next of dag[id]) {
      bits[next >>> 5] |= 1 << (next & 31);
      const child = reach[next];
      if (child) for (let word = 0; word < words; word++) bits[word] |= child[word];
    }
    for (let word = 0; word < words; word++) {
      let value = bits[word];
      if (singleton) {
        value -= (value >>> 1) & 0x55555555;
        value = (value & 0x33333333) + ((value >>> 2) & 0x33333333);
        counts[id] += (((value + (value >>> 4)) & 0x0f0f0f0f) * 0x01010101) >>> 24;
      } else {
        while (value) {
          const bit = 31 - Math.clz32(value & -value);
          counts[id] += sizes[word * 32 + bit]; value &= value - 1;
        }
      }
    }
  }
  return Uint32Array.from(component, id => counts[id]);
}
