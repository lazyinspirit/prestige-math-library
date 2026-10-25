import fs from 'node:fs';
import assert from 'node:assert/strict';

const run = 'advanced-qft-supersymmetry-build-2026-10-23';
const owner = 'step5-v2-gate-r1-u1';
const read = path => JSON.parse(fs.readFileSync(path, 'utf8'));
const idOf = item => typeof item === 'string' ? item : item.id;
const changes = [];
const pending = new Map();
// The lock runner starts this process only after acquisition. All owning
// documents and manifests are read from their current bytes inside the lock.
const diagnostics = read(`research/${run}-step5-v2/${owner}.gate-diagnostics.json`);
const spliceFailure = diagnostics.find(row => row.index === 0);
assert.equal(spliceFailure.ownerHeld, true);
const allowedPages = new Set([...spliceFailure.failure.output.matchAll(/^  ([a-z0-9-]+) \(/gm)].map(match => match[1]));
assert.equal(allowedPages.size, 45);
const planPath = 'research/plan-spec.json';
const plan = read(planPath);
const byPage = new Map(plan.pages.map(page => [page.id, page]));
for (const name of fs.readdirSync('research').filter(name => name.startsWith(`${run}-batch-`) && name.endsWith('.pages.json')).sort()) {
  for (const page of read(`research/${name}`)) {
    if (!allowedPages.has(page.id)) continue;
    const target = byPage.get(page.id);
    assert(target, `missing plan page ${page.id}`);
    assert.deepEqual(target.items.map(idOf), page.items.map(idOf), `inventory changed: ${page.id}`);
    for (let index = 0; index < page.items.length; index++) {
      const before = target.items[index], after = page.items[index];
      if (JSON.stringify(before) === JSON.stringify(after)) continue;
      const fields = [...new Set([...Object.keys(before), ...Object.keys(after)])].filter(key => JSON.stringify(before[key]) !== JSON.stringify(after[key]));
      if (!fields.length) continue;
      target.items[index] = after;
      changes.push({path: planPath, page: page.id, id: idOf(after), fields});
    }
    if (JSON.stringify(target.requires ?? []) !== JSON.stringify(page.requires ?? [])) {
      assert.equal(page.id, 'qftx-equivariant-symbol-index');
      const additions = page.requires.filter(id => !target.requires.includes(id));
      assert.deepEqual(additions, ['lie-subgroups-actions-and-homogeneous-spaces']);
      assert(target.requires.every(id => page.requires.includes(id)), 'unexpected requires removal');
      // The current source declares the orbit theorem as F4 and a dependency;
      // its existing home page is exactly this added prerequisite page.
      const supplier = 'thm-every-orbit-is-an-injectively-immersed-homogeneous-space';
      const source = fs.readFileSync('items/lem-equivariant-symbol-fixed-inclusion-localization.md', 'utf8');
      assert(source.includes(`  - ${supplier}\n`) && source.includes(`[[${supplier}]]`));
      const supplierPage = fs.readFileSync('library/lie-theory/lie-subgroups-actions-and-homogeneous-spaces.md', 'utf8');
      assert(supplierPage.includes(supplier));
      target.requires = page.requires;
      changes.push({path: planPath, page: page.id, fields: ['requires'], additions});
    }
  }
}
const allIds = plan.pages.flatMap(page => (page.items ?? []).map(idOf));
assert.equal(new Set(allIds).size, allIds.length, 'duplicate plan item');
if (changes.length) pending.set(planPath, plan);

const boundaryReasons = {
  'def-qftx-super-poincare-algebra-4d': 'The detected sums are the two-term column actions on S=C^2 and its conjugate, with flavor range 1,...,N and N>=1. None admits an empty summation index. At N=1 the central basis indexed by I<J is empty and its exterior-square space is explicitly zero; this admitted degeneration is already checked in the separate one and degenerate rows. No empty flavor algebra is claimed.',
  'def-aqft-calibrated-pvalue': 'The Definition requires Theta and its null subset Theta_0 to be nonempty, so the detected probability family is never empty. Existence of any normalized P_theta also excludes an empty data space S. For each observed s, T(s) is real and the inclusive tail [T(s),infinity) is nonempty; it may have Q_0 measure zero, which the zero and endpoints rows already cover. No empty-index calibration is used.'
};
for (const [batch, id] of [[1, 'def-qftx-super-poincare-algebra-4d'], [46, 'def-aqft-calibrated-pvalue']]) {
  const path = `research/${run}-batch-${batch}.proof-contracts.json`;
  const document = read(path);
  const contract = document.contracts[id];
  assert(contract, `missing contract ${id}`);
  const empty = contract.boundaries.filter(row => row.case === 'empty');
  assert.equal(empty.length, 1);
  assert.equal(empty[0].status, 'not_applicable');
  empty[0].reviewed = {upheld: true, by: owner, reason: boundaryReasons[id]};
  changes.push({path, id, fields: ['boundaries/empty/reviewed']});
  if (batch === 1) {
    contract.risk_review = {
      status: 'complete', reviewer: owner,
      notes: 'Current Definition and all seven steps of lem-qftx-super-poincare-graded-jacobi examined. The finite tensor and exterior-square constructions use the displayed bases over the supplied complex field; polarization gives antisymmetric wedge generators, and Lambda^2 C^1=0. Column actions preserve matrix commutators; A^T epsilon+epsilon A=0 for trace-zero A proves equal-chirality equivariance, mixed brackets use the tensor action, and three-odd Jacobi terms vanish because translations and central generators act trivially on odd elements. Star exchanges the spinor factors with the stated parity sign; tau=-star on even and i star on odd squares to identity and preserves brackets. Its fixed translations are skew-Hermitian, while p_mu are star-fixed abstract coordinates; rho(i p_mu)=i P_mu, and P_0=-M gives the positive 2M rest anticommutator. Explicit Pauli matrices give the stated (-,+,+,+) identity. Consulted Martin v7 printed pp.5-6,13-16,18-21, especially (2.24) and (3.1.30)-(3.1.32), and Gates et al. section 3.2 printed pp.62-65, especially (3.2.6)-(3.2.8); Gates normalization and spinor conjugation differ and were not imported. This is a current owner risk review, not independent acceptance or an operator-domain or empirical assertion. The separate unitary representation supplies spectral and adjoint hypotheses.'
    };
    changes.push({path, id, fields: ['risk_review']});
  }
  pending.set(path, document);
}
for (const [path, document] of pending) {
  const next = JSON.stringify(document, null, 2) + '\n';
  if (fs.readFileSync(path, 'utf8') !== next) fs.writeFileSync(path, next);
  assert.deepEqual(read(path), document);
}
console.log(JSON.stringify({changes, checks: 'Current owning files reread under lock; plan item identities and ordering preserved, the single requires addition checked against its actual dependency and supplier home, unique plan IDs checked, and all written JSON reparsed.'}, null, 2));
