# Step 3a scope review — pair `em-maxwell-integral-and-constraints` / `em-maxwell-integral-and-constraints-examples`

- Run: `physics-em-sr-40-2026-10-08`; role: alpha (Step 3a scope review);
  label `step3a-pair-em-maxwell-integral-and-constraints-1ad676bb707d55af`;
  batch 24; 2026-10-09.
- A page: `em-maxwell-integral-and-constraints` (order 327, category
  `classical-electromagnetism`, `library: physics`, 9 items).
- B page: `em-maxwell-integral-and-constraints-examples` (order 328, 2 leaf items).
- Scope decision: **sufficient** for the A page, recorded with
  `tools/physics-support/step3-decisions.mjs record-scope` as
  `research/physics-em-sr-40-2026-10-08-step3a-review-em-maxwell-integral-and-constraints.json`.
- No omission found; no merger or enrichment recommended. No owner action is
  requested for the scope itself. The one `redundant-prereq` warning naming this
  page (`em-elementary-mathematical-prerequisites` reached through
  `em-primitives-and-postulates`) is the inherited owner-held warning of
  batch-24 note finding 4.

## Inputs read

- `research/plan-spec.json` entries 327/328 (and every `requires` target's plan
  entry); `research/plan-classical-electromagnetism-track.md` section "Integral
  Maxwell and constraints" (L1710–L1742, reservation block quoted from
  `proposed-inventory.json`).
- Design carriers: `research/first-principles-2026-10-03/classical-electromagnetism/scaffold/`
  `proposed-inventory.json` (pair `em-maxwell-integral-and-constraints`, six design
  A items with deps/roles/levels, two B items), `definition-contracts.md`
  L47–L60 (`def-em-fixed-test-geometry`, `def-em-weak-sources`),
  `core-conditional-proofs.md` K1 L11–L55, `worked-example-verifications.md`
  X1 L8–L22, `prose-scaffold.md` pair row 02 (6/2).
- Run records: batch-24 `.pages.json`, `.coverage.json`, `.notes.md`,
  `.cross-batch-dependencies.json` (42 rows); the 11
  `physics-em-sr-40-2026-10-08-step1-<item>.json` readiness records (all `ready`);
  `research/physics-em-sr-40-2026-10-08-owner-authoring-direction.md` (fifth and
  sixth reconciliations bear directly on this pair); `research/physics-em-sr-40-2026-10-08-scope-ledger.json`;
  the current step3b task revision `...-step3b-pair-em-maxwell-integral-and-constraints-f77468eabdb29794.task.md`.
- Sibling reviews for format and cross-checks:
  `...-step3a-pair-em-elementary-mathematical-prerequisites.md`,
  `...-step3a-pair-em-waveguides-and-cavities.md`, and their recorded decisions.
- Published and in-run suppliers: the batch-13 and batch-23 manifest statements
  used by this pair; `items/` and `research/math-imports.json` for the imported
  mathematical items; consumer statements in batches 25–40.
- Checked with `tools/physics-support/step3-decisions.mjs` (scope receipt
  semantics): before this review the pair reported "current scope review
  required", and no `step3a-review-em-maxwell-integral-and-constraints.json`
  existed. An earlier step3a task revision (`...-17bbc4340600a48f.task.md`,
  00:18) predates the current manifest (which carries the added postulate and
  lemmas) and was never dispatched; nothing is superseded.

## 1. Design vs scaffold

The reservation (`plan-classical-electromagnetism-track.md` L1710–L1742;
`proposed-inventory.json` pair `em-maxwell-integral-and-constraints`, declared
`A_item_count` 6, `B_item_count` 2, cap 100) promises exactly:
`def-em-fixed-test-geometry`, `def-em-weak-sources`, `pthm-em-charge-continuity`,
`pthm-em-integral-maxwell`, `pthm-em-fixed-vacuum-jumps`,
`pthm-em-gauss-constraint-propagation` and the two examples
`ex-em-nonconserved-switched-charge`, `texp-em-displacement-current-surface-choice`.

The batch-24 manifest realises all eight promised items with identical IDs,
kinds and titles, and no item renamed or dropped. Page metadata matches
plan-spec entries 327/328 field-for-field (order, `kind`, category,
`library: physics`, title, companion, requires; verified by direct comparison):
A requires `em-elementary-mathematical-prerequisites`,
`em-primitives-and-postulates`, `inverse-and-implicit-function-theorems`,
`product-measures-and-the-fubini-tonelli-theorems`, `topology-of-r`; B requires
the A page. The scaffold adds exactly three documented items beyond the
reservation:

1. `post-em-distributional-vacuum-maxwell` (postulate) — the owner-directed
   independent physical adoption of the vacuum equations for the declared
   point/stationary-sheet source models. The fifth reconciliation states
   "Singular-source equations must be explicitly adopted under their own
   distributional scope; no point/sheet source is covered by the current
   L1-only Maxwell branch", and the sixth reconciliation repeats that a
   definition of singular-source equations is not a deduction of adoption. The
   item is consumed by later pages by ID
   (`em-electrostatic-boundaries-and-conductors`,
   `em-retarded-fields-and-radiation`), so its absence would itself be an unmet
   prerequisite of those pairs.
2. `lem-em-coordinate-cell-localization` (mathematics-domain lemma, level 0) —
   the same-conclusion replacement for the batch-13
   `lem-em-continuous-localization` disk clause in the converse direction of the
   equivalence, supplying localization by every axis-parallel cube (every
   centre, every side) and its planar square clause. The substitution and its
   exact needed interface are recorded in batch-24 note item 4 and the
   cross-batch input.
3. `lem-em-surface-density-localization` (mathematics-domain lemma, level 0) —
   the pointwise upgrade from the `lem-em-interface-derivatives` delta-coefficient
   identity to the jump values, with ambient `C_c^\infty(\Omega)` tests only,
   as the sixth reconciliation requires ("Surface density localization needs
   valid ambient smooth tests").

Both lemmas carry purely mathematical imported dependencies (11 and 18 IDs, all
pinned in `math-imports.json`) and `dependency_roles` entirely
`mathematical-premise`, so the mathematical boundary is respected. The design's
alternative supplier `lem-fundamental-lemma-of-the-calculus-of-variations` was
rejected because its published home is not declared in the plan; the elementary
sign-and-bump localization replaces it (batch-24 note finding 3). The
sixth-reconciliation directions are implemented clause by clause: open bounded
integral test volumes with compact closure inside the laboratory region and
distinguished closed closures; complete equivalence for the exact test-geometry
class with both directions; stationary pointwise jump conclusions under the
stated spacetime trace/derivative hypotheses with the broader weak-trace branch
retained; no distribution products; constraint propagation from the two
evolution equations plus continuity with persistent nonzero defects and the
Full-Maxwell corollary; a charging-surface witness with a finite two-face
presentation, positive interior separation, explicitly restricted parameter
region, nonzero conduction-flux difference and zero total-current flux.

## 2. Intended role and consumers

This is the base EM machinery pair (design pair 02): fixed test geometries,
distributional source model, continuity compatibility, integral/differential
equivalence, stationary jumps and constraint propagation. A run-wide scan finds
21 external consumer items on 11 external pages (excluding the pair itself):
`em-electrostatics-in-vacuum` (+examples), `em-electrostatic-boundaries-and-conductors`
(+examples), `em-magnetostatics-in-vacuum`, `em-material-response`,
`em-induction-and-circuit-limits`, `em-vacuum-waves-and-polarization`,
`em-retarded-fields-and-radiation`, `em-action-and-variational-formulation`,
`em-empirical-tests-and-scope`. Key interfaces: the jump theorem supplies
`pthm-em-conductor-surface-charge`, `pthm-em-electrostatic-bvp-existence` and
`pthm-em-image-method-certificate`; the source model is consumed by the
electrostatic, magnetostatic, material, conductor and retarded pages; the
equivalence feeds `pthm-em-motional-emf` and
`pthm-em-specified-model-comparison`; continuity feeds
`pthm-em-action-gauge-source-compatibility` and `pthm-em-retarded-potentials`;
constraint propagation feeds `pthm-em-general-wave-ivp`.

No consumer needs content outside the pair's declared scope. Moving-circuit
content is homed in `em-induction-and-circuit-limits` with its own moving-patch
supplier (batch 13, design module M02); ideal wire, loop and infinite-sheet
sources are explicit non-types of `def-em-weak-sources` and have their own
adoption (`post-em-ideal-magnetostatic-models`, batch 16); the sheet is
stationary by hypothesis, and moving sheets are excluded in both the source
definition and the jump theorem. Both B items are leaves: no external item
depends on them, and no page requires the B page. The A page is required by
the B page and by `em-electrostatics-in-vacuum`, `em-magnetostatics-in-vacuum`,
`em-material-response` and `em-vacuum-waves-and-polarization` (checked
run-wide).

## 3. Current inventory — exact claims (A: 9, B: 2)

Computed dependency levels (current step3b task revision): A items 0, 0, 7, 14,
14, 15, 16, 16, 17; B items 17, 17.

1. `lem-em-coordinate-cell-localization` (lemma, mathematics, level 0): a
   continuous `g` on open `U ⊆ R^n` with vanishing integral over every closed
   axis-parallel cube (all centres, all side lengths) is identically zero;
   sharpness witness shows one-centre families do not suffice; planar square
   clause. Carries `AC_ω` and the Lebesgue interface of its imported suppliers.
2. `lem-em-surface-density-localization` (lemma, mathematics, level 0): a
   continuous density on a compact embedded `C^2` hypersurface with vanishing
   pairings against every ambient compact smooth test vanishes pointwise;
   almost-everywhere conclusions for merely `L^1_loc` densities are explicitly
   not claimed. Carries `AC_ω`.
3. `def-em-fixed-test-geometry` (definition, physics, level 7): volume test
   geometries (nonempty bounded open `V`, `closure(V) ⊆ Ω`, specified finite
   piecewise `C^1` boundary presentation, outward normal, closed-surface flux as
   a finite face sum), patch test geometries (regular `C^2` patches over finite
   elementary Green regions, induced boundary chain and circulation, induced
   orientation and surface flux), the regularity-on-a-neighbourhood convention,
   and the two concrete instances (open interiors of all closed axis-parallel
   boxes with their six-face presentation and null boundary difference; all
   affine regular patches over axis-parallel squares). Conventions and scope
   clause (d) exclude motion and any physical assertion.
4. `def-em-weak-sources` (definition, physics, level 14): distributions with
   bilinear pairing and `∂_μT(ψ) = −T(∂_μψ)`; point-source pairings
   `q∫ψ(z(t),t)dt`, `q∫z'(t)ψ(z(t),t)dt` under the proper-graph hypothesis with
   the finite-endpoint variant `qδ_{γ(a)} − qδ_{γ(b)}`; stationary-sheet
   pairings with continuous tangential `K`; the unrestricted locally integrable
   field class with optional one-sided trace branches; the weak solution
   predicate (e) whose four residual pairings vanish, explicitly not covered by
   the earlier `L^1`-only postulate; scope clause (f) excluding distribution
   products, moving sheets, line currents and existence claims.
5. `post-em-distributional-vacuum-maxwell` (postulate, physics, level 15): the
   independent physical adoption that the declared field/source tuples satisfy
   the four distributional identities in `D'(U)`; explicitly not derived from
   the L1 branch; no existence, measurement or material content.
6. `pthm-em-charge-continuity` (physics theorem, level 16): smooth branch (C²
   fields, C¹ sources, pointwise) and distributional branch (all distributional
   source pairs satisfying the four identities), with the honest reading that
   the conclusion is a compatibility condition, not a conservation-of-matter
   proof.
7. `pthm-em-integral-maxwell` (physics theorem, level 14): both directions of
   the equivalence between the smooth-branch differential equations and the
   four integral identities for every volume and patch test geometry, with the
   flux differentiability on `I`; explicitly not recovery from one selected
   volume or patch.
8. `pthm-em-fixed-vacuum-jumps` (physics theorem, level 16): under the separate
   adoption, the four pointwise jumps `n·[E] = σ/ε₀`, `n×[B] = μ₀K`,
   `n·[B] = 0`, `n×[E] = 0` under joint one-sided spacetime `C^1` trace
   hypotheses, with the general weak-trace branch stated separately
   (sheet-distribution and a.e. conclusions, with explicit upgrades), and the
   exclusions for moving interfaces, normal sheet currents and magnetic sheets.
9. `pthm-em-gauss-constraint-propagation` (physics theorem, level 17): smooth
   and distributional evolution branches giving time-constant Gauss defects
   from the two evolution equations plus independent source continuity; zero
   initial defects persist and nonzero defects persist; the Full-Maxwell
   corollary and the converse recovery of all four identities.
10. `ex-em-nonconserved-switched-charge` (example, physics, level 17): the
    switched point charge `ρ = q∫_0^∞ ψ(0,t)dt`, `J = 0` has
    `∂_tρ + div J = qδ_{(0,0)} ≠ 0`; no locally integrable fields satisfy the
    weak equations with that pair; the failure is exactly the omitted endpoint
    term. Explicitly a mathematical incompatibility statement, no measurement.
11. `texp-em-displacement-current-surface-choice` (thought-experiment, physics,
    level 17): for two patch test geometries spanning the same loop and a
    region between them, the total current flux `J + ε₀∂_tE` is surface
    independent and equals `(1/μ₀)∮B·dr`, while the conduction-only fluxes need
    not be equal; (c) realises all hypotheses in an explicit smooth slab model
    with two graph patches over the same square, `h(s) = σ(2(1−s²))`, showing
    `∫_{S₁}J·n₁ dS < 0 = ∫_{S₂}J·n₂ dS` and zero total fluxes; the capacitor
    reading is interpretive and no thin wire is claimed as a source type.

## 4. Source coverage

`batch-24.coverage.json` records four sources for both pages, all full-text
fetch-verified with byte hashes and printed-page locators: Griffiths,
*Introduction to Electrodynamics*, 3rd ed. (§1.3.1, §1.3.4, §1.3.5, §7.3.1,
§7.3.2, §7.3.3, §7.3.6); Tong, *Electromagnetism* (§1.1.1, §1.2.1, §2.1, §3.1,
§4.1, §4.2–§4.2.1); Landau–Lifshitz, *The Classical Theory of Fields* (§26,
§28, §29, §30, Gaussian units re-expressed in SI); Chew, *Lectures on
Electromagnetic Field Theory* (§1.2, §2.1, §2.2, §4.3–§4.3.4). Every content
row carries a disposition (`included`, `inline`, `already-published` or a
reasoned out-of-scope note) and a destination item; the divergence and Stokes
theorems are recorded as already published mathematical items that the
framework cites rather than re-derives. Four `canonical` rows record the
sixth-reconciliation adoptions (the postulate; the jump trace branches; the
compact temporal primitive in constraint propagation; the finite two-face
charging-surface witness).

The Griffiths URL recorded by earlier batches was repaired here: the old path
returns 404 and the live path serves the byte-identical 13,484,424-byte scan
(recorded with six failed attempts). I re-checked the live URL today: HTTP 200,
`content-length: 13484424`, matching the stamp. Honest limitation: the
textbooks supply formulation, motivation and the class of phenomena; the
mathematical content used in proofs comes from the imported mathematical items
and the two local lemmas, not from the textbook displays.

## 5. Prerequisite audit (independent pass)

All 77 distinct `deps` IDs of the 11 items resolve: 61 imported published
mathematical items (present in `items/` and pinned by `math-imports.json`) and
16 in-run scaffold suppliers (batch 13: `def-em-surface-distribution`,
`lem-em-interface-derivatives`, `lem-em-parameter-integrals`,
`lem-em-point-current-continuity`; batch 23: `def-em-lab-geometry`,
`def-em-si-conventions`, `def-em-sources`, `def-em-fields`,
`post-em-vacuum-maxwell`; and seven same-page items). No unresolved ID, no
duplicate item home, no mathematics item with a physical dependency (the two
new lemmas' deps are entirely imported mathematical items). All page `requires`
resolve to plan pages at strictly earlier orders (31, 46, 80.96, 305, 325 for
the A page; 327 for the B page).

Interface checks performed on the actual supplier statements (scope level, not
proof audit):

- `def-em-lab-geometry` (the restricted inertial chart, its slices, fixed-time
  fields and the no-second-frame convention), `def-em-si-conventions` (exact
  defining values of `c` and `e`; measured `μ₀`; `ε₀ := (μ₀c²)⁻¹`; the exact
  relation `c²ε₀μ₀ = 1`), `def-em-sources` (frame densities with quantity types;
  point and sheet sources declared to be different objects), `def-em-fields`
  (regularity classes and no values on singular supports) and
  `post-em-vacuum-maxwell` (smooth and weak branches; scope clause (c) that
  point/sheet sources are covered by neither branch) all match the uses on this
  page exactly.
- `lem-em-point-current-continuity` (proper-graph C¹ trajectory; endpoint
  variant `qδ_start − qδ_end`), `def-em-surface-distribution` (compact embedded
  `C^2` hypersurface, normal from `Ω₋` to `Ω₊`, `[F] = F₊ − F₋`, finite-order
  surface functionals, `AC_ω`), `lem-em-interface-derivatives` (the two delta
  formulas with the same conventions) and `lem-em-parameter-integrals` (compact
  measurable parameter sets of finite measure with continuous `∂_t`; the
  surface clause under `AC_ω`; nothing for moving sets) match the uses of the
  continuity, jump and equivalence items.
- Imported suppliers spot-verified present and pinned, including
  `thm-divergence-theorem-for-bounded-piecewise-c-one-domains`,
  `thm-the-classical-stokes-theorem-for-a-c2-surface-patch`,
  `def-surface-integral-on-a-compact-c-one-hypersurface`,
  `thm-euclidean-implicit-function-theorem`,
  `thm-euclidean-inverse-function-theorem`, `def-countable-choice`,
  `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`,
  `lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound`,
  `def-bounded-piecewise-c-one-euclidean-domain`,
  `def-test-function-space-d-of-an-open-set`,
  `thm-locally-integrable-functions-embed-in-distributions`.
- Localization instantiations checked at scope level: the volume identities
  range over the open interiors of all closed axis-parallel boxes (divergence
  recovery by the cube clause), and the patch identities range over all affine
  regular patches over axis-parallel squares, hence the coordinate-plane square
  patches needed for the three curl components, via the planar clause of
  `lem-em-coordinate-cell-localization` together with the Riemann–Lebesgue
  comparison that identifies the patch flux with its Lebesgue value. The
  spacetime-to-per-time reading of `lem-em-surface-density-localization`
  (integration in `t`, then continuity upgrade, then the 3-dimensional lemma at
  fixed time) is a proof obligation for authoring; its ingredients are on the
  page, and no supplier is missing.

## 6. Checks run (actual results)

- `manifest-deps` on batch 24: 11 items, 0 normalized, 0 errors.
- `coverage-checklist --require-destination` on batch 24: 2 pages, 43 harvested
  results, 0 errors, 0 warnings.
- `source-fetch-check` on batch 24: 8/8 sources fetch-verified, 8/8 resolved;
  plus the live Griffiths URL re-check (HTTP 200, 13,484,424 bytes).
- `item-dependency-levels check --run`: 471 items across 80 pages, maximum
  level 24, exit 0 (no errors).
- `frontier-item-gate --tool validate-plan`: 0 errors; 33 run-wide
  `redundant-prereq` warnings, exactly one naming this page; the closing line
  reports the page order acyclic and consistent with no item-level cycles,
  forward references, B-page dependencies or unresolved IDs.
- `physics-check --run physics-em-sr-40-2026-10-08 --plan research/plan-spec.json`:
  `physics-content: 0 error(s), 471 items checked`.
- `step3-decisions check --run --phase scope` before writing this report: the
  pair reported "current scope review required" (4 open pairs in total).

## 7. Uncertainty and residual obligations

- All 11 items are manifest statements only; no `items/<id>.md` carriers exist
  yet, and 42 cross-batch rows remain `open`. The engine's step3b task names
  `em-elementary-mathematical-prerequisites` (batch 13) and
  `em-primitives-and-postulates` (batch 23) as the in-run prerequisite pairs to
  inspect; their statements were read in this review and match the claimed
  interfaces, but authoring must re-verify them against authored carriers.
- Authoring delicacies flagged in batch-24 note "Honest uncertainty" (and
  confirmed here as sound routes with existing homes): the local graph
  reduction and test-function extension in `lem-em-surface-density-localization`;
  density-factor positivity and the Riemann–Lebesgue identification; the
  admissibility of the affine square patches and box instances; the
  delta-separation argument of the jump theorem with time-dependent test
  functions; and the slab flux arithmetic of the thought experiment. These are
  proof obligations, not scope gaps.
- The design's `lem-em-continuous-localization` disk clause is deliberately not
  used by this page; the cube lemma is the recorded same-conclusion replacement.
  If a future consumer needs the disk form, that supplier still exists on the
  batch-13 page.
- No potentially defective published item was found; this was a scope-level
  interface check of the used suppliers, not a proof audit of the published
  mathematics.

## 8. Decision and next action

Decision: **sufficient** for `em-maxwell-integral-and-constraints` (with its B
companion). The promised definitions, results and examples are all present with
their exact roles; the three additions are owner-directed or route-necessary,
documented, and correctly typed; source coverage is complete and fetch-verified;
every prerequisite resolves within the published library or the current
scaffold. Next action: record the scope decision with
`step3-decisions.mjs record-scope` (this report) so the pair proceeds to Step 3b
authoring in the engine's dependency order.
