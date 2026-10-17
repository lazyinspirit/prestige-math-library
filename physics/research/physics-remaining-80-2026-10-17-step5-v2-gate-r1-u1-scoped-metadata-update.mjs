import { readFileSync, writeFileSync } from 'node:fs';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { itemHashGuard } from '../tools/physics-support/item-hash.mjs';

// Run only through step5-shared-write-lock.mjs. Read current owners here,
// preserving all other owners' rows and all non-diagnostic plan content.
const run = 'physics-remaining-80-2026-10-17';
const owner = 'step5-v2-gate-r1-u1';
const read = p => JSON.parse(readFileSync(p, 'utf8'));
const write = (p, d) => writeFileSync(p, JSON.stringify(d, null, 2) + '\n');
if (process.argv.includes('--anchor-csm')) {
  const path = `research/${run}-batch-26.proof-contracts.json`;
  const current = read(path);
  const row = current.contracts['def-csm-statistical-state-observable'].boundaries.find(b => b.case === 'empty');
  assert.equal(row.status, 'checked');
  assert(row.evidence.startsWith('For an empty phase space'));
  row.evidence = 'Definition: ' + row.evidence;
  write(path, current);
  const check = spawnSync(process.execPath, ['tools/physics-support/proof-contract.mjs', path, '--strict', '--items', 'def-csm-statistical-state-observable'], {stdio: 'inherit'});
  assert.equal(check.status, 0);
  process.exit(0);
}
const diagnostics = read(`research/${run}-step5-v2/${owner}.gate-diagnostics.json`);
const planPath = 'research/plan-spec.json';
const plan = read(planPath);
const changes = [];
const pairs = [...diagnostics.find(d => d.index === 0).failure.output.matchAll(/^  (\S+) \(([^)]+\.pages\.json)\): same ids,/gm)];
assert.equal(pairs.length, 37);
for (const [, pageId, manifestName] of pairs) {
  const manifest = read(`research/${manifestName}`);
  const source = manifest.find(p => p.id === pageId);
  const target = plan.pages.find(p => p.id === pageId);
  assert(source && target);
  const id = i => typeof i === 'string' ? i : i.id;
  assert.deepEqual(source.items.map(id), target.items.map(id));
  assert.deepEqual(source.requires, target.requires);
  for (let j = 0; j < source.items.length; j++) {
    if (JSON.stringify(source.items[j]) === JSON.stringify(target.items[j])) continue;
    changes.push({ page: pageId, id: id(source.items[j]) });
    target.items[j] = source.items[j];
  }
}

const csmPath = `research/${run}-batch-26.proof-contracts.json`;
const csm = read(csmPath);
const empty = csm.contracts['def-csm-statistical-state-observable'].boundaries.find(b => b.case === 'empty');
assert.equal(empty.status, 'not_applicable');
delete empty.reason;
empty.status = 'checked';
empty.evidence = 'For an empty phase space no probability state exists: countable additivity gives P(empty)=0, incompatible with P(Gamma_N)=1. For any supplied state, an empty measurable cell B has C_B=M^{-1}(empty)=empty and reference size zero. The allowed cell family C may itself be empty; then its entropy assignment is the unique empty function. No logarithm of zero or existence of a density is asserted.';

const tgrPath = `research/${run}-batch-62.proof-contracts.json`;
const tgr = read(tgrPath);
const carrierId = 'def-tgr-stationary-thermal-carriers';
const hash = itemHashGuard(readFileSync(`items/${carrierId}.md`, 'utf8'));
const reasons = {
  one: 'The current Definition fixes dimension four and a three-dimensional rest space with shear coefficient 1/3. Its nonempty open spacetime domain cannot be a singleton, and no variable particle number or indexed one-cell specialization occurs.',
  endpoints: 'All carrier fields are smooth on the open set O, with T>0 and g(xi,xi)<0 throughout. Normalization is pointwise on O; no extension across its boundary, zero-temperature endpoint, null-generator limit or complete orbit is asserted.'
};
for (const row of tgr.contracts[carrierId].boundaries) {
  if (!Object.hasOwn(reasons, row.case)) continue;
  assert.equal(row.status, 'not_applicable');
  const rowHash = createHash('sha256').update(JSON.stringify({case: row.case, status: row.status, text: row.reason})).digest('hex');
  row.template_review = { upheld: true, by: owner, reason: reasons[row.case], item_sha256: hash, row_sha256: rowHash };
}

const emgPath = `research/${run}-batch-23.proof-contracts.json`;
const emg = read(emgPath);
assert(!emg.contracts['ex-emg-xs-two-center'].risk_review);
emg.contracts['ex-emg-xs-two-center'].risk_review = {
  status: 'complete', reviewer: owner,
  notes: 'Current owner review of the complete Example, Facts F1/F2, both Verification steps, harmonic-data Definition and the multicenter Statement and proof. The explicit pair has distance d>0; positive m_1,m_2 make H>1 on the nonempty punctured R3 domain, and each Coulomb term has zero Laplacian away from its center. This is exactly N=2 and sigma=+1 in the supplier. For 0<r<d, the other center lies strictly outside the closed ball, so the supplier applies to the smooth time-slice sphere embedding with outward orientation. Its Hodge pullback is -sigma times the Euclidean normal derivative of H, whose own-center integral is -4pi m_A and other-center integral is zero, giving q_e=m_A; dx0 pulls back to zero, giving q_m=0. All coefficients are time independent. Radii zero and d, coincident centers, zero residues and removed-point extensions are excluded; neither horizon regularity nor stability nor an empirical observation is inferred. This records the current native owner examination, not independent acceptance or new external-source retrieval.'
};

write(planPath, plan);
write(csmPath, csm);
write(tgrPath, tgr);
write(emgPath, emg);
for (const p of [planPath, csmPath, tgrPath, emgPath]) read(p);
console.log(JSON.stringify({ plan_item_mirrors: changes, metadata_contracts: [csmPath, tgrPath, emgPath] }));
const check = spawnSync(process.execPath, ['tools/physics-support/splice-plan.mjs', '--run', run, '--verify'], {stdio: 'inherit'});
assert.equal(check.status, 0, 'current plan/manifest verification failed');
