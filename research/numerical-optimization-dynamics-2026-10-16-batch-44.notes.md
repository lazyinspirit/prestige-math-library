# Batch 44 authoring notes

## Inventory and levels

The manifest contains 15 A items and 4 B examples. The scoped dependency graph across batches 7, 28, and 44 has no cycles and assigns levels 0–4. Batch 44's item labels are: A suppliers at levels 0–3; the four B examples at levels 1, 3, and 4. The detailed within-batch edges and all 19 item levels are in `numerical-optimization-dynamics-2026-10-16-batch-44.dependencies.json`.

The dispatch says dependency level 2, prerequisite batch 28, and scheduling input `f48ac8861adc42cbfacb089c08f9a8fd52e28baeaba8267dbc902bb8dd3b31e0`. The live shared dependency artifact read after the item graph was finalized on 2026-10-16 had input hash `d106e23ca34fd26cb882ad0fc8420ded3ebe5d5a6ae824bfebc5c084932146c6`, the same level 2, but prerequisite batches 7 and 28. The additional batch-7 edge is explained by direct use of `def-one-step-ode-method-local-defect-order-and-stability` in the retarded Euler theorem and RK4 example. The shared artifact was left untouched; the dispatch/artifact hash and prerequisite-set mismatch is for owner reconciliation.

## Plan and design reconciliation

The task and `plan-spec.json` agree on page IDs, order, category, companion, and the A-page requirement `global-ode-and-density-error`. The T08 design's opening scope asks for a scalar neutral first-order guarantee when `|a|<1`; its binding appendix warns that an external neutral interface supplies only a linear derivative relation and that general neutral equations need their own compatibility, history, and stability proof. The local A page resolves this by defining a scalar compatible problem, proving its own method-of-steps existence/uniqueness and finite shift inverse, and deriving a finite-horizon Euler error bound under piecewise-C2 regularity. No claim is transferred to state-dependent delays or `|a|≥1`; the B example shows why the strict stable branch matters. The retarded global-error claim is also stated with time-Lipschitz `f` and an explicit common tube, then the DDE-specific auxiliary-ODE defect is proved before invoking the global one-step theorem.

The finite-window distributed-delay definition is `I_K[y](t)=int_0^tau K(theta)y(t-theta)dtheta`. The cited Hairer chapter uses a broader Volterra/convolution history integral; Pulch's bounded-delay model supplies a closer finite-support interface. Neither source supplies the assigned midpoint error split, which is proved locally with separate node-history and exact-history quadrature terms.

## Cross-batch supplier inspection

The exact batch-28 theorem `thm-global-error-from-one-step-defect-and-stability`, its discrete recurrence supplier `lem-discrete-one-step-error-recurrence-bound`, and their relevant direct/transitive definitions and proofs were read. The theorem is still a draft; this is interface verification, not proof acceptance. The retarded proof verifies its common tube, explicit-Euler stability, local defect, and zero-initial-error hypotheses before using it. Batch 7's `def-one-step-ode-method-local-defect-order-and-stability` was also read and is used only for its exact local-defect convention. The batch-28 page requires the Picard and one-step pages; both page bodies were inspected, as were the exact used item bodies. The one-step page also declares mixed-partial and total-derivative page requirements; those published page bodies were inspected, but no item claim from them is used. No separate merged batch-28 page body or page-level theorem is imported. The dependency input records these transitive page edges and their limits.

## Source evidence

Three full-text sources were inspected: Zennaro's complete 211-page lecture notes; the complete 27-page Guglielmi–Hairer DDE chapter; and Pulch's complete 26-page v3 paper on polynomially distributed delay. The complete relevant arguments and locators, per-section dispositions, file hashes, and fetch stamps are in the batch coverage JSON. The source fetch command verified all six source entries (the A and B coverage records each preserve the same three documents); no retrieval failed, no recovery retry was needed, and no source was dropped. The one-step/OE global convergence source is the actual batch-28 item interface, not counted as an independent DDE literature source.

## Scope and costs

The retarded algorithm stores all history nodes, so storage is `O(d(T+tau)/h)` and it makes no constant-memory claim. The distributed midpoint method separately bounds history interpolation and quadrature remainder. Breakpoints `k tau` are grid nodes for `h=tau/m`; no higher-order rate is asserted for a crossing step. The neutral result is scalar, compatible, fixed-delay, and finite-horizon. No state-dependent-delay transfer is made.

## Final scoped checks and readiness

- Scoped dependency-level calculation over batches 7, 28, and 44 checked 32 items with no cycles or label errors. Batch 44 levels match the manifest: A levels 0,1,0,1,1,2,3,1,2,2,2,3,1,2,3; B levels 4,1,3,4.
- Manifest-to-carrier audit checked all 19 assigned items: direct `deps` and `dependency_level` fields match exactly.
- `coverage-checklist` reports 2 pages, 16 harvested results, 0 errors, and 0 warnings.
- `source-fetch-check --stamp` verified 6/6 source entries; the subsequent no-network check also verified 6/6. No retrieval failed, no retry was needed, and no source was dropped.
- Strict proof-contract validation checked all 13 proof-bearing carriers with 0 errors and 0 warnings. Contracts include complete step mappings, exact supplier-section excerpts, boundary worksheets, axioms, and applicable finite checks.
- Explicit `proof-layout.mjs` scan checked 19 assigned items and 48 proof steps with 0 defects.
- `step1-decisions.mjs record` marked all 19 assigned items ready with their examined dependency IDs and evidence. A targeted readback confirms 19/19 records are current. These are authoring readiness records only, not independent approval.
- No test suite was run; the required scoped authoring checks above were run. No published page, shared plan, autopilot state, or verdict was edited.

## Owner-requested page-carrier continuation

Created the two missing draft carriers from the current batch-44 manifest and the controlling T08 design:

- `library/numerical-differential-equations-and-stochastic-dynamics/delay-differential-equations-and-history-discretization.md` lists the 15 A items in manifest order.
- `library/numerical-differential-equations-and-stochastic-dynamics/delay-differential-equations-and-history-discretization-examples.md` lists the 4 B examples in manifest order.

The current T08 plan text and `plan-spec.json` agree on pair identity, order, category, companion, `requires`, and the rich retarded, neutral, distributed-delay, breakpoint, and cost scope. The historical T08 source record in `dynamics-inventory.json` uses category `numerical-analysis`; the current plan, `plan-spec.json`, task, and native manifest use `numerical-differential-equations-and-stochastic-dynamics`, so current placement follows the latter. The earlier neutral-interface reconciliation above remains in force. No item, proof contract, manifest, coverage entry, source record, or logical dependency was changed in this continuation.

The 19 existing Step-1 readiness records were checked individually against their current item/dependency hashes: 19/19 remain closed. They were preserved rather than overwritten; the page-carrier addition does not alter the batch item/dependency inputs. The current per-batch level check also passes: 2 pages, 19 items, maximum level 4, no level errors. The two new page carriers passed targeted `rendercheck` (2 checked, 0 errors/warnings); scoped `depcheck` (19 items, 580 prerequisite-closure items, 0 errors/warnings); page/manifest reconciliation (15/15 A items and 4/4 B examples); and `coverage-checklist --require-destination` (2 pages, 16 harvested results, 0 errors/warnings). `proof-layout` on the 19 unchanged assigned items found 0 defects across 48 steps. The previously recorded stamped source check remains 6/6; no source or harvest result changed.

## Current run-wide blockers observed during refresh

The run-wide `step1-decisions.mjs check` could not load the full frontier: renderer YAML parsing fails in the outside-scope batch-65 item `items/ex-robertson-reaction-system-newton-work.md` at frontmatter line 26, column 14. The `sources.references` title line contains literal `\n` separators before its `url` and `locator` fields. The batch-44-only readiness check above succeeds; this foreign carrier was not edited.

The run-wide `item-dependency-levels.mjs check` currently reports 80 errors outside batch 44: 70 empty scaffold page inventories in batches 48, 63, 67, and 69–107, plus 10 item-level issues. The ten item IDs are `lem-qz-two-sided-local-computed-update-bound`, `alg-finite-budget-qz-iteration-with-deflation-and-residual`, `prop-finite-budget-qz-iteration-terminates-and-preserves-pencil-equivalence`, `alg-shift-invert-and-harmonic-ritz-extraction`, `thm-shift-invert-map-and-inexact-solve-residual-transfer`, `ex-interior-vibration-mode-shift-invert`, `cex-euler-moments-diverge-for-cubic-dissipative-sde`, `ex-noise-induced-instability-in-explicit-em`, `cex-forward-euler-negative-concentration-despite-stability`, and `ex-constant-mortality-and-age-localized-fertility`. Batch 44's scoped check remains clean; no foreign carrier was edited.

The current shared batch-level artifact has input hash `817c9f97a6b3bdd9a31c5411ed1a41aaca78376485e018549a15e27b0eae32b3` and still records batch 44 at level 2 with prerequisites 7 and 28. The original dispatch/dependency evidence records only batch 28 as a dispatch prerequisite. This scheduling-input mismatch is unchanged by the page continuation and remains for owner reconciliation; shared dependency artifacts and native dispatch evidence were left untouched.
