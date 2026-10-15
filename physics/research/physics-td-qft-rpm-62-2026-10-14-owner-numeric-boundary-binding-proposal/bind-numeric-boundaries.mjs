// ROOT-EXECUTED proposal. Never writes sources, manifests, plans, readiness or gates.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';
import {createHash} from 'node:crypto';
import {isDeepStrictEqual} from 'node:util';

const run = 'physics-td-qft-rpm-62-2026-10-14';
const here = path.dirname(fileURLToPath(import.meta.url));
const root = fs.realpathSync(path.resolve(here, '../..'));
if (fs.realpathSync(process.cwd()) !== root) throw Error('Run from the physics workspace');
const {splitFrontmatter} = await import(pathToFileURL(path.join(root, 'tools/physics-support/facts-block.mjs')));
const {yaml} = await import(pathToFileURL(path.join(root, 'tools/physics-support/pathway-lib.mjs')));
const {isProofBearing} = await import(pathToFileURL(path.join(root, 'tools/proof-bearing.mjs')));
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const hex = value => typeof value === 'string' && /^[0-9a-f]{64}$/.test(value);
const plain = value => value !== null && typeof value === 'object' && !Array.isArray(value);
const fail = message => { throw Error(message); };
const args = process.argv.slice(2);
let receiptPath, receiptHash, apply = false, drained = false, dry = false;
for (let i = 0; i < args.length; i++) {
  const arg = args[i];
  if (arg === '--numeric-receipt' || arg === '--receipt-sha256') {
    const value = args[++i];
    if (!value || value.startsWith('--')) fail(`Missing value for ${arg}`);
    if (arg === '--numeric-receipt') { if (receiptPath) fail('Duplicate numeric receipt'); receiptPath = value; }
    else { if (receiptHash) fail('Duplicate receipt hash'); receiptHash = value; }
  } else if (arg === '--apply') apply = true;
  else if (arg === '--writers-drained') drained = true;
  else if (arg === '--dry-run') dry = true;
  else fail(`Unknown option ${arg}`);
}
if (!receiptPath) fail('Required: --numeric-receipt research/RUN-owner-step2-numeric-metadata/STAMP/receipt.json');
if (apply && dry) fail('Choose --apply or --dry-run');
if (apply && !drained) fail('ROOT --apply requires --writers-drained');
if (receiptHash && !hex(receiptHash)) fail('Invalid --receipt-sha256');

const absolute = relative => {
  const p = path.resolve(root, relative);
  if (!p.startsWith(root + path.sep)) fail(`Outside physics workspace: ${relative}`);
  return p;
};
const localFile = relative => {
  const p = absolute(relative), real = fs.realpathSync(p);
  if (real !== p) fail(`Symlink or nonlocal file refused: ${relative}`);
  if (!fs.statSync(p).isFile()) fail(`Not a regular file: ${relative}`);
  return p;
};
const identity = relative => {
  const s = fs.statSync(localFile(relative), {bigint: true});
  return [s.dev, s.ino, s.size, s.mtimeNs, s.ctimeNs].map(String).join(':');
};
const observed = new Map();
const observe = relative => {
  if (observed.has(relative)) return observed.get(relative).bytes;
  const before = identity(relative), bytes = fs.readFileSync(localFile(relative));
  const after = identity(relative);
  if (before !== after) fail(`Input changed while reading: ${relative}`);
  observed.set(relative, {bytes, identity: after});
  return bytes;
};
const currency = () => {
  for (const [p, record] of observed) {
    if (identity(p) !== record.identity) fail(`Input currency changed: ${p}; rerun from the current root receipt`);
  }
};
receiptPath = path.relative(root, absolute(receiptPath));
const receiptPrefix = `research/${run}-owner-step2-numeric-metadata/`;
if (!receiptPath.startsWith(receiptPrefix) || path.basename(receiptPath) !== 'receipt.json') fail('Numeric receipt must be in the exact run numeric archive');
const receiptBytes = observe(receiptPath), actualReceiptHash = hash(receiptBytes);
if (receiptHash && actualReceiptHash !== receiptHash) fail(`Numeric receipt hash mismatch: ${receiptPath}`);
const receipt = JSON.parse(receiptBytes);
if (receipt.run !== run || receipt.owner !== '/root' || receipt.items !== 686 || receipt.source_bodies_unchanged !== true || receipt.gate_authorization !== false || receipt.independent_acceptance !== false) fail('Unexpected numeric receipt run/root/scope/body assertion');
if (!Array.isArray(receipt.changed_items) || !Array.isArray(receipt.writes)) fail('Numeric receipt needs changed_items and writes arrays');
const writes = new Map();
for (const w of receipt.writes) {
  if (!plain(w) || typeof w.path !== 'string' || !hex(w.before_sha256) || !hex(w.after_sha256) || writes.has(w.path)) fail('Malformed or duplicate numeric write record');
  const mfMatch = new RegExp(`^research/${run}-batch-(\\d+)\\.pages\\.json$`).exec(w.path);
  const allowed = /^items\/[a-z][a-z0-9-]*\.md$/.test(w.path) || w.path === 'research/plan-spec.json' || (mfMatch && Number(mfMatch[1]) >= 1 && Number(mfMatch[1]) <= 64);
  if (!allowed) fail(`Numeric receipt write is outside current run scope: ${w.path}`);
  writes.set(w.path, w);
}

// Resolve current run ownership from canonical manifest records, without loading
// or hashing any unrelated source. Every one of the 64 documents is inventoried.
const ownership = new Map(), contracts = new Map();
for (let batch = 1; batch <= 64; batch++) {
  const mfPath = `research/${run}-batch-${batch}.pages.json`;
  const pages = JSON.parse(observe(mfPath));
  if (!Array.isArray(pages)) fail(`Malformed run manifest: ${mfPath}`);
  for (const page of pages) {
    if (!plain(page) || !Array.isArray(page.items)) fail(`Manifest lacks canonical items inventory: ${mfPath}`);
    for (const item of page.items) {
      if (!plain(item) || typeof item.id !== 'string') fail(`Noncanonical item record: ${mfPath}`);
      if (ownership.has(item.id)) fail(`Duplicate current run source ownership: ${item.id}`);
      ownership.set(item.id, {batch, page: page.id, item});
    }
  }
  const p = `research/${run}-batch-${batch}.proof-contracts.json`;
  const bytes = observe(p), doc = JSON.parse(bytes);
  if (!plain(doc) || !plain(doc.contracts) || !Array.isArray(doc.scope)) fail(`Malformed current proof contract document: ${p}`);
  contracts.set(p, {doc, bytes});
}
if (ownership.size !== receipt.items) fail(`Current run scope ${ownership.size} differs from numeric receipt ${receipt.items}`);
const changes = new Map(), sourceEvidence = [];
for (const change of receipt.changed_items) {
  if (!plain(change) || typeof change.id !== 'string' || !/^[a-z][a-z0-9-]*$/.test(change.id) || change.path !== `items/${change.id}.md` || changes.has(change.id)) fail('Malformed or duplicate numeric changed item');
  const owner = ownership.get(change.id), w = writes.get(change.path);
  if (!owner || !w) fail(`Changed item lacks current run owner/write record: ${change.id}`);
  if (!Number.isInteger(change.after) || change.after < 0 || owner.item.dependency_level !== change.after) fail(`Current manifest level differs from receipt: ${change.id}`);
  const current = observe(change.path);
  const archivedPath = path.join(path.dirname(receiptPath), change.path.replaceAll('/', '__') + '.before');
  const before = observe(archivedPath);
  if (hash(before) !== w.before_sha256 || hash(current) !== w.after_sha256) fail(`Source pre/post bytes do not match numeric receipt: ${change.path}`);
  const oldParts = splitFrontmatter(before.toString('utf8')), newParts = splitFrontmatter(current.toString('utf8'));
  if (!oldParts.fm || !newParts.fm || oldParts.body !== newParts.body) fail(`Numeric source body changed: ${change.id}`);
  const oldFm = yaml().parse(oldParts.fm), newFm = yaml().parse(newParts.fm);
  if (!plain(oldFm) || !plain(newFm) || oldFm.id !== change.id || newFm.id !== change.id || oldFm.status !== 'draft' || newFm.status !== 'draft') fail(`Wrong/non-draft local source identity: ${change.id}`);
  if (Object.hasOwn(change, 'before') !== Object.hasOwn(oldFm, 'dependency_level') || (Object.hasOwn(change, 'before') && !isDeepStrictEqual(oldFm.dependency_level, change.before)) || newFm.dependency_level !== change.after) fail(`Numeric level record mismatch: ${change.id}`);
  const oldRest = {...oldFm}, newRest = {...newFm};
  delete oldRest.dependency_level; delete newRest.dependency_level;
  if (!isDeepStrictEqual(oldRest, newRest)) fail(`Frontmatter changed beyond dependency_level: ${change.id}`);
  const target = `research/${run}-batch-${owner.batch}.proof-contracts.json`;
  const d = contracts.get(target).doc;
  const hasContract = Object.hasOwn(d.contracts, change.id);
  const exemptRemark = newFm.kind === 'remark' && newFm.provenance?.proof === 'not-applicable' && !isProofBearing(newParts.body);
  if ((!hasContract && !exemptRemark) || (hasContract && !d.scope.includes(change.id))) fail(`Current owning contract/scope missing changed source: ${change.id} in ${target}`);
  changes.set(change.id, {...change, ...w, target});
  sourceEvidence.push({id: change.id, path: change.path, archive: archivedPath, before_sha256: w.before_sha256, after_sha256: w.after_sha256, body_exactly_unchanged: true, only_frontmatter_key_changed: 'dependency_level', owning_contract_present: hasContract, contract_absence_exemption: !hasContract && exemptRemark ? 'remark with proof not-applicable and no supplied argument under canonical proof-bearing predicate; no boundary binding fabricated' : null});
}
for (const w of writes.values()) if (w.path.startsWith('items/') && ![...changes.values()].some(c => c.path === w.path)) fail(`Numeric receipt lists an unregistered source write: ${w.path}`);

// Scan JSON string-value spans so only the nominated field's bytes are replaced.
// No JSON reserialization: whitespace, unknown fields and historical worksheets
// remain byte-for-byte identical. JSON.parse above supplies grammar validation.
function stringSpans(text) {
  let i = 0;
  const spans = new Map(), ws = () => { while (/\s/.test(text[i] ?? '') && i < text.length) i++; };
  function string() {
    const start = i++;
    while (i < text.length) {
      if (text[i] === '\\') { i += 2; continue; }
      if (text[i++] === '"') return {start, end: i, value: JSON.parse(text.slice(start, i))};
    }
    fail('Unterminated JSON string');
  }
  function value(keys) {
    ws();
    if (text[i] === '"') { const s = string(); spans.set(JSON.stringify(keys), s); return; }
    if (text[i] === '{') {
      i++; ws(); const seen = new Set();
      if (text[i] === '}') { i++; return; }
      while (true) {
        ws(); if (text[i] !== '"') fail('JSON object key expected');
        const key = string().value;
        if (seen.has(key)) fail(`Duplicate JSON key at ${keys.join('.')}: ${key}`);
        seen.add(key); ws(); if (text[i++] !== ':') fail('JSON colon expected');
        value([...keys, key]); ws(); const sep = text[i++];
        if (sep === '}') return;
        if (sep !== ',') fail('JSON object delimiter expected');
      }
    }
    if (text[i] === '[') {
      i++; ws(); let index = 0;
      if (text[i] === ']') { i++; return; }
      while (true) { value([...keys, index++]); ws(); const sep = text[i++]; if (sep === ']') return; if (sep !== ',') fail('JSON array delimiter expected'); }
    }
    const token = /^(?:true|false|null|-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)/.exec(text.slice(i));
    if (!token) fail(`JSON primitive expected at ${i}`);
    i += token[0].length;
  }
  value([]); ws(); if (i !== text.length) fail('Trailing JSON input');
  return spans;
}
function selfSource(scope, id) {
  const expectedPath = `items/${id}.md`;
  const rootValue = value => {
    if (typeof value !== 'string') fail(`Non-string boundary source_root: ${id}`);
    if (!['physics', '.', root].includes(value)) fail(`Outside/self-source root on ${id}: ${value}`);
  };
  const itemValue = value => { if (value !== id && value !== expectedPath && value !== path.join(root, expectedPath)) fail(`Boundary binds another source on ${id}: ${JSON.stringify(value)}`); };
  for (const k of ['source_root', 'provider_root']) if (Object.hasOwn(scope, k)) rootValue(scope[k]);
  for (const k of ['source_id', 'source_path', 'source_file', 'provider_id', 'provider_path']) if (Object.hasOwn(scope, k)) itemValue(scope[k]);
  for (const k of ['source', 'provider']) if (Object.hasOwn(scope, k)) {
    const v = scope[k];
    if (typeof v === 'string') itemValue(v);
    else if (plain(v)) {
      let identified = false;
      for (const f of ['id', 'path', 'file']) if (Object.hasOwn(v, f)) { itemValue(v[f]); identified = true; }
      for (const f of ['root', 'source_root']) if (Object.hasOwn(v, f)) rootValue(v[f]);
      if (!identified) fail(`Explicit boundary ${k} lacks self-source identity: ${id}`);
    } else fail(`Malformed boundary ${k}: ${id}`);
  }
}
const updates = [], alreadyCurrent = [], replacements = new Map(), bindingErrors = [];
const bindingError = (change, p, boundary, index, code, message) => {
  const source = sourceEvidence.find(s => s.id === change.id);
  bindingErrors.push({code, message, id: change.id, case: boundary.case, boundary_index: index, contract_path: p,
    actual_binding: boundary.case_scope?.current_raw_sha256 ?? null,
    expected_numeric_before: change.before_sha256, expected_numeric_after: change.after_sha256,
    current_case_scope: boundary.case_scope ?? null,
    known_archived_byte_authority: {path: source.archive, sha256: change.before_sha256,
      meaning: 'Verified root numeric preimage; its normative body equals the verified current numeric postimage'},
    unknown_binding_byte_authority: 'Not established by this numeric receipt; scientific owner must identify any older archive and approve a focused metadata refresh'});
};
for (const [p, {doc, bytes}] of contracts) {
  let spans;
  for (const [id, c] of Object.entries(doc.contracts)) {
    const change = changes.get(id);
    if (!change) continue;
    if (change.target !== p) fail(`Changed source contract copied outside its owning batch: ${id} in ${p}`);
    if (!plain(c) || (Object.hasOwn(c, 'boundaries') && !Array.isArray(c.boundaries))) fail(`Malformed boundaries: ${id}`);
    for (const [index, boundary] of (c.boundaries ?? []).entries()) {
      if (!plain(boundary)) fail(`Malformed boundary row: ${id}[${index}]`);
      if (!Object.hasOwn(boundary, 'case_scope')) continue; // unbound manual rows are retained
      const scope = boundary.case_scope;
      if (!plain(scope)) { bindingError(change, p, boundary, index, 'malformed-case-scope', `Malformed case_scope: ${id}/${boundary.case}`); continue; }
      try { selfSource(boundary, id); selfSource(scope, id); }
      catch (error) { bindingError(change, p, boundary, index, 'foreign-or-malformed-self-source', error.message); continue; }
      const old = scope.current_raw_sha256;
      if (!hex(old)) { bindingError(change, p, boundary, index, 'missing-or-invalid-raw-binding', `Missing/invalid boundary raw binding: ${id}/${boundary.case}; root must resolve before numeric rebinding`); continue; }
      if (old === change.after_sha256) { alreadyCurrent.push({id, case: boundary.case, path: p, sha256: old}); continue; }
      if (old !== change.before_sha256) { bindingError(change, p, boundary, index, 'unexpected-raw-binding', `Unexpected boundary raw binding: ${id}/${boundary.case}; found ${old}, expected numeric before ${change.before_sha256} or after ${change.after_sha256}`); continue; }
      spans ??= stringSpans(bytes.toString('utf8'));
      const span = spans.get(JSON.stringify(['contracts', id, 'boundaries', index, 'case_scope', 'current_raw_sha256']));
      if (!span || span.value !== old) fail(`Cannot locate exact boundary hash field: ${id}/${boundary.case}`);
      const row = {id, case: boundary.case, boundary_index: index, path: p, before_sha256: old, after_sha256: change.after_sha256, ...span};
      if (!replacements.has(p)) replacements.set(p, []);
      replacements.get(p).push(row); updates.push(row);
    }
  }
}
if (bindingErrors.length) {
  // Complete selected-source diagnosis, before planning or staging any writes.
  // This report is research evidence only, never an unknown-hash acceptance.
  currency();
  const groups = new Map();
  for (const row of bindingErrors) {
    if (!groups.has(row.id)) groups.set(row.id, {id: row.id, contract_path: row.contract_path,
      expected_numeric_before: row.expected_numeric_before, expected_numeric_after: row.expected_numeric_after,
      known_archived_byte_authority: row.known_archived_byte_authority, cases: [], errors: []});
    const group = groups.get(row.id); group.cases.push(row.case); group.errors.push(row);
  }
  const at = new Date().toISOString(), diagnostic = {version: 1, run, at,
    numeric_receipt: receiptPath, numeric_receipt_sha256: actualReceiptHash,
    numeric_source_count: changes.size, all_numeric_source_body_hash_and_yaml_guards_validated: true,
    sources: sourceEvidence, errors: bindingErrors, groups: [...groups.values()],
    before_any_shared_write: true, shared_writes: false, source_writes: false, native_gate: false,
    unknown_old_hashes_accepted: false,
    required_action: 'Scientific owners resolve every grouped current boundary binding, preserving manual/history fields; then root reruns this same numeric helper'};
  const directory = path.join(here, 'validation-reports'); fs.mkdirSync(directory, {recursive: true});
  const archivePath = path.join(directory, at.replace(/[:.]/g, '-') + '.json');
  fs.writeFileSync(archivePath, JSON.stringify(diagnostic, null, 2) + '\n', {flag: 'wx'});
  fs.writeFileSync(path.join(here, 'numeric-binding-validation-failure.json'), JSON.stringify(diagnostic, null, 2) + '\n');
  console.error(JSON.stringify({run, refused_before_shared_writes: true, unexpected_bindings: bindingErrors.length,
    subjects: groups.size, report: path.relative(root, archivePath), latest_report: path.relative(root, path.join(here, 'numeric-binding-validation-failure.json'))}, null, 2));
  process.exitCode = 1; // one complete grouped refusal, not a fail-fast case loop
  process.exit(1);
}
const plannedWrites = [];
for (const [p, rows] of replacements) {
  const before = contracts.get(p).bytes;
  let text = before.toString('utf8');
  for (const row of [...rows].sort((a, b) => b.start - a.start)) text = text.slice(0, row.start) + JSON.stringify(row.after_sha256) + text.slice(row.end);
  const after = Buffer.from(text);
  const expected = structuredClone(contracts.get(p).doc);
  for (const row of rows) expected.contracts[row.id].boundaries[row.boundary_index].case_scope.current_raw_sha256 = row.after_sha256;
  if (!isDeepStrictEqual(JSON.parse(after), expected)) fail(`Unexpected non-binding JSON change: ${p}`);
  plannedWrites.push({path: p, before, after, before_sha256: hash(before), after_sha256: hash(after)});
}
currency();
const summary = {run, numeric_receipt: receiptPath, numeric_receipt_sha256: actualReceiptHash, numeric_changed_items: changes.size, source_hash_scope: 'Only numeric-receipt changed source bytes and their archived preimages; no unaffected source hashed', boundary_bindings_changed: updates.length, boundary_bindings_already_current: alreadyCurrent.length, contract_documents_changed: plannedWrites.length, source_bodies_unchanged: true, changed_contract_field_only: 'boundaries[].case_scope.current_raw_sha256', source_writes: false, shared_writes: false, gate_execution: false, independent_acceptance: false};
if (!apply) {
  console.log(JSON.stringify({...summary, mode: 'dry-run', writes: plannedWrites.map(({before, after, ...record}) => record), updates: updates.map(({start, end, value, ...row}) => row), alreadyCurrent}, null, 2));
  process.exit(0);
}
// All checks complete before the first shared mutation. Root asserts no writers.
const stamp = new Date().toISOString().replace(/[:.]/g, '-');
const archive = path.join(here, 'root-executions', stamp);
fs.mkdirSync(archive, {recursive: true});
const staged = [], committed = [];
try {
  for (const w of plannedWrites) {
    if (!fs.readFileSync(localFile(w.path)).equals(w.before)) fail(`Contract preimage changed before staging: ${w.path}`);
    fs.writeFileSync(path.join(archive, w.path.replaceAll('/', '__') + '.before'), w.before, {flag: 'wx'});
    w.temp = absolute(w.path) + `.numeric-boundaries-${process.pid}.tmp`;
    fs.writeFileSync(w.temp, w.after, {flag: 'wx'}); staged.push(w.temp);
  }
  currency();
  for (const w of plannedWrites) {
    if (!fs.readFileSync(localFile(w.path)).equals(w.before)) fail(`Contract preimage changed before commit: ${w.path}`);
    fs.renameSync(w.temp, absolute(w.path)); committed.push(w);
  }
  const result = {...summary, mode: 'apply', owner: '/root', at: new Date().toISOString(), writers_drained_asserted: drained, shared_writes: committed.length > 0, sources: sourceEvidence, writes: plannedWrites.map(({before, after, temp, ...record}) => record), updates: updates.map(({start, end, value, ...row}) => row), alreadyCurrent};
  fs.writeFileSync(path.join(archive, 'receipt.json'), JSON.stringify(result, null, 2) + '\n', {flag: 'wx'});
  console.log(JSON.stringify({...summary, shared_writes: committed.length > 0, receipt: path.relative(root, path.join(archive, 'receipt.json'))}, null, 2));
} catch (error) {
  const rollback = [];
  for (const w of [...committed].reverse()) {
    if (!fs.readFileSync(localFile(w.path)).equals(w.after)) { rollback.push({path: w.path, restored: false, reason: 'Concurrent mutation; root manual recovery required'}); continue; }
    const temp = absolute(w.path) + `.numeric-boundaries-rollback-${process.pid}.tmp`;
    fs.writeFileSync(temp, w.before, {flag: 'wx'}); fs.renameSync(temp, absolute(w.path));
    rollback.push({path: w.path, restored: true});
  }
  fs.writeFileSync(path.join(archive, 'failure.json'), JSON.stringify({run, numeric_receipt: receiptPath, error: error.message, rollback, source_writes: false}, null, 2) + '\n', {flag: 'wx'});
  throw error;
} finally {
  for (const p of staged) if (fs.existsSync(p)) fs.unlinkSync(p);
}
