# Batch 102 authoring notes — Numerical identifiability and optimal experiment design

## Scope and controlling design

This is the beta pair for run `numerical-optimization-dynamics-2026-10-16`: A page `numerical-identifiability-and-optimal-experiment-design` (order 2488) and B page `numerical-identifiability-and-optimal-experiment-design-examples` (order 2489). The task points to plan lines 1442 and 1454. In the current plan file line 1442 is a blank separator and line 1454 is the INV3 `### Scope` heading; the mathematical scope is at lines 1456–1462. I read the cited locations, the complete current INV3 section, and its incorporated contract. The controlling mathematical source is `research/numerical-analysis-four-category-scaffolds-2026-10-16/optimization-audit.md#contract-inv3`, as directed by the owner-authoring direction and linked at current plan line 1450. The contract preserves the existing approximate-design definition, log-determinant concavity and D-equivalence theorem; it requires local identifiability by a selected square Jacobian minor, the cubic rank-deficiency caveat, a conditional local parameter bound, computed-sensitivity and information perturbation estimates, logdet control under a positive eigenvalue floor, compact-design gap transport, finite-budget multiplicative updates, and a distinct exact integer-design problem.

The on-disk plan-spec INV3 scope matches the plan, but its `prerequisite_ownership` string also contains the OPT7 SOCP/SDP conic-completion paragraph. In the plan this paragraph is a separate OPT7 section at line 1464, after the INV3 preserved design ends at line 1462. It is unrelated to batch 102 and was not absorbed. The owner direction and plan control this contamination. All five assigned A-page requirements are preserved in both the scaffold manifest and page frontmatter; B requires A.

The dispatch lists scheduling input SHA-256 `07ca9acd751fb214d9601d6d0b44e445c7ab3a66b009a961b457a20d226aab00`. The current shared `batch-dependency-levels.json` instead carries `input_sha256` `04a57edb982e756b2bdf7b54936383b64b17fbc7a6e2709dddb29d8083b46327` (file mtime 2026-10-16 15:05 local, after the task file at 09:54). Batch 102 remains level 8 with prerequisite batches 6, 27, 84, and 96. This mismatch is recorded for owner reconciliation; shared scheduling input was not changed.

## Inventory and item dependency levels

The 17-item inventory was fixed in the manifest before carrier authoring. Levels use only same-run `deps` edges; the algorithm’s `justified_by` well-definedness discharge is kept separate to avoid a definition/theorem cycle. The assigned subgraph has no cycles or level errors. Items are ordered by level before consumers.

| Level | A items |
|---:|---|
| 0 | `def-nonlinear-experimental-design-and-local-identifiability`; `lem-computed-sensitivity-singular-value-perturbation`; `lem-logdet-information-perturbation-bound` |
| 1 | `alg-finite-budget-multiplicative-d-optimal-design`; `lem-information-matrix-perturbation-bound`; `rem-gauss-newton-information-is-not-full-hessian`; `thm-full-rank-sensitivity-implies-local-identifiability`; `thm-local-information-positive-definite-iff-full-column-rank`; `thm-local-parameter-perturbation-bound` |
| 2 | `thm-multiplicative-design-update-well-defined-and-terminates`; `thm-uniform-sensitivity-error-controls-design-gap` |
| 3 | `thm-equivalence-violation-bounds-d-optimal-design-gap` |

| Level | B items |
|---:|---|
| 1 | `ex-cubic-observation-is-locally-identifiable-with-zero-jacobian` |
| 2 | `ex-first-order-kinetic-rates-are-confounded-by-total-decay`; `ex-local-identifiability-does-not-imply-global-identifiability` |
| 3 | `ex-solver-tolerance-can-reverse-a-design-ranking` |
| 4 | `ex-endpoint-sensors-give-a-d-optimal-linear-time-design` |

The A/B inventories contain 12 and 5 items, respectively, within the 100-item page cap. The manifest, carriers, page inventories, direct dependencies and labels agree. The finite-budget algorithm’s termination/nonsingularity theorem is its `justified_by` discharge, not a direct scheduling edge.

## Prerequisite audit and cross-batch interfaces

Published design suppliers `def-approximate-linear-model-design-and-optimality-criteria`, `lem-log-determinant-concavity-on-positive-definite-matrices`, and `thm-d-optimality-equivalence-theorem` were read with their hypotheses and proofs. Batch 102 reuses those results and proves only the finite violation-to-gap bound; it does not create a second D-equivalence theorem. The response-surface page is published. The KKT and proximal-gradient pages are batch-6 and batch-27 context requirements and are not logical premises of these item proofs.

The assigned Gauss–Newton page is a draft in batch 84. Its supplier `thm-nonlinear-least-squares-gradient-and-hessian` was read in full: the exact Hessian includes the residual-curvature term, which vanishes at zero residual but need not vanish at a nonzero-residual stationary point. Its Step 1 record is `ready`, `owner:true`, and hash-current against the current body and dependencies. The batch-102 remark restates this identity; the owner readiness record is not independent proof approval.

Batch 96 now has a populated DIF3 inventory. The exact body of `lem-parameter-ode-flow-tangent-on-common-tube` proves C1 dependence and a tangent equation under a C1 field, C1 initial map, and a common compact tube, but it does not prove a Lipschitz-Jacobian bound. `thm-discrete-continuous-gradient-error-order-p` is a conditional reduced-objective-gradient estimate with separate state/adjoint, derivative-data, endpoint, quadrature, and Lipschitz-integrand assumptions. The elliptic/parabolic drafts similarly give conditional state/adjoint or scalar-gradient results; the elliptic and parabolic items also declare Countable Choice. Those drafts have no current Step 1 readiness records. They do not state a uniform operator-norm error for the full observation sensitivity matrix across candidate conditions.

Accordingly, the batch-102 finite-dimensional matrix claims remain conditional on the explicit `eta`, `K`, `W`, and eigenvalue-floor hypotheses, and the local stability theorem remains conditional on a Lipschitz Jacobian. No ODE/PDE discretization guarantee is claimed. A coordinatewise route might instantiate the scalar objective-gradient estimates for each output and candidate, prove common constants, and convert the finite coordinate bounds to an operator-norm bound; no current DIF3 item closes those obligations. The exact missing hypotheses, supplier excerpts, affected claims, current records and proposed DIF3 placements are in `batch-102.cross-batch-dependencies.json`.

## Sources and retrieval dispositions

The active coverage has 11 page/source entries and 28 harvested item mappings. The A page has more than two independent full-text treatments, including the Boyd–Vandenberghe book and Madsen thesis. Complete texts inspected include Boyd–Vandenberghe, McLean et al., Madsen, Axler, Dette–Pepelyshev–Zhigljavsky, Nocedal–Wright, and Lebl. Exact URLs, locators, supported items, dispositions, recovery attempts and fetch stamps are in `batch-102.coverage.json`. `source-fetch-check --stamp` verified 11/11 entries; the final check added no stamps. Coverage checklist: 28 harvested results, zero errors, zero warnings.

Two plan-named full-text sources remain owner-escalated, not dropped. The official SIAM Pukelsheim Chapter 9 PDF endpoint returned HTTP 403 on the initial attempt and five retries. The Springer Walter–Pronzato full-text endpoint returned a 3038-byte HTML body (not a PDF) on the initial attempt and five retries; the DNB file found by search is only a six-page contents scan. Neither source is cited by a batch-102 item. Their exact search records, six attempts each, source-resolution status, alternatives and per-item proof/dependency arguments are in `batch-102.source-resolution.json`. Full-text alternatives and local proofs cover the mathematical claims; owner confirmation is still needed before either named source is treated as dropped.

## Proofs, contracts, and axiom use

All technical objects and conventions are specified in the definition or cited to exact supplier items. Theorems retain explicit hypotheses, including the Lipschitz-Jacobian ball, compact design set and common eigenvalue floor. The full-rank local-identifiability argument selects a finite row minor and uses no choice principle. No axiom beyond the cited finite-dimensional suppliers is added by batch 102. ODE/PDE supplier branches that require Countable Choice remain page-level escalation context and are not inherited by the batch’s finite-dimensional proofs.

The proof-contract file has all 17 items, 40 numbered proof steps, 76 exact supplier excerpts with step uses, boundary dispositions, and finite checks for all five B examples. The cubic example explicitly separates zero Jacobian rank from local injectivity; the kinetic example derives the exponential solution and exact rate aliases; the endpoint design and one-update recurrence use exact rational matrices; the solver-tolerance example checks the uniform error and eigenvalue floor over the full approximate-design simplex.

## Final scoped checks and readiness

- `node tools/tsx-run.mjs tools/author-check.mts numerical-optimization-dynamics-2026-10-16 102`: pass. Precheck: 14 proof-bearing items, 0 failing; rendercheck: 19 files, no math/frontmatter defects; content policy: 17 items, 0 errors/warnings; strict proof contract: 17/17, 0 errors/warnings. Receipt: `numerical-optimization-dynamics-2026-10-16-author-check-102.json`.
- `node tools/proof-layout.mjs` on the 17 changed carriers: 17 items, 40 steps, 0 defects.
- `node tools/item-dependency-levels.mjs check --run numerical-optimization-dynamics-2026-10-16`: 2,007 items across 214 pages, no errors; maximum level 16. `node tools/manifest-deps.mjs` on batch 102: 17 items, 0 normalized, 0 errors.
- Focused `depcheck`: closure of 989 items and 147 pages, 0 errors/warnings. `fwdcheck`: 0 open/closed forward refs, 0 errors/warnings. `extcheck`: 17 items, 0 unproved, 0 errors/warnings.
- `source-fetch-check --stamp`: 11/11 active page/source entries verified, 0 newly stamped on the final pass. Coverage checklist: 2 pages, 28 harvested results, 0 errors/warnings. The source-resolution helper returns its expected unresolved-source errors for the two owner-escalation records; these are not active coverage citations.
- All 17 assigned Step 1 records are `ready`, `owner:false`, and current-hash; each records its direct dependencies (including the algorithm’s `justified_by` theorem) and page placement. No `--owner` override was used and no existing escalation was overwritten. The run-wide decision check remains open elsewhere (1,078/2,007 items ready); it reports all 17 batch-102 items closed and both assigned pages nonempty. These records establish construction readiness only, not independent approval.

At the final read-only autopilot status check, the overall run remained `running` at `1-scaffold`, with 94/107 pages covered, no workers in flight, and the existing owner-repair blocker still present. Batch 102 did not edit `.autopilot`, shared plans, verdicts, published content, or foreign batch carriers.
