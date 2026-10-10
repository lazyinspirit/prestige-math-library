# Step 3b authoring report — pair `sr-observer-measurements` / `sr-observer-measurements-examples`

- Run: `physics-em-sr-40-2026-10-08`, role alpha-high, label
  `step3b-pair-sr-observer-measurements-f9c3bf5f3968f68b` (batch 4, batch index 4;
  an earlier segment of the same dispatch carried label
  `step3b-pair-sr-observer-measurements-a6358900cae7488b`).
- A page `sr-observer-measurements` (order 215), B page
  `sr-observer-measurements-examples` (order 216); 15 A items + 10 B items.
- Entry state (first segment): no item of the pair authored, no page carrier,
  no `batch-4.proof-contracts.json`. Batches 1–3 supplied the primitives,
  Lorentz transformations and worldline/clock layer; those items were
  scaffolded but not authored at entry.
- Final state: all 25 items authored and checked; both page carriers created;
  `research/physics-em-sr-40-2026-10-08-batch-4.proof-contracts.json` created;
  batch coverage, cross-batch dependency input, manifest rows and item/page
  decisions updated; all pair-scoped gates clean.

## Owned IDs (authoring order, final status, decision)

| # | level | item | page | status | decision |
|---|-------|------|------|--------|----------|
| 1 | 7 | `lem-sr-closed-one-form-primitive-on-simply-connected-open-sets` | A | authored | repaired |
| 2 | 9 | `def-sr-chart-tetrad-and-congruence-distinction` | A | authored | accept |
| 3 | 10 | `def-flat-covariant-derivative-on-affine-minkowski-space` | A | authored | accept |
| 4 | 10 | `def-sr-operational-radar-protocol` | A | authored | accept |
| 5 | 12 | `def-sr-fermi-walker-transport` | A | authored | accept |
| 6 | 12 | `def-sr-observer-congruence-and-kinematics` | A | authored | accept |
| 7 | 12 | `def-sr-simultaneity-slice-and-rest-distance` | A | authored | accept |
| 8 | 12 | `lem-sr-boost-time-length-and-velocity-formulas` | A | authored | repaired |
| 9 | 13 | `lem-sr-fermi-walker-transport-existence-and-uniqueness` | A | authored | repaired |
| 10 | 13 | `lem-sr-radar-midpoint-for-inertial-observer` | A | authored | accept |
| 11 | 13 | `thm-sr-local-congruence-adapted-charts-and-frobenius` | A | authored | accept |
| 12 | 13 | `cex-sr-simultaneity-is-observer-dependent` | B | authored | accept |
| 13 | 13 | `ex-sr-length-contraction-of-a-moving-rod` | B | authored | accept |
| 14 | 13 | `ex-sr-time-dilation-at-beta-three-fifths` | B | authored | accept |
| 15 | 13 | `ex-sr-velocity-transformation-worked` | B | authored | accept |
| 16 | 14 | `pthm-sr-radar-synchronization-of-inertial-observers` | A | authored | accept |
| 17 | 14 | `thm-sr-fermi-walker-and-rigid-observer-examples` | A | authored | accept |
| 18 | 14 | `thm-sr-smooth-local-herglotz-noether` | A | authored | accept |
| 19 | 14 | `ex-sr-radar-round-trip-3-4-5` | B | authored | accept |
| 20 | 15 | `pthm-sr-observer-time-length-and-velocity-measurements` | A | authored | accept |
| 21 | 15 | `cex-sr-born-rigid-motion-need-not-be-killing` | B | authored | repaired |
| 22 | 15 | `ex-sr-bell-congruence-fails-born-rigidity` | B | authored | accept |
| 23 | 15 | `ex-sr-fermi-walker-transport-along-hyperbolic-motion` | B | authored | accept |
| 24 | 15 | `ex-sr-rigid-rotation-simultaneity-holonomy` | B | authored | accept |
| 25 | 15 | `ex-sr-rindler-wedge-congruence-worked` | B | authored | accept |

The manifest dependency levels were recomputed from the authored
`deps` with the repository's own `dependencyLevels` function; every stored label
equals the computed value (`item-dependency-levels check --run` clean on the
current bytes). The `repaired` decisions record the substantive local repairs:

- item 1, locally added prerequisite completed by the finite grid argument;
  `def-metric-uniform-continuity` dropped (home outside the declared `requires`
  closure) and uniform continuity cited through `thm-heine-cantor-metric`;
- item 8, the scaffold strategy's subluminality identity corrected (factor
  linear in $1-v^{2}/c^{2}$, checked at $w=0$ and by expansion); statement
  unchanged;
- item 9, existence/uniqueness/linearity proved via the matrix fundamental
  solution with the rank-one encoding; the maximal-solution supplier `[F5]`
  made an explicit step input;
- item 21, the scaffold's Rindler route was false ($\rho n=\partial_\theta$ is
  Killing in the $\theta$-independent Rindler metric); replaced by an explicit
  smooth rescaled construction with $N=1+\lambda\xi/L_0^2$, Born rigid and
  irrotational, whose acceleration form has nowhere-zero exterior derivative,
  so no positive smooth multiple is Killing.

## Supplier reconciliation

- Direct in-run dependencies of the 25 items: every one has an `accept` or
  `repaired` Step-3b receipt at the current bytes (checked by reading the
  `step3b-review-*.json` receipts), and every supplier item file exists and is
  precheck-clean (published mathematical imports such as
  `def-hyperbolic-functions` have `status: published` and need no in-run
  decision).
- The batch-4 cross-batch dependency input
  (`research/…-batch-4.cross-batch-dependencies.json`, 121 rows) was refreshed:
  every row now records the carrier recheck (item/page file exists; precheck
  pass where applicable) and the declared role/use, explicitly as a
  carrier-and-declaration recheck, not a production proof audit; independent
  mathematical review remains Steps 5–8.
- `depcheck` scoped to the run is OK for the pair after two repairs:
  `thm-sr-local-congruence-adapted-charts-and-frobenius` gained
  `def-sr-affine-minkowski-model` and
  `lem-affine-minkowski-charts-form-a-smooth-atlas`, and
  `cex-sr-born-rigid-motion-need-not-be-killing` gained
  `def-sr-chart-tetrad-and-congruence-distinction` and
  `def-flat-covariant-derivative-on-affine-minkowski-space`, all for sources
  already cited in Statement/Facts.

## Checks actually run (all on current bytes)

| check | invocation | result |
|---|---|---|
| precheck, explicit paths | `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts <25 item paths>` | 19 proof-bearing checked, 0 failing; 6 definitions have no proof phase; every failing first draft adopted the checker's canonical layered numbering |
| proof layout (one batched run after final edits) | `node tools/physics-support/proof-layout.mjs <25 item paths>` | 25 items, 130 steps, 0 defects |
| rendering | `node tools/physics-support/rendercheck.mjs <25 items + 2 pages>` | OK — 27 files, no wikilink-in-math, balanced delimiters, all math spans parse, frontmatter parses |
| content policy | `node tools/physics-support/content-policy.mjs research/…-batch-4.pages.json` | 25 scoped items, 0 errors, 0 warnings |
| strict proof contracts | `node tools/physics-support/proof-contract.mjs research/…-batch-4.proof-contracts.json --strict` | 25/25 items, 0 errors, 0 warnings |
| dependency levels | `node tools/physics-support/item-dependency-levels.mjs check --run physics-em-sr-40-2026-10-08` | 473 items/80 pages, no errors on current bytes |
| plan validation | `node tools/physics-support/frontier-item-gate.mjs --run physics-em-sr-40-2026-10-08 --tool validate-plan` | no findings on pages 215/216; run-level 43 errors, all on other pages (see below) |
| dependency gate | `frontier-item-gate --tool depcheck --quiet` | OK; 4 remaining `cited-not-in-deps` warnings, all on sibling SR items outside this pair |
| forward references | `frontier-item-gate --tool fwdcheck --quiet` | no findings on this pair (run-level FAIL from EM items only) |
| recorded-not-proved gate | `frontier-item-gate --tool extcheck --quiet` | OK |
| dependency sources | `frontier-item-gate --tool depsource --json` | 0 errors |
| pair artifacts | `checkPairAuthorArtifacts(…, ['sr-observer-measurements'])` | `ok: true`, 29/29 required carriers present |
| author bundle | `tsx-run.mjs author-check.mts physics-em-sr-40-2026-10-08 4` | `ok: true` on precheck, rendercheck, content-policy, proof-contract |
| Step-3 decisions | `step3-decisions.mjs check --run … --phase final` | all 25 owned items closed (accepted); run-wide 159 items open belong to other pairs |

## Added suppliers / dependency changes

- `def-sr-observer-congruence-and-kinematics`:
  `def-sr-four-velocity-and-four-acceleration`, `thm-chain-rule`.
- `lem-sr-fermi-walker-transport-existence-and-uniqueness`:
  `def-ck-tensor-field-on-minkowski-space`,
  `def-sr-chart-tetrad-and-congruence-distinction`,
  `def-ck-and-multi-index-notation-in-several-variables`,
  `thm-algebra-of-derivatives`.
- `thm-sr-smooth-local-herglotz-noether`: `def-connection-one-form-in-a-local-frame`,
  `thm-curvature-two-form-structure-equation`, `def-levi-civita-connection`,
  `thm-flow-box-theorem`, `def-lie-derivative-of-a-tensor-field`,
  `def-lie-derivative-of-a-differential-form`,
  `def-lie-derivative-of-a-vector-field`,
  `lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space`,
  `def-integral-curve-of-a-vector-field`,
  `thm-unique-maximal-integral-curve-through-each-point`, and the
  closed-form supplier `lem-sr-closed-one-form-primitive-on-simply-connected-open-sets`.
- `ex-sr-radar-round-trip-3-4-5`: `def-sr-operational-radar-protocol`,
  `def-sr-proper-time`, `def-sr-simultaneity-slice-and-rest-distance`,
  `def-causal-classification-of-lorentz-vectors`,
  `def-time-orientation-and-future-causal-sets`,
  `lem-timelike-cone-has-two-convex-components`,
  `def-spatial-euclidean-structure-of-an-inertial-frame`.
- `pthm-sr-observer-time-length-and-velocity-measurements`:
  `def-spatial-euclidean-structure-of-an-inertial-frame`,
  `def-sr-regular-causal-curve-and-worldline`.
- `cex-sr-born-rigid-motion-need-not-be-killing`:
  `def-inertial-frame-and-inertial-chart`, `def-sr-affine-minkowski-model`,
  `def-causal-classification-of-lorentz-vectors`,
  `def-time-orientation-and-future-causal-sets`,
  `lem-timelike-cone-has-two-convex-components`,
  `def-sr-chart-tetrad-and-congruence-distinction`,
  `def-flat-covariant-derivative-on-affine-minkowski-space`.
- `ex-sr-bell-congruence-fails-born-rigidity`:
  `def-inertial-frame-and-inertial-chart`, `def-sr-affine-minkowski-model`.
- `ex-sr-fermi-walker-transport-along-hyperbolic-motion`:
  `def-sr-proper-time`, `def-sr-affine-minkowski-model`,
  `def-hyperbolic-functions`, `thm-hyperbolic-identities-and-derivatives`,
  `thm-chain-rule`.
- `ex-sr-rigid-rotation-simultaneity-holonomy`: `def-sr-affine-minkowski-model`,
  `def-causal-classification-of-lorentz-vectors`.
- `ex-sr-rindler-wedge-congruence-worked`:
  `lem-timelike-cone-has-two-convex-components`, `def-hyperbolic-functions`,
  `thm-hyperbolic-identities-and-derivatives`, `def-sr-affine-minkowski-model`,
  `def-diffeomorphism-and-local-diffeomorphism-of-manifolds`.
- `thm-sr-local-congruence-adapted-charts-and-frobenius`,
  `cex-sr-simultaneity-is-observer-dependent`: dependency-audit additions
  listed under supplier reconciliation.
- Page `requires`: `geodesics-the-exponential-map-completeness-and-hopf-rinow`
  added to `sr-observer-measurements` (the home of
  `lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space`); the
  then-redundant direct edge on the examples companion was removed.

## Published concerns and run-level findings (for Step 4 / the serial reconciler)

1. `validate-plan` run-level FAIL: 43 errors on other pages — 42
   `undeclared-prereq` rows (EM prerequisite pages, `sr-spacetime-primitives`,
   `sr-lorentz-transformations`, `sr-forces-and-continuum`, `em-material-response`, …)
   and one `requires-resolve` for `em-boundary-and-spectral-prerequisites`
   (`rellich-kondrachov-and-sobolev-compactness` is not a declared page). No
   finding lies on pages 215/216 after the local `requires` repair.
2. Scoped `depcheck` leaves 4 `cited-not-in-deps` warnings on sibling SR items
   (`thm-sr-proper-orthochronous-lorentz-algebra` →
   `def-lorentz-form-and-inertia`; `pthm-sr-newtonian-p-e-correspondence` →
   `rem-sr-newtonian-bridge-limits-and-failures`;
   `lem-sr-uniform-low-speed-taylor-remainder` →
   `lem-sr-uniform-galilean-limit-of-boost-charts`;
   `cex-sr-uniform-low-speed-remainder-fails-near-light-speed` →
   `pthm-sr-newtonian-p-e-correspondence`). They need the owning pairs'
   review.
3. Stale coverage summaries for this pair were refreshed to the authored
   statements: the Bell expansion is $\theta(s,s)=\gamma^{3}\alpha^{2}t/c^{3}$
   (not the discarded extra-factor formula), and the Born-rigid counterexample
   is the smooth rescaled construction, not the false Rindler route.
4. The earlier segment's report noted `frontier` `undeclared-prereq`
   reconciliation for 12 plan-declaration homes; the only remaining
   pair-scoped instance (the `lem-choice-free-…` home) was repaired here by
   adding the supplier page to `requires` rather than dropping a genuine
   dependency.

## Open obligations

- None for this pair: all 25 items authored, both pages and the proof-contract
  file present, all pair-scoped gates clean, and all 25 item decisions closed.
- Escalations: none. All in-run suppliers used by the pair are authored and
  carry accept/repaired Step-3b receipts; no item of the pair depends on an
  unfinished in-run supplier.
- Deferred to later roles: independent mathematical audit (Steps 5–8), and the
  Step-4 resolution of the run-level findings above.

## Checkpoint log

- **Checkpoint 1 (first segment, items 1–9).** Authored and checked items 1–9;
  details preserved in the dispatch summary: closed-one-form primitive by the
  finite grid argument (dropped `def-metric-uniform-continuity` for
  `undeclared-prereq`); the chart/tetrad, flat-derivative and radar-protocol
  definitions with their physical scope; the Fermi-Walker and congruence
  kinematics; the corrected boost strategy; and the fundamental-solution
  existence/uniqueness proof.
- **Checkpoint 2 (items 10–18).** Authored and checked the radar midpoint
  lemma, the Frobenius/adapted-chart theorem, the four worked examples, the
  radar-synchronization physics theorem, the Fermi-Walker/rigid-observer
  examples theorem and the smooth local Herglotz–Noether theorem (the last with
  the omitted curvature and rescaling calculations supplied and the
  coefficient conventions verified against the rotating congruence).
- **Checkpoint 3 (items 19–25, this segment).** Authored the radar round-trip
  example, the observer-measurement physics theorem, the Born-rigid
  counterexample (replacing the false Rindler route), and the Bell, hyperbolic
  Fermi-Walker, rigid-rotation and Rindler worked examples; each passed
  precheck, proof-layout and rendercheck before moving on. The manifest rows
  were then synchronised to the authored `deps`/roles and levels recomputed
  with the repository tool.
- **Checkpoint 4 (records and handoff, this segment).** Created the two page
  carriers; refreshed coverage and the 121 cross-batch rows; created the batch
  proof-contracts file (boundary worksheets plus regenerated citations and
  derivations, with exact statement quotes and step uses); repaired the
  `requires` edge and the two cited-not-in-deps items; ran the full check
  battery (table above); recorded all 25 item decisions; and confirmed the
  pair-author artifact check and `author-check` bundle are green.
