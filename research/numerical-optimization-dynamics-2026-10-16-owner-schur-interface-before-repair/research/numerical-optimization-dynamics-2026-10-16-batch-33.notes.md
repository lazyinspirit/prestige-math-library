# Batch 33 authoring notes

Run: `numerical-optimization-dynamics-2026-10-16` · pair: LIN-SCHUR · batch: 33.

## Controlling design and conflict record

I read the complete LIN-SCHUR section in `research/plan-numerical-linear-track.md`, the matching `research/plan-spec.json` row, the complete relevant `linear-audit.md` section, the assigned task/design and the run owner direction. The plan and spec agree on page order, prerequisites, exact Francis QR steps, finite-budget and exceptional-shift statuses, conditional computed backward error, closed pseudospectrum, resolvent equivalence, Bauer–Fike, and the three assigned examples. The scope retains a complex single shift and a real double shift, and the computed routine makes no unconditional convergence claim.

One prose conflict is recorded for owner reconciliation. The audit says the “new resolvent interface is specified under VAL-LINEAR below,” but the controlling LIN-SCHUR plan and current batch graph declare only NA-02 and LIN-SVD as same-frontier suppliers; neither declares a VAL-LINEAR edge. Following the plan, the resolvent/singular-value/perturbation equivalence is proved locally in `thm-closed-pseudospectrum-resolvent-perturbation-equivalence`. No VAL-LINEAR item is used.

The old design’s Hermitian Wilkinson shift convention is kept within its published symmetric-tridiagonal scope. The finite Hessenberg algorithm instead uses its declared single or double shift, finite exceptional-shift tables, explicit stagnation/budget statuses, and the specified deflation test. The exact compact-chase invariant is no longer an unresolved gap: `lem-francis-compact-bulge-support-propagation` proves the moving support bound and the first-column relation before `alg-exact-francis-hessenberg-qr-step` uses it.

## Inventory and dependency levels

Batch 33 is dependency level 2, with prerequisite batches 1 and 17. The scheduling input hash is `a299012bea422568b54bf4a9aa8130f76083f95d61f72a75c9b1f8c6d0f97aa3`. The A page contains 16 items and the B page contains 3. Levels were recomputed from the current manifest `deps` using batches 1, 17 and 33 together; the scoped graph has 67 items, no cycles, and no level errors. The batch-33 levels are:

- Level 0: `def-real-and-complex-schur-forms`, `def-exact-real-2x2-discriminant-sign-predicate`, `def-closed-epsilon-pseudospectrum`, `lem-unitary-similarity-error-accumulation`, `lem-neumann-invertibility-for-finite-matrices`, `lem-implicit-q-uniqueness-for-unreduced-hessenberg`, `lem-francis-compact-bulge-support-propagation`, and `ex-jordan-block-epsilon-pseudospectrum`.
- Level 1: `alg-complex-scaled-householder-reflector-step`, `lem-real-francis-double-shift-polynomial`, `thm-closed-pseudospectrum-resolvent-perturbation-equivalence`, and `thm-bauer-fike-eigenvalue-perturbation-bound`.
- Level 2: `alg-exact-francis-hessenberg-qr-step`, `ex-jordan-eigenvalue-residual-square-root-instability`, and `ex-real-conjugate-pair-schur-block`.
- Level 3: `lem-francis-double-shift-bulge-chase-matches-explicit-qr` and `alg-finite-budget-francis-schur-reduction`.
- Level 4: `thm-computed-francis-schur-backward-error`.
- Level 7: `thm-computed-pseudospectrum-membership-enclosure`.

The B-page Jordan disk example has level 0 because it depends only on the level-0 closed-pseudospectrum definition and a published singular-value definition. The computed membership item is level 7 because its LIN-SVD error-certificate chain reaches level 6 in the current batch-17 manifest.

## Supplier inspection and open interfaces

I inspected the actual NA-02 supplier bodies `def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma`, `alg-scaled-householder-reflector-formation-and-application`, and `lem-scaled-householder-step-meets-local-backward-error-premise`. The real procedure is finite and real-only. The current local lemma states a one-sided active-step bound with its explicit $\kappa_r$ constant and a separate-block bound. It does not state the two-sided $3\gamma_m$ similarity relation required by the computed Schur backward-error claim. No proof or approval is inferred from the supplier’s presence. The batch-33 complex reflector step has explicit range and overwrite branches, but no local arithmetic-error theorem.

The batch-17 bodies `thm-bidiagonal-svd-backward-error-under-local-stability` and `cor-computed-singular-values-absolute-error-from-backward-stability` were inspected. The aggregate SVD theorem proves its normwise bound from a per-reflector/per-rotation inequality declared as assumption [A1]; the corollary is valid conditionally on that nearby-factorization result. It does not certify that the current SVD implementation supplies the assumed inequalities. The batch-33 interval decision theorem is complete for any supplied certified pair $(\widehat s,\delta)$, but operational computed-path readiness remains escalated until the upstream local-stability premise is proved and checked.

The real Schur stop test uses the locally defined exact discriminant predicate `def-exact-real-2x2-discriminant-sign-predicate`. The finite algorithm accepts an exact sign evaluator when supplied and returns `schur-type-undecided` otherwise. No evaluator implementation is supplied in this batch; the algorithm does not label an unverified sign as Schur-computed.

These exact open cross-pair checks, affected consumers, and proposed NA-02/LIN-SVD supplier work are in `research/numerical-optimization-dynamics-2026-10-16-batch-33.cross-batch-dependencies.json`. The theorem statements remain present and conditional; no prerequisite is silently narrowed or omitted.

## Published supplier review and reused results

I read the actual bodies used by the batch: `def-eigenvalue-eigenvector-eigenspace-and-spectrum`; `def-singular-values-of-an-endomorphism`; `def-operator-norm-on-a-finite-dimensional-inner-product-space`; `thm-singular-value-decomposition`; `thm-operator-norm-is-the-largest-singular-value`; `cor-operator-norm-submultiplicative-and-t-star-t-identity`; `def-householder-reflector`; `thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries`; `def-upper-hessenberg-and-real-symmetric-tridiagonal-matrices`; `def-unshifted-and-shifted-qr-iteration-with-deflation-and-wilkinson-shift`; `prop-shifted-qr-preserves-upper-hessenberg-form`; `thm-householder-similarity-reduces-to-hessenberg-and-tridiagonal-form`; and `thm-schur-triangularisation`. The batch also reuses the published simple-eigenvalue derivative and condition-number statements verbatim in the A-page summary, with their original hypotheses intact.

The new Bauer–Fike proof supplies its finite-dimensional Neumann-series inverse lemma locally. The closed pseudospectrum proof uses an attained right singular vector and the rank-one perturbation $E=rv^*$; the reverse direction uses a unit eigenvector. Its equality boundary is closed throughout. The exact Francis proof now has the complete local support-propagation argument; the double-shift identity remains conditional on the explicitly stated nonsingular, unreduced, completed-branch hypotheses.

## Sources and retrieval history

The final A-page coverage includes six full-text treatments and all source harvest dispositions in `research/numerical-optimization-dynamics-2026-10-16-batch-33.coverage.json`: Demmel’s Berkeley Lecture 16, Bindel’s full CS 6210 Hessenberg-QR lecture, Saad’s full book, Embree’s full Chapter 5 notes, Demmel’s full Applied Numerical Linear Algebra text mirror, and the current 9-page MIT QR Algorithm II replacement. The five sources used for proof support were fetched and stamped; the sixth MIT source is recorded only for its symmetric-tridiagonal shift boundary. The source-fetch check reports 6/6 resolved and 6/6 fetch-verified.

An earlier MIT Lecture II asset returned an internal error. The continuing handoff did not preserve that asset’s exact URL or attempt timestamp, so neither is reconstructed here. A title search found the current MIT PDF recorded above; its symmetric-tridiagonal material was inspected and explicitly marked out of scope for the Francis proof. This was a successful alternative-source recovery, not an unresolved or dropped source.

## Scoped check results

- Scoped dependency levels over batches 1, 17 and 33: 67 items, no errors or cycles; the item labels match their recomputed levels.
- Proof layout: 19 batch-33 items, 45 proof steps, 0 defects.
- Precheck: 16 proof-bearing items passed; the three definitions were not applicable; 0 failures.
- Strict proof contracts: 19/19 items, 0 errors and 0 warnings; contracts include exact supplier excerpts, step claims/inputs and all eight boundary dispositions.
- Rendercheck: 21 item/page files, 0 errors.
- Coverage checklist: 24 harvested results, 0 errors and 0 warnings.
- Content policy: 19 scoped items, 0 errors and 0 warnings.
- Focused depcheck and fwdcheck: 0 errors and 0 warnings; no cycles or forward references.
- Source-fetch check with stamping: 6/6 source bodies verified and resolved; one current MIT replacement was newly stamped on this pass.

The three operationally dependent results are recorded as escalated: `alg-finite-budget-francis-schur-reduction`, `thm-computed-francis-schur-backward-error`, and `thm-computed-pseudospectrum-membership-enclosure`. The finite algorithm also returns `schur-type-undecided` when an exact discriminant sign is unavailable. The remaining 16 items have complete stated prerequisites, local proofs/definitions, placement and contracts and are recorded ready. These Step 1 author records are not independent proof approval.

No published item, shared plan, another pair’s file, global dependency ledger, engine state, verdict, or test suite was edited or run.
