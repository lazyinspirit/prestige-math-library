# Step 3b authoring report — pair `em-maxwell-integral-and-constraints` / `em-maxwell-integral-and-constraints-examples`

- Run: `physics-em-sr-40-2026-10-08`; role: alpha-high (Step 3b scaffold
  auditor and item author); batch 24; 2026-10-09.
- Dispatch labels: earlier attempts `…-f77468eabdb29794` (started this
  artifact) and `…-8342759c90e4f79d` (finished the first draft of the eleven
  item carriers and the batch-24 records); this handoff is by attempt
  `…-5fd6ca051f8dab11` (independent re-audit, three local repairs, final
  checks, records, decisions). All attempts own exactly this pair; write
  scope is the eleven batch-24 item carriers, the two batch-24 pages, and the
  batch-24 manifest/coverage/contract/ledger inputs.
- A page `em-maxwell-integral-and-constraints` (order 327, category
  `classical-electromagnetism`, library `physics`, 9 items); B page
  `em-maxwell-integral-and-constraints-examples` (order 328, 2 leaf items).
- Owned items (authoring order = dependency level, ties by page order and ID):
  `lem-em-coordinate-cell-localization` (0), `lem-em-surface-density-localization`
  (0), `def-em-fixed-test-geometry` (7), `def-em-weak-sources` (14),
  `pthm-em-integral-maxwell` (14), `post-em-distributional-vacuum-maxwell`
  (15), `pthm-em-charge-continuity` (16), `pthm-em-fixed-vacuum-jumps` (16),
  `pthm-em-gauss-constraint-propagation` (17),
  `ex-em-nonconserved-switched-charge` (17, B),
  `texp-em-displacement-current-surface-choice` (17, B).

## Open obligations at entry (attempt `…-5fd6ca051f8dab11`)

1. Re-audit every item carrier against its exact suppliers and re-derive the
   proof routes; repair local gaps. Complete: eleven carriers audited, three
   repairs made (below), the other eight accepted unchanged.
2. In-run suppliers (`def-em-surface-distribution`, `lem-em-interface-derivatives`,
   `lem-em-parameter-integrals`, `lem-em-point-current-continuity` in batch 13;
   `def-em-lab-geometry`, `def-em-si-conventions`, `def-em-sources`,
   `def-em-fields`, `post-em-vacuum-maxwell` in batch 23) were unauthored when
   the first attempt started. At this attempt's entry all nine carriers are on
   disk and were read here; every recorded consumer use was re-checked against
   the authored text (details under "Supplier reconciliation"). No supplier use
   is now open, so no item decision is escalated.
3. Recheck Step 3a findings: the owner-held `redundant-prereq` warning on page
   327 is retained; the Griffiths URL repair is present in this batch's
   coverage rows and in the item sources; the two local lemmas' proof routes
   were re-derived from the current manifest deps rather than accepted from
   the scaffold strategy (one scaffold route was defective; see the first
   checkpoint).
4. Register the items on both pages and in the batch records, refresh coverage
   and the cross-batch input where authoring changed actual uses, and run the
   Step-3 battery. Complete (see "Checks actually run").
5. Record `step3-decisions.mjs record-item` decisions. Complete: eleven
   receipts, all closed by `check --phase final`.

## Checkpoint log

### `lem-em-coordinate-cell-localization` (level 0, mathematics) — decision `repaired`

- Claim: for open `U ⊆ R^n` and continuous `g`, vanishing of the Lebesgue
  integral of `g` over every closed axis-parallel cube of positive side inside
  `U` forces `g = 0`; sharpness witness `g(x) = x_1 − p_1` with one fixed
  centre; planar clause `n = 2`. Assumes `AC_ω` as the ambient Lebesgue
  convention.
- Proof route (re-derived): the scaffold strategy cited one-dimensional
  `thm-monotonicity-of-the-integral` for an `n`-dimensional signed set
  integral and read a signed set-integral out of
  `def-integral-over-a-measurable-set` (nonnegative only). The authored proof
  identifies the cube integral through the multidimensional Darboux integral
  (`thm-continuous-on-a-rectangle-is-riemann-integrable`), compares against
  `c = g(p)/2` by multidimensional monotonicity, and proves the one-centre
  witness directly by mirror-symmetric grid refinements
  (`def-multidimensional-darboux-sums/-grid-partition/-darboux-integral`,
  `lem-multidimensional-refinement-inequalities`, `cor-archimedean-reciprocal`).
- Repair made here: the `[F8]` box comparison was re-routed from
  `lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals`
  (homed on `measurable-densities-and-radon-volume-on-manifolds`, a published
  mathematics page not declared anywhere in `plan-spec.json`; `validate-plan`
  reported `undeclared-prereq` for page 327) to the in-closure published
  `lem-riemann-lebesgue-comparison-for-distribution-test-integrands`, whose
  Statement was read (bounded Borel Riemann integrable on a box implies
  Lebesgue integrable with equal integrals, under Countable Choice). Manifest
  `deps`, `dependency_roles` and the proof-contract citation updated in the
  same pass.
- Checks at current bytes: precheck PASS (direct); proof-layout 0 defects;
  rendercheck OK; content-policy 0 errors; proof-contract `--strict` 0 errors /
  0 warnings; focused depcheck OK; item-dependency-levels OK; `validate-plan`
  now reports no error on page 327.

### `lem-em-surface-density-localization` (level 0, mathematics) — decision `repaired`

- Claim: a continuous density `a` on a compact embedded `C²` hypersurface
  whose signed surface integral against every ambient compact smooth test
  vanishes is identically zero; equivalently equal pairings force equal
  densities. Only valid ambient tests are used; no product-test extension.
- Proof audited: sign-and-bump localization at a point of nonzero value,
  restriction of a regular chart whose density is continuous and strictly
  positive, the cube chart integral and monotonicity of the nonnegative
  surface integral; the affine square-cell construction and its positive area
  are used for strict positivity.
- Repair made here: step 5.1's fact tags were trimmed so that the square-area
  value is cited through step 4.1 (which establishes it), removing a
  proof-contract `shotgun-bracket` warning; the contract's `F6` uses list and
  the step-5-1 contract inputs were reconciled with the tags.
- Checks at current bytes: precheck PASS (direct); proof-layout 0 defects;
  rendercheck OK; content-policy 0 errors; proof-contract `--strict` 0 errors /
  0 warnings; focused depcheck OK; item-dependency-levels OK.

### `def-em-fixed-test-geometry` (level 7, physics) — decision `accept`

- Content: open bounded volume test geometries with closure inside `Ω`, a
  finite piecewise `C¹` boundary presentation and outward normal; the closed
  box closure `K` distinguished from the open volume `V` (faces are
  `λ₃`-null, so the integrals over `V` and `K` agree); regular `C²` patch test
  geometries `(D,r)` over finite elementary Green regions with induced
  boundary chain, circulation and oriented flux; explicit instances (open
  interiors of closed boxes; affine regular patches over axis-parallel
  squares); the local neighbourhood regularity convention; fixed (motionless)
  test geometries and the `AC_ω` convention; no field equation asserted.
- Supplier statements read for the clauses:
  `def-bounded-piecewise-c-one-euclidean-domain`,
  `def-bounded-c-one-domain-boundary-charts-and-outward-normal`,
  `def-the-induced-boundary-chain-of-a-c2-surface-patch`,
  `def-oriented-unit-normal-and-flux-of-a-surface-patch`,
  `def-type-i-type-ii-and-elementary-green-regions` (axis-parallel squares are
  elementary Green regions), `def-admissible-regular-parametrized-surface-patch`.
- Checks at current bytes: precheck n/a (definition, no phase body);
  rendercheck OK; content-policy 0 errors; proof-contract `--strict` 0 errors;
  focused depcheck OK; item-dependency-levels OK.

### `def-em-weak-sources` (level 14, physics) — decision `accept`

- Content: distributions as continuous linear maps with bilinear pairing and
  `∂_μT(ψ) = −T(∂_μψ)`; point sources by the proper-graph pairings
  `∫qψ(z(t),t)dt` and `∫qz'(t)ψ(z(t),t)dt`, with the finite-endpoint variant
  contributing `qδ_{γ(a)} − qδ_{γ(b)}`; stationary sheet densities
  `∫_I∫_Sσψ` and `∫_I∫_SKψ` with tangential `K`; locally integrable weak
  fields; optional pointwise and weak-trace branches; the weak solution
  predicate (e) with `ε₀ = (μ₀c²)⁻¹`; explicit exclusion of products of
  distributions, moving sheets, line currents and normal sheet currents; no
  existence or conservation asserted.
- Supplier statements read: `def-em-surface-distribution` (finite-order
  estimates, two-sided presentation with `n` from `Ω₋` to `Ω₊`,
  `[F] = F₊ − F₋`, continuous densities only), `lem-em-point-current-continuity`
  (both branches and the endpoint identity), `post-em-vacuum-maxwell` (L1
  branch; singular sources explicitly excluded).
- Checks at current bytes: precheck n/a; rendercheck OK; content-policy 0
  errors; proof-contract `--strict` 0 errors; focused depcheck OK;
  item-dependency-levels OK.

### `pthm-em-integral-maxwell` (level 14, physics) — decision `accept`

- Claim: both directions of the equivalence between the four smooth-branch
  differential equations and the four integral identities over the exact
  fixed test-geometry class; no recovery from one selected surface.
- Proof audited: (a) divergence theorem on every volume test geometry; patch
  Stokes plus differentiation under the integral for the two flux functions
  (`lem-em-parameter-integrals` set and surface forms,
  `lem-riemann-lebesgue-comparison-for-distribution-test-integrands`);
  (b) recovery of `div E`, `div B` from the open interiors of all closed boxes
  via `lem-em-coordinate-cell-localization` (n=3) and of the three curl
  components from all affine square patches via its planar clause.
- Supplier statements read: `thm-divergence-theorem-for-bounded-piecewise-c-one-domains`,
  `thm-the-classical-stokes-theorem-for-a-c2-surface-patch`,
  `lem-em-parameter-integrals`, `lem-em-coordinate-cell-localization`;
  `post-em-vacuum-maxwell` is used only inside its smooth branch with
  `def-em-si-conventions` constants.
- Checks at current bytes: precheck PASS (direct); proof-layout 0 defects;
  rendercheck OK; content-policy 0 errors; proof-contract `--strict` 0 errors;
  focused depcheck OK; item-dependency-levels OK; `validate-plan` no error on
  this page.

### `post-em-distributional-vacuum-maxwell` (level 15, physics) — decision `accept`

- Content: the independent physical adoption that field/source tuples whose
  singular parts are exactly the declared point (proper-graph or
  finite-endpoint) or stationary tangential sheet sources satisfy the four
  distributional vacuum Maxwell identities of `def-em-weak-sources(e)`, in
  the named inertial laboratory frame with SI constants; no existence,
  conservation of matter, self-force, matter dynamics, material response,
  regularisation, product of distributions or empirical claim.
- Sources read with locators: Chew §1.2 (Maxwell as postulate), §3.3.2–3.3.3
  (point-charge delta), §4.3–4.3.4 (surface-charge and current delta sources,
  singularity matching); Tong §1.1, §1.2.1; Landau–Lifshitz §28, §30.
- `provenance.proof: not-applicable` with a complete `physics_review` contract;
  the scope clause records that the original L1 branch neither covers nor
  implies the adoption and that both coincide when the singular part vanishes.
- Checks at current bytes: precheck PASS (nonproof structure); rendercheck OK;
  content-policy 0 errors; proof-contract `--strict` 0 errors; focused
  depcheck OK; item-dependency-levels OK.

### `pthm-em-charge-continuity` (level 16, physics) — decision `accept`

- Claim: `∂_tρ + div J = 0` as a compatibility condition, pointwise in the
  `C²`/`C¹` smooth branch and distributionally for every distributional
  source pair satisfying the four identities, including the separately
  adopted singular-source model; no conservation-of-matter reading.
- Proof audited: smooth cancellation `div(curl B) = 0` with
  `div(∂_tE) = ∂_t div E` and `c²ε₀μ₀ = 1`; distributional branch by
  commutation of distributional derivatives and antisymmetry of `ε`; the
  derivative algebra is choice-free and `AC_ω` is carried only by the
  declared singular-source formulation.
- Supplier statements read: `thm-the-divergence-of-a-curl-vanishes`,
  `thm-clairaut-schwarz-mixed-partials`,
  `thm-distributional-differentiation-is-continuous-and-commutes`,
  `post-em-vacuum-maxwell`, `post-em-distributional-vacuum-maxwell`.
- Checks at current bytes: precheck PASS (direct); proof-layout 0 defects;
  rendercheck OK; content-policy 0 errors; proof-contract `--strict` 0 errors;
  focused depcheck OK; item-dependency-levels OK.

### `pthm-em-fixed-vacuum-jumps` (level 16, physics) — decision `accept`

- Claim: under the joint one-sided `C¹` regularity about the stationary
  compact `C²` interface `S`, `n·[E] = σ/ε₀`, `n·[B] = 0`, `n × [E] = 0`,
  `n × [B] = μ₀K`, pointwise on `S × I`, with `n` from `Ω₋` to `Ω₊` and
  `[F] = F₊ − F₋`; a weak-trace branch with almost-everywhere conclusions and
  a joint-continuity upgrade is retained; no moving interface, normal sheet
  current or magnetic sheet source.
- Proof audited: the spacetime interface formula from
  `lem-em-interface-derivatives` applied slicewise (a stationary interface
  contributes no time delta); the off-sheet residuals vanish by sign-and-bump
  localization; the remaining sheet densities pair to zero against every test
  and vanish by `lem-em-surface-density-localization`; the starting
  identities come from `post-em-distributional-vacuum-maxwell` through
  `def-em-weak-sources`; the sign convention is traced through
  `def-em-surface-distribution`.
- Supplier statements read for the Facts list:
  `lem-finite-ambient-partitions-for-euclidean-boundary-integration`,
  `lem-test-function-cutoffs-and-euclidean-localization`,
  `lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound`,
  `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`,
  `thm-integration-by-parts`,
  `prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null`,
  `thm-finite-and-countable-subadditivity-of-measures`.
- Checks at current bytes: precheck PASS (direct); proof-layout 0 defects;
  rendercheck OK; content-policy 0 errors; proof-contract `--strict` 0 errors;
  focused depcheck OK; item-dependency-levels OK.

### `pthm-em-gauss-constraint-propagation` (level 17, physics) — decision `repaired`

- Claim: from the two evolution equations (no Gauss constraint assumed) and
  independently assumed source continuity, the defects `div B` and
  `div E − ρ/ε₀` are constant in time — pointwise in the smooth branch and
  distributionally in general — so zero initial constraints persist and
  nonzero defects persist; full-Maxwell solutions have zero defects, and
  adding zero defects to the evolution pair recovers all four equations; the
  continuous-representative time-constancy conclusion is the only place
  Countable Choice enters besides the inherited singular-source formulation.
- Repair made here: step 1.3 now completes the distributional time-constancy
  argument by deriving `∫(F − C)β = 0` from the unit-mass bump and hence
  `∫(F − C)η = 0` for every temporal test before the sign-and-bump step
  forces `F = C`; this follows the owner direction to test with a compact
  primitive of a zero-integral time test. The contract step entry was checked
  to remain consistent.
- Supplier statements read: `post-em-vacuum-maxwell`,
  `post-em-distributional-vacuum-maxwell`, `pthm-em-charge-continuity`,
  `thm-the-divergence-of-a-curl-vanishes`,
  `thm-distributional-differentiation-is-continuous-and-commutes`,
  `thm-dominated-convergence`,
  `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`.
- Checks at current bytes: precheck PASS (direct); proof-layout 0 defects;
  rendercheck OK; content-policy 0 errors; proof-contract `--strict` 0 errors;
  focused depcheck OK; item-dependency-levels OK.

### `ex-em-nonconserved-switched-charge` (level 17, B page) — decision `accept`

- Content: the switched-history distribution `⟨ρ,ψ⟩ = q∫_0^∞ ψ(0,t)dt` with
  `J = 0` has `∂_tρ = qδ_{(0,0)}`, so no locally integrable field pair
  satisfies the four weak identities with it; the failure is exactly the
  omitted endpoint term of the point-source construction.
- Proof audited: the distributional time derivative by the fundamental
  theorem of calculus on the compactly supported smooth map `t ↦ ψ(0,t)`;
  the application of `pthm-em-charge-continuity(b)`, which covers every
  distributional source pair satisfying the four identities; and comparison
  with the finite-endpoint clause `qδ_{γ(a)} − qδ_{γ(b)}` of
  `lem-em-point-current-continuity`. No measurement or empirical claim.
- Checks at current bytes: precheck PASS (direct); proof-layout 0 defects;
  rendercheck OK; content-policy 0 errors; proof-contract `--strict` 0 errors;
  focused depcheck OK; item-dependency-levels OK.

### `texp-em-displacement-current-surface-choice` (level 17, B page) — decision `accept`

- Content: for two patch test geometries spanning the same loop and bounding
  a region between them, the total current flux `J + ε₀∂_tE` is surface
  independent and equals `μ₀⁻¹∮B·dr`; the conduction-only fluxes need not be
  equal, their difference being minus the displacement-flux difference; an
  explicit smooth realisation
  (`E = (t/ε₀)χ(z)e_z`, `B = 0`, `ρ = tχ'(z)`, `J = −χ(z)e_z`; graphs
  `r₁ = (u,v,−2η(u,v))`, `r₂ = (u,v,0)` over `D = [−1,1]²` with
  `η = σ(2(1−u²))σ(2(1−v²))`) satisfies every hypothesis with
  `∫_{S₁}J·n₁ < 0 = ∫_{S₂}J·n₂` and both total fluxes zero. The capacitor
  reading is explanatory; no thin-wire source, material response or
  measurement is claimed.
- Proof audited: `div G = 0` from the Gauss law and smooth source continuity;
  the divergence theorem on the declared finite two-face region with outward
  normals `−n₁`, `+n₂`; the patch Ampère identity for either patch; direct
  substitution of the realisation; validity of the two-face presentation
  (faces are compact Borel subsets of regular `C²` patches, the seam square
  has surface measure zero, the interior separation `2η(u,v)` is positive on
  the open square, and the parameter region is explicit); strict negativity
  of the first conduction flux from the positive area of the set where `η = 1`
  near the origin.
- Checks at current bytes: precheck PASS (direct); proof-layout 0 defects;
  rendercheck OK; content-policy 0 errors; proof-contract `--strict` 0 errors;
  focused depcheck OK; item-dependency-levels OK.

## Supplier reconciliation (exact clauses read)

- `def-em-lab-geometry`: restricted inertial chart, slices and fixed-time
  fields are the ambient objects of every item on this page; no Galilean
  transformation, observer congruence or second frame is asserted anywhere.
- `def-em-si-conventions`: exact defining values of `c` and `e`; measured
  status of `μ₀`; `ε₀ := (μ₀c²)⁻¹`, so `c²ε₀μ₀ = 1` is the identity used in
  the continuity, jump, realisation and constraint computations.
- `def-em-sources`: `ρ`, `J` are frame densities (C m⁻³, A m⁻²); point and
  sheet sources are different objects defined by their own pairings, exactly
  the split `def-em-weak-sources` implements.
- `def-em-fields`: `E`, `B` as fixed-time spatial vector fields with the
  declared regularity classes; no value asserted at singular support.
- `post-em-vacuum-maxwell`: smooth branch for jointly `C¹` fields with the
  additional derivatives each equation requires; weak branch for locally
  integrable fields and sources; singular sources explicitly excluded. Every
  use on this page is inside those branches; singular pairings come from the
  new definition and its separate adoption.
- `def-em-surface-distribution` and `lem-em-interface-derivatives`: same
  normal convention (`n` from `Ω₋` to `Ω₊`) and jump `[F] = F₊ − F₋` as the
  jump theorem, so the four jump signs are traceable; the interface is
  stationary in both.
- `lem-em-point-current-continuity`: proper-graph branch with
  `∂_tρ + div J = 0` and the endpoint variant
  `qδ_{γ(a)} − qδ_{γ(b)}`, consumed by `def-em-weak-sources(b)` and the B
  example exactly as stated.
- `lem-em-parameter-integrals`: the compact-measurable-set (and surface)
  differentiation-under-the-integral forms, applied to the patch flux after
  the Riemann–Lebesgue comparison identifies the patch Riemann integral with
  its Lebesgue value.
- **Choice:** `AC_ω` is declared and used in `def-em-fixed-test-geometry`,
  `def-em-weak-sources`, both local lemmas, `pthm-em-integral-maxwell`,
  `pthm-em-fixed-vacuum-jumps`, `pthm-em-gauss-constraint-propagation`
  (continuous-representative localization only),
  `ex-em-nonconserved-switched-charge` (inherited convention) and
  `texp-em-displacement-current-surface-choice`;
  `pthm-em-charge-continuity` is choice-free. No use of the Recorded results
  and no `deferred-set-theory-beyond-choice` path.
- No missing, circular, forward or inadequate dependency was found; all dep
  targets resolve (focused `depcheck` clean) and the page's computed levels
  (0, 0, 7, 14, 14, 15, 16, 16, 17, 17, 17) match item metadata and manifest.

## Owner-direction interfaces (sixth reconciliation) checked

- Open integral test volumes with compact closure inside the laboratory
  region, with the closed box closure distinguished from the open volume:
  `def-em-fixed-test-geometry(a)`.
- Complete integral/differential equivalence and exact surface-patch
  conventions: `pthm-em-integral-maxwell` (both directions, exact class).
- Surface-density localization via valid ambient smooth tests, no product-test
  extension: `lem-em-surface-density-localization`.
- Stationary pointwise jumps under the stated spacetime trace/derivative
  hypotheses, with the broader weak branch retained:
  `pthm-em-fixed-vacuum-jumps` main branch plus the general weak-trace clause.
- Independent physical adoption for singular sources and no undefined
  distribution products: `post-em-distributional-vacuum-maxwell` and
  `def-em-weak-sources(f)`.
- Gauss-constraint propagation from the two evolution equations plus source
  continuity, zero constraints persisting and nonzero defects persisting,
  full-Maxwell corollary; distributional time-constancy tested with a compact
  primitive of the zero-integral time test;
  `pthm-em-gauss-constraint-propagation`.
- Charging-surface witness with a valid finite two-face presentation, positive
  interior separation, an explicit restricted parameter region, nonzero
  conduction-flux difference and zero total-current flux:
  `texp-em-displacement-current-surface-choice(c)`.

## Checks actually run in this attempt (exact commands, current bytes)

- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts`
  on the eleven owned items — **PASS** (nine checked, 0 failing; the two
  definitions are skipped as non-phase bodies).
- `node tools/physics-support/rendercheck.mjs` on the eleven items plus the
  two pages — **OK** (13 files: YAML parses, no wikilink inside math, no
  nested or unbalanced delimiters, no multiline display block, every math
  span parses under KaTeX).
- `node tools/physics-support/prosecheck.mjs` on the same 13 files — **0
  errors, 0 warnings**.
- `node tools/physics-support/content-policy.mjs research/physics-em-sr-40-2026-10-08-batch-24.pages.json`
  — **11 scoped items, 0 errors, 0 warnings**.
- `node tools/physics-support/proof-contract.mjs research/physics-em-sr-40-2026-10-08-batch-24.proof-contracts.json --strict`
  — **0 errors, 0 warnings, 11/11 items**.
- `node tools/physics-support/depcheck.mjs --items-file` (the eleven owned
  IDs) — **OK**: focused item checks plus prerequisite-cycle checks over 1285
  items and 180 pages passed; no unresolved dependency, no cycle.
- `node tools/physics-support/pathcheck.mjs --pages-file` (both page IDs) —
  **0 pathway files checked, 0 errors, 0 warnings** (no `_pathway.md` exists
  for this category yet; pathway authoring is a later stage).
- `node tools/physics-support/item-dependency-levels.mjs check --run physics-em-sr-40-2026-10-08`
  — **473 items across 80 pages; all labels consistent** (no error rows).
- `node tools/physics-support/frontier-item-gate.mjs --run physics-em-sr-40-2026-10-08 --tool validate-plan`
  — run-wide **FAIL** (42 `undeclared-prereq` rows, all on sibling pages such
  as `em-elementary-mathematical-prerequisites`,
  `em-expanded-analysis-prerequisites`, `sr-spacetime-primitives`,
  `em-material-response`; none on pages 327 or 328). Pages 327/328 appear
  with their declared `requires` and no error row. Page 327 carries the
  single owner-held `redundant-prereq` warning known from Step 3a. The
  earlier `undeclared-prereq` row for page 327
  (`measurable-densities-and-radon-volume-on-manifolds`) was cleared by the
  dependency re-route recorded above.
- `node tools/physics-support/proof-layout.mjs` on the eleven owned items
  (the mandatory once-before-handoff run, executed after the last edit) —
  **11 items, 48 steps, 0 defects**, every numbered row carrying a valid
  blue chip.
- `node tools/physics-support/coverage-checklist.mjs research/physics-em-sr-40-2026-10-08-batch-24.coverage.json`
  — **2 page(s), 43 harvested result(s), 0 errors, 0 warnings**.
- `node tools/physics-support/source-fetch-check.mjs --coverage research/physics-em-sr-40-2026-10-08-batch-24.coverage.json`
  (gate mode on the stamps written by the earlier fetch) — **8/8 source(s)
  fetch-verified; 8/8 resolved** (0 documented drops).
- `node tools/physics-support/manifest-deps.mjs research/physics-em-sr-40-2026-10-08-batch-24.pages.json`
  — **11 items, 0 normalized, 0 errors**;
  `manifest-integrity --run` — **80/80 pages in the manifests, no scope
  drift**.
- `node tools/physics-support/frontier-dependency-ledger.mjs refresh --run physics-em-sr-40-2026-10-08`
  — refreshed and deduplicated after the dependency edit.
- `node tools/physics-support/step3-decisions.mjs check --run … --phase scope`
  — **closed**; `--phase final` — all eleven owned items **closed** by the
  eleven receipts recorded in this attempt (`repaired` for the three repaired
  items, `accept` for the other eight; confidence 1; examined dependency IDs
  recorded per item).
- **Concurrent-write note (honest bookkeeping).** One minute after the first
  recording, the sibling-owned carrier
  `items/thm-sr-tensor-and-current-transformation.md` was edited by another
  agent (08:04:01Z), which changed the hash closure of the batch-23 carrier
  `def-em-sources` and therefore staled eight receipts that close over it.
  Those eight were re-recorded on the current bytes with a note; the changed
  carrier is a formulation input of `def-em-sources` (covariant
  identification clause) and is cited by no proof step of this pair, and the
  direct supplier statements used here were re-checked unchanged. At the time
  of handoff `check --phase final` reports all eleven owned items closed
  against the then-current bytes.

## Published concerns and plan observations (for the owner / Step 4)

1. **Plan-level missing page (no longer consumed by this pair).** The
   published mathematics home `measurable-densities-and-radon-volume-on-manifolds`
   (which hosts
   `lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals`)
   is genuinely used by item suppliers but is not declared anywhere in
   `research/plan-spec.json`; `validate-plan` therefore still reports
   `undeclared-prereq` for `em-elementary-mathematical-prerequisites` and
   `em-expanded-analysis-prerequisites`. This pair no longer consumes that
   home (the citation was re-routed to an equivalent in-closure supplier).
   Owner/Step 4 may either add the P entry and the corresponding `requires`
   rows or re-route those siblings' uses; recorded here as a pre-splice plan
   observation, not hidden debt.
2. **Run-wide `validate-plan` failure.** 42 `undeclared-prereq` rows across
   sibling pages (listed in the command output referenced above); none names
   this pair's pages.
3. **Owner-held `redundant-prereq` warning on page 327.** The page requires
   `em-elementary-mathematical-prerequisites` directly while already reaching
   it through `em-primitives-and-postulates`; both edges come from the plan
   and were kept unchanged.
4. **Dead Griffiths URL in earlier batches (carried forward from Step 1).**
   The `hlevkin.com` URL used by batches 21–23 returns 404; the
   byte-identical document is live at the path with the extra `/Physics/`
   segment, which this pair's item sources and coverage rows use. Owner
   action: refresh the same URL in the earlier batches' coverage files.
5. **No published defect found.** None of the published suppliers read for
   this pair was found false, mistyped or directionally wrong; the one
   defective route was internal to the scaffold (the n-dimensional
   monotonicity step) and was replaced locally with the same claim.

## Open obligations at handoff

- None within this pair's owned Step-3 scope: all eleven carriers, both pages,
  the manifest/coverage/contract/ledger inputs and the eleven item decisions
  are in place, and every check listed above was run and passed (the
  run-wide `validate-plan` failure does not name this pair).
- Independent Steps 5–8 review, judgment and any downstream consumer review
  remain outstanding by design.
- Receipts are hash-bound to the current supplier bytes; if a sibling supplier
  is edited after this handoff, the affected owned receipts become stale and
  require a fresh current decision on the then-current bytes.

## Handoff

- **Completed IDs (11):** `lem-em-coordinate-cell-localization`,
  `lem-em-surface-density-localization`, `def-em-fixed-test-geometry`,
  `def-em-weak-sources`, `pthm-em-integral-maxwell`,
  `post-em-distributional-vacuum-maxwell`, `pthm-em-charge-continuity`,
  `pthm-em-fixed-vacuum-jumps`, `pthm-em-gauss-constraint-propagation`,
  `ex-em-nonconserved-switched-charge`,
  `texp-em-displacement-current-surface-choice`; pages
  `em-maxwell-integral-and-constraints` and
  `em-maxwell-integral-and-constraints-examples`; batch-24 manifest,
  coverage, proof-contract, cross-batch input and ledger refresh.
- **Checks run:** the exact commands and results in "Checks actually run";
  all scoped gates pass, with the run-wide `validate-plan` status reported
  honestly.
- **Added suppliers:** none added by this attempt. The Step-1 scaffolder had
  already added the two local mathematics lemmas and
  `post-em-distributional-vacuum-maxwell` on the existing A page (recorded in
  the batch-24 notes and accepted at Step 3a); this attempt re-routed one
  imported citation (`[F8]` of the cube-localization lemma) and updated the
  manifest/contract accordingly.
- **Published concerns:** items 1–4 above; no confirmed published defect.
- **Open obligations:** none in scope; Steps 5–8 independent review pending.
