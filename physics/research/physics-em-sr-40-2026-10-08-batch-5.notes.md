# Batch 5 notes — `sr-causality-and-signals` / `sr-causality-and-signals-examples`

Run `physics-em-sr-40-2026-10-08`, role beta, label batch-5, covers 5 (batch index).
Owned pair: `sr-causality-and-signals` (A, order 217, category `special-relativity`,
`library: physics`) and `sr-causality-and-signals-examples` (B, order 218). Step 1 scaffold
construction only: no item was authored, and no readiness record is independent mathematical
approval (Step 3 review follows). Nothing outside the assigned manifests, coverage, notes,
readiness records and the consumer-batch dependency input was written.

Authority read in full before construction: `CLAUDE.md`, `../CLAUDE.md`, `SCHEMA.md`,
`WORKFLOW.md`, `../PHYSICS-CONTENT-MODEL.md` (including the mathematical-rigor and
statistical-evidence/double-slit sections), the owner authoring direction
`research/physics-em-sr-40-2026-10-08-owner-authoring-direction.md`, the design section
`research/plan-special-relativity-track.md` L102 (Causality And Signals), the four complete
required sources named there —
`.../relativity/scaffold/special-relativity.md` (SR05 reservation, S6 paragraph and the
"Precise objects" paragraphs), `.../scaffold/proposed-inventory-and-checks.json` (SR05/SR05B
rows), `.../scaffold/expanded-item-inventory.json` (the stable item
`thm-sr-future-cone-and-flat-domain-of-dependence`, home SR05) and
`.../relativity/closure-ledger.json` (M24 = "Nullable phase/Doppler/aberration, causal
sums/reachability, explicit emitter-rest-speed superluminal relay countermodel"; M02 =
"Global flat proper-time bound/equality, reverse inequality and reunion example") — plus the
S6 argument of `.../scaffold/sr-supplier-proofs.md`, the splice
`research/prose-scaffold-splice.json` (`proposed_item_homes`), the source-coverage row for
SR05 in `.../scaffold/prose-scaffold.md`, the reader reports (`reader-taylor`/Crowell,
`reader-carroll`, `reader-gourgoulhon`/Reall), the current `research/plan-spec.json`, the
external-prerequisite repair context, and batches 1–4 manifests and notes (the supplier
pairs).

---

## Scope built

- **A page** `sr-causality-and-signals`, 7 items in dependency order: four
  domain-mathematics items (a definition, two lemmas and the stable theorem), one physics
  postulate, one physics-theorem and one thought-experiment. No mathematical item depends on
  a physical item.
  - `def-sr-causal-reachability-in-affine-minkowski-space` (mathematics): the closed
    future/past cones, the relations `<=` (causal reachability) and `<` (chronological
    reachability), the sets `J^+/I^+` and their pasts, causal diamonds, the piecewise `C^1`
    future causal path class and the path-reachable set `R^+(p)`; no property of the relations
    is asserted here.
  - `lem-sr-future-causal-sums-and-inertial-coordinate-criterion` (mathematics): the
    description `Cbar^+ = {v^0 >= |v_s|}` in any inertial basis, finite-sum closure with the
    strict timelike case and the zero-sum case, and the coordinate criterion
    `q in J^+(p) iff D^0 >= |D_s|` with the strict and `q = p` cases.
  - `thm-sr-future-cone-and-flat-domain-of-dependence` (mathematics): the **stable research
    item** homed here by the splice — displacement of a piecewise `C^1` future causal path
    (strictness under a timelike tangent, `D = 0` iff constant), `R^+(p) = J^+(p)` and the
    straight-segment characterization of `J^+` and `I^+`, antisymmetry of `<=` and absence of
    nonconstant closed future causal paths, monotonicity of inertial coordinate time, the
    straight-worldline proper-time maximum `c^{-1} sum tau_i <= T/c = sqrt(-eta(D,D))/c` with
    its equality case, and invariance under proper orthochronous affine Lorentz maps.
  - `lem-sr-spacelike-pairs-have-frame-dependent-time-order` (mathematics): the pure spatial
    inequality `|D^0| < |D_s|` in every inertial chart and the explicit one-parameter family
    `x_b = B(b e) o x` of inertial charts realizing simultaneity and either time-order sign
    for a spacelike-separated pair.
  - `post-sr-causal-signal-propagation` (physics): the adopted causal signal restriction
    (receipt only in the closed future cone), the ideal-light boundary case, the
    adopted/not-derived/not-empirical status, and the explicit non-restriction for
    spacelike-separated patterns that transfer no signal.
  - `pthm-sr-causal-signal-order-and-composition` (physics): receipt in `J^+` with absolute
    temporal order in every inertial chart, relay composition (`r in J^+(p)`, strict case),
    absence of closed signal loops, frame independence under inertial changes of description,
    and exclusion of signals on spacelike-related pairs.
  - `texp-sr-superluminal-relay-antitelephone` (physics): the conditional one-relay
    superluminal chain with stated availability assumptions S1–S4, the exact arrival time
    `t(A_1) = L(2u - v - vu^2/c^2)/(u - v)^2 < 0` under `v > 2u/(1 + u^2/c^2)`, and its
    incompatibility with the causal signal restriction; not an empirical observation.
- **B page** `sr-causality-and-signals-examples`, 9 leaf items, all domain mathematics: 7
  `example` and 2 `counterexample`. Worked causal diamond with invariant coordinate area,
  two null legs composing to a timelike displacement, parallel nulls composing to null, the
  three boost charts of the pair `(11,13,0,0)`, counterexamples for spacelike time-order and
  for null-separated pairs that are not timelike-joinable, the four-displacement coordinate
  table, the superluminal prearranged sweep, and the exact relay arithmetic at `u = 2c`,
  `v = (9/10)c`. All are `example`/`counterexample` with `generation.role` where the statement
  is `ai-generated`; the two examples that rework source material (light-rectangle and the
  Tolman sweep/relay) carry `ai-altered` statements with source URLs. The B page is
  deliberately fully mathematical (no physical deps) and is a leaf.
- Page `order`, `id`, `kind`, `category`, `library`, `title`, `companion` and `requires` are
  unchanged from the plan record and the generated task shell; the only edits are the two
  `items` arrays.
- `dependency_level` computed from in-run `deps` only (batches 1–4 items count as in-run;
  published imports and planned pages do not raise a level). A-page levels 8–13, B-page
  levels 9–13; `node tools/physics-support/item-dependency-levels.mjs check --run
  physics-em-sr-40-2026-10-08` reports no error for any batch-5 item (remaining errors are
  other batches' not-yet-scaffolded empty inventories).
- **Budget.** The design reserves 20 A / 10 B closure slots. The pair is built to 7 A / 9 B:
  every promised claim closes with these items; the reservation is a budget, not a target. The
  A page is far below the 100-item cap; no split is required.
- **No new physical postulate beyond the one required.** The page consumes the batch-1
  postulates `post-sr-inertial-covariance`, `post-sr-ideal-clocks-and-light` and the SI
  conventions rather than re-minting them; the single new postulate is the causal signal
  restriction, which the design's "pthm cone composition/signal transformations" needs as a
  physical premise (see below).

### Mapping of the SR05 design inventory

| design element | disposition |
|---|---|
| "def causal reachability in affine Minkowski space" | `def-sr-causal-reachability-in-affine-minkowski-space`, with the coordinate criterion lemma supplying the computational form. |
| "pthm cone composition/signal transformations" | `pthm-sr-causal-signal-order-and-composition` (physical reading), on the mathematical suppliers `lem-sr-future-causal-sums-and-inertial-coordinate-criterion` (composition/coordinate criterion), `thm-sr-future-cone-and-flat-domain-of-dependence` (reachability, loop-freeness, monotonicity) and `lem-sr-spacelike-pairs-have-frame-dependent-time-order` (transformations of spacelike order). |
| "texp conditional superluminal signaling construction with stated availability assumptions" | `texp-sr-superluminal-relay-antitelephone` with assumptions S1–S4 stated in the item and the availability caveats carried into its scope clause. |
| closure "S6" | `thm-sr-future-cone-and-flat-domain-of-dependence` realizes the S6 argument: cone sums, path displacement inequality, `J^+ = p + Cbar^+`, absence of loops, the flat proper-time maximum and the remark that no PDE finite propagation is supplied. |
| budget 20/10 | Not exhausted: 7 A and 9 B items close every promised claim. |

## Design vs plan

- `research/plan-spec.json` and the generated manifest agree with the design
  (`plan-special-relativity-track.md` L102) on page ids, titles, orders 217/218, category,
  library, companion and `requires: ["sr-observer-measurements"]`; the design's
  "requires SR02–SR04" is consistent with the plan edge because `sr-observer-measurements`
  transitively contains SR03, SR02 and SR01. No page-edge or order conflict to record.
- The stable research item `thm-sr-future-cone-and-flat-domain-of-dependence` is minted
  exactly where the splice places it (home `sr-causality-and-signals`); every other id in
  this batch is new and unused. No item of batches 1–4 is re-minted.
- **Component-ownership observation (recorded, not repaired here).** The closure ledger
  assigns M24 ("causal sums/reachability, explicit emitter-rest-speed superluminal relay
  countermodel") to this page but assigns M02 ("Global flat proper-time bound/equality,
  reverse inequality and reunion example", arguments S6) to `sr-proper-time-comparisons`.
  The stable item's research statement nevertheless includes "clock maximum", so clause (e)
  of `thm-sr-future-cone-and-flat-domain-of-dependence` proves the flat proper-time maximum
  here. The `sr-proper-time-comparisons` batch (batch 6) may consume clause (e) as its
  "endpoint bound" or restate it; the reverse Cauchy-Schwarz inequality and the piecewise
  inertial reunion remain to be supplied there. Recorded so the two batches do not
  accidentally mint the same claim twice or leave the maximum unowned.
- **Recorded plan-locator correction (no conflict).** The design's source row for SR05 cites
  "Carroll Ch1 and §5 pp121–128"; in the pinned arXiv v1 the causal discussion is in
  Chapter 4, printed pp. 124–127 (PDF pp. 131–134), which is what the coverage file records.

## Local closure decisions

- The page supplies every prerequisite of its own claims in-page, on top of the in-run
  closure `sr-spacetime-primitives` (batch 1), `sr-lorentz-transformations` (batch 2),
  `sr-worldlines-and-clocks` (batch 3) and `sr-observer-measurements` (batch 4) plus the
  published imported mathematics on disk.
- **The causal signal restriction is a new postulate, and it is the minimal one needed.**
  The design's physical theorem presupposes that "signal" is a model notion; the reader
  report (`reader-taylor/report.md`) states the required distinction explicitly: "The
  operational claim that information propagates only on future causal curves is an adopted
  physical restriction, distinct from merely defining this cone." The postulate is sourced to
  Tolman Section 52 (the order reversal of a superluminal causal impulse and the blocks
  caveat), Carroll Chapter 4 p. 125 ("no signals can travel faster than the speed of light;
  therefore 'information' will only flow along timelike or null trajectories") and Crowell
  Section 4.7.1 (superluminal information transfer and the antitelephone), with the two
  caveats recorded: (i) Crowell's own Section 2.1.3 postulate P1 is a different, existence-style
  statement and is not re-minted; (ii) the source's heuristic argument is not a proof, and the
  item states the restriction as adopted.
- **The flat proper-time maximum is proved, not cited.** Reall Section 2.3 pp. 28–30 states
  the maximization of proper time along straight timelike lines without proof (also noted in
  the reader report). Clause (e) supplies the proof: a passive boost
  `B(beta)`, `beta = v_s/v^0`, maps `D = q - p` to `T e_0`; in that chart the integrand
  satisfies `sqrt(a^2 - b^2) <= a`, integration over the pieces gives `c^{-1} sum tau_i <= T/c`,
  and equality forces the spatial derivative to vanish, i.e. the monotone straight segment.
  The boost construction (`e'_a = B(beta)^{-1} e_a` is an inertial basis because
  `B(beta)^{-1}` is proper orthochronous) is written out in the strategy.
- **Non-claims kept explicit.** (i) The definition item asserts no property of `<=`, `J^+`
  or `R^+`. (ii) The theorem asserts nothing about partial differential equations or
  propagation of particular fields (the research module's "no PDE finite propagation" scope
  clause). (iii) The spacelike lemma says nothing about synchronization procedures; "the two
  events are simultaneous in the frame" is equality of the frame's time coordinate. (iv) The
  postulate and the thought experiment carry their availability assumptions and the
  non-signal patterns (Tolman's blocks, moving spots, prearranged triggers) explicitly outside
  their conclusions. (v) The two B counterexamples refute specific displayed statements
  (frame independence of spacelike time order; "causally related implies timelike-joinable"),
  not "classical physics" or any framework.
- **Axiom of choice.** No batch-5 item uses AC or a countable-choice principle: the arguments
  are finite-dimensional coordinate algebra, one explicit boost, integrals of continuous
  functions on compact intervals and finite sums. No choice declaration is needed or made.
- **Units.** Mathematical items treat `c` as a fixed positive constant of the model and use
  the run's `x^0 = c t` conventions only where coordinate computations are made; the SI
  identifications are carried by `def-sr-si-units-and-coordinate-conventions` through the
  physical items (`post-sr-causal-signal-propagation`, the physics-theorem, the
  thought-experiment). No mathematical item depends on a physical item.

## Source findings (exact evidence)

1. **Crowell Section 4.7.1 (arXiv-equivalent pp. 110–111) is an argument sketch.** Arguments
   1–4 are presented as a "defense in depth"; argument 1 is explicitly called the weakest
   ("we have no strong reasons for believing in causality as an overarching principle"). The
   page therefore adopts the restriction as a postulate and records the heuristic status in
   the postulate's clause (iii) and in the coverage row.
2. **Crowell's P1 (Section 2.1.3 p. 44) is not this page's postulate.** P1 asserts the
   existence of events whose displacement is timelike in all frames; the causal signal
   restriction asserts that no signal connects spacelike-related events. The difference is
   recorded in the coverage row and here; no ID is reused.
3. **Tolman Section 52 (pp. 54–55) is a one-way computation in an older notation.** Formula
   (29) gives the negative elapsed time for a superluminal causal impulse in a moving system;
   the two-way closed chain is supplied locally by
   `texp-sr-superluminal-relay-antitelephone` and its worked arithmetic (B page), and
   Tolman's caveat that kinematic occurrences without causal connection are not restricted is
   realized as `ex-sr-superluminal-sweep-has-no-causal-connection`.
4. **Reall Section 2.3 pp. 28–30 states maximality without proof** ("It can be shown that
   these lines maximize the proper time between two points"); the page proves it (see above)
   and the coverage row records the source's status.
5. **Carroll Chapter 4 pp. 124–127 material on domains of dependence and Misner space is not
   used as a supplier.** The domain-of-dependence discussion concerns PDE initial-value
   problems (deferred to `em-vacuum-waves-and-polarization`), and Misner space is not the
   affine model (out-of-scope). The reader report's warning about "signals inside the light
   cone" being an adopted principle is what the postulate records.

## Supplier statement checks at scaffold time

The following suppliers were read at statement level before the readiness records were filed:
`def-lorentz-boost`, `lem-boost-is-proper-orthochronous-with-inverse` (its clause (iv) is
exactly the normalization `B(beta)u = e_0` used in the proper-time maximum; the strategy
re-derives it directly), `lem-lorentz-map-preserves-metric-and-causal-structure`,
`thm-sr-proper-orthochronous-lorentz-algebra`, `def-inertial-frame-and-inertial-chart`,
`def-causal-classification-of-lorentz-vectors`, `def-time-orientation-and-future-causal-sets`,
`lem-timelike-cone-has-two-convex-components`, `def-spatial-euclidean-structure-of-an-inertial-frame`
(the norm `|w| = sqrt(delta(w,w))` on the spatial part), `def-sr-regular-causal-curve-and-worldline`,
`def-sr-proper-time`, `thm-sr-proper-time-and-observer-decomposition`,
`def-vector-valued-derivative-and-integral` (componentwise integral),
`cor-vector-valued-ftc-and-lipschitz-bound` (`int_a^b f' = f(b) - f(a)`),
`thm-norm-inequality-for-the-vector-valued-integral` (`||int f|| <= int ||f||`),
`thm-continuous-implies-integrable`, `thm-linearity-of-the-integral`,
`thm-monotonicity-of-the-integral`, `thm-additivity-over-subintervals` (oriented form),
`thm-nonnegative-continuous-with-zero-integral-vanishes` (`f >= 0` continuous with zero
integral vanishes), `cor-triangle-inequality-for-inner-product-norm` and `def-interval`.
Hypotheses, directions, conventions and the (absent) choice content of these uses were checked
against the strategies of this batch; no unresolved mismatch was found. This is bounded
scaffold-time reading, not a proof audit.

**Post-record correction.** After the first readiness pass, the phrase "no chart, origin,
orientation or unit convention enters" in `def-sr-causal-reachability-in-affine-minkowski-space`
was corrected to "no chart, origin, spatial orientation of V or unit convention enters", because
the time orientation does enter (the same sentence says so) and only the spatial orientation of
`V` is unused. The correction invalidated the record hashes of that item and its 13 transitive
consumers; all 14 were re-recorded and all 16 batch-5 records are closed and current.

## Cross-batch dependencies and consumer inputs

- Batch input file `research/physics-em-sr-40-2026-10-08-batch-5.cross-batch-dependencies.json`
  holds 98 rows (97 item rows into batches 1–4, 1 page row into `sr-observer-measurements`),
  one per declared cross-batch edge, each with required content, use/location, hypothesis
  check and the fact that the supplier is scaffolded but not yet authored (status `open`).
  `frontier-dependency-ledger.mjs refresh --run physics-em-sr-40-2026-10-08` reports 0
  orphaned reviews; every declared batch-5 consumer edge carries exactly one review row.
- Downstream consumers of this page: `sr-accelerated-observers` (order 227) and
  `em-vacuum-waves-and-polarization` (order 345) both declare `sr-causality-and-signals` in
  `requires`; their batches must add their own review rows to their own cross-batch inputs.
  In particular `thm-sr-future-cone-and-flat-domain-of-dependence` and
  `lem-sr-future-causal-sums-and-inertial-coordinate-criterion` are the natural suppliers of
  causal-order language to the accelerated-observers page, and the EM wave page may cite the
  kinematic cone result for its separate PDE finite-propagation work (which this page
  explicitly does not supply). B-page items are leaves and must not be consumed.

## Checks actually run (exact results)

| Check | Command | Result |
|---|---|---|
| manifest deps (all batches) | `node tools/physics-support/manifest-deps.mjs research/physics-em-sr-40-2026-10-08-batch-*.pages.json` | 234 items, 0 missing, 0 errors |
| manifest policy (all batches) | `node tools/physics-support/content-policy.mjs --manifest-only research/physics-em-sr-40-2026-10-08-batch-*.pages.json` | 234 scoped items, 0 errors, 0 warnings |
| physics content (engine form) | `node tools/physics-support/physics-check.mjs --run physics-em-sr-40-2026-10-08 --plan research/plan-spec.json` | 0 errors, 234 items checked |
| coverage | `node tools/physics-support/coverage-checklist.mjs research/...batch-5.coverage.json --require-destination` | 1 page, 27 harvested results, 0 errors, 0 warnings |
| full-text fetch | `node tools/physics-support/source-fetch-check.mjs --coverage research/...batch-5.coverage.json --stamp` | 4/4 sources fetch-verified (4 newly stamped) |
| source backing | `node tools/physics-support/source-backing.mjs --coverage research/...batch-5.coverage.json --liveness /tmp/b5-url-liveness.json` | 7 authored results, every one backed by an openable source; empty reharvest list |
| URL liveness (batch scope) | `node tools/physics-support/url-sweep.mjs --coverage research/...batch-5.coverage.json --out /tmp/b5-url-liveness.json --recover --fail-on-dead` | 4/4 live, 0 failed, 0 suspect (after declaring `original_url` on the Reall entry) |
| plan (page level, frontier form) | `node tools/physics-support/frontier-item-gate.mjs --run physics-em-sr-40-2026-10-08 --tool validate-plan` | no finding of any class for `sr-causality-and-signals` or its B companion; 6 run-wide `undeclared-prereq` errors on other batches' pages are recorded below |
| scope ledger | `node tools/physics-support/manifest-integrity.mjs --run physics-em-sr-40-2026-10-08` | 80/80 pages present, no scope drift |
| drift review | `node tools/physics-support/drift-review-check.mjs --run physics-em-sr-40-2026-10-08` | 40 pages reviewed, no blocked edges |
| dependency levels | `node tools/physics-support/item-dependency-levels.mjs check --run physics-em-sr-40-2026-10-08` | batch-5 items clean (levels 8-13); the 46 remaining errors are other batches' empty inventories (no other error class) |
| cross-batch ledger | `node tools/physics-support/frontier-dependency-ledger.mjs refresh --run physics-em-sr-40-2026-10-08` | 0 orphaned reviews; all 98 batch-5 consumer edges reviewed (open) |
| readiness | `node tools/physics-support/step1-decisions.mjs check --run physics-em-sr-40-2026-10-08` | 234 declared items, 215 ready; 0 open rows for batch-5 items (the 65 open rows are other batches' missing records/empty inventories) |

## Run-level findings (not batch-5 blockers)

1. **Frontier plan validator (`undeclared-prereq`).** The run-wide frontier `validate-plan`
   currently reports 6 findings, none for this pair: 3 on `sr-proper-time-comparisons` /
   `sr-energy-momentum` (homes `construction-of-the-natural-numbers`,
   `rings-subrings-and-integral-domains`) and 3 on `em-causal-wave-kernel-prerequisites`
   (`fubini-and-change-of-variables`, `the-topology-of-euclidean-space`,
   `density-separability-and-convolution-in-lp`). Repair belongs to the plan writer plus the
   owning batches; a beta may not edit the shared plan, and a manifest-only edit would be
   reverted by the `drift-apply` sync. This batch's own dep selection was made so that every
   published home it touches is already inside the page's requires closure, so it introduces
   no finding.
2. **Scoped `extcheck --manifest-only` cannot run yet**: the frontier wrapper loads every run
   manifest and other batches still carry empty item arrays ("Invalid or empty current page in
   physics-em-sr-40-2026-10-08-batch-10.pages.json"). Batch 5 declares no `proved_here: false`
   item, no `external_refs` and no `forward_refs`, so its own extcheck scope is empty.
3. **Ledger gate** `frontier-dependency-ledger.mjs refresh --require-reviewed` remains red
   run-wide until every batch supplies an input and every declared edge has a review row.
   Batch 5's input is complete (0 orphaned reviews). Two edges with batch 5 as the *supplier*
   (the page edges into `sr-accelerated-observers` and `em-vacuum-waves-and-polarization`)
   are currently unreviewed because those consumer batches have not yet filed their inputs.
4. **Root mathematics import drift** recorded by batches 3–4 remains external to this pair;
   the engine invocation with `--run` passes.

## Unresolved / escalated

- No batch-5 item is escalated: each has a complete statement, an explicit proof or
  non-derivation strategy, named dependencies with roles and a computed dependency level, and
  every supplier is scaffolded in this run or published on disk.
- Recorded uncertainty (not an escalation): (i) the component-ownership observation between
  clause (e) of the stable theorem and `sr-proper-time-comparisons`' M02; (ii) the source
  caveats of the four cited treatments (Crowell's sketch-level argument, Tolman's older
  notation and one-way computation, Reall's unproved maximality, Carroll's
  domain-of-dependence material deferred to the EM/PDE page). If Step 3 cannot re-derive the
  relay arrival formula or the boost-normalized maximum, the exact formula must be revisited
  rather than silently restored from the research module.

## Final verification (after the last edits)

- `manifest-deps` on all current manifests: 234 items, 0 missing, 0 errors.
- `content-policy --manifest-only` over all current manifests: 0 errors, 0 warnings.
- `coverage-checklist --require-destination` on the batch file: 0 errors, 0 warnings.
- `source-fetch-check` in check mode: 4/4 fetch-verified; the coverage file carries the stamps.
- `url-sweep` on the batch scope: 4/4 live.
- `source-backing` on the batch scope: every authored result backed.
- `physics-check --run ... --plan`: 0 errors, 234 items.
- Readiness records: one per batch-5 item, `ready`, with the examined dependency ids.
- Stage-artifact simulation for unit 5 (`tools/physics-autopilot/stages/mathlib.mts`,
  `1-scaffold.artifacts`): the populated manifest, the coverage file and all 16
  `research/...-step1-<id>.json` records exist, every record is current (`step1Decision`
  closed) and every `dependency_level` equals the computed level, so no
  `...batch-5.scaffold-incomplete` sentinel applies and the pair is releasable to its
  dependent batches. The run-wide stage-1 gates (readiness, dependency levels,
  `--require-reviewed` ledger, extcheck, plan) remain red only for the other batches.
