# Batch 12 notes — `cm-math-verification` / `cm-math-verification-examples`

Run `physics-cm-qm-gr-79-2026-10-11`, role beta, label batch-12, cover `cm-math-verification` and
its companion. Category `non-relativistic-classical-mechanics-mathematics`, library `mathematics`.
Step-1 complete initial authoring; this file records checkpoint evidence, conflicts and unresolved
findings. It is not an approval, and no readiness record is independent mathematical approval —
Step-2/3 review follows.

## Inventory and levels

- A page `cm-math-verification` (order 103), ten items, all `domain: mathematics`, all `deps`
  annotated `mathematical-premise`:
  `def-cm-second-variation-of-the-action` (2), `lem-cm-second-variation-formula` (3),
  `prop-cm-oscillator-second-variation-signs` (4),
  `prop-cm-oscillator-boundary-value-nonuniqueness` (3),
  `def-cm-inertia-tensor-about-a-point` (1), `lem-cm-inertia-tensor-about-a-point-is-finite` (2),
  `thm-cm-parallel-axis-theorem` (3), `prop-cm-two-mass-spring-modes` (2),
  `prop-cm-pendulum-small-angle-linearization-bound` (3),
  `rem-cm-verification-scope-and-limits` (5).
- B page `cm-math-verification-examples` (order 104, `requires: [cm-math-verification]`), five leaf
  items: `ex-cm-oscillator-saddle-second-variation-checks` (5),
  `ex-cm-oscillator-boundary-value-nonuniqueness-check` (4),
  `ex-cm-parallel-axis-two-point-masses` (4), `ex-cm-two-mass-modes-numerical-check` (3),
  `ex-cm-pendulum-linearization-error-check` (4). Nothing consumes the B page.
- Levels are one plus the maximum level of an in-run `deps` target; published root suppliers and
  out-of-run pages do not raise levels. Verified mechanically: a direct call to `dependencyLevels()`
  over all run pages returns zero mismatches for the fifteen labels and zero errors naming a
  batch-12 item. Engine batch graph: batch 12 has `dependency_level: 3` and `requires: [4, 7, 9]`
  (`cm-math-variations`, `cm-math-approximation`, `cm-math-rigid`).
- Every in-run supplier from batches 4, 7 and 9 was read at its exact statement and recorded in
  `…-batch-12.cross-batch-dependencies.json` (31 rows: 3 page edges + 28 item edges, all `verified`
  — one row per declared edge; see “Cross-batch dependencies” below).
- Fifteen items are far below the 100-item cap; no page split was needed. No item depends on a
  physical item, no item carries `physical_scope`, and no physics theorem, measurement or empirical
  claim appears anywhere: both pages are pure mathematics, and the batch contains no experiment or
  observation item, so the statistical/double-slit qualifications are not implicated.

## Files written by this batch

- `items/` carriers for the fifteen ids above; page carriers
  `library/non-relativistic-classical-mechanics-mathematics/cm-math-verification.md` and
  `…-examples.md`.
- `research/physics-cm-qm-gr-79-2026-10-11-batch-12.pages.json` (per-item statements, `deps`,
  `dependency_roles`, `dependency_level`, provenance, sources; page metadata copied from the plan
  record with the one recorded `requires` extension below).
- `research/physics-cm-qm-gr-79-2026-10-11-batch-12.coverage.json` (7 source entries, 26 harvested
  results: 20 included / 6 out-of-scope; all 7 entries carry `fetch_verified` stamps; 0 drops).
- `research/physics-cm-qm-gr-79-2026-10-11-batch-12.proof-contracts.json` (12 proof-bearing items,
  strict contract green, 188 recorded citation excerpts, boundary worksheets for eight cases).
- `research/physics-cm-qm-gr-79-2026-10-11-batch-12.cross-batch-dependencies.json` (31 verified rows).
- `research/physics-cm-qm-gr-79-2026-10-11-step1-<id>.json` readiness records for the fifteen ids,
  recorded last so their input hashes are current.

## Design vs plan-spec

`research/plan-non-relativistic-classical-mechanics-track.md` L287 (section E19) controls: page id
`cm-math-verification`, companion `cm-math-verification-examples`, order 103, local proved section
`E19`, internal local proof dependencies `E8`, `M3`, `M8`, published canonical mathematical
suppliers “none”, and the reservation block
`{"A_budget": 80, "B_budget": 30, "provisional_A_sections": ["E19"], "section_count_not_item_count": true}`.
Compared with `research/plan-spec.json`: id, title, kind, order 103/104, category, library, companion
links agree, and the B page’s `requires: [cm-math-verification]` matches exactly.

**One recorded plan divergence.** The plan-spec `requires` for order 103 is the three entries above;
the manifest declares those three plus `darboux-lhopital-and-taylor`. Reason: the authored items
`prop-cm-pendulum-small-angle-linearization-bound` and `ex-cm-pendulum-linearization-error-check`
depend directly on `cor-taylor-remainder-bound`, whose home page is `darboux-lhopital-and-taylor`;
without the entry, `validate-plan.mjs` reports the page-level `undeclared-prereq` error
`page cm-math-verification has an item depending on … which is NOT in the closure of its declared
requires`. The current plan controls the run; the extension is minimal, keeps every page-level
dependency inside the declared closure, and leaves all other plan facts unchanged. The Step-1 drift
verdict for this page (`research/physics-cm-qm-gr-79-2026-10-11-alpha-step1-drift.md`,
“cm-math-verification”) is `no-drift` and states that remaining item-level dependency detail belongs
to authoring and its ordinary readiness/review checks. The item lists in the plan-spec are empty
(`items: []`), so there is no item-level plan conflict.

### How E19 was delivered

- Saddle phenomenon: `prop-cm-oscillator-second-variation-signs` computes
  `delta^2 S(q_0)[eta_n,eta_n] = (T/2)((n pi/T)^2 - omega^2)` exactly, proves both signs for
  `T > pi/omega` with arbitrarily small endpoint-fixed variations, and settles the degenerate
  `T = pi/omega` value; `ex-cm-oscillator-saddle-second-variation-checks` evaluates `omega = 1`,
  `T = 2 pi` at `n = 1, 3` (`-3 pi/4`, `5 pi/4`) and cross-checks the defining integrals directly.
- Endpoint non-uniqueness: `prop-cm-oscillator-boundary-value-nonuniqueness` proves the Dirichlet
  solution space at `T = n pi/omega` is exactly `{A sin(omega t)}` while initial-value solutions
  remain unique; `ex-cm-oscillator-boundary-value-nonuniqueness-check` exhibits `sin t` and
  `2 sin t` at `T = pi` and computes the common action value `0`.
- Parallel axis: `def-cm-inertia-tensor-about-a-point`,
  `lem-cm-inertia-tensor-about-a-point-is-finite` and `thm-cm-parallel-axis-theorem` expand the
  shifted integrand and integrate, the cross terms vanishing because the measure is centred;
  `ex-cm-parallel-axis-two-point-masses` checks the identity on two equal point masses both
  directly and through the theorem, covering the line-supported case the design promises.
- Two-mass modes: `prop-cm-two-mass-spring-modes` multiplies the stiffness matrix into
  `u_+ = (1,1)/sqrt 2` and `u_- = (1,-1)/sqrt 2`, proves the exact decoupling bijection, the squared
  frequencies `k/m` and `(k+2c)/m`, and the `k = 0` free affine mode; `ex-cm-two-mass-modes-numerical-check`
  instantiates `m = 1, k = 1, c = 3` (`1` and `7`) and the degenerate `k = 0` affine solution.
- Pendulum: `prop-cm-pendulum-small-angle-linearization-bound` proves the cubic sine remainder, the
  Lipschitz/operator norms and instantiates the batch-7
  `thm-cm-finite-time-linearization-error-bound`; `ex-cm-pendulum-linearization-error-check`
  evaluates the bound at `g = l = 1`, `r = 1/2`, `delta = 1/100`, `T = 1` using only the published
  `2 < e < 3`. No exactly harmonic finite-angle pendulum is asserted anywhere, per the design’s
  warning.

## Sources and source handling

Full-text sources (per-page entries in `.coverage.json`; bodies fetched, inspected and stamped by
`source-fetch-check --stamp`; 7/7 entries fetch-verified, 0 documented drops):

- D. Tong, *Classical Dynamics* (Cambridge Part II), §2.1 and §2.6 and §3.2.1: first variation with
  fixed endpoints, the explicit remark that the true path may be a minimum or a saddle (printed
  p. 12), small oscillations and normal modes, and the tensor parallel-axis calculation
  (Eqs. (3.25)-(3.26), printed pp. 52-53).
- K. Likharev, *Essential Graduate Physics: Classical Mechanics* (complete volume): Ch. 1 §1.2
  (pendulum equation), Ch. 3 §3.2 (stability by linearisation; oscillation classification used via
  batch 7), Ch. 4 §4.2 (axis-shift theorem, Eqs. (4.27)-(4.29)).
- D. Cline, *Variational Principles in Classical Mechanics* 2nd ed. (open textbook): §§5.1-5.2, the
  parametric family `q + eps eta` with fixed endpoints and stationarity as vanishing first-order
  term.
- G. Teschl, *Ordinary Differential Equations and Dynamical Systems* (AMS GSM 140, online edition),
  cited as supplementary context for the finite-time linearisation estimate consumed from batch 7.

Dispositions: 26 harvested results, 20 included with item destinations, 6 out-of-scope with specific
reasons; zero deferred, zero inline (everything used is either a published root/batch supplier reused
by reference or an included harvested claim). **Honest source limitation:** neither Tong nor Cline
computes the second derivative of the fixed-endpoint family; the Hessian integral formula
(`lem-cm-second-variation-formula`), the sign computation and the degenerate value are local
extensions of their first-variation calculus and are recorded as such, not attributed to the
sources. Likewise the finite-time pendulum error bound is an instantiation of the batch-7 theorem
(whose own sources are recorded by that batch), and every numerical value in the B examples is an
exact symbolic evaluation, not a measurement; no empirical or statistical claim is made.

## Repairs and edits in the final integrity pass (with reasons)

1. `lem-cm-second-variation-formula`, clause 1 (“of class C^2”): the proof previously established
   twice differentiability with `F'' = int g_2` but never the continuity of `F''`. Added step 3.1
   (uniform continuity of `g_2` on the compact rectangle `R`, then
   `|F''(eps) - F''(eps')| = |int (g_2(eps) - g_2(eps'))| <= eta_tilde`), with [L6] and the new
   premises `thm-heine-borel-rn`, `thm-heine-cantor-metric`,
   `thm-monotonicity-of-the-integral`,
   `cor-integrability-of-absolute-values-products-and-lattice-operations`.
2. `lem-cm-second-variation-formula`, dependency correction: an intermediate revision cited
   `lem-uniform-integral-error-bound`; that item’s home page `uniform-convergence-of-functions` is
   outside the declared `requires` closure, and `validate-plan.mjs` correctly reported
   `undeclared-prereq`. The bound is now derived inline in [L6] from the in-closure Darboux-integral
   facts (linearity, monotonicity, triangle inequality for the integral), and the error is gone.
3. `lem-cm-inertia-tensor-about-a-point-is-finite`, step 2.1: the previous text applied pointwise
   monotonicity to a bound that holds only on the closed ball, with the null complement handled
   informally. Step 2.1 now decomposes `int |G_a| d nu = int_{B_R} |G_a| d nu + int_N |G_a| d nu
   = int_{B_R} |G_a| d nu` through the indefinite-integral measure
   (`thm-indefinite-integral-of-a-nonnegative-function-is-a-measure`), the null-set corollary
   (`cor-integral-over-a-null-set-vanishes`) and the pointwise comparison
   `|G_a| chi_{B_R} <= M chi_{B_R} <= M`; the two new premises were added to `deps`.
4. Earlier construction edits (recorded for completeness): `def-cm-second-variation-of-the-action`
   gained `lem-cm-first-variation-formula` as a premise (level 1→2) and lost a premature link to the
   stationarity theorem; `def-cm-inertia-tensor-about-a-point` no longer links its downstream
   parallel-axis theorem; levels of `lem-cm-second-variation-formula` (3),
   `prop-cm-oscillator-second-variation-signs` (4), `rem-cm-verification-scope-and-limits` (5) and
   `ex-cm-oscillator-saddle-second-variation-checks` (5) were recomputed to match `deps`. All
   manifests, contracts and citation records were regenerated after the final edits.

Proof contracts were regenerated after the last edit: 12 items, 188 citation excerpts, 0 contract
errors/warnings; `citation-fidelity.mjs` finds every quote and no widening candidate.

## Checks run at handoff (actual results)

- `proof-layout.mjs` on the fifteen changed item paths: 15 items, 53 numbered steps, 0 defects.
- `tsx-run.mjs precheck.mts` on the fifteen paths: 12 proof-bearing items checked, 0 failing
  (definitions and the remark are nonproof).
- `rendercheck.mjs` on fifteen items + two page carriers: OK (17 files; KaTeX and YAML clean).
- `content-policy.mjs` on the batch manifest: 15 scoped items, 0 errors, 0 warnings.
- `manifest-deps.mjs` on the batch manifest: 15 items, 0 normalized, 0 errors.
- `coverage-checklist.mjs --require-destination`: 2 pages, 26 results, 0 errors, 0 warnings.
- `source-fetch-check.mjs --coverage …`: 7/7 source entries fetch-verified; 7/7 resolved, 0 drops.
- `proof-contract.mjs --strict`: 12/12 items checked, 0 errors, 0 warnings.
- `citation-fidelity.mjs`: 188 citations over 12 items; quote-not-found none; widening none.
- `boundary-audit.mjs`: 96 rows, 48 `not_applicable`, 0 template clusters, 2 contradicted
  candidates (below).
- `depcheck.mjs`: exits 1 whole-repo, with zero findings naming any batch-12 item or page.
- `item-dependency-levels.mjs check --run`: exits 1 with 128 errors, every one an
  `empty scaffold inventory` or missing-label error for other batches; zero errors name a batch-12
  page or item, and the fifteen labels are computed-consistent.
- `validate-plan.mjs research/plan-spec.json --run …`: exits 1 with 5 `undeclared-prereq` errors,
  all for `cm-math-canonical` and `qm-math-*` pages (other batches); zero batch-12 findings, which
  confirms the `darboux-lhopital-and-taylor` extension resolves the only page-closure issue this
  batch had.
- `frontier-dependency-ledger.mjs refresh --run …`: refreshed; the unified ledger
  `research/physics-cm-qm-gr-79-2026-10-11-cross-batch-dependencies.json` carries 31 batch-12 edges
  (28 item + 3 page) and none is left without a `verified` review.

## Cross-batch dependencies

31 rows in `…-batch-12.cross-batch-dependencies.json`, all `status: verified`, one per
`(kind, consumer, supplier)`:

- page edges `cm-math-verification → cm-math-approximation`, `→ cm-math-rigid`,
  `→ cm-math-variations`;
- 28 item edges onto the suppliers actually used: batch 4 (`def-cm-time-dependent-lagrangian-and-action`,
  `lem-cm-first-variation-formula`, `thm-cm-stationarity-iff-euler-lagrange`), batch 7
  (`def-cm-oscillator-model-and-phase-system`,
  `thm-cm-homogeneous-oscillator-solution-classification`,
  `prop-cm-oscillator-degenerate-and-repulsive-cases`,
  `thm-cm-finite-time-linearization-error-bound`,
  `cor-cm-variation-of-constants-for-linear-systems`), batch 9
  (`def-cm-mass-distribution-and-inertia-matrix`, `lem-cm-mass-moments-are-finite`).

Each row records the exact consumer use and location; the supplier statements were read in full (the
quantifier structure, hypotheses, regularity and choice declarations), not merely linked. The
finiteness suppliers are AC-scoped and the consuming inertia items carry the assumption explicitly
(below).

## Choice principle

`lem-cm-inertia-tensor-about-a-point-is-finite` and `thm-cm-parallel-axis-theorem` state
`AC_omega`, declare `def-countable-choice` as a premise and identify its single use (Borel
measurability of the continuous integrands through the published AC-scoped criterion); every other
batch-12 item is choice-free and does not reach `deferred-set-theory-beyond-choice` through any
dependency path. The oscillator, variation and pendulum items use only ZF-level calculus and
trigonometry.

## Unresolved findings and routing (no owner escalation raised)

1. `boundary-audit.mjs` reports 2 contradicted-disposition *candidates*, both on the `empty` axis and
   both surface-regex triggers on fixed finite structures, not defects:
   - `lem-cm-second-variation-formula`: the detector matches the `\sum_{` of the Hessian double sum
     over the fixed index set `{1,...,n}` (n fixed by the chart data). Read and confirmed: the
     `not_applicable` reason stands; no variable-cardinality family is quantified.
   - `prop-cm-two-mass-spring-modes`: the detector matches the word “family” in “scalar solution
     families” and in the two-element eigenbasis discussion. Read and confirmed: the eigenbasis is
     the fixed pair `u_+, u_-` and the only aggregate is the two-term expansion; the
     `not_applicable` reason stands.
   These are recorded for the Step-2/3 human read; no `reviewed.upheld` disposition is claimed here
   (that is an Alpha act).
2. Cross-batch observation for the owning batch’s review (not a defect determination): batch 9’s
   `lem-cm-mass-moments-are-finite` step 2.1 handles the measure-zero complement informally
   (“these bounds persist off N; since N carries no measure in the integrals below …”). The
   statement is true and the inference is standard measure-zero reasoning; the fully explicit route
   used to repair the analogous step in `lem-cm-inertia-tensor-about-a-point-is-finite` is available
   if Step-2/3 wants the same standard there. Exact item id and location recorded here for the
   owner; nothing was edited outside this batch.
3. No published defect was found in this batch’s scope, and no item of this batch was escalated;
   there are no `owner-escalation` records.
4. Whole-run tool exits remain nonzero only because other batches are still unauthored (see the
   check list above); none of those findings names a batch-12 artifact.

## Addendum — late screens run after the notes above

- `citation-faithfulness-screen.mjs` on the 12 proof-bearing items: 12 screened, 11 clean, 1
  candidate — `prop-cm-oscillator-boundary-value-nonuniqueness`, fact [F4] -> `thm-of-square-roots`:
  `omega`. Read and dismissed: [F4] states `omega = (k/m)^(1/2)` with `omega > 0` and
  `omega^2 = k/m` for `k, m > 0`; the cited theorem supplies the unique nonnegative square root of
  the positive number `k/m`, and strict positivity follows because a nonnegative root with nonzero
  square cannot be `0`. A legitimate specialisation of the cited statement, not an unexplained
  operator.
- `extcheck.mjs` (whole library): 27651 items, 0 recorded-not-proved, 0 resting on them — OK.
- `depcheck.mjs` was re-run after the last dependency edit; zero findings name any batch-12 item or
  page (whole-repo exit 1 remains other batches’ findings).
