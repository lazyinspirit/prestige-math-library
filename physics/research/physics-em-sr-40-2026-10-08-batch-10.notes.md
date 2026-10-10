# Batch 10 notes — `sr-accelerated-observers` / `sr-accelerated-observers-examples`

Run `physics-em-sr-40-2026-10-08`, role beta, label batch-10, covers 10 (batch index).
Owned pair: `sr-accelerated-observers` (A, order 227, category `special-relativity`,
`library: physics`) and `sr-accelerated-observers-examples` (B, order 228). Step 1 scaffold
construction only: no item was authored and no readiness record is independent mathematical
approval (Step 3 review follows). Nothing outside the assigned manifests, coverage, notes,
readiness records and the consumer-batch dependency input was written; in particular
`plan-spec.json`, published content, engine state and verdicts were not touched, and the
canonical `research/physics-em-sr-40-2026-10-08-batch-10.pages.json` was published by an
atomic rename of a complete, pre-validated sibling file (owner direction, "Manifest
publication after the batch 11 transient").

Authority read in full before construction: `CLAUDE.md`, `../CLAUDE.md`, `SCHEMA.md`,
`WORKFLOW.md`, `../PHYSICS-CONTENT-MODEL.md` (including the mathematical-rigor and
statistical-evidence/double-slit sections), the mandatory step-1 instructions and this
dispatch, the owner authoring direction
`research/physics-em-sr-40-2026-10-08-owner-authoring-direction.md`, the design section
`research/plan-special-relativity-track.md` L218-252 (Accelerated Observers), the full source
design `research/first-principles-2026-10-03/relativity/scaffold/special-relativity.md`
(SR10 inventory and the "Precise objects"/S10 paragraphs), the S10/S11 arguments of
`.../scaffold/sr-supplier-proofs.md`, `.../scaffold/expanded-item-inventory.json` (the
stable `pthm-sr-guided-ring-sagnac-delay` entry with its exact physical premise and
statement), `.../scaffold/proposed-inventory-and-checks.json` (SR10), the source-coverage row
for SR10 in `.../scaffold/prose-scaffold.md`, the homing record
`research/prose-scaffold-splice.json` (`pthm-sr-guided-ring-sagnac-delay` ->
`sr-accelerated-observers`), the drift file
`research/physics-em-sr-40-2026-10-08-alpha-step1-drift.md` (L179-181,
`sr-accelerated-observers`), the current `research/plan-spec.json`, the manifests and notes of
the supplier batches 1-7 (in particular batch 4's `sr-observer-measurements`, whose items this
page consumes, and whose B examples define what must NOT be duplicated), and the full texts
enumerated in the coverage file below.

---

## Scope built

- **A page** `sr-accelerated-observers`, 6 items in dependency order: two domain-mathematics
  items, three physics-theorems/thought-experiment and one physics definition. No mathematical
  item depends on a physical item (checked mechanically).
  1. `def-sr-proper-acceleration` (physics, definition): the proper acceleration
     `a(tau) = sqrt(eta(A,A))` of a C^2 future timelike worldline, well defined because
     `A` is spacelike or zero; its metre-per-second-squared unit; the agreement identity
     `A = c^2 a_cg` for congruence flow lines with `U = c n`; and the ideal-accelerometer
     reading with an explicit no-response-law/no-force-law/no-measurement scope.
  2. `lem-sr-hyperbolic-motion-worldline` (mathematics, lemma): the explicit uniformly
     accelerated worldline `x(tau) = (R sinh theta, R cosh theta, 0, 0)`, `theta = alpha tau/c`,
     `R = c^2/alpha`; `eta(U,U) = -c^2`, `eta(A,A) = alpha^2`, `eta(U,A) = 0`; the wedge bound
     `|dx^1/dt| = c|tanh theta| < c`; the identification as the Rindler flow line
     `Phi(., R, 0, 0)` with `A = c^2 a_cg` and `a_cg = rho^{-1} partial_rho` (domain
     `theta in R, rho > 0`); and the asymptotic approach to both null planes.
  3. `lem-sr-connecting-field-stretching` (mathematics, lemma): the material metric
     `G_IJ = h(e_I,e_J)` of a smooth family of congruence flow lines, its evolution
     `d/ds G_IJ = 2 theta_ab e_I^a e_J^b` (equivalently `d/dtau` with the factor `c`), the
     fractional rest-length rate `d/dtau |e_I|_h = c theta(u,u)|e_I|_h`, and the exact
     preservation of the internal metric under Born rigidity `theta = 0`. This is the
     necessary local supplier for the Bell thought experiment's material reading and for the
     B-page stretch example; it also closes the one real gap in the S10 prose ("a material
     breaking conclusion is not a kinematic theorem") by making the kinematic content exact
     and leaving elasticity explicitly outside.
  4. `pthm-sr-rindler-horizons-and-radar` (physics-theorem): the Rindler chart domain
     (`Phi` a smooth bijection of `R x (0,inf) x R^2` onto the right wedge, `rho = 0` excluded),
     the null lines of constant `U = x^0 + x^1` and `V = x^0 - x^1`, the exact causal criteria
     `q <= p` for some event of a congruence worldline iff `V(q) < 0`, and `p <= q` iff
     `U(q) > 0`, with the left wedge causally separated in both directions and the future and
     past wedges one-way; and the coaxial radar computation with `theta_m = theta_e +
     |log(rho_m/rho_0)|`, round-trip proper time `(2rho_0/c)|log(rho_m/rho_0)|`, radar
     distance `rho_0 |log(rho_m/rho_0)|`, radar time equal to Rindler time, comparison with
     the rest distance `|rho_m - rho_0|`, the case `rho_m = 2rho_0` where `rho_0 log 2 < rho_0`,
     and the non-extension of the protocol to `V >= 0`.
  5. `pthm-sr-guided-ring-sagnac-delay` (physics-theorem, the stable splice ID): the
     rigidly rotating ring with `|Omega|R < c`, the adopted ideal circular-guide signal model
     (the exact physical premise recorded in the expanded inventory), the future null guided
     curves with chart rates `+c/R` and `-c/R`, the return times `2piR/(c - Omega R)` and
     `2piR/(c + Omega R)`, the chart-time difference `4 pi Omega R^2/(c^2 - Omega^2 R^2)`,
     the detector proper-time difference `4 pi Omega R^2/(c^2 sqrt(1 - Omega^2R^2/c^2))`, the
     ring rest-synchronization holonomy `2 pi Omega R^2/(c^2 - Omega^2R^2)` and the exact
     factor-2 relation between them, the `Omega = 0` inertial limit, and the distinction
     between the ambient three-dimensional rest distribution's Frobenius obstruction and the
     cylinder's locally integrable rest lines with global holonomy.
  6. `texp-sr-bell-rockets-thread` (physics, thought-experiment): the translated rockets
     `x_xi(t) = (ct, q(t) + xi, y_0, z_0)` with equal chart-frame velocities and accelerations,
     constant chart separation `L`, unit field `n = gamma(1, q'/c, 0, 0)`, expansion
     `theta(s,s) = gamma^3 q' q''/c^3`, rest separation `gamma(t) L` with `d/dtau log(gamma L)
     = gamma^3 q' q''/c^2`, the conditional material reading through the internal metric
     `G_11 = gamma^2`, the explicit elasticity/failure-criterion caveat (no breaking or
     tension conclusion), and the contrast with the Born-rigid Rindler congruence (unequal
     proper accelerations `c^2/rho`, constant rest separation): equal chart-frame acceleration
     profiles are not Born rigidity.
- **B page** `sr-accelerated-observers-examples`, 5 leaf items (4 physics, 1 mathematics;
  3 examples and 2 counterexamples), all with `provenance.statement: ai-generated` and
  `generation.role` set, so none may be a `deps` target; nothing outside the pair depends on
  them and no item depends on a B-page item:
  1. `ex-sr-rindler-radar-distance-worked` (physics): the complete round trip with exact
     events for `rho_m = 2rho_0` and `rho_m = rho_0/2`, both with radar distance `rho_0 log 2`
     and rest distances `rho_0` and `rho_0/2`, so radar distance is not a function of rest
     distance; `log 2 < 1` and `log 2 > 1/2` from `2 < e < 3` (no decimal approximations).
  2. `cex-sr-rindler-horizon-is-not-a-physical-boundary` (physics): explicit future
     timelike crossing of the plane `x^1 = x^0`, causal relations across it, nondegeneracy of
     the metric there, and the inertial worldline through an event of it; the plane is a
     coordinate-map boundary, and the only true statement is the causal-restriction one of the
     companion theorem. (Domain physics, because the item reads the horizon restriction
     through the companion physics-theorem; a mathematics-domain version would have required
     a forbidden math -> physics dependency.)
  3. `cex-sr-rindler-radar-distance-is-not-symmetric` (physics): the two radar distances
     between the coaxial Rindler worldlines `rho_0` and `2rho_0` are `rho_0 log 2` and
     `2rho_0 log 2`, refuting symmetry of the radar assignment under interchange.
  4. `ex-sr-guided-ring-sagnac-worked` (physics): the exact rational case `Omega R = 3c/5`
     (`gamma = 5/4`) with `t_1 = 5 pi R/c`, `t_2 = 5 pi R/(4c)`, chart difference
     `15 pi R/(4c)`, detector proper-time difference `3 pi R/c`, holonomy `15 pi R/(8c)` and
     the factor-2 relation `3 pi R/c = 2 * 3 pi R/(2c)`.
  5. `ex-sr-bell-congruence-rest-separation-worked` (mathematics): the quadratic profile
     `q = (1/2) alpha t^2` on the two-sided domain `|t| < c/alpha`, `G_11 = gamma^2`,
     rest separation `gamma L`, the exact check `beta = 3/5`, `gamma = 5/4`, `G_11 = 25/16`,
     `theta(s,s) = 75 alpha/(64 c^2)`, `c theta(s,s) = 75 alpha/(64 c)`, and the minimum `L`
     at `t = 0` with negative expansion for `t < 0` and positive for `t > 0`.
- Page `order`, `id`, `kind`, `category`, `library`, `title`, `companion` and `requires` are
  unchanged from the plan record and the generated task shell; the only edits are the two
  `items` arrays.
- **No new postulate was minted.** The page consumes the batch-1 postulates
  `post-sr-ideal-clocks-and-light` and `post-sr-inertial-covariance`, the batch-5 postulate
  `post-sr-causal-signal-propagation`, and the batch-4 physics definition
  `def-sr-operational-radar-protocol`. The guided-signal assumption of the Sagnac theorem is
  stated inside that theorem exactly as the inventory's `physical_premises` entry requires
  (ideal circular guide of constant inertial radius rotating at constant `Omega`,
  `|Omega| R < c`, oppositely directed signals of inertial tangential speed `c` along the
  guide, ideal clock detector on the guide) and is labelled an explicit device-model
  idealization, not a consequence of the postulates: the ideal vacuum light rays of the
  postulate are straight and do not circulate.

## Design versus plan (recorded conflict comparison)

- The source design (`plan-special-relativity-track.md` L218-252, from SR10 of
  `special-relativity.md` and `proposed-inventory-and-checks.json`) declares earlier
  prerequisites SR03, SR04, SR05, SR06, SR07 for this page. The current plan controls and
  requires `sr-causality-and-signals` (order 217), `sr-proper-time-comparisons` (order 219)
  and `sr-light-and-doppler` (order 221). Those three pages require
  `sr-observer-measurements` (order 215), whose closure contains `sr-worldlines-and-clocks`
  (order 213), `sr-lorentz-transformations` (order 211) and `sr-spacetime-primitives`
  (order 209); hence the design's SR03-SR07 objects (worldlines/clocks, observer
  measurements, causality, clock comparisons, light/Doppler) are all earlier than order 227.
  The drift review records VERDICT: no-drift for this page (L179-181 of the drift file). The
  only conflict is this closure-based condensation of the requires list, which the plan
  controls; no promised claim or proof route was dropped.
- Delivery-versus-reservation mapping, to show nothing was weakened: "def proper
  acceleration/congruence" -> `def-sr-proper-acceleration` plus the batch-4
  `def-sr-observer-congruence-and-kinematics` consumed as a supplier (re-minting it here
  would duplicate an earlier-page item); "explicit hyperbolic worldline calculation" ->
  `lem-sr-hyperbolic-motion-worldline`; "def Rindler chart domain" -> the chart of the
  batch-4 theorem `thm-sr-fermi-walker-and-rigid-observer-examples` (b), whose domain
  consequences are stated and used in the new theorem's clause (i) (again, not re-minted);
  "pthm chart horizon/radar restrictions" -> `pthm-sr-rindler-horizons-and-radar`; "texp Bell
  setup with distinct congruences" -> `texp-sr-bell-rockets-thread` plus the new
  `lem-sr-connecting-field-stretching`; and the S10/expanded-inventory guided-ring Sagnac
  content -> `pthm-sr-guided-ring-sagnac-delay` plus the B example. The design's 24 A / 12 B
  slots are a reservation budget, not a target; the pair is built to 6 A / 5 B with every
  promised claim closed and the A page far below the 100-item cap.
- Owner-direction compliance: the Rindler chart is used with `theta in R, rho > 0` and the
  bracket `[rho^{-1} partial_theta, partial_rho] = +rho^{-1} n` (as corrected in batch 4 and
  restated nowhere contradictorily); the Bell expansion is `gamma^3 q' q''/c^3` and the
  quadratic B example retains the two-sided subluminal domain `|t| < c/alpha`; the rotating
  observers are restricted to `|Omega| R < c`, the inertial `Omega = 0` limit is retained as
  an explicit clause and example check, and the ambient three-dimensional Frobenius
  obstruction is distinguished from the ring cylinder's locally integrable rest lines and
  global synchronization holonomy in the theorem's clause (iv).

## Dependencies and levels

- `dependency_level` was recomputed from the run's own manifests only (out-of-run imports do
  not raise a level) and then verified with
  `node tools/physics-support/item-dependency-levels.mjs check --run physics-em-sr-40-2026-10-08`:
  A-page levels 13-16, B-page levels 15-17, no error naming any batch-10 item, no cycle, and
  every label equal to the computed value. The 38 remaining errors of that run-wide command
  are all "empty scaffold inventory" for batches 12 and 23-40, which are not yet scaffolded
  by their owners; that is an expected run-level condition, documented here rather than
  hidden, and not a batch-10 blocker.
- Local (same-batch) prerequisite order is respected: the two mathematics lemmas precede the
  physics items that cite them, and all B-page items cite only earlier-page or earlier-order
  items.
- Cross-batch inputs: 105 item rows and 3 page rows in
  `research/physics-em-sr-40-2026-10-08-batch-10.cross-batch-dependencies.json`, one per
  declared consumer/supplier edge (consumers in batch 10; suppliers scaffolded in batches
  1-7), each with the exact required content, the use/location in the consumer, the role and
  the home page, and status `open` because every supplier is scaffolded but not yet authored.
  `frontier-dependency-ledger.mjs refresh --run physics-em-sr-40-2026-10-08` merged them with
  0 orphaned reviews: all 108 batch-10 edges carry exactly one review row.

## Sources, coverage and honest reading

`research/physics-em-sr-40-2026-10-08-batch-10.coverage.json` (one page entry, five sources,
39 harvested results, each disposed included/inline/deferred/out-of-scope with a written
reason or a resolving destination):

1. B. Crowell, *Special Relativity*, rev. 2020-12-10, textbook:
   `https://archive.org/download/sr_20220102/sr.pdf`; read sections 3.5.2 pp. 60-62,
   3.9.1-3.9.3 pp. 69-74, 7.1 pp. 147-148, 8.1.1-8.1.4 pp. 165-168 and 9.5.1-9.5.5
   pp. 204-211 (PDF text layer). Fetch stamp: 10,728,180 bytes, sha256_16
   `4c11e8f367267d53`, 246 pages.
2. M. Blau, *Lecture Notes on General Relativity*, last update October 5, 2026, lecture
   notes: `http://www.blau.itp.unibe.ch/newlecturesGR.pdf`; read sections 1.2-1.3 pp. 34-40
   and 3.4 pp. 90-93 (PDF text layer). Fetch stamp: 4,259,963 bytes, sha256_16
   `6fdb6defaf4cbd8b`, 1052 pages. This resolves the second-treatment shortfall recorded for
   SR10 in `prose-scaffold.md` ("Crowell substantive SR treatment; Tong supplies a restricted
   GR near-horizon application") with a full lecture-note treatment of constant acceleration
   and Rindler coordinates independent of Crowell.
3. D. Giulini, *Algebraic and geometric structures of Special Relativity*,
   arXiv:math-ph/0602018v2, survey paper (signature converted): section 5.5 pp. 41-49;
   fetch stamp 614,463 bytes, sha256_16 `f03fcc87fbfd60fc`, 66 pages.
4. Wikipedia, "Rindler coordinates", encyclopedia (secondary; does not count toward the
   two-treatment requirement): fetch stamp 803,622 bytes, sha256_16 `e2a674c18743cc3d`.
5. Wikipedia, "Sagnac effect", encyclopedia (secondary): fetch stamp 397,130 bytes,
   sha256_16 `9b86cae9cc3f46c8`.

The quoted formulas were checked against the saved full texts; e.g. Wikipedia's basic
circular Sagnac case gives `t_1 = 2 pi R/(c - R omega)`, `t_2 = 2 pi R/(c + R omega)`,
`Delta t = 4 pi R^2 omega/(c^2 - R^2 omega^2)` and the radar distance `x_0 log(1 + h/x_0)`
(equivalent to `rho_0 |log(rho_m/rho_0)|` for both signs of `rho_m - rho_0`), Blau's item 6
of section 1.3 gives the asymptotic invisibility of `xi^0 > xi^1` events, and Crowell's
section 3.9.2 gives the Bell tension reading that this batch deliberately downgrades to a
conditional material statement. A known cross-source notational trap was recorded: Crowell's
"2 A omega/c^2" and the ring-laser phase formula refer to the synchronization discrepancy and
its double, whereas the guided-signal return-time difference here is the exact
`4 pi Omega R^2/(c^2 - Omega^2 R^2)` with the factor-2 proper-time relation stated explicitly.

## Checks run (actual results, 2026-10-08/09)

- `manifest-deps.mjs` on the batch manifest: 11 items, 0 missing, 0 errors.
- `content-policy.mjs --manifest-only` over all 40 batch manifests: 282 scoped items,
  0 errors, 0 warnings (pre-publication and again on the canonical file).
- `item-dependency-levels.mjs check --run physics-em-sr-40-2026-10-08`: 0 errors naming
  batch-10 items; 38 run-wide errors, all "empty scaffold inventory" for batches 12 and
  23-40 (expected).
- `coverage-checklist.mjs ... --require-destination`: 1 page, 39 harvested results,
  0 errors, 0 warnings.
- `source-fetch-check.mjs --coverage ... --stamp`: 5/5 sources fetch-verified (all newly
  stamped; stamps recorded above).
- `url-sweep.mjs --coverage ... --out /tmp/b10-url-liveness.json --recover`: 5/5 live,
  0 failed, 0 recoverable.
- `source-backing.mjs --coverage ... --liveness ...`: 9 authored results all still backed by
  an openable source; 0 lost.
- `physics-check.mjs --plan research/plan-spec.json --run physics-em-sr-40-2026-10-08`:
  4 errors, none on batch-10 items --- all four name batch-11 `sr-newtonian-bridge` items
  (`def-sr-galilean-limiting-charts` math->physics dependency and non-mathematical-role, and
  `rem-sr-newtonian-bridge-limits-and-failures` and
  `ex-sr-low-speed-expansion-at-beta-one-fifth` with a non-mathematical supplier); recorded
  here as a run-level observation for that batch's owner, not a batch-10 defect.
  `physics-check.mjs --plan ...` without `--run` stops earlier on the pre-existing
  mathematics-import drift of `items/thm-hilbert-basis-theorem.md` that batches 3 and 4 also
  record; reconciliation is an owner action outside an active run.
- `validate-plan.mjs research/plan-spec.json`: exit 0, acyclic and consistent; the 18
  redundant-prereq warnings are pre-existing and on other pages (EM/RPM), none on this pair.
- `extcheck.mjs`: 26654 items, 0 recorded-not-proved, none resting on them.
- `frontier-dependency-ledger.mjs refresh --run physics-em-sr-40-2026-10-08`: refreshed;
  batch-10 edges 108/108 with review rows, 0 orphaned; unreviewed batches remain 12 and
  23-40 (their owners' inputs).

## Unresolved / escalated

- No batch-10 item is escalated: every item has a complete statement, an explicit proof or
  construction strategy, named dependencies with roles, a computed dependency level and
  openable full-text sources; the essential hypotheses and scope exclusions are stated. The
  readiness records are Step-1 readiness for authoring and later independent review, not
  production proofs or publication approval.
- Run-level red conditions outside this batch (not blockers for batch 10, recorded for the
  owner): empty inventories of batches 12 and 23-40; the mathematics-import drift of
  `items/thm-hilbert-basis-theorem.md`; and the four batch-11 item errors listed above.
- No source was dropped and no source-resolution record was needed: every cited URL was
  fetched in full at scaffold time (5/5) and re-checked live (5/5), so the source-drop branch
  of the instructions did not apply.
- `step1-decisions.mjs record` was then run for all 11 items with their examined dependency
  lists, and `step1-decisions.mjs check --run physics-em-sr-40-2026-10-08` reports
  282/282 items ready with 38 outstanding work rows, all of them the empty scaffold
  inventories of batches 12 and 23-40; no batch-10 item appears in the work list, so every
  batch-10 readiness record is current against the frozen manifest.

## Outputs written (this dispatch)

- `research/physics-em-sr-40-2026-10-08-batch-10.pages.json` (both pages, 11 items;
  published atomically from a validated sibling file).
- `research/physics-em-sr-40-2026-10-08-batch-10.coverage.json` (5 sources, 39 harvest rows,
  fetch stamps).
- `research/physics-em-sr-40-2026-10-08-batch-10.notes.md` (this file).
- `research/physics-em-sr-40-2026-10-08-batch-10.cross-batch-dependencies.json` (108 rows:
  105 item + 3 page edges).
- `research/physics-em-sr-40-2026-10-08-step1-<item>.json` for each of the 11 items.
- `research/physics-em-sr-40-2026-10-08-cross-batch-dependencies.json` refreshed through
  `frontier-dependency-ledger.mjs` (tool-written, not hand-edited).
- After the readiness records were first written, three scope-wording corrections were made to
  the frozen manifest in response to a final self-review (the Rindler theorem no longer says
  "material models of the guide or reflector" but names the reflector only; the guided-ring
  theorem's exclusion now names one-way synchronization conventions between distinct ring
  observers instead of a blanket phrase about sending signals between material points; the
  horizon counterexample's closing sentence no longer claims a second refutation of the
  metric-degeneracy clause). All three records were re-recorded, and because the readiness
  hash is transitive the three items that cite the corrected suppliers
  (`ex-sr-rindler-radar-distance-worked`, `cex-sr-rindler-radar-distance-is-not-symmetric`,
  `ex-sr-guided-ring-sagnac-worked`) were re-recorded against the current statements as well.
  The subsequent run-wide check again reports 282/282 items ready with 0 stale item records
  and the same 38 empty-page work rows of batches 12 and 23-40.
