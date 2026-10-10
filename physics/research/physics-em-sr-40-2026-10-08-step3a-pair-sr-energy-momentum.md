# Step 3a scope report — pair `sr-energy-momentum` / `sr-energy-momentum-examples`

- Run: `physics-em-sr-40-2026-10-08`, role alpha, label
  `step3a-pair-sr-energy-momentum-ce2bdb832b666616` (batch 8).
- A page `sr-energy-momentum` (order 223, category `special-relativity`,
  `library: physics`, 13 items); B page `sr-energy-momentum-examples`
  (order 224, 8 leaf items). Companion pairing, orders, category, library and
  `requires` match `research/plan-spec.json` exactly (checked field by field).
- Scope decision: **sufficient** for the A page (recorded via
  `tools/physics-support/step3-decisions.mjs record-scope`, binding the current
  pair scope hash). No omitted topic or result was found, no merger or
  enrichment is recommended, and no owner proceed action is requested.
  Two non-blocking bookkeeping observations are recorded below.

## Inputs read

- `research/plan-spec.json` (pair entries orders 223/224 and both `requires`
  lists) and `research/plan-special-relativity-track.md` L173 (the controlling
  `SR08 energy-momentum` reservation, incl. the consuming
  `research/plan-classical-electromagnetism-track.md` L1970 note).
- Full source design: `research/first-principles-2026-10-03/relativity/scaffold/special-relativity.md`
  ("Postulates, primitives and units", "Precise objects", SR08 inventory row,
  and the supplier-layer note "SR08 reserves one extra premise slot"),
  `scaffold/proposed-inventory-and-checks.json` (SR08 / SR08B rows),
  `scaffold/expanded-item-inventory.json` (the two stable SR08 research ids),
  `closure-ledger.json` (M04 = S4,S7,S8; M24 = S5–S7), and
  `scaffold/sr-supplier-proofs.md` S4, S5, S6, S7 (S7 is the controlling
  argument module for this pair).
- Run records: batch-8 pages manifest (all 21 item statements, strategies,
  `deps`, `dependency_roles`, `physical_scope`, `sources`), batch-8
  coverage/notes/cross-batch-dependencies (126 rows), the 21 Step-1 `ready`
  records (e.g. `…-step1-lem-sr-energy-momentum-observer-identities.json`),
  `…-alpha-step1-drift.md` (this pair: `no-drift`),
  `…-owner-authoring-direction.md` (binding direction, including the Step-1
  published-context declaration repair), `…-requested-scope.json` (the pair is
  an authorized SR selection), `research/prose-scaffold-splice.json`
  (`proposed_item_homes`: both stable ids home `sr-energy-momentum`), and the
  pinned imports `research/math-imports.json` with `items/`.
- Dependency context: batches 1–3 supplier manifests (spacetime primitives,
  Lorentz transformations, worldlines and clocks) read at statement level for
  the 19 in-run supplier ids, and the consumer rows in batches 9, 11, 12, 23,
  37 plus the page-level consumers in `plan-spec.json`.

## Scope evidence (design vs content)

The SR08 reservation names: "post p=mu/additive isolated collision balance;
def E_n/q_n/kinetic energy/invariant mass; M04 mass shell; pthm collision
kinematics and threshold conditional on interaction assumptions", requires
SR03–04 with "explicit S7 adopted premise", closure S7. Every reserved element
is realized (mapping also recorded in `…-batch-8.notes.md`):

| design element | current items |
|---|---|
| post p=mu + additive isolated collision balance | `post-sr-massive-particle-dynamics` (m>0 constant, P=mU, observer-measurement identification, isolated-collision four-momentum balance and the stipulated-force equation of motion); the `Precise objects` paragraph's separate massless primitive is minted as `post-sr-ideal-massless-particle-momentum` (nonzero future null P, no m→0 limit, no light/quantum content) — a recorded content addition, not a narrowing |
| def E_n/q_n/kinetic energy/invariant mass | `def-sr-observed-energy-momentum-and-kinetic-energy` (a)-(d): exact dependence on P, n, m, unique decomposition P=(E_n/c)n+q_n, unit/measurement disclaimer; SI names/units carried by the postulate and `def-sr-si-units-and-coordinate-conventions` |
| M04 mass shell (S4 observer projection, S7 shell) | `lem-sr-energy-momentum-observer-identities` (a)(ii) (E_n²=m²c⁴+c²|q_n|², E_n=c|q_n| null case, positivity of E_n, frame independence of m) with the frame form and passive-boost invariance in `lem-sr-four-momentum-in-inertial-frame` (a),(c); the S4 rest projection is consumed from batch 3 `thm-sr-proper-time-and-observer-decomposition` (c)–(d) |
| pthm collision kinematics and threshold, conditional on interaction assumptions | `pthm-sr-momentum-and-four-force` (a)-(f), supported by `lem-sr-finite-future-causal-sums`, `lem-sr-center-of-momentum-frame`, `def-sr-collision-datum-and-conservation`, `lem-sr-collision-necessary-conditions`; thresholds are necessary kinematic inequalities only, with explicit non-assertion of any interaction, cross section, amplitude, probability or empirical fact |
| S7 extras (four-force identities, massless primitive, null-pair mass, variable-mass caveat) | `def-sr-proper-time-derivative-and-four-force`, `lem-sr-four-force-and-work-energy-identities` (η(P,F)=0, F=mA, dE/dt=f·w, F=γ(f·w/c,f), variable-mass clause), `lem-sr-collision-necessary-conditions` (d) with the B-page null-pair example; `pthm` (b),(d) |

The built 13 A / 8 B is below the research budget 27/12, which the design and
Step-1 records treat as reserved closure slots, not a target: the reservation's
complete inventory and the S7 module's stated claims are all present, and the
page is far below the 100-item cap, so no split is required. The B page is a
leaf of 6 examples and 2 counterexamples (β=3/5 four-momentum and Newtonian
comparison; passive boost to rest; equal-mass head-on collective mass;
conserving two-into-one datum and its non-uniqueness; null-pair collective
mass; stationary-target threshold; massless momentum is not mU at m=0;
kinetic energy is observer-dependent), all domain mathematics; nothing outside
the pair depends on a B item and no item of the pair depends on a B page of
another page (checked).

Domain/kind boundary: 10 mathematics items (4 definitions, 6 lemmas) and 3
physics items (2 postulates, 1 physics-theorem); no mathematical item depends
on a physical item; no kind/prefix violation; mathematical items use only
`mathematical-premise` roles. `physical_scope` on the three physics items
excludes variable mass, internal structure, spin, radiation reaction, force
laws, continuum matter, gravity, quantum/statistical descriptions and every
empirical claim, and the theorem notes no empirical premise is used, so no
empirical qualification has to travel.

## Source coverage

`coverage-checklist --require-destination` passes: 1 page, 39 harvested rows,
0 errors, 0 warnings. Three fetch-verified full texts (Crowell, *Special
Relativity* 2020-12-10, 246-pp PDF, §§4.2–4.6 pp. 82–120; Carroll,
gr-qc/9712019, Ch. 1 printed pp. 27–30 eqs. (1.98)–(1.113); Reall, Part III GR,
§6.3 pp. 63–64 and §7.4 pp. 86–87), with `source-fetch-check` re-verifying 3/3
sources in check mode. Dispositions: 21 `included`, 3 `inline`, 8
`out-of-scope`, 7 `deferred`, every `included`/`inline` row landing on an
existing pair item and every `deferred` row naming an existing in-run page
(`em-vacuum-waves-and-polarization`, `sr-experimental-interface`,
`sr-forces-and-continuum` ×4, `sr-worldlines-and-clocks`). Notable declines
recorded with reasons: Crowell's low-velocity emission derivation of E=mc²
(replaced by the algebraic P=mU shell), the light-ray noninteraction example
(incomplete determinism; wave superposition elsewhere; the exact one-null-leg
impossibility kept), Compton scattering/478 keV edge (quantum and empirical),
massless-particle identity evidence (empirical), measured p=mγv verification
(primary-report queue on `sr-experimental-interface`), and the continuum
stress/perfect-fluid rows (→ `sr-forces-and-continuum`). The Step-1-recorded
locator conflict (Carroll "pp. 17–21" vs the actual eqs. (1.98)–(1.102) on
printed p. 27) is corrected in the coverage file and changes no claim.

## Prerequisites (unmet-prerequisite screening)

- Item level: the pair has 236 distinct `deps` edges. 125 go to earlier-page
  scaffold items on batches 1–3 (84 batch 1, 6 batch 2, 35 batch 3; 19 distinct
  suppliers, e.g. `thm-sr-proper-time-and-observer-decomposition` clauses
  (a)–(f), `def-sr-four-velocity-and-four-acceleration`,
  `def-sr-si-units-and-coordinate-conventions`, `def-lorentz-boost`,
  `thm-sr-tensor-and-current-transformation`,
  `lem-boost-is-proper-orthochronous-with-inverse`,
  `lem-future-oriented-inertial-frames-exist`,
  `def-oriented-minkowski-volume-form`); 68 are intra-page supplier edges
  within the A page's own dependency order; 5 are same-B-page earlier-item
  edges (allowed); 38 go to 13 distinct published read-only mathematical
  imports (`def-rational-power`, `def-finite-sum-in-a-commutative-monoid`,
  `thm-induction-principle`, `thm-cauchy-schwarz-finite`,
  `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases`,
  `def-vector-valued-derivative-and-integral`, `thm-chain-rule`,
  `thm-algebra-of-derivatives`, `thm-real-power-continuity-and-derivatives`,
  `def-derivative`, `def-interval`, `def-euclidean-inner-product`,
  `def-linear-map`), all present as files in `items/`. 0 unresolved targets,
  0 later-page targets, 0 cross-page B targets, 0 duplicate item homes.
- Key supplier content verified at statement level: batch-3
  `thm-sr-proper-time-and-observer-decomposition` contains exactly the clauses
  (c) rest projection h with n^⊥ positive definite, (d) γ≥1 with
  u=γ(n+w/c), (e) U=γ_w(c,w) with |w|<c — that the definitions and lemmas
  cite; batch-1 `def-sr-si-units-and-coordinate-conventions` and the
  orthonormal-basis/future-frame/cone lemmas are present with matching titles.
- Page level: A requires `sr-observer-measurements` (order 215, batch 4) plus
  the two published mathematics P homes (`construction-of-the-natural-numbers`,
  `rings-subrings-and-integral-domains`); B requires `sr-energy-momentum`. The
  Step-1 scaffold finding of 2 `undeclared-prereq` rows for this pair is closed
  by the plan-level requires integration recorded in the owner direction's
  published-context repair; the current frontier plan validator reports 0
  `undeclared-prereq` findings run-wide.
- Consumer screening (intended role): 12 item-level consumer edges on 6 pages
  (`sr-newtonian-bridge` ×3, `sr-newtonian-bridge-examples` ×2,
  `sr-experimental-interface` ×1, `sr-forces-and-continuum` ×4,
  `em-primitives-and-postulates` ×1, `em-lorentz-covariant-formulation` ×1),
  all recorded as `open` cross-batch rows (batches 9, 11, 12, 23, 37) whose
  required-content notes match the current statements; the EM rows carry the
  reconciliation9 accepted-scope reference. Page-level consumers
  `sr-forces-and-continuum` (225), `sr-newtonian-bridge` (229) and
  `rpm-geometry-actions` (413) all follow this page's order.
- Result: **no unmet prerequisite found** — nothing required by this pair is
  absent from both the published library and the current scaffold. Uncertain
  and not claimed: the 193 in-run supplier items are scaffolded but not yet
  authored (authoring is Step 3b and later; this finding is about presence,
  identity, placement and content match), and the internal proofs of the
  pinned published imports were not re-audited here (read-only imports outside
  Step-3a scope).

## Observations (non-blocking, for the owner)

- The two Step-1 `undeclared-prereq` rows recorded for this pair in
  `…-batch-8.notes.md` (published homes of
  `def-finite-sum-in-a-commutative-monoid` and `thm-induction-principle`) are
  closed by the current plan `requires`; no residual open row involves this
  pair (`step1-decisions check`: 471/471 ready, closed).
- The batch-8 scaffold declined the Compton/478 keV row as quantum and
  empirical and kept only the exact one-null-leg impossibility plus the
  null-pair mass formula from the null sector. This matches the S7 module
  exactly and is recorded as a deliberate disposition; if the owner later
  wants general massive-plus-null two-leg kinematics, that is an enrichment
  beyond the SR08 reservation, not a scaffold omission.

## Checks run (exact)

| Check | Command | Result |
|---|---|---|
| coverage | `node tools/physics-support/coverage-checklist.mjs research/physics-em-sr-40-2026-10-08-batch-8.coverage.json --require-destination` | 1 page, 39 harvested, 0 errors, 0 warnings |
| source fetch | `node tools/physics-support/source-fetch-check.mjs --coverage research/physics-em-sr-40-2026-10-08-batch-8.coverage.json` | 3/3 fetch-verified, 3/3 resolved |
| manifest deps | `node tools/physics-support/manifest-deps.mjs research/physics-em-sr-40-2026-10-08-batch-8.pages.json` | 21 items, 0 normalized, 0 errors |
| plan (pair) | `node tools/physics-support/validate-plan.mjs research/plan-spec.json --run physics-em-sr-40-2026-10-08` | exit 0; no findings for this pair |
| frontier plan validator | `node tools/physics-support/frontier-item-gate.mjs --run physics-em-sr-40-2026-10-08 --tool validate-plan` | 0 `undeclared-prereq` run-wide; pair requires line correct |
| dep resolution / domain scan | scripted scan of all 80 manifests, `items/`, `plan-spec.json` | 236/236 edges resolve (125 cross-batch, 68 intra-page, 5 same-B-page, 38 published); 0 unresolved, 0 later-page, 0 cross-page B, no duplicate homes; 0 math→physics edges |
| consumer scan | scripted scan over all manifests and cross-batch rows | 12 item edges on 6 pages + 3 page-level A consumers; all rows present and current |
| metadata | plan vs batch-8 entries (id/title/category/library/companion/kind/order/requires) | exact match for both pages |
| step 1 state | `node tools/physics-support/step1-decisions.mjs check --run physics-em-sr-40-2026-10-08` | 471 declared, 471 ready, closed |
| dependency levels | `node tools/physics-support/item-dependency-levels.mjs check --run physics-em-sr-40-2026-10-08` | 471 items, max level 24, no batch-8 error |
| step 3a state | `node tools/physics-support/step3-decisions.mjs check --run physics-em-sr-40-2026-10-08 --phase scope` | pair listed as `current scope review required` (closed by this decision) |

## Decision

`sufficient` — the planned definitions (observer energy/momentum/invariant
mass/rest energy/kinetic energy with exact dependence; proper-time derivative
and four-force; total four-momentum, invariant mass and center-of-momentum
frame; collision datum and conservation), results (observer identities
including positivity and the mass shell, inertial-frame components and passive
boost transformation, four-force/work-energy identities with the variable-mass
caveat, finite future causal sums, center-of-momentum existence/uniqueness,
collision necessary conditions with the stationary-target threshold and null
cases, and the conditional physics theorem assembling them) and the 6 worked
examples plus 2 counterexamples adequately cover the intended SR08 subject with
exact supplier resolution, three-treatment fetch-verified source coverage with
all declines reasoned, and no unmet prerequisite. Recorded in
`research/physics-em-sr-40-2026-10-08-step3a-review-sr-energy-momentum.json`
(the record binds the current pair scope hash). No owner proceed/merge/enrich
action is requested for this pair.
