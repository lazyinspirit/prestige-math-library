#!/usr/bin/env node
// Root-owned integration, PREPARED ONLY. This file has not been executed.
// node research/...-integrate-boundaries.mjs --run RUN                 # inspect
// node research/...-integrate-boundaries.mjs --run RUN --apply --archive research/NEW-DIR
// Run only after source/metadata writers drain and final formatting is complete.
// This is no validator, acceptance, recertification or gate. It never edits
// sources, findings, decisions, ledgers, run state or owner routing authority.
import { readFileSync, writeFileSync, existsSync, mkdirSync, renameSync, unlinkSync, statSync } from 'node:fs';
import { resolve, relative, dirname, join, isAbsolute } from 'node:path';
import { createHash } from 'node:crypto';
import { itemHashGuard } from '../tools/item-hash.mjs';

const args = process.argv.slice(2);
const value = flag => { const at = args.indexOf(flag); return at < 0 ? undefined : args[at + 1]; };
const fail = message => { throw Error(message); };
const run = value('--run');
if (!/^[A-Za-z0-9_-]+$/.test(run ?? '')) fail('Supply --run RUN');
for (let i = 0; i < args.length; i++) {
  if (['--run', '--archive'].includes(args[i])) { if (!args[++i] || args[i].startsWith('--')) fail('Missing option value'); }
  else if (args[i] !== '--apply') fail(`Unknown option ${args[i]}`);
}
const apply = args.includes('--apply'), root = process.cwd();
const ranges = ['1-4','5-8','9-12','13-16','17-20','21-24','25-28','29-32','33-36','37-40','41-44','45-48','49-52','53-56','57-62'];
const prefix = `research/${run}-owner-step3-gate1-`;
const sha = bytes => createHash('sha256').update(bytes).digest('hex');
const canonical = value => Array.isArray(value) ? value.map(canonical)
  : value && typeof value === 'object' ? Object.fromEntries(Object.keys(value).sort().map(key => [key, canonical(value[key])])) : value;
const equal = (left, right) => JSON.stringify(canonical(left)) === JSON.stringify(canonical(right));
const clone = value => JSON.parse(JSON.stringify(value));
// EXACT native tools/boundary-audit.mjs rowHash field order/text precedence.
const rowHash = row => sha(JSON.stringify({ case: row.case, status: row.status, text: row.reason ?? row.evidence ?? '' }));
const inputs = new Map();
function read(path) {
  if (!inputs.has(path)) inputs.set(path, readFileSync(resolve(root, path)));
  return inputs.get(path);
}
const json = path => JSON.parse(read(path).toString('utf8'));
// Archive the native hash implementation and require its exact row recipe.
// There is no exported rowHash helper in boundary-audit, so fail on drift
// instead of silently substituting another row representation.
read('tools/item-hash.mjs');
const nativeBoundaryTool = read('tools/boundary-audit.mjs').toString('utf8');
const nativeRowRecipe = `const rowHash = r => createHash('sha256').update(JSON.stringify({
  case: r.case, status: r.status, text: r.text,
})).digest('hex');`;
if (!nativeBoundaryTool.includes(nativeRowRecipe)
  || !nativeBoundaryTool.includes("text: b.reason ?? b.evidence ?? ''")) fail('Native boundary row-hash recipe changed; root must reconcile');

const key = row => `${Number(row.batch)}:${row.id}:${row.case}`;
const documents = new Map(), changed = new Map(), operations = [];
function contract(batch) {
  const path = `research/${run}-batch-${batch}.proof-contracts.json`;
  if (!documents.has(path)) {
    const document = json(path);
    if (document.version !== 1 || !Array.isArray(document.scope) || !document.contracts) fail(`Invalid contract ${path}`);
    documents.set(path, document);
  }
  return { path, document: documents.get(path) };
}
function source(id) {
  if (!/^[a-z][a-z0-9-]*$/.test(id ?? '')) fail(`Invalid item id ${id}`);
  return read(`items/${id}.md`).toString('utf8');
}
function bind(row, text) {
  const result = clone(row);
  for (const kind of ['template_review', 'reviewed']) if (result[kind] !== undefined) {
    const marker = result[kind];
    if (!marker || marker.upheld !== true || typeof marker.by !== 'string' || !marker.by.trim()
      || typeof marker.reason !== 'string' || marker.reason.trim().length < 40) fail(`Invalid genuine ${kind} marker on ${row.case}`);
    // reviewed's native contradiction escape does not require hashes, but
    // existing/proposed source bindings are refreshed using the same native
    // guard and row formula, never a raw-source digest or a hash of the marker.
    marker.item_sha256 = itemHashGuard(text);
    marker.row_sha256 = rowHash(result);
  }
  return result;
}
function proposalRows(document, path) {
  if (Array.isArray(document)) return document;
  if (!document || typeof document !== 'object' || (document.run !== undefined && document.run !== run)) fail(`Wrong proposal identity ${path}`);
  const fields = ['patches','rows','boundary_patches','proposals','replacements'].filter(k => Array.isArray(document[k]));
  if (fields.length !== 1) fail(`Expected one explicit row array in ${path}, found ${fields}`);
  return document[fields[0]];
}
const planned = new Set();
for (const range of ranges) {
  const candidates = [`${prefix}${range}-boundary-patches.json`, `${prefix}${range}/boundary-patches.json`].filter(path => existsSync(resolve(root, path)));
  if (candidates.length !== 1) fail(`Range ${range}: expected exactly one proposal carrier, found ${candidates.length}`);
  const proposalPath = candidates[0], proposed = proposalRows(json(proposalPath), proposalPath);
  const intakePath = `research/${run}-owner-step3-gate1-intakes/${range}.json`, intake = json(intakePath);
  if (intake.run !== run || !Array.isArray(intake.boundary_rows)) fail(`Invalid intake ${intakePath}`);
  const allowed = new Map();
  for (const row of intake.boundary_rows) {
    if (allowed.has(key(row))) fail(`Duplicate intake row ${key(row)}`);
    allowed.set(key(row), row);
  }
  const local = new Set();
  for (const patch of proposed) {
    if (!Number.isSafeInteger(Number(patch.batch)) || Number(patch.batch) < 1 || Number(patch.batch) > 62) fail('Invalid proposed batch');
    const identity = key(patch), assigned = allowed.get(identity);
    if (!assigned || local.has(identity) || planned.has(identity)) fail(`Foreign/duplicate proposal ${identity}`);
    if (!patch.before || !equal(patch.before, assigned.before)) fail(`Proposal before differs from original intake ${identity}`);
    const after = patch.after ?? patch.replacement;
    if (patch.after !== undefined && patch.replacement !== undefined && !equal(patch.after, patch.replacement)) fail(`Conflicting after/replacement ${identity}`);
    if (!after || after.case !== patch.case || !['checked','not_applicable'].includes(after.status)) fail(`Invalid replacement row ${identity}`);
    const allowedKeys = new Set(['case','status','reason','evidence','reviewed','template_review']);
    if (Object.keys(after).some(k => !allowedKeys.has(k))) fail(`Unrecognized replacement field ${identity}`);
    if (typeof (after.reason ?? after.evidence) !== 'string' || !(after.reason ?? after.evidence).trim()) fail(`Missing replacement rationale ${identity}`);
    const { path, document } = contract(Number(patch.batch));
    if (!document.scope.includes(patch.id)) fail(`Item outside live contract scope ${identity}`);
    const rows = document.contracts[patch.id]?.boundaries;
    if (!Array.isArray(rows)) fail(`Missing live boundaries ${identity}`);
    const matches = rows.map((row, index) => row.case === patch.case ? index : -1).filter(index => index >= 0);
    if (matches.length !== 1) fail(`Ambiguous/missing live boundary ${identity}`);
    const index = matches[0];
    // Deliberately no hash-stripping or stale-before tolerance here.
    if (!equal(rows[index], patch.before)) fail(`Exact live before guard failed ${identity}; resolve explicitly, do not bypass`);
    rows[index] = bind(after, source(patch.id));
    changed.set(path, document);
    operations.push({ proposal: proposalPath, intake: intakePath, batch: Number(patch.batch), id: patch.id,
      case: patch.case, before: clone(patch.before), after: clone(rows[index]), basis: 'exact regional proposed row' });
    planned.add(identity); local.add(identity);
  }
  if (local.size !== allowed.size) fail(`Range ${range}: proposed ${local.size}/${allowed.size} assigned rows; missing ${[...allowed.keys()].filter(k => !local.has(k)).join(',')}`);
}

// Narrow root-authorized mechanical continuation. No fresh review markers are
// created, and no unrelated stale marker is refreshed. The root owns Beta's
// separate shared-defect history. Dirichlet's own step3.1 is NOT a Beta step.
const betaReceiptPath = `${prefix}beta-canonical.json`;
if (existsSync(resolve(root, betaReceiptPath))) {
  const receipt = json(betaReceiptPath);
  const expectedMap = {'1.1':'1.1','2.1':'2.1','3.1':'1.2','3.2':'2.2','3.3':'3.1'};
  if (receipt.run !== run || receipt.mathematical_claims_changed !== false || !equal(receipt.step_map, expectedMap)) fail('Invalid Beta canonical authority');
  const subjects = [
    {id:'lem-beta-density-normalization', before:receipt.before_raw_sha256, after:receipt.after_raw_sha256},
    {id:'thm-dirichlet-density-normalization', before:receipt.consumer_reference?.before_raw_sha256, after:receipt.consumer_reference?.after_raw_sha256},
  ];
  if (receipt.consumer_reference?.id !== subjects[1].id || !Array.isArray(receipt.contracts)) fail('Invalid Beta consumer authority');
  for (const subject of subjects) {
    const text = source(subject.id), beforePath = join(receipt.archive, `items__${subject.id}.md`), beforeText = read(beforePath).toString('utf8');
    if (sha(Buffer.from(text)) !== subject.after || sha(Buffer.from(beforeText)) !== subject.before) fail(`Beta canonical source guards failed ${subject.id}`);
    for (const path of receipt.contracts) {
      const match = new RegExp(`^research/${run}-batch-([1-9]\\d*)\\.proof-contracts\\.json$`).exec(path);
      if (!match) fail('Foreign Beta canonical contract');
      const {document} = contract(Number(match[1]));
      const rows = document.contracts[subject.id]?.boundaries;
      if (!rows) continue;
      rows.forEach((row, index) => {
        const markers = ['template_review','reviewed'].filter(kind => row[kind] !== undefined);
        if (!markers.length) return; // Root-confirmed safe no-op if absent.
        for (const kind of markers) {
          const marker = row[kind];
          if (![itemHashGuard(beforeText),itemHashGuard(text)].includes(marker.item_sha256)
            || marker.row_sha256 !== rowHash(row)) fail(`Unbound historical Beta marker ${subject.id}:${row.case}`);
        }
        const mapped = clone(row);
        function mapText(value) {
          if (typeof value !== 'string' || !/steps?\b/i.test(value)) return value;
          // For Dirichlet map only an explicit Beta-step reference. Its own
          // simplex proof step labels are left untouched.
          if (subject.id !== 'lem-beta-density-normalization' && !/Beta[^.]*steps?\b/i.test(value)) return value;
          return value.replace(/\b(?:1\.1|2\.1|3\.1|3\.2|3\.3)\b/g, label => expectedMap[label]);
        }
        for (const field of ['reason','evidence']) if (mapped[field] !== undefined) mapped[field] = mapText(mapped[field]);
        for (const kind of markers) mapped[kind].reason = mapText(mapped[kind].reason);
        rows[index] = bind(mapped, text); changed.set(path, document);
        operations.push({ id:subject.id, case:row.case, batch:Number(match[1]), before:clone(row), after:clone(rows[index]),
          basis:'existing genuine review continued through authenticated root mechanical canonical map', authority:betaReceiptPath });
      });
    }
  }
}

const summary = {run, prepared_only:!apply, regions:ranges.length, regional_rows:planned.size,
  mechanical_rows:operations.length-planned.size, contract_files:[...changed.keys()].sort()};
if (!apply) { console.log(JSON.stringify(summary,null,2)); process.exit(0); }
const archiveArg = value('--archive');
if (!archiveArg) fail('--apply requires an unused --archive research/NEW-DIR');
const archive = resolve(root,archiveArg), relArchive = relative(root,archive);
if (isAbsolute(relArchive) || !relArchive.startsWith('research/') || relArchive.split('/').includes('..') || existsSync(archive)) fail('Archive must be a new directory strictly below repository research/');
const lock = resolve(root,`research/${run}-owner-step3-gate1-boundary-integration.lock`);
let locked = false, receipt;
function unchangedInputs() {
  for (const [path, bytes] of inputs) if (sha(readFileSync(resolve(root,path))) !== sha(bytes)) fail(`Input changed since preflight: ${path}`);
}
try {
  unchangedInputs();
  writeFileSync(lock,JSON.stringify({run,pid:process.pid,archive:archiveArg})+'\n',{flag:'wx'}); locked=true;
  mkdirSync(archive);
  const records = [];
  for (const [path,bytes] of inputs) {
    const archived = join(archive,'before',path); mkdirSync(dirname(archived),{recursive:true});
    writeFileSync(archived,bytes,{flag:'wx'});
    records.push({path,before_file:relative(root,archived),raw_sha256:sha(bytes)});
  }
  receipt = {version:1,run,at:new Date().toISOString(),policy:'exact-regional-boundary-row-integration-v1',
    mathematical_acceptance:false,gate_attempt:false,status:'prepared',summary,inputs:records,operations,applied:[]};
  const receiptPath = join(archive,'integration.json');
  writeFileSync(receiptPath,JSON.stringify(receipt,null,2)+'\n',{flag:'wx'});
  unchangedInputs();
  // Each whole-file write is atomic; multi-file completion is journaled.
  // A failure leaves archived originals and applied paths for root recovery,
  // never silently rolls back concurrent work or invents a completed receipt.
  for (const path of [...changed.keys()].sort()) {
    const output = Buffer.from(JSON.stringify(changed.get(path),null,2)+'\n');
    const destination=resolve(root,path), temporary=destination+`.boundary-${process.pid}.tmp`;
    if (sha(readFileSync(destination))!==sha(inputs.get(path))) fail(`Contract changed before write: ${path}`);
    writeFileSync(temporary,output,{flag:'wx',mode:statSync(destination).mode & 0o777});
    renameSync(temporary,destination);
    receipt.applied.push({path,before_raw_sha256:sha(inputs.get(path)),after_raw_sha256:sha(output)});
    receipt.status='partially-applied';writeFileSync(receiptPath,JSON.stringify(receipt,null,2)+'\n');
  }
  receipt.status='applied';writeFileSync(receiptPath,JSON.stringify(receipt,null,2)+'\n');
  console.log(JSON.stringify({...summary,archive:archiveArg,status:'applied'},null,2));
} finally { if(locked) unlinkSync(lock); }
