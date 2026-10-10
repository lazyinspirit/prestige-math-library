# Step 3a scope report — pair `sr-accelerated-observers` / `sr-accelerated-observers-examples`

- Run: `physics-em-sr-40-2026-10-08`, role alpha, label
  `step3a-pair-sr-accelerated-observers-1316240576da5f9d` (batch 10, batch index 10).
- A page `sr-accelerated-observers` (order 227, category `special-relativity`,
  `library: physics`, 6 items); B page `sr-accelerated-observers-examples`
  (order 228, 5 leaf items: 3 examples, 2 counterexamples). Companion pairing,
  orders, titles, category and library match the plan record and the generated
  task shell; the pair is one of the 12 authorized SR pairs in
  `research/physics-em-sr-40-2026-10-08-requested-scope.json`.
- Scope decision: **sufficient** for the A page, recorded via
  `tools/physics-support/step3-decisions.mjs record-scope` against the current
  pair scope hash. No omission warranting enrichment or a pair merger was
  found; no owner proceed action is requested. Two non-blocking wording notes
  for the owner are recorded below (Ehrenfest/size-restriction destination
  wording; a stale research-line shortfall statement).

## Inputs read

- Plan: `research/plan-spec.json` (pair entries orders 227/228, `requires`),
  `research/plan-special-relativity-track.md` (Accelerated Observers block,
  L218-252, SR10 reservation `24/12`, requires SR03-SR07), and the referenced
  full designs `research/first-principles-2026-10-03/relativity/scaffold/`:
  `special-relativity.md` (SR10 inventory row line 39; "Precise objects"
  accelerated/ring/Bell paragraph; supplier-layer note S10/G2),
  `proposed-inventory-and-checks.json` (SR10 row), `expanded-item-inventory.json`
  (S10 entries: `thm-sr-fermi-walker-and-rigid-observer-examples` home SR04;
  stable `pthm-sr-guided-ring-sagnac-delay` home SR10 with its exact
  `physical_premises`), `closure-ledger.json` (S10 and G2 argument rows),
  `sr-supplier-proofs.md` ("## S10 — accelerated observers and synchronization
  counterexample", the scope-of-completed-interfaces note, and S11 context),
  `prose-scaffold.md` line 39 (SR10 independent-treatment row), and
  `research/prose-scaffold-splice.json` (`proposed_item_homes`:
  `pthm-sr-guided-ring-sagnac-delay` -> `sr-accelerated-observers`).
- Run records: `...-batch-10.pages.json`, `...-batch-10.coverage.json`,
  `...-batch-10.notes.md`, `...-batch-10.cross-batch-dependencies.json`
  (111 rows: 108 item + 3 page edges, all `open` as expected pre-authoring),
  `...-owner-authoring-direction.md` (fourth reconciliation on Rindler/rotating
  ring/Bell interfaces; owner clarifications of 2026-10-09),
  `...-alpha-step1-drift.md` L179-181 (`sr-accelerated-observers`: VERDICT
  no-drift), `...-requested-scope.json`, the reconciliation plan records
  (no finding for this pair), and pinned imports `research/math-imports.json`.
- Dependency context: the current manifests of supplying batches 1, 2, 3, 4, 5
  and 7 (`sr-spacetime-primitives`, `sr-lorentz-transformations`,
  `sr-worldlines-and-clocks`, `sr-observer-measurements`,
  `sr-causality-and-signals`, `sr-light-and-doppler`), the run-wide scan of all
  80 manifest pages / 471 items, and the deferral rows addressed to this pair
  in the coverage files of batches 3, 4 and 14.

## Scope evidence (design vs content)

The SR10 reservation is "def proper acceleration/congruence; explicit
hyperbolic worldline calculation; def Rindler chart domain; pthm chart
horizon/radar restrictions; texp Bell setup with distinct congruences", closure
"S10; G2 linear transport/flow". Every reserved element is realized, with
earlier-home items consumed rather than re-minted (splice/homing consistent
with `expanded-item-inventory.json`):

| design element | current items |
|---|---|
| def proper acceleration | `def-sr-proper-acceleration` (physics; `a = sqrt(eta(A,A))` of a C^2 future timelike worldline, SI unit, congruence agreement `A = c^2 a_cg`, ideal-accelerometer reading with explicit no-response-law/no-force-law scope) |
| def congruence | consumed from SR04 `def-sr-observer-congruence-and-kinematics` (batch 4); no duplicate minted |
| explicit hyperbolic worldline calculation | `lem-sr-hyperbolic-motion-worldline` (mathematics; C^infinity hyperbola `(R sinh theta, R cosh theta)` with `eta(A,A) = alpha^2`, `eta(U,A) = 0`, wedge bound, Rindler flow-line identification, both null-plane asymptotes) |
| def Rindler chart domain | chart of SR04 `thm-sr-fermi-walker-and-rigid-observer-examples` (b) with domain restated and used in `pthm-sr-rindler-horizons-and-radar` (i) (`Phi` smooth bijection of `R x (0,inf) x R^2` onto `W = {x^1 > \|x^0\|}`, `rho = 0` excluded, wedge boundary vs full null planes) |
| pthm chart horizon/radar restrictions | `pthm-sr-rindler-horizons-and-radar` (i)-(v): `V < 0` / `U > 0` if-and-only-if causal criteria, light-ray constants, exact radar events with `theta_m = theta_e + \|log(rho_m/rho_0)\|`, radar distance `rho_0\|log(rho_m/rho_0)\|`, general logarithmic inner/outer comparison, protocol non-extension to `V >= 0`, limits `rho -> 0^+`, `+infinity` |
| texp Bell setup with distinct congruences | `texp-sr-bell-rockets-thread` (a)-(e): equal chart-frame velocity/acceleration with constant chart separation `L`, unit field `n = gamma(1,beta,0,0)`, expansion `theta(s_par,s_par) = gamma^3 q' q''/c^3`, material metric length `gamma(t)L` via `lem-sr-connecting-field-stretching`, initial-rest special case, both signs of expansion, no elasticity/breaking/tension conclusion |
| S10/expanded-inventory guided-ring Sagnac | `pthm-sr-guided-ring-sagnac-delay` (i)-(v) under the exact adopted ideal circular-guide premise: return times `2piR/(c -+ Omega R)`, chart difference `4 pi Omega R^2/(c^2 - Omega^2R^2)`, detector proper-time difference `/gamma`, rest-synchronization holonomy with the exact factor-2 relation, `Omega = 0` limit, material vs rest ring lines, ambient Frobenius obstruction vs cylinder local integrability |

The design's `24/12` slots are a research reservation budget, not a target
(same treatment as the sibling SR04 pair); the built 6 A / 5 B is far below the
100-item cap and closes every promised claim. The three B examples and two
counterexamples (worked Rindler radar round trips at `rho_m = 2rho_0`,
`rho_0/2` and the `3rho_0/2` noninjectivity witness; the horizon-is-not-a-
physical-boundary counterexample; the radar-asymmetry counterexample; the
`Omega R = 3c/5` Sagnac worked case; the quadratic Bell congruence with
`G_11 = gamma^2`, `75alpha/(64c^2)`) are leaves: no item of the pair depends
on a B-page item and no B id is a dependency target anywhere in the run. No
new postulate was minted; the guided-signal assumption lives inside the ring
theorem's clause (ii) as an explicit device-model idealization.

Owner-direction compliance (fourth reconciliation) checked clause by clause:
Rindler half-plane chart boundary distinguished from the full null-plane
causal horizons; both directional criteria retained (`V >= 0` no return,
`U <= 0` no emission); exact radar events and the general logarithmic
comparison; `U = c n` and `d tau = dt/gamma` for the ring; material lines
constant-label vs rest lines varying-label; signed return-time differences,
factor-two holonomy, zero-rotation limit and the explicit ideal circular-guide
premise; Bell C^2 subluminal profiles, C^1 field, material-metric length at
common flow parameter (`gamma(t)L`), initial rest as a stated special case, and
no breaking/tension without an additional material model.

Intended role in the library: SR10 is the terminal accelerated-observer topic
of the SR track and the named destination for deferrals from earlier pages —
batch 3 (`sr-worldlines-and-clocks`: Crowell Example 4 hyperbolic motion and
§3.6 hyperbolic-function formulas), batch 4 (`sr-observer-measurements`:
lightlike asymptote/horizon; guided-ray Sagnac; Ehrenfest-type/Bell
discussion), batch 14 (`em-minkowski-mathematical-prerequisites`: §7.4.6
acceleration and Rindler horizon). All of those destinations resolve to
current items of this pair (hyperbolic lemma, Rindler theorem, ring theorem,
Bell thought experiment, B examples) or, for the §3.6 formulas, to the pinned
hyperbolic/logarithm imports the pair consumes. Within the current scaffold no
later in-run item cites this pair as a supplier and no page requires it except
its B companion, so the pair carries no downstream content obligations of its
own; scope sufficiency is judged against its design, not against absent
consumers.

## Source coverage

`node tools/physics-support/coverage-checklist.mjs research/physics-em-sr-40-2026-10-08-batch-10.coverage.json --require-destination`
reports 1 page, 39 harvested results, 0 errors, 0 warnings. Five sources carry
`fetch_verified` stamps: Crowell *Special Relativity* rev. 2020-12-10
(10,728,180 bytes, 246 pages; §§3.5.2, 3.9.1-3, 7.1, 8.1.1-8.1.4, 9.5.1-9.5.5),
Blau *Lecture Notes on General Relativity* (4,259,963 bytes, 1052 pages;
§§1.2-1.3, 3.4), Giulini arXiv:math-ph/0602018v2 §5.5 (614,463 bytes,
66 pages), and the two Wikipedia treatments (Rindler coordinates; Sagnac
effect) used as secondary context. Every `included`/`inline` row lands on a
pair item; `deferred` rows carry resolving destinations
(`sr-observer-measurements` for accelerated simultaneity, the congruence
definition, the rigidity-equation equivalence and the smooth local
Herglotz-Noether classification); `out-of-scope` rows are reasoned
(Hafele-Keating empirical report, GPS/rotating global charts, Unruh/quantum
effects, alternative accelerated charts, fiber/phase and moving-source Sagnac,
history attribution). The pair asserts no measured value, no uncertainty and
no statistical inference; the scope clauses of the definition, both theorems,
the thought experiment and all five B items exclude apparatus, medium and
empirical content, and all numerical data are exact rationals or exact
logarithms.

Statistical-evidence check (`../PHYSICS-CONTENT-MODEL.md`, "Statistical evidence
and the double-slit example"): no item of this pair records observations,
samples, counts or uncertainties, and none draws an empirical or framework-level
conclusion. The pair is a conditional-model pair; its empirical rows
(Hafele-Keating report, Sagnac 1913 and later tests, GPS timing) are excluded
with reasons and any downstream use must keep that qualification.

The `prose-scaffold.md` row 39 records the historical assessment "Crowell
substantive SR treatment; Tong supplies a restricted GR near-horizon
application, not an independent complete accelerated-SR treatment. OPEN
second-treatment shortfall." The current run resolves that shortfall: the read
Blau §§1.2-1.3 and 3.4 give a full independent treatment of four-velocity
normalisation, constant proper acceleration, Rindler coordinates, their
domain and the horizon, and Giulini §5.5 independently supplies the rigidity
material; the coverage checklist passes with 0 warnings.

## Prerequisites (unmet-prerequisite screening)

- Item level: the 11 items carry 176 `deps` edges with 58 distinct targets.
  29 targets are in-run scaffold items on six pages, all at earlier or equal
  page order with in-page supplier-before-consumer order
  (`sr-spacetime-primitives` 7, `sr-observer-measurements` 6,
  `sr-worldlines-and-clocks` 5, same-page items 5, `sr-causality-and-signals`
  4, `sr-lorentz-transformations` 2). 29 targets are pinned mathematical
  imports: every one is present in `items/` and appears on a published
  imported `library/` page (checked against `math-imports.json`). 0 unresolved,
  0 later-page dependencies, 0 B-page dependencies, 0 mathematics-to-physics
  dependencies, and no `forward_refs`, `external_refs` or `justified_by` on
  any of the 11 items.
- Page level: the A page requires three earlier in-run pages
  (`sr-causality-and-signals` 217, `sr-proper-time-comparisons` 219,
  `sr-light-and-doppler` 221) plus the published mathematical page
  `sine-cosine-and-the-definition-of-pi`; the B page requires the A page. All
  resolve; the run-mode frontier `validate-plan` passes with no
  `undeclared-prereq` or unresolved finding for pages 227/228, and the
  Step-1 drift review records VERDICT no-drift for this page.
- Consumer screening: a run-wide scan of all 80 manifest pages and 471 items
  finds no other item depending on this pair's items and no cross-batch
  supplier edge from this pair; the B page is a leaf. The pair therefore has
  no unmet prerequisite arising from consumer demand.
- Result: **no unmet prerequisite found** — nothing required by this pair is
  absent from both the published library and the current scaffold. Uncertain
  and not claimed here: the internal proofs of the pinned imported suppliers
  were not re-audited (they are read-only imports and outside Step-3a scope);
  this finding concerns presence, identity, placement and publication status.

## Observations (non-blocking, for the owner)

- **Ehrenfest / rigid-body size-restriction wording.** The batch-4 coverage
  row "Ehrenfest-type discussion and the acceleration/size limitation of rigid
  bodies" is deferred to `sr-accelerated-observers`. The Bell/breaking half is
  realized here (`texp-sr-bell-rockets-thread`, with the explicit
  no-elasticity/no-breaking caveat), and the rigid-rotation kinematic core is
  realized by `pthm-sr-guided-ring-sagnac-delay` (i)/(iv) (`|Omega|R < c`,
  ambient rest-distribution non-integrability, fixed-height-cylinder rest
  lines with global holonomy) with the primary home SR04
  `thm-sr-fermi-walker-and-rigid-observer-examples` (c). No item of this pair
  carries an explicitly labelled Ehrenfest/size-restriction statement, and the
  SR10 design does not reserve one; the content is present in the run in
  conjugated form. If the owner wants a named treatment, a brief page remark
  or an explicit routing note on the batch-4 row would close the wording gap.
  This does not affect the scope sufficiency of the pair.
- **Stale shortfall line.** `prose-scaffold.md` line 39 still prints "OPEN
  second-treatment shortfall" for SR10; the current coverage resolves it with
  the fetch-verified Blau treatment (see Source coverage). The plan-side row
  is historical research text, but a one-line refresh would prevent a
  downstream reader from treating it as current.

## Checks run (exact)

| Check | Command | Result |
|---|---|---|
| coverage | `node tools/physics-support/coverage-checklist.mjs research/physics-em-sr-40-2026-10-08-batch-10.coverage.json --require-destination` | 1 page, 39 harvested, 0 errors, 0 warnings |
| manifest deps | `node tools/physics-support/manifest-deps.mjs research/physics-em-sr-40-2026-10-08-batch-10.pages.json` | 11 items, 0 normalized, 0 errors |
| content policy (run scope) | `node tools/physics-support/content-policy.mjs research/physics-em-sr-40-2026-10-08-batch-*.pages.json --manifest-only` | 471 scoped items, 0 errors, 0 warnings |
| plan validator (run mode) | `node tools/physics-support/validate-plan.mjs research/plan-spec.json --run physics-em-sr-40-2026-10-08` | exit 0; no finding for pages 227/228 (remaining redundant-prereq warnings are pre-existing EM pages) |
| frontier plan gate | `node tools/physics-support/frontier-item-gate.mjs --run physics-em-sr-40-2026-10-08 --tool validate-plan` | OK; 0 undeclared-prereq, 0 unresolved ids among the 80 pages |
| dep resolution / domain / consumer scan | scripted scan of all 80 manifests, `items/`, `library/` and `math-imports.json` | 58/58 targets resolve; 29/29 math imports pinned and published; 0 math->physics, 0 B-page, 0 later-page, 0 in-run consumer edges |
| step 3a state | `node tools/physics-support/step3-decisions.mjs check --run physics-em-sr-40-2026-10-08 --phase scope` | this pair listed as `current scope review required` (expected; closed by this decision) |
| arithmetic spot-checks (scope-level) | direct substitution of the manifest's quoted formulas | radar events at `log 2` and `log(3/2)` `(5rho_0/8, 13rho_0/8)`, `(65rho_0/72, 97rho_0/72)`; Sagnac `15 pi R/(4c)`, `3 pi R/c`, holonomy `15 pi R/(8c)` and factor 2; Bell `gamma^3 q' q''/c^3 = 75 alpha/(64c^2)` at `beta = 3/5` — all consistent; independent proof audit remains with later stages |

## Decision

`sufficient` — the planned definitions (proper acceleration; the consumed
congruence/kinematics, radar-protocol and simultaneity suppliers), results
(hyperbolic motion and Rindler flow-line identification, material-metric
evolution and Born-rigid preservation, the Rindler chart domain with its exact
horizon and radar restrictions, the guided-ring Sagnac delay with its
holonomy relation, the Bell-thought-experiment kinematics with the material
caveat) and the five worked examples/counterexamples adequately cover the
intended SR10 subject, with all 39 source rows disposed, the second-treatment
shortfall resolved, and every item and page prerequisite resolved against the
published library or the current scaffold. Recorded in
`research/physics-em-sr-40-2026-10-08-step3a-review-sr-accelerated-observers.json`
(the record binds the current pair scope hash). No owner proceed, merge or
enrich action is requested; the two wording observations above are optional
presentation follow-ups.
