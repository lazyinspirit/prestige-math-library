# Step 3a scope dispatch report — pair `sr-causality-and-signals`

- Run: `physics-em-sr-40-2026-10-08` · role: alpha (Step 3a scope review)
- Pair: `sr-causality-and-signals` (A, order 217) / `sr-causality-and-signals-examples` (B, order 218), batch 5 (the only pair in that batch)
- Decision recorded for the A page: **sufficient** (scope only; no item approval, no owner record)

## Inputs read

- Current manifests: `research/physics-em-sr-40-2026-10-08-batch-5.pages.json` (both pages, all 16 item contracts),
  `research/plan-spec.json` entries for both pages (orders, `requires`, companion), and the batch-1–4, 6, 8, 10, 33
  manifests at item level where suppliers or consumers required them.
- `research/physics-em-sr-40-2026-10-08-batch-5.coverage.json`, `...-batch-5.cross-batch-dependencies.json`,
  `...-batch-5.notes.md` (scaffolder's mapping, source findings and recorded observations).
- Prose design: `research/plan-special-relativity-track.md` §"Causality And Signals" (order 217/218, SR05 rows) with its
  four required sources — `.../relativity/scaffold/special-relativity.md` (SR05 reservation and S6),
  `proposed-inventory-and-checks.json` (SR05/SR05B), `expanded-item-inventory.json` (stable item
  `thm-sr-future-cone-and-flat-domain-of-dependence`, home SR05), `closure-ledger.json` (M24, M02, retained limits).
- Owner direction `research/physics-em-sr-40-2026-10-08-owner-authoring-direction.md`: general rules and the
  SR/causal-cone clauses, including the preserved obligations "future and past closed cones contain their nonzero
  null boundaries …" and "a sum of two nonzero future causal vectors is null exactly when both are null and positive
  multiples of one another"; the piecewise-proper-time and weak-piecewise-integrability obligations; the
  empirical-comparison section (not this pair's subject).
- No prior Step 3a review or owner scope decision exists for this pair (checked `research/*step3a-*sr-causality*`).

## Scope comparison: design ↔ scaffold

The SR05 reservation asks for "def causal reachability in affine Minkowski space; pthm cone composition/signal
transformations; texp conditional superluminal signaling construction with stated availability assumptions"
(budget 20 A / 10 B; the S6 module adds finite cone sums, affine reachability and clock maximum, and explicitly
supplies no PDE finite propagation).

| Design element | Planned item(s) | Assessment |
|---|---|---|
| def causal reachability | `def-sr-causal-reachability-in-affine-minkowski-space` (convex cones, `<=`/`<`, `J^±`/`I^±`, causal diamonds, piecewise `C^1` future causal paths, `R^+`; no property asserted) | present, well-scoped |
| cone composition / signal transformations | `lem-sr-future-causal-sums-and-inertial-coordinate-criterion` (closed-cone description, finite sums, coordinate criterion), `thm-sr-future-cone-and-flat-domain-of-dependence` (path displacement, `J^+=R^+`, no causal loops, time monotonicity, straight-worldline proper-time maximum, Lorentz invariance), `lem-sr-spacelike-pairs-have-frame-dependent-time-order` (explicit boost family over a spacelike pair), and the physical reading `pthm-sr-causal-signal-order-and-composition` (receipt in `J^+` with absolute order, relay composition, no closed signal loops, frame independence, spacelike exclusion) | present; the S6 "clock maximum" is clause (e) |
| conditional superluminal relay | `texp-sr-superluminal-relay-antitelephone` with assumptions S1–S4, exact arrival time and the incompatibility deduction | present, availability assumptions explicit |
| physical premise for "signal" | `post-sr-causal-signal-propagation` (adopted causal signal restriction, ideal-light boundary case, adopted/not-derived/not-empirical status, explicit non-restriction for prearranged spacelike patterns) | present; minimal and honestly classified |

Budget is not exhausted (7 A / 9 B against 20/10): every promised claim closes with these items, and the A page is far
below the 100-item cap. The B page is a leaf of 7 worked examples and 2 counterexamples, all domain mathematics:
causal diamond with invariant coordinate area (Crowell light-rectangles), two null legs composing to a timelike
displacement, parallel nulls composing to null (including the "null iff parallel future null multiples"
characterization required by the owner direction), the three-chart boost family for the spacelike pair, counterexamples
for absolute spacelike time order and for null-separated pairs not timelike-joinable, the four-displacement coordinate
table, the prearranged superluminal sweep with no causal connection, and the exact relay arithmetic. This covers the
subject at the designed depth; examples trace to the sources' worked material plus explicit local computations.

## Source coverage

Four sources, with every harvested result backed (coverage file, `included`/`inline` dispositions): Crowell §1.3.2
(light-rectangles → diamond example), §2.1.1–2.1.3 (arrow of time, initial-value causality, P1 recorded, not
re-minted), §4.7.1 (superluminal information transfer → pthm; antitelephone → texp), §4.7.2 deferred to
`sr-experimental-interface` (a planned page exists, batch 12) for the tachyon-search experiments; Carroll Ch. 1
pp. 5–7 (cone split, no coordinate-independent time order → spacelike lemma) and Ch. 4 p. 125 (no signals beyond
light → postulate), with D^+(S)/Cauchy-horizon material deferred to `em-vacuum-waves-and-polarization` (exists,
batch 33) and Misner space out of scope for the affine model; Tolman §§45–52 (clock rate deferred to
`sr-proper-time-comparisons`, batch 6; §47 → spacelike lemma; §51 out of scope to the Lorentz page; §52 →
texp, sweep example, postulate); Reall §§2.1–2.3 (cone/causal-curve/proper-time material → cone lemma and the
maximum theorem, whose maximization statement Reall leaves unproved and this page supplies as a proof obligation).
All deferred destinations exist in the run; the out-of-scope reasons are framework-bounded and honest (no quantum,
topology or PDE content imported into the affine model).

## Prerequisites and unmet-prerequisite check

- Declared closure: 16 items, 162 `deps` edges, 45 distinct prerequisites — 27 in-run items (batches 1–5) and
  18 published imported mathematical items; 0 unresolved ids.
- No cross-page ordering violations, no forward references and no B-page dependencies among these items
  (scoped transitive walk; frontier `validate-plan` reports no finding of any class for either page).
- First-hand tool runs this dispatch: `manifest-deps.mjs` on the batch-5 manifest → 16 items, 0 errors;
  `content-policy.mjs --manifest-only` over all current run manifests → 471 scoped items, 0 errors, 0 warnings;
  `frontier-item-gate.mjs --run … --tool validate-plan` → run-wide OK, no finding for this pair (remaining
  advisories are `redundant-prereq` on EM pages only).
- Named suppliers all exist in the run, e.g. `def-sr-piecewise-proper-time`, `def-sr-proper-time`,
  `lem-sr-weak-piecewise-causal-integrability` (sr-worldlines-and-clocks, order 213), the batch-1 postulates and
  `def-sr-si-units-and-coordinate-conventions`, the batch-2 Lorentz machinery including
  `pthm-sr-interval-and-cone-invariance`. The 98 cross-batch dependency rows for batch 5 are all recorded and
  `open` (supplier scaffolded, not yet authored) — expected at Step 3a, not a missing prerequisite.
- **No unmet prerequisite found.** Every supplier the pair names is scaffolded in this run or is a published
  import. Mathematical items here depend on no physical item; the physics items consume the postulates explicitly.

## Observations and uncertainty (non-blocking)

1. The stable research id/title `thm-sr-future-cone-and-flat-domain-of-dependence` carries "flat domain of
   dependence", while statement clause (g) explicitly asserts nothing about PDEs and the D^±(S)/Cauchy-horizon
   material is recorded as deferred to the EM wave page. The pair omits no promised result; authoring and rendering
   should not let the title read as a PDE finite-propagation claim (a later rename is an owner option, not a scope
   requirement). Recorded honestly, not repaired here.
2. Clause (e) (straight-worldline maximum) overlaps the independently scaffolded
   `thm-sr-endpoint-proper-time-bound-and-flat-maximum` on `sr-proper-time-comparisons` (batch 6; does not consume
   this page). This was already recorded in the batch-5 notes; the design's S6 explicitly includes the clock
   maximum, so the overlap is design-sanctioned and no id is duplicated.
3. Source-status honesty is preserved: Crowell §4.7.1 is a sketch (restriction adopted, not derived); Reall states
   the proper-time maximum without proof (the page proves it); Tolman is older-notation and one-way (the two-way
   chain is supplied locally). No empirical claim is made anywhere in the pair; all tachyon searches are deferred.
4. The coverage file carries fetch stamps for all four sources; this dispatch did not re-fetch the PDFs, and proof
   correctness of the planned arguments is outside Step 3a's scope — both remain later review duties.

## Decision

Scope **sufficient**: the planned definitions, results and examples adequately cover the intended subject
(flat-spacetime causal reachability, cone composition, the causal signal restriction, and the conditional
superluminal-relay analysis), with source dispositions accounted for and all prerequisites resolvable. No owner
action (merge/enrich) proposed. Decision recorded with
`node tools/physics-support/step3-decisions.mjs record-scope --run physics-em-sr-40-2026-10-08 --page sr-causality-and-signals --decision sufficient --reason "<scope evidence + this report path>"`.
