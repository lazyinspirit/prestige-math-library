#!/usr/bin/env node
// Prepared for /root only after accepted cycle1 mathematical review.
// This script has NOT been executed by the repair owner.
// No readiness, controlling-digest refresh, recertification or native gate logic.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
const base = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(base, '../..');
const relbase = path.relative(root, base);
const sha = bytes => createHash('sha256').update(bytes).digest('hex');
const absolute = name => { const result = path.resolve(root, name); if (!result.startsWith(root + path.sep)) throw Error('Path outside repository: ' + name); return result; };
const bytes = name => fs.readFileSync(absolute(name));
const read = name => bytes(name).toString('utf8');
const currentHash = name => fs.existsSync(absolute(name)) ? sha(bytes(name)) : null;
const unique = (text, part, label) => { if (!part || text.split(part).length !== 2) throw Error('Exact unique substring guard failed: ' + label); };
if (process.argv.length !== 3 || process.argv[2] !== '--apply-reviewed-root-only') {
  throw Error('Root-only integration requires --apply-reviewed-root-only. Do not execute during delegated proposal preparation.');
}
const guardFile = `${relbase}/root-integration-guards.json`;
if (sha(bytes(guardFile)) !== 'a0b8b9cda5f77d16b412c5f2b4e515f9f236a23244c52ead4daefbe2460118c9') throw Error('Guard package hash changed');
const guard = JSON.parse(read(guardFile));
for (const row of guard.proposal_inputs) if (currentHash(row.path) !== row.sha256) throw Error('Proposal input changed: ' + row.path);
for (const row of guard.actual_preimage_guards) if (currentHash(row.target) !== row.expected_sha256) throw Error('Actual preimage changed or new path occupied: ' + row.target);
const manifest = JSON.parse(read(`${relbase}/integration-manifest.json`));
const planDelta = JSON.parse(read(`${relbase}/plan-delta.json`));
const descriptions = JSON.parse(read(`${relbase}/structured-description-delta.json`));
const outputs = new Map();
for (const row of manifest.files) {
  const proposed = bytes(row.proposed);
  if (sha(proposed) !== row.proposed_raw_sha256 || currentHash(row.target) !== row.before_raw_sha256) throw Error('Manifest guard failed: ' + row.target);
  if (outputs.has(row.target)) throw Error('Duplicate target: ' + row.target);
  outputs.set(row.target, proposed);
}
const planTarget = 'research/plan-machine-learning-track.md';
const planBefore = read(planTarget);
let planAfter = planBefore;
for (const d of planDelta.deltas) {
  if (!['ML-41', 'ML-67'].includes(d.key)) throw Error('Foreign planning key');
  const oldSection = read(d.before_file), newSection = read(d.after_file);
  if (sha(Buffer.from(oldSection)) !== d.before_sha256 || sha(Buffer.from(newSection)) !== d.after_sha256) throw Error('Planning proposal changed: ' + d.key);
  const edit = descriptions.edits.find(e => e.key === d.key);
  if (!edit || !oldSection.includes(edit.old_body) || !newSection.includes(edit.new_body)) throw Error('Plan/description proposals disagree: ' + d.key);
  const begin = planAfter.indexOf(`### ${d.key} —`);
  if (begin < 0) throw Error('Missing owned heading: ' + d.key);
  const following = planAfter.indexOf('\n### ', begin + 1);
  const end = following < 0 ? planAfter.length : following;
  const section = planAfter.slice(begin, end);
  unique(section, edit.old_body, d.key + ' owned semantic body');
  unique(planAfter, edit.old_body, d.key + ' global semantic body');
  // Keep the current heading, dated repair prefix, trailing whitespace and all foreign sections.
  planAfter = planAfter.slice(0, begin) + section.replace(edit.old_body, edit.new_body) + planAfter.slice(end);
}
outputs.set(planTarget, Buffer.from(planAfter));
const specTarget = descriptions.target;
const specBefore = read(specTarget), originalSpec = JSON.parse(specBefore), expectedSpec = structuredClone(originalSpec);
let specAfter = specBefore;
const ownedIDs = new Set(['adaptive-gradient-optimizers', 'mirror-descent-and-adaptive-regularization']);
for (const edit of descriptions.edits) {
  if (!ownedIDs.has(edit.entry_id)) throw Error('Foreign structured entry');
  // Resolve the current entry by its stable ID; array offsets in historical evidence are not authoritative.
  const found = [];
  const visit = (value, trail = []) => { if (!value || typeof value !== 'object') return; if (value.id === edit.entry_id && typeof value.description === 'string') found.push({value, trail}); for (const [key, child] of Object.entries(value)) if (child && typeof child === 'object') visit(child, [...trail, key]); };
  visit(expectedSpec);
  if (found.length !== 1) throw Error('Structured entry ID is not unique: ' + edit.entry_id);
  const {value} = found[0];
  const oldDescription = value.description;
  unique(oldDescription, edit.old_body, edit.entry_id + ' current description semantic body');
  const newDescription = oldDescription.replace(edit.old_body, edit.new_body);
  // Replace only the JSON string token, preserving the current controlling prefix and every foreign field byte.
  const oldToken = JSON.stringify(oldDescription), newToken = JSON.stringify(newDescription);
  unique(specAfter, oldToken, edit.entry_id + ' exact current JSON description token');
  specAfter = specAfter.replace(oldToken, newToken);
  value.description = newDescription;
}
if (JSON.stringify(JSON.parse(specAfter)) !== JSON.stringify(expectedSpec)) throw Error('Foreign structured field mutation detected');
outputs.set(specTarget, Buffer.from(specAfter));
// Check all final guards once more before the first mutation; root must serialize integration with other writers.
for (const row of guard.actual_preimage_guards) if (currentHash(row.target) !== row.expected_sha256) throw Error('Preimage changed during preparation: ' + row.target);
if (read(planTarget) !== planBefore || read(specTarget) !== specBefore) throw Error('Shared planning changed during preparation');
const recordDir = path.join(base, 'root-execution-record');
if (fs.existsSync(recordDir)) throw Error('Execution record already exists; this integration is single-use');
fs.mkdirSync(recordDir);
const records = [];
for (const [target, proposed] of outputs) {
  const targetPath = absolute(target), existed = fs.existsSync(targetPath);
  const prior = existed ? fs.readFileSync(targetPath) : null;
  if (existed) { const archive = path.join(recordDir, 'before', target); fs.mkdirSync(path.dirname(archive), {recursive:true}); fs.writeFileSync(archive, prior, {flag:'wx'}); }
  records.push({target, before_sha256: prior === null ? null : sha(prior), after_sha256: sha(proposed)});
}
fs.writeFileSync(path.join(recordDir, 'intent.json'), JSON.stringify({run:guard.run,batch:75,review:'Cycle1 mathematics accepted by root',scope:'Guarded source/metadata and owned semantic bodies only; root digest refresh, native checks and recertification remain owed',files:records},null,2)+'\n', {flag:'wx'});
for (const [target, proposed] of outputs) { const destination = absolute(target); fs.mkdirSync(path.dirname(destination), {recursive:true}); fs.writeFileSync(destination, proposed); }
for (const row of records) if (currentHash(row.target) !== row.after_sha256) throw Error('Postwrite mismatch: ' + row.target);
fs.writeFileSync(path.join(recordDir, 'completed.json'), JSON.stringify({run:guard.run,batch:75,files:records,readiness_or_gate_credit:false,controlling_digests_refreshed:false},null,2)+'\n', {flag:'wx'});
console.log(`Integrated ${outputs.size} guarded targets. Root controlling-digest refresh, actual checks, drift reconciliation and recertification remain owed.`);
