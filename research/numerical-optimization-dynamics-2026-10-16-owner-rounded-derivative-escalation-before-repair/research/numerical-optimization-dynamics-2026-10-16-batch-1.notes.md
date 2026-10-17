# Batch 1 — finite-precision direct factorizations and least squares

Run: numerical-optimization-dynamics-2026-10-16. Role: beta. Batch level: 0; no in-run prerequisite batch. This is draft authoring, not independent approval.

## Controlling plan and conflicts

The controlling design is research/plan-numerical-linear-track.md §NA-02 together with the exact NA-02 contract in research/numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md. The owner direction explicitly identifies these as controlling. The task's old pointer to plan-numerical-analysis-track.md §32 and category numerical-linear-algebra-and-approximation is stale. The current assigned page manifest and plan-spec.json identify category numerical-analysis; page-level prerequisites remain the four published context pages. The current batch-dependency artifact assigns level 0 with no in-run pair edges, so external item suppliers do not create a batch edge.

The stale NA-02 design asks for a new complete Cholesky algorithm/correctness proof and a dependency on NA-01. The repaired controlling design instead reuses exact canonical Cholesky, Householder and QR contracts, permits a failure-aware rounded Cholesky wrapper, and adds only missing finite-precision guarantees. No NA-01 edge is declared or required.

The controlling design retains the approved scope amendments: balanced and compensated summation, TwoSum/TwoProduct, exact finite data-dependent Kahan/Neumaier bounds, and bounded three-precision refinement with the explicit q/eta recurrence and finite statuses. Numerical SVD is explicitly excluded. The B page retains all six exact examples, including subnormal and overflow failure. The plan-spec abbreviated scope does not supersede the richer repaired NA-02 contract; no scope was removed.

## Inventory and dependency levels

The A page has 18 items and B has 6 examples. Exact dependencies and levels are in the assigned pages manifest. Levels are 0 for the operation model; 1 for its algorithms; 2 for their results; 3 for the global QR theorem and Cholesky example; 4 for computed least squares; and 5 for its two examples. The compensated-summation and TwoSum B examples are level 3; the range example is level 2. The computed least-squares theorem also depends on the published rounded-dot-product bound; that supplier was added to the manifest after drafting.

Named external item contracts used by proofs were inspected directly: standard floating model; gamma product lemma; dot-product bound; exact Cholesky existence/uniqueness; QR conventions; Householder orthogonality and conditional QR theorem; triangular substitution; exact full-rank QR least squares; backward-error definition; norm facts, finite-dimensional Cauchy-Schwarz; and local conditioning. Exact logical dependencies are recorded in items and proof contracts. Page placement requirements are context, not proof premises.

## Source reading and dispositions

The coverage file records nine full-text sources and every harvested heading/result with its item disposition. I read the complete relevant FNC textbook pages, Voss lecture-note sections, Higham's full summation paper, Ogita–Rump–Oishi §§2–5, and Higham–Mary §§3, 6, 7.1, and 10. FNC and Voss are independent full treatments. Supplementary papers inform algorithm conventions only where stated. No source was dropped and no retrieval attempt had failed before fetch stamping.

The TwoSum formulas are asserted in the literature, but the inspected full text does not provide the needed complete all-sign/exponent proof. The local 3 gamma_m Householder premise is conditional in the existing QR theorem; sources reviewed do not prove that exact bound for this scaled implementation. Those gaps are explicit rather than filled by citation.

## Mathematical completion and escalations

Completed locally: operationwise arithmetic definition and algorithm termination/status branches; balanced pairwise bound; TwoProduct FMA residual identity under representability; exact Kahan/Neumaier finite error identities and operand bounds; successful-run Cholesky componentwise and normwise bounds; mixed-precision error recurrence and finite floor; all six exact B computations.

Escalated: thm-two-sum-error-free-transform lacks the full Sterbenz/range case analysis, affecting ex-two-sum-recovers-a-rounded-away-low-part through its declared general-theorem prerequisite. lem-scaled-householder-step-meets-local-backward-error-premise lacks the exact formation/coefficient/rank-one perturbation proof for the specified 3 gamma_m constant and zero/nonzero branches. Consequently thm-scaled-householder-qr-backward-stability, thm-computed-full-rank-least-squares-backward-stability, ex-full-rank-least-squares-normal-equations-versus-qr, and ex-ill-conditioned-design-stability-versus-forward-error remain escalated pending the local supplier. The computed solve row estimate in the least-squares theorem also needs independent mathematical reconciliation; the existing exact triangular substitution item is not a floating-point backward-error theorem.

No published content, shared plan, engine state, owner verdict, or another batch item was edited. New items and pages are draft.

## Final scoped checks and readiness

The assigned cross-batch dependency input, research/numerical-optimization-dynamics-2026-10-16-batch-1.cross-batch-dependencies.json, is empty, consistent with batch level 0. The A/B page files contain the exact manifest item lists; 24 item carriers and all manifest dependency arrays/levels match.

Final check results:

- Strict proof contracts: 24/24 contracts, 0 errors and 0 warnings.
- Proof layout on the 24 assigned item files: 57 proof steps, 0 defects.
- Render check on all 24 item files and both page files: 0 errors; all math and frontmatter parse.
- Coverage checklist: 1 A page, 28 harvested results, 0 errors and 0 warnings.
- Stamped source-fetch check: 9/9 full-text sources verified; final check mode also passes 9/9.
- Manifest dependencies: 24 items, 0 normalizations, 0 errors.
- Authored-carrier content policy: 24 items, 0 errors and 0 warnings.
- Scoped dependency check: 0 errors and 0 warnings across the 24 assigned items and their 847-item dependency closure.
- Scoped dependency-level recomputation: 24 items, maximum level 5, 0 errors.

The prescribed run-wide item-dependency-levels check for numerical-optimization-dynamics-2026-10-16 still exits 1 because other batch manifests currently have 150 empty inventories and 6 level mismatches. None of the 156 diagnostics names this batch; its scoped check passes. Those other manifests were not edited.

The precheck reports 20 proof-bearing items pass, the operation-model definition not applicable, and three incomplete escalations without a QED: thm-two-sum-error-free-transform, lem-scaled-householder-step-meets-local-backward-error-premise, and thm-computed-full-rank-least-squares-backward-stability. Their missing proofs are stated explicitly in the carriers and remain owner escalations. Four dependent items inherit those unresolved suppliers: thm-scaled-householder-qr-backward-stability, ex-two-sum-recovers-a-rounded-away-low-part, ex-full-rank-least-squares-normal-equations-versus-qr, and ex-ill-conditioned-design-stability-versus-forward-error.

Focused Step 1 record/hash validation checks all 24 assigned records with 0 stale hashes: 17 ready and 7 escalated. These are authoring readiness records only; they do not constitute independent proof approval or publication.
