# Shard 10 repair report

Assigned items: 31; decisions: accept 16, defer 1, repair 14.
Maintenance items: 30; decisions: accept 7, repair 23.

## Assigned item dispositions

| Position | ID | Decision | Exact unresolved obligation |
|---:|---|---|---|
| 10 | `thm-vector-fields-form-a-lie-algebra` | repair | — |
| 20 | `cor-parameter-ideal-multiplicity-positive` | repair | — |
| 30 | `thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle` | accept | — |
| 40 | `thm-independent-random-elements-have-product-joint-law` | accept | — |
| 50 | `thm-tonelli-theorem-for-sigma-finite-product-spaces` | repair | — |
| 60 | `def-expectation-of-a-nonnegative-or-integrable-random-variable` | accept | — |
| 70 | `thm-conditional-expectation-is-the-l2-orthogonal-projection` | accept | — |
| 80 | `thm-integral-triangle-inequality` | accept | — |
| 90 | `def-conditional-expectation-for-nonnegative-variables` | accept | — |
| 100 | `thm-increasing-simple-approximation-of-a-nonnegative-measurable-function` | repair | — |
| 110 | `cor-additivity-of-the-nonnegative-lebesgue-integral` | repair | — |
| 120 | `prop-the-nonnegative-integral-agrees-with-the-simple-integral` | repair | — |
| 130 | `prop-an-equidimensional-c1-map-sends-null-sets-to-null-sets` | repair | — |
| 140 | `thm-tonelli-and-fubini-for-completed-product-measures` | repair | — |
| 150 | `def-quadratic-casimir-element` | repair | — |
| 160 | `thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals` | repair | — |
| 170 | `thm-total-variation-of-an-absolutely-continuous-signed-or-complex-measure-has-density-the-absolute-value` | repair | — |
| 180 | `cor-the-bull-graph-has-the-erdos-hajnal-property` | defer | Substantial bull-free two-narrow -> basic bull-free/substitution -> weak-perfection/SPGT proof chain remains unresolved per agent08. |
| 190 | `thm-every-smooth-vector-bundle-admits-a-smooth-bundle-metric` | repair | — |
| 200 | `fs-unsolvable-word-problem-means-no-word-can-be-decided` | repair | — |
| 210 | `thm-affine-variety-product-coordinate-ring` | accept | — |
| 220 | `lem-polynomial-space-oracle-absorption` | accept | — |
| 230 | `def-efficient-universal-simulation-with-clock` | accept | — |
| 240 | `cor-module-finite-affine-map-quasi-finite` | accept | — |
| 250 | `lem-convolution-is-independent-of-the-chosen-borel-representatives` | repair | — |
| 260 | `cex-gauss-sum-sign-is-not-canonical-without-conventions` | accept | — |
| 270 | `def-cyclic-subspace-vector-and-vector-annihilator` | accept | — |
| 280 | `def-kernel-and-image-of-a-linear-map` | accept | — |
| 290 | `ex-integer-determinant-two-is-invertible-over-q-not-z` | accept | — |
| 300 | `fs-complexification-doubles-finite-dimension` | accept | — |
| 310 | `prop-induced-quotient-operator-is-well-defined` | accept | — |

## Consumer closure and checks

The additional Lie-theory wave repaired `lem-an-invariant-polynomial-is-determined-by-its-cartan-restriction`, `lem-regular-semisimple-elements-form-a-dense-open-subset`, `thm-symmetric-invariants-restrict-to-weyl-invariants`, `thm-harish-chandra-isomorphism-for-the-center`, `thm-enveloping-algebra-is-free-over-its-center`, and `prop-harish-chandra-map-is-injective` to state the exact inherited AC premise. The first lemma now has a direct finite-root exponential-chart/inverse-function proof, independent of dense-regular conjugacy. The dense-regular lemma uses the published full Cartan-conjugacy proof's explicit strongly-regular discriminant clauses, avoiding the former undeclared constructible-image step. The freeness proof removes unused HC/Chevalley dependencies but inherits AC through Kostant harmonic decomposition. The separately reserved highest-weight scalar lemma has a proof-only PBW weight-zero repair: non-Cartan terms have a right raising factor that annihilates the highest vector. Its claim is unchanged.

The six Lie claim-change impact files trace respectively 28, 29, 26, 25, 0, and 0 direct/indirect item descendants in the union of frozen-before and current reference graphs. Every direct affected use is repaired: agent01's Weyl-extension lemma, agent05's central-character corollary, agent07's center corollary and sl3 example, plus this shard's Chevalley restriction, HC isomorphism, HC injectivity and freeness. The historical dense-regular -> injectivity edge was removed by the independent proof; historical HC/Chevalley -> freeness edges were removed because that proof uses Kostant directly. Owner notifications and exact direct-use dispositions are in the impact files.

Original or downstream claim changes are recorded in `agent-10-events.jsonl`. Each `agent-10-impact-ID.json` includes before/current claim hashes, all direct and indirect item consumers (published and draft), all internal reference/dependency edges, exact edge-use excerpts, and direct-use dispositions. All identified affected direct consumers were repaired or shown already to carry the needed premise; restored local Lie-bracket claims have no new interface change. Root owns page/plan metadata and was notified of all required changes.

Focused precheck passed on all 35 changed proof items; focused rendercheck passed on all 37 changed assigned/maintenance files. `git diff --check` passed. Global `node tools/depcheck.mjs --pending-audit-ok` reports 25 shared repository hard errors, none naming a shard10 item; root confirmed the Harish–Chandra/Verma/Category O page cycle already existed in the reconstructed frozen-before state. The Boone page cycle exposed by the necessary Novikov–Boone dependency was closed by root page rehome. No independent judge or final audited stamp is claimed.

## Remaining substantial prerequisites

- `cor-the-bull-graph-has-the-erdos-hajnal-property`: Substantial bull-free two-narrow -> basic bull-free/substitution -> weak-perfection/SPGT proof chain remains unresolved per agent08.

Receipts are append-only; use the last receipt for each ID as the current disposition.
