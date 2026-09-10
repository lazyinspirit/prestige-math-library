#!/usr/bin/env node
// Export under the old tools; prepare/verify under the new tools. No fake receipts.
import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { migrateJson, migrateSuffix, selectedInput, revision } from '../src/checkpoint-migration.mjs';
const args = process.argv.slice(2), mode = args[0];
const opt = k => { const i = args.indexOf(`--${k}`); return i < 0 ? null : args[i + 1]; };
const root = path.resolve(opt('root') ?? '.'), run = opt('run'), source = opt('source');
const R = p => path.join(root, p), sha = b => createHash('sha256').update(b).digest('hex');
const json = p => JSON.parse(fs.readFileSync(R(p), 'utf8'));
const rows = p => fs.existsSync(R(p)) ? fs.readFileSync(R(p), 'utf8').split(/\r?\n/).filter(Boolean).map(JSON.parse) : [];
const body = v => JSON.stringify(v, null, 2) + '\n';
const put = (p, v) => fs.writeFileSync(R(p), typeof v === 'string' ? v : body(v), { flag: 'wx' });
const safe = v => /^[a-z0-9][a-z0-9-]*$/.test(v ?? '');
function checked(argv) {
  const result = spawnSync(process.execPath, argv, { cwd: root, encoding: 'utf8', maxBuffer: 32e6 });
  if (result.status !== 0) throw Error(`${argv.join(' ')}\n${result.stdout}\n${result.stderr}`);
  return { argv, exit_code: result.status, output: result.stdout, stderr: result.stderr };
}
function inactive(name) {
  const state = json(`.autopilot/${name}/state.json`);
  if (!state.paused || Object.values(state.dispatches ?? {}).some(d => d.startedAt && !d.endedAt && (d.attempts ?? d.attempt ?? 0) > 0)) throw Error(`${name} has active or unpaused work`);
  if (fs.existsSync(R(`.autopilot/${name}/controller.lock`))) {
    const lock = json(`.autopilot/${name}/controller.lock`);
    if (!Number.isInteger(lock.pid) || lock.pid <= 0) throw Error(`${name} has an invalid controller lock`);
    try { process.kill(lock.pid, 0); }
    catch (error) { if (error.code === 'ESRCH') return; throw error; }
    throw Error(`${name} still has a live controller`);
  }
}
function verifyFiles(files) {
  for (const [file, hash] of Object.entries(files)) if (!fs.existsSync(R(file)) || sha(fs.readFileSync(R(file))) !== hash) throw Error(`Checkpoint changed: ${file}`);
}
if (!safe(run) || !['export', 'prepare', 'verify'].includes(mode)) throw Error('usage: migrate-checkpoint.mjs export|prepare|verify --run RUN [--source OLD] [--root REPO]');
if (mode === 'export') {
  inactive(run);
  const checks = [checked(['tools/step6-scope.mjs', 'check', '--run', run, '--phase', 'adjudicate'])];
  const files = Object.fromEntries(fs.readdirSync(R('research')).filter(f => f.startsWith(`${run}-`) && selectedInput(f.slice(run.length + 1)))
    .map(f => [`research/${f}`, sha(fs.readFileSync(R(`research/${f}`)))]));
  const manifests = Object.keys(files).filter(p => /-batch-\d+\.pages\.json$/.test(p));
  const pages = manifests.flatMap(p => json(p)), ids = pages.flatMap(p => p.items.map(i => i.id));
  if (!ids.length || new Set(ids).size !== ids.length || new Set(pages.map(p => p.id)).size !== pages.length) throw Error('Empty or overlapping inventory');
  // A merged run owes original review execution, not a renamed success file.
  const importPath = `research/${run}-merge-import.json`;
  const reviewReceipts = [];
  if (fs.existsSync(R(importPath))) {
    const imported = json(importPath); files[importPath] = sha(fs.readFileSync(R(importPath)));
    for (const origin of imported.sources) {
      inactive(origin.run);
      const covered = new Set();
      for (const file of origin.review_receipts) {
        const receipt = json(file);
        if (receipt.run !== origin.run || receipt.role !== 'alpha' || receipt.ok !== true || !Array.isArray(receipt.covers)) throw Error(`Invalid original review: ${file}`);
        if (sha(fs.readFileSync(R(file))) !== imported.source_artifact_hashes[file]) throw Error(`Original review changed: ${file}`);
        receipt.covers.forEach(b => covered.add(String(b)));
        files[file] = sha(fs.readFileSync(R(file))); reviewReceipts.push(file);
      }
      if (Object.keys(origin.batchMap).some(b => !covered.has(b))) throw Error(`Missing review coverage: ${origin.run}`);
    }
  } else throw Error('Only verified merged post-review checkpoints are supported by this migration');
  for (const page of pages) files[`library/${page.category}/${page.id}.md`] = sha(fs.readFileSync(R(`library/${page.category}/${page.id}.md`)));
  for (const id of ids) files[`items/${id}.md`] = sha(fs.readFileSync(R(`items/${id}.md`)));
  const claims = rows(`research/${run}-step6-published-claims.jsonl`);
  for (const claim of claims) files[`items/${claim.id}.md`] = sha(fs.readFileSync(R(`items/${claim.id}.md`)));
  const defects = rows('research/defect-ledger.jsonl').filter(row => row.run === run);
  put(`research/${run}-migration-export.json`, { version: 1, run, at: new Date().toISOString(),
    old_tool_sha256: sha(fs.readFileSync(R('tools/step6-scope.mjs'))), checks, files, manifests,
    item_ids: ids, page_ids: pages.map(p => p.id), review_receipts: reviewReceipts, defects,
    note: 'Actual old routing check; historical model receipts retained as source evidence only.' });
  console.log(`checkpoint-export: ${ids.length} items, ${pages.length / 2} pairs verified`);
} else if (mode === 'prepare') {
  if (!safe(source) || source === run) throw Error('Need a distinct source run');
  inactive(source);
  if (fs.existsSync(R(`.autopilot/${run}`)) || fs.readdirSync(R('research')).some(f => f.startsWith(`${run}-`))) throw Error('Target namespace already exists');
  const exportPath = `research/${source}-migration-export.json`, exported = json(exportPath);
  if (exported.version !== 1 || exported.run !== source || exported.checks?.[0]?.exit_code !== 0 || !exported.review_receipts?.length) throw Error('Invalid source export');
  verifyFiles(exported.files);
  const liveDefects = new Map(rows('research/defect-ledger.jsonl').map(r => [r.defect_id, r]));
  for (const row of exported.defects) if (JSON.stringify(row) !== JSON.stringify(liveDefects.get(row.defect_id))) throw Error(`Source defect changed: ${row.defect_id}`);
  const defectMap = Object.fromEntries(exported.defects.map(row => [row.defect_id, `${run}-import-${row.defect_id}`]));
  const outputs = new Map();
  for (const file of Object.keys(exported.files)) {
    if (!file.startsWith(`research/${source}-`)) continue;
    const suffix = file.slice(`research/${source}-`.length);
    if (!selectedInput(suffix)) continue;
    const text = fs.readFileSync(R(file), 'utf8');
    const migrated = file.endsWith('.json') ? body(migrateJson(JSON.parse(text), source, run, defectMap))
      : file.endsWith('.jsonl') ? text.split(/\r?\n/).filter(Boolean).map(l => JSON.stringify(migrateJson(JSON.parse(l), source, run, defectMap))).join('\n') + '\n' : text;
    outputs.set(`research/${run}-${migrateSuffix(suffix)}`, migrated);
  }
  for (const [file, text] of outputs) if (/-step5-scope-\d+\.json$/.test(file)) {
    const scope = JSON.parse(text), batch = scope.batch;
    if (scope.version === 3) scope.baseline_sha256 = sha(outputs.get(`research/${run}-step5-hash-${batch}-pre-5a.json`));
    else if (scope.version === 2) {
      scope.reader_report_sha256 = sha(outputs.get(`research/${run}-reader-findings-${batch}.json`));
      scope.refuter_report_sha256 = sha(outputs.get(`research/${run}-refute-${batch}.json`));
    } else throw Error(`Unsupported scope ${file}`);
    outputs.set(file, body(scope));
  }
  const importedDefects = exported.defects.map(row => ({ ...migrateJson(row, source, run, defectMap),
    imported_from: { run: source, defect_id: row.defect_id, row_sha256: sha(JSON.stringify(row)) } }));
  for (const [file, text] of outputs) put(file, text);
  put(`research/${run}-import-defects.json`, importedDefects);
  checked(['tools/defect-ledger.mjs', 'append', '--file', `research/${run}-import-defects.json`]);
  // Current tooling verifies every imported decision before writing fresh state.
  checked(['tools/step5-scope.mjs', 'check', '--run', run, '--phase', 'adjudicate']);
  const hashes = Object.fromEntries([...outputs].map(([file]) => [file, sha(fs.readFileSync(R(file)))]));
  put(`research/${run}-checkpoint-import.json`, { version: 1, run, source, workflow_revision: revision,
    authorized_entry: 'post-review', at: new Date().toISOString(), export_path: exportPath,
    export_sha256: sha(fs.readFileSync(R(exportPath))), imported_artifact_hashes: hashes,
    item_ids: exported.item_ids, page_ids: exported.page_ids,
    note: 'Owner-authorized migration of completed authoring/review. No old execution receipt is adopted; full current gates and fresh cross-group closure follow.' });
  fs.mkdirSync(R(`.autopilot/${run}`)); fs.mkdirSync(R(`research/${run}-dispatch`));
  put(`.autopilot/${run}/config.json`, { run, stages: 'tools/autopilot/stages/mathlib.merged.mts' });
  checked(['tools/run-tasks.mjs', '--run', run]);
  checked(['tools/frontier-dependency-ledger.mjs', 'refresh', '--run', run]);
  console.log(`checkpoint-import: prepared ${exported.item_ids.length} items; fresh state, no model receipts copied`);
} else {
  const record = json(`research/${run}-checkpoint-import.json`);
  if (record.version !== 1 || record.run !== run || record.workflow_revision !== revision || record.authorized_entry !== 'post-review') throw Error('Invalid checkpoint identity');
  inactive(record.source);
  if (sha(fs.readFileSync(R(record.export_path))) !== record.export_sha256) throw Error('Source export changed');
  const exported = json(record.export_path);
  verifyFiles(exported.files); verifyFiles(record.imported_artifact_hashes);
  checked(['tools/step5-scope.mjs', 'check', '--run', run, '--phase', 'adjudicate']);
  console.log(`checkpoint-import: ${record.item_ids.length} items verified`);
}
