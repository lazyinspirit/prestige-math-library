// Run through the guarded shared-write CLI. Metadata only; sources stay intact.
import fs from 'node:fs';
import crypto from 'node:crypto';
import { splitFrontmatter, sourceSectionText } from '../../tools/physics-support/facts-block.mjs';
import { parseFrontmatter } from '../../tools/physics-support/content-policy-lib.mjs';
const run = 'physics-td-qft-rpm-62-2026-10-14';
const owner = `root-${run}-metadata-reconciliation`;
const held = JSON.parse(fs.readFileSync('.physics-autopilot/step5-shared-write.lock/owner.json'));
if (held.owner !== owner) throw Error('Exact root lock is required');
const state = JSON.parse(fs.readFileSync(`.physics-autopilot/${run}/state.json`));
if (Object.values(state.dispatches).some(row => row.startedAt && !row.endedAt)) throw Error('Writers must drain');
const report = JSON.parse(fs.readFileSync(`research/${run}-owner-step5-shared-metadata-consistency-1792012682972.json`));
const sha = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
for (const [path, expected] of Object.entries(report.inputs))
  if (sha(fs.readFileSync(path)) !== expected) throw Error(`Input changed: ${path}`);
if (report.failures.some(row => !['deps', 'statement'].includes(row.field))) throw Error('Unexpected repair field');
const dir = `research/${run}-owner-step5-shared-metadata-reconciliation-${Date.now()}`;
fs.mkdirSync(dir);
const changed = [];
for (const batch of [...new Set(report.failures.map(row => row.batch))]) {
  const path = `research/${run}-batch-${batch}.pages.json`;
  const raw = fs.readFileSync(path), pages = JSON.parse(raw);
  fs.writeFileSync(`${dir}/batch-${batch}.pages.before.json`, raw);
  for (const failure of report.failures.filter(row => row.batch === batch)) {
    const item = pages.flatMap(page => page.items ?? []).find(row => row.id === failure.id);
    if (!item) throw Error('Missing exact item');
    const { fm, body } = splitFrontmatter(fs.readFileSync(`items/${item.id}.md`, 'utf8'));
    const metadata = parseFrontmatter(fm);
    if (failure.field === 'deps') {
      item.deps = metadata.deps ?? [];
      item.dependency_roles = metadata.dependency_roles ?? {};
    } else {
      const section = item.reference?.split('#')[1]
        ?? (item.kind === 'definition' ? 'Definition' : item.kind === 'postulate' ? 'Postulate'
          : item.kind === 'example' ? (sourceSectionText(body, 'Example') ? 'Example' : 'Statement') : 'Statement');
      const text = sourceSectionText(body, section);
      if (!text) throw Error('Missing exact public section');
      item.statement = text.trim();
    }
    changed.push(failure);
  }
  if (!fs.readFileSync(path).equals(raw)) throw Error('Manifest changed before adoption');
  fs.writeFileSync(path, JSON.stringify(pages, null, 2) + '\n');
}
const receipt = { run, at: new Date().toISOString(), metadata_only: true,
  scientific_acceptance: false, source_changes: false, changed,
  source_guards: Object.fromEntries(Object.entries(report.inputs).filter(([path]) => path.startsWith('items/'))) };
for (const [path, expected] of Object.entries(receipt.source_guards))
  if (sha(fs.readFileSync(path)) !== expected) throw Error('Source changed during metadata adoption');
fs.writeFileSync(`${dir}/receipt.json`, JSON.stringify(receipt, null, 2) + '\n');
console.log(JSON.stringify({ receipt: `${dir}/receipt.json`, fields: changed.length }));
