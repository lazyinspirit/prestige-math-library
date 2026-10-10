# Batch 4 notes — `sr-observer-measurements` / `sr-observer-measurements-examples`

Run `physics-em-sr-40-2026-10-08`, role beta, label batch-4, covers 4 (batch index).
Owned pair: `sr-observer-measurements` (A, order 215, category `special-relativity`,
`library: physics`) and `sr-observer-measurements-examples` (B, order 216). Step 1 scaffold
construction only: no item was authored, and no readiness record is independent mathematical
approval (Step 3 review follows). Nothing outside the assigned manifests, coverage, notes,
readiness records and the consumer-batch dependency input was written.

Authority read in full before construction: `CLAUDE.md`, `../CLAUDE.md`, `SCHEMA.md`,
`WORKFLOW.md`, `../PHYSICS-CONTENT-MODEL.md` (including the mathematical-rigor and
statistical-evidence/double-slit sections), the owner authoring direction
`research/physics-em-sr-40-2026-10-08-owner-authoring-direction.md`, the design section
`research/plan-special-relativity-track.md` L79 (Observer Measurements), the full source design
`research/first-principles-2026-10-03/relativity/scaffold/special-relativity.md` (SR04 inventory,
S5 paragraphs and the "Precise objects" paragraphs), the S5/S10/S11 arguments of
`.../scaffold/sr-supplier-proofs.md`, the G0–G2 arguments of `.../scaffold/gr-local-proofs.md`,
the closure ledger (M25 = "Observer flow/Frobenius/Fermi–Walker/Born/Rindler/Bell/Sagnac;
complete smooth local Herglotz–Noether proof and exact simply-connected rotational global
rescaling, irrotational positive-lapse tubular construction"), the expanded item inventory
(three stable research IDs hosted on SR04), the splice `research/prose-scaffold-splice.json`
(`proposed_item_homes`), the SR03–04 source-coverage row in `.../scaffold/prose-scaffold.md`,
the reader reports (`reader-taylor`/Crowell, `reader-carroll`, `reader-gourgoulhon`/Reall) and
the local Giulini source `advanced-sources/giulini-rigidity.{pdf,txt}` with
`advanced-sources/source-metadata.json`, the current `research/plan-spec.json`, and batch 1's,
2's and 3's manifests and notes (the supplier pairs).

---

## Scope built

- **A page** `sr-observer-measurements`, 15 items in dependency order: 12 domain-mathematics
  items, one physics-domain definition and two physics-theorems. No mathematical item depends
  on a physical item.
  - Definitions (mathematics): `def-sr-chart-tetrad-and-congruence-distinction` (chart vs.
    inertial chart vs. tetrad vs. tetrad field vs. congruence vs. adapted chart, with the
    non-inertial-chart witness and the commutation necessary condition for coordinate frames),
    `def-flat-covariant-derivative-on-affine-minkowski-space` (the flat connection in inertial
    charts, its torsion-free/metric/zero-curvature properties and differentiation along curves),
    `def-sr-observer-congruence-and-kinematics` (rest metric h, acceleration a, the kinematic
    decomposition into expansion/shear/vorticity, Born rigidity and the identity
    `(L_n h)_{ab} = 2 theta_{ab}`), `def-sr-simultaneity-slice-and-rest-distance`,
    `def-sr-fermi-walker-transport`.
  - Physics-domain definition: `def-sr-operational-radar-protocol` (the emission/reflection/
    reception assignment with the symmetric half-split convention and the one-way caveat).
  - Lemmas (mathematics): `lem-sr-radar-midpoint-for-inertial-observer`,
    `lem-sr-boost-time-length-and-velocity-formulas`,
    `lem-sr-fermi-walker-transport-existence-and-uniqueness`, and the locally added
    `lem-sr-closed-one-form-primitive-on-simply-connected-open-sets` (the standard
    closed-1-form-primitive theorem completed with an elementary grid proof so that the
    simply-connected rescaling of the rigidity theorem has a local supplier without importing
    de Rham/covering machinery or countable choice).
  - Theorems (mathematics): `thm-sr-local-congruence-adapted-charts-and-frobenius`,
    `thm-sr-fermi-walker-and-rigid-observer-examples`, `thm-sr-smooth-local-herglotz-noether`
    — the three stable research IDs hosted on SR04 by the splice.
  - Physics-theorems: `pthm-sr-radar-synchronization-of-inertial-observers` and
    `pthm-sr-observer-time-length-and-velocity-measurements`.
- **B page** `sr-observer-measurements-examples`, 10 leaf items, all domain mathematics: 8
  `example` and 2 `counterexample`. All have `provenance.statement: ai-generated` with
  `generation.role` set, so none of them may be a `deps` target; nothing outside the pair
  depends on them, and no item depends on a B-page item. The B page is deliberately fully
  mathematical (no physical deps): worked radar round trip, time dilation, length contraction,
  velocity transformation, Rindler congruence, rigid-rotation holonomy, Bell congruence,
  Fermi–Walker transport along hyperbolic motion, and the two counterexamples (Born-rigid but
  not Killing; simultaneity observer-dependent).
- Page `order`, `id`, `kind`, `category`, `library`, `title`, `companion` and `requires` are
  unchanged from the plan record and the generated task shell; the only edits are the two
  `items` arrays.
- `dependency_level` computed from in-run `deps` only (batches 1–3 items count as in-run;
  published imports and other planned pages do not raise a level). A-page levels run 7–15;
  B-page levels run 13–16 (table reproduced by `item-dependency-levels.mjs`; see the checks
  below). `node tools/physics-support/item-dependency-levels.mjs check --run
  physics-em-sr-40-2026-10-08` reports no error for any batch-4 item; the remaining errors are
  the other batches' not-yet-scaffolded empty inventories.
- **Budget.** The design reserves 52 A / 12 B closure slots. The pair is built to 15 A / 10 B:
  every promised claim closes with these items; the reservation is a budget, not a target. The
  A page is far below the 100-item cap, so no split is required.
- **No new postulate.** The page consumes the batch-1 postulates `post-sr-ideal-clocks-and-light`
  and `post-sr-inertial-covariance` instead of re-minting them; the radar protocol and the
  measurement theorem are conditional on them.

### Mapping of the SR04 design inventory

| design element | disposition |
|---|---|
| "M04 split/projector" | Supplied by batch 3: `thm-sr-proper-time-and-observer-decomposition` clauses (c)–(d) (the projection h, the positivity of eta on n^perp, the relative velocity split) is the stable home chosen by the splice (`proposed_item_homes` places `thm-sr-proper-time-and-observer-decomposition` on `sr-worldlines-and-clocks`). SR04 consumes it as a mathematical premise and adds the observer-specific objects (rest metric h, simultaneity slices, rest distance). No duplicate is minted. |
| "def simultaneity/operational radar protocol" | `def-sr-simultaneity-slice-and-rest-distance` (mathematical simultaneity relation and rest distance) and `def-sr-operational-radar-protocol` (physics-domain operational protocol), with `lem-sr-radar-midpoint-for-inertial-observer` and `pthm-sr-radar-synchronization-of-inertial-observers` proving the inertial-chart equivalence. |
| "pthm observer velocity and time/length transform" | `lem-sr-boost-time-length-and-velocity-formulas` (mathematical algebra of the boost) and `pthm-sr-observer-time-length-and-velocity-measurements` (the conditional physical reading: time dilation, length contraction, relativity of simultaneity, velocity transformation). |
| "def chart/tetrad/congruence distinction" | `def-sr-chart-tetrad-and-congruence-distinction`. |
| "S10–S11" closure | `thm-sr-fermi-walker-and-rigid-observer-examples` (FW preservation + Rindler/rotating/Bell geometry), `thm-sr-smooth-local-herglotz-noether` (rotational local Killing classification and irrotational affine-plane families), supported by `def-sr-fermi-walker-transport`, `lem-sr-fermi-walker-transport-existence-and-uniqueness` and `def-sr-observer-congruence-and-kinematics`. |
| "G2 early pure mathematical flow/Frobenius" | `thm-sr-local-congruence-adapted-charts-and-frobenius` (flow box from the published `thm-flow-box-theorem`, the codimension-one Frobenius criterion `cor-codimension-one-frobenius-criterion`, and the flat specialization `omega = 0 <=> alpha wedge d alpha = 0`). |
| "budget 52" | Not exhausted; the complete claim closure needs 15 A items. |

## Design vs plan

- `research/plan-spec.json` and the generated manifest agree with the design
  (`plan-special-relativity-track.md` L79) on page ids, titles, orders 215/216, category,
  library, companion and `requires: ["sr-worldlines-and-clocks"]`; the design's
  "requires SR02-03" is consistent because the plan edge to SR03 transitively contains SR02–SR01.
  No page-edge or order conflict to record.
- The three stable research IDs (`thm-sr-local-congruence-adapted-charts-and-frobenius`,
  `thm-sr-fermi-walker-and-rigid-observer-examples`, `thm-sr-smooth-local-herglotz-noether`) are
  minted exactly where the splice places them (home `sr-observer-measurements`); every other id
  in this batch is new and unused. No item of batches 1–3 is re-minted.
- **Recorded conflict (run-level, not repaired here).** The frontier run-mode plan validator
  (`frontier-item-gate.mjs --run physics-em-sr-40-2026-10-08 --tool validate-plan`) reports 12
  `undeclared-prereq` findings for this pair: the A page's items depend on published mathematics
  homes **`vector-fields-flows-and-lie-derivatives`**,
  **`connections-levi-civita-and-parallel-transport`**,
  **`euclidean-ordinary-differential-equations-with-smooth-dependence`**,
  **`picard-lindelof-and-first-order-odes`**, **`the-exterior-derivative-and-cartan-calculus`**,
  **`the-de-rham-complex-homotopy-and-mayer-vietoris`**, **`the-fundamental-group`**,
  **`homotopy-and-homotopy-equivalence`**, **`compactness-in-metric-spaces`**,
  **`line-integrals-and-the-gradient-theorem`** and
  **`riemann-curvature-and-riemannian-submanifolds`**, and the B page's items depend on
  **`vector-fields-flows-and-lie-derivatives`** — none of these homes is in the closure of the
  page's declared `requires` (`sr-worldlines-and-clocks`). The dependencies themselves are
  genuine mathematical prerequisites of the items (flow-box, linear ODE, exterior calculus,
  Poincare/primitive, Heine-Borel/uniform continuity and slice-curvature suppliers); the
  finding is a plan-declaration gap, and the correct repair is a plan-owned `requires` update on
  `research/plan-spec.json` followed by a `drift-apply` sync of the manifest's plan-owned
  metadata. Both are outside a beta's write scope (shared plans are not editable by the
  scaffolder), and a manifest-only edit would be reverted by that sync; the finding is recorded
  for the owner/planner exactly as batch 3 recorded the same class of finding for its page.

- **Deferrals routed to this page by other batches are honoured.** Batch 1 deferred Crowell's
  length contraction and Carroll's rod-and-clock frame construction to `sr-observer-measurements`;
  batch 2 deferred the boost measurement consequences; batch 14 deferred Tong's Sections
  7.2.1/7.2.3/7.2.4 (relativity of simultaneity, time dilation, length contraction) here. The
  kinematics of all three are covered by `lem-sr-boost-time-length-and-velocity-formulas` and
  `pthm-sr-observer-time-length-and-velocity-measurements`; the *reported tests* mentioned in
  those Tong sections (muon and Hafele–Keating) are **not** authored here — they require primary
  reports, apparatus, calibration and uncertainties and belong to the experimental-interface
  pair (`sr-experimental-interface`), whose design explicitly reserves them. This page contains
  no experiment item, no numerical measurement and no statistical inference.

## Local closure decisions

- The page supplies every prerequisite of its own claims in-page, on top of the in-run closure
  `sr-spacetime-primitives` (batch 1), `sr-lorentz-transformations` (batch 2) and
  `sr-worldlines-and-clocks` (batch 3) plus published imported mathematics on disk.
- **Flat connection instead of a curved-connection supplier.** Because tangent spaces of the
  affine model are canonically identified with V, the page defines the flat covariant derivative
  by chart-independent component differentiation (no Christoffel symbols), with torsion
  freeness, metric compatibility and zero curvature proved directly from affine chart
  transitions and mixed-partial symmetry. This is what makes the kinematic decomposition,
  Fermi–Walker transport and the Herglotz–Noether coframe computation self-contained in the
  affine model and avoids importing GR connection theorems; the G2 argument of the research
  module (which works in a general Lorentzian manifold) is specialized here to the flat case.
- **Fermi–Walker existence via the published linear-ODE lemma.** The transport equation is the
  linear system `X' = M(tau) X` with `M^a_b = c^{-2}(U^a A_b - A^a U_b)`; existence and
  uniqueness on all of I follow from
  `lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval` on compact
  subintervals plus uniqueness/patching (equivalently `def-maximal-ode-solution` and
  `thm-existence-and-uniqueness-of-a-maximal-ode-solution`).
- **A locally added mathematical lemma for the simply-connected rescaling.** The stable claim
  "on a simply connected connected region where omega is nowhere zero a single positive
  rescaling is Killing" needs "closed 1-form on a simply connected open set has a primitive".
  The published Poincare lemma covers star-shaped domains only, and the available de Rham and
  Whitney-approximation machinery would import countable choice; the scaffold therefore adds
  `lem-sr-closed-one-form-primitive-on-simply-connected-open-sets` with an elementary, complete
  proof strategy (grid approximation of a based null-homotopy; convex boxes; Poincare lemma on
  boxes; finite cancellation; path-integral primitive) that uses no choice principle. This is a
  local completion of a missing prerequisite, not a change to any stable interface.
- **Non-claims kept explicit.** (i) `def-sr-chart-tetrad-and-congruence-distinction` asserts
  only the commutation *necessary* condition for coordinate frames, not the converse; the
  Rindler example supplies the non-coordinate tetrad witness. (ii) The congruence definition
  asserts no completeness, global foliation or global synchronization; integrability is decided
  by the Frobenius item. (iii) `def-sr-simultaneity-slice-and-rest-distance` defines
  simultaneity relative to a vector and records its dependence on the vector; the explicit
  counterexample on the B page exhibits it. (iv) The physics-theorem scope clauses exclude
  one-way light-speed measurement, optical appearance, deformable/accelerating rods, gravity,
  quantum effects and every empirical or statistical claim. (v) The Bell item excludes a
  fracture/breaking conclusion without an elasticity model and a failure criterion.
- **Axiom of choice.** No batch-4 item uses AC or a countable-choice principle: the flat model,
  finite-dimensional linear algebra, ordinary multivariable calculus, the published ODE and
  Poincare suppliers, and finite grid selections only. No choice declaration is needed or made.
- **Units.** Mathematical items treat c as a fixed positive constant and state units only where
  they belong to the model's conventions; the SI identifications are carried by
  `def-sr-si-units-and-coordinate-conventions` through the physical items
  (`def-sr-operational-radar-protocol`, the two physics-theorems). No mathematical item depends
  on a physical item.

## Source and research-module findings (exact evidence)

1. **Giulini Section 5.5 read at statement level; two defects avoided.** The local copy
   `advanced-sources/giulini-rigidity.pdf` (arXiv math-ph/0602018, 614463 bytes, sha16
   `f03fcc87fbfd60fc`, 66 pages) was inspected over Section 5.5 pp. 41–49. The source (a) proves
   the Herglotz–Noether classification only after *assuming analyticity* in the companion proof
   route quoted by Crowell p. 209, and (b) builds a global quotient by the orbits, assuming the
   quotient is a manifold. The S11 research argument used here avoids both: the classification
   is proved smoothly on flow boxes with the slice Levi–Civita connection supplied by
   `thm-fundamental-theorem-of-riemannian-geometry`, Lemma 16's omitted proof is supplied by the
   adapted-coframe computation, and the global rescaling is obtained from the closed 1-form
   primitive rather than the orbit quotient. These scope limits are recorded in the coverage
   rows and in the item statements.
2. **Research-module coefficient discrepancy in S10 (recorded, resolved by direct computation).**
   The S10 research text states `s^a s^b partial_a n_b = gamma^3 q' q''/c^3` for the Bell
   translated congruence. Direct recomputation in the (-+++) convention with `n = gamma(1,q'/c)`
   and the unit longitudinal rest vector `s = gamma(q'/c,1)` gives
   `theta(s,s) = (2 + gamma^2 (q'/c)^2) gamma^3 q' q''/c^3`; the extra positive factor
   `2 + gamma^2 beta^2` does not change the qualitative conclusion (nonzero exactly when
   `q' q'' != 0`), and the scaffold states the recomputed value in
   `thm-sr-fermi-walker-and-rigid-observer-examples` (d) and in the worked Bell example. The
   research module is research context, not a published item; the exact computation is recorded
   here so that Step 3 re-derives it and the owner can decide whether to repair the module.
3. **Crowell Section 9.5 analyticity defect.** Crowell p. 209 presents the Herglotz–Noether
   proof under an analytic-motion assumption (found in the reader report's chapter-9 assessment).
   This page's smooth local classification is used instead; the source is cited for the
   statement and the explicit examples only.
4. **Reall Section 2.2–2.3** supplies the coordinate conventions and the proper-time measurement
   background; the page's radar lemma is proved from the model's own suppliers, so Reall is not
   load-bearing for any proof step.

## Source-location history (Reall)

The Reall citation uses the Wayback snapshot
`https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf`
and declares `original_url: https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf` with the
attempt history in the coverage file. The original DAMTP URL fails in this environment at TLS
setup (`curl: (60) SSL certificate OpenSSL verify result: unable to get local issuer certificate`),
the same failure recorded by batches 1-3; the snapshot serves the byte-identical 125-page PDF
(sha256_16 `fe8a24c67e884ff1`, 1017792 bytes). This is the "same document from the archive"
recovery, not a source drop and not an alternative-proof substitution.

## Cross-batch dependencies and consumer inputs

- Batch input file `research/physics-em-sr-40-2026-10-08-batch-4.cross-batch-dependencies.json`
  holds 121 rows (120 item rows into batches 1–3, 1 page row into `sr-worldlines-and-clocks`),
  one per declared cross-batch edge, each with required content, use/location, hypothesis check
  and the fact that the supplier is scaffolded but not yet authored (status `open`).
  `frontier-dependency-ledger.mjs refresh --run physics-em-sr-40-2026-10-08` reports 0 orphaned
  reviews, and every declared batch-4 edge carries exactly one review row.
- Downstream consumer batches (SR05 causality, SR06 proper-time comparisons, SR07 light and
  Doppler, SR08 energy-momentum, SR10 accelerated observers and the GR/TD research pages that
  name the stable ids) will consume, in particular: `def-sr-observer-congruence-and-kinematics`,
  `def-sr-simultaneity-slice-and-rest-distance`, `thm-sr-local-congruence-adapted-charts-and-frobenius`,
  `thm-sr-fermi-walker-and-rigid-observer-examples`, `thm-sr-smooth-local-herglotz-noether`, the
  two physics-theorems and the radar protocol definition. Each consumer must review its own edge
  in its own cross-batch input; this file records only the edges of this batch. The B-page
  examples and counterexamples are leaves and must not be consumed.

## Checks actually run (exact results)

| Check | Command | Result |
|---|---|---|
| manifest deps (all batches) | `node tools/physics-support/manifest-deps.mjs research/physics-em-sr-40-2026-10-08-batch-*.pages.json` | 142 items, 0 missing, 0 errors |
| manifest policy (all batches) | `node tools/physics-support/content-policy.mjs --manifest-only research/physics-em-sr-40-2026-10-08-batch-*.pages.json` | 142 scoped items, 0 errors, 0 warnings |
| coverage | `node tools/physics-support/coverage-checklist.mjs research/...batch-4.coverage.json --require-destination` | 1 page, 42 harvested results, 0 errors, 0 warnings |
| full-text fetch | `node tools/physics-support/source-fetch-check.mjs --coverage research/...batch-4.coverage.json --stamp` | 4/4 sources fetch-verified (4 newly stamped) |
| source backing | `node tools/physics-support/source-backing.mjs --coverage research/...batch-4.coverage.json --liveness /tmp/batch4-url-liveness.json` | 11 authored results, every one backed by an openable source; empty reharvest list |
| URL liveness (batch scope) | `node tools/physics-support/url-sweep.mjs --coverage research/...batch-4.coverage.json --out /tmp/batch4-url-liveness.json --recover --fail-on-dead` | 4/4 live, 0 failed, 0 suspect (after declaring `original_url` on the Reall entry, see below) |
| physics content (engine form) | `node tools/physics-support/physics-check.mjs --run physics-em-sr-40-2026-10-08 --plan research/plan-spec.json` | 0 errors, 142 items checked |
| plan (page level) | `node tools/physics-support/validate-plan.mjs research/plan-spec.json` | exit 0 |
| scope ledger | `node tools/physics-support/manifest-integrity.mjs --run physics-em-sr-40-2026-10-08` | 80/80 pages present, no scope drift |
| drift review | `node tools/physics-support/drift-review-check.mjs --run physics-em-sr-40-2026-10-08` | 40 pages reviewed, no blocked edges |
| dependency levels | `node tools/physics-support/item-dependency-levels.mjs check --run physics-em-sr-40-2026-10-08` | batch-4 items clean (7–16); remaining errors are other batches' empty inventories |
| cross-batch ledger | `node tools/physics-support/frontier-dependency-ledger.mjs refresh --run physics-em-sr-40-2026-10-08` | 0 orphaned reviews; all 121 batch-4 edges reviewed (open) |
| readiness | `node tools/physics-support/step1-decisions.mjs check --run physics-em-sr-40-2026-10-08` | 142 declared items, 142 ready, 0 open item rows; the 64 open rows are other batches' empty inventories |

## Run-level findings (not batch-4 blockers)

1. **Frontier plan validator (`undeclared-prereq`).** `frontier-item-gate.mjs --run
   physics-em-sr-40-2026-10-08 --tool validate-plan` reports 12 findings for this pair: 11 for
   `sr-observer-measurements` and 1 for `sr-observer-measurements-examples`; the exact home list
   is in the Design-vs-plan section above. Repair belongs to the plan writer plus a
   `drift-apply` sync; a beta may not edit the shared plan, and a manifest-only edit would be
   reverted by that sync.
2. **Scoped `extcheck --manifest-only` cannot run yet** for the same reason batch 3 recorded:
   the frontier wrapper loads every run manifest and other batches still carry empty item arrays.
   Batch 4 declares no `proved_here: false` item, no `external_refs` and no `forward_refs`, so
   its own extcheck scope is empty.
3. **Ledger gate** `frontier-dependency-ledger.mjs refresh --require-reviewed` remains red
   run-wide until every batch supplies an input and every declared edge has a review row; batch
   4's input is complete (0 orphaned reviews, 0 unreviewed batch-4 edges).
4. **Root mathematics import drift.** The same single drifted root file recorded by batch 3
   (`items/thm-hilbert-basis-theorem.md`) remains external to this pair; the engine invocation
   with `--run` passes and reconciliation is an owner action outside an active run.

## Unresolved / escalated

- No batch-4 item is escalated: each has a complete statement, an explicit proof or
  non-derivation strategy, named dependencies with roles and a computed dependency level, and
  every supplier is scaffolded in this run or published on disk. The open items are the
  run-level findings above (page `requires` reconciliation, empty sibling batches, the
  run-wide ledger gate), which are recorded for the owner and the Step-1 repair loop.
- Recorded uncertainty (not an escalation): the S10 coefficient discrepancy of finding 2 and
  the two source-level defects of finding 1 are stated with exact evidence; if Step 3 cannot
  re-derive the corrected Bell coefficient, the exact formula must be revisited rather than
  silently restored from the research module.

## Final verification (after the last edits)

- `manifest-deps` on all current manifests: 142 items, 0 missing, 0 errors.
- `content-policy --manifest-only` over all current manifests: 0 errors, 0 warnings.
- `coverage-checklist --require-destination` on the batch file: 0 errors, 0 warnings.
- `source-fetch-check` in check mode: 4/4 fetch-verified; the coverage file carries the stamps.
- `physics-check --run ... --plan`: 0 errors, 142 items.
- Readiness records: one per batch-4 item, `ready`, with the examined dependency ids; the
  step-1 check reports 142 declared items ready and only other batches' empty inventories open.
- Stage-artifact simulation for unit 4 (`tools/physics-autopilot/stages/mathlib.mts`,
  `1-scaffold.artifacts`): the populated manifest, the coverage file and all 25
  `research/...-step1-<id>.json` records exist, every record is current (`step1Decision` closed)
  and every `dependency_level` equals the computed level, so no `...batch-4.scaffold-incomplete`
  sentinel applies and the pair is releasable to its dependent batches. The run-wide stage-1
  gates (readiness, dependency levels, `--require-reviewed` ledger) remain red only for the
  not-yet-scaffolded batches and their empty inventories.
