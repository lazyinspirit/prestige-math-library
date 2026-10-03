// Generate one Step-5 batch's exact item order, retaining legacy group support.
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { orderedItems, runPages } from './item-dependency-levels.mjs';

export function prepareStep5AdjudicationOrder(root, run, group) {
  const batches = group.covers.map(String);
  const ordered = orderedItems(runPages(root, run), { validateLabels: false });
  const owned = ordered.filter(row => batches.includes(row.batch));
  const byId = new Map(owned.map(row => [row.id, row]));
  const routed = new Map(), otherWork = [];
  for (const batch of batches) {
    const path = join(root, 'research', `${run}-step5-scope-${batch}.json`);
    const scope = JSON.parse(readFileSync(path, 'utf8'));
    if (scope.run !== run || String(scope.batch) !== batch || scope.group !== (group.scopeGroup ?? group.label))
      throw Error(`Step 5 scope identity mismatch: ${path}`);
    const add = (id, route) => {
      if (!byId.has(id)) return otherWork.push(`${batch}:${id} (${route})`);
      const key = `${batch}:${id}`;
      if (!routed.has(key)) routed.set(key, new Set());
      routed.get(key).add(route);
    };
    for (const id of scope.touched ?? []) add(id, 'touched');
    if (scope.version === 3) for (const id of scope.items ?? []) add(id, 'direct review');
    for (const id of scope.high_risk ?? []) add(id, 'risk review');
    for (const id of scope.pages_touched ?? []) add(id, 'page');
    if (scope.version === 3) for (const id of scope.pages ?? []) add(id, 'page');
    for (const row of scope.reader_findings ?? []) add(row.id, row.obligation ?? 'reader');
    for (const row of scope.refuter_findings ?? []) add(row.id, row.obligation ?? 'refuter');
  }
  const itemRows = owned.filter(row => routed.has(`${row.batch}:${row.id}`));
  const path = `research/${run}-alpha-${group.label}-5a-order.task.md`;
  const body = [
    `# Step 5a item order: adjudicator ${group.label}, run ${run}`,
    `Assigned batches: ${batches.join(', ')}. Read briefs/tasks/alpha-5a-adjudicate.md first.`,
    'Adjudicate and complete each routed item from lowest dependency level to highest within the dispatched batches. Finish all obligations and the risk review for an item before moving to a higher level. The scope files remain authoritative for exact decisions; this list does not add obligations.',
    'Items in order:',
    ...(itemRows.length ? itemRows.map(row => `- level ${row.level}: batch ${row.batch}, ${row.id} — ${[...routed.get(`${row.batch}:${row.id}`)].join(', ')}`) : ['- none']),
    'Other routed obligations (pages and published dependencies; review them as required by the scope):',
    ...(otherWork.length ? otherWork.map(row => `- ${row}`) : ['- none']),
  ].join('\n\n') + '\n';
  writeFileSync(join(root, path), body);
  return path;
}
