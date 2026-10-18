# Step 3a reader report — batch 54

Run: `non-ml-math-remaining-81-2026-10-18`  
Role: reader  
Run state checked: running; no in-flight dispatch was reported.

## Opened inventory

Assigned pages:

- A page: `motivic-hall-algebras-and-integration`.
- B page: `motivic-hall-algebras-and-integration-examples`.

Assigned items reviewed:

| Dependency order | Item | Page | Verdict |
|---:|---|---|---|
| 1 | `def-motivic-stack-function-groups-for-quiver-representations` | A | Repaired relation domain |
| 2 | `def-motivic-hall-algebra-of-a-finite-quiver` | A | Pass |
| 3 | `def-finite-field-stack-groupoid-cardinality` | A | Pass |
| 4 | `lem-quiver-motivic-extension-stack-class` | A | Repaired statement domain |
| 5 | `thm-quiver-motivic-hall-convolution-associative` | A | Pass |
| 6 | `def-quiver-motivic-quantum-torus` | A | Pass |
| 7 | `lem-finite-field-stack-groupoid-cardinality-respects-motivic-relations` | A | Pass |
| 8 | `rem-motivic-versus-untwisted-finitary-hall` | A | Pass |
| 9 | `thm-quiver-motivic-integration-is-multiplicative` | A | Citation corrected |
| 10 | `ex-zero-arrow-quiver-motivic-hall-product` | B | Pass |
| 11 | `cex-untwisted-motivic-integration-fails-for-one-arrow-quiver` | B | Pass |
| 12 | `rem-derived-and-cohomological-hall-are-distinct` | A | Pass |

Dependency context opened for the claims: the three prerequisite pages `finitary-ringel-hall-algebras`, `derived-hall-algebras`, and `cohomological-hall-algebras-and-quiver-correspondences`; the current `def-untwisted-hall-algebra`; Toën’s `def-locally-finite-homotopy-type`, `def-toen-locally-finite-dg-category`, and `def-toen-derived-hall-algebra`; the CoHA definitions `def-untwisted-quiver-cohomological-hall-algebra`, `def-quiver-potential-and-monodromic-vanishing-cycle-data`, and `def-critical-quiver-coha-from-vanishing-cycle-data`; and the local suppliers `def-intrinsic-quotient-stack-borel-moore-grading`, `def-quiver-representation-stacks-and-exact-sequence-correspondences`, `lem-quiver-exact-sequence-correspondence-is-smooth-and-proper`, `lem-quiver-parabolic-levi-borel-model-comparisons`, `thm-quiver-quotient-stack-borel-moore-operation-package`, `lem-standard-rational-quiver-vanishing-cycles-realize-critical-correspondences`, `lem-product-general-linear-stiefel-approximations-stabilize-bounded-constructible-hom`, and `thm-normalized-rational-vanishing-cycles-have-coherent-operations`. Published foundations opened for the uses at issue were `def-algebraic-stack-and-inertia`, `def-axiom-of-choice`, `def-descent-data-and-stack-in-groupoids`, `def-morphism-representable-by-algebraic-spaces`, `def-equivariant-borel-moore-homology-and-correspondence-convolution`, and `thm-constructible-six-functors-proper-base-change-and-verdier-duality`.

The authoritative passages checked were Joyce, [*Configurations in abelian categories II*, arXiv v4](https://arxiv.org/pdf/math/0503029v4), §6.1, Theorem 6.1 and its proof; Bridgeland, [*An Introduction to Motivic Hall Algebras*](https://arxiv.org/pdf/1002.4372v1), §§3.5, 4.1, 5.2, and 7.1; Toën, [*Derived Hall Algebras*](https://arxiv.org/pdf/math/0501343v4), §§2–4; and Kontsevich–Soibelman, [*Cohomological Hall algebra*](https://arxiv.org/pdf/1006.2706v2), §§2.1–2.3 and 8. These passages support the carrier distinctions and extension-twist conventions used in the report.

## Repairs and evidence

1. In `def-motivic-stack-function-groups-for-quiver-representations`, Definition relation (2) quantified over any finite-type `S -> X`, but the right-hand class `[S -> X]` belongs to the defined `K(X)` only when `S` has affine stabilizers. I added that condition. The same condition makes the quotient `[V1/V0]` an admissible stack-function generator.

2. In `lem-quiver-motivic-extension-stack-class`, the Statement quantified over arbitrary finite-type endpoint families `X` and `Y`, then asserted a class over `X × Y` in the coefficient theory that only permits affine stabilizers. I added affine stabilizers to both families. The proof’s vector-bundle relation and every consumer use such admissible families: Hall generators already come from the defined relative groups, and both examples use quotient stacks with affine stabilizers.

3. In `thm-quiver-motivic-integration-is-multiplicative`, the Joyce reference named arXiv v2, §6.2, Theorem 6.4 while linking to the v4 PDF. That locator did not identify the integration identity used here. The v4 source’s §6.1, Theorem 6.1 and proof give
   `i_Λ^{-1} Π_*(f*g) = L^{-χ(β,α)} (i_Λ^{-1} Π_*f)(i_Λ^{-1} Π_*g)`
   for the hereditary-category hypotheses, matching the displayed quotient-first twist. I corrected the item reference to v4, §6.1, Theorem 6.1. Bridgeland’s cited integration map is in a different weighted Euler-characteristic setting; the local proof here does not import its Calabi–Yau or Behrend-function hypotheses.

The current batch proof-contract file was updated: all four copied citations to the stack-function definition and all three copied citations to the extension lemma now include the affine-stabilizer hypotheses, and the lemma’s first derivation records that domain. No changed item carried a `verification.judge` record to remove.

No other defect was confirmed in the assigned items. The associativity argument identifies the same ordered three-step flag stack on both sides; the extension exponent is `rank(V1)-rank(V0) = -χQ(d,e)`; the finite-field examples retain endpoint-fixing automorphisms; and the one-arrow counterexample has two distinct extension objects with trivial endpoint-fixing automorphisms over `F2`.

## Page verdicts

- `motivic-hall-algebras-and-integration`: pass after the two well-formedness repairs and the integration-reference correction. Its summary preserves the quotient-first convention and the stated scope boundary.
- `motivic-hall-algebras-and-integration-examples`: pass. Its summary agrees with the assigned zero-arrow computation, the one-arrow counterexample, and the finite-field groupoid-cardinality realization.

## Checks

- Reflow ran on all three changed items. The stack-function definition was unchanged by reflow; the extension lemma and integration theorem were reflowed.
- Precheck passed for all three changed items: zero proof sections for the definition, one proof each for the lemma and theorem, and zero failures.
- Final batched proof-layout command: `node tools/proof-layout.mjs items/def-motivic-stack-function-groups-for-quiver-representations.md items/lem-quiver-motivic-extension-stack-class.md items/thm-quiver-motivic-integration-is-multiplicative.md` — 3 items, 6 steps, 0 defects.

## Unresolved evidence and blocker

There are no uneditable mathematical findings for the JSON findings array. The pre-existing `research/non-ml-math-remaining-81-2026-10-18-batch-54.coverage.json` and `research/non-ml-math-remaining-81-2026-10-18-batch-54.source-evidence.json` still record the old Joyce locator (§6.2, Theorem 6.4) for this item. I left those research evidence artifacts untouched; the assigned item citation and its proof-contract excerpts are corrected.

The run-level dependency schedule remains stale: `node tools/batch-dependency-levels.mjs check --run non-ml-math-remaining-81-2026-10-18` reports “Stale batch dependency levels …; recompute before authoring”. Batch 54 notes attribute the mismatch to its dependencies on batches 50, 52, and 55 (computed level 3 versus assigned level 2). This is an owner/workflow blocker outside this reader assignment; no shared schedule or autopilot state was changed.

Coverage was complete for both assigned pages, all 12 assigned items, and the dependency interfaces listed above. I did not independently re-audit every transitive foundation behind the opened published suppliers.
