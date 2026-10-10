# Step 3b — A/B pair `em-electrostatics-in-vacuum` / `em-electrostatics-in-vacuum-examples`

Run `physics-em-sr-40-2026-10-08`, role alpha-high, batch 25, 2026-10-09.
Owned A page order 329 (`em-electrostatics-in-vacuum`), B page order 330
(`em-electrostatics-in-vacuum-examples`), category `classical-electromagnetism`,
library `physics`.

## Owned item IDs (authoring order)

Level 0 (local mathematical prerequisites, mathematics domain):

1. `lem-em-distributional-gradient-smooth-off-a-point`
2. `lem-em-euclidean-balls-and-annuli-are-bounded-c-one-domains`
3. `lem-em-newtonian-far-field-gradient`

Level 15: `def-em-electrostatic-regime`.

Level 16: `pthm-em-coulomb-solution`, `pthm-em-electrostatic-potential`.

Level 17: `ex-em-infinite-line-normalization` (B page).

Level 18: `pthm-em-electrostatic-work`.

Level 19: `pthm-em-electrostatic-field-energy`.

Level 20: `pthm-em-point-self-energy-divergence`, `ex-em-uniform-ball-coulomb` (B page).

## Open obligations at entry (to reconcile before handoff)

- In-run suppliers `def-em-lab-geometry`, `def-em-si-conventions`, `def-em-fields`,
  `def-em-sources`, `post-em-vacuum-maxwell`, `post-em-lorentz-coupling` (batch 23),
  `def-em-weak-sources` (batch 24), `def-em-surface-distribution` and
  `lem-em-interface-derivatives` (batch 13) have no authored carrier yet at entry.
  Their scaffold statements/interfaces are read from the current manifests; each
  consuming step is flagged here and the consumer item is authored against the
  provisional interface, with the item decision escalated until the supplier is
  authored and its use reconciled.
- Owner-held scaffold additions recorded by batch 25 (two A-page `requires`) stay for
  Step 4; not a Step 3b edit.

## Item checkpoints

### Level 0 mathematical prerequisites (authored 2026-10-09)

1. `lem-em-distributional-gradient-smooth-off-a-point` — authored; statement kept from
   the scaffold; proof by coordinate permutation + one-dimensional integration by parts
   + completed-product Fubini. Dependency correction: added
   `thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures`,
   `thm-tonelli-and-fubini-for-completed-product-measures`, `def-linear-map`,
   `def-linear-isometry-and-orthogonal-or-unitary-operator`,
   `cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus`,
   `cor-c-one-change-of-variables-for-l-one-functions`, `thm-continuous-implies-integrable`,
   `lem-riemann-lebesgue-comparison-for-distribution-test-integrands`,
   `prop-closure-properties-of-measurable-functions-used-by-the-integral`,
   `thm-borel-products-of-euclidean-spaces-are-euclidean-borel`,
   `def-locally-integrable-function-on-r-n` (all imported mathematics); dropped the unused
   scaffold entries `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`,
   `thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets`,
   `def-product-measure-on-sigma-finite-spaces`,
   `def-sections-of-sets-and-functions-on-products`, `thm-ftc-first-part` and the
   far-field Lemma deps that were pasted into the scaffold row by the scaffolder's
   shared template. Checked: precheck PASS, proof-layout 0 defects, rendercheck clean.
2. `lem-em-euclidean-balls-and-annuli-are-bounded-c-one-domains` — authored; statement
   kept; proof via six-patch smooth graph charts, rigid complement chart for the inner
   normal, Heine–Borel compactness, twelve signed-maximal-coordinate faces and a compact
   null seam set. Deps kept as scaffolded (all imported). Checked: precheck PASS,
   proof-layout 0 defects, rendercheck clean.
3. `lem-em-newtonian-far-field-gradient` — authored; statement kept; proof via uniform
   far-field majorants, differentiation under the integral sign, dominated convergence
   for continuity, and the reverse triangle inequality for the decay bound. Dropped the
   unused scaffold deps `thm-heine-borel-rn` and `def-metric-compactness`. Checked:
   precheck PASS, proof-layout 0 defects, rendercheck clean.

Manifest sync: the batch-25 manifest item rows for these three items still carry the
pre-authoring dep lists; they will be re-synced to the authored deps (same page, same
ids, imported-only deps so the level-0 labels do not change) in one pass at the end.

### Level 15-16 items (authored 2026-10-09)

4. `def-em-electrostatic-regime` — authored (definition with a `## Verification` section).
   Clauses (c) and (e) are verified: the reduction of the smooth Maxwell branch, the
   fixed-time reading via the one-variable mean value theorem, and the static-to-
   distributional dictionary (time-derivative pairings vanish by Fubini + FTC; the four
   weak pairings equal the time integrals of the spatial pairings; the iff follows by
   testing with product tests). Consuming steps flagged against the unauthored in-run
   suppliers: (c) uses `post-em-vacuum-maxwell`; the definition uses `def-em-lab-geometry`,
   `def-em-si-conventions`, `def-em-fields`, `def-em-sources`; clause (e) uses
   `def-em-weak-sources`(b),(e). Checked: precheck PASS, proof-layout 0 defects,
   rendercheck clean.
5. `pthm-em-electrostatic-potential` — authored. Proof: `-E` is closed (curl vanishes),
   the Poincaré lemma yields the C^2 potential with `grad phi = -E`; Poisson follows from
   `div grad = Delta` and linearity; uniqueness up to constants follows from
   `cor-potentials-differ-by-a-componentwise-constant` plus star-shapedness. Consuming
   steps flagged: step 1.1 and step 2.1 use `def-em-electrostatic-regime`/`def-em-fields`/
   `def-em-sources`/`def-em-si-conventions` (unauthored at entry). Checked: precheck PASS,
   proof-layout 0 defects, rendercheck clean.
6. `pthm-em-coulomb-solution` — authored, all four clauses. Added two imported
   mathematical suppliers beyond the scaffold list: `thm-differentiation-under-the-
   integral-sign` and `cor-c-one-change-of-variables-for-l-one-functions`, used in the
   self-contained proof of the all-point Coulomb representation (differentiate
   `N rho(x) = int Phi(z) rho(x-z) dz` under the integral, then apply
   `lem-em-distributional-gradient-smooth-off-a-point` to `Phi`). Consuming steps flagged:
   step 2.1/4.1 use `def-em-electrostatic-regime`; step 8.1 uses `def-em-weak-sources` and
   the regime dictionary. Checked: precheck PASS, proof-layout 0 defects, rendercheck clean.

### Level 17-20 items and examples (authored 2026-10-09)

7. `ex-em-infinite-line-normalization` (B page, level 17) — authored; statement kept from
   the scaffold. Verifies `E = -grad phi` for the logarithmic potential, the classical
   zero-source equations on the punctured domain, the lateral cylinder flux
   `lambda L/epsilon_0` through an admissible regular patch, the distributional identity
   `div E = rho_lambda/epsilon_0` on `R^3` by superposition of the point-charge identities
   along the axis with an absolute Fubini majorant `|D psi|/(pi eps_0 rho)`, the failure of
   the infinity normalization and of star-shapedness, and both energy divergences
   `lambda^2 L/(4 pi eps_0) log(R/delta)`. Scope clause (g) records that the line source is
   not among the declared source types of `def-em-weak-sources`, so no framework
   source-type or physical-realisation claim is made. Checked: precheck PASS, proof-layout
   0 defects, rendercheck clean.
8. `pthm-em-electrostatic-work` (level 18) — authored. Work `W(gamma)` of the electric term
   `qE` of the adopted coupling along a prescribed piecewise `C^1` path equals
   `q(phi(initial) - phi(terminal))`, is path independent, vanishes on closed paths, reads
   `-(U(terminal) - U(initial))` for `U = q phi`, and is unchanged by the additive constant
   of the potential. The statement records the identification of `qE` with the electric
   term as an adopted physical reading (the coupling postulate gives the covariant law and
   declines the nonrelativistic coordinate form), not a derived decomposition; no equation
   of motion is asserted. Checked: precheck PASS, proof-layout 0 defects, rendercheck clean.
9. `pthm-em-electrostatic-field-energy` (level 19) — authored. Finiteness and equality of
   `(eps_0/2) int |E|^2`, `(1/2) int rho phi` and `(1/(2 eps_0)) iint Phi(x-y) rho(x) rho(y)`
   for compact `C^1` sources: Green's first identity on the certified balls with a boundary
   term `O(1/R')`, monotone convergence, Fubini symmetry of the double kernel, and the
   signed assembly bookkeeping for `rho_s = s rho`, `phi_s = s phi` (electric-force work
   from infinity `-dq phi_s`, balancing external work `+dq phi_s`, factor `1/2`). Scope (c)
   records external support, excludes time-dependent work, radiation, material/stability
   models and field-energy/rest-mass identification, and defers the divergent point limit
   to the self-energy item below. Checked: precheck PASS, proof-layout 0 defects,
   rendercheck clean.
10. `pthm-em-point-self-energy-divergence` (level 20) — authored. Polar integration and FTC
    give `U_q(delta,R) = q^2/(8 pi eps_0)(1/delta - 1/R)`, hence
    `lim_R U_q = q^2/(8 pi eps_0 delta)` and divergence as `delta -> 0` for `q != 0`.
    Clause (c) explicitly excludes rest-mass, self-force, measurement and
    inconsistency-of-the-framework inferences, and contrasts the ideal point
    idealisation with the finite compact-source energy and the compact `L^1` branch.
    Checked: precheck PASS, proof-layout 0 defects, rendercheck clean.
11. `ex-em-uniform-ball-coulomb` (B page, level 20) — authored. Verifies the piecewise
    candidate field and continuous potential, `E = -grad phi`, the pointwise equations off
    the sphere, the distributional equations `div E = rho/eps_0`, `curl E = 0` with zero
    surface jump `[E] = 0` through `lem-em-interface-derivatives` and
    `def-em-surface-distribution`, the exterior Coulomb identification with total charge
    `Q`, and the exact finite energy `3Q^2/(20 pi eps_0 a)` equal to the assembly integral.
    Scope (f) records that the example verifies the displayed candidate only: no
    uniqueness, stability or empirical claim, and the sphere carries no surface charge.
    Checked: precheck PASS, proof-layout 0 defects, rendercheck clean.

### Second authoring pass after context resume (2026-10-09)

All eleven carriers, both pages, the manifest rows, the coverage file, the proof contracts
and the cross-batch input were re-read from disk and re-checked; the manifest item rows now
match the authored frontmatter dep lists and `dependency_roles` exactly (mechanical
comparison over the eleven items). Two proof-text repairs were made in this pass; no
Statement or Definition changed, no dependency and no dependency level changed:

- `pthm-em-coulomb-solution` step 1.1: removed a false assertion that the second
  derivatives of the kernel are locally integrable on `\mathbb R^3`. In dimension three the
  second derivatives are homogeneous of degree `-3` and `\int_{|z|<b}|z|^{-3}` diverges, so
  only `\Phi` and `\nabla\Phi` are locally integrable (the `k=1,2` cases actually used). The
  step now asserts exactly that; nothing else used the removed claim.
- `lem-em-euclidean-balls-and-annuli-are-bounded-c-one-domains` steps 2.1 and 3.1: the graph
  presentation is now stated on the parameter domains `|y|<R` resp. `|y|<\varepsilon` where
  `h` and `h_\varepsilon` are defined; the previous wording displayed `z<h(y)` on all of the
  patch `U_{k,\sigma}`, where `h` need not be defined. The covering argument and both normal
  computations are unchanged.

The proof-contract `citations`/`derivations` for both items were regenerated with
`regen-contract-entries.mjs`, and the contract battery re-run afterwards. The checkpoint
note in the Step-1 batch notes about re-syncing the manifest is closed: the sync is done.

### Direct in-run prerequisite pair `em-maxwell-integral-and-constraints` (batch 24)

Inspected at handoff. All nine of its items are authored on disk
(`lem-em-coordinate-cell-localization`, `lem-em-surface-density-localization`,
`def-em-fixed-test-geometry`, `def-em-weak-sources`, `post-em-distributional-vacuum-maxwell`,
`pthm-em-charge-continuity`, `pthm-em-integral-maxwell`, `pthm-em-fixed-vacuum-jumps`,
`pthm-em-gauss-constraint-propagation`). The only item of that pair reached by this pair's
closure is `def-em-weak-sources`; its current Definition was read against every consumer
step (clauses (b),(e),(f) in `def-em-electrostatic-regime` steps 4.1-6.1,
`pthm-em-coulomb-solution` steps 2.1/4.1/8.1, `ex-em-infinite-line-normalization` scope (g),
`ex-em-uniform-ball-coulomb` steps 4.1/8.1), and no interface mismatch was found. No
consuming step of this pair remains flagged against an unauthored supplier, so no item
decision of this pair is left escalated on that ground. One sibling-owned plan finding is
reported under "Sibling concerns" below.

### Checks actually run (final, after the repairs)

- `node tools/tsx-run.mjs tools/physics-support/precheck.mts <11 item paths>`: 11 checked,
  0 failing, all clean (all `direct`).
- `node tools/physics-support/proof-layout.mjs <11 item paths>` (single batched command,
  the required pre-handoff run): 11 items, 74 steps, 0 defects.
- `node tools/physics-support/rendercheck.mjs <11 item paths + 2 page paths>`:
  `OK — 13 file(s)`; every math span parses and every frontmatter block parses.
- `node tools/physics-support/content-policy.mjs research/...-batch-25.pages.json`:
  11 scoped items, 0 errors, 0 warnings.
- `node tools/physics-support/proof-contract.mjs research/...-batch-25.proof-contracts.json
  --strict`: 0 errors, 0 warnings, 11/11 items checked.
- `node tools/physics-support/citation-fidelity.mjs research/...-batch-25.proof-contracts.json
  --fail-on-missing-quote`: 344 citations over 11 items; no missing quote; no widening
  candidates.
- `node tools/physics-support/boundary-audit.mjs research/...-batch-25.proof-contracts.json
  --fail-on-contradicted`: 88 rows (45 `not_applicable`); no template reuse; no contradicted
  dispositions.
- `node tools/physics-support/coverage-checklist.mjs research/...-batch-25.coverage.json`:
  2 pages, 29 harvested results, 0 errors, 0 warnings.
- `node tools/physics-support/item-dependency-levels.mjs check --run
  physics-em-sr-40-2026-10-08`: 473 items over 80 pages, maximum level 24, exit 0; the owned
  levels remain 0/0/0/15/16/16/18/19/20 (A) and 17/20 (B).
- `node tools/physics-support/validate-plan.mjs research/plan-spec.json --pages-file
  <this pair's two pages>`: OK (acyclic, consistent); the only output is the two
  pre-existing `redundant-prereq` warnings listed under "Sibling concerns".
- `node tools/physics-support/validate-plan.mjs research/plan-spec.json --run
  physics-em-sr-40-2026-10-08`: exit 1 on 39 `undeclared-prereq` rows, all naming
  sibling-owned pages; no row names a batch-25 page or item (batch-25 contributes only the
  two warnings).
- `node tools/physics-support/depcheck.mjs` / `fwdcheck.mjs` run-wide: current sibling-owned
  failures exist (in-progress pairs), but no error and no warning names any batch-25 carrier.
- `node tools/physics-support/frontier-dependency-ledger.mjs refresh --run
  physics-em-sr-40-2026-10-08`: refreshed and deduplicated. The batch-25 input carries 40
  rows (1 page, 39 item) and every declared cross-batch edge of this pair now has a
  `verified` review row imported from the Step-3b reconciliation of 2026-10-09.

### Item decisions recorded

All eleven items were recorded with `tools/physics-support/step3-decisions.mjs record-item`,
`confidence 1`, the examined dependency lists and the check evidence below; receipts are
`research/physics-em-sr-40-2026-10-08-step3b-review-<id>.json`. `accept`:
`lem-em-distributional-gradient-smooth-off-a-point`, `lem-em-newtonian-far-field-gradient`,
`pthm-em-electrostatic-potential`, `ex-em-infinite-line-normalization`,
`pthm-em-point-self-energy-divergence`, `ex-em-uniform-ball-coulomb`. `repaired`:
`lem-em-euclidean-balls-and-annuli-are-bounded-c-one-domains`, `def-em-electrostatic-regime`,
`pthm-em-coulomb-solution`, `pthm-em-electrostatic-work`,
`pthm-em-electrostatic-field-energy`. The `repaired` reasons name the concrete repair made
in the current pass (or, for `def-em-electrostatic-regime`/`pthm-em-electrostatic-work`/
`pthm-em-electrostatic-field-energy`, in the preceding pass); the `accept` reasons state
that the statement, dependencies and proof were re-read and re-checked against the current
carriers and suppliers. Because the item hash binds the transitive closure, which includes
other groups' in-run items and page manifests still being written concurrently, four rows
(work, field-energy, self-energy, uniform-ball) went stale within seconds of the first
record and were re-recorded; a final in-process `itemDecision` pass at 2026-10-09T07:57:45Z
confirms all eleven rows closed against the then-current closure. If a sibling edit lands
afterwards the Step-3 final check will require a fresh audit of the affected rows under the
ordinary changed-inputs rule.

### Sibling concerns (reported, not edited)

1. Run-level `validate-plan --run` currently fails on 39 `undeclared-prereq` rows across
   sibling pairs (none names a batch-25 carrier). The one relevant to this dispatch's named
   prerequisite pair: page `em-maxwell-integral-and-constraints` (batch 24) has items
   `lem-em-coordinate-cell-localization` and `pthm-em-integral-maxwell` reaching
   `lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals`, homed on
   the published page `measurable-densities-and-radon-volume-on-manifolds`, which is not in
   the closure of that page's declared `requires`. Confidence: record-level (tool output).
   Remedy: the batch-24 owner adds the published page (or another exact declared home) to
   the page's `requires`, or drops the dependency — either way a sibling edit, routed to
   that owner; it does not affect this pair's uses, and it is not a defect in the supplier
   content consumed here.
2. The A page `em-electrostatics-in-vacuum` carries two `redundant-prereq` warnings:
   `product-measures-and-the-fubini-tonelli-theorems` and
   `the-lebesgue-integral-and-the-convergence-theorems` are declared directly although both
   are reached through `em-maxwell-integral-and-constraints`. These are the Step-1 declared
   manifest additions recorded by the batch-25 notes; they are metadata hygiene for the
   Step-4 splice, not a content defect.
3. No published supplier used by this pair was found false, mistyped or directionally wrong
   in this pass; no published concern is raised for owner action.

### Open obligations at handoff

- Steps 5-8 independent mathematical review, judging and adjudication of the eleven carriers
  and the two pages remain outstanding by design.
- Downstream consumers on batches 26-27 (`em-electrostatic-boundaries-and-conductors`,
  `em-electrostatic-multipoles`) use `def-em-electrostatic-regime` and
  `pthm-em-electrostatic-potential`; their own Step-3b passes own the consumer checks. No
  public interface (Statement/Definition, `physical_scope`, `empirical_premises`) was
  changed by the two proof-text repairs, so no consumer review is triggered by this pass.
- The item receipts are current as of this handoff's closure state; concurrent sibling
  authoring can invalidate individual hashes before the engine's gate, in which case the
  ordinary changed-inputs rule applies.
