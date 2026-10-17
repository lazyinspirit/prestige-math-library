# Batch 49 authoring notes — Sylvester and Lyapunov matrix equations

## Scope and design reconciliation

Authored the assigned A/B pair only: 17 items on `sylvester-and-lyapunov-matrix-equations` and 3 worked examples on its companion page. Both pages remain below the 100-item cap. The plan and plan-spec agree on the Sylvester spectral criterion, separation, Bartels–Stewart solve, Hurwitz Lyapunov integral and positivity, low-rank ADI residual identity, conditional convergence, and three listed examples.

There is one design-text conflict. The plan prose says, “No external canonical item is consumed as a proof premise in this pair,” while the current owner direction says to reuse canonical published linear-algebra results, and the plan-spec `canonical_reuse_rule` says the same. I followed the current owner direction and plan-spec: the spectral criterion cites the published `thm-schur-triangularisation`; the new numerical procedure and missing typed prerequisites remain local items. The plan’s scope, caveats and proof route are otherwise preserved.

## Inventory and dependency levels

The manifest, item carriers, page frontmatter, coverage inventory and proof-contract scope contain the same 20 item IDs. The 34-item in-run dependency closure (including batch 33 suppliers) has no dependency-level errors; all 20 batch 49 labels equal their recomputed levels. The current levels are 0–6. In particular, `alg-bartels-stewart-sylvester-equation` is level 5, and its exact-correctness and dense-cost results are level 6 because the current batch 33 Francis supplier computes at level 4.

The batch-wide dependency artifact is owner-controlled and was not edited. `batch-dependency-levels.mjs check` reports it stale. At the final author check, the dispatch/task input hash was `b4e9601f3418e4d869380ba1f3d5167eb5d371b0e951d6d71837e622197c44a5`, the artifact on disk recorded `1abea6443c3532c0d0dd6716027d13701671f13ed52e434cfb52b7a38390868a`, and a fresh read-only recomputation returned `acca5f7885845b5b1088e63397274e4a80691625394670c5357274287aa1bd18`. The recomputed batch rows remain batch 33 at level 2 and batch 49 at level 3, requiring batch 33. Concurrent manifest edits changed this digest during authoring; the owner should recompute the shared artifact from the final run inputs.

The run-wide item dependency command reports 107 errors: 100 empty scaffold inventories in other live pairs and seven unrelated level mismatches. They are `thm-na-clenshaw-curtis-interpolation-coefficients` (4, computed 5), `def-na-clenshaw-curtis-quadrature` (5, 6), `thm-na-clenshaw-curtis-exactness-and-near-best-error` (6, 7), `ex-na-clenshaw-curtis-integrates-quadratics` (6, 7), `alg-parabolic-backward-euler-averaged-forms` (0, 1), `alg-parabolic-crank-nicolson-cg1` (0, 1), and `ex-parabolic-crank-nicolson-time-regularity-order-loss` (1, 2). It reports no batch 49 item-level errors. The scoped 34-item dependency closure check passes.

## Open batch 33 prerequisite checks

The A page still requires `computed-schur-decompositions-and-nonnormal-spectra`. The actual supplier bodies `def-real-and-complex-schur-forms` and `alg-finite-budget-francis-schur-reduction` were inspected; both remain draft and have no readiness or acceptance evidence. The definition supplies the exact unitary/orthogonal Schur-pair shape. The finite reduction supplies computed candidates and diagnostics but does not promise exact reconstruction after rounding. The Bartels–Stewart procedure therefore verifies the exact unitary/orthogonal identities, reconstruction, and triangular or real block structure before using a candidate, and fails with `schur-certificate-failure` otherwise.

The remaining success hypotheses are exact Schur certificates and each local Sylvester pivot separation strictly above the requested threshold. Until the supplier records are ready, the affected claims remain unresolved: `alg-bartels-stewart-sylvester-equation`, `thm-bartels-stewart-sylvester-exact-correctness`, and `thm-bartels-stewart-dense-operation-count`. The exact open edges and supplier excerpts are in `batch-49.cross-batch-dependencies.json`. The independent Sylvester, Lyapunov, ADI and example items were completed against their declared published/local suppliers.

## Sources read

The A-page source coverage records full-text reading, locators, supported items and the disposition of each harvested result. The two independent full treatments are Valeria Simoncini, “Computational Methods for Linear Matrix Equations” (SIAM Review 58(3), 2016), and Elias Jarlebring, “Numerical Methods for Lyapunov Equations” (2017 lecture notes). The adjugate inverse prerequisite uses the complete Trinity College Dublin MA1111 Lecture 10 notes on Laplace expansion and adjugates. Retrieved PDFs and extracted text are under `batch-49-source-reading/`. All three URLs pass `source-fetch-check`; there were no retrieval failures or source drops.

## Scoped checks

- `proof-layout`: 20 items, 64 steps, 0 defects.
- `precheck`: 18 proof-bearing items checked, 0 failures; the two definition-only items are not applicable.
- `rendercheck`: 22 item/page files checked, 0 errors and 0 warnings.
- `proof-contract --strict`: 20/20 items, 0 errors and 0 warnings. Contracts contain exact supplier sections, current proof steps and inputs, boundary dispositions, and finite worked-example verifications.
- `source-fetch-check`: 3/3 sources fetch-verified; 3/3 resolved.
- Scoped in-run dependency closure: 34 items, all 20 assigned labels match recomputation.
- Page frontmatter, carrier dependencies/levels, manifest inventory and coverage inventory match; the page sizes are 17 and 3.
- Run-wide dependency checks remain blocked by the unrelated empty inventories/level mismatch above and the stale shared batch-dependency digest. No tests or owner-controlled run artifacts were changed.

## Step 1 disposition

Seventeen locally complete items are recorded `ready`. The three Bartels–Stewart items named above are recorded `escalated` pending actual batch 33 supplier readiness and exact-certificate review. These author records are not independent mathematical approval.


## Owner Bartels–Stewart/Schur reconciliation

The earlier draft-source readiness escalations are superseded as mathematical interface issues by `research/numerical-optimization-dynamics-2026-10-16-owner-bartels-schur-reconciliation.md`; owner final readiness and independent acceptance remain separate. Actual source33 candidate/status and exact Schur-shape contracts were reread. The consumer preserves exact unitarity/reconstruction/shape and separated local-pivot tests, and clarifies that its local arithmetic is exact while delegated Schur updates are rounded. Stop controls have a finite instruction budget including custom decoding/sign evaluation and verification; the fixed polynomial controller and rational/dyadic integer realization supply concrete constant-cost branches. The dense count includes the initial reflector and records O(n^3+K n^2), hence O(n^3) for fixed K; a richer terminating custom route records O(n^3+C_aux), without a bit-complexity assertion. Exact-correctness proof is unchanged apart from its Given wording. Exact current source quotations and matched manifest proof fields were refreshed. No active48 file, root readiness/levels/hash/runtime, gate, or commit was touched. Historical native checks above do not certify these edits.
