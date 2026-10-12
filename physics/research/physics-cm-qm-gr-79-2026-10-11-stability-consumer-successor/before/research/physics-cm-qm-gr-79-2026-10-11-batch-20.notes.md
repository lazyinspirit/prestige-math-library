# Batch 20 notes — `cm04-one-dimensional-conservative-and-dissipative-models` / `…-examples`

Run `physics-cm-qm-gr-79-2026-10-11`, role beta, label batch-20, covers 20.
Step 1 complete initial authoring only; a readiness record is not independent
mathematical approval (Step 2/3 review follows). Inputs read before
construction: `CLAUDE.md`, `SCHEMA.md`, `../PHYSICS-CONTENT-MODEL.md`,
`WORKFLOW.md`, the binding owner direction
`research/physics-cm-qm-gr-79-2026-10-11-owner-authoring-direction.md` (no
cm04-specific instructions beyond the general rules), the design record
`research/plan-non-relativistic-classical-mechanics-track.md` L526
("One-dimensional conservative and dissipative models"), `research/plan-spec.json`,
the first-principles inventory
`research/first-principles-2026-10-03/non-relativistic-classical-mechanics/scaffold/proposed-inventory.json`
and its closure ledger, and the batch-dependency-levels file
`research/physics-cm-qm-gr-79-2026-10-11-batch-dependency-levels.json`
(batch 20 is dependency level 5, requires batches 1, 3, 7, 12, 17, 18
and 19, all complete before dispatch).

## Scope built

- A page `cm04-one-dimensional-conservative-and-dissipative-models`
  (order 119, category `non-relativistic-classical-mechanics`, `library: physics`),
  12 items: 2 physics-domain definitions
  (`def-cm04-one-dimensional-models-and-equilibria`,
  `def-cm04-phase-plane-and-energy-level-sets`), 3 postulates
  (`post-cm04-harmonic-model`, `post-cm04-linear-damping-model`,
  `post-cm04-sinusoidal-drive-model`), 6 physics theorems
  (`pthm-cm04-conservative-motion-and-energy`,
  `pthm-cm04-equilibrium-stability-at-a-strict-minimum`,
  `pthm-cm04-harmonic-motion`, `pthm-cm04-damped-motion`,
  `pthm-cm04-damped-decay-and-stability`,
  `pthm-cm04-resonance-and-boundedness`) and 1 remark
  (`rem-cm04-linear-model-scope`).
- B page `cm04-one-dimensional-conservative-and-dissipative-models-examples`
  (order 120), 5 leaf items: 4 examples (`ex-cm04-harmonic-motion-check`,
  `ex-cm04-damped-regimes-check`, `ex-cm04-resonance-response-check`,
  `ex-cm04-pendulum-small-angle-check`) and 1 counterexample
  (`cex-cm04-undamped-resonance-with-bounded-drive-is-unbounded`). Nothing
  outside the pair depends on these five.
- Page carriers
  `library/non-relativistic-classical-mechanics/cm04-one-dimensional-conservative-and-dissipative-models.md`
  and `…-examples.md` are nonempty and carry the item lists, `requires`,
  order, kind, category, library and companion metadata. No `_pathway.md` is
  created here (closeout artifact); the category `_category.md` is unchanged.
- Design contract delivered (design ids to delivered items):
  `cm04-equilibrium(def)` → `def-cm04-one-dimensional-models-and-equilibria`;
  `cm04-harmonic(post)` → `post-cm04-harmonic-model`;
  `cm04-harmonic-solution(pthm)` → `pthm-cm04-harmonic-motion`, with the
  supporting `pthm-cm04-conservative-motion-and-energy` and
  `pthm-cm04-equilibrium-stability-at-a-strict-minimum`;
  `cm04-damping(post)` → `post-cm04-linear-damping-model`;
  `cm04-damping-solution(pthm)` → `pthm-cm04-damped-motion`, with the
  supporting `pthm-cm04-damped-decay-and-stability`;
  `cm04-driven-model(post)` → `post-cm04-sinusoidal-drive-model`;
  `cm04-resonance(pthm)` → `pthm-cm04-resonance-and-boundedness`;
  `cm04-phase-plane(def)` → `def-cm04-phase-plane-and-energy-level-sets`.
  Recorded additions: the two supporting conservative/dissipative theorems,
  the scope remark, and the B-page `ex-cm04-harmonic-motion-check` (the
  design's `B_and_sources` line names the three damping regimes, the
  resonance boundedness cases and the pendulum exact-vs-linear reading; the
  counterexample and the harmonic check make those clauses executable). The
  design's provisional ids are placeholders; the delivered ids use the run's
  kind-prefix conventions, as in batches 17–19.
- The design's local mathematical proof sections `E3`, `E19`, `M7` (closure
  ledger, homes CM-Math-approximation, CM-Math-verification, CM-Math-dynamics)
  are consumed as the rendered mathematical items of batches 7, 12 and 3
  (`def-cm-oscillator-model-and-phase-system`,
  `thm-cm-homogeneous-oscillator-solution-classification`,
  `thm-cm-forced-oscillator-sinusoidal-response`,
  `thm-cm-forced-oscillator-variation-of-constants`,
  `prop-cm-oscillator-amplitude-maximum`,
  `cor-cm-homogeneous-oscillator-decay`;
  `prop-cm-pendulum-small-angle-linearization-bound`;
  `def-cm-mechanical-vector-field-and-energy-in-a-chart`,
  `thm-cm-energy-stability-of-a-strict-minimum`,
  `prop-cm-linearization-of-the-mechanical-system-at-an-equilibrium`).
  The design's published suppliers
  `cor-real-spectral-theorem-for-self-adjoint-endomorphisms` and
  `cor-second-order-taylor-expansion-with-the-hessian` are used transitively
  through the batch-3 cluster (e.g. `thm-cm-quadratic-mode-decomposition`,
  a dependency of the linearisation proposition), not quoted directly.

## Dependency graph, levels and construction order

Authored in prerequisite order; each item built once. Levels are the
mechanical `dependency_level` labels over the run manifests and are identical
in the batch manifest and the item frontmatter; `item-dependency-levels.mjs
check` reports **no cm04 finding**. In-run suppliers by batch:

| item | level | in-run suppliers (batch: ids) |
|---|---|---|
| `def-cm04-one-dimensional-models-and-equilibria` | 12 | 1: equilibrium/stability; 7: oscillator model; 17: units, worldlines; 18: newtonian flow, force superposition; 19: potential and mechanical energy |
| `def-cm04-phase-plane-and-energy-level-sets` | 13 | 1: equilibrium/stability, orbital/linear stability; 3: mechanical vector field; 7: oscillator model; 20: model definition |
| `post-cm04-harmonic-model` | 13 | 17: units; 18: force superposition; 19: potential; 20: model definition |
| `pthm-cm04-conservative-motion-and-energy` | 14 | 17: units; 18: force superposition; 19: potential; 20: definition, phase plane |
| `pthm-cm04-equilibrium-stability-at-a-strict-minimum` | 15 | 1: equilibrium/stability; 3: mechanical vector field, linearisation, energy stability; 7: oscillator model; 20: four |
| `pthm-cm04-harmonic-motion` | 16 | 7: oscillator model, solution classification; 20: five |
| `post-cm04-linear-damping-model` | 14 | 7: oscillator model; 17: units; 18: force superposition; 19: potential; 20: definition, harmonic model |
| `pthm-cm04-damped-motion` | 17 | 7: oscillator model, solution classification; 17: units; 19: potential; 20: four |
| `pthm-cm04-damped-decay-and-stability` | 18 | 1: equilibrium/stability; 7: decay corollary, oscillator model, solution classification; 20: three |
| `post-cm04-sinusoidal-drive-model` | 15 | 7: oscillator model; 17: units; 18: force superposition, interactions; 19: potential; 20: three |
| `pthm-cm04-resonance-and-boundedness` | 19 | 7: oscillator model, amplitude maximum, forced response, variation of constants, solution classification; 20: seven |
| `rem-cm04-linear-model-scope` | 20 | 12: pendulum bound; 20: eleven |
| `ex-cm04-harmonic-motion-check` (B) | 17 | 17: units; 20: five |
| `ex-cm04-damped-regimes-check` (B) | 19 | 7: solution classification; 17: units; 20: four |
| `ex-cm04-resonance-response-check` (B) | 20 | 7: oscillator model, amplitude maximum, forced response; 17: units; 20: five |
| `ex-cm04-pendulum-small-angle-check` (B) | 16 | 12: pendulum bound; 17: units; 20: five |
| `cex-cm04-undamped-resonance-with-bounded-drive-is-unbounded` (B) | 20 | 7: oscillator model, forced response; 17: units; 20: four |

No cycle, forward edge or missing supplier was introduced. Every in-run
supplier was authored earlier in the run (batches 1, 3, 7, 12, 17, 18, 19);
published mathematical imports are read-only and do not raise levels.

## Design versus plan-spec, and conflicts recorded

1. `research/plan-spec.json` records page `requires` A =
   `[cm-math-verification, cm03-momentum-work-and-energy-balances]` and B =
   `[cm04-one-dimensional-conservative-and-dissipative-models]`. The authored
   A-page carrier and batch manifest record A additionally requiring
   `complex-power-series-and-analytic-functions`: `pthm-cm04-harmonic-motion`
   depends on the published item
   `cor-complex-trigonometric-and-hyperbolic-addition-formulas`, which lives
   on that page (order 80.99, a genuine prerequisite), and `validate-plan`
   rule 15 requires every item-induced page edge to lie in the closure of the
   declared `requires`. With the carrier/manifest record, `validate-plan
   --run` reports no cm04 finding (the run-wide command still fails on one
   other batch's page, below). The plan files are outside worker write scope
   and were not edited; this is the same plan-metadata annotation class
   recorded by batch 19.
2. The design's `B_and_sources` line is delivered: the underdamped/critical/
   overdamped cases (`ex-cm04-damped-regimes-check`), the resonance
   boundedness statement with its singular-case caveats
   (`ex-cm04-resonance-response-check`, `cex-cm04-…-unbounded`) and the
   pendulum exact-vs-small-angle reading (`ex-cm04-pendulum-small-angle-check`)
   are present; the harmonic check and the counterexample are the two
   recorded additions of the scope section.
3. The design's provisional ids (`cm04-…`) are placeholders replaced by the
   run's kind-prefixed ids; no claim was weakened in the mapping.

## Sources, harvest and fetch verification

- Coverage `research/physics-cm-qm-gr-79-2026-10-11-batch-20.coverage.json`
  records 6 source entries across the two pages (3 per page, with
  dispositions `included`/`out-of-scope` and reasons): Likharev, Essential
  Graduate Physics CM §§3.1–3.2 (A) and §§1.2, 3.1–3.2 (B); Tong, Classical
  Dynamics §1.2.4 (A, B); Stewart, Advanced Classical Mechanics (MIT 8.09)
  Ch. 3 and §1.4 (A), Ch. 3 §3.1 and Ch. 7 §7.1.3 (B). Two independent
  treatments per page plus one full course-text treatment per page.
- `source-fetch-check` check mode on the final coverage: **6/6
  fetch-verified, 0 documented drops**; full texts fetched and inspected
  (Likharev CM 252 pp., sha256_16 `714ecc2e0f7c0e86`; Tong 139 pp.,
  `b65ba2b0399df6b0`; Stewart MIT 199 pp., `1a73f42236201703`).
- 30 harvested results carry dispositions (included with item ids, or
  out-of-scope with a specific cross-page reason, e.g. CM05 central-force
  content and CM09 multi-degree normal modes).

## Local closure, proof routes and decisions

- Every claim is proved or postulated locally with explicit hypotheses;
  no escalation was needed and no scope was narrowed. Physical postulates
  declare equations, data, dimensions, potential-and-residual presentations
  and phenomenological scope; theorems are conditional deductions from
  those postulates and the mathematical suppliers.
- Key proof routes: the conservative theorem uses the Picard–Lindelöf flow
  and the energy derivative; the damped classification transports
  `thm-cm-homogeneous-oscillator-solution-classification` and the decay
  corollary; the resonance theorem combines the forced-response theorem
  (particular solution, decomposition, transient decay), the amplitude
  proposition and the variation-of-constants uniqueness, with the exceptional
  set `c=0, Ω=ω₀` separated exactly and the strictly damped case `c>0`
  uniform in `Ω>0`.
- Boundary worksheets in the proof contracts record the empty/zero/one/
  degenerate/endpoint/choice/iff cases: rest motions and zero data, the
  double-root `Δ=0` case (the factor `t` is kept; no division by a vanishing
  `λ₊−λ₋`), the zero-amplitude ellipse, the endpoint-free half-line
  statements, and explicit not-applicable reasons where a case cannot occur.
- The B-page checks are genuine finite computations on declared data with
  exact constants (period `π`, energy `1/2 J`, decay bounds at `t=4`,
  `A(1)=5 m`, peak `50/(3√11)`, error bound on `[0,1]`), and the
  counterexample exhibits an exact unbounded sequence; no measured values or
  empirical precision are asserted anywhere.

## Cross-batch dependencies

- `research/physics-cm-qm-gr-79-2026-10-11-batch-20.cross-batch-dependencies.json`
  carries 61 rows (59 item edges + 2 page edges), one per declared
  `(kind, consumer, supplier)` edge emitted by `frontier-dependency-ledger.mjs`
  with `consumer_batch = 20`: 23 edges to batch 7, 12 to batch 17, 7 to
  batch 18, 7 to batch 19, 4 to batch 3, 5 to batch 1, 3 to batch 12 (the
  two page edges to `cm-math-verification` and
  `cm03-momentum-work-and-energy-balances` included), plus (`cm04-…` → `cm-math-verification` and
  `cm04-…` → `cm03-momentum-work-and-energy-balances`). Each item row records
  the supplier clauses read, the consumer fact/step use and the declared
  role, with status `verified`; the page rows record the reviewed page
  inventories and carriers. All rows were re-read against the suppliers this
  session after the supplier items were fetched from disk.
- `frontier-dependency-ledger.mjs refresh --run …` refreshed and
  deduplicated the unified ledger; all 61 batch-20 edges carry their review
  and batch 20 contributes 0 orphaned reviews.
- The A page's added require `complex-power-series-and-analytic-functions`
  does not create a ledger edge: that page is a published mathematical page
  outside the run's manifests, and the ledger only tracks in-run homes.

## Checks actually run (on the final carriers)

- `precheck.mts` on all 17 items: **14 checked, 0 failing** (the two
  definitions, three postulates and the remark have no phase body).
- `proof-layout.mjs` on all 17 items and 2 page carriers: **19 items,
  55 steps, 0 defects**; re-run on the edited A-page carrier: 0 steps,
  0 defects.
- `rendercheck.mjs` on the 19 files: **clean** (KaTeX, YAML,
  wikilink/math nesting, no multiline display); re-run on the edited carrier
  plus `pthm-cm04-harmonic-motion`: clean.
- `proof-contract.mjs --strict`: **12/12 scope items, 0 errors, 0 warnings**.
- `proof-contract-coverage.mjs` against a batch-only overlay root:
  **17 items, 11/11 supplied arguments covered**.
- `coverage-checklist.mjs`: **2 pages, 30 harvested results, 0 errors,
  0 warnings**.
- `source-fetch-check.mjs` check mode: **6/6 fetch-verified, 0 drops**.
- `content-policy.mjs` (batch manifest, default mode): **17 scoped items,
  0 errors, 0 warnings**; `manifest-deps.mjs` batch-scoped: **17 items,
  0 errors**, and whole-run over all 79 manifests: **774 items, 0 errors**;
  `manifest-integrity.mjs --run`: **158 pages owed, 158 in the manifests,
  no scope drift**. The whole-run `content-policy --manifest-only`
  invocation reports a uniform engine-stage state (`batch-item-already-exists`
  for all 774 items, including the 17 cm04 items); it is not batch-specific
  and is recorded under open findings.
- `depcheck.mjs` (whole repository): 0 cm04 error lines (the run-wide report
  lists 2729 pre-existing errors on other items; the only cm04 mentions are
  the two page closure summary rows); `fwdcheck.mjs`: all 17 items listed
  `inherited` via published suppliers' load-bearing forward edges, none
  produced here; `extcheck.mjs`: **0 recorded-not-proved, 0 resting on
  them, OK**.
- `item-dependency-levels.mjs check --run …`: **no cm04 finding**; the
  remaining run errors are other batches' empty scaffold inventories.
- `validate-plan.mjs research/plan-spec.json --run …`: run-wide **FAIL**
  with exactly 1 finding on `qm-math-controlled-dynamics` (other batch); no
  cm04 finding; the cm04 pages appear with their 12/5 items and requires.
- `physics-check.mjs`: the run-wide invocation aborts on another batch's
  empty inventory (`…-batch-23.pages.json`), and a batch-only overlay root
  reaches the import stage and aborts on pre-existing mathematics-original
  drift (11 pinned imports revised in the mathematics workspace at 13:52
  today; exact list under "Open findings"). With the import stage set aside,
  the same loader and validator scoped to this batch report **0 errors for
  the 17 items**.
- `step1-decisions.mjs check --run …` after the records below: run-wide
  678/774 ready with **0 cm04 work items**; batch 20 is fully closed.

## Post-check repairs and process record (before readiness)

1. Four proof-contract boundary-evidence entries failed the strict anchor
   check (evidence without a step reference, or naming a missing step).
   The evidence strings were corrected to name existing steps only
   (`pthm-cm04-resonance-and-boundedness` zero/endpoints → steps 1.2, 2.2–3.1
   and 1.1/2.1; `ex-cm04-damped-regimes-check` one → step 1.1;
   `ex-cm04-resonance-response-check` one → step 2.1). No item text,
   statement, hypothesis or proof step changed; re-run: 0 errors.
2. `validate-plan` reported the A page's missing require
   `complex-power-series-and-analytic-functions` (finding and fix recorded
   above). The batch manifest and the A-page carrier were updated; the
   manifest was re-emitted in sync with the item frontmatter before the
   readiness records.
3. Process incident, repaired: while building a diagnostic overlay root,
   `/tmp/b20-overlay/research/math-imports.json` was a symlink to the real
   `research/math-imports.json`, and a filtered write through that symlink
   modified the real engine receipt (removing `items/def-finite-sum.md` and
   reformatting). The receipt was restored from the staged git version
   (`git show :./research/math-imports.json`, 28422 entries, pretty-printed
   JSON + trailing newline) re-applying the three pre-existing working-tree
   hash updates (`items/cor-irrationals-uncountable.md`,
   `items/fs-uncountable-contains-interval.md`,
   `items/prop-flat-torus-model-geometry.md`), verified by `git diff
   --numstat` showing exactly those 3 changed lines and nothing else. The
   overlay now uses a real file copy, not a symlink. No other engine state
   was touched; no published content, plan or verdict was edited.

## Readiness records

All 17 items are recorded `ready` — never `--owner`, no escalation
overwritten — after the final item, page and manifest carriers, with the
declared dependencies examined at statement/proof level (61 cross-batch
review rows), adequate page placement and the current proof contract. Each
record carries the item's exact frontmatter `deps` array and the engine's
item-hash binding; the manifest was re-emitted immediately before recording,
so the input hashes are current. `step1-decisions check` reports no cm04 work
item (run-wide 678/774 ready, the remainder other batches' open work).

## Open findings for the owner (none attributable to batch 20)

1. **Mathematics-original drift (run-level reconciliation).** 11 pinned
   imports changed in the mathematics workspace after import; the physics
   snapshots are unchanged and hash-bound, but `physics-check` holds the run
   with `mathematics import changed: <path>; reconcile and re-import before a
   new run`. 10 of the 11 are inside batch-20's transitive import closure
   (all except `items/fs-rational-power-of-negative-base.md`):
   `items/def-finite-sum.md`, `items/def-integer-power.md`,
   `items/lem-bernoulli-inequality.md`, `items/lem-finite-sum-laws.md`,
   `items/lem-power-difference-factorisation.md`, `items/lem-power-laws.md`,
   `items/thm-am-gm.md`, `items/thm-nth-roots-exist.md`,
   `items/thm-weighted-am-gm-rational.md`, `items/thm-young-inequality.md`.
   The observed diffs are convention/notation rewrites (e.g. `def-finite-sum`
   restates the natural-to-real coercion in the Remark; the weighted AM-GM
   statement drops the visible `ι` in favour of a bare-inclusion convention
   with the same hypothesis and inequality), with no change to the
   statements the batch-20 items cite. Recorded for the canonical ledger;
   re-import is an owner/engine action, outside worker scope.
2. Run-level `physics-check` and `validate-plan` also abort/fail on other
   batches' pre-authoring empty inventories (`…-batch-23.pages.json`) and on
   the single `qm-math-controlled-dynamics` undeclared-prereq finding; both
   are outside batch 20's write scope. The whole-run `content-policy
   --manifest-only` invocation returns `batch-item-already-exists` for every
   one of the run's 774 items (the mode expects unminted future batches),
   so the scoped default-mode invocation is the meaningful policy check for
   an authored batch; recorded for the engine/owner.
3. The earlier `physics-check` overlay diagnostic excluded drifted imports
   and produced only import-classification errors for those excluded files
   (domain-required / mathematical-kind-domain) — an artifact of the
   diagnostic, not a batch-20 defect; the batch-scoped content check without
   the import stage is clean.
4. No published defect, no missing local prerequisite and no escalated item
   was found for this pair. This handoff is Step-1 initial authoring evidence
   only — owner/operator reconciliation and the full engine gate follow, and
   Steps 2–3 provide the independent mathematical review.
