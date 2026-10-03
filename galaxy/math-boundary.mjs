// Fail closed: a mathematical view contains only mathematical items whose
// known prerequisite closure is mathematical, including aliases.
const mathematicalKinds = new Set(['definition', 'theorem', 'lemma', 'proposition', 'corollary', 'example', 'counterexample', 'false-statement', 'remark', 'def', 'thm', 'lem', 'prop', 'cor', 'ex', 'cex', 'fs', 'rem', 'false statement']);
export const isMathematicalItem = item =>
  !/^(post|exp|pthm|texp)-/.test(item.id) &&
  (item.domain === undefined || item.domain === 'mathematics') && mathematicalKinds.has(item.kind ?? 'remark');

export function mathematicalItems(rows) {
  const canonical = new Map(rows.map(item => [item.id, item]));
  const aliases = new Map();
  for (const item of rows) for (const alias of item.aliases ?? []) if (!aliases.has(alias)) aliases.set(alias, item.id);
  const consumers = new Map(), excluded = new Set();
  for (const item of rows) {
    if (!isMathematicalItem(item)) excluded.add(item.id);
    for (const dependency of [...(item.deps ?? []), ...(item.justifiedBy ?? item.justified_by ?? []), ...(item.forwardRefs ?? item.forward_refs ?? [])]) {
      const id = canonical.has(dependency) ? dependency : aliases.get(dependency);
      if (!id) continue; // Unauthored mathematics retains its existing handling.
      if (!consumers.has(id)) consumers.set(id, []);
      consumers.get(id).push(item.id);
    }
  }
  const queue = [...excluded];
  for (let i = 0; i < queue.length; i++) for (const id of consumers.get(queue[i]) ?? []) {
    if (!excluded.has(id)) { excluded.add(id); queue.push(id); }
  }
  return rows.filter(item => !excluded.has(item.id));
}
