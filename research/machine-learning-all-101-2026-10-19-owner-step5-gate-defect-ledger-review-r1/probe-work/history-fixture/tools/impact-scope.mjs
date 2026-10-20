// The direct boundary is sound when every changed exported interface is a
// source event. Reviewing an unchanged consumer claim stops propagation;
// repairing that claim creates a new source event in the live impact window.
export function logicalConsumers(reverseDeps, source, { directBoundary = false } = {}) {
  const logical = new Set();
  const work = [...(reverseDeps.get(source) ?? [])];
  while (work.length) {
    const consumer = work.pop();
    if (logical.has(consumer)) continue;
    logical.add(consumer);
    if (!directBoundary) for (const next of reverseDeps.get(consumer) ?? []) work.push(next);
  }
  return logical;
}
