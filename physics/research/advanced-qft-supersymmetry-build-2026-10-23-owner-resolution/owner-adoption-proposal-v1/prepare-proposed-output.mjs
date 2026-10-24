// Inspection output only. This script cannot write canonical run artifacts.
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '../../..');
const data = JSON.parse(readFileSync(resolve(here, 'adoption-data.json')));
const read = path => JSON.parse(readFileSync(resolve(root, path)));
const ledger = readFileSync(resolve(root, 'research/defect-ledger.jsonl'), 'utf8')
  .split(/\r?\n/).filter(Boolean).map(line => JSON.parse(line));
const ledgerById = new Map(ledger.map(row => [row.defect_id, row]));
const redirects = new Map(data.existing_ledger_successors.filter(op => op.status === 'ready-proposal')
  .map(op => [op.prior_defect_id, op.successor_id]));
const ready = [], held = [], preserved = [], required = new Set();
for (const op of [...data.updates, ...data.additional_touched_source_updates]) {
  const doc = read(op.decision_path), rows = doc.decisions.filter(row => row.obligation === op.obligation);
  if (rows.length !== 1) throw Error(`Lost unique original decision ${op.obligation}`);
  const original = rows[0];
  // A later real Root adoption always wins over this older preparation.
  if (op.from_escalation && original.verdict !== 'escalated') {
    preserved.push({path: op.decision_path, obligation: op.obligation, verdict: original.verdict});
    continue;
  }
  if (op.status !== 'ready-proposal') { held.push(op); continue; }
  const proposed = {...original, ...op.set};
  for (const key of op.remove) delete proposed[key];
  // These are current proposal dispositions; Root must stamp actual carriers.
  delete proposed.subject_sha256;
  delete proposed.context_evidence;
  proposed.evidence = 'Original native observation (historical): ' + original.evidence + '\nLater delegated current-resolution evidence (Root adoption pending): '
    + op.evidence_refs.join('; ') + '. Original native report/findings remain unchanged.';
  proposed.defect_ids = (proposed.defect_ids ?? []).map(id => redirects.get(id) ?? id);
  for (const id of proposed.defect_ids) required.add(id);
  ready.push({path: op.decision_path, obligation: op.obligation, original, proposed,
    root_conditions: op.conditions});
}
const successorDeltas = [];
for (const op of data.existing_ledger_successors) {
  if (op.status !== 'ready-proposal' || !required.has(op.successor_id)) continue;
  const prior = ledgerById.get(op.prior_defect_id);
  if (!prior || prior.subject !== op.subject) throw Error(`Lost exact ledger subject ${op.prior_defect_id}`);
  const {supersedes_add: extra = [], ...fields} = op.set;
  const successor = {...prior, ...fields, defect_id:op.successor_id,
    supersedes:[op.prior_defect_id, ...extra],
    evidence:[...(prior.evidence ?? []), ...op.evidence_refs.map(path => ({path}))]};
  // Catcher and original detection date remain prior historical facts.
  // Actual Root adoption time/approval belongs in Root's eventual record.
  successorDeltas.push({prior_defect_id:op.prior_defect_id, proposed_successor:successor});
}
// Redirect all actual current decision owners of a replaced ID, not just the
// selected escalations. Root applies these exact reference edits atomically.
const referenceUpdates = [];
for (const delta of successorDeltas) {
  const prior = ledgerById.get(delta.prior_defect_id);
  for (const ref of prior.adjudication_ref ?? []) {
    const path = ref.path ?? ref.file;
    if (!path || !ref.obligation || ready.some(row => row.path === path && row.obligation === ref.obligation)) continue;
    const row = read(path).decisions.find(row => row.obligation === ref.obligation);
    if (!row || !(row.defect_ids ?? []).includes(prior.defect_id)) continue;
    referenceUpdates.push({path, obligation:ref.obligation, replace_defect_id:prior.defect_id,
      with_defect_id:delta.proposed_successor.defect_id, root_restamp_required:true});
  }
}
const templates = data.new_ledger_templates.filter(row => required.has(row.template.defect_id));
const result = {version:1, run:data.run, kind:'inspection-only-not-canonical-ready',
  canonical_files_written:false, current_subject_hashes_computed:false,
  summary:{ready_row_proposals:ready.length,held_row_proposals:held.length,
    already_adopted_preserved:preserved.length,ledger_successors:successorDeltas.length,
    new_ledger_templates:templates.length},
  ready_decision_row_proposals:ready, ledger_successor_deltas:successorDeltas,
  additional_reference_redirects:referenceUpdates, new_ledger_templates:templates,
  held_exact_exceptions:held, already_adopted_preserved:preserved,
  root_required:['Inspect actual same-owner science and all row-specific conditions.',
    'Fill new-row actual timestamp and catcher attribution truthfully; templates have null at intentionally.',
    'Keep original ledger rows; append accepted successors, redirect every owner atomically, no duplicate counts.',
    'Rebind current source/contract/manifest, stamp decisions and receipts through ordinary native helpers.',
    'This output does not satisfy gates or authorize canonical writes.']};
const destination = resolve(here, 'proposed-output.json');
writeFileSync(destination, JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify(result.summary));
console.log(destination);
