# Batch 32 authoring notes — spectral regularization and parameter choice

Run: `numerical-optimization-dynamics-2026-10-16`  
Batch: `32`  
Pair: `spectral-regularization-and-parameter-choice`

## Controlling plan and conflict check

- Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, the beta
  scaffold brief, the batch task, the complete run-local owner direction, the
  assigned plan locations L453/L465, the full `contract-inv1` appendix, the
  current `plan-spec.json` entry and the batch-32 dependency-level artifact.
- The assigned task's locations L453 and L465 repeat the same INV1 scope. The
  exact `contract-inv1` appendix supplies the binding proof hypotheses and
  finite-algorithm details. The run-local owner direction supersedes the
  older inventory's promise that an owner might supply scalar filter bounds
  or spectral calculus: this pair authors those missing local prerequisites.
- The current plan, task and `plan-spec.json` agree on the pair identity,
  required pages, compact-operator Tikhonov scope, discrepancy principle,
  GCV/L-curve heuristics, discretization term and three example families.
  `plan-spec.json` is an inherited planning record with an empty proposed
  item inventory and its own “design only” source status; neither is proof or
  source-reading evidence. This batch fills the native batch-32 manifest.
- The old metadata calls `NA44` and the finite-matrix Moore–Penrose page
  prerequisites. The controlling plan requires actual batch-25 NA44 item
  bodies and the existing compact self-adjoint spectral theorem. The finite
  matrix Tikhonov filter and minimizer are used only for the explicitly
  finite-grid GCV/L-curve procedures and finite illustrations; they do not
  supply any compact-operator convergence, source-rate or Morozov theorem.
- Hansen's penalty is written with coefficient `lambda_H^2`; the authored
  definition uses `lambda` as the coefficient of `||x||^2`, so
  `lambda=lambda_H^2`. Clason writes source smoothness as a power of `|A|`;
  since `|A|=(A*A)^(1/2)`, the present source exponent `nu` corresponds to
  Clason's exponent `2 nu`.
- Hansen's Chapter 5 GCV display divides by
  `[trace(I-H)]^2`; the controlling contract uses
  `m(1-tr(H)/m)^2`. The latter score is exactly `m` times Hansen's score for
  fixed data dimension `m`, so it selects the same grid minimizer. The local
  lemma derives the required mean-squared leave-one-out surrogate directly.
- The L-curve source defines a continuous log-log curvature. The contract only
  specifies a finite input grid; this batch declares the discrete Menger
  curvature of each consecutive triple, zero for a degenerate triple, and a
  least-index tie rule. It makes no universal optimality claim.

## Inventory, logical dependencies, and levels

The batch-32 manifest records 17 A-page items and 3 B-page examples, below the
100-item cap. Item levels are computed from actual `deps`; external published
items do not raise the level. The in-run NA44 suppliers are at levels 0
(`lem-hilbert-tikhonov-normal-operator-invertible`), 1
(`lem-hilbert-tikhonov-noise-amplification-bound`), and 6
(`thm-tikhonov-error-chain-with-discretization-and-residual`).

| Level | Batch-32 items |
|---:|---|
| 0 | `alg-discrete-l-curve-parameter-choice`; `lem-compact-gram-operator-is-positive-and-has-kernel`; `lem-compact-spectral-multiplier-is-well-defined`; `lem-linear-smoother-gcv-expression`; `lem-square-summable-sequences-form-a-hilbert-space` |
| 1 | `alg-gcv-finite-grid-parameter-choice`; `def-compact-spectral-filter-and-qualification`; `thm-discrete-l-curve-grid-search-is-well-defined` |
| 2 | `lem-tikhonov-bias-converges-for-minimum-norm-solution`; `lem-tikhonov-data-residual-continuity-monotonicity-and-limits`; `lem-tikhonov-source-condition-bias-bound`; `thm-gcv-grid-search-returns-score-minimizer`; `ex-gcv-under-smoothing-tie-on-one-observation` |
| 3 | `alg-morozov-discrepancy-bracketing-and-bisection`; `thm-tikhonov-convergence-under-noise-parameter-coupling`; `thm-tikhonov-source-condition-rate-and-qualification-saturation` |
| 4 | `thm-morozov-discrepancy-choice-converges`; `ex-compact-diagonal-tikhonov-bias-noise-and-source-saturation`; `ex-morozov-noise-level-underestimate-prevents-crossing` |
| 7 | `thm-tikhonov-forward-discretization-and-stopping-coupling` |

The batch dependency-level input places batch 32 at batch level 2 after batch 25. Item-level recomputation includes the in-run supplier levels: `thm-tikhonov-forward-discretization-and-stopping-coupling` depends directly on batch-25 `thm-tikhonov-error-chain-with-discretization-and-residual` at item level 6, so its item level is 7. The manifest, carrier and A-page item order record that result.

The cross-batch input records the NA44 page edge and each direct item-level
edge to batch 25. The assigned pair does not rely on an unverified future
supplier. The observed native run status listed batch 25 as authoring in
flight; the current page manifest, page carrier, exact item bodies and proof
contracts were inspected. `verified` in the cross-batch input means that the
present mathematical interface matches, not that batch 25 has received an
independent review or acceptance. The owner should rebind the current supplier
hashes after native reconciliation if those carriers change.

## Supplier interfaces checked

- Read the current `numerical-inverse-problems-and-regularization-error`
  page and its batch-25 manifest. Read the full proof of
  `lem-hilbert-tikhonov-normal-operator-invertible`, which proves bijectivity
  and the `1/lambda` inverse bound under Countable Choice.
- Read the full proof of
  `lem-hilbert-tikhonov-noise-amplification-bound`; it proves the
  `1/(2 sqrt(lambda))` bound for bounded Hilbert-space operators by the
  normal-equation energy identity. It imports no compact source rate.
- Read the full proof and remarks of
  `thm-tikhonov-error-chain-with-discretization-and-residual`. The local
  discretization theorem uses its exact five-term chain and exact residual
  bound. Its remark leaves approximate residual evaluation conditional on a
  separate certificate; no finite-precision guarantee is claimed here.
- Read the published finite-matrix objective and minimizer, the full SVD proof,
  and the compact self-adjoint spectral theorem statement and proof. The
  compact theorem's Countable Choice hypothesis is carried by the local
  compact spectral arguments. No full Axiom of Choice is imported.
- All direct suppliers are linked in item `deps` and the proof contracts quote
  only their current bodies. These checks are mathematical interface checks,
  not independent review or supplier acceptance.

## Full-text sources and dispositions

`source-fetch-check --stamp` fetched and stamped all four sources; the command
reported `4/4 source(s) fetch-verified` and `4/4 source(s) resolved`.

- Clason, *Regularization of Inverse Problems*: full 119-page PDF fetched.
  Inspected compact-operator and spectral-theorem material (Chapter 2,
  PDF pp. 8–13), compact singular systems and fractional powers (Chapter 3,
  pp. 21–29), discrepancy existence (Chapter 4, Theorem 4.7, pp. 34–35),
  filter qualification and Morozov rate theorem (Chapter 5, pp. 46–52), and
  Tikhonov source rates and saturation (Chapter 6, pp. 55–58). It supplies an
  independent infinite-dimensional regularization treatment; every local
  compact estimate and theorem is proved in this pair.
- Hansen, *Introduction to Inverse Problems*, Chapter 4: all 29 slides read.
  Slides 5–8 cover filtered singular directions, 11–18 discrete Tikhonov,
  22–23 perturbation, and 25–29 L-curve behavior. The finite formulas are
  context only; the compact operator theorems are local.
- Hansen, Chapter 5: all 27 slides read. Slides 4–6 give the bias/noise split,
  8–9 the discrepancy principle and noise-level caveat, 10–14 the L-curve,
  15–18 leave-one-out/GCV and occasional failure, and 23 the heuristic
  limitations. The L-curve's finite-grid curvature convention and GCV
  minimizer are stated/proved locally.
- Teschl, *Topics in Real and Functional Analysis*: full PDF fetched; inspected
  Chapter 1, printed pp. 8–10 on sequence-space completeness and pp. 17–18 on
  `ell^2(N)` as a Hilbert space. Teschl refers to the analogous `ell^1`
  completeness proof; this batch supplies the full coordinate-limit proof for
  `ell^2`.
- The original design lists Engl–Hanke–Neubauer as an acquisition target. It
  was not fetched or read, is not cited in these carriers, and is not marked
  dropped or resolved. The two independent inverse-problem treatments above
  plus the separate sequence-space treatment satisfy the authored page's
  full-text coverage; no theorem is attributed to the unread book.
- No retrieval failed, so there is no `source_resolution` failure record or
  source drop. Every harvested item has an `included`/`inline` disposition in
  the batch coverage file; the local proofs remain the logical suppliers.

## Checks and readiness

- source-fetch-check --stamp: 4/4 sources fetch-verified, 4/4 resolved, and 0 newly stamped.
- coverage-checklist: 1 page, 22 harvested headings, 0 errors and 0 warnings. All source rows have named results, source kinds and dispositions.
- Scoped dependency recomputation against the complete run graph: all 20 batch-32 dependency levels match the computed levels and each manifest deps list matches its item carrier; no in-run cycles. The forward-discretization theorem is item level 7 because its direct batch-25 error-chain supplier is level 6. Batch 32 remains at scheduling level 2 after batch 25.
- proof-contract --strict: 16/16 proof-bearing items checked, 0 errors and 0 warnings. precheck: 20 files, 16 proof-bearing items checked, 0 failures. proof-layout: 20 items, 51 steps, 0 defects.
- Focused depcheck: 20 assigned items, 955-item dependency closure, 0 errors and 0 warnings. rendercheck: 22 assigned item/page files, 0 errors and 0 warnings.
- The full-run item-dependency-levels command currently exits 1 with 132 errors: 112 empty scaffold inventories plus 20 dependency-level mismatches outside batch 32. The mismatches are 17 items on batch 35 (runge-kutta-methods-and-order and its examples), lem-proximal-objective-has-quadratic-growth-from-minimizer on batch 40, def-generalized-schur-form on batch 48, and ex-symplectic-euler-harmonic-oscillator on batch 54. No batch-32 item appears among those errors. These other-pair inventories and labels are left for owner reconciliation.
- Step 1 readiness records are written for the 20 assigned items below the item-specific records. They record direct dependencies, placement, contract status and the scoped evidence above. They are authoring records, not independent approval.
