import { readFileSync, writeFileSync } from 'node:fs';

const scope = JSON.parse(readFileSync('research/frontier-18-step8-scope.json', 'utf8'));
const group = scope.groups.find((g) => g.label === 'd');
const adjudications = readFileSync('research/frontier-18-judge-adjudications.jsonl', 'utf8')
  .split('\n').filter(Boolean).map(JSON.parse);
const defects = readFileSync('research/defect-ledger.jsonl', 'utf8')
  .split('\n').filter(Boolean).map(JSON.parse)
  .filter((r) => r.defect_id?.startsWith('frontier-18-d-step8-'));
const key = (r) => `${r.id}|${r.model}|${r.context_sha256}`;
const byKey = new Map(adjudications.map((r) => [key(r), r]));
const defectByHash = new Map();
for (const d of defects) for (const ref of d.adjudication_ref ?? []) defectByHash.set(ref.item_sha256, d);

const repair = {
  'thm-a-central-product-of-extraspecial-p-groups-is-extraspecial': 'Restored the finite-group hypothesis in L2 before using the central-product order formula.',
  'def-plus-and-minus-type-of-an-extraspecial-p-group': 'Separated the p=2 multiplicative sign rule from the odd-prime exponent convention; at odd p any modular factor forces minus type.',
  'prop-an-automorphism-of-an-extraspecial-p-group-trivial-on-the-frattini-quotient-is-inner': 'Replaced the false universal comparison for general p-groups by the accurate statement that the kernel can be larger.',
  'fs-the-commutator-pairing-needs-no-choice-of-a-central-generator': 'Narrowed the false statement and refutation to odd p and recorded the unique-generator exception at p=2.',
  'thm-classification-of-extraspecial-p-groups-for-odd-p': 'Strengthened the induction hypothesis to include existence and adjusted factor isomorphisms by explicit Heisenberg scaling automorphisms so their centre restrictions agree.',
  'def-special-and-extraspecial-p-groups': 'Restricted the source-comparison claim to the extraspecial/order-p-centre case actually covered by the cited characterization.',
  'lem-the-antidiagonal-subgroup-of-a-central-product-is-a-central-normal-subgroup': 'Corrected the Remark: centrality is needed already for closure of the antidiagonal, not merely for normality.',
  'prop-a-centre-fixing-automorphism-of-an-extraspecial-p-group-preserves-its-commutator-pairing': 'Added the order-form corollary and retained the order hypothesis when invoking the Frattini-kernel theorem.',
  'thm-an-extraspecial-p-group-is-an-internal-central-product-of-subgroups-of-order-p-cubed': 'Made the induction hypothesis cover every clause, applied it to the peeled admissible family, restated L5 exactly, and derived the two-factor kernel directly.',
  'cor-an-extraspecial-p-group-is-a-product-of-two-maximal-abelian-subgroups': 'Restored containment of Z(P) in L4 and weakened the false assertion that every different symplectic decomposition gives a different subgroup pair.',
  'prop-maximal-elementary-abelian-subgroups-distinguish-the-two-extraspecial-two-groups': 'Replaced the construction-based restatement of plus/minus type by the cited square-root-count definition.',
  'def-modular-group-of-order-p-cubed': 'Replaced “smallest nontrivial power map” by the accurate order-p automorphism congruent to the identity modulo p.',
  'thm-classification-of-extraspecial-two-groups': 'Strengthened the induction hypothesis so both invariant values are actually realized.',
  'ex-the-heisenberg-group-at-the-prime-two-is-the-dihedral-group-of-order-eight': 'Added the order-eight classification and used it with the square-root count to identify the group.',
  'ex-a-generating-pair-decomposition-of-an-extraspecial-group-of-order-thirty-two': 'Added the central-product theorem and order formula, then proved the displayed product is extraspecial of order 32.',
  'ex-the-two-extraspecial-groups-of-order-thirty-two': 'Added the central-product theorem and order computation before applying the two-type classification.',
  'thm-a-simple-graph-is-a-tree-exactly-when-every-two-vertices-are-joined-by-a-unique-path': 'Added nonemptiness to the Statement and Given data, excluding the vacuous empty graph.',
  'lem-a-vertex-bijection-is-an-isometry-of-path-metrics-exactly-when-it-is-a-graph-isomorphism': 'Explicitly quantified connected graphs and completed the isometry and graph-isomorphism facts with their preservation biconditionals.',
  'prop-a-cayley-graph-is-regular-and-is-locally-finite-exactly-when-its-defining-subset-is-finite': 'Recast the infinite case in terms of equipotent neighbourhoods and asserted a numerical degree only in the locally finite case.',
  'lem-the-graph-notions-agree-with-the-published-finite-graph-theory': 'Separated finite graph notions from connected/componentwise distance and restored the full cited graph-distance formula.',
  'lem-the-cayley-graph-of-a-finite-group-with-a-finite-generating-set-is-a-finite-simple-graph': 'Put the finite generating-set hypothesis into the Statement/Given data before invoking the path metric.',
  'def-word-length-with-respect-to-a-generating-set': 'Derived finite-word representability directly from the intersection definition of the generated subgroup before taking the minimum.',
  'def-coarsely-dense-subset-and-quasi-isometry': 'Replaced distance-to-a-subset notation by the direct uniformly-close witness quantifier, including the empty-space case.',
  'def-separated-net-in-a-metric-space': 'Defined the net condition by direct witnesses rather than undefined distance to the empty subset.',
  'def-quasi-isometry-type-of-a-finitely-generated-group': 'Added and invoked the hierarchy result taking bilipschitz equivalences to quasi-isometries.',
  'def-quasi-isometry-group-of-a-metric-space': 'Added and invoked the lemma that bounded distance is an equivalence relation compatible with composition.',
  'thm-a-quasi-isometric-embedding-with-coarsely-dense-image-admits-a-quasi-inverse': 'Selected the quasi-inverse witness from the repaired direct coarse-density quantifier, avoiding an unattained infimum.',
  'def-quasi-geodesic-and-quasi-geodesic-metric-space': 'Defined a segment on a closed interval with specified endpoints and used that definition in quasi-geodesicity.',
  'cex-an-infinite-generating-set-destroys-the-comparison-of-word-metrics': 'Replaced the false claim of infinite standard balls by the correct unbounded-diameter contrast.',
  'ex-two-generating-sets-of-a-dihedral-group': 'Derived the cube as two 4-cycles plus a matching and wrote an explicit eight-vertex alternating traversal for the cycle.',
  'fs-all-infinite-finitely-generated-groups-are-quasi-isometric': 'Added reduced-word length and Archimedean dependencies and supplied the uniform finite-fibre growth contradiction.',
  'def-end-and-coend': 'Corrected the Remark to say off-diagonal maps impose ties when present and noted the discrete product case.',
  'thm-the-set-of-natural-transformations-is-an-end': 'Made smallness sufficient rather than necessary and removed the false proper-class conclusion.',
  'def-set-weighted-limit-and-weighted-colimit': 'Corrected the colimit hom-presheaf composition to pass through D-op.',
  'cor-set-weighted-limits-and-colimits-exist-over-a-small-index-category-in-a-complete-or-cocomplete-target': 'Removed the large-index claim that lay outside the page’s own weighted-limit definition.',
  'def-power-and-copower-by-a-set': 'Called a natural transformation a target-category morphism, specializing to a function only in Set.',
  'thm-representable-functors-carry-weighted-limits-to-weighted-limits': 'Replaced literal hom-set equalities by canonical natural bijections.',
  'rem-why-the-enriched-generalisation-cannot-stop-at-conical-limits': 'Removed the universal loss-of-elements claim and recorded Ab with unit Z as the counterexample.',
  'ex-the-end-formula-checked-against-natural-transformations-on-a-small-diagram': 'Corrected |Set(F(1),G(0))| from one to two and propagated the count.',
  'ex-the-evaluation-family-is-dinatural': 'Replaced “no function exists” by the correct absence of a canonical natural off-diagonal extension.',
  'thm-a-weighted-limit-is-an-end': 'Made displayed-end existence equivalent to weighted-limit existence instead of an extra contradictory hypothesis.',
  'cor-ends-commute-with-ends': 'Restored the required functor structures on both chosen inner-end families in the Statement, Given data, and L1.',
  'ex-the-coend-of-a-hom-functor': 'Distinguished the absence of a monoid-supplied conjugation action from the existence of an abstract symmetric-group action with those orbit classes.',
  'thm-a-coend-is-a-colimit-weighted-by-the-hom-bifunctor': 'Corrected the two naturality morphisms so they have the required sources and targets in the product category.',
};

const unique = [...new Map(group.rejections.map((r) => [key(r), r])).values()];
const ours = unique.map((r) => byKey.get(key(r))).filter(Boolean);
const counts = Object.fromEntries(['confirmed_fatal', 'confirmed_nonfatal', 'false_positive']
  .map((o) => [o, ours.filter((r) => r.outcome === o).length]));
const changed = [...new Set(ours.filter((r) => r.outcome === 'confirmed_fatal').map((r) => r.id))].sort();
const esc = (s) => String(s).replace(/\|/g, '\\|').replace(/\s+/g, ' ').trim();

const lines = [];
lines.push('# Frontier 18 — Group d Step 8 adjudication');
lines.push('');
lines.push('Group d owns batches 2 and 9. The scope supplied 202 raw rejection rows; one was an exact duplicate, leaving 201 distinct `(id, model, context_sha256)` keys. Every distinct key is now adjudicated.');
lines.push('');
lines.push(`- ${counts.confirmed_fatal} confirmed-fatal lane findings, covering ${changed.length} repaired items and ${defects.length} exact-hash defect-ledger rows.`);
lines.push(`- ${counts.confirmed_nonfatal} confirmed-nonfatal proof-step gaps or citation omissions; R1 licensed no edits for them.`);
lines.push(`- ${counts.false_positive} false positive; R1 licensed no edit.`);
lines.push('- No cross-group alert was raised or received, and no published item required repair or escalation.');
lines.push('');
lines.push('## Write scope');
lines.push('');
lines.push('- Modified exactly the 44 fatal-licensed item files listed below, all in batches 2 or 9. No item or page was added or deleted, and no page prose was changed.');
lines.push('- Regenerated the owning batch contracts `research/frontier-18-batch-2.proof-contracts.json` and `research/frontier-18-batch-9.proof-contracts.json`, including downstream quote entries affected by changed Definitions or Statements.');
lines.push('- Appended 201 exact-hash adjudications and recorded 44 Group-d defect rows covering all 73 fatal lane findings.');
lines.push('- Twice-touched while converging on precheck/contract closure: `ex-two-generating-sets-of-a-dihedral-group`, `fs-all-infinite-finitely-generated-groups-are-quasi-isometric`, `prop-a-cayley-graph-is-regular-and-is-locally-finite-exactly-when-its-defining-subset-is-finite`, `thm-an-extraspecial-p-group-is-an-internal-central-product-of-subgroups-of-order-p-cubed`, and `thm-classification-of-extraspecial-p-groups-for-odd-p`.');
lines.push('');
lines.push('## Frozen-state and hash evidence');
lines.push('');
lines.push('The engine-created `pre-step8` snapshot was not recreated. Because repairs began before a separate full-hash receipt had been written, the pre-edit files were reconstructed in memory by reversing this lane’s durable `fileChange` hunks in descending rollout order. Every resulting full `itemHashGuard` digest matched the independent 16-hex `pre-step8` touch prefix before it entered the adjudication or defect ledger. The reconstruction covers exactly the 44 edited items and is recorded in `research/frontier-18-alpha-d-step8-decisions.json`.');
lines.push('');
lines.push('## Fatal repairs and rejudge targets');
lines.push('');
lines.push('| item | fatal defect and repair |');
lines.push('|---|---|');
for (const id of changed) {
  const d = defects.find((x) => x.subject === id);
  lines.push(`| \`${id}\` | **${esc(d?.subclass ?? 'accuracy')}** — ${esc(d?.subclass_note ?? '')} ${esc(repair[id] ?? 'The item was repaired and its owning batch contract regenerated.')} |`);
}
lines.push('');
lines.push('These 44 ids, and no unedited page-mates, are the rejudge targets. No repaired item retains a `verification.judge` block.');
lines.push('');
lines.push('## Every rejection and its disposition');
lines.push('');
lines.push('The table includes both copies of the one exact duplicate row so that every raw rejection in the task is visible. They share one adjudication key and one disposition.');
lines.push('');
lines.push('| # | item | lane / context | outcome | evidence and disposition |');
lines.push('|---:|---|---|---|---|');
for (const [i, rejection] of group.rejections.entries()) {
  const a = byKey.get(key(rejection));
  if (!a) throw new Error(`missing adjudication for ${key(rejection)}`);
  const d = defectByHash.get(a.item_sha256);
  let disposition;
  if (a.outcome === 'confirmed_fatal') {
    disposition = `Judge evidence: ${rejection.reason} Alpha: fatal ${a.defect_type}; ${d?.subclass_note ?? 'the objection identifies a load-bearing defect'}. Repaired in \`${rejection.id}\`; ledger \`${d?.defect_id ?? '?'}\`.`;
  } else if (a.outcome === 'false_positive') {
    disposition = `Judge entry: ${rejection.reason} The entry itself accepts the proof and identifies no concrete defect; false positive, no edit.`;
  } else {
    disposition = `Judge concern: ${rejection.reason} This is a local proof-step/citation gap a competent reader closes within 30 seconds, with no false Statement or invalid construction; confirmed nonfatal, no edit under R1.`;
  }
  lines.push(`| ${i + 1} | \`${rejection.id}\` | \`${rejection.model}\` / \`${rejection.context_sha256.slice(0, 12)}\` | \`${a.outcome}\` | ${esc(disposition)} |`);
}
lines.push('');
lines.push('## Contract and gate evidence');
lines.push('');
lines.push('- `precheck`: all 31 changed proof-bearing items pass; the other 13 changed items are definitions or Remarks without phase-format proofs.');
lines.push('- Owning batch contracts: batch 2 strict check 114/114 clean; batch 9 strict check 49/49 clean. All entries in both contracts were regenerated after cited Definitions/Statements changed, so downstream quote hashes are current.');
lines.push('- `citation-fidelity`: 1,127 citations over the two batch contracts; no missing quote and no widening candidate.');
lines.push('- `boundary-audit`: 1,304 boundary rows; no reused template cluster and no contradicted disposition.');
lines.push('- `citecheck`: all 44 changed items clean.');
lines.push('- `depcheck`: no Group d error. The whole-repository gate remains red on 11 errors in other groups (one YAML escape and ten B-leaf dependencies involving the complex-analysis pages); none names a batch-2 or batch-9 item.');
lines.push('- Group-d closure: 201/201 distinct rejection keys present exactly once; all 73 confirmed-fatal adjudication refs have exactly one defect-ledger owner; 44 Group-d ledger rows validate.');
lines.push('- `step8-guard`: whole-run clean, 231/231 changed items licensed from their exact pre-edit states; all 44 Group-d edits are included.');
lines.push('- `step8-scope check`: whole-run clean, zero open rejections and zero cross-group findings.');
lines.push('- `defect-ledger validate --run frontier-18`: Group-d rows are valid. The whole-run completeness check remains red on 122 confirmed-fatal refs from other groups whose adjudicators have not yet appended defect rows; none is a Group-d ref.');
lines.push('');
lines.push('## Remaining gaps');
lines.push('');
lines.push('There is no open Group d mathematical defect, published repair, cross-group alert, or unadjudicated rejection. Whole-run closure still depends on the other group Alphas completing 122 missing defect-ledger links and on the lead resolving the unrelated repository-wide depcheck errors named above.');

writeFileSync('research/frontier-18-alpha-step8-d.md', lines.join('\n') + '\n');
console.log(`wrote research/frontier-18-alpha-step8-d.md (${group.rejections.length} raw rejection rows, ${changed.length} rejudge targets)`);
