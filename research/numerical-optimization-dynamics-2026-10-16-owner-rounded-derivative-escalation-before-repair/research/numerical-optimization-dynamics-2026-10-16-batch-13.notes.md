# Batch 13 authoring notes — Automatic differentiation and computational graphs

## Controlling design and conflict record

The controlling design is DIF2 in `research/plan-numerical-optimization-track.md` lines 222–242 together with the complete `Contract DIF2` appendix at `research/numerical-analysis-four-category-scaffolds-2026-10-16/optimization-audit.md` lines 262–306. The task's lines 222 and 234 identify the same pair scope/preserved design; the appendix controls proof detail, and the binding owner-authoring direction controls all stale task or design text. The plan, task, and `plan-spec.json` agree on page identity, order 2310, category, `requires`, and intended scope. No page metadata conflict was found.

A detail that could otherwise be misread was reconciled explicitly: the uniform-block schedule is the contract's fully specified finite-memory fallback, and it does not satisfy or replace its separate binomial/Revolve authoring obligation. This batch includes both schedules and a binomial-capacity, replay, storage, and work proof. It preserves the required exact-real versus rounded-execution distinction, strict-branch rule, conditional reverse-work assumptions, exact implicit derivative formulas, and finite-iteration sensitivity distinction. No scope was narrowed.

## Inventory and dependency levels

The A page contains 18 items and the B examples page contains 4, for 22 total (below the 100-item cap). Dependencies were set before carrier authoring and labels recomputed from the current local graph after adding the C2-to-C1 prerequisite:

- Level 0: `def-finite-straight-line-computational-program`, `lem-implicit-sensitivity-error-controlled-by-residual`, `thm-implicit-differentiation-forward-and-adjoint-formulas`.
- Level 1: `alg-forward-mode-automatic-differentiation`, `alg-reverse-mode-automatic-differentiation`, `lem-finite-straight-line-program-defines-c1-map`, `ex-branchwise-ad-at-the-absolute-value-switch`, `ex-implicit-linear-solve-adjoint`.
- Level 2: `lem-finite-straight-line-program-defines-c2-map`, `alg-checkpointed-reverse-schedules`, `alg-differentiate-finite-fixed-point-iteration`, `alg-forward-over-reverse-hessian-vector-product`, `thm-forward-mode-computes-directional-derivative`, `thm-reverse-mode-computes-gradient`, `thm-reverse-mode-work-and-tape-storage-bound`.
- Level 3: `thm-checkpointed-reverse-schedules-preserve-adjoints-and-cost-bounds`, `thm-finite-iteration-sensitivity-bound-and-residual-limitation`, `thm-forward-over-reverse-computes-hessian-vector-product`, `thm-graph-gradient-error-from-local-jacobian-perturbations`, `ex-reverse-euler-trajectory-tape`, `ex-shared-expression-forward-and-reverse-graph`.
- Level 4: `rem-real-arithmetic-graph-versus-rounded-execution`.

These are in-run item levels; dependencies outside this run do not increase the level. The dispatch's input hash was `ca41fcdd6d4a40fbd61e4921a8bfdd410bd704a05c937a5f709843ed28d2e97d`; batch 13 is level 1 with prerequisite batch 1. The batch-13 cross-batch evidence is in `numerical-optimization-dynamics-2026-10-16-batch-13.cross-batch-dependencies.json`.

## Supplier and interface audit

The exact published suppliers used by proofs were read in full, including statements and proofs: `def-total-derivative-in-euclidean-space`, `def-c-one-map-and-local-inverse`, `thm-chain-rule-for-total-derivatives`, `thm-chain-sum-product-and-composition-rules-for-banach-derivatives`, `thm-total-differentiability-gives-a-local-linear-bound-and-continuity`, `thm-euclidean-implicit-function-theorem`, and `thm-mean-value-inequality-for-total-derivatives`. Facts & Assumptions and proof contracts cite their exact item IDs and quote literal supplier excerpts. The C2 local lemma explicitly depends on the local C1 result for the open admissible domain before composing derivative maps.

Batch 1 now has draft bodies for the finite-precision prerequisite, so the prior empty-inventory observation is stale and is not repeated. The relevant actual statements/proofs were inspected. `def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma` provides an operationwise range/rounding model. `thm-rounded-cholesky-componentwise-and-normwise-backward-error` bounds a successful computed Cholesky factorization residual but not derivative arithmetic. `lem-scaled-householder-step-meets-local-backward-error-premise` proves the zero-column branch and explicitly leaves the nonzero reflector formation/update estimate unresolved; `thm-scaled-householder-qr-backward-stability` is conditional on it. `thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost` is exact arithmetic. `thm-computed-full-rank-least-squares-backward-stability` leaves its rounded triangular-solve residual estimate and zero-solution branch unresolved. These are draft supplier bodies, not accepted proofs.

The exact remaining interface is a same-branch operator-norm estimate `||A_tilde_e-A_e|| <= eta_e` for each concrete factorization/solve primitive's computed local Jacobian or pullback, under stated range, conditioning, pivot/branch, and replay assumptions; if the computed primal point changes derivative evaluation, the needed derivative regularity bound must also be stated. The generic pathwise perturbation theorem proves propagation once these `eta_e` are supplied and excludes reverse-addition roundoff. Only the concrete application remark is escalated; exact-real AD, HVP, implicit differentiation, and the conditional graph theorem are unaffected. Exact supplier IDs, evidence, and affected claims are in the cross-batch dependency file.

## Source selection, retrieval history, and dispositions

The source ledger is `numerical-optimization-dynamics-2026-10-16-batch-13.coverage.json`. The A page has multiple independent treatments, including full lecture notes, a textbook, and research papers:

- MIT OCW 18.S096: complete 102-page notes inspected, Chapter 8 §§8.3–8.4.1, printed pp. 55–63. Forward/reverse sweeps and forward-over-reverse are mapped to the carriers; the particular sine/reciprocal motivating graph and qualitative dimension-scaling discussion are explicitly out of scope.
- A. Griewank, “Achieving Logarithmic Growth of Temporal and Spatial Complexity in Reverse Automatic Differentiation”: complete 21-page article inspected, §§1 and 3–6, especially §6 Theorem 6.1 and eqs. (13)–(16), printed pp. 11–16. The original Argonne endpoint exhausted its recorded six-fetch allowance (the initial fetch plus five retries) with HTTP 403; title/P228 searches located the CiteSeerX mirror, whose URL redirected to a complete archived PDF. The recovered mirror was fetched and inspected, with the full-text URL separately fetch-stamped. The inaccessible original endpoint is preserved as a dropped URL record with its attempts, searches, and item-specific alternative arguments/dependencies; the mathematical claims remain covered by the recovered full text and local proofs.
- W. Baur and V. Strassen, “The Complexity of Partial Derivatives”: complete 14-page university-hosted PDF inspected, §2 Theorem 1/proof and §4 Theorem 2/sketch, printed pp. 318–322 and 329–330. Its infinite-field nonscalar arithmetic-circuit model is recorded as out of scope for the local smooth-primitive work theorem.
- A. G. Baydin and B. A. Pearlmutter, “Automatic Differentiation of Algorithms for Machine Learning”: complete 7-page arXiv PDF inspected, §§2–5, printed pp. 2–6; AD versus finite differences, forward/reverse traces, and HVP mapped to the relevant items; §5 implementation choices are recorded out of scope for graph/branch semantics.
- J. Lebl, *Basic Analysis I*, complete §8.3.1 including Theorem 8.3.7 and proof; and *Basic Analysis II*, complete §8.5.1 including Theorem 8.5.6 and proof. These supply independent full textbook treatments of the chain rule and Euclidean IFT.

Every harvested source content and its included/inline/already-published/out-of-scope disposition is recorded per item or passage in coverage. `source-fetch-check --stamp` completed with six of seven source records fetch-verified and one inaccessible original URL documented as dropped; all seven were resolved. The recovered Griewank mirror is among the fetch-stamped records. No hash, excerpt, or reading claim is invented.

## Checks and final readiness

The 22 carrier items, A/B pages, manifest, proof contracts, source coverage, notes, cross-batch dependency evidence, and 22 decision records are batch-13 outputs. Proof contracts enumerate actual proof steps and exact linked-source quotations, with boundary worksheets and applicable finite checks.

Scoped final checks:

- Item dependency labels: 22 checked, maximum level 4.
- Page inventories, item frontmatter dependencies, and manifest source URLs: 22 items and 2 page inventories matched.
- proof-contract.mjs --strict: 22/22 checked, zero errors or warnings.
- precheck.mts: 15 proof-bearing items checked, zero failures; the other seven have no phase proof.
- proof-layout.mjs: 22 items, 54 steps, zero defects.
- source-fetch-check: six of seven source records fetch-stamped; the inaccessible original Argonne URL is a documented drop, and all seven records are resolved.
- coverage-checklist --require-destination: zero errors, one low-yield warning (9 of 32 harvested source results scaffolded); all remaining results have explicit dispositions and reasons. The warning asks for Alpha confirmation of the declines.
- Step 1 record hashes: 21 ready, one escalated, zero stale records.

Run-wide checks remain blocked outside this pair. item-dependency-levels.mjs check --run reports 158 empty scaffold inventories in other batches; the scoped batch-13 graph passes. batch-dependency-levels.mjs check --run stops on malformed unrelated YAML at items/def-matching-affine-simplicial-meshes.md:17, where an unquoted colon appears in a locator. No other pair was edited, and the run-wide dependency artifact was not rewritten. The owner must refresh it after the external blocker is corrected.

The finite-precision page edge remains open for concrete derivative-error estimates. Its exact interface gap and actual supplier item evidence are in the cross-batch record, and the rounded-execution remark is escalated. Exact-real AD, HVP, implicit differentiation, the conditional graph-gradient theorem, and the other placed items have complete authored suppliers and contracts. Readiness records are not independent approval.
