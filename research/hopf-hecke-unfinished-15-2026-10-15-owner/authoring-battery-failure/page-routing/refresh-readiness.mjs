import fs from 'node:fs';
import path from 'node:path';
import { loadStep3 } from '../../../../tools/frontier-snapshot.mjs';
import { checkStep1, recordStep1 } from '../../../../tools/step1-decisions.mjs';
import { orderedItems, runPages } from '../../../../tools/item-dependency-levels.mjs';
const run = 'hopf-hecke-unfinished-15-2026-10-15';
const root = process.cwd();
const dir = path.dirname(new URL(import.meta.url).pathname);
const before = path.join(dir, 'readiness-before');
fs.mkdirSync(before, { recursive: true });
const s = loadStep3(root, run);
const work = new Map(checkStep1(s).work.map(x => [x.item, x]));
const recorded = [];
for (const { id, item } of orderedItems(runPages(root, run))) {
  const old = work.get(id);
  if (!old) continue;
  if (old.row?.decision !== 'ready') throw Error(`Unresolved readiness escalation: ${id}`);
  const p = path.join(root, 'research', `${run}-step1-${id}.json`);
  const archive = path.join(before, `${id}.json`);
  if (fs.existsSync(archive)) throw Error(`Archive exists: ${archive}`);
  fs.copyFileSync(p, archive);
  let dependencies = [...old.row.dependencies];
  if (['ex-hh-regular-hopf-module-projection', 'ex-hh-free-hopf-module-over-polynomial-hopf-algebra', 'cex-hh-separate-action-and-coaction-fail-hopf-compatibility', 'def-hh-finite-double-cross-relations'].includes(id)) {
    dependencies = dependencies.filter(x => x !== 'def-bialgebra-counit-and-antipode');
    dependencies.push(...item.deps, ...(item.justified_by ?? []));
  }
  const row = recordStep1(root, { run, item: id, decision: 'ready', owner: true, dependencies,
    reason: 'Owner current-input readiness rehash after the guarded page-routing integration and focused supplier-interface checks in authoring-battery-failure/page-routing/owner-integration.json; original reviewed mathematical claims are preserved, source citations now match field-specialized Hopf suppliers, and backward page prerequisites are declared. This records current readiness only, not independent proof approval or native gate coverage.' });
  recorded.push({ item: id, previous_sha256: old.row.sha256, sha256: row.sha256 });
  console.log(`Refreshed ${recorded.length}/${work.size}: ${id}`);
}
const result = checkStep1(loadStep3(root, run));
fs.writeFileSync(path.join(dir, 'readiness-integration.json'), JSON.stringify({ run, at: new Date().toISOString(), supported_tool: 'recordStep1', recorded, result: { items: result.items, ready: result.ready, closed: result.closed, work: result.work.map(x => ({item:x.item,reason:x.reason})) } }, null, 2) + '\n');
if (!result.closed) throw Error('Current readiness remains open');
