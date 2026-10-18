# Batch 24 authoring notes — LIN-SQRTFILTER

Run `numerical-analysis-remaining-71-2026-10-17`, beta batch 24. The dispatched
pair is `square-root-covariance-update-error-and-stability` (A, order 2602)
and its examples page (B, order 2603). The completed inventory has ten A items
and four B examples, below the 100-item cap on either page.

## Plan and interface reconciliation

The six scope clauses in the complete design section at L2342–2390 match the
current `plan-spec.json` description. The controlling task and plan-spec retain
page requirements `numerical-algebraic-riccati-equations-and-stabilizing-branches`
and `kalman-filtering`. The design's additional context pages
`state-space-models-as-probability-laws` and
`direct-matrix-factorisations-lu-cholesky-and-qr` are not page requirements in
the current plan. Their needed item interfaces were read and are declared
directly: the linear-Gaussian model definition and exact QR convention theorem.

The design's same-frontier list names NA-02, LIN-SVD, VAL-LINEAR and LIN-RIC,
while the current batch dependency input declares only batch 23. The NA-02
interface is now present on the published
`finite-precision-direct-factorizations` page. The local reflector/range,
scaled QR backward-error and finite-status supplier bodies and proofs were
inspected; the authored carriers declare their exact item IDs. The historical
`lem-scaled-householder-step-meets-local-backward-error-premise` has
`verification.precheck: pending`; its proof body was checked, and no approval
is inferred. The published SVD and verified-linear pages are available, but
these claims assume supplied bounds and do not compute singular values or
verified enclosures, so no items from those pages are logical prerequisites.

Batch 23's current LIN-RIC draft page and its complete CARE, DARE and sensitivity
proofs were inspected. Its page requirement is retained. Batch 24 uses none of
those theorem conclusions and makes no uniform-in-time stability claim; no
supplier acceptance is inferred. The batch-24 dispatch named scheduling input
`39d90c778a4d7b8e827166f10e1563c99714e74b251ed0b9bdd33dcdaf182a24`. At
handoff, the generated dependency file has input hash
`a1545c2b00f56a0cdca00bf11b21af62e611f3e819701441e21dc2f917e4ca3f`, while
batch 24 remains at dependency level 1 with prerequisite batch 23. No shared
plan, scheduler or engine file was changed; the digest drift is recorded for
the owner.

The plan requests a QR coefficient of the form
`C(dim)u/(1-C(dim)u)`. The new A-page lemma
`lem-square-root-kalman-householder-error-rational-envelope` proves this with
`C(q,n)=200qn` when `200qnu<1`. The prearray theorem also retains the direct
published coefficient `((1+κ_q)^n-1)` under the wider `qu<1` hypothesis, so
the rational form does not narrow the original error bound's domain.

## Inventory and in-batch dependency levels

Levels below are recomputed from manifest `deps`; the full direct dependency
arrays are in the batch pages manifest.

| Level | Items and in-batch suppliers |
|---|---|
| 0 | `lem-square-root-kalman-householder-error-rational-envelope`; `lem-square-root-kalman-gram-perturbation-bound`; `lem-square-root-kalman-measurement-block-factor-identity`; `lem-square-root-kalman-prediction-factor-identity`; `lem-square-root-kalman-schur-perturbation-bound`; `lem-square-root-kalman-triangular-solve-forward-bound` |
| 1 | `alg-finite-budget-square-root-kalman-filter` ← prediction and measurement identities; `lem-square-root-kalman-prearray-qr-error-bound` ← Gram perturbation and rational QR envelope; B: perturbed-prearray example ← Gram and measurement identities; subtractive-update example ← measurement identity |
| 2 | `thm-square-root-kalman-finite-procedure-status` ← algorithm; `thm-square-root-kalman-finite-horizon-perturbation-bound` ← algorithm, prediction/measurement identities, prearray and Schur bounds, triangular-solve forward bound; B: singular-prior example ← algorithm and measurement identity |
| 3 | B: nearly-noiseless solve example ← algorithm, measurement identity and finite-horizon theorem |

The A page defines the finite rectangular-factor QR procedure, exact
prediction and block-measurement identities, factor/Gram and Schur error
estimates, rational QR envelope, solve-residual forward bound, finite status,
and conditioned finite-horizon recurrence. The B page contains the singular
prior, nearly-noiseless solve, subtractive-update cancellation, and perturbed
prearray examples. No item uses another item to prove its own replacement.

## Source evidence

The three source PDFs were retrieved in full and the complete relevant sections
were inspected. All fetch stamps were verified; the coverage checklist records
14 harvested source results and each result's disposition.

| Source | URL and inspected locator | Retrieval evidence |
|---|---|---|
| Kevin S. Tracy, *A Square-Root Kalman Filter Using Only QR Decompositions* | [arXiv PDF](https://arxiv.org/pdf/2208.06452); complete four-page paper, §§2–3.4, equations (3)–(7), (17)–(36), Algorithm 1 | 80,866 bytes; SHA-256 prefix `7fe78eb9144af41c`; 4 pages |
| M. A. Salzmann, *Some Aspects of Kalman Filtering*, Technical Report 140 | [UNB PDF](https://gge.ext.unb.ca/Pubs/TR140.pdf); full-text PDF, §3.3.1 (printed pp. 30–31), §3.5.2 (p. 42) | 4,530,903 bytes; SHA-256 prefix `74eecad740eb8f5f`; 97 pages |
| Simo Särkkä, *Bayesian Filtering and Smoothing* | [Aalto PDF](https://users.aalto.fi/~ssarkka/pub/cup_book_online_20131111.pdf); full-text PDF, Ch. 4 §§4.1–4.3, Theorem 4.2 and equations (4.20)–(4.29), printed pp. 51–58 | 4,498,379 bytes; SHA-256 prefix `41c30a59b4e6d241`; 252 pages |

`source-fetch-check --stamp` passed 3/3 verified and resolved sources, with no
drops. No retrieval failed, so `source_resolution` records were not needed.
The rational-envelope lemma derives its coefficient from the inspected local
Householder coefficient. The triangular-solve lemma derives its residual bound
from the operator-norm definition and identity plus Cauchy–Schwarz; the full
published Cauchy–Schwarz proof was inspected and the new item uses its real
case. Neither proof is attributed to the external sources. Supported item IDs
and every harvested-result disposition are recorded in
`numerical-analysis-remaining-71-2026-10-17-batch-24.coverage.json`.

## Cross-batch prerequisites

`square-root-covariance-update-error-and-stability` retains its batch-23 page
edge to LIN-RIC. The cross-batch evidence records that the supplier page and
the complete relevant theorem bodies were inspected; it verifies the page
edge only and does not infer approval. `kalman-filtering` is a published page.
No cross-batch item premise is missing at handoff.

## Checks and handoff status

- Scoped dependency levels: 14 manifest items checked, no cycles or level errors; maximum level 3.
- Strict proof contracts: 14/14 items, 38 exact supplier citations, 42 derivations, no errors or warnings; finite checks are empty because this family has no registered finite-smoke checks.
- `proof-layout`: 14 items, 42 proof steps, zero defects.
- `content-policy`: 14 items, zero errors or warnings.
- Focused `depcheck`: zero errors or warnings; selected dependency closure 1,633 items and 292 pages.
- `coverage-checklist`: one A page, 14 harvested results, zero errors or warnings.
- `source-fetch-check --stamp`: 3/3 sources verified and resolved, zero drops.
- Normative `precheck.mts`: 13 proof-bearing items reported `untagged-steps`. That checker credits a justification group only when it is on the same physical line as the `N.N` marker; these proofs place the group at the end of the complete multiline step as required by the dispatch. The strict proof contract and `proof-layout` pass. This checker-format mismatch is recorded for owner reconciliation.
- Run-wide `item-dependency-levels.mjs check`: 30 errors, all empty scaffold inventories in other run pages at handoff. The scoped batch-24 calculation passes. No other batch was edited.

All 14 item readiness records are `ready`; the scoped snapshot check confirms
each hash still matches its current carrier and direct dependencies. These are
author-readiness records only; they do not certify or approve any supplier or
proof.
