// Generate one Step-3 batch's exact item order, retaining legacy group support.
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { orderedItems, runPages } from './item-dependency-levels.mjs';

export function prepareStep3AdjudicationOrder(root, run, group) {
  const batches = group.covers.map(String);
  const ordered = orderedItems(runPages(root, run), { validateLabels: false });
  const owned = ordered.filter(row => batches.includes(row.batch));
  const byId = new Map(owned.map(row => [row.id, row]));
  const routed = new Map(), otherWork = [], downstreamWork = [];
  for (const batch of batches) {
    const path = join(root, 'research', `${run}-step3-scope-${batch}.json`);
    const scope = JSON.parse(readFileSync(path, 'utf8'));
    if (scope.run !== run || String(scope.batch) !== batch || scope.group !== (group.scopeGroup ?? group.label))
      throw Error(`Step 3 scope identity mismatch: ${path}`);
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
    for (const row of scope.reader_findings ?? []) {
      add(row.id, row.obligation ?? 'reader');
      if (row.downstream_handoff) downstreamWork.push(`${row.obligation}: ${row.id}, owner_batch ${row.downstream_handoff.owner_batch}; Root-authorized downstream consumer, original reader observation unbound. Retain owner_batch and historical_delta_unknown:true plus a substantive owner_resolution in each decision. Open current consumer, its contract and manifest; preserve original evidence and independently review current content. This carrier remains outside your edit scope: unresolved defects require Root/owning-batch repair, never automatic acceptance.`);
    }
    for (const row of scope.refuter_findings ?? []) add(row.id, row.obligation ?? 'refuter');
  }
  const itemRows = owned.filter(row => routed.has(`${row.batch}:${row.id}`));
  const path = `research/${run}-alpha-${group.label}-3a-order.task.md`;
  const body = [
    `# Step 3a item order: adjudicator ${group.label}, run ${run}`,
    `Assigned batches: ${batches.join(', ')}. Read briefs/tasks/alpha-3a-adjudicate.md first.`,
    'Adjudicate and complete each routed item from lowest dependency level to highest within the dispatched batches. Finish all obligations and the risk review for an item before moving to a higher level. The scope files remain authoritative for exact decisions; this list does not add obligations.',
    'Items in order:',
    ...(itemRows.length ? itemRows.map(row => `- level ${row.level}: batch ${row.batch}, ${row.id} — ${[...routed.get(`${row.batch}:${row.id}`)].join(', ')}`) : ['- none']),
    'Guarded downstream obligations (ordinary refuter, adjudication and ledger duties remain mandatory):',
    ...(downstreamWork.length ? downstreamWork.map(row => `- ${row}`) : ['- none']),
    'Other routed obligations (pages and outside carriers; review them as required by the scope):',
    ...(otherWork.length ? otherWork.map(row => `- ${row}`) : ['- none']),
  ].join('\n\n') + '\n';
  writeFileSync(join(root, path), body);
  return path;
}
