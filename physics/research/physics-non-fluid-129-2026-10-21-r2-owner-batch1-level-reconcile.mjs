import {readFileSync, writeFileSync, mkdirSync, existsSync} from 'node:fs';
import {join} from 'node:path';
import {createHash} from 'node:crypto';
import {readItem} from '../tools/physics-support/physics-content.mjs';
import {dependencyLevels} from '../tools/physics-support/item-dependency-levels.mjs';
const run = 'physics-non-fluid-129-2026-10-21-r2';
const state = JSON.parse(readFileSync(`.physics-autopilot/${run}/state.json`));
if (!state.dispatches['1-scaffold:batch-1']?.endedAt) throw Error('Batch1 writer is live');
const report = JSON.parse(readFileSync(`research/${run}-owner-batch1-levels.json`));
const manifestPath = `research/${run}-batch-1.pages.json`;
const pages = JSON.parse(readFileSync(manifestPath));
const graph = dependencyLevels(pages);
if (graph.errors.length || graph.items.size !== 19) throw Error(graph.errors.join('\n') || 'Wrong inventory');
const archive = `research/${run}-owner-batch1-level-reconciliation`;
if (existsSync(archive)) throw Error('Reconciliation already exists');
const sha = bytes => createHash('sha256').update(bytes).digest('hex');
const patches = report.inventory.map(row => {
  const raw = readFileSync(row.path, 'utf8'), item = readItem(row.path), level = graph.levels.get(row.id);
  if (item.status !== 'published' || item.dependency_level !== row.source_level || level !== row.successor_level)
    throw Error(`Unexpected metadata ${row.id}`);
  const lines = [...raw.matchAll(/^dependency_level:[^\r\n]*$/gm)];
  if (lines.length !== 1) throw Error(`Ambiguous level ${row.id}`);
  const next = raw.replace(/^dependency_level:[^\r\n]*$/m, `dependency_level: ${level}`);
  if (next.replace(/^dependency_level:[^\r\n]*$/m, lines[0][0]) !== raw) throw Error(`Non-scalar edit ${row.id}`);
  return {id: row.id, path: row.path, raw, next, oldLevel: row.source_level, newLevel: level};
});
mkdirSync(archive); mkdirSync(join(archive, 'items')); mkdirSync(join(archive, 'readiness'));
writeFileSync(join(archive, 'batch-1.pages.before.json'), readFileSync(manifestPath));
for (const p of patches) {
  writeFileSync(join(archive, p.path), p.raw);
  writeFileSync(join(archive, 'readiness', `${p.id}.json`), readFileSync(`research/${run}-step1-${p.id}.json`));
}
for (const p of patches) if (readFileSync(p.path, 'utf8') !== p.raw) throw Error('Source changed during preflight');
for (const p of patches) writeFileSync(p.path, p.next);
const receipt = {
  version: 1, run, reviewer: '/root', recorded_at: new Date().toISOString(),
  scope: 'dependency_level-only source metadata reconciliation', batch1WriterDrained: true,
  source_bodies_interfaces_and_verification_preserved: true, readiness_resolved: false,
  scientific_acceptance_created: false,
  checks_pending: 'Explicit changed-source format/render checks and fresh native readiness after all writers drain; complete native gate batteries remain required.',
  items: patches.map(p => ({id: p.id, path: p.path, oldLevel: p.oldLevel, newLevel: p.newLevel,
    before_sha256: sha(p.raw), after_sha256: sha(p.next)})),
};
writeFileSync(join(archive, 'receipt.json'), JSON.stringify(receipt, null, 2) + '\n');
console.log('Reconciled 19 level scalars; all other source bytes preserved. Prior readiness remains escalated pending current checks.');
