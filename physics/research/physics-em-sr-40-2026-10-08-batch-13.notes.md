# Batch 13 scaffold notes — Em Elementary Mathematical Prerequisites

Run `physics-em-sr-40-2026-10-08`, role beta, label `batch-13`. Owned pair:
`em-elementary-mathematical-prerequisites` (A, order 305) and
`em-elementary-mathematical-prerequisites-examples` (B, order 306), category
`classical-electromagnetism-mathematics`, library `mathematics`. 13 A items and
1 B example, all pre-existing inventory ids reused unchanged.

Artifacts written by this batch:

- `research/physics-em-sr-40-2026-10-08-batch-13.pages.json` (manifest, 14 items, each with `domain`, `deps`, `dependency_roles`, `dependency_level`).
- `research/physics-em-sr-40-2026-10-08-batch-13.coverage.json` (source harvest, 10 sources, 32 rows).
- `research/physics-em-sr-40-2026-10-08-batch-13.cross-batch-dependencies.json` (empty array; see below).
- `research/physics-em-sr-40-2026-10-08-step1-<item>.json` for each of the 14 items.
- this notes file.

Design and authority read in full before construction: `CLAUDE.md`,
`SCHEMA.md`, `WORKFLOW.md`, `../PHYSICS-CONTENT-MODEL.md`, the owner authoring
direction `research/physics-em-sr-40-2026-10-08-owner-authoring-direction.md`,
the design section `research/plan-classical-electromagnetism-track.md` L14, and
the required source designs `mathematical-prerequisites.md` (M01-M08, M17),
`proposed-inventory.json`, `completed-expansion-arguments.md` (opening map),
`definition-contracts.md`, `mathematical-example-verifications.md`,
`core-conditional-proofs.md`/`prose-scaffold.md` where cited.

## Design vs plan

The plan's `requires` list for the A page is identical to the design's declared
earlier prerequisites (same 14 page ids, same order 305/306). The inventory's
item ids, kinds, and dependency levels are preserved. No design/plan conflict
needed recording. The binding owner direction does not touch this pair; its one
pair-level override concerns the Carleman/UCP chain on
`em-boundary-and-spectral-prerequisites`.

## Dependency verification and changes

All 53 out-of-run suppliers used by the 14 items are published items on earlier
published pages (checked file-by-file; every `deps` target resolves, and
`validate-plan`/`content-policy` report no missing, forward, or B-leaf edge).
Each item was built once in prerequisite order. Deviations from the inventory's
dep lists, all verified against the actual published statements:

- `def-em-complex-plane-wave`: added `def-complex-exponential`,
  `def-complex-conjugate-real-imaginary-part-and-modulus`,
  `def-complex-numbers-and-arithmetic`; the object cannot be written without
  the exponential and conjugation definitions.
- `def-em-moving-patch`: added
  `def-type-i-type-ii-and-elementary-green-regions`,
  `def-positive-orientation-for-elementary-region-boundaries`,
  `def-admissible-regular-parametrized-surface-patch` for the "compact finite
  elementary Green region with oriented boundary" and patch language.
- `def-em-surface-distribution`: added
  `def-regular-distribution-from-a-locally-integrable-function`,
  `def-surface-integral-on-a-compact-c-one-hypersurface`,
  `lem-surface-integral-is-independent-of-c-one-boundary-charts`,
  `def-bounded-c-one-domain-boundary-charts-and-outward-normal`,
  `def-bounded-piecewise-c-one-euclidean-domain`, `def-countable-choice`.
  A first draft left the ambient open set undefined; repaired.
- `lem-em-continuous-localization`: added the measure/integral suppliers
  (`def-integral-over-a-measurable-set`,
  `prop-order-and-scalar-rules-for-the-nonnegative-integral`,
  `thm-monotonicity-of-the-integral`,
  `cor-continuous-functions-are-borel-measurable`, `def-metric-ball`,
  `def-metric-continuity`) and the surface-flux suppliers for the disk clause.
- `lem-em-coulomb-dipole-remainder`: added
  `thm-newton-leibniz-with-interior-derivative` (the design proof applies the
  fundamental theorem twice), `thm-integral-triangle-inequality`,
  `thm-monotonicity-of-the-integral`, `def-l-one-of-a-measure`,
  `def-integral-over-a-measurable-set`, `def-metric-ball`.
- `lem-em-parameter-integrals`: added `cor-mean-value-theorem` (the
  difference-quotient representation), the Lebesgue integral suppliers, and
  `def-surface-integral-on-a-compact-c-one-hypersurface` for the surface
  clause.
- `lem-em-point-current-continuity`: added
  `def-test-function-space-d-of-an-open-set` and
  `thm-newton-leibniz-with-interior-derivative`.
- `lem-em-quadratic-stress-identity`: added
  `def-jacobian-matrix-and-gradient`, `def-directional-and-partial-derivatives`;
  the Kronecker and Levi-Civita symbols are defined explicitly in the item
  statement (the library has no separate convention item).
- `lem-em-interface-derivatives`: added the distribution, domain, divergence
  theorem and surface-integral suppliers plus `def-countable-choice`.
- `lem-em-joint-smooth-potentials`: added `def-star-shaped-open-subset-of-rn`,
  `def-vector-potential-of-a-c1-vector-field`,
  `def-closed-and-exact-c1-vector-fields`,
  `thm-differentiation-under-the-integral-sign-on-a-compact-rectangle`. A
  first draft claimed joint `C^{k+1}` for the scalar witness; for `k=1` the
  mixed second derivatives are not controlled by `C^1` data, so the statement
  was corrected to joint `C^k` with spatial gradient `-C` (and `C^infinity` for
  smooth data).
- `lem-em-moving-flux`: added the line-integral, boundary-chain, orientation and
  divergence/curl suppliers plus `def-countable-choice`.
- `lem-em-interface-wave-linear-system`: dropped the inventory's four generic
  calculus deps (`def-ck-euclidean-maps-and-diffeomorphisms`,
  `def-euclidean-inner-product`, `thm-algebra-of-derivatives`,
  `thm-chain-rule-for-total-derivatives`) because the lemma is pure 2x2 algebra
  and uses none of them; added `thm-of-square-roots` and the complex
  conjugation/arithmetic suppliers. The claim and the proof route are
  unchanged, and this is the only place where inventory dep metadata was
  narrowed.
- B example: kept the inventory's deps (all 13 A items).

Computed `dependency_level`s (checked with the tool's own `dependencyLevels`
on this batch): eight level-0 items, four level-1 items
(`lem-em-interface-derivatives`, `lem-em-joint-smooth-potentials`,
`lem-em-moving-flux`, `lem-em-period-average`), one level-2 item
(`lem-em-interface-wave-linear-system`), and the level-3 B example; labels equal
the computed values, no in-run cycle.

## AC_omega declarations and exact uses

Six items state the Axiom of Countable Choice and list `def-countable-choice`
with role `mathematical-premise`:

- `def-em-surface-distribution`, `lem-em-parameter-integrals` (surface clause),
  `lem-em-interface-derivatives`, `lem-em-moving-flux`: the surface-integral
  definition and the divergence theorem for piecewise C1 domains are published
  under the `AC_omega` convention.
- `lem-em-continuous-localization`: the positive finite measure of Euclidean
  balls is published under countable choice.
- `lem-em-coulomb-dipole-remainder`: the published far-field decay theorem
  assumes countable choice.

The B example inherits that qualification through `lem-em-moving-flux`. No item
uses the full Axiom of Choice; `def-countable-choice` itself is the sharp
assumption named by the published statements.

## Source harvest

Ten independent treatments (verified full text, all stamped):

| source | kind | locator |
|---|---|---|
| Hunter, Notes on PDE (UC Davis) | lecture-notes | sections 1.10, 1.12, 2.7 |
| Lebl, Basic Analysis II | textbook | section 9.1, Theorem 9.1.1 |
| M. E. Taylor, Introduction to Analysis in Several Variables | monograph | sections 3.2, 4.4, 5.2 |
| Dyatlov, lecture notes 18.155 (MIT) | lecture-notes | sections 2.1-2.3, 3.1-3.2 |
| CLP-4 Vector Calculus (UBC), section 4.1 | course-notes | through Theorem 4.1.16 |
| CLP-4 Vector Calculus (UBC), section 4.4 | course-notes | Theorem 4.4.1 with 4.4.1-4.4.2 |
| Galili-Kaplan-Lehavi, Am. J. Phys. 74, 337 (2006) | paper | Appendix, Eqs. (A1)-(A3) |
| Teitel, PHY 415 (Rochester), Unit 2-4 | course-notes | Eqs. (2.4.1)-(2.4.16) |
| Review of Phasor Notation (San Diego) | course-notes | Chapters on complex time-harmonic representation and time averages |
| Fitzpatrick, Electromagnetism (UT Austin) | lecture-notes | Reflection at a dielectric boundary, Eqs. (1210)-(1232) |

Harvest totals: 32 rows — 8 `included`, 2 `inline`, 11 `already-published`,
11 `out-of-scope` (each with a specific reason). Items
`def-em-surface-distribution`, `lem-em-continuous-localization`,
`lem-em-point-current-continuity`, `lem-em-interface-derivatives` and
`lem-em-joint-smooth-potentials` have no `included` row: they are local
assemblies proved from the published prerequisite chain (their sources are
recorded as `already-published`/`inline` rows for those suppliers), and no
treatment in this pool states them verbatim. `coverage-checklist` emits the
advisory `coverage-low-yield` warning for the 8/32 ratio; the declines are the
`already-published` supplier rows and the `out-of-scope` regularity/example/
interpretation sections, and Alpha may confirm them at Step 5.

## Checks run (actual results)

- `manifest-deps` (batch file): 14 items, 0 missing, 0 errors; whole-run
  invocation over all 40 manifests at this instant: 46 items, 0 errors
  (other batches are still populating their inventories).
- `content-policy --manifest-only` (batch file): 14 scoped items, 0 errors,
  0 warnings; whole-run invocation: 46 scoped items, 0 errors, 0 warnings.
- `item-dependency-levels` (batch pages via the tool's exported
  `dependencyLevels`): no errors; labels equal computed levels. The whole-run
  `check --run` invocation reports 74 `empty scaffold inventory` errors, all
  for other batches still in flight and none for batch 13.
- `coverage-checklist --require-destination` (batch coverage): 1 page, 32
  harvested results, 0 errors, 1 advisory warning (low yield, above).
- `source-fetch-check --stamp`: 10/10 sources fetch-verified (10 newly
  stamped); check mode: 10/10 resolved, 0 drops.
- `url-sweep --coverage <batch> --recover --fail-on-dead` (output written to
  `/tmp`, not engine state): 10/10 live, 0 failed, 10 citation decisions.
- `step1-decisions`: all 14 records re-verified closed through the tool's own
  `step1Decision` after the final edits.
- `validate-plan research/plan-spec.json`: exit 0 (the run's page items are not
  spliced into the plan yet; page-level checks only).
- `physics-check --plan research/plan-spec.json`: 0 errors, 26,654 items
  checked.
- `extcheck`: 0 recorded-not-proved items, 0 consequences.
- `frontier-dependency-ledger refresh`: this batch's input file is present
  (empty array). The refreshed run ledger lists 69 cross-batch edges; three
  declare this A page as supplier — `em-maxwell-integral-and-constraints`
  (batch 24), `em-energy-momentum-and-angular-balance` (batch 32),
  `em-variational-mathematical-prerequisites` (batch 15) — each declared by the
  consuming batch's own `requires`. Those reviews belong to those consumer
  batches; this batch has no cross-batch consumer edges of its own.

Whole-run gates are not yet green because the other 39 batches are still in
flight: `step1-decisions check --run` lists their items as unrecorded,
`item-dependency-levels check --run` reports their empty scaffold inventories,
and `frontier-dependency-ledger --require-reviewed` requires all 40 batch input
files and edge reviews. Nothing in those lists is a batch-13 defect.

## Unresolved findings and published observations

- Observation for the canonical ledger (not an escalation, no repair attempted
  on read-only published content): three published items state the `AC_omega`
  assumption in their defining text but do not list `def-countable-choice`
  directly in `deps`: `thm-divergence-theorem-for-bounded-piecewise-c-one-domains`,
  `def-surface-integral-on-a-compact-c-one-hypersurface`,
  `def-bounded-piecewise-c-one-euclidean-domain`. In all three the assumption
  is explicit in the statement and `def-countable-choice` is transitively
  reachable through
  `def-bounded-c-one-domain-boundary-charts-and-outward-normal`, so no consumer
  is misled; this batch's affected items carry the assumption and the dep
  explicitly. Recommend a metadata-hygiene note, not a mathematical repair.
- No defective actual prerequisite was found among the 53 published suppliers
  used: statements, hypotheses, directions and conventions match their uses in
  the scaffolded arguments (full statements read; proofs consulted where the
  proof route depends on them).
- No escalation recorded; all 14 items are `ready`. Owner/operator
  reconciliation and the engine gate follow, and Step 3 provides the
  independent mathematical review.
