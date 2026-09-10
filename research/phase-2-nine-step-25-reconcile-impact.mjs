// Reconcile existing evidence, not generate mathematical approvals.
import fs from 'node:fs';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { itemHashGuard } from '../tools/item-hash.mjs';

const run = 'phase-2-nine-step-25';
const read = p => JSON.parse(fs.readFileSync(p, 'utf8'));
const path = `research/${run}-impact.json`;
const receipt = read(path);
const graph = read(process.argv[2]);
assert.deepEqual(graph.required_review, receipt.required_review);
assert.deepEqual(graph.changed, receipt.changed_interfaces);
const routing = spawnSync(process.execPath,
  ['tools/step5-scope.mjs', 'check', '--run', run, '--phase', 'final'], { encoding: 'utf8' });
assert.equal(routing.status, 0, routing.stderr);
const snapshots = read(`research/${run}-touches.json`).snapshots;
const before = snapshots.find(x => x.label === 'pre-author');
const post = snapshots.filter(x => x.label === 'post-5a').at(-1);
const oldPost = read('research/phase-2-hg-prerequisite-touches.json').snapshots.at(-1);
const historyPaths = ['research/phase-2-hg-prerequisite-impact.json', 'research/phase-2-hg-prerequisite-impact-6c.json'];
const histories = historyPaths.map(p => ({ path: p, ...read(p) }));
const ledger = fs.readFileSync('research/published-consumer-supplier-ledger.md', 'utf8');
const arStart = ledger.indexOf('### A-R — Audited and repaired items');
const arEnd = ledger.indexOf('### A-P', arStart);
const ar = ledger.slice(arStart, arEnd > arStart ? arEnd : undefined);
const decisions = new Map();
for (const file of fs.readdirSync('research').filter(f => new RegExp(`^${run}-alpha-[a-z]+-5a-decisions\\.json$`).test(f))) {
  for (const d of read(`research/${file}`).decisions) {
    if (d.obligation?.startsWith('authored:')) decisions.set(d.id, { ...d, path: `research/${file}` });
  }
}
const counts = { current_review: 0, unchanged_historical: 0, subsequent_repair: 0, preserved_debt: 0, cw_interface: 0 };
const legacyPath = `research/${run}-step5-scope-17.json`;
const legacy = read(legacyPath);
assert.equal(legacy.version, 2);
for (const id of legacy.untouched) {
  assert.ok(legacy.opened.includes(id));
  assert.ok(legacy.reader_report_sha256 && legacy.refuter_report_sha256);
  decisions.set(id, { path: legacyPath, obligation: `legacy-reviewed:17:${id}`, verdict: 'accepted',
    evidence: `Imported unchanged-item reader/refuter coverage, validated by final routing; original reader ${legacy.reader_report_sha256}, refuter ${legacy.refuter_report_sha256}` });
}
const cw = new Set([
  'lem-any-homology-theory-computes-relative-cell-groups-from-its-coefficient-group',
  'lem-any-homology-theory-has-a-cellular-chain-complex-on-a-cw-pair',
  'lem-comparison-maps-between-homology-theories-extend-over-one-skeleton-stage',
  'lem-cw-homotopy-equivalence-inclusions-are-strong-deformation-retracts',
  'lem-finite-dimensional-skeletal-exactness-computes-axiomatic-homology',
  'lem-oriented-simplex-comparison-for-an-ordinary-homology-theory',
  'lem-the-skeletal-telescope-projects-by-a-homotopy-equivalence-of-pairs',
  'prop-ordinary-homology-theories-have-mayer-vietoris-for-cw-covers',
  'prop-relative-cw-inclusions-are-cofibrations',
  'prop-unreduced-pair-and-reduced-quotient-axioms-are-equivalent-on-cw-pairs',
]);
const debt = new Set(['cor-bull-free-graphs-have-the-erdos-hajnal-property-with-exponent-one-quarter', 'def-c-zero-and-ell-infinity']);
receipt.reviewer = 'root — reconciliation of attributed completed reviews, 2026-09-10';
receipt.scope_note = 'This receipt consolidates existing current-run reviews and historical impact/repair evidence. It is not 5,483 new proof audits, independent judgment, or closure of existing published prerequisite debt. No mathematical content is edited by this reconciliation. The five existing changed supplier interfaces were reconciled by the completed Step-5b lead; the original pre-author baseline is retained.';
receipt.dispositions = receipt.required_review.map(id => {
  const guard = itemHashGuard(fs.readFileSync(`items/${id}.md`, 'utf8'));
  const impacts = graph.impacts.filter(i => i.required_review.includes(id));
  const sources = impacts.map(i => i.source);
  const direct = impacts.filter(i => i.direct_citation_consumers.some(c => c.id === id)).map(i => i.source);
  const d = decisions.get(id);
  const common = { id, item_guard: guard, changed_suppliers: sources, direct_changed_suppliers: direct };
  if (d) {
    assert.equal(post.hashes[id], guard.slice(0, 16), `${id}: changed after reviewed snapshot`);
    assert.ok(['accepted', 'repaired', 'confirmed_fatal', 'confirmed_nonfatal'].includes(d.verdict), `${id}: unresolved review`);
    counts.current_review++;
    return { ...common, status: 'still-licensed', review_ref: d.path, obligation: d.obligation,
      notes: `Current authored review ${d.obligation} is retained at its verified post-5a mathematical hash; final routing validates its composite binding and closed defects. Its recorded evidence: ${d.evidence}. Suppliers in this impact window: ${sources.join(', ')}. This reuses the completed review, not a new verdict.` };
  }
  assert.ok(impacts.every(i => before.surfaces[i.source]), `${id}: new supplier requires separate consumer evidence`);
  const prior = histories.map(h => ({ path: h.path, reviewer: h.reviewer, row: h.dispositions.find(d => d.id === id) })).filter(h => h.row);
  if (!prior.length) {
    assert.ok(cw.has(id), `${id}: uncovered by reconciliation`);
    assert.ok(sources.every(s => ['def-metric-continuity', 'thm-metric-continuity-characterisations'].includes(s)));
    counts.cw_interface++;
    return { ...common, status: 'not-load-bearing', review_ref: 'research/uc34-2026-09-09-general-cw-hep-astra-2.md',
      notes: `The metric-continuity impact on ${id} does not change the supplied CW HEP interface. The recorded general-CW repair explicitly preserves the full choice-free HEP contract, uses ordinary-product exponential-law continuity, and gives deterministic skeletal gluing. Root read that complete receipt and the norm-continuity bridge: its L12/step 4.1 use Lipschitz => epsilon-delta continuity, not sequential continuity => continuity. Thus the new Countable-Choice qualifier is not consumed on this bridge. Existing homology/HEP audit debt is not discharged by this bounded change review.` };
  }
  const unchanged = oldPost.hashes[id] === guard.slice(0, 16);
  let supplement = '';
  if (unchanged) counts.unchanged_historical++;
  else {
    const repair = ar.split('\n').find(l => l.startsWith(`| \`${id}\` |`));
    if (repair) { counts.subsequent_repair++; supplement = ` Later reconciled repair evidence: ${repair}`; }
    else {
      assert.ok(debt.has(id), `${id}: changed historical consumer lacks repair evidence`);
      counts.preserved_debt++;
      supplement = id === 'def-c-zero-and-ell-infinity'
        ? ' Its separately recorded LUB repair establishes bounded-sequence supremum existence; the complex-scalar declaration defect remains U-C in the canonical ledger. This change review does not close it.'
        : ' Its separately recorded empty-graph repair retains the nonempty implication. The Recorded perfect-graph prerequisite debt remains A-P in the canonical ledger; this impact receipt does not certify that proof closure.';
    }
  }
  return { ...common, status: prior.every(h => h.row.status === 'not-load-bearing') ? 'not-load-bearing' : 'still-licensed',
    historical_reviews: prior.map(h => ({ path: h.path, reviewer: h.reviewer, status: h.row.status })),
    notes: `Attributed prior impact review for ${id}; ${unchanged ? 'current mathematical hash matches the HG post-6b snapshot' : 'subsequent changes are separately accounted for below'}. ` +
      prior.map(h => `${h.path} (${h.reviewer}): ${h.row.notes}`).join(' ') + supplement +
      ` Current changed-source cone: ${sources.join(', ')}. No newly added supplier reaches this published consumer. The completed current Step-5b lead reconciles the retained existing supplier clauses; this is bounded evidence reconciliation, not whole-proof approval.` };
});
receipt.reconciliation_counts = counts;
fs.writeFileSync(path, JSON.stringify(receipt, null, 2) + '\n');
console.log(JSON.stringify(counts));
