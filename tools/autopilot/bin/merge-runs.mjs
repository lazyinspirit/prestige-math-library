#!/usr/bin/env node
// Owner-authorized import of completed 6B checkpoints. Sources stay immutable.
// prepare --run NEW --sources OLD1,OLD2; verify --run NEW
import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { buildMapping, remapJson, compositeBaseline } from '../src/merge-import.mjs';
import { itemHashGuard } from '../../item-hash.mjs';
const args = process.argv.slice(2), mode = args[0];
const opt = key => { const i = args.indexOf(`--${key}`); return i < 0 ? null : args[i + 1]; };
const root = path.resolve(opt('root') ?? '.'), run = opt('run');
const R = (...xs) => path.join(root, ...xs);
const safe = value => /^[a-z0-9][a-z0-9-]*$/.test(value ?? '');
const sha = bytes => createHash('sha256').update(bytes).digest('hex');
const read = p => JSON.parse(fs.readFileSync(R(p), 'utf8'));
const lines = p => fs.existsSync(R(p)) ? fs.readFileSync(R(p), 'utf8').split(/\r?\n/).filter(Boolean).map(JSON.parse) : [];
const doc = value => JSON.stringify(value, null, 2) + '\n';
const checked = argv => {
  const result = spawnSync(process.execPath, argv, { cwd: root, encoding: 'utf8', maxBuffer: 16e6 });
  if (result.status !== 0) throw new Error(`${argv.join(' ')}\n${result.stdout}\n${result.stderr}`);
};
const recordPath = `research/${run}-merge-import.json`;
if (!safe(run) || !['prepare', 'verify'].includes(mode)) throw new Error('usage: merge-runs.mjs prepare|verify --run NEW [--sources OLD1,OLD2]');

if (mode === 'verify') {
  const record = read(recordPath);
  if (record.version !== 1 || record.run !== run || record.authorized_entry !== 'post-6b') throw new Error('Invalid import record');
  for (const source of record.sources) {
    const state = read(`.autopilot/${source.run}/state.json`);
    if (!state.paused || Object.values(state.dispatches).some(d => d.startedAt && !d.endedAt && (d.attempts ?? d.attempt ?? 0) > 0))
      throw new Error(`Imported source ${source.run} is active`);
    checked(['tools/step6-scope.mjs', 'check', '--run', source.run, '--phase', 'adjudicate']);
    if (fs.existsSync(R(`research/${source.run}-step6-closure.json`))) checked(['tools/step6-close.mjs', 'verify', '--run', source.run]);
  }
  for (const [file, hash] of Object.entries(record.imported_artifact_hashes))
    if (!fs.existsSync(R(file)) || sha(fs.readFileSync(R(file))) !== hash) throw new Error(`Imported artifact changed: ${file}`);
  for (const [file, hash] of Object.entries(record.source_artifact_hashes))
    if (!fs.existsSync(R(file)) || sha(fs.readFileSync(R(file))) !== hash) throw new Error(`Source evidence changed: ${file}`);
  for (const [id, hash] of Object.entries(record.item_hashes))
    if (itemHashGuard(fs.readFileSync(R('items', `${id}.md`), 'utf8')) !== hash) throw new Error(`Imported item changed: ${id}`);
  const currentDefects = new Map(lines('research/defect-ledger.jsonl').map(row => [row.defect_id, row]));
  for (const [id, hash] of Object.entries(record.source_defect_hashes))
    if (!currentDefects.has(id) || sha(JSON.stringify(currentDefects.get(id))) !== hash) throw new Error(`Source defect evidence changed: ${id}`);
  checked(['tools/step6-scope.mjs', 'check', '--run', run, '--phase', 'adjudicate']);
  checked(['tools/content-policy.mjs', ...record.manifests]);
  for (const file of record.contracts) checked(['tools/proof-contract.mjs', file, '--strict']);
  checked(['tools/validate-plan.mjs', 'research/plan-spec.json']);
  console.log(`merge-import: ${Object.keys(record.item_hashes).length} items verified from ${record.sources.length} source runs`);
} else {
  const names = (opt('sources') ?? '').split(',').filter(Boolean);
  if (names.length < 2 || new Set(names).size !== names.length || names.some(n => !safe(n) || n === run)) throw new Error('Need distinct safe source runs');
  if (fs.readdirSync(R('research')).some(f => f.startsWith(`${run}-`)) || fs.existsSync(R('.autopilot', run)))
    throw new Error('Target must be new; existing target data will not be overwritten');
  const sources = names.map(name => {
    const state = read(`.autopilot/${name}/state.json`);
    if (!state.paused || Object.values(state.dispatches).some(d => d.startedAt && !d.endedAt && (d.attempts ?? d.attempt ?? 0) > 0))
      throw new Error(`Source ${name} must be paused with no unfinished dispatches`);
    checked(['tools/step6-scope.mjs', 'check', '--run', name, '--phase', 'adjudicate']);
    if (fs.existsSync(R(`research/${name}-step6-closure.json`))) checked(['tools/step6-close.mjs', 'verify', '--run', name]);
    const batches = fs.readdirSync(R('research')).filter(f => new RegExp(`^${name}-batch-\\d+\\.pages\\.json$`).test(f))
      .map(file => ({ batch: file.match(/-batch-(\d+)/)[1], pages: read(`research/${file}`) })).sort((a, b) => Number(a.batch) - Number(b.batch));
    if (!batches.length || batches.some(b => b.pages.some(p => !p.items?.length))) throw new Error(`Empty source inventory ${name}`);
    const reviewReceipts = fs.readdirSync(R('research', `${name}-dispatch`))
      .filter(file => /^alpha-6b-.+\.result\.json$/.test(file) && !file.includes('.attempt-'))
      .map(file => ({ file: `research/${name}-dispatch/${file}`, value: read(`research/${name}-dispatch/${file}`) }))
      .filter(({ value }) => value.run === name && value.role === 'alpha' && value.ok === true && Array.isArray(value.covers));
    const reviewedBatches = new Set(reviewReceipts.flatMap(({ value }) => value.covers.map(String)));
    if (batches.some(batch => !reviewedBatches.has(batch.batch))) throw new Error(`Source ${name} lacks successful6B execution coverage`);
    return { run: name, batches, groups: read(`research/${name}-alpha-groups.json`),
      scope: read(`research/${name}-scope-ledger.json`), touches: read(`research/${name}-touches.json`), reviewReceipts };
  });
  const mapping = buildMapping(sources), outputs = new Map(), sourceHashes = {}, importedHashes = {};
  const ledger = lines('research/defect-ledger.jsonl'), importedDefects = [], publishedClaims = [], publishedRepairs = [];
  const pages = [], manifests = [], contracts = [], itemHashes = {}, sourceBaselines = [], sourceDefectHashes = {};
  const put = (file, value) => {
    if (outputs.has(file) || fs.existsSync(R(file))) throw new Error(`Import collision ${file}`);
    outputs.set(file, typeof value === 'string' ? value : doc(value));
  };
  const sourceFile = file => { const bytes = fs.readFileSync(R(file)); sourceHashes[file] = sha(bytes); return bytes.toString('utf8'); };
  for (let index = 0; index < sources.length; index++) {
    const source = sources[index], map = mapping.mappings[index];
    const ownRows = ledger.filter(row => row.run === source.run);
    for (const row of ownRows) sourceDefectHashes[row.defect_id] = sha(JSON.stringify(row));
    const defectMap = Object.fromEntries(ownRows.map(row => [row.defect_id, `${run}-import-${index + 1}-${row.defect_id}`]));
    for (const row of ownRows) importedDefects.push({ ...remapJson(row, map, run, defectMap), imported_from: { run: source.run, defect_id: row.defect_id, row_sha256: sha(JSON.stringify(row)) } });
    for (const suffix of ['scope-ledger.json', 'alpha-groups.json', 'touches.json']) sourceFile(`research/${source.run}-${suffix}`);
    for (const receipt of source.reviewReceipts) sourceFile(receipt.file);
    for (const batch of source.batches) {
      const targetBatch = map.batchMap[batch.batch];
      for (const page of batch.pages) {
        pages.push({ id: page.id, kind: page.kind, batch: targetBatch });
        for (const item of page.items) itemHashes[item.id] = itemHashGuard(fs.readFileSync(R('items', `${item.id}.md`), 'utf8'));
      }
      manifests.push(`research/${run}-batch-${targetBatch}.pages.json`);
      contracts.push(`research/${run}-batch-${targetBatch}.proof-contracts.json`);
    }
    for (const file of fs.readdirSync(R('research')).filter(f => f.startsWith(`${source.run}-`))) {
      const suffix = file.slice(source.run.length + 1);
      if (suffix.endsWith('.task.md')) continue; // current generators own prompts
      let match, renamed;
      if ((match = suffix.match(/^batch-(\d+)(\..+)$/))) renamed = `batch-${map.batchMap[match[1]]}${match[2]}`;
      else if ((match = suffix.match(/^alpha-([a-z]+)-(.+)$/)) && map.groupMap[match[1]]) renamed = `alpha-${map.groupMap[match[1]]}-${match[2]}`;
      else if ((match = suffix.match(/^step6-(scope|hash)-(\d+)(.*)$/))) renamed = `step6-${match[1]}-${map.batchMap[match[2]]}${match[3]}`;
      else if ((match = suffix.match(/^(reader-findings|reader|refute)-(\d+)(\..+)$/))) renamed = `${match[1]}-${map.batchMap[match[2]]}${match[3]}`;
      if (!renamed || renamed.includes('undefined') || !fs.statSync(R('research', file)).isFile()) continue;
      const original = sourceFile(`research/${file}`);
      put(`research/${run}-${renamed}`, file.endsWith('.json') ? remapJson(JSON.parse(original), map, run, defectMap) : original);
    }
    for (const [suffix, destination] of [['step6-published-claims.jsonl', publishedClaims], ['step8-published-repairs.jsonl', publishedRepairs]]) {
      const file = `research/${source.run}-${suffix}`;
      if (fs.existsSync(R(file))) { sourceFile(file); destination.push(...lines(file).map(row => remapJson(row, map, run, defectMap))); }
    }
    sourceBaselines.push({ run: source.run, baseline_commit: source.scope.baseline_commit });
  }
  if (new Set(publishedClaims.map(row => row.id)).size !== publishedClaims.length) throw new Error('Published repair ownership collision; reconcile sources first');
  // Container identities/serialization change during import; mathematical
  // carrier hashes do not. Bind each translated direct scope to its translated
  // baseline envelope, while retaining the original envelope hashes above.
  for (const [file, content] of outputs) {
    const match = file.match(/-step6-scope-(\d+)\.json$/);
    if (!match) continue;
    const scope = JSON.parse(content);
    if (scope.version === 2) {
      for (const [field, suffix] of [['reader_report_sha256', `reader-findings-${match[1]}.json`],
        ['refuter_report_sha256', `refute-${match[1]}.json`]]) {
        const translated = outputs.get(`research/${run}-${suffix}`);
        if (!translated) throw new Error(`Missing imported report ${suffix}`);
        scope[field] = sha(translated);
      }
      outputs.set(file, doc(scope));
      continue;
    }
    if (scope.version !== 3) continue;
    const baseline = outputs.get(`research/${run}-step6-hash-${match[1]}-pre-6b.json`);
    if (!baseline) throw new Error(`Missing imported baseline for ${file}`);
    scope.baseline_sha256 = sha(baseline);
    outputs.set(file, doc(scope));
  }
  const primary = sources[0].touches.snapshots.find(s => s.label === 'pre-author');
  if (!primary) throw new Error('Primary pre-author snapshot missing');
  const overlays = sources.slice(1).map(source => {
    const snapshot = source.touches.snapshots.find(s => s.label === 'pre-author');
    if (!snapshot) throw new Error(`Pre-author snapshot missing ${source.run}`);
    return { primaryRun: sources[0].run, run: source.run, snapshot,
      ids: [...source.batches.flatMap(b => b.pages.flatMap(p => p.items.map(i => i.id))),
        ...lines(`research/${source.run}-step6-published-claims.jsonl`).map(row => row.id)] };
  });
  put(`research/${run}-touches.json`, { snapshots: [compositeBaseline(primary, overlays)], seeded: [] });
  put(`research/${run}-scope-ledger.json`, { run, written: new Date().toISOString(), baseline_commit: sources[0].scope.baseline_commit,
    note: 'Owner-authorized post-6B import. Original review/publication baselines retained in merge-import.json.', allow_in_run_dependencies: true, pages });
  put(`research/${run}-alpha-groups.json`, mapping.groups);
  put(`research/${run}-covers.json`, {});
  put(`research/${run}-step6-published-claims.jsonl`, publishedClaims.map(JSON.stringify).join('\n') + '\n');
  put(`research/${run}-step8-published-repairs.jsonl`, publishedRepairs.map(JSON.stringify).join('\n') + '\n');
  for (const file of contracts) if (!outputs.has(file)) throw new Error(`Missing source contract ${file}`);
  const importedIdSet = new Set(importedDefects.map(row => row.defect_id));
  if (ledger.some(row => importedIdSet.has(row.defect_id))) throw new Error('Imported defect ID collision');
  // Every write creates a new namespaced artifact. No source runtime state,
  // proof, frozen verdict, or model-success receipt is modified or fabricated.
  for (const [file, content] of outputs) { fs.writeFileSync(R(file), content, { flag: 'wx' }); importedHashes[file] = sha(content); }
  if (importedDefects.length) fs.appendFileSync(R('research/defect-ledger.jsonl'), importedDefects.map(JSON.stringify).join('\n') + '\n');
  const record = { version: 1, run, authorized_entry: 'post-6b', prepared_at: new Date().toISOString(),
    sources: mapping.mappings.map((value, index) => ({ ...value, review_receipts: sources[index].reviewReceipts.map(row => row.file) })),
    source_baselines: sourceBaselines, manifests, contracts, item_hashes: itemHashes,
    source_artifact_hashes: sourceHashes, imported_artifact_hashes: importedHashes, source_defect_hashes: sourceDefectHashes,
    note: 'Imported historical review, not new author/adjudicator executions. Fresh combined baseline,6C,6D and all later stages required.' };
  fs.writeFileSync(R(recordPath), doc(record), { flag: 'wx' });
  fs.mkdirSync(R('.autopilot', run));
  fs.writeFileSync(R('.autopilot', run, 'config.json'), doc({ run, stages: 'tools/autopilot/stages/mathlib.merged.mts' }), { flag: 'wx' });
  checked(['tools/run-tasks.mjs', '--run', run]);
  checked(['tools/frontier-dependency-ledger.mjs', 'refresh', '--run', run]);
  console.log(`merge-import: prepared ${mapping.pageCount / 2} pairs/${mapping.itemCount} items; verify before starting`);
}
