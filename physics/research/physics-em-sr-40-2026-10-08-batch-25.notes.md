# Batch 25 notes — `em-electrostatics-in-vacuum` / `-examples`

Run `physics-em-sr-40-2026-10-08`, role beta, Step 1 scaffold construction, 2026-10-09.
Scope: exactly one A/B pair, A page order **329**, B page order **330**, category
`classical-electromagnetism`, library `physics`. Final inventory: **9 A items + 2 B items**
(six design items, three local mathematical prerequisites on the A page, and the two design
B items). Files written by this batch: the manifest
(`research/physics-em-sr-40-2026-10-08-batch-25.pages.json`), the coverage file
(`...-batch-25.coverage.json`), the cross-batch dependency input
(`...-batch-25.cross-batch-dependencies.json`), eleven `step1-<item>` readiness records, this
note, and the tool-refreshed unified dependency ledger. No item file, page, plan, published
item, engine state or verdict was edited. The binding owner direction
`research/physics-em-sr-40-2026-10-08-owner-authoring-direction.md` was read first; its
relevant corrections are checked under "Owner-direction interfaces".

## Design vs plan

Design section `research/plan-classical-electromagnetism-track.md` L1742 ("Electrostatics in
vacuum", quoting `proposed-inventory.json` and the exact contracts in
`definition-contracts.md#def-em-electrostatic-regime` and `core-conditional-proofs.md#K2`,
with the worked examples at `worked-example-verifications.md#X2`). Compared with
`research/plan-spec.json` orders 329/330: page ids, kinds, orders, category, library
`physics`, titles, companion links and the declared `requires`
(`em-maxwell-integral-and-constraints`, `product-measures-and-the-fubini-tonelli-theorems`,
`the-lebesgue-integral-and-the-convergence-theorems`) agree exactly, and the reserved
inventories (6 A items, 2 B items) are preserved. **No page-metadata plan conflict.** The
design's own `dependency_level` labels were computed over a pre-run dependency set; under the
run's in-run convention the eleven computed levels are 0, 0, 0, 15, 16, 16, 18, 19, 20 (A)
and 17, 20 (B), and `item-dependency-levels check --run` confirms them. The two page-metadata
additions this batch makes are the requires entries `maximum-principles-harnack-and-liouville-in-rn`
and `the-real-gamma-and-beta-functions` (finding 1).

## Inventory decisions (recorded, item by item)

The six design items keep their promised content with exact statements and complete proof
strategies; dependency lists were reconciled to the actual uses, and three local mathematical
prerequisites were added on the same A page before their consumers (the mandate's preferred
placement). No claim was dropped and none weakened.

1. **`def-em-electrostatic-regime`** (design item; level 15). Kept the design dep
   `post-em-vacuum-maxwell`; added the exact suppliers of the clauses: `def-em-lab-geometry`,
   `def-em-si-conventions`, `def-em-fields`, `def-em-sources`, `def-em-weak-sources`
   (formulation), `def-directional-and-partial-derivatives`,
   `def-divergence-and-curl-of-a-c1-vector-field`, `def-ck-euclidean-maps-and-diffeomorphisms`,
   the Fubini theorem, the distributional interface items, `def-dirac-delta-and-its-derivatives`
   and `cor-mean-value-theorem` (for the zero-derivative-is-constant step in the fixed-time
   reading). The definition states the static and pure electrostatic conditions, proves the
   reduction of the smooth Maxwell equations to `div E = rho/epsilon_0`, `curl E = 0` in the
   pure case, fixes the fixed-time reading, and — clause (e) — records the static-to-4D
   distributional dictionary for locally integrable time-independent objects, including the
   stationary point charge as the constant-trajectory point source of `def-em-weak-sources`(b).
   This is the interface the later conductor and multipole pages will consume.
2. **`pthm-em-electrostatic-potential`** (design item; level 16). Kept the design deps
   (`def-em-electrostatic-regime`, `thm-poincare-lemma-for-star-shaped-domains`,
   `def-laplacian-of-a-c2-function`); added `def-star-shaped-open-subset-of-rn`,
   `def-closed-and-exact-c1-vector-fields`, `cor-curl-vanishes-exactly-when-a-field-is-closed`
   (to identify `curl E = 0` with closedness of `-E`), `def-divergence-and-curl-of-a-c1-vector-field`,
   `def-directional-and-partial-derivatives`, `def-ck-euclidean-maps-and-diffeomorphisms`,
   `def-euclidean-inner-product` (the radial construction), `cor-potentials-differ-by-a-componentwise-constant`,
   `def-piecewise-c1-path-connected-conservative-and-path-independent` (uniqueness up to
   constants on the star-shaped region) and `thm-algebra-of-derivatives`. The statement keeps
   K2's content: the radial potential `phi(x) = -int_0^1 E(a+s(x-a))·(x-a) ds` is `C^2` with
   `grad phi = -E`, `-Delta phi = div E = rho/epsilon_0` pointwise, and the potential is unique
   up to an additive constant. Scope: no boundary data and no infinity normalization on a
   general star-shaped region.
3. **`pthm-em-coulomb-solution`** (design item; level 16). Kept the design deps
   `def-em-weak-sources`, `thm-minus-laplacian-of-the-fundamental-solution-is-dirac`,
   `thm-newtonian-potential-solves-poisson-distributionally`; **dropped**
   `pthm-em-electrostatic-potential` (finding 2: the construction and the uniqueness argument
   do not use the Poincare existence theorem). Added the exact suppliers of the four clauses:
   `thm-newtonian-potential-for-holder-data-is-classical` (smooth branch `C^2` and pointwise
   Poisson equation), `thm-decay-of-the-newtonian-potential-of-compactly-supported-data` and
   the new `lem-em-newtonian-far-field-gradient` (gradient representation and `|E|` bound off
   `2R`), `thm-weak-maximum-principle-for-the-laplacian` (uniqueness with vanishing at
   infinity), the new `lem-em-distributional-gradient-smooth-off-a-point` (the transition from
   the distributional Laplacian of the potential to the distributional divergence of the
   point-charge field), `cor-volume-of-the-unit-n-ball` and
   `lem-euclidean-chart-measure-agrees-with-polar-surface-measure` (`omega_2 = 4 pi`, hence
   `Phi(z) = 1/(4 pi |z|)`), plus the operators, chain rule, distribution and measure items
   used. The statement covers the smooth compact branch (with the Coulomb integral
   representation and decay bounds), the uniqueness with vanishing at infinity, the compact
   `L^1` distributional branch, and the ideal point charge with
   `-Delta T_{phi_q} = div E_q = (q/epsilon_0) delta_{x_0}`, `curl E_q = 0` in `D'(R^3)`.
   The point source is read through `def-em-electrostatic-regime`(e) as the stationary point
   charge of `def-em-weak-sources`(b); no uniqueness, self-force or value at the pole is
   claimed.
4. **`pthm-em-electrostatic-work`** (design item; level 18). Kept `pthm-em-electrostatic-potential`,
   `post-em-lorentz-coupling`, `thm-gradient-theorem-for-line-integrals`; added
   `def-em-electrostatic-regime`, the field/source/unit/region formulation items,
   `def-scalar-and-vector-line-integrals-along-piecewise-c1-paths`,
   `cor-potentials-differ-by-a-componentwise-constant`, `def-star-shaped-open-subset-of-rn`,
   `def-ck-euclidean-maps-and-diffeomorphisms`, `def-interval`,
   `def-directional-and-partial-derivatives`, `def-euclidean-inner-product` and
   `thm-algebra-of-derivatives`. The statement gives the potential-difference formula, path
   independence, the zero work on closed paths, the potential-energy reading and gauge
   invariance of the work; it is a line-integral identity for a prescribed path, with the
   physical reading supplied by the adopted external coupling, and asserts no equation of
   motion.
5. **`pthm-em-electrostatic-field-energy`** (design item; level 19). Kept
   `pthm-em-coulomb-solution`, `pthm-em-electrostatic-work`,
   `cor-first-green-identity-on-a-bounded-c-one-domain`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`,
   `thm-dominated-convergence`; added the new `lem-em-euclidean-balls-and-annuli-are-bounded-c-one-domains`
   (Green's identity needs the ball certified in the `C^1`-domain class), the new
   `lem-em-newtonian-far-field-gradient` (the `|E|` boundary estimate), the decay theorem, the
   polar/volume/area items (`|S_R| = 4 pi R^2`), `thm-monotone-convergence-for-the-integral`
   and the analytic layer. The statement proves finiteness and the identity
   `(epsilon_0/2) int |E|^2 = (1/2) int rho phi = (1/(2 epsilon_0)) iint Phi(x-y) rho(x) rho(y)`
   (the `1/epsilon_0` in the last expression comes from `phi = epsilon_0^{-1} N rho`), with the
   assembly interpretation and the explicit exclusion of time-dependent, radiative,
   material and mass-identification claims.
6. **`pthm-em-point-self-energy-divergence`** (design item; level 20). Kept
   `pthm-em-coulomb-solution`, `pthm-em-electrostatic-field-energy`; added the polar/volume
   items, the truncated-integral analytic layer (`thm-ftc-second-part`,
   `lem-derivative-of-a-power`, monotone convergence, the null-set item) and the
   field/source/unit/static-regime items. The statement gives
   `U_q(delta,R) = q^2/(8 pi epsilon_0)(1/delta - 1/R)`, the two limits, and clause (c)
   explicitly excludes rest-mass, self-force, measurement and inconsistency conclusions.
7. **`lem-em-newtonian-far-field-gradient`** (new local prerequisite, mathematics, level 0).
   Needed because `pthm-em-coulomb-solution` and `pthm-em-electrostatic-field-energy` need the
   far-field gradient representation and the `|E| <= ||rho||_1/(pi epsilon_0 |x|^2)` bound off
   twice the support ball for merely `L^1` compactly supported data. The lemma proves both by
   the differentiation-under-the-integral theorem with an explicit domination bound.
8. **`lem-em-distributional-gradient-smooth-off-a-point`** (new local prerequisite,
   mathematics, level 0). Needed because the point-charge clause must pass from the
   distributional Laplacian of the potential (a published theorem) to the distributional
   divergence of the field `E_q = -grad phi_q`. The lemma proves
   `partial_i T_u = T_{partial_i u}` for `u in L^1_loc`, continuous and `C^1` off one point
   with locally integrable classical gradient, by one-dimensional integration by parts on
   almost every coordinate line plus Fubini.
9. **`lem-em-euclidean-balls-and-annuli-are-bounded-c-one-domains`** (new local prerequisite,
   mathematics, level 0). Needed because Green's first identity and the divergence theorem are
   stated for bounded `C^1` domains and the sphere must be available as a compact embedded
   hypersurface. The lemma verifies the graph charts of the balls, the two boundary spheres of
   the annulus, the outward normals `+-x/|x|`, Heine-Borel compactness of the spheres, and the
   two-face piecewise presentation of the annulus.
10. **`ex-em-infinite-line-normalization`** (design item; level 17). Kept the design dep
    `pthm-em-electrostatic-potential` (used in clause (e): its star-shaped hypothesis fails on
    the punctured domain) and added `pthm-em-coulomb-solution` (the superposition used in the
    distributional identity), the regime/field/source/unit items, `def-em-weak-sources` (the
    scope clause), the polar/area items, the patch/flux items, the complex-exponential items
    used to parametrize the cylinder without a separate trigonometric development, Fubini and
    the analytic layer. The example verifies the gradient, the classical equations off the
    axis, the lateral cylinder flux `lambda L/epsilon_0`, the distributional identity
    `div E = (lambda/epsilon_0) rho_lambda` on `R^3`, the failure of the infinity normalization
    and of star-shapedness, the divergent energy per length, and records that the line source
    lies outside the declared source types.
11. **`ex-em-uniform-ball-coulomb`** (design item; level 20). Kept
    `pthm-em-coulomb-solution`, `pthm-em-electrostatic-field-energy`; added
    `lem-em-interface-derivatives` and `def-em-surface-distribution` (the zero-jump interface
    argument), `lem-em-euclidean-balls-and-annuli-are-bounded-c-one-domains` (the sphere as a
    smooth hypersurface), `def-em-weak-sources` and `def-em-electrostatic-regime` (the weak
    reading), and the differential/integration layer. The example verifies the candidate
    piecewise field and continuous potential, the classical equations off the sphere, the
    distributional equations with zero surface charge, the exact energy and assembly values
    `3Q^2/(20 pi epsilon_0 a)`, the exterior Coulomb identification, and records that no
    uniqueness, stability or empirical claim is made.

## Dependency verification (actual transitive uses, not declared edges)

All dep targets resolve: published imported items on disk, plus the in-run suppliers
`def-em-lab-geometry` (6), `def-em-si-conventions` (7), `def-em-fields` (8),
`def-em-sources` (12), `post-em-vacuum-maxwell` (13), `post-em-lorentz-coupling` (17)
(batch 23), `def-em-weak-sources` (14) (batch 24), `def-em-surface-distribution` (0) and
`lem-em-interface-derivatives` (1) (batch 13), and the eleven items of this page pair.
Interfaces were read on disk; the checks are recorded per consumer in the cross-batch input,
which carries 40 rows (1 page row and 39 item rows), one per declared in-run cross-batch edge.
The A page's four published-mathematics `requires` entries and the B page's same-batch `requires`
on its own A page are not cross-batch edges of this run; they are declared in the manifest and
documented here (finding 9 instead of ledger rows).
Points checked in particular:

- **`def-em-lab-geometry` / `def-em-si-conventions`**: the restricted inertial chart, its
  fixed-time readings and the SI unit table with `epsilon_0 = (mu_0 c^2)^{-1}` are the ambient
  conventions of every item of this page; the page never asserts a Galilean transformation, an
  observer congruence or a second frame.
- **`post-em-vacuum-maxwell`**: only its smooth branch and the reduced static equations are
  used; the weak branch is used only through the separately adopted distributional source
  objects, and the point/sheet exclusions are respected (the line example explicitly keeps its
  source outside the declared types).
- **`def-em-weak-sources`**: the point-charge reading uses clause (b) with the constant
  trajectory; the weak predicate (e) and the no-products clause (f) are respected everywhere
  (no product of distributions is formed).
- **`lem-em-interface-derivatives`** and **`def-em-surface-distribution`**: the same normal
  convention (from the minus to the plus side) and jump `[F] = F_+ - F_-` as the zero-jump
  argument of the ball example; the sphere's membership in the compact embedded hypersurface
  class is certified by the new local lemma.
- **Imported mathematics**: the hypotheses of the Poincare lemma (star-shaped open set,
  closed `C^1` field), of the Holder/Newtonian theorems (continuous compactly supported Holder
  data; compactly supported `L^1` data), of the decay theorem (compact support, `L^1`), of the
  weak maximum principle (bounded open set, `C^2` up to the closure) and of the polar/Fubini
  items were checked against their statements on disk.
- **Axioms.** AC_w is declared and used wherever a cited Lebesgue, polar or surface interface
  carries it (the three local lemmas, the field-energy and self-energy statements, the two
  examples). No use of Recorded results and no `deferred-set-theory-beyond-choice` path.
- No missing, circular, forward or inadequate dependency was found. The design's dep lists
  were extended only with suppliers the statements and proofs genuinely use (finding 2 records
  the single removal).

## Owner-direction interfaces checked

- The fifth reconciliation's SI conventions (`epsilon_0 := (mu_0 c^2)^{-1}`, measured `mu_0`,
  exact `c` and `e`) are consumed as stated; no numerical value of `mu_0` is asserted and no
  exact Coulomb constant beyond the definition of `epsilon_0` appears.
- The sixth reconciliation's weak-Maxwell scoping (singular sources adopted separately; no
  products of distributions; L1-loc volume parts) is respected: the ball example keeps a
  bounded `L^1_loc` volume density with zero singular part, and the point-charge clause
  states exact distributional identities without forming any product.
- The examples' scope clauses carry the empirical qualifications: no measurement, no
  self-force, no mass identification, no framework proof; the line source and the point source
  are both marked as idealisations with explicitly limited physical scope.

## Findings for owner reconciliation

1. **Two page-requires additions (this batch's manifest).** (a)
   `maximum-principles-harnack-and-liouville-in-rn` (order 80.994 < 329) supplies
   `thm-weak-maximum-principle-for-the-laplacian`, consumed by `pthm-em-coulomb-solution` (b)
   for the uniqueness of the decaying potential. (b) `the-real-gamma-and-beta-functions`
   (order 80.890 < 329) supplies `cor-volume-of-the-unit-n-ball`, giving `|B_1| = 4 pi/3`
   and `|B_1| = pi`, hence `|S^2| = 4 pi` and `|S^1| = 2 pi` jointly with
   `lem-euclidean-chart-measure-agrees-with-polar-surface-measure`; these enter the
   point-charge flux normalization, the two energy computations and the self-energy
   divergence. Both are published `P` pages already in the plan, earlier than order 329; the
   manifest overlay declares them and the owner may sync `plan-spec.json`.
2. **Design dep reconciliation (recorded).** The design inventory lists
   `pthm-em-electrostatic-potential` among the deps of `pthm-em-coulomb-solution`. The
   scaffold does not carry it: the smooth-branch construction, the decay estimates, the
   uniqueness argument and the point-charge clauses use the Newtonian/fundamental-solution
   suppliers directly and never invoke the Poincare existence theorem; the item is consumed
   by `pthm-em-electrostatic-work` and compared in `ex-em-infinite-line-normalization` (e).
   This is a dependency-accuracy correction, not a claim reduction.
3. **Point-charge formulation decision.** The framework's point source is the 4D object of
   `def-em-weak-sources`(b); the theorems and examples state the spatial identities on `R^3`
   and connect them to the 4D model through `def-em-electrostatic-regime`(e). The spatial
   `delta_{x_0}` is the fixed-time reading of the stationary point source; no 4D point
   distribution is re-defined.
4. **Line-source scope decision.** `ex-em-infinite-line-normalization` states a
   distributional identity for the explicitly specified `rho_lambda`, which is *not* among
   the declared source types. This is recorded in the item's scope clause (g) and in the
   coverage dispositions; it is a mathematical idealisation, not a framework postulate.
5. **Three local mathematical prerequisites added** (items 7-9 above) with stable IDs,
   complete proof strategies and level 0; all other suppliers are published imports or
   earlier in-run scaffolds. The 100-item cap is not approached (9 A items).
6. **No published defects found.** None of the published suppliers read for this batch was
   found false, mistyped or directionally wrong. In particular the Green identity, divergence
   theorem, Poincare lemma, Newtonian/fundamental-solution theorems, weak maximum principle,
   polar formula and volume items were read with their hypotheses and match this page's uses.
7. **Run-level state observed, not this batch's.** Batches 26-30 and 33-40 still carry empty
   scaffold inventories; `item-dependency-levels check --run` therefore reports
   `empty scaffold inventory` rows for those pages (and only those). No reporting row names a
   batch-25 page or item.
8. **Design-vs-scaffold additions recorded as evidence.** The three new lemmas are
   framework-local mathematical prerequisites created to satisfy the "define, do not merely
   name" and "complete the remaining gaps locally" obligations; they follow the pattern of the
   two local lemmas added by batch 24 and are intended for reuse by the conductor, multipole
   and magnetostatics pages of this run (which need the same domain/flux machinery).
9. **Cross-batch input scope (recorded).** The batch input was first drafted with 45 rows,
   including the A page's four published-mathematics `requires` entries and the B page's
   same-batch `requires` on its own A page. `frontier-dependency-ledger refresh` reports such
   rows as orphaned reviews, because the unified ledger covers only dependencies between
   *different batches of this run*. The file was therefore replaced atomically with the 40
   rows that correspond to the declared in-run cross-batch edges (39 item rows and the page
   row `em-electrostatics-in-vacuum -> em-maxwell-integral-and-constraints`); after the refresh
   no orphaned review is reported. The substance of the five removed rows stays in the manifest
   `requires` and in findings 1-4; nothing was dropped from the dependency record, only re-homed
   to the files the ledger tool actually reads (the batch-22/23/24 inputs follow the same
   convention).
10. **Run-level gate observations, not this batch's.** (a) `physics-check --run ... --plan`
    reports exactly one error, `role-supplier [ex-em-polarization-examples]` (batch 32).
    (b) `frontier-item-gate ... --tool extcheck -- --manifest-only` cannot start while batches
    26-40 have empty inventories; the manual closure check of the Checks section is this
    batch's substitute evidence. (c) `validate-plan` exits 0; its two warnings naming page 329
    are the plan-inherent redundant-prereq advisories detailed in the Checks section, which an
    owner reconciling the plan may resolve by dropping the two direct requires at 329 (the
    plan-spec itself lists them, so the scaffold keeps them).

## Sources (four treatments, all full-text stamped 2026-10-09)

1. **D. J. Griffiths**, *Introduction to Electrodynamics*, 3rd edition, Prentice Hall 1999
   (textbook). Full scanned PDF (596 pp., 13484424 bytes) at the repaired `hlevkin.com`
   URL used by batches 22-24. Read: §1.5.3 pp. 50-52, §2.1.2 pp. 59-60, §2.2 pp. 65-77
   (Examples 2.2-2.3, Problems 2.12-2.13), §2.3 pp. 77-88, §2.4 pp. 90-96.
2. **D. Tong**, *Electromagnetism*, Cambridge Part II lecture notes, 2026 printing
   (lecture-notes). Author-hosted full-text PDF (236 pp., 1882418 bytes). Read: §2.1
   pp. 8-13, §2.2 pp. 16-19, §2.3 pp. 25-28.
3. **L. D. Landau, E. M. Lifshitz**, *The Classical Theory of Fields*, Third Revised English
   Edition, Pergamon 1971 (monograph). Full-text PDF (387 pp., 11900733 bytes). Read: §36
   pp. 88-89, §37 pp. 89-90 (Gaussian units re-expressed in SI).
4. **W. C. Chew**, *Lectures on Electromagnetic Field Theory*, Purdue University Fall 2020
   (lecture-notes). Full-text PDF (497 pp., 6558677 bytes). Read: §1.3.1-1.3.2 pp. 8-9,
   §3.3.2-3.3.3 pp. 35-36.

All eight source rows (four sources x two pages) were downloaded and stamped by
`source-fetch-check --stamp` on 2026-10-09 (8 newly stamped) and check mode passes 8/8
resolved; the recorded stamps are Griffiths 13484424 bytes / sha256_16 ab7b67a3f6d60049 / 596
pp., Tong 1882418 / b99b41156dfe6cd9 / 236 pp., Landau-Lifshitz 11900733 / 57de03326f8ebe4a /
387 pp., Chew 6558677 / 51495b51fe349871 / 497 pp., identical on both pages. The byte sizes
match the full texts read above.

## Checks run (actual results)

- `manifest-deps` over all forty manifests (whole run): 372 items, 0 normalized, 0 errors.
- `item-dependency-levels check --run`: the eleven items compute 0, 0, 0, 15, 16, 16, 18, 19, 20
  (A) and 17, 20 (B), matching their labels; the 20 remaining errors are `empty scaffold
  inventory` rows for batches 26, 27, 30 and 34-40; no error names a batch-25 page or item.
- `content-policy --manifest-only` over all forty manifests: 372 scoped items, 0 errors, 0
  warnings.
- `physics-check --run ... --plan research/plan-spec.json`: 372 items checked, 1 error
  (`role-supplier [ex-em-polarization-examples]: def-em-polarization-definition is not an
  established physical result`, batch 32; run-level, not this batch).
- `coverage-checklist --require-destination` on batch 25: 2 pages, 29 harvested results,
  0 errors, 0 warnings.
- `source-fetch-check --coverage ... --stamp`, then check mode: 8/8 fetch-verified (8 newly
  stamped; Griffiths 13484424 bytes / sha256_16 ab7b67a3f6d60049 / 596 pp., Tong 1882418 /
  b99b41156dfe6cd9 / 236 pp., Landau-Lifshitz 11900733 / 57de03326f8ebe4a / 387 pp., Chew
  6558677 / 51495b51fe349871 / 497 pp., identical on both pages), 8/8 resolved.
- `step1-decisions record` x11 (all `ready`) + `check --run`: 372 items, 372 ready; the 20
  remaining work rows are the empty inventories of batches 26, 27, 30 and 34-40.
- `manifest-integrity --run`: 80 pages owed, 80 in the manifests, no scope drift.
- `drift-review-check --run`: 40 pages reviewed, 0 spec edits applied, no blocked edges; 52
  same-category requires edges checked, every owed A and B page strictly above 95%
  published-or-earlier-in-run.
- `frontier-dependency-ledger refresh --run`: refreshed; the batch-25 input carries 40 rows
  (1 page row and 39 item rows), one per declared in-run cross-batch edge (32 edges to batch
  23, 6 to batch 24, 2 to batch 13), and no orphaned review is reported for this batch.
  `--require-reviewed` still fails (`Cross-batch review incomplete`): the 10 batches 26, 27,
  30 and 34-40 have supplied no input, and all 27 edges without a review have one of those
  batches as consumer (run-level state).
- `frontier-item-gate ... --tool validate-plan`: exit 0; "declared page order is acyclic and
  consistent; no item-level cycles, forward references, B-page dependencies, or unresolved
  ids among the 60 page(s) with item lists". Of the 23 warnings, 2 name page 329: the direct
  requires `product-measures-and-the-fubini-tonelli-theorems` and
  `the-lebesgue-integral-and-the-convergence-theorems` are already reachable through
  `em-maxwell-integral-and-constraints` (which itself requires the product-measure page in the
  plan-spec). These are plan-inherent redundant-prereq advisories, not errors, and no warning
  or error names a batch-25 item.
- `frontier-item-gate ... --tool extcheck -- --manifest-only`: cannot run;
  `run-manifest-pages` throws `Invalid or empty current page in
  ...batch-26.pages.json` because batches 26-40 still carry empty inventories (run-level; the
  same limitation batches 21-24 recorded). Substitute evidence: a manual transitive closure
  over the eleven items' `deps`, expanded through item frontmatter and all run manifests,
  visited 1353 items with 0 unresolved ids, 0 `proved_here: false` items and 0
  `external_refs`; no item of this pair rests on unproved or deferred material.

## Honest uncertainty

- The eleven items are scaffolded with complete statements and proof strategies and with exact
  cited uses, but they are not authored item files and have not received independent review;
  Step 3 provides that. The delicate points to check line by line at authoring time are: the
  domination and measurability hypotheses in `lem-em-newtonian-far-field-gradient`; the
  almost-every-line integration-by-parts and the Fubini applications in
  `lem-em-distributional-gradient-smooth-off-a-point`; the graph-chart verification of the
  balls/annuli and the sphere's compactness in the third lemma; the annulus and boundary-term
  limits in `pthm-em-electrostatic-field-energy`; the superposition/Fubini interchange and the
  flux patch evaluation of `ex-em-infinite-line-normalization`; and the zero-jump interface
  application in `ex-em-uniform-ball-coulomb`.
- The design's dependency lists were written before the EM mathematics pages and the
  primitives/Maxwell pages were scaffolded; the reconciliations recorded above are the
  scaffolder's reading of the actual uses and must be re-verified against the authored
  supplier texts at Step 3, not treated as certification.
- The point-charge and line-charge distributional identities are stated as facts about
  explicitly specified distributions under the framework's conventions; they are not claims
  that the framework's source postulates cover these singular objects beyond the declared
  point/stationary-sheet classes. Reviewers should keep that distinction.
