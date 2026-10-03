// New dependency lemmas inherit the authority of the fatal repair consuming
// them. Existing-item edits keep their separate, exact-hash licences.
import { frontmatterList } from './frontmatter-list.mjs';

export function permittedNewLemmas({ created, readItem, licensedConsumers }) {
  const candidates = new Set(created.filter((id) => /^lem-/.test(id)
    && /^kind:\s*["']?lemma["']?\s*$/m.test(readItem(id))));
  const permitted = new Set();
  const pending = [...licensedConsumers];
  const visited = new Set();
  while (pending.length) {
    const id = pending.pop();
    if (visited.has(id)) continue;
    visited.add(id);
    const deps = frontmatterList(readItem(id), 'deps');
    for (const dep of deps) {
      if (!candidates.has(dep)) continue;
      permitted.add(dep);
      pending.push(dep);
    }
  }
  return permitted;
}
