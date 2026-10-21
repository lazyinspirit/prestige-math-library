#!/usr/bin/env node
// Root proposal only. Default mode reads canonical inputs and writes research outputs.
// No gate, validator, digest, acceptance, strategy, risk or boundary synthesis.
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { SOURCE_SECTIONS, factParagraphs, numberedProofSteps, sourceSectionText, splitFrontmatter } from '../../../../tools/facts-block.mjs';

const RUN = 'inverse-problems-knot-theory-all-109-2026-10-19';
const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '../../../..');
const args = process.argv.slice(2);
const value = flag => { const i = args.indexOf(flag); return i < 0 ? undefined : args[i + 1]; };
assert(args.every((x, i) => ['--output-dir', '--apply-decisions'].includes(x) || i > 0 && ['--output-dir', '--apply-decisions'].includes(args[i - 1])), 'Unknown argument');
const read = p => fs.readFileSync(path.resolve(ROOT, p), 'utf8');
const equal = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const own = (o, k) => Object.prototype.hasOwnProperty.call(o, k);
const output = path.resolve(ROOT, value('--output-dir') ?? path.join(HERE, 'current-proposal'));
assert(output.startsWith(HERE + path.sep), 'Output must remain inside this research preparation directory');
if (value('--apply-decisions')) {
  const previewDecision = JSON.parse(read(value('--apply-decisions')));
  assert.notEqual(path.resolve(ROOT, previewDecision.approved_proposal), path.join(output, 'proposal.json'), 'Never overwrite an approved frozen proposal with fresh output');
}
const cache = new Map();
function body(id) {
  if (!cache.has(id)) cache.set(id, splitFrontmatter(read(`items/${id}.md`)).body);
  return cache.get(id);
}
function statement(id) {
  try {
    for (const section of SOURCE_SECTIONS) {
      const quote = sourceSectionText(body(id), section)?.trim();
      if (quote) return { source_section: section, quote };
    }
  } catch (error) { return { error: error.message }; }
  return { error: 'No citable Statement/Statement refuted/Definition/Example/Remark heading' };
}
function currentRows(id) {
  const steps = numberedProofSteps(body(id));
  const ids = new Set(steps.map(s => s.id));
  return steps.map(s => {
    const tokens = new Set();
    for (const t of s.text.matchAll(/\b(?:[Ss]teps?\s+)?(\d+\.\d+)\b|\b([FAL]\d+)\b/g)) {
      if (t[2]) tokens.add(t[2]);
      else if (/^steps?\s/i.test(t[0]) || ids.has(t[1])) tokens.add(t[1]);
    }
    const inputs = [...s.inputs], have = new Set(inputs.map(t => t.replace(/^step\s+/, '')));
    for (const tok of tokens) if (!have.has(tok)) { inputs.push(/^\d/.test(tok) ? `step ${tok}` : tok); have.add(tok); }
    return { id: `step-${s.id.replace('.', '-')}`, step: s.id, claim: s.claim, inputs, tokens };
  });
}
const docs = new Map(), homes = new Map(), missingFiles = [];
for (let batch = 1; batch <= 109; batch++) {
  const pages = JSON.parse(read(`research/${RUN}-batch-${batch}.pages.json`));
  const file = `research/${RUN}-batch-${batch}.proof-contracts.json`;
  try { docs.set(file, JSON.parse(read(file))); } catch (error) { missingFiles.push({ file, error: error.message }); }
  for (const page of pages) for (const item of page.items) {
    assert(!homes.has(item.id), `Duplicate frontier ID ${item.id}`);
    homes.set(item.id, { batch, file, page: page.id });
  }
}
assert.equal(homes.size, 1471, 'Fixed frontier changed; stop rather than expand/rebatch');
const changes = [], decisions = [], unchanged = [], noProofRows = [];
for (const [id, home] of homes) {
  const doc = docs.get(home.file);
  if (!doc) { decisions.push({ id, ...home, reason: 'missing-contract-document' }); continue; }
  let rows;
  try { rows = currentRows(id); } catch (error) { decisions.push({ id, ...home, reason: 'unreadable-current-item', error: error.message }); continue; }
  const before = doc.contracts?.[id];
  if (!before) {
    if (rows.length) decisions.push({ id, ...home, reason: 'missing-proof-contract-entry', current_steps: rows.map(s => s.step), required: 'Root must supply actual classification, boundaries/risk and accepted scope; no generic entry synthesized.' });
    else noProofRows.push(id);
    continue;
  }
  if (!rows.length) {
    noProofRows.push(id);
    if ((before.derivations?.length ?? 0) || (before.routine_steps?.length ?? 0)) {
      decisions.push({ id, ...home, reason: 'old-proof-rows-but-no-current-numbered-proof', old_derivations: before.derivations, old_routine_steps: before.routine_steps, required: 'Root disposition, never automatically delete a proof obligation.' });
      continue;
    }
    // Proof-free entries still need exact citation mirrors for their Facts.
    // Empty use sets are faithful; the proposed checker compares them against
    // actualUses rather than fabricating numbered uses in a Definition.
  }
  const duplicate = rows.filter((s, i) => rows.findIndex(t => t.step === s.step) !== i).map(s => s.step);
  if (duplicate.length) { decisions.push({ id, ...home, reason: 'duplicate-current-step-ids', steps: duplicate }); continue; }
  if (own(before, 'routine_steps') && !Array.isArray(before.routine_steps)) { decisions.push({ id, ...home, reason: 'nonarray-routine-classification' }); continue; }
  const byStep = new Map(rows.map(s => [s.step, s]));
  const staleRoutine = (before.routine_steps ?? []).filter(s => !byStep.has(s.step));
  const routineSteps = new Set((before.routine_steps ?? []).filter(s => byStep.has(s.step)).map(s => s.step));
  // Existing row IDs/history are not claim mirrors. Keep them when the same
  // numbered source step survives; use native regen's ID shape only for new rows.
  const cleanRow = s => ({ ...(before.derivations ?? []).find(t => t.step === s.step), id: (before.derivations ?? []).find(t => t.step === s.step)?.id ?? s.id, claim: s.claim, step: s.step, inputs: s.inputs });
  const routine = (before.routine_steps ?? []).filter(s => byStep.has(s.step)).map(s => ({ ...s, claim: byStep.get(s.step).claim, inputs: byStep.get(s.step).inputs }));
  const citations = [], unresolved = [];
  for (const f of factParagraphs(body(id)).values()) {
    const uses = rows.filter(s => s.tokens.has(f.label)).map(s => s.step);
    for (const source of new Set(f.links)) {
      const claim = statement(source);
      if (claim.error) unresolved.push({ fact: f.label, source, error: claim.error });
      else citations.push({ fact: f.label, source, ...claim, uses });
    }
  }
  const suspicious = [];
  for (let i = 0; i < rows.length; i++) for (const input of rows[i].inputs) {
    if (!/^step\s+/.test(input)) continue;
    const step = input.replace(/^step\s+/, '');
    const at = rows.findIndex(s => s.step === step);
    if (at < 0 || at >= i) suspicious.push({ step: rows[i].step, input, reason: at < 0 ? 'absent-step' : at === i ? 'self-reference' : 'forward-reference', already_in_contract: [...(before.derivations ?? []), ...(before.routine_steps ?? [])].find(s => s.step === rows[i].step)?.inputs?.includes(input) ?? false });
  }
  if (unresolved.length) { decisions.push({ id, ...home, reason: 'unresolved-fact-source-statements', unresolved }); continue; }
  const after = { ...before, citations, derivations: rows.filter(s => !routineSteps.has(s.step)).map(cleanRow) };
  if (own(before, 'routine_steps')) after.routine_steps = routine;
  if (equal(before, after)) { unchanged.push(id); continue; }
  const oldRows = [...(before.derivations ?? []), ...(before.routine_steps ?? [])];
  const rowChanges = {
    new_steps: rows.filter(s => !oldRows.some(t => t.step === s.step)).map(s => s.step),
    removed_derivation_steps: (before.derivations ?? []).filter(s => !byStep.has(s.step)).map(s => s.step),
    removed_routine_steps: staleRoutine.map(s => s.step),
    updated_derivation_steps: after.derivations.filter(s => { const t = (before.derivations ?? []).find(t => t.step === s.step); return t && !equal(s, t); }).map(s => s.step),
    updated_routine_steps: routine.filter(s => !equal(s, (before.routine_steps ?? []).find(t => t.step === s.step))).map(s => s.step),
    citations_before: before.citations?.length ?? 0, citations_after: citations.length,
    citation_mirrors_changed: !equal(before.citations, citations),
  };
  const preserved = Object.keys(before).filter(k => !['citations', 'derivations', 'routine_steps'].includes(k));
  for (const key of preserved) assert(equal(before[key], after[key]), `Nonmirror mutation ${id}:${key}`);
  changes.push({ id, ...home, row_changes: rowChanges, preserved_keys: preserved, requires_explicit_stale_routine_approval: staleRoutine.length > 0, parsed_input_warnings: suspicious, before, after });
}
const extras = [];
for (const [file, doc] of docs) for (const id of Object.keys(doc.contracts ?? {})) if (!homes.has(id)) extras.push({ file, id, disposition: 'Outside1471 frontier; leave unchanged, root decides if historical/context-only.' });
const proposal = { version: 1, run: RUN, kind: 'mechanical-contract-mirror-proposal', frontier_items: homes.size, batches: 109, mathematical_acceptance: false, snapshot_may_precede_writer_drain: true, missing_files: missingFiles, changes, root_decisions: decisions, unchanged: unchanged.length, no_current_proof_rows: noProofRows.length, outside_frontier_entries: extras, limits: 'Mirrors only. Existing strategy/risk/boundaries/owner history preserved exactly; no acceptance inferred. New numbered steps default to derivation as native regen does, never to routine. Root must rerun after writer drain.' };
fs.mkdirSync(output, { recursive: true });
fs.writeFileSync(path.join(output, 'proposal.json'), JSON.stringify(proposal, null, 2) + '\n');
const summary = { run: RUN, frontier_items: homes.size, batches: 109, changed_entries: changes.length, changed_contract_files: new Set(changes.map(s => s.file)).size, root_decisions: decisions.length, missing_files: missingFiles.length, stale_routine_entries: changes.filter(s => s.requires_explicit_stale_routine_approval).length, parsed_input_warning_entries: changes.filter(s => s.parsed_input_warnings.length).length, outside_frontier_entries: extras.length, changes: changes.map(({ before, after, ...rest }) => rest), decisions, limits: proposal.limits };
fs.writeFileSync(path.join(output, 'summary.json'), JSON.stringify(summary, null, 2) + '\n');
console.log(JSON.stringify({ ...summary, changes: undefined, decisions: undefined }, null, 2));

if (value('--apply-decisions')) {
  const decision = JSON.parse(read(value('--apply-decisions')));
  assert.equal(decision.run, RUN); assert.equal(decision.authorized_by, '/root');
  assert.equal(decision.all_mathematical_writers_drained, true);
  assert.equal(decision.frontier_policy, 'preserve-1471-context-only');
  assert(Array.isArray(decision.approved_ids) && new Set(decision.approved_ids).size === decision.approved_ids.length);
  assert(decision.approved_ids.length > 0, 'No empty apply selection');
  assert.notEqual(path.resolve(ROOT, decision.approved_proposal), path.join(output, 'proposal.json'), 'Approved proposal must be a distinct frozen snapshot, not this run output');
  const accepted = JSON.parse(read(decision.approved_proposal));
  assert.equal(accepted.run, RUN);
  const targets = decision.approved_ids.map(id => {
    const actual = changes.find(s => s.id === id), expected = accepted.changes.find(s => s.id === id);
    assert(actual && expected, `No current and approved change for ${id}`);
    assert(equal(actual.before, expected.before) && equal(actual.after, expected.after), `Plan drift for ${id}; regenerate and explicitly approve current mirrors`);
    if (actual.requires_explicit_stale_routine_approval) assert(equal(decision.stale_routine_removals?.[id], actual.row_changes.removed_routine_steps), `Explicit stale routine disposition required: ${id}`);
    if (actual.parsed_input_warnings.length) assert(typeof decision.parsed_input_warning_dispositions?.[id] === 'string' && decision.parsed_input_warning_dispositions[id].trim(), `Root must resolve parser input warnings for ${id}`);
    return actual;
  });
  const archive = path.resolve(ROOT, decision.archive_dir);
  assert(archive.startsWith(HERE + path.sep), 'Archive must stay in this preparation directory');
  assert(!fs.existsSync(archive), 'Use a new immutable archive directory');
  fs.mkdirSync(archive, { recursive: true });
  const selectedDocs = new Map();
  for (const target of targets) {
    if (!selectedDocs.has(target.file)) {
      const raw = read(target.file), doc = JSON.parse(raw), dest = path.join(archive, target.file);
      assert(equal(doc, docs.get(target.file)), `Contract document changed during plan: ${target.file}`);
      fs.mkdirSync(path.dirname(dest), { recursive: true }); fs.writeFileSync(dest, raw, { flag: 'wx' });
      selectedDocs.set(target.file, doc);
    }
    selectedDocs.get(target.file).contracts[target.id] = target.after;
  }
  // Root executes only after the genuine writer drain. No source/manifest/state mutation.
  for (const [file, doc] of selectedDocs) fs.writeFileSync(path.resolve(ROOT, file), JSON.stringify(doc, null, 2) + '\n');
  fs.writeFileSync(path.join(archive, 'root-mirror-integration.json'), JSON.stringify({ run: RUN, authorized_by: '/root', input_decisions: value('--apply-decisions'), ids: targets.map(t => t.id), mathematical_acceptance: false, preserved: 'all nonmirror keys, metadata, risk/boundary history; full before contract documents archived', gates_run: false }, null, 2) + '\n');
  console.log(`Root applied ${targets.length} mirror entries in ${selectedDocs.size} contract documents; no gates or hashes.`);
}
