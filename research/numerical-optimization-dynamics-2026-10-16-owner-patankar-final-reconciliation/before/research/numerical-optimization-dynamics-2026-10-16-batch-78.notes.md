# Batch 78 authoring notes — Positive conservative production destruction integrators

Run: `numerical-optimization-dynamics-2026-10-16` · pair: `positive-conservative-production-destruction-integrators` · batch: `78` · role: beta.

## Controlling plan and conflict log

I read the repository instructions and the assigned design and evidence. The controlling XD-03 section of `research/plan-numerical-dynamics-track.md` and the corresponding `research/plan-spec.json` row agree on the positive conservative production destruction scope, its denominator conventions, positive-tube order limits, zero-state warning, residual margin caveat, and examples.

The current `research/numerical-optimization-dynamics-2026-10-16-beta-78-dependency-order.task.md` has the correct batch heading and scheduling metadata, but its appended material after the source task is stale Parareal/MGRIT content: all-at-once elimination, forced-binomial error, heat/phase/tube examples, and Parareal cost claims. That material conflicts with the assigned batch and is not used. The controlling XD-03 plan and plan-spec agree, so there is no plan-versus-plan claim conflict to escalate.

The authoring retains the approved limits: standard modified Patankar Euler is first order only for `sigma_i = y_i^n` on a compact positive tube; the ratio formula is not defined at zero; the zero-compatible method is a separately factorized first-order extension; second order is claimed only for the specified positive-interior MPRK22(1) scheme on a smooth compact positive tube with uniformly positive stages; positivity and conservation are proved independently of order; and a residual certifies exact-solve positivity only with the stated component margin. No general claim is made for arbitrary Patankar variants.

## Inventory and dependency levels

The assigned A page contains 14 items and the B companion contains 5; both are below the 100-item page cap. The manifest, carrier frontmatter, and page lists agree. Batch dependency level is 4; prerequisite batches are 1, 7, 28, 35, 47, and 52. Scheduling input SHA-256: `6dfd0c45f2a8223c7d6f772198513d38987ad90fa865c52f24f2241dd5c6d510`.

| Item level | A-page items |
|---:|---|
| 0 | `def-finite-conservative-production-destruction-system`, `lem-strict-column-dominance-implies-nonnegative-inverse` |
| 1 | `alg-modified-patankar-euler`, `def-source-factored-production-destruction-rates` |
| 2 | `alg-zero-compatible-modified-patankar-euler`, `alg-mprk22-1`, `thm-modified-patankar-euler-positive-conservative`, `lem-modified-patankar-euler-positive-tube-local-error-and-stability` |
| 3 | `thm-zero-compatible-modified-patankar-euler-admissibility`, `thm-mprk22-1-positive-conservative`, `lem-mprk22-1-positive-tube-local-error-and-stability`, `thm-modified-patankar-euler-global-first-order-error`, `thm-patankar-inexact-solve-residual-ledger` |
| 4 | `thm-mprk22-1-global-second-order-error` |

| Item level | B-page items |
|---:|---|
| 3 | `ex-two-compartment-stiff-reversible-transfer` |
| 4 | `ex-three-species-weighted-stoichiometric-conservation`, `ex-zero-denominator-corner-and-factorized-extension`, `cex-small-residual-does-not-certify-positivity` |
| 5 | `cex-forward-euler-negative-concentration-despite-stability` |

Levels were recomputed over the full reachable in-run item closure: 32 items including this batch and prerequisite suppliers, with no cycles and no label mismatches. The exact manifest levels and item supplier/page inputs are in `research/numerical-optimization-dynamics-2026-10-16-batch-78.pages.json` and `research/numerical-optimization-dynamics-2026-10-16-batch-78-dependency-inputs.json`.

## Proof construction and prerequisite evidence

The A page defines the finite paired-transfer system and proves the strict column-dominance inverse result locally by diagonal scaling and a nonnegative Neumann series. The standard Patankar Euler matrix proof then gives unique exact solvability, entrywise nonnegativity, and the column-sum conservation identity. The positive-tube local lemma proves its defect and one-step bound; the global theorem imports the local-to-global recurrence with its compact-tube assumptions intact.

The zero-compatible method is separately defined using source factors and never divides by a state coordinate. Its theorem proves nonnegative output and exact mass conservation for every positive step size; its local first-order defect is conditional on a fixed compact exact-solution tube. The source-factor definition requires C² extensions on an open neighborhood, while nonnegativity is required only on admissible nonnegative states; this permits factors such as `a_12(y)=y_3` near a zero coordinate without a mathematically impossible nonnegative C¹ extension across negative values.

MPRK22(1) is written as the specified Patankar Euler stage plus the averaged-rate final solve. The local proof verifies stage positivity, expands the selected formula through order two, proves the O(h³) defect, and derives the one-step derivative expansion directly from the differentiated stage/final equations. The separate preservation theorem proves positivity and conservation for positive inputs at every h>0. The global theorem applies the batch-28 recurrence only under the stated common compact positive tube containing exact states, numerical states, and stages.

The inexact-solve theorem bounds the stored-system residual, mass drift, and distance to the exact solve under the operationwise arithmetic and certified norm assumptions. It explicitly excludes coefficient-assembly error and requires the componentwise `sqrt(m) rho` margin to certify nonnegativity of the exact solution. The one-dimensional counterexample shows that arbitrarily small residuals alone do not certify the candidate’s sign.

No axiom of choice or other nonconstructive axiom is used. The arguments use finite matrices, explicit finite examples, the named calculus and ODE suppliers, and finite-grid recurrences.

### In-run supplier bodies and current readiness

I read the actual current supplier bodies and proof arguments used from batches 1, 7, 28, 35, 47, and 52. The exact interfaces and affected consumers are recorded in both dependency sidecars; each affected proof-contract entry also carries its exact `unresolved_suppliers` IDs. Current `step1Decision` checks show that six stored supplier rows say `ready` but are stale and cannot currently close: they return `closed:false` with `Item or dependency changed; record current readiness`.

| Supplier item | Batch | Required interface in this pair | Current author-readiness check |
|---|---:|---|---|
| `def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma` | 1 | successful operationwise model, exact zero operations, and normal nonzero intermediates | current `ready` record closes |
| `lem-rounded-linear-and-normal-residual-certificates` | 1 | sequential residual evaluation, `(m-1)u<1`, successful operations, certified norm bounds, and the exact W allowance | stored `ready` record is stale |
| `def-one-step-ode-method-local-defect-order-and-stability` | 7 | exact-start defect convention, uniform O(h^(p+1)) local order, and (1+Lh) one-step bound | stored `ready` record is stale |
| `thm-global-error-from-one-step-defect-and-stability` | 28 | fixed grid, common compact tube, exact initial error, local defect and one-step bound | stored `ready` record is stale |
| `prop-euler-midpoint-rk4-orders-and-stability-functions` | 35 | forward Euler scalar multiplier R_E(z)=1+z | stored `ready` record is stale |
| `def-xd-finite-column-generator` | 47 | nonnegative off-diagonal entries, zero column sums, and column index as source | stored `ready` record is stale |
| `thm-explicit-euler-absolute-stability-disk` | 52 | 0<h*rho<=2 on y'=-rho*y | stored `ready` record is stale |

The bodies remain available and were inspected, so independent authoring and proofs are complete. These stale records prevent readiness claims for their dependent batch-78 items; they require owner/current-supplier reconciliation. I did not edit those suppliers or overwrite any readiness record. The one closed batch-1 operationwise-model record does not close the separate stale rounded-residual lemma.

Published prerequisites used directly include the induced Euclidean matrix norm and compatibility statements; Euclidean Cauchy–Schwarz; the first-order IVP and local-defect definitions; C² smoothness, chain rule, algebra-of-derivatives and Taylor statements; and the total-derivative mean-value inequality. Their bodies and relevant hypotheses were inspected. No mixed-partial interchange is used in the MPRK stability proof.

## Full-text source reading and disposition

Three independent full-text treatments were read, with exact ranges and harvested-result dispositions in `research/numerical-optimization-dynamics-2026-10-16-batch-78.coverage.json` and `.source-coverage.json`:

- Kopecz and Meister, *On order conditions for modified Patankar-Runge-Kutta schemes*, [full arXiv PDF](https://arxiv.org/pdf/1702.04589): §1; §2, equations (4)–(7) and Lemmas 2.6–2.7; §3.1, Theorem 3.3; §3.2, equations (19)–(22) and Theorems 3.4–3.5. The local items independently prove their matrix, zero-factor, Taylor, and global-error claims.
- Blanes, Iserles, and Macnamara, *Positivity-preserving methods for ordinary differential equations*, [full PDF](https://personales.upv.es/serblaza/2022_M2AN.pdf): §3.4, PDF pp. 11–12 / printed pp. 1854–1855, equations (3.14)–(3.17), including the near-zero stage caution.
- Hairer, Nørsett, and Wanner, *Solving Ordinary Differential Equations I*, Chapter III, [full PDF](https://www.unige.ch/~hairer/poly/chap3.pdf): §III.2 exact-start local order and §III.3 Theorem 3.1 and proof for local-to-global propagation. The web reader returned an internal error on the official PDF URL. The recorded alternative searches found the complete official PDF, extracted chapter text, and prior successful full-text stamp in the batch-35 source archive; the full relevant proof sections were re-read from that local text. The current coverage preserves the initial reader failure, both searches, and the recovered fetch stamp.

The source-fetch checker verifies all 6/6 source placements across the two coverage carriers; there are 3 unique full-text documents and no source drops or unresolved retrievals. No `source_resolution` drop record is warranted. The coverage checklist reports 28 harvested results, 0 errors, and one `coverage-low-yield` warning: 6/28 results are scaffolded as included items. All remaining results have explicit inline, out-of-scope, or included dispositions with reasons; this warning is retained for Alpha confirmation rather than padded with unrelated items.

## Proof contracts, pages, and scoped checks

The A and B draft pages are complete and placed under `numerical-differential-equations-and-stochastic-dynamics`. The B page has the two-compartment stiff reversible transfer, weighted three-species mass conversion, zero-denominator corner, explicit Euler negativity, and residual-sign counterexample.

Final scoped checks on the current bytes:

- `manifest-deps`: 19 items, 0 missing arrays, 0 errors.
- `proof-contract --strict`: 19/19 contracts, 0 errors, 0 warnings; citations are exact supplier excerpts and step claims/inputs match the finished arguments.
- `precheck`: 14 proof-bearing items checked, 0 failing; five definitions/algorithms not applicable.
- `proof-layout`: 19 items, 51 numbered steps, 0 defects.
- `rendercheck`: 21 item/page files, no math, frontmatter, or rendering errors.
- `content-policy`: 19 items, 0 errors, 0 warnings.
- Focused `depcheck`: 0 errors/warnings over 601 prerequisite-closure items and 194 pages. Focused `fwdcheck` and `extcheck`: 0 errors/warnings; 19 assigned items checked by extcheck.
- Scoped dependency levels: 32-item in-run closure, no cycles or level mismatches.
- Source coverage: 28 harvested results, 0 errors, 1 low-yield warning. Source fetch: 6/6 placements verified and resolved.

The latest whole-run `item-dependency-levels.mjs check` reports 36 unrelated errors: 34 empty scaffold inventories (17 other A/B pairs) and 2 stale dependency levels in the SQP pair (`alg-sqp-reduced-bfgs-kkt-step`, `thm-sqp-reduced-bfgs-superlinear-under-dm`). No batch-78 item or reachable supplier is implicated; the scoped 32-item closure passes. An earlier run-wide `frontier-dependency-ledger` refresh attempt failed while parsing a malformed unrelated current carrier containing an unquoted `Adam: A Method...` YAML value. I left that run-wide derived ledger untouched; the assigned batch-78 cross-batch review and dependency-input sidecars are present.

Step 1 decisions were recorded without `--owner`: 8 items are current `ready`, and 11 are `escalated` due to the exact stale supplier records above or their dependent local items. The records are authorship readiness/escalation evidence, not independent proof approval.

## Current run status and handoff

The latest disk-recomputed native status at `2026-10-16T03:44:56.297Z` reports the run still at `1-scaffold`, 67/107 covered, no worker in flight, and an owner-held blocker requiring repairs and recertification. The missing units listed there are 56, 62, 63, 67, 68, 69, 71, 72, plus 32 more; this is outside batch 78’s ownership. I left run state, shared plans, verdicts, published content, and other pairs unchanged.
