# Batch 75 authoring notes — Differential algebraic equations and consistent initialization

Run numerical-optimization-dynamics-2026-10-16, batch 75, role beta.

## Controlling plan and conflicts

- Read the owner direction, the complete T06 section in research/plan-numerical-dynamics-track.md, the T06 entry in research/plan-spec.json, and the dynamics audit. T06 page IDs, title, prerequisites, mathematical scope, examples, cost note, and warning about singular/high-index/inconsistent systems agree. There is no plan/spec conflict.
- The plan-spec scaffold initially had an empty item inventory; this was unfilled scaffold metadata, not a competing scope. The assigned manifest now contains the complete local inventory and direct logical dependencies.
- The current dispatch and batch-dependency-levels artifact bind input hash 6dfd0c45f2a8223c7d6f772198513d38987ad90fa865c52f24f2241dd5c6d510, level 4, prerequisite batches 3 and 65. The archived first-attempt prompt records stale hash d106e23ca34fd26cb882ad0fc8420ded3ebe5d5a6ae824bfebc5c084932146c6; the current dispatch/artifact are controlling.

## Inventory and item levels

The A page owns 12 items; the B page owns three examples. Levels below use actual in-run logical suppliers only. The external/published IFT, chain-rule, Taylor, norm, and ODE-definition suppliers do not raise the level.

| Level | Items |
|---:|---|
| 0 | def-semi-explicit-index-one-dae-and-consistent-initial-data |
| 1 | def-regular-differentiation-index; thm-index-one-dae-implicit-function-reduction |
| 2 | lem-index-one-dae-algebraic-residual-to-state-error; alg-index-one-dae-consistent-initialization; ex-index-one-circuit-consistent-initialization-and-be-step; ex-index-two-dae-algebraic-residual-does-not-control-state; ex-index-three-pendulum-by-differentiation |
| 3 | alg-index-one-dae-backward-euler-stepper; alg-index-one-dae-bdf2-stepper |
| 4 | lem-index-one-dae-backward-euler-local-branch; lem-index-one-dae-bdf2-local-branch; thm-index-one-dae-finite-budget-solvers-terminate |
| 5 | thm-index-one-dae-backward-euler-first-order-with-residuals; thm-index-one-dae-bdf2-second-order-with-residuals |

The semi-explicit DAE definition uses justified_by for its local IFT branch result. The theorem depends on the definition through deps; this records well-definedness without a dependency cycle. The BE and BDF2 stepper manifests include their direct IFT dependency.

## Supplier verification and limits

- Batch 3: inspected alg-finite-budget-newton-for-vector-residuals and alg-newton-correction-for-vector-residuals. Newton tests the current residual before the budget branch, uses Js=-r, makes at most B corrections and B+1 Newton residual evaluations, and makes no arbitrary-start convergence or forward-error claim.
- Batch 65: inspected def-implicit-residual-and-algebraic-error-units and def-backward-euler-step-equation. The former distinguishes update and derivative residual units and says residual is not forward error without an inverse/stability bound. The latter defines the implicit endpoint equation without asserting existence or uniqueness.
- Batch 36: inspected alg-variable-step-bdf2-with-selected-implicit-branch and lem-variable-step-bdf2-interpolation-and-local-defect. The formula specializes at ratio one to the local constant-step equation; the lemma gives the cubic unscaled local residual. The local DAE proof separately handles the algebraic residual.
- Batch 28: inspected lem-discrete-one-step-error-recurrence-bound and its complete geometric-sum proof. It applies to the BE p=1 and BDF2 weighted-error p=2 recurrences over their respective finite intervals.
- Published suppliers inspected: thm-parametrized-implicit-function-theorem-with-higher-regularity, thm-chain-rule-for-total-derivatives, thm-multivariable-taylor-formula-with-lagrange-remainder, thm-cauchy-schwarz-and-the-euclidean-norm, and def-first-order-ode-initial-value-problem-and-solution. Their exact statement/definition excerpts and uses are in the contracts.
- No supplier body is unavailable. Some in-run carriers are drafts and await independent review; this handoff records no approval or acceptance.

## Scope and mathematical decisions

- The residual-to-algebraic-error lemma now has common gamma, Lambda, and rho over a compact base tube. Componentwise Taylor remainders aggregate with a sqrt(m) factor, so the common radius condition is rho <= gamma/(sqrt(m) Lambda) when Lambda>0. Both order theorems carry this uniform condition; pointwise invertibility alone would not give a uniform global error constant.
- The BE theorem states T>0 and N>=1; BDF2 states T>0 and N>=2. The BE and BDF2 theorems include their starting and algebraic/derivative residual budgets explicitly.
- The BDF2 error proof derives its two-level increment recurrence and weighted scalar recurrence locally; it does not infer DAE accuracy from a finite Newton status.
- Newton wrappers reevaluate a residual after a root status when they need to distinguish exact from approximate consistency or retain unscaled residual blocks. The finite-work theorem counts these extra evaluations: at most B+2 for initialization and S(B+2) for S attempted time steps.
- The local differentiation-index convention counts through the first derivative of the algebraic variables and is not advertised as a universal index theory. The B example x'=z, 0=x shows index two in that convention, singular g_z, zero algebraic residual with unbounded algebraic-state discrepancy, and a start that is algebraically but not fully consistent. The pendulum example computes all three constraint derivatives; its multiplier derivative is -3 g0 v2/ell^2.
- No choice axiom is used. Compactness only supplies finite subcovers. Costs are stated as Newton residual/Jacobian evaluations and block solves without a backend-independent complexity bound.
- A/B capacity is 12 and 3 items, respectively, well below 100.

## Sources and retrieval record

- Hairer–Wanner §VI.1: the complete 10-page author-hosted PDF was read. source-fetch-check --stamp fetched 387,453 bytes (10 pages; SHA-256 prefix 9c363af5c5127b1a).
- Atkinson–Han–Stewart, Chapter 10: the relevant DAE, consistency, index-one, higher-index pendulum, implicit Euler and BDF passages were read in the complete 261-page book PDF. source-fetch-check --stamp fetched 1,504,644 bytes (261 pages; SHA-256 prefix d565582846a6abae).
- Driscoll–Braun FNC Julia edition §4.5: the complete Newton-system section was read, including the correction, finite iteration code, and convergence caveat. source-fetch-check --stamp fetched 71,485 bytes (15,280 text characters; SHA-256 prefix e80e7f0829b4a7c4).
- The previously cited Hairer–Wanner Chapter VII PDF was unavailable after the original URL and five recovery routes. Its drop record includes each attempt, searches, replacement full-text source, and the local argument/dependencies for the affected definition and pendulum example. No mathematical coverage was dropped.
- The old fncbook.com/nonlin-sys URL could not be opened. Search recovered the same complete FNC §4.5 on the authors' current site, which was read and stamped; the item citation now names that retrieved source.
- The fetched sources give authoring context only. Every authored result has a local proof or exact procedure; no source or source-fetch stamp is proof acceptance.

## Cross-batch dependencies

The detailed direct interfaces, exact supplier IDs, affected claims, and inspection evidence are in batch-75.cross-batch-dependencies.json. No supplier body is unavailable. Batch 36 and 28 appear as direct item suppliers for the BDF2 formula/defect and recurrence proof, within the transitive prerequisite closure through the assigned T01 page.

## Scoped checks and handoff

- Final precheck: 15 assigned item files, 10 proof-bearing items checked, 0 failures. The ten proof items record `verification.precheck: pass`; the five definitions/algorithms are not applicable.
- Final proof layout: `node tools/proof-layout.mjs` on the 15 explicit item paths reported 44 steps and 0 defects. Strict proof-contract validation reported 15/15 items, 0 errors, 0 warnings. The contract entries were regenerated after the canonical step labels changed.
- All 15 contracts retain eight boundary dispositions. No registered finite-smoke check applies to these DAE claims; finite circuit arithmetic, consistency counterexamples, and pendulum constraint calculations are fully worked in the B-page verification arguments, and no smoke result is claimed.
- Final rendercheck on the 15 items and both assigned pages: 17 files, 0 errors, 0 warnings. Focused depcheck on the 15 items and 2 pages reported 0 errors and 0 warnings across its 612-item / 164-page prerequisite closure.
- Recomputed item levels on batches 3, 28, 36, 65, and 75: 70 items checked, 0 errors. All 15 batch-75 levels match the manifest (levels 0 through 5 shown above). No cycle was found in the scoped closure.
- Source-fetch check with `--stamp`: 3/4 sources fetch-verified, 4/4 resolved, with one documented drop and no new stamp needed. The Hairer–Wanner VII.1 source row retains its original attempt plus five recovery routes and the two local alternative arguments; uninspected candidate contents were removed rather than reported as harvested.
- Coverage checklist: 2 pages, 72 harvested results, 0 errors, 1 advisory low-yield warning. The B page has 8/31 results marked included; Alpha should confirm the remaining dispositions. The active sources and every harvested result have valid dispositions.
- Full-run item-dependency check is blocked by foreign manifests: 3 duplicate examples (`ex-parareal-dissipative-scalar-heat-mode`, `ex-parareal-oscillatory-coarse-phase-error`, `ex-parareal-nonlinear-tube-escape`); 50 empty inventories (both A and examples pages for `interacting-particle-mean-field-and-vortex-blob-error`, `gauss-newton-and-levenberg-marquardt-methods`, `sqp-active-set-and-augmented-lagrangian-methods`, `constrained-dynamics-shake-and-rattle`, `coagulation-fragmentation-and-sectional-population-balance-numerics`, `iterative-regularization-and-early-stopping`, `variational-crimes-and-strang-lemmas`, `spectral-collocation-and-galerkin-methods`, `minimum-energy-paths-string-neb-and-saddle-certificates`, `finite-basis-projector-energies-and-variational-electronic-structure`, `sparse-grid-cubature-and-mixed-regularity`, `exponential-and-integrating-factor-integrators`, `deferred-correction-and-collocation-iterations`, `discrete-continuous-and-pde-adjoint-sensitivities`, `self-consistent-projector-iterations-and-certified-mixing`, `imex-and-operator-splitting-methods`, `polynomial-chaos-stochastic-collocation-and-galerkin-uq`, `direct-transcription-and-numerical-ode-optimal-control`, `finite-element-pde-constrained-optimization`, `numerical-identifiability-and-optimal-experiment-design`, `simulation-gradient-estimation-and-simultaneous-perturbation`, `multirate-and-partitioned-time-integration`, `event-location-and-hybrid-trajectory-error`, `langevin-splittings-and-invariant-measure-error`, and `global-sensitivity-anova-and-sobol-estimation`); and two unrelated labels (`lem-tamed-euler-uniform-moment-bounds` is 3 but computes to 2; `thm-tamed-euler-strong-order-half` is 4 but computes to 3). No cycles were reported.
- Whole-run batch-dependency check and all 15 `step1-decisions.mjs record` attempts are blocked before item evaluation by the duplicate `ex-parareal-dissipative-scalar-heat-mode`. Both ready and escalated record attempts failed with that exact loader error; no readiness record was written and `--owner` was not used. Whole-run proof-contract coverage separately stops at the empty inventory for `direct-transcription-and-numerical-ode-optimal-control`. These are outside batch 75 and were not edited.
- Read-only autopilot status remains running at 1-scaffold (57/106 covered), with the pre-existing owner repair/recertification blocker and the duplicate-item blocker; nothing is in flight. No engine state, verdict, shared plan, or foreign item was changed by this batch. Independent review and the Alpha coverage confirmation remain outstanding.
