import assert from 'node:assert/strict';
import { readFileSync, writeFileSync, readdirSync, mkdtempSync, rmSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { itemHashGuard } from '../tools/physics-support/item-hash.mjs';

const run = 'physics-remaining-80-2026-10-17';
const owner = 'step5-v2-gate-r1-u2';
const base = `research/${run}-step5-v2`;
const read = p => JSON.parse(readFileSync(p, 'utf8'));
const hash = p => createHash('sha256').update(readFileSync(p)).digest('hex');
const lines = p => readFileSync(p, 'utf8').split('\n').filter(Boolean).map(l => JSON.parse(l));
assert.equal(read('.physics-autopilot/step5-shared-write.lock/owner.json').owner, owner);
assert.equal(createHash('sha256').update(JSON.stringify(read(`${base}/gate-1.json`))).digest('hex'),
  'adef42d6ee9cda3397f4275e467fcfdf93dde6ecb5a6333cef69b08580248762');

// Preserve the four already-current boundary reviews. Only these three
// partition rows still bind an earlier item carrier; the arguments were
// examined afresh before entering this critical section.
const contractPath = `research/${run}-batch-62.proof-contracts.json`;
const contracts = read(contractPath);
const id = 'thm-tgr-juttner-partition-and-moments';
const item = readFileSync(`items/${id}.md`, 'utf8');
assert.equal(itemHashGuard(item), read(`${base}/gate-1.json`).before[id]);
const reasons = {
  one: 'The current Statement fixes three momentum coordinates and includes K_1 among orders j=0,1,2,3. Step 1.1 proves positivity and convergence for each order, including j=1, and derives the invariant K_1 normalizer; no singleton family or variable spatial dimension is asserted.',
  'iff-forward': 'The positive parameters and exponential density are hypotheses. Steps 1.1 and 2.1 evaluate their shell and rest partitions; step 3.1 obtains total probability one. The Statement does not claim an equivalence characterizing probability laws from these integrals.',
  'iff-reverse': 'Steps 4.1 through 6.1 compute the current and perfect-fluid stress of the supplied exponential using rest-tetrad symmetry and the divergence identity. Neither the Statement nor the proof reconstructs that density from its moments or claims that every perfect-fluid law has this form.',
};
for (const row of contracts.contracts[id].boundaries) {
  if (!(row.case in reasons)) continue;
  assert.equal(row.status, 'not_applicable');
  row.template_review = {
    upheld: true, by: owner, reason: reasons[row.case],
    item_sha256: itemHashGuard(item),
    row_sha256: createHash('sha256').update(JSON.stringify({
      case: row.case, status: row.status, text: row.reason ?? row.evidence ?? '',
    })).digest('hex'),
  };
}

// This diagnostic assigns global ledger reconciliation, not source ownership.
// Copy authentic existing decisions and their completed author-repair evidence;
// do not create, alter, or rejudge any adjudication tuple or source item.
const adjudicationsPath = `research/${run}-judge-adjudications.jsonl`;
const fatals = lines(adjudicationsPath).filter(a => a.outcome === 'confirmed_fatal');
assert.equal(fatals.length, 36);
const reports = readdirSync(base)
  .filter(n => /^step5-v2-(initial|repeat)-r\d+-u\d+\.json$/.test(n))
  .map(n => ({ path: `${base}/${n}`, data: read(`${base}/${n}`) }));
const existing = lines('research/defect-ledger.jsonl');
const taxonomy = {
  'def-emg-geometry-units': ['citation-inflated', 'definition'],
  'pthm-emg-flat-electromagnetic-compatibility': ['missing-hypothesis', 'statement'],
  'ex-emg-electric-stress': ['false-or-overstrong-statement', 'statement'],
  'ex-emgmath-ml-b02': ['missing-hypothesis', 'statement'],
  'ex-emg-xs-topological-charge': ['citation-inflated', 'facts-block'],
  'thm-emg-xs-kn-escape': ['citation-inaccurate', 'proof-step'],
  'prop-emg-xs-mp-multicenter': ['ill-typed-claim', 'statement'],
  'texp-emg-xs-rotating-ergoregion': ['invalid-inference', 'proof-step'],
  'post-csm-canonical-preparation': ['missing-hypothesis', 'statement'],
  'post-csm-grand-preparation': ['missing-hypothesis', 'statement'],
  'post-csm-isobaric-preparation': ['ill-typed-construction', 'statement'],
  'post-csm-microcanonical-preparation': ['missing-hypothesis', 'statement'],
  'lem-csm-peierls-energy-injection': ['missing-case', 'proof-step'],
  'thm-csm-lattice-dlr-variational-pressure': ['citation-truncated', 'facts-block'],
  'ex-csm-high-low-temperature-regimes': ['missing-hypothesis', 'statement'],
  'thm-csm-dk-invariant-hamiltonian-and-shell-measures': ['missing-hypothesis', 'statement'],
  'thm-csm-dk-exact-bbgky': ['citation-missing', 'facts-block'],
  'thm-csm-dk-dobrushin-and-particle-limit': ['ill-typed-claim', 'statement'],
  'pthm-csm-ideal-gas-ensemble': ['missing-hypothesis', 'statement'],
  'lem-emg-matter-noether-exchange': ['ill-typed-construction', 'statement'],
  'def-qsm-translation-invariant-spin-interaction': ['ill-typed-construction', 'definition'],
  'lem-qsm-models-diagonal-occupation-trace': ['missing-hypothesis', 'statement'],
  'def-qsm-dt-monitored-chain': ['ill-typed-construction', 'definition'],
  'post-qsm-dt-effective-bath': ['missing-hypothesis', 'statement'],
  'ex-qsm-dt-qubit-record-diffusion': ['undefined-notation', 'statement'],
  'lem-tgr-carter-circulation': ['missing-hypothesis', 'statement'],
  'def-tgr-charged-liouville-data': ['missing-hypothesis', 'definition'],
  'lem-tgr-finite-bath-exchange-stability': ['citation-inflated', 'facts-block'],
  'cex-tgr-point-box-collapse': ['citation-truncated', 'facts-block'],
  'lem-emg-coupled-reduced-einstein-evolution': ['invalid-inference', 'proof-step'],
  'prop-emg-local-sobolev-stability-continuation': ['citation-missing', 'proof-step'],
  'post-tgr-exponential-current-and-spectral-thermometer': ['ill-typed-claim', 'statement'],
  'ex-csm-chain-analytic-interacting-model': ['citation-inflated', 'proof-step'],
  'lem-csm-kl-chain-disjoint': ['invalid-inference', 'proof-step'],
  'ex-qsm-nonnormal-tracial-spin-state': ['citation-truncated', 'facts-block'],
};
const tupleKeys = ['id', 'model', 'context_sha256', 'outcome'];
const rows = [];
for (const a of fatals) {
  const matches = reports.filter(r => r.data.decisions?.some(d => tupleKeys.every(k => d[k] === a[k])));
  assert.equal(matches.length, 1, `unique native report for ${a.id}`);
  const report = matches[0];
  const decision = report.data.decisions.find(d => tupleKeys.every(k => d[k] === a[k]));
  assert.equal(decision.reason, a.reason);
  assert.equal(decision.uncertain, false);
  const review = report.data.reviews.filter(r => r.id === a.id);
  assert.equal(review.length, 1);
  assert.equal(review[0].disposition, 'repaired');
  assert.equal(review[0].uncertain, false);
  const defectId = `${run}-step5-${a.step5_phase}-r${a.step5_round}-${a.id}`;
  const prior = existing.find(r => r.defect_id === defectId);
  if (prior) {
    assert(prior.adjudication_ref.some(r => r.id === a.id && r.model === a.model && r.context_sha256 === a.context_sha256 && r.item_sha256 === a.item_sha256));
    continue;
  }
  assert(!existing.some(r => r.run === run && r.adjudication_ref?.some(ref =>
    ref.id === a.id && ref.model === a.model && ref.context_sha256 === a.context_sha256 && ref.item_sha256 === a.item_sha256)));
  let [subclass, location] = taxonomy[a.id];
  if (a.id === 'lem-tgr-carter-circulation' && a.step5_phase === 'repeat') {
    subclass = 'citation-inflated'; location = 'facts-block';
  }
  rows.push({
    defect_id: defectId, run, at: new Date().toISOString(),
    class: 'accuracy', subclass, severity: 'fatal', location,
    subject: a.id, caught_at_stage: '5-adjudicate', caught_by_role: 'final-adjudicator',
    disposition: 'fixed', recorded_by: owner,
    evidence: [{ path: report.path, sha256: hash(report.path),
      note: `Historical native ${a.step5_phase} round ${a.step5_round} decision and completed author repair: ${a.reason}` }],
    adjudication_ref: [{ path: adjudicationsPath, id: a.id, model: a.model,
      item_sha256: a.item_sha256, context_sha256: a.context_sha256 }],
    correction: a.reason,
    original_defect_type: a.defect_type,
    historical_author_review: { path: report.path, post_sha256: review[0].post_sha256,
      review_context_sha256: review[0].review_context_sha256 },
    audit_scope: 'Transcription of the preserved native finding and completed author repair only. Original fatal disposition and evidence remain intact. No new adjudication, independent scientific acceptance, current-context certification, or root-finding closure is claimed.',
  });
}

writeFileSync(contractPath, JSON.stringify(contracts, null, 2) + '\n');
if (rows.length) {
  const temp = mkdtempSync(join(tmpdir(), `${run}-gate-u2-ledger-`));
  try {
    const file = join(temp, 'rows.json');
    writeFileSync(file, JSON.stringify(rows));
    const result = spawnSync(process.execPath, ['tools/physics-support/defect-ledger.mjs', 'append', '--file', file], { stdio: 'inherit' });
    assert.equal(result.status, 0, 'validated append and generated-view refresh');
  } finally { rmSync(temp, { recursive: true, force: true }); }
}
console.log(JSON.stringify({ owner, contract: contractPath, boundary_reviews: Object.keys(reasons), ledger_rows_appended: rows.length, item_writes: 0 }));
