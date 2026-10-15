// Root operational metadata verification; no scientific review or gate waiver.
import fs from 'node:fs';
import crypto from 'node:crypto';
import { splitFrontmatter, sourceSectionText } from '../../tools/physics-support/facts-block.mjs';
import { parseFrontmatter } from '../../tools/physics-support/content-policy-lib.mjs';
import { sharedWriteLock } from '../../tools/physics-support/step5-shared-write-lock.mjs';

const run = 'physics-td-qft-rpm-62-2026-10-14';
const statePath = `.physics-autopilot/${run}/state.json`;
const state = JSON.parse(fs.readFileSync(statePath));
const pack = JSON.parse(fs.readFileSync(`research/${run}-step5-v2/initial-1.json`));
if (Object.values(state.dispatches).some(row => row.startedAt && !row.endedAt))
  throw Error('All native writers must drain before root verification');
const owner = `/root-${run}-metadata-verification`;
if (!sharedWriteLock(process.cwd(), 'acquire', owner).acquired)
  throw Error('Shared metadata lock is busy; no verification performed');
const sha = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
const normal = text => String(text ?? '').replace(/\s+/g, ' ').trim();
const sorted = value => JSON.stringify([...(value ?? [])].sort());
const observations = [], failures = [], inputs = new Map();
const read = path => {
  const raw = fs.readFileSync(path); inputs.set(path, sha(raw)); return raw.toString();
};
try {
  for (const batch of ['18', '26', '27']) {
    const path = `research/${run}-batch-${batch}.pages.json`;
    const pages = JSON.parse(read(path));
    const selected = new Set(pack.assignments[batch].map(row => typeof row === 'string' ? row : row.id));
    if (!pages.length) throw Error('Empty manifest selection');
    for (const page of pages) for (const item of page.items ?? []) {
      if (!selected.has(item.id)) continue;
      const sourcePath = `items/${item.id}.md`;
      const source = read(sourcePath);
      const { fm, body } = splitFrontmatter(source);
      const metadata = parseFrontmatter(fm);
      const row = { batch, page: page.id, id: item.id, checks: [] };
      const check = (field, ok) => {
        row.checks.push({ field, ok });
        if (!ok) failures.push({ batch, page: page.id, id: item.id, field });
      };
      for (const field of ['id', 'kind', 'domain', 'library', 'title'])
        if (item[field] !== undefined) check(field, normal(item[field]) === normal(metadata[field]));
      check('deps', sorted(item.deps) === sorted(metadata.deps));
      const section = item.reference?.split('#')[1]
        ?? (item.kind === 'definition' ? 'Definition' : item.kind === 'postulate' ? 'Postulate'
          : item.kind === 'example' ? (sourceSectionText(body, 'Example') ? 'Example' : 'Statement') : 'Statement');
      if (item.statement !== undefined)
        check('statement', normal(item.statement) === normal(sourceSectionText(body, section)));
      observations.push(row);
    }
  }
  if (!observations.length) throw Error('Empty item selection');
  const currentState = JSON.parse(fs.readFileSync(statePath));
  if (Object.values(currentState.dispatches).some(row => row.startedAt && !row.endedAt))
    throw Error('Native writer appeared during verification');
  for (const [path, before] of inputs)
    if (sha(fs.readFileSync(path)) !== before) throw Error(`Input changed: ${path}`);
  const report = {
    run, at: new Date().toISOString(), kind: 'root-shared-metadata-consistency-only',
    science_certification: false, native_transition: false, writers_drained: true,
    observations, failures, inputs: Object.fromEntries(inputs),
  };
  const reportPath = `research/${run}-owner-step5-shared-metadata-consistency-${Date.now()}.json`;
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2) + '\n');
  console.log(JSON.stringify({ report: reportPath, items: observations.length, failures }));
  if (failures.length) process.exitCode = 1;
} finally {
  sharedWriteLock(process.cwd(), 'release', owner);
}
