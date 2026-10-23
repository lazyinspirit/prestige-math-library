# Batch 39 authoring notes

Run: `fluid-dynamics-all-47-2026-10-23`  
Assignment: batch 39, `fd-g01` / `fd-g01-examples`, draft mathematics pages.

The original dispatch result records exit code 0, but its terminal text says the shell runner stopped before reading the plan or authoring because bubblewrap could not create `/tmp/.git` (`No space left on device`). The owner’s current direction releases that operational hold. This continuation authored the assigned items and evidence; it does not claim independent review or publication.

## Plan comparison, inventory, and levels

The controlling G01 section in `research/plan-fluid-dynamics-refresh-track.md` specifies the title, category `fluid-dynamics-mathematics`, library `mathematics`, A/B IDs `fd-g01` and `fd-g01-examples`, orders 683/684, and A-page requirement `fd-x01`. The corresponding `research/plan-spec.json` page metadata agrees. Its item arrays are still empty scaffolding, so they do not supply a competing item inventory; the controlling design’s three A items and one B example were materialized in the batch manifest. No claim-level plan/design conflict remains.

The assigned input `research/fluid-dynamics-all-47-2026-10-23-batch-dependency-levels.json` places batch 39 at level 1 after batch 5. The current graph still has batch 5 at level 0 and batch 39 at level 1 with `requires: ["5"]`.

| Item | Page | Direct item dependencies | Level |
|---|---|---|---:|
| `def-fd-rotating-stratified-shallow-equations` | `fd-g01` | `def-fd-x00` | 1 |
| `thm-fd-stratified-linear-energy` | `fd-g01` | `def-fd-rotating-stratified-shallow-equations` | 2 |
| `thm-fd-shallow-water-smooth-energy` | `fd-g01` | `def-fd-rotating-stratified-shallow-equations` | 2 |
| `ex-fd-geophysical-rest-state` | `fd-g01-examples` | `def-fd-rotating-stratified-shallow-equations`; `thm-fd-shallow-water-smooth-energy` | 3 |

The example has an explicit dependency on the local equation-family definition because it checks both the stratified and shallow-water rest states. The proposed design’s shallow-water theorem edge alone would not record its stratified-equation use. Recalculation over the current batch 5 and batch 39 `items` plus `examples` gives 15 items and no level errors; the four assigned levels above match. No in-batch cycle was found.

Both page files contain YAML frontmatter only. `fd-g01` lists the three A items and requires `fd-x01`; `fd-g01-examples` lists the example under `examples` and requires `fd-g01`. There is no page summary or page body.

## Authored mathematical claims and conventions

- `def-fd-rotating-stratified-shallow-equations` defines two separate classical pointwise systems. The 3D branch is the constant- N rotating linear Boussinesq system on the flat periodic quotient `T^3`, with `N>0`, `nu,kappa>=0`, and continuous derivatives through those used; the 2D branch is the inviscid one-layer flat-bottom shallow-water system on `T^2`, with positive total depth and `g>0`. It defines the Cartesian differential operators, rowwise tensor divergence, vector Laplacians, cross-product rotations, periodic cells and Lebesgue measure. It records SI dimensions, the rotating-basis convention `f=2 Omega`, the effective potential, the Boussinesq applicability assumption, and that the torus is an idealization. It makes no compressible-limit, empirical-calibration, or measured-fluid claim.
- `thm-fd-stratified-linear-energy` proves, for every smooth periodic solution of the displayed constant-coefficient equations, the exact time-integrated identity for `1/2 integral (|u|^2+b^2/N^2)`, including nonnegative viscous and buoyancy-diffusion losses. The proof cancels the buoyancy exchange, Coriolis work, and pressure work, then removes periodic fluxes by the one-dimensional fundamental theorem of calculus. The inviscid conservation statement is conditional on that model; the text disclaims nonlinear/compressible and arbitrary-discretization conclusions.
- `thm-fd-shallow-water-smooth-energy` proves the pointwise flux identity for smooth positive-depth periodic solutions of the stated flat-bottom inviscid system and then integrates it over the periodic cell. The derivation uses the conservative-to-material form, the skew Coriolis cancellation, continuity, and the product rule. It explicitly excludes claims about topography, wetting/drying, friction, multilayer models, hydrostatic error, or arbitrary discretizations.
- `ex-fd-geophysical-rest-state` checks the zero stratified state and the constant-depth resting shallow-water state directly in their equations. The first energy is zero; the second is `2 pi^2 g H^2`, using `area(Q_2)=(2 pi)^2`. These are mathematical states, not observations.

All items have `domain: mathematics`, `library: mathematics`, and explicit mathematical-premise roles for their item dependencies. No additional local lemma was needed: the energy identities are proved from the locally stated equations and elementary product rules. No diagram is needed for these pointwise energy calculations. Each statement/definition/example section is link-free; citations and supplier links follow in its immediately adjacent `## ... references` section. The two pages have no Markdown bodies.

## Supplier inspection and readiness

The current `items/def-fd-x00.md` and its batch 5 manifest row were inspected. Its definition requires a nonempty open time interval and nonempty open Cartesian domain `Omega subset R^3`, states pointwise classical equations, uses velocity `C^1` in time and `C^2` in space and pressure `C^1` in space, and fixes Cartesian gradient/divergence/Laplacian, componentwise vector Laplacian, row-component Jacobian, and Euclidean conventions. The G01 stratified branch uses a periodic lift with `Omega=R^3` and has matching regularity. `def-fd-x00` does not define the 2D shallow-water branch; G01 defines that branch locally.

The live `def-fd-x00` dependency list has six imported mathematical definitions: `def-divergence-and-curl-of-a-c1-vector-field`, `def-laplacian-of-a-c2-function`, `def-jacobian-matrix-and-gradient`, `def-euclidean-inner-product`, `def-scalar-and-vector-line-integrals-along-piecewise-c1-paths`, and `def-oriented-unit-normal-and-flux-of-a-surface-patch`. The current batch 5 manifest is controlling; its expanded closure differs from the older proposed-inventory entry. G01 uses the Cartesian derivative, Laplacian, Jacobian/vector, and norm conventions restated in its own definition. The line-integral and surface-flux clauses remain part of the supplier’s declared closure but are not used in the G01 proofs. Imported mathematical bytes were left unchanged.

`loadStep1Record` indexes `def-fd-x00` as an item on `fd-x01`; `step1Decision` reports `Readiness record missing`. Its draft label and pending precheck are not the basis of escalation. The current owner exception applies to stale records for already published suppliers from earlier runs; `def-fd-x00` is a draft item in this same run, so that exception does not apply. The page/interface checks pass, but its required current-run readiness input is absent. Accordingly, the four assigned Step 1 records are `escalated`, not `ready`; their exact records are `research/fluid-dynamics-all-47-2026-10-23-step1-<item-id>.json`. The conditional mathematical arguments remain authored and were not marked false or rejected.

The live `fd-x01` page has the planned identity and metadata, its eight-item A inventory includes `def-fd-x00`, and its page prerequisite is the published divergence-theorem/classical-Stokes page specified by plan-spec. The `fd-g01 -> fd-x01` page interface and `def-fd-rotating-stratified-shallow-equations -> def-fd-x00` item interface are the two rows in `research/fluid-dynamics-all-47-2026-10-23-batch-39.cross-batch-dependencies.json`, both `verified` for scoped interface matching only. Neither row asserts independent proof acceptance. The transitive page prerequisite is recorded here rather than as an unsupported extra cross-batch edge.

## Source reading and harvested results

Full relevant source passages were inspected; exact per-heading dispositions and item mapping are in `research/fluid-dynamics-all-47-2026-10-23-batch-39.coverage.json`. The A page has three independent lecture-note treatments; the B page carries two relevant treatments for its model context. All 11 harvested headings are disposed as `included` on the appropriate authored item. B-page rest-state values are derived locally, not attributed to a source’s numerical example.

- Geoffrey K. Vallis, *Fluid Dynamics of the Atmosphere and Ocean*, University of Exeter full lecture notes, https://empslocal.ex.ac.uk/people/staff/gv219/ecmm719/lecnotes18w.pdf. Inspected §1.6.2–1.6.3, equations (1.72)–(1.78), pp. 15–17, for stratification/Boussinesq conventions and energy transfer; §2.4.2, equations (2.55)–(2.59), pp. 38–39, for shallow-water energy; and §2.6.3, equations (2.105)–(2.106), p. 49, for rotating shallow-water context. Supports the definition, both energy theorems, and the worked example’s model context. Vallis’s Boussinesq energy uses a more general buoyancy-potential form than the exact positive constant-N perturbation energy proved here.
- Darryl D. Holm, *Ideal shallow water dynamics in a rotating frame*, Imperial College London full lecture notes, https://www.ma.ic.ac.uk/~dholm/classnotes/MPE2015-RSWlectures-6Dec.pdf. Inspected §1.1, equations (1.1)–(1.4), pp. 3–4, and §1.4, equation (1.14), p. 5, with the complete worked verification in Answer 1, p. 6. Supports the rotating equation family, the nonlinear energy proof, and the example’s model context. Holm’s treatment is nondimensional and includes variable rotation/topography with a no-normal-flow boundary condition; G01 states its own dimensional flat-bottom periodic specialization.
- Paola Rizzoli, MIT OpenCourseWare 12.802, Lecture 12, *Shallow water equations with rotation — Poincaré waves*, https://ocw.mit.edu/courses/12-802-wave-motion-in-the-ocean-and-the-atmosphere-spring-2008/b480aaaa3a6dff999df6d5007b5b73f6_MIT12_802S08_lec12.pdf. Inspected the complete relevant equation reduction on pp. 1–4. Supports the rotating shallow-water formulation, not the nonlinear energy proof.

`source-fetch-check` verifies all five page/source records (three unique URLs): Vallis, 111 PDF pages, 2,581,657 bytes, SHA-256 prefix `b7c47188b679b451`; Holm, 34 pages, 448,974 bytes, prefix `e8c3d7b331fb6188`; MIT, 9 pages, 235,375 bytes, prefix `3a0e72d672f4efb6`. Each recorded retrieval succeeded on its initial attempt; no selected source was dropped and no retrieval-failure `source_resolution` record was needed. The exploratory Sutherland-book retrieval is not cited and is not claimed as reading evidence. None of these sources establishes that an observed ocean or atmosphere realizes the equations.

## Contracts and checks

`research/fluid-dynamics-all-47-2026-10-23-batch-39.proof-contracts.json` contains contracts for all four assigned items, generated from their current arguments with the actual phase steps, claims, exact supplier excerpts, inputs, boundary cases, and applicable finite checks.

Final scoped checks:

- `precheck`: 3 proof-bearing items checked, 0 failing; the definition has no proof section by design.
- `proof-layout`: 4 items, 9 proof steps, 0 defects.
- `rendercheck`: all 4 items and both pages, 6 files, pass.
- focused `depcheck`: 4 selected items; prerequisite-cycle context covered 584 items and 111 pages; pass.
- authored `content-policy`: 4 items, 0 errors and 0 warnings.
- strict proof contracts: 4/4 items, 0 errors and 0 warnings.
- `coverage-checklist`: 2 pages, 11 harvested headings, 0 errors and 0 warnings.
- `source-fetch-check`: 5/5 records fetch-verified; 5/5 resolved, 0 drops.
- scoped batch 5 + 39 dependency calculation: 15 items, no errors; assigned levels 1/2/2/3.
- scoped statement-link and page-body inspection: all four complete statement sections uninterrupted; both pages YAML-only.

Run-wide checks expose unrelated owner-scope blockers and were not repaired here. `item-dependency-levels check` reports 42 errors across 94 pages/205 items: 34 empty page inventories (`fd-f03`/`fd-f03-examples`, `fd-px01`/`fd-px01-examples`, `fd-px02`/`fd-px02-examples`, `fd-px03`/`fd-px03-examples`, `fd-s03`/`fd-s03-examples`, `fd-ps01`/`fd-ps01-examples`, `fd-ps02`/`fd-ps02-examples`, `fd-w02`/`fd-w02-examples`, `fd-pn01`/`fd-pn01-examples`, `fd-pn02`/`fd-pn02-examples`, `fd-pda01`/`fd-pda01-examples`, `fd-ples01`/`fd-ples01-examples`, `fd-pg01`/`fd-pg01-examples`, `fd-pmp01`/`fd-pmp01-examples`, `fd-l01`/`fd-l01-examples`, `fd-bl01`/`fd-bl01-examples`, and `fd-pbl01`/`fd-pbl01-examples`) plus eight out-of-batch label mismatches: `post-fd-boundary-data` 0/2, `pthm-fd-cauchy-momentum-angular` 0/3, `pthm-fd-control-volume-balances` 0/3, `pthm-fd-energy-decomposition` 1/3, `post-fd-weak-balances` 0/3, `pthm-fd-conservation-jump-laws` 1/4, `ex-fd-conduction-energy-entropy` 2/4, and `cex-fd-vacuum-velocity-determination` 0/1 (recorded/computed levels). None is an assigned batch 39 item.

`proof-contract-coverage` is blocked by the empty/invalid frontier inventory on `fd-f03`. `batch-dependency-levels check` reports the shared run record stale: its recorded input hash is `fefdbc4fe419c0294933b0ec683078783b032d4ac4eb25a81bd183a6b9aa8754`, while current manifests hash to `c70a9bbf722188ed06230ba4864194ebd334111b748097dec990456b88ed9c68`. Its stored batch rows still match current rows for batches 5 and 39 (`5: level 0`; `39: level 1, requires 5`). The shared dependency-level file was left untouched.

After the four batch 39 readiness records were written, a final `loadStep1Record` reload encountered a separate current-run parse error in `research/fluid-dynamics-all-47-2026-10-23-batch-17.pages.json`: `Unexpected non-whitespace character after JSON at position 34372 (line 603 column 2)`. The four new batch 39 readiness JSON files each parse and contain the intended `escalated` decision. This out-of-scope manifest prevents a fresh whole-run readiness snapshot; it was not edited here.

## Remaining action

The only batch 39 readiness blocker is the missing current Step 1 record for same-run supplier `def-fd-x00` in batch 5. The owner should resolve that supplier record, then handle the already escalated batch 39 records under the native readiness workflow. Run-wide inventory/level/contract-coverage blockers above also require owner coordination outside this assignment. All authored content remains draft.
