// Reconcile authentic collected native decisions; never manufacture verdicts.
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { resolve, relative } from 'node:path';
import { spawnSync } from 'node:child_process';
import { activeOwnershipRows } from '../../tools/defect-ledger-ownership.mjs';
import { rowSha256 } from '../../tools/physics-support/defect-ledger-taxonomy.mjs';
const run = 'physics-td-qft-rpm-62-2026-10-14';
const read = path => JSON.parse(readFileSync(path, 'utf8'));
const lines = path => readFileSync(path, 'utf8').split('\n').filter(Boolean).map(JSON.parse);
const sha = value => createHash('sha256').update(value).digest('hex');
const tuple = row => JSON.stringify([row.id, row.model, row.context_sha256]);
const check = (ok, message) => { if (!ok) throw Error(message); };
const ledger = 'research/defect-ledger.jsonl', before = readFileSync(ledger);
const rows = lines(ledger), errors = [], active = activeOwnershipRows(rows, errors);
check(!errors.length, errors.join('\n'));
const adjudicationsPath = `research/${run}-judge-adjudications.jsonl`;
const adjudications = lines(adjudicationsPath);
const frontier = read(`research/${run}-step5-v2/frontier.json`);
const owners = new Map(frontier.batches.flatMap(batch => batch.items.map(id => [id, String(batch.id)])));
const receipts = ['initial', 'repeat'].map(phase => {
  const path = `research/${run}-step5-v2/${phase}-1-collected.json`;
  const receipt = read(path);
  check(receipt.run === run && receipt.phase === phase && !receipt.errors.length && !receipt.inventory_missing.length, `Invalid native collection ${phase}`);
  return { path, receipt };
});
const additions = [], bindings = {};
for (const { path, receipt } of receipts) {
  bindings[path] = sha(readFileSync(path));
  for (const decision of receipt.decisions.filter(row => ['confirmed_fatal', 'confirmed_nonfatal'].includes(row.outcome))) {
    const matches = adjudications.filter(row => tuple(row) === tuple(decision));
    check(matches.length === 1 && matches[0].outcome === decision.outcome && matches[0].reason === decision.reason, `Native decision mismatch ${decision.id}`);
    const original = matches[0];
    check(original.item_sha256 && owners.has(original.id), `Missing original guard/owner ${original.id}`);
    const exact = active.filter(row => row.run === run && (row.adjudication_ref ?? []).some(ref => ref && typeof ref === 'object'
      && ref.item_sha256 === original.item_sha256 && (!ref.id || ref.id === original.id)
      && ref.model === original.model && ref.context_sha256 === original.context_sha256));
    const legacy = active.filter(row => row.run === run && (row.adjudication_ref ?? []).some(ref => ref && typeof ref === 'object'
      && ref.item_sha256 === original.item_sha256 && (!ref.id || ref.id === original.id) && (!ref.model || !ref.context_sha256)));
    const owned = exact.length ? exact : legacy;
    check(owned.length <= 1, `Ambiguous existing ownership ${original.id}`);
    if (owned.length) continue;
    check(receipt.changed.includes(original.id) && receipt.reviews.some(row => row.id === original.id && row.disposition === 'repaired'), `No collected repair ${original.id}`);
    const subtype = original.defect_type === 'logic' ? 'invalid-inference' : original.defect_type === 'dependency_citation' ? 'citation-inaccurate' : 'other';
    additions.push({ defect_id: `${run}-native-${receipt.phase}-r1-${original.id}-${sha(tuple(original)).slice(0, 12)}`,
      run, at: original.at, class: 'accuracy', subclass: subtype,
      ...(subtype === 'other' ? { subclass_note: original.reason } : {}),
      severity: original.outcome === 'confirmed_fatal' ? 'fatal' : 'nonfatal', location: 'statement',
      subject: original.id, batch: owners.get(original.id), caught_at_stage: '5-adjudicate', caught_by_role: 'group-alpha',
      disposition: 'fixed', correction: original.reason,
      adjudication_ref: [{ path: adjudicationsPath, id: original.id, model: original.model, context_sha256: original.context_sha256, item_sha256: original.item_sha256 }],
      evidence: [{ path, note: 'Actual completed native collection authenticates the confirmed decision and repaired review at its historical post-repair guard.' },
        { path: adjudicationsPath, note: 'Exact native model/context/item tuple and actual outcome; no new verdict or independent scientific review is asserted.' }],
    });
  }
}
const aliases = { 'source-misdescription': 'citation-inaccurate', 'undefined-term': 'undefined-notation', 'missing-justification': 'unsupported-inference' };
for (const original of active.filter(row => row.run === run && aliases[row.subclass])) {
  additions.push({ ...original, defect_id: `${original.defect_id}-canonical-taxonomy`, subclass: aliases[original.subclass],
    supersedes: [original.defect_id], metadata_correction: { kind: 'taxonomy-only', original_defect_id: original.defect_id,
      original_row_sha256: rowSha256(original), corrected_fields: ['subclass'] } });
}
const dir = `research/${run}-owner-native-ledger-reconciliation-v2`;
mkdirSync(dir, { recursive: true });
const proposal = `${dir}/rows.proposed.json`;
check(!existsSync(proposal) || JSON.stringify(read(proposal)) === JSON.stringify(additions), 'Preserved proposal differs');
if (!existsSync(proposal)) writeFileSync(proposal, JSON.stringify(additions, null, 2) + '\n');
const summary = { run, ledger_before_sha256: sha(before), additions: additions.length,
  native_decisions: additions.filter(row => !row.metadata_correction).length, taxonomy_corrections: additions.filter(row => row.metadata_correction).length, bindings };
writeFileSync(`${dir}/proposal-summary.json`, JSON.stringify(summary, null, 2) + '\n');
console.log(JSON.stringify({ ...summary, bindings: Object.keys(bindings).length }));
if (process.argv.includes('--apply')) {
  const state = read(`.physics-autopilot/${run}/state.json`);
  check(Object.values(state.dispatches).every(row => !row.startedAt || row.endedAt), 'Native writer active');
  check(sha(readFileSync(ledger)) === summary.ledger_before_sha256, 'Ledger changed before append');
  for (const [path, hash] of Object.entries(bindings)) check(sha(readFileSync(path)) === hash, `Evidence changed ${path}`);
  const result = spawnSync(process.execPath, ['tools/physics-support/defect-ledger.mjs', 'append', '--file', proposal], { stdio: 'inherit' });
  check(result.status === 0, 'Native ledger append failed');
}
