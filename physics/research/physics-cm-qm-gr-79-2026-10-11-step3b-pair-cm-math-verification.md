# Step 3b authoring report — pair `cm-math-verification` / `cm-math-verification-examples`

- Run: `physics-cm-qm-gr-79-2026-10-11`; role: beta (batch 12), Step 1 authoring; 2026-10-11.
- Owned pair: A page `cm-math-verification` (order 103, category
  `non-relativistic-classical-mechanics-mathematics`, library `mathematics`); B page
  `cm-math-verification-examples` (order 104).
- Owned items in authoring order (dependency level; page):
  1. `def-cm-second-variation-of-the-action` (2, A)
  2. `lem-cm-second-variation-formula` (3, A)
  3. `prop-cm-oscillator-second-variation-signs` (4, A)
  4. `prop-cm-oscillator-boundary-value-nonuniqueness` (3, A)
  5. `def-cm-inertia-tensor-about-a-point` (1, A)
  6. `lem-cm-inertia-tensor-about-a-point-is-finite` (2, A)
  7. `thm-cm-parallel-axis-theorem` (3, A)
  8. `prop-cm-two-mass-spring-modes` (2, A)
  9. `prop-cm-pendulum-small-angle-linearization-bound` (3, A)
  10. `rem-cm-verification-scope-and-limits` (5, A)
  11. `ex-cm-oscillator-saddle-second-variation-checks` (5, B)
  12. `ex-cm-oscillator-boundary-value-nonuniqueness-check` (4, B)
  13. `ex-cm-parallel-axis-two-point-masses` (4, B)
  14. `ex-cm-two-mass-modes-numerical-check` (3, B)
  15. `ex-cm-pendulum-linearization-error-check` (4, B)
- Artifacts owed at handoff: fifteen item carriers under `items/`; the two page carriers under
  `library/non-relativistic-classical-mechanics-mathematics/`;
  `research/physics-cm-qm-gr-79-2026-10-11-batch-12.pages.json`; `.coverage.json`;
  `.proof-contracts.json`; `.cross-batch-dependencies.json`; `.notes.md`; this report; Step-1
  readiness records for all fifteen ids.

## Scope and inputs

- Read before construction: `AGENTS.md`; `../CLAUDE.md`; `CLAUDE.md`; `SCHEMA.md`; `WORKFLOW.md`;
  `../PHYSICS-CONTENT-MODEL.md`; the binding owner direction
  `research/physics-cm-qm-gr-79-2026-10-11-owner-authoring-direction.md`; the batch task and
  this dispatch; the batch dependency levels
  `research/physics-cm-qm-gr-79-2026-10-11-batch-dependency-levels.json`; the design section
  `research/plan-non-relativistic-classical-mechanics-track.md` L287 (section E19); the plan-spec
  entries for orders 103/104; and the scaffold sources
  `research/first-principles-2026-10-03/non-relativistic-classical-mechanics/scaffold/expansion-proofs.md`
  §E19 with its `mathematical-prerequisites.md` counterparts M3/M8/E8.
- This is a mathematics-only pair: every item carries `domain: mathematics`, `library: mathematics`
  and only mathematical prerequisites. The consumed root-library suppliers are read-only published
  items inspected in place; the in-run suppliers are the draft items of batches 4
  (`cm-math-variations`), 7 (`cm-math-approximation`) and 9 (`cm-math-rigid`), read at their exact
  statements under the owner exception of 2026-10-11, with every use recorded in the cross-batch
  dependency input. No physical law, measurement, apparatus or empirical claim appears on either
  page; the classical-mechanics readings (oscillator, rigid body, pendulum) remain with the
  consuming physics pages, notably `cm04-…`, `cm07-…` and `cm10-rigid-body-configuration-and-inertia`,
  whose `requires` name this page.

## Design versus plan

- The design (L287/E19) fixes the id, companion, order, category and library, names `E8`, `M3`, `M8`
  as the internal local proof dependencies (“requires” `cm-math-approximation`,
  `cm-math-variations`, `cm-math-rigid`), names no published canonical suppliers, and reserves
  `A_budget: 80`, `B_budget: 30` for the single provisional section `E19`. The plan-spec entries 103
  and 104 agree on every listed field; their `items` arrays are empty, so there is no item-level plan
  conflict.
- **Recorded divergence (one).** The manifest declares `requires` for order 103 as the three
  plan-spec entries **plus** `darboux-lhopital-and-taylor`, because two authored items depend
  directly on `cor-taylor-remainder-bound` from that page and `validate-plan.mjs` otherwise reports
  `undeclared-prereq`. The extension adds no scope, keeps every page-level dependency inside the
  declared closure, and is the minimal repair; the batch notes record it. The B page’s `requires`
  `[cm-math-verification]` matches the plan exactly.
- The Step-1 drift verdict for this page is `no-drift`
  (`research/physics-cm-qm-gr-79-2026-10-11-alpha-step1-drift.md`).
- E19 was split into the nine A items and five B examples listed above. Every promised claim is
  preserved, and each is proved where the design says: the fixed-endpoint second variation and its
  Hessian formula; the oscillator saddle with both signs beyond `T = pi/omega` and the `T = pi/omega`
  degeneracy; the Dirichlet non-uniqueness at conjugate times against unique initial-value solutions;
  the shifted inertia tensor and its finiteness; the tensor parallel-axis identity for centred
  measures (line/surface/volume alike, subject to finite second moments); the two-mass eigenmodes
  with the explicit `k = 0` free mode; and the finite-time small-angle bound with cubic remainder
  and no claim of exact harmonicity. No claim of the design was narrowed or omitted.

## Dependency graph and levels

- Levels are one plus the maximum in-run dependency level; published root suppliers do not raise
  levels. The layer structure: level 1 `def-cm-inertia-tensor-about-a-point`; level 2
  `def-cm-second-variation-of-the-action`, `lem-cm-inertia-tensor-about-a-point-is-finite`,
  `prop-cm-two-mass-spring-modes`; level 3 `lem-cm-second-variation-formula`,
  `prop-cm-oscillator-boundary-value-nonuniqueness`, `thm-cm-parallel-axis-theorem`,
  `prop-cm-pendulum-small-angle-linearization-bound`; level 4
  `prop-cm-oscillator-second-variation-signs` and the B items
  `ex-cm-oscillator-boundary-value-nonuniqueness-check`, `ex-cm-parallel-axis-two-point-masses`,
  `ex-cm-pendulum-linearization-error-check`; level 5 `rem-cm-verification-scope-and-limits` and
  `ex-cm-oscillator-saddle-second-variation-checks`.
- Well-definedness cycles of the ordinary definition rule: `def-cm-second-variation-of-the-action`
  is justified by `lem-cm-second-variation-formula` (`justified_by`) while the lemma depends on the
  definition through `deps`; `def-cm-inertia-tensor-about-a-point` is justified by
  `lem-cm-inertia-tensor-about-a-point-is-finite` while the lemma depends on the definition. Both
  are the sanctioned definition/well-definedness pattern, not prerequisite cycles.
- Cross-batch edges (31 rows in `.cross-batch-dependencies.json`, all `verified`): the three page
  edges to `cm-math-approximation`, `cm-math-rigid`, `cm-math-variations`, and 28 item edges onto the
  suppliers actually used — batch 4 `def-cm-time-dependent-lagrangian-and-action`,
  `lem-cm-first-variation-formula`, `thm-cm-stationarity-iff-euler-lagrange`; batch 7
  `def-cm-oscillator-model-and-phase-system`,
  `thm-cm-homogeneous-oscillator-solution-classification`,
  `prop-cm-oscillator-degenerate-and-repulsive-cases`,
  `thm-cm-finite-time-linearization-error-bound`,
  `cor-cm-variation-of-constants-for-linear-systems`; batch 9
  `def-cm-mass-distribution-and-inertia-matrix`, `lem-cm-mass-moments-are-finite`. Each supplier
  statement was read in full and the exact consumer use and location recorded;
  `frontier-dependency-ledger.mjs refresh` merged the rows, and the unified ledger
  `research/physics-cm-qm-gr-79-2026-10-11-cross-batch-dependencies.json` now shows every batch-12
  edge with a `verified` review (the last uncovered edge, the definition’s use of
  `lem-cm-first-variation-formula`, was found by that comparison and recorded with its exact quote).
- The engine batch graph placed batch 12 after batches 4, 7, 9 (`requires: [4, 7, 9]`,
  `dependency_level: 3`), so suppliers were authored before consumers; the in-batch order above is
  ascending by level. `item-dependency-levels.mjs check --run` names no batch-12 page or item among
  its whole-run errors, and a direct `dependencyLevels()` call returns zero label mismatches and
  zero batch-12 errors.

## Choice principle

`lem-cm-inertia-tensor-about-a-point-is-finite` and `thm-cm-parallel-axis-theorem` state
`AC_omega` explicitly, declare `def-countable-choice` as a premise, and identify the single use of
the axiom (Borel measurability of the continuous integrands through the published AC-scoped
criterion); the consuming example `ex-cm-parallel-axis-two-point-masses` carries the same premise.
All other items are choice-free; no item reaches `deferred-set-theory-beyond-choice` through any
dependency path.

## Source handling

- Per-page sources (full texts fetched, inspected and fetch-stamped; URLs and exact locators in the
  item carriers and `.coverage.json`): D. Tong, *Classical Dynamics* §§2.1, 2.6, 3.2.1 (first
  variation, minimum-or-saddle remark, normal modes, tensor parallel-axis); K. Likharev, *Essential
  Graduate Physics: CM* Ch. 1 §1.2, Ch. 3 §3.2, Ch. 4 §4.2 (pendulum equation, linearised stability,
  axis-shift theorem); D. Cline, *Variational Principles in Classical Mechanics* §§5.1–5.2 (fixed
  endpoint family and stationarity); G. Teschl, *ODE and Dynamical Systems* (supplementary context
  for the finite-time linearisation estimate consumed from batch 7). Seven coverage source entries,
  26 harvested results (20 included, 6 out-of-scope with specific reasons), zero drops; stamps 7/7.
- **Honest source limitation.** The second derivative of the fixed-endpoint family and the Hessian
  integral formula are not computed in Tong or Cline — they carry the first-variation calculus and
  Tong’s remark that the true path may be a minimum or a saddle; the second-variation formula, the
  sign computation with the exact action identity, the degenerate value and the finite-time
  conclusion are local constructions. The finite-time pendulum bound is an instantiation of batch 7’s
  `thm-cm-finite-time-linearization-error-bound` (that batch owns its sources); the numerical values
  of the B examples are exact symbolic evaluations, not measurements. Every such limitation is in
  the coverage dispositions and, where relevant, in the item remarks.

## Item checkpoints (all authored 2026-10-11; final integrity pass 2026-10-11)

- **1 `def-cm-second-variation-of-the-action`** (2). The fixed-endpoint family `q + eps eta` of a
  `C^2` curve and variation in a time-dependent Lagrangian chart, and `delta^2 S(q)[eta,eta]` as the
  second derivative at `eps = 0`, with well-definedness delegated to the lemma via `justified_by`
  and the admissibility clause of `lem-cm-first-variation-formula` cited by name. No minimisation or
  physical interpretation asserted. Nonproof item; rendercheck OK.
- **2 `lem-cm-second-variation-formula`** (3). The family is `C^2` with
  `d^2/d eps^2 S = int H(eps,t) dt` and the symmetric Hessian form at `eps = 0`; two applications of
  the compact-rectangle differentiation theorem plus Clairaut. Final pass added step 3.1 proving the
  continuity of `F''` from the compact-rectangle uniform continuity and the in-closure Darboux
  integral estimates, so clause 1’s `C^2` claim is proved in full. 5 steps, 0 defects, precheck PASS.
- **3 `prop-cm-oscillator-second-variation-signs`** (4). Exact values
  `(T/2)((n pi/T)^2 - omega^2)`, the exact action identity `S(eps eta_n) = (eps^2/2) delta^2 S`, both
  signs for `T > pi/omega` with arbitrarily small variations, and the degenerate `T = pi/omega`
  value; finite-time statement only. 5 steps, 0 defects, precheck PASS.
- **4 `prop-cm-oscillator-boundary-value-nonuniqueness`** (3). At `T = n pi/omega` the Dirichlet
  solution space is exactly `{A sin(omega t)}` while every initial-value problem has exactly one
  solution on `R`; the same family is exactly the stationary curves with zero endpoints. 2 steps,
  0 defects, precheck PASS.
- **5 `def-cm-inertia-tensor-about-a-point`** (1). The shifted integrand
  `G_a(rho) = ||rho - a||^2 I_3 - (rho - a)(rho - a)^T` and the entrywise inertia tensor about `a`,
  with `AC_omega` declared and finiteness delegated to item 6; `I_nu(0) = I(nu)`. Nonproof item.
- **6 `lem-cm-inertia-tensor-about-a-point-is-finite`** (2). Measurability, `nu`-integrability and
  the uniform bound `|I_nu(a)_{jk}| <= 2(R + ||a||)^2 nu(R^3)`; step 2.1 in the final pass replaces
  the informal measure-zero step with an explicit decomposition over the closed ball and its
  `nu`-null complement via the indefinite-integral measure and the null-set corollary. 3 steps,
  0 defects, precheck PASS; `AC_omega` used once.
- **7 `thm-cm-parallel-axis-theorem`** (3). For a centred bounded finite Borel measure,
  `I_nu(a) = I(nu) + m(||a||^2 I_3 - a a^T)` entrywise, the cross terms vanishing by centredness; the
  remark records the general non-centred expansion. 4 steps, 0 defects, precheck PASS; `AC_omega`
  declared.
- **8 `prop-cm-two-mass-spring-modes`** (2). `K u_+ = k u_+`, `K u_- = (k + 2c) u_-`, the exact
  decoupling bijection, the mode family with frequencies `(k/m)^(1/2)` and `((k+2c)/m)^(1/2)`, and
  the `k = 0` free affine mode; exact for the linear system. 5 steps, 0 defects, precheck PASS.
- **9 `prop-cm-pendulum-small-angle-linearization-bound`** (3). `C^infinity` field
  `F(theta, v) = (v, -omega^2 sin theta)`, the cubic remainder
  `||F(z) - Az|| <= (omega^2 r/6) ||z||^2`, the Lipschitz and operator norm `L = max{1, omega^2}`,
  and the instantiated finite-time bound with the scope sentence (no exact harmonicity). 4 steps,
  0 defects, precheck PASS.
- **10 `rem-cm-verification-scope-and-limits`** (5). Nonproof scope record: mathematics only,
  finite-time second-variation statements, the degeneracy as an underdetermined boundary-value
  problem, the centred case of the parallel-axis identity, exactness only for the linear coupled
  system, and the conditional order-`delta^2` pendulum bound.
- **11 `ex-cm-oscillator-saddle-second-variation-checks`** (5, B). `omega = 1`, `T = 2 pi`,
  `n = 1, 3`: values `-3 pi / 4` and `5 pi / 4`, defining integrals recomputed independently and the
  exact action signs; a genuine finite check. 4 steps, 0 defects, precheck PASS.
- **12 `ex-cm-oscillator-boundary-value-nonuniqueness-check`** (4, B). `T = pi`: `sin t` and
  `2 sin t` share zero endpoints and differ in initial velocity; `S(A sin t) = 0` for every `A`.
  3 steps, 0 defects, precheck PASS.
- **13 `ex-cm-parallel-axis-two-point-masses`** (4, B). `nu = m delta_{r e_3} + m delta_{-r e_3}`:
  direct evaluation and the theorem agree,
  `I_nu(c e_3) = diag(2m(r^2 + c^2), 2m(r^2 + c^2), 0)`. 3 steps, 0 defects, precheck PASS.
- **14 `ex-cm-two-mass-modes-numerical-check`** (3, B). `m = 1, k = 1, c = 3`: `K u_+ = u_+`,
  `K u_- = 7 u_-`, the mode curve `cos(t)u_+ + cos(sqrt 7 t)u_-` solves `x'' = -Kx`, and the
  `k = 0` affine mode is checked. 3 steps, 0 defects, precheck PASS.
- **15 `ex-cm-pendulum-linearization-error-check`** (4, B). `g = l = 1`, `r = 1/2`,
  `delta = 1/100`, `T = 1`: the smallness condition from `2 < e < 3`, the bound
  `(e^{2t} - e^t)/(12 * 10^4)` and the pointwise remainder checks `1/48`, `1/2`. 4 steps,
  0 defects, precheck PASS.

## Checks run at handoff

- `proof-layout.mjs` on the fifteen changed item paths: 15 items, 53 numbered steps, 0 defects;
  `tsx-run.mjs precheck.mts`: 12 proof-bearing items checked, 0 failing; `rendercheck.mjs` on the
  fifteen items + two page carriers: OK.
- `proof-contract.mjs --strict`: 12/12 items, 0 errors, 0 warnings; `citation-fidelity.mjs`:
  188 citations, every recorded quote found in its cited item, no widening candidates.
- `content-policy.mjs` on the batch manifest: 15 items, 0 errors, 0 warnings; `manifest-deps.mjs`:
  15 items, 0 errors; `coverage-checklist.mjs --require-destination`: 26 results, 0 errors;
  `source-fetch-check.mjs --coverage …`: 7/7 fetch-verified, 0 drops.
- `depcheck.mjs`: zero findings naming a batch-12 item or page (whole-repo exit 1 is other batches’
  findings). `item-dependency-levels.mjs check --run`: zero batch-12 findings among its whole-run
  errors; label consistency verified directly. `validate-plan.mjs research/plan-spec.json --run …`:
  zero batch-12 findings (its remaining 5 `undeclared-prereq` errors are `cm-math-canonical` and
  `qm-math-*`). `frontier-dependency-ledger.mjs refresh`: all 31 batch-12 edges reviewed.
- `boundary-audit.mjs`: 96 rows, 48 `not_applicable`, 0 template clusters, **2 contradicted
  candidates** — `lem-cm-second-variation-formula` and `prop-cm-two-mass-spring-modes`, both on the
  `empty` axis. Both were read: the detector matches the fixed finite double sum `\sum_{j,k=1}^n`
  and the word “family” for the fixed two-element eigenbasis, respectively; the `not_applicable`
  reasons stand. They are recorded in the batch notes and routed to the Step-2/3 human read; no
  `reviewed.upheld` disposition is claimed here.

## Repairs in the final pass (summary; details in the batch notes)

1. `lem-cm-second-variation-formula`: added the missing continuity step for the `C^2` clause, and
   replaced an out-of-closure premise (`lem-uniform-integral-error-bound`) with an inline derivation
   from in-closure Darboux-integral facts, clearing the only `validate-plan` page-closure finding.
2. `lem-cm-inertia-tensor-about-a-point-is-finite`: made the measure-zero step explicit through the
   indefinite-integral measure and the null-set corollary, adding the two premises used.
3. Earlier construction edits (level recomputation, dependency and link corrections on items 1, 2,
   5 and the B saddle example) are recorded in the batch notes; no statement was weakened.

## Handoff state

- Items 1–15: `ready` (Step-1 readiness records written after the final carriers, so every input
  hash is current); no item escalated. The pair report, notes, manifest, coverage, proof contracts
  and cross-batch dependency input are complete. Independent review follows in Step 2/3; nothing
  here is an approval or a substitute for it.
