# Batch 65 authoring notes — Implicit stiff time stepping and algebraic error

Run `numerical-optimization-dynamics-2026-10-16`, batch 65, role beta.

## Controlling plan and conflicts

- Read the canonical instructions, schema, workflow, owner direction, complete T01 design in `research/plan-numerical-dynamics-track.md`, and the T01 row in `research/plan-spec.json`.
- The design and spec agree on page IDs, category, prerequisites, and mathematical scope. The plan-spec row has `items: []` because item inventories are a Step-1 scaffold output; the assigned batch manifest supplies the 20-item inventory. This is a phase distinction, not a scope conflict.
- The owner direction controls the stale task/design text. The authored scope retains backward Euler, selected-root variable-step BDF2, the chosen two-stage L-stable SDIRK, two-stage Radau IIA, finite Newton/chord work, residual units, local branch existence, consistent starts, and residual-sensitive order guarantees.
- Scalar A/L stability is proved from each displayed rational function. No nonlinear L-stability or nonnormal matrix-growth claim is made. Newton status and residual are not treated as forward accuracy.
- The solver algorithms record Jacobian assemblies, factorization attempts, and linear solves; no sparse complexity bound is asserted.

## Inventory, dependencies, and item levels

The two batch pages contain 16 A-page items and 4 B-page examples, all below the 100-item cap. Item levels are computed over every in-run supplier in every current run manifest, including cross-batch items; only published or otherwise out-of-run suppliers leave the level unchanged. The manifest and item frontmatter agree on all 20 batch-65 levels.

| Level | Item | In-run suppliers that determine the level |
|---:|---|---|
| 0 | `def-implicit-residual-and-algebraic-error-units` | none |
| 0 | `lem-strongly-monotone-continuous-map-is-bijective` | none |
| 1 | `def-backward-euler-step-equation` | residual-units (0) |
| 1 | `def-implicit-runge-kutta-stage-equations` | residual-units (0) |
| 2 | `def-two-stage-sdirk-tableau` | RK-stage-equations (1) |
| 2 | `def-two-stage-radau-iia-tableau` | RK-stage-equations (1) |
| 2 | `def-scalar-rk-a-and-l-stability` | RK-stage-equations (1) |
| 2 | `lem-small-step-implicit-rk-branch-and-residual-error` | residual-units (0), RK-stage-equations (1) |
| 2 | `alg-newton-chord-implicit-residual-with-factorization-reuse` | residual-units (0), Batch 3 finite Newton (1), Batch 3 Newton correction (0) |
| 2 | `thm-backward-euler-dissipative-resolvent-contraction` | BE equation (1), strongly-monotone lemma (0) |
| 3 | `prop-two-stage-sdirk-order-two-and-l-stability` | selected tableau and local branch items (maximum 2) |
| 3 | `prop-two-stage-radau-iia-order-three-and-l-stability` | selected tableau and local branch items (maximum 2) |
| 3 | `thm-backward-euler-algebraic-update-residual-error-budget` | BE resolvent theorem (2) |
| 3 | `ex-newton-budget-exhaustion-with-a-unique-backward-euler-root` | Newton/chord algorithm and BE result (maximum 2) |
| 4 | `thm-implicit-rk-global-order-with-stage-residual-control` | local order propositions (3), Batch 28 global-error theorem (1), Batch 28 recurrence lemma (0) |
| 4 | `ex-stiff-scalar-decay-and-trapezoid-ringing` | scalar order/stability propositions (3) |
| 4 | `ex-dissipative-backward-euler-residual-contraction` | BE residual-budget theorem (3) |
| 5 | `cor-constant-step-bdf2-order-two-with-consistent-start` | Batch 36 BDF2 theorem (4), Batch 36 algorithm (2), local BE branch result (2) |
| 6 | `alg-implicit-stiff-time-stepper-with-consistent-starts` | constant-step BDF2 corollary (5), remaining in-run suppliers including BE residual budget theorem (maximum 4) |
| 7 | `ex-robertson-reaction-system-newton-work` | stiff-stepper algorithm (6), Newton/chord algorithm (2) |

The assigned dispatch states batch dependency level 3 with prerequisite batches 3, 28, and 36. Its current scheduling input is `6dfd0c45f2a8223c7d6f772198513d38987ad90fa865c52f24f2241dd5c6d510`. An earlier notes draft named `199643678bed0f69c9cc3ffee610ee3a7afd6ba5ff86098716a90efdd782be58`; that value is stale and is superseded by the current task and artifact. The shared generated dependency-level artifact has not been edited. Its read-only whole-run check stops at the duplicate Parareal item before recomputing levels; batch 65's own levels were checked separately and are consistent. Batch 28's dependency on Batch 7's one-step definition is recorded as a verified transitive edge in the cross-batch evidence.

## Supplier verification and unresolved interfaces

- Batch 3: inspected `alg-finite-budget-newton-for-vector-residuals` and `alg-newton-correction-for-vector-residuals`. The residual test precedes the budget check; statuses and the correction equation $Js=-r$ are preserved. Also inspected `thm-updated-jacobian-newton-local-quadratic-convergence` and its vector Taylor-remainder supplier. Its $C^2$, Lipschitz-Jacobian, invertible-root, and initial-ball hypotheses are not assumed by our finite-solver procedures; no local or global Newton-convergence claim is imported.
- Batch 28: inspected the complete statement and proof of `thm-global-error-from-one-step-defect-and-stability` and `lem-discrete-one-step-error-recurrence-bound`. The exact-solve trajectory meets the common-tube, local-defect, stability, and starter hypotheses. The stage-residual perturbation is proved separately; stiff accuracy includes the last-stage residual block and gives the bound $3Dh^{p+1}$ per step.
- Batch 36: inspected the BDF2 algorithm and order theorem, plus the interpolation/local-defect lemma and increment-ratio recurrence. The corollary uses the exact supplier assumptions: $r_{\min}=r_*=1$, a compact tube with the path in its interior, max-norm Lipschitz control, a consistent starter, and the prescribed unique-root branch condition.
- Batch 7 (transitive through Batch 28): inspected `def-one-step-ode-method-local-defect-order-and-stability`; its exact-start defect and $1+Lh$ stability convention match the Batch-28 interface.
- Published prerequisites: the strongly monotone surjectivity proof uses the published finite-dimensional Brouwer theorem, whose no-retraction and retraction-construction suppliers were inspected. The RK branch proof uses Euclidean completeness and Banach's fixed-point theorem; order expansions use the published multivariable Taylor theorem. These arguments are choice-free and make no Newton-convergence assumption.

These interfaces were checked against current supplier bodies. No supplier is represented as independently approved. No required supplier remains unavailable.

## Sources and reading record

The source ledger has six full-text URLs across four distinct works. Hairer–Wanner's course notes and Butcher's 71-page author tutorial are independent full treatments of implicit Runge–Kutta methods and stiffness; the three FNC URLs are sections of one textbook, and the Saskatchewan lecture notes supply the Robertson benchmark. Each harvested result, locator, disposition, retrieval history, and fetch stamp is recorded in `batch-65.source-coverage.json` and mirrored in `batch-65.coverage.json`.

- Hairer–Wanner: opened the full author-hosted 168-page PDF and inspected the local-defect/global-error theorem and the implicit-Euler, stability, BDF, and Radau IIA passages. A later PDF-reader line-range reopen returned `UnexpectedStatusCode`; after searching alternatives, a complete Chapter III mirror opened successfully and confirmed the same text. The original full-body fetch stamp remains successful; no source was dropped.
- Butcher: opened the complete 71-page author tutorial and inspected the RK order conditions, two-stage Radau IIA tableau, DIRK methods, and factorization-reuse discussion.
- Driscoll–Braun FNC §6.6: inspected the complete multistep section, including the implicit equation, backward Euler, BDF2 construction, and local truncation error.
- Driscoll–Braun FNC §11.4: inspected the stiffness, Jacobian-linearization, and A-stability discussion. It supplies context only; scalar amplification factors and algebraic-error bounds are derived locally.
- Driscoll–Braun FNC §4.5.2: inspected the complete multidimensional Newton section and finite-iteration implementation; no convergence guarantee is imported.
- University of Saskatchewan ODE notes: inspected the complete Robertson problem passage, initial state, and conserved-sum statement.
- `source-fetch-check --stamp` is run against the batch source ledger below. No source-resolution drop or owner escalation is recorded.

## Scope decisions and finite evidence

- The backward Euler result separates nonexpansiveness at $\mu=0$ from strict contraction for $\mu>0$ and assumes continuity and dissipativity on all of $\mathbb R^d$.
- The RK order theorem uses $C^3$ smoothness, a common tube, $hL\le1/2$, exact and approximate stages in the same invariant ball, and update residual $O(h^{p+1})$. A derivative-scaled residual must be $O(h^p)$; fixed tolerance does not retain the stated order.
- The constant-step BDF2 corollary retains the exact Batch-36 tube, Lipschitz, branch, and starter hypotheses. An exact-start BE branch gives an $O(h^2)$ starter; a finite residual status alone does not.
- The Robertson numerical record uses the displayed exact Jacobian, binary64 partial-pivoting elimination, and stated refresh schedules. Newton reaches residual $1.43041173542\cdot10^{-16}$ after five corrections and returns status `root`; frozen-Jacobian chord reaches $6.19977506348\cdot10^{-5}$ after eight corrections and returns `iteration-budget-exhausted`. This is a finite work record, not a convergence-rate or forward-error theorem.

## Scoped checks

The following checks were run against the final batch-65 carriers and evidence. Passing mechanical checks establish formatting and consistency only; they are not independent mathematical approval.

- `node tools/proof-layout.mjs <the 20 batch-65 item paths>`: 20 items, 40 steps, 0 defects.
- `node tools/tsx-run.mjs tools/precheck.mts <the 20 batch-65 item paths> --json`: 20 files, 12 proof-bearing items checked, 0 failures; the other 8 have no proof phase and are not applicable.
- `node tools/rendercheck.mjs <the 20 item paths and both A/B page paths> --json`: 22 files, 0 errors, 0 warnings.
- `node tools/proof-contract.mjs research/numerical-optimization-dynamics-2026-10-16-batch-65.proof-contracts.json --strict --json`: 20 checked, 0 errors, 0 warnings.
- `node tools/coverage-checklist.mjs research/numerical-optimization-dynamics-2026-10-16-batch-65.coverage.json --json`: 1 page, 16 harvested results, 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage research/numerical-optimization-dynamics-2026-10-16-batch-65.source-coverage.json --stamp`: 6/6 sources fetch-verified, 0 newly stamped, 6/6 resolved, 0 documented drops. No failed source remains unresolved.
- `node tools/content-policy.mjs research/numerical-optimization-dynamics-2026-10-16-batch-65.pages.json --json`: 20 in-scope items, 0 errors, 0 warnings.
- `node tools/depcheck.mjs --items-file /tmp/numerical-optimization-dynamics-2026-10-16-batch-65-items.json --json`: 20 selected items; dependency closure 886 items / 162 pages; 0 errors, 0 warnings.
- A focused recomputation against all current run manifests confirmed all 20 batch-65 manifest levels equal one plus the maximum in-run supplier level (or zero without in-run suppliers), and that each item frontmatter matches the manifest's `deps` and `dependency_level`. It found 0 batch-65 inconsistencies.

The whole-run checks remain blocked by unrelated run-wide data defects, and the shared generated dependency-level artifact was left untouched:

- `node tools/item-dependency-levels.mjs check --run numerical-optimization-dynamics-2026-10-16`: exit 1 with 57 errors: duplicate placement of `ex-parareal-dissipative-scalar-heat-mode`, `ex-parareal-oscillatory-coarse-phase-error`, and `ex-parareal-nonlinear-tube-escape`; 52 empty scaffold inventories in other batches; and stale labels `lem-tamed-euler-uniform-moment-bounds` (stored 3, computed 2) and `thm-tamed-euler-strong-order-half` (stored 4, computed 3). It reported no batch-65 item-level errors.
- `node tools/batch-dependency-levels.mjs check --run numerical-optimization-dynamics-2026-10-16`: exit 1, stops at duplicate item `ex-parareal-dissipative-scalar-heat-mode` before recomputing batch levels.
- `node tools/step1-decisions.mjs check --run numerical-optimization-dynamics-2026-10-16` and a `record` attempt for `def-implicit-residual-and-algebraic-error-units`: both exit 1 with `Duplicate item ex-parareal-dissipative-scalar-heat-mode`. The run loader fails before it can inspect or write batch-65 records; no batch-65 decision file was created. Therefore no item is represented here as having a recorded `ready` or `escalated` decision. The 20 local items have complete declared prerequisites, placement, contracts, and passing scoped checks, but their readiness rows require the owner to resolve the duplicate run item first. No `--owner` override was used.
- Read-only `autopilot status` reports the run still in `1-scaffold` (56/107 batches covered; 42, 45, 55, 56, 59–62 and 43 more missing). Its blockers are the existing owner-repair/recertification requirement and invalid unit prerequisites caused by the same duplicate Parareal item. No run state was changed.

These whole-run blockers are outside batch 65. Fixing them requires owner reconciliation of the duplicate Parareal item and other scaffold/run-level defects; no foreign item, page, plan, decision, or shared engine artifact was edited here.
