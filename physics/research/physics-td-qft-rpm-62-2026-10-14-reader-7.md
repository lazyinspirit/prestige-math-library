# Step 3a reader report — batch 7

Run: `physics-td-qft-rpm-62-2026-10-14`  
Role: reader  
Scope: the two pages and 15 items in `research/physics-td-qft-rpm-62-2026-10-14-batch-7.pages.json`.

## Opened inventory

Pages:

- `library/thermodynamics/td-accessibility-foundation.md`
- `library/thermodynamics/td-accessibility-foundation-examples.md`

Assigned items:

- `def-td-adiabatic-accessibility`
- `def-td-scaled-products-and-comparison`
- `post-td-accessibility-a1-a6`
- `def-td-thermal-join`
- `def-td-cross-type-reaction-network`
- `post-td-simple-system-geometric-axioms`
- `post-td-thermal-join-axioms`
- `post-td-universal-thermal-range`
- `post-td-equilibrium-join-coherence`
- `pthm-td-contact-product-comparison`
- `pthm-td-entropy-under-product-comparison`
- `pthm-td-universal-mixing-entropy`
- `rem-td-entropy-construction-hypotheses`
- `ex-td-positive-log-contact-witness`
- `cex-td-degenerate-thermometer-comparison`

Physical prerequisite items opened: `def-td-si-quantities`, `def-td-system-and-permitted-exchanges`, `def-td-galilean-rest-frame`, `def-td-equilibrium-state-domain`, `def-td-process-and-protocol`, and `post-td-bulk-additivity`.

Draft mathematics used by the assigned proofs opened: `def-tdmath-tagged-scalable-compound`, `lem-tdmath-compound-mass-well-defined`, `def-tdmath-forward-sector-hypotheses`, `def-tdmath-thermal-contact-hypotheses`, `def-tdmath-forward-signed-comparison`, `lem-tdmath-forward-spectator-cancellation`, `def-tdmath-decorated-chain-costs`, `lem-tdmath-contact-energy-orientation`, `lem-tdmath-convex-sector-closedness`, `lem-tdmath-sector-interior`, `lem-tdmath-relative-boundary-support`, `lem-tdmath-unique-support-inward-ray`, `lem-tdmath-convex-function-local-lipschitz`, `lem-tdmath-integral-zero-uniqueness`, `lem-tdmath-relative-interior-segment`, `lem-tdmath-closed-convex-separation`, `thm-tdmath-forward-boundary-graph`, `thm-tdmath-sector-nesting`, `lem-tdmath-thermal-scaling-invariance`, `lem-tdmath-reference-strip-coordinate`, `thm-tdmath-reference-strip-gluing`, `lem-tdmath-reference-order`, `lem-tdmath-reference-supremum-bounds`, `lem-tdmath-spectator-cancellation`, `def-tdmath-comparison-and-stability`, `def-tdmath-signed-comparison`, `thm-tdmath-additive-entropy-representation`, `lem-tdmath-thermal-class-dichotomy`, `thm-tdmath-conditional-contact-calibrator`, `thm-tdmath-arbitrary-family-calibration`, `lem-tdmath-decorated-cost-algebra`, `thm-tdmath-unattained-cost-entropy-inference`, `def-tdmath-cost-offset-difference-space`, `lem-tdmath-cost-offset-difference-space-well-defined`, `thm-tdmath-infinite-no-sinks-sandwich`, and `thm-tdmath-splitting-cost-quotient`.

Published mathematics supplier statements checked at the uses in this batch include the logarithm, real powers, exponential convexity, mean value theorem, Heine–Borel, extreme value, Euclidean inner product, total derivative and chain rule, Newton–Leibniz, continuity-implies-integrability, finite-dimensional unit-sphere compactness, rational density, finite-sum laws, ordered-field/completeness definitions, Choice, and the dominated Hahn–Banach theorem.

I read the cited Lieb–Yngvason PDF at https://arxiv.org/pdf/cond-mat/9708200v2, including §§II.C (A1–A6, pp. 19–20), IV.A (T1–T5, pp. 50–53), Theorem 4.8 and the contact calibration discussion (pp. 57–59), the degenerate thermometer example in IV.C (pp. 58–60), and §VI.B (chain/catalyst definitions (6.9)–(6.10), Theorem 6.1, and no-sinks discussion, pp. 74–77).

## Edits and evidence

1. In `items/ex-td-positive-log-contact-witness.md`, I made the accessibility rule apply explicitly to separated, joined, and mixed pair/join encodings on equal-formal-mass pairs. The previous text defined the order on separated compounds and separately defined contact equality via a join maximum, without explicitly connecting that maximum to the accessibility relation between the pair and join. The repair now makes those comparisons consequences of the same total-entropy order. I also stated the scaling rule for joined types, used dimensionless energy/work coordinates and entropy parameters consistently, and extended the T3–T5 and C1 deductions to recursively joined types. The local two-weight logarithm calculation proves that the maximum is attained at equal energy-to-coefficient ratios and supports the stated contact checks. This remains a mathematical consistency witness, not a realization or observation. The example contract was synchronized to the final step labels and tags.

2. In `items/cex-td-degenerate-thermometer-comparison.md`, I defined `U = E/(1 J)` as the dimensionless numerical internal-energy coordinate and added `def-td-si-quantities` as a formulation prerequisite. This makes `log U` well-formed and preserves the source’s positive-coordinate model. The counterexample contract now records that supplier and the final F4 use. No item consumers of either edited example were found.

No `verification.judge` record was present on either edited item. Reflow reported both items unchanged. Precheck passed for both after adopting its canonical proof-step numbering for the example.

## Unedited finding

`lem-tdmath-reference-order` is a draft in current-run batch 3 and is outside this assignment. In Proof step 2.1, the argument says `(-1)^2 = 1 > 0` contradicts trichotomy. This does not exclude `-1 > 0`; it establishes a positive square, which is compatible with trichotomy. The ordered-field axioms do supply a one-line repair: since `1 > 0`, assuming `-1 > 0` and applying positive-cone closure to `1 + (-1)` gives `0 > 0`, contradicting trichotomy at zero. The claim `c^{-1} > 0` is true; the displayed justification has a nonfatal elementary inference gap. The item’s current raw SHA-256 at split is `52feed0275ebd0faf9884dc506c58abc44f365fe186f6ad905e8858ef95e3a42`. The assigned consumer `pthm-td-contact-product-comparison` reaches it through `thm-tdmath-conditional-contact-calibrator` and `thm-tdmath-additive-entropy-representation`.

## Page verdicts

- `td-accessibility-foundation`: conditional. Definitions and assumptions are explicit; the page summary correctly separates adopted assumptions from conditional deductions and distinguishes its stronger T5/C1 inputs from the printed Theorem 4.8 interface. The product-comparison chain remains subject to the nonfatal draft-supplier proof gap above.
- `td-accessibility-foundation-examples`: pass after the unit and contact-order repairs. The examples are expressly formal constructions, not empirical findings.

## Validation and blocker

- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/ex-td-positive-log-contact-witness.md`: unchanged.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/ex-td-positive-log-contact-witness.md`: pass.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/cex-td-degenerate-thermometer-comparison.md`: unchanged.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/cex-td-degenerate-thermometer-comparison.md`: pass.
- Required final `node tools/physics-support/proof-layout.mjs items/ex-td-positive-log-contact-witness.md items/cex-td-degenerate-thermometer-comparison.md` was attempted once after the final edits. The renderer failed before checking the items: Node could not resolve package `@/components` imported from `/Users/ianx/Projects/prestige-intelligence/web/components/library/ItemBody.tsx`. This is the outstanding tooling blocker.

## Coverage note

All two assigned pages and all 15 assigned items were read. I reviewed the direct physical prerequisites, the draft mathematical proofs and definitions actually used by the assigned theorem chains, the relevant published mathematics statements, and the cited Lieb–Yngvason source sections listed above. I did not re-audit every transitive foundational mathematics item in the repository-wide closure. The final proof-layout result is unavailable because of the renderer alias failure.
