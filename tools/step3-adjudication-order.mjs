// Generate one Step-3 batch's exact item order, retaining legacy group support.
import { foreignRefuterObligations } from './step3-owner-foreign-refuter-routes.mjs';
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { orderedItems, runPages } from './item-dependency-levels.mjs';

export function prepareStep3AdjudicationOrder(root, run, group) {
  const batches = group.covers.map(String);
  const ordered = orderedItems(runPages(root, run), { validateLabels: false });
  const owned = ordered.filter(row => batches.includes(row.batch));
  const byId = new Map(owned.map(row => [row.id, row]));
  const allById = new Map(ordered.map(row => [row.id, row]));
  const routed = new Map(), dependencyWork = new Map(), otherWork = [], foreignWork = [];
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
    for (const target of foreignRefuterObligations(root, run, batch, { beforeDispatch: true })) {
      add(target.id, target.obligation); foreignWork.push(target);
    }
    for (const id of scope.touched ?? []) add(id, 'touched');
    if (scope.version === 3) for (const id of scope.items ?? []) add(id, 'direct review');
    for (const id of scope.high_risk ?? []) add(id, 'risk review');
    for (const id of scope.pages_touched ?? []) add(id, 'page');
    if (scope.version === 3) for (const id of scope.pages ?? []) add(id, 'page');
    const addFinding = row => {
      if (row.subject_type !== 'in-run-dependency') return add(row.id, row.obligation ?? 'finding');
      const producer = allById.get(row.id);
      if (!producer || producer.batch !== row.producer_batch || producer.batch === batch) {
        throw Error(`Step 3 foreign producer identity mismatch: ${row.obligation}`);
      }
      if (!dependencyWork.has(row.id)) dependencyWork.set(row.id, []);
      dependencyWork.get(row.id).push(`${row.obligation}, consumer ${row.consumer_id}; read-only producer`);
    };
    for (const row of scope.reader_findings ?? []) addFinding(row);
    for (const row of scope.refuter_findings ?? []) addFinding(row);
  }
  const itemRows = ordered.filter(row => routed.has(`${row.batch}:${row.id}`) || dependencyWork.has(row.id));
  const path = `research/${run}-alpha-${group.label}-3a-order.task.md`;
  const body = [
    `# Step 3a item order: adjudicator ${group.label}, run ${run}`,
    `Assigned batches: ${batches.join(', ')}. Read briefs/tasks/alpha-3a-adjudicate.md first.`,
    'Adjudicate and complete each routed item from lowest dependency level to highest within the dispatched batches. Finish all obligations and the risk review for an item before moving to a higher level. The scope files plus authenticated foreign-refuter registry determine exact decisions; this list enumerates those obligations.',
    'Required foreign native refuter obligations (additional mandatory ordinary gate decisions; preserve original finding, independently review current proof and exact repair evidence; unbound historical source, no inherited acceptance):',
    ...(foreignWork.length ? foreignWork.map(row => JSON.stringify(row)) : ['- none']),
    'Items in order:',
    ...(itemRows.length ? itemRows.map(row => `- level ${row.level}: batch ${row.batch}, ${row.id} — ${[
      ...(routed.get(`${row.batch}:${row.id}`) ?? []), ...(dependencyWork.get(row.id) ?? []),
    ].join(', ')}`) : ['- none']),
    'Other routed obligations (pages and published dependencies; review them as required by the scope):',
    ...(otherWork.length ? otherWork.map(row => `- ${row}`) : ['- none']),
  ].join('\n\n') + '\n';
  writeFileSync(join(root, path), body);
  return path;
}
