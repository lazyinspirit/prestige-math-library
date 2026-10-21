#!/usr/bin/env node
// Planning and mechanical audit preparation; the ordinary native controller
// owns every review, dispatch, transition, repair round and closeout.
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { AUDIT_LAYOUT } from '../src/audit-policy.mts';
import { auditDir, carrier, checkAuditScope, command, identity, origin, planAudit, readJSON, selectPublished, sha256, writeJSON } from '../src/audit-frontier.mts';
import { checkEditorial } from '../src/audit-editorial.mts';

export function prepareAuditCarrier(source: ReturnType<typeof carrier>, level?: number, duplicates: string[] = []) {
  const { doc, body, data } = source;
  const isPage = source.path.startsWith('library/');
  if (isPage) {
    doc.set('audit_layout', AUDIT_LAYOUT);
    const repeated = new Set(duplicates);
    for (const key of ['items', 'examples']) doc.set(key, data[key].filter(id => !repeated.has(id)));
  } else doc.set('dependency_level', level);
  return `---\n${doc.toString()}---\n${isPage ? '' : '\n' + body}`;
}

export function prepareAudit(root: string, run: string) {
  const record = origin(root, run), path = join(auditDir(root, run), 'preparation.json');
  if (existsSync(path)) return readJSON(path); // Native retries never reapply old edits.
  const { pages } = checkAuditScope(root, run), levels = new Map<string, number>(pages.flatMap(p => p.items.map(i => [i.id, i.dependency_level])));
  for (const row of record.originals) if (sha256(readFileSync(join(root, row.path))) !== row.sha256)
    throw Error(`Source changed after audit planning; reconcile before preparation: ${row.path}`);
  const changes: any[] = [];
  for (const row of record.originals) {
    const source = carrier(root, row.path);
    const duplicates = (record.duplicate_placements ?? []).filter(row => row.page === source.data.page).map(row => row.id);
    const after = prepareAuditCarrier(source, levels.get(source.data.id), duplicates);
    writeFileSync(join(root, row.path), after);
    changes.push({ path: row.path, before_sha256: row.sha256, after_sha256: sha256(after), status: 'published' });
  }
  const snapshot = command(root, ['node', 'tools/touchlog.mjs', 'snap', `research/${run}-touches.json`, 'audit-before-review', '--idempotent']);
  const receipt = { version: 1, run, at: new Date().toISOString(), changes, snapshot,
    mathematical_review: false, verification_created: false, publication_changed: false };
  writeJSON(path, receipt); return receipt;
}

// The Step-2 owner has already reconciled accepted manifests and authorized its
// full battery. Verify that join before rendering the next native review scope;
// never manufacture Step-3 review, baseline or closure evidence.
export function handoffAudit(root: string, run: string, execute = command) {
  execute(root, ['node', 'tools/tsx-run.mjs', 'tools/autopilot/bin/audit.mts', 'check-origin', '--run', run]);
  execute(root, ['node', 'tools/batch-scope-review.mjs', 'check', '--run', run]);
  execute(root, ['node', 'tools/splice-plan.mjs', '--run', run, '--verify']);
  execute(root, ['node', 'tools/touchlog.mjs', 'snap', `research/${run}-touches.json`,
    'audit-after-scope-review', '--idempotent']);
  execute(root, ['node', 'tools/step5-scope.mjs', 'render', '--run', run]);
}

async function main() {
  const args = process.argv.slice(2), mode = args[0], root = resolve(process.cwd());
  const get = (name: string) => { const at = args.indexOf(`--${name}`); return at < 0 ? undefined : args[at + 1]; };
  const allowed: Record<string, string[]> = {
    inspect: ['category'], plan: ['category', 'run'], prepare: ['run'], handoff: ['run'],
    'check-origin': ['run'], 'check-editorial': ['run'],
  };
  if (!allowed[mode]) throw Error('Usage: audit.mts inspect --category SLUG | plan --category SLUG --run RUN | prepare|handoff|check-origin|check-editorial --run RUN');
  for (let n = 1; n < args.length; n += 2) if (!args[n].startsWith('--') || !allowed[mode].includes(args[n].slice(2)) || !args[n + 1] || args[n + 1].startsWith('--'))
    throw Error(`Unsupported or missing audit option: ${args[n]}`);
  if (['inspect', 'plan'].includes(mode)) {
    const category = identity(get('category')!);
    if (mode === 'inspect') {
      const selected = selectPublished(root, category);
      console.log(JSON.stringify({ category, pairs: selected.pairs, pages: selected.pages.map(p => p.id), items: selected.items, skipped: selected.skipped, duplicate_placements: selected.duplicatePlacements }, null, 2)); return;
    }
    const run = identity(get('run')!);
    const record = planAudit(root, { run, category });
    console.log(`Published audit planned on main: ${record.pairs} pair(s), ${record.pages.length} pages, ${record.items.length} items. Sources/statuses unchanged.`);
    console.log(`Next: node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts doctor --run ${run} --state-dir .autopilot/${run}`);
    return;
  }
  const run = identity(get('run')!);
  if (mode === 'prepare') {
    const receipt = prepareAudit(root, run);
    console.log(`audit-prepare: ${receipt.changes.length} published carrier(s) prepared; no status changes`);
  } else if (mode === 'handoff') {
    handoffAudit(root, run);
    console.log('audit-handoff: accepted scope verified; batch review scope rendered');
  } else if (mode === 'check-origin') {
    const { record, pages } = checkAuditScope(root, run);
    for (const row of record.originals) if (carrier(root, row.path).data.status !== 'published') throw Error(`Audit changed publication: ${row.path}`);
    console.log(`audit-origin: ${pages.length} page(s) checked; published originals preserved`);
  } else {
    const result = await checkEditorial(root, run);
    for (const error of result.errors) console.error(`ERROR audit-editorial: ${error}`);
    console.log(`audit-editorial: ${result.pages} page(s), ${result.items} item(s) checked; ${result.errors.length} defect(s)`);
    if (result.errors.length) process.exitCode = 1;
  }
}
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main().catch(error => {
  console.error(`published-audit: ${error.message}`); process.exitCode = 1;
});
