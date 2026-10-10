# Step 3a scope report — pair `sr-observer-measurements` / `sr-observer-measurements-examples`

- Run: `physics-em-sr-40-2026-10-08`, role alpha, label
  `step3a-pair-sr-observer-measurements-b55d07fe4b430a50` (batch 4, batch index 4).
- A page `sr-observer-measurements` (order 215, category `special-relativity`,
  `library: physics`, 15 items); B page `sr-observer-measurements-examples`
  (order 216, 10 leaf items). Companion pairing and orders match the plan.
- Scope decision: **sufficient** for the A page (recorded via
  `tools/physics-support/step3-decisions.mjs record-scope`, binding the current
  pair scope hash). No omission found, no merger or enrichment recommended, no
  owner proceed action requested. One non-blocking bookkeeping observation is
  recorded below (stale coverage summaries for two B items).

## Inputs read

- `research/plan-spec.json` (pair entries orders 215/216, requires lists) and
  `research/plan-special-relativity-track.md` (SR04 block).
- Full source designs: `research/first-principles-2026-10-03/relativity/scaffold/special-relativity.md`
  (SR04 inventory row, "Precise objects", current supplier-layer note),
  `proposed-inventory-and-checks.json` (SR04 / SR04B rows),
  `expanded-item-inventory.json` (the three stable SR04 ids),
  `closure-ledger.json` (M25), `sr-supplier-proofs.md` (S4, S5, S10, S11),
  `prose-scaffold.md` (SR03–04 independent-treatment row: Crowell §§3.5,3.7
  pp. 60–68; Carroll Ch. 1/3 pp. 8–16, 68–70; Reall §2.3 pp. 28–30 —
  "included", no shortfall for this pair).
- Run records: batch-4 pages manifest, `…-batch-4.coverage.json`,
  `…-batch-4.notes.md`, `…-batch-4.cross-batch-dependencies.json`,
  `…-owner-authoring-direction.md` (including the fourth reconciliation on
  Rindler/rotating/Bell interfaces and the empirical/statistical qualifications),
  `…-alpha-step1-drift.md` (this pair: no-drift),
  `…-requested-scope.json` (pair is an authorized SR selection),
  `…-external-prerequisite-repair.json` and
  `…-reconciliation2.plan.json`, `…-reconciliation5.plan.intermediate-correction.json`
  (requires integrations), pinned imports `research/math-imports.json`.
- Dependency context: batches 1–3 manifests (suppliers
  `sr-spacetime-primitives`, `sr-lorentz-transformations`,
  `sr-worldlines-and-clocks`) and consumers' cross-batch rows in batches 5–8.

## Scope evidence (design vs content)

The SR04 design reserves: "M04 split/projector; def simultaneity/operational
radar protocol; pthm observer velocity and time/length transform; def
chart/tetrad/congruence distinction", closure "S10–S11; G2 early pure
mathematical flow/Frobenius", requires SR02–03. Every reserved element is
realized (mapping recorded in `…-batch-4.notes.md` and reproduced here):

| design element | current items |
|---|---|
| M04 split/projector | supplied by SR03 `thm-sr-proper-time-and-observer-decomposition` (proposed home chosen by the splice; clauses (c)–(d) verified present), extended in-page by `def-sr-observer-congruence-and-kinematics` (rest metric h, projection, acceleration, expansion/shear/vorticity, Born rigidity `L_n h = 2 theta`) and `def-sr-simultaneity-slice-and-rest-distance` |
| simultaneity / operational radar protocol | `def-sr-simultaneity-slice-and-rest-distance`, `def-sr-operational-radar-protocol` (physics domain, symmetric-half-split convention and one-way caveat), `lem-sr-radar-midpoint-for-inertial-observer`, `pthm-sr-radar-synchronization-of-inertial-observers` |
| observer velocity and time/length transform | `lem-sr-boost-time-length-and-velocity-formulas` (clock rate, length comparison, simultaneity shift, velocity transformation incl. nullity) and `pthm-sr-observer-time-length-and-velocity-measurements` (conditional reading with scope clause separating measured length from optical appearance) |
| chart / tetrad / congruence distinction | `def-sr-chart-tetrad-and-congruence-distinction` (non-inertial-chart witness; coordinate-frame commutation necessary condition only) |
| S10–S11 closure | `def-flat-covariant-derivative-on-affine-minkowski-space`, `def-sr-fermi-walker-transport`, `lem-sr-fermi-walker-transport-existence-and-uniqueness`, `thm-sr-fermi-walker-and-rigid-observer-examples` (preservation; Rindler; rigid rotation with ring holonomy; Bell C1 first-order field), `thm-sr-smooth-local-herglotz-noether` (smooth local classification, rotational Killing rescaling, irrotational affine-plane tubular families), completed by `lem-sr-closed-one-form-primitive-on-simply-connected-open-sets` |
| G2 early pure mathematical flow/Frobenius | `thm-sr-local-congruence-adapted-charts-and-frobenius` (flow box; codimension-one Frobenius; rest-distribution criterion) |

The three stable research ids (`thm-sr-local-congruence-adapted-charts-and-frobenius`,
`thm-sr-fermi-walker-and-rigid-observer-examples`,
`thm-sr-smooth-local-herglotz-noether`) are minted on this page exactly as the
splice and expanded inventory require. The B page is a leaf of 8 examples and
2 counterexamples (worked radar round trip, time dilation, length contraction,
velocity transformation, Rindler wedge, rigid-rotation holonomy, Bell
congruence, Fermi–Walker hyperbolic motion; Born-rigid-not-Killing and
observer-dependent-simultaneity counterexamples), all domain mathematics with
`ai-generated` statement provenance and generation roles. No item of the pair
depends on a B-page item, and none of the B items is a dependency target.
No mathematical item of the pair has a physics-domain dependency (checked).

The historical SR04 closure budget was 52 A / 12 B; the built 15 A / 10 B is a
deliberate budget, not a target: all four design elements, the S10–S11 claims
and the G2 flow/Frobenius supplier are present, and the design's deferred
content (hyperbolic horizon, guided-ray Sagnac, Ehrenfest discussion; Tong's
reported muon/Hafele–Keating tests) is routed to existing later pages
(`sr-accelerated-observers`, `sr-experimental-interface`), so nothing promised
is dropped from the run.

Intended role in the library: the pair is the SR observer-measurement supplier
for SR05–SR12 and for the GR/EM closures; 14 of the 15 A items are already
consumed by 40 consumer edges on later pages (e.g.
`lem-sr-boost-time-length-and-velocity-formulas` and
`def-sr-simultaneity-slice-and-rest-distance` by `sr-proper-time-comparisons`;
`def-sr-observer-congruence-and-kinematics`,
`thm-sr-local-congruence-adapted-charts-and-frobenius` and
`def-sr-operational-radar-protocol` by `sr-accelerated-observers`;
`def-sr-chart-tetrad-and-congruence-distinction` by `sr-experimental-interface`),
and the required content of those consumer rows is present in the current
statements.

## Source coverage

`coverage-checklist --require-destination` passes: 1 page, 44 harvested
results (34 per-source rows + 10 canonical B rows), 0 errors, 0 warnings. The
six sources carry `fetch_verified` stamps (Crowell 246-page PDF; Carroll
gr-qc/9712019; Reall via the recorded Wayback recovery; Giulini
math-ph/0602018; Sjamaar; Lebl). Dispositions: every `included`/`inline` row
lands on an existing pair item; `deferred` rows name existing later in-run
pages (`sr-accelerated-observers` for the hyperbolic horizon and guided-ray
Sagnac; none unnamed); `out-of-scope` rows are reasoned (AxC p. 31, Crowell's
Chapter 2 axiomatization-equivalence claim). Source-level qualifications are
carried into the items: Crowell's analyticity assumption for Herglotz–Noether
is avoided and recorded, Giulini's orbit-quotient gap is replaced by the
closed-one-form primitive route, and the Reall citation is used only as
coordinate/proper-time background.

## Prerequisites (unmet-prerequisite screening)

- Item level: the two pages have 77 distinct `deps` targets. 38 are in-run
  scaffold items on batches 1–4 (all earlier or same-page; no B-page and no
  later-page targets; intra-page order respects supplier-before-consumer); 39
  are pinned published mathematical imports present in `items/` and placed on
  published `library/` pages. 0 unresolved.
- Page level: A requires 11 published mathematical pages plus
  `sr-worldlines-and-clocks`; B requires `sr-observer-measurements` and
  `geodesics-the-exponential-map-completeness-and-hopf-rinow` (justified by
  `cex-sr-born-rigid-motion-need-not-be-killing`, which uses that page's
  `lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space`). All
  12 + 2 pages exist in `library/` and are pinned in `math-imports.json`.
- The Step-1 scaffold finding of 12 `undeclared-prereq` rows for this pair was
  a plan-declaration gap (published supplier homes absent from the page
  `requires`). It is now closed: the 11 mathematical homes were integrated by
  `reconciliation2.plan.json` and the geodesics home by
  `reconciliation5.plan.intermediate-correction.json`; the current plan and
  manifest agree, and the run-mode frontier validator reports 0
  `undeclared-prereq` findings for this pair.
- Consumer screening: 40 consumer edges from this pair's items resolve to
  later in-run pages with matching required content (batches 5–8 rows
  inspected); a run-wide scan of all 80 manifest pages finds 0 unresolved
  dependency targets.
- Result: **no unmet prerequisite found** — nothing required by this pair is
  absent from both the published library and the current scaffold. Uncertain
  and not claimed: the internal proofs of the pinned imported suppliers were
  not re-audited here (read-only imports, outside Step-3a scope); this finding
  concerns presence, identity, placement and publication status.

## Observations (non-blocking, for the owner)

- Two `canonical` summaries in `…-batch-4.coverage.json` still describe
  superseded pre-reconciliation content: the Bell example row states the
  expansion `(2 + gamma^2 alpha^2 t^2/c^2) gamma^3 alpha^2 t/c^3`, and the
  Born-rigid counterexample row describes the withdrawn Rindler-based
  construction. The current manifest statements (`gamma^3 q_1' q_1''/c^3`
  with the two-sided subluminal domain; the explicit Fermi-tube counterexample
  with the note that Rindler is *not* the counterexample) follow the owner
  direction and are the authoritative interface; `coverage-checklist` passes
  because it checks structure and dispositions, not formula text. A one-line
  refresh of the two summary rows would prevent downstream readers from
  treating the stale text as a source of truth. This does not affect scope
  sufficiency.
- The `standard-relativity` research module S10 text and the batch-4 notes
  record an earlier recomputation of the Bell coefficient; the owner-directed
  current value is stated consistently in both the theorem clause (d) and the
  worked example (`75/64` vs. the discarded `3075/1024` at `beta = 3/5`,
  `beta' = 1`). No item statement conflict remains inside the manifest.

## Checks run (exact)

| Check | Command | Result |
|---|---|---|
| coverage | `node tools/physics-support/coverage-checklist.mjs research/physics-em-sr-40-2026-10-08-batch-4.coverage.json --require-destination` | 1 page, 44 harvested, 0 errors, 0 warnings |
| manifest deps | `node tools/physics-support/manifest-deps.mjs research/physics-em-sr-40-2026-10-08-batch-4.pages.json` | 25 items, 0 normalized, 0 errors |
| plan (pair) | `node tools/physics-support/validate-plan.mjs research/plan-spec.json --run physics-em-sr-40-2026-10-08` | exit 0; no findings for this pair |
| frontier plan validator | `node tools/physics-support/frontier-item-gate.mjs --run physics-em-sr-40-2026-10-08 --tool validate-plan` | OK; 0 `undeclared-prereq`, 0 unresolved ids |
| dep resolution / consumer scan | scripted scan of `items/`, `library/`, `math-imports.json`, all 80 manifests | 77/77 targets resolve; 0 run-wide unresolved; 40 consumer edges; no B/later-page edges |
| step 3a state | `node tools/physics-support/step3-decisions.mjs check --run physics-em-sr-40-2026-10-08 --phase scope` | this pair listed as `current scope review required` (expected; closed by this decision) |

## Decision

`sufficient` — the planned definitions (chart/tetrad/congruence distinction,
flat covariant derivative, congruence kinematics, simultaneity/rest distance,
radar protocol, Fermi–Walker transport), results (radar midpoint and
synchronization, boost formulas and the observer measurement theorem, flow
box/Frobenius, Fermi–Walker existence and preservation, Rindler/rotation/Bell
geometry, closed-one-form primitive, smooth local Herglotz–Noether) and the
10 worked examples/counterexamples adequately cover the intended SR04 subject
with exact supplier resolution, multi-treatment source coverage and no unmet
prerequisite. Recorded in
`research/physics-em-sr-40-2026-10-08-step3a-review-sr-observer-measurements.json`
(the record binds the current pair scope hash). No owner proceed/merge/enrich
action is requested for this pair.
