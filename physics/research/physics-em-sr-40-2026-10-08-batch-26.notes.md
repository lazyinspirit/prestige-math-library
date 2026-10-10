# Batch 26 notes — `em-electrostatic-boundaries-and-conductors` / `-examples`

Run `physics-em-sr-40-2026-10-08`, role beta, Step 1 scaffold construction, 2026-10-09.
Scope: exactly one A/B pair, A page order **331**, B page order **332**, category
`classical-electromagnetism`, library `physics`. Final inventory: **9 A items + 3 B items**
(the six reserved design items, three reserved B examples, and three new local mathematical
prerequisites on the A page). Files written by this batch: the manifest
(`research/physics-em-sr-40-2026-10-08-batch-26.pages.json`, published by atomic rename of a
complete two-page array), the coverage file (`...-batch-26.coverage.json`), the cross-batch
dependency input (`...-batch-26.cross-batch-dependencies.json`, 56 rows), twelve
`step1-<item>` readiness records, this note, and the tool-refreshed unified dependency ledger.
No item file, page, plan, published item, engine state or verdict was edited. The binding
owner direction `research/physics-em-sr-40-2026-10-08-owner-authoring-direction.md` was read
first; its relevant interfaces are checked under "Owner-direction interfaces".

## Design vs plan

Design section `research/plan-classical-electromagnetism-track.md` L1774 ("Electrostatic
boundaries and conductors", quoting `proposed-inventory.json` and the exact contracts in
`definition-contracts.md#post-em-electrostatic-conductor-model` and
`core-conditional-proofs.md#K3`, with the worked examples at `worked-example-verifications.md#X2`).
Compared with `research/plan-spec.json` orders 331/332: page ids, kinds, orders, category,
library `physics`, titles, companion links and the declared `requires`
(`em-boundary-and-spectral-prerequisites`, `em-electrostatics-in-vacuum`) agree exactly, and
the reserved inventories (6 A items, 3 B items) are preserved item-for-item. **No
page-metadata plan conflict.** The page-level requires list therefore needs no additions this
batch: a reachability computation over the plan's page graph confirmed that every imported
mathematical home page used by these items (PDE, measure, real-analysis, topology,
functional-analysis and distribution pages) is already in the closure of the two declared
requires, so no new `P` entry or requires edge is owed. The design's dependency annotations
and relative `dependency_level` labels were computed over a pre-run set; under the run's
in-run convention the twelve computed levels are 0, 1, 0, 16, 17, 17, 18, 17, 20 (A) and 18,
21, 19 (B), and `item-dependency-levels check --run` confirms every label.

## Inventory decisions (recorded, item by item)

The six design A items and three design B examples keep their promised content with exact
statements and complete proof strategies; three local mathematical prerequisites were added
on the same A page before their consumers (the mandate's preferred placement). No promised
claim was dropped and none weakened; two design dependency annotations were corrected and
recorded below.

1. **`post-em-electrostatic-conductor-model`** (design item; level 16). The postulate fixes:
   the conductor geometry (finitely many pairwise disjoint bounded $C^\infty$ domains with
   closures strictly inside the laboratory region; the vacuum region is again a bounded
   $C^\infty$ domain by the new local lemma 2, and is required connected, so cavity
   configurations are explicitly outside the model as formulated); the equilibrium clauses
   ($E\equiv0$ on the conductor, no interior volume charge, pure electrostatics, all conductor
   charge a continuous stationary surface density $\sigma$ in the pairing of
   `def-em-weak-sources`(c), the adopted distributional equations of
   `post-em-distributional-vacuum-maxwell`); one continuous equilibrium potential with
   $E=-\nabla\varphi$ on the vacuum region, constant on each conductor body with value $V_j$
   (the single-function no-double-layer convention); the two data types (component potentials
   $V_j$ or component total charges $Q_j$, with ambient data); and the scope exclusions
   (transients, finite conductivity, forces, energy, measurement, no existence or uniqueness
   assertion). Deps are the formulation primitives plus the two geometry lemmas; source
   support Griffiths §2.5.1-2.5.3, Tong §2.4, Chew §32.1-32.2.1.
2. **`pthm-em-conductor-surface-charge`** (design item; level 17). Under the model and the
   one-sided joint $C^1$ regularity of `pthm-em-fixed-vacuum-jumps`, it proves pointwise
   $n\cdot E_+=\sigma/\varepsilon_0$, $n\times E_+=0$, the normal-derivative form
   $\sigma=-\varepsilon_0\,\partial\varphi/\partial n$, the constancy of the vacuum trace of
   $\varphi$ on each connected component of the surface (with value $V_j$ on $\partial D_j$),
   and the total-charge flux identities $Q_j=\varepsilon_0\int_{\partial D_j}n\cdot E_+\,dS
   =\varepsilon_0\int_{\partial D_j}\partial_\nu\varphi\,dS$ with the vacuum outward normal
   $\nu=-n$. The sign convention of the interface normal from the conductor side to the vacuum
   side is fixed explicitly, matching `def-em-surface-distribution` and the batch-24 jump
   theorem.
3. **`pthm-em-electrostatic-bvp-uniqueness`** (design item; level 17). Classical Dirichlet
   uniqueness and Neumann uniqueness-modulo-componentwise-constants (the published audited
   corollaries), the necessary flux compatibility $\int_{\Omega_v^{(j)}}\rho+\varepsilon_0
   \int_{\partial\Omega_v^{(j)}}\partial_\nu\varphi=0$ (the published compatibility lemma),
   the weak $H^1$ Dirichlet/Neumann variants (batch-16's prescribed-trace and weak-Neumann
   lemmas) and the combined theorem's transmission uniqueness clause, plus the physics reading
   (field uniqueness; the potential's freedom; the conductor case with grounded data). The
   scope clause verifies the failure of uniqueness on unbounded regions by an **inline**
   witness ($0$ and $1-R/|x|$ on $|x|>R$, harmonic by the fundamental-solution lemma), see
   finding 1.
4. **`pthm-em-electrostatic-bvp-existence`** (design item; level 18). The Dirichlet, Neumann
   and transmission clauses of batch-18's `thm-em-elliptic-boundary-existence`, specialized to
   $\varepsilon=\varepsilon_0I$ and smooth data, together with the exact conductor reading:
   constant boundary data on the disjoint union $\partial\Omega\sqcup\partial D$ are a special
   case of the Dirichlet branch; the solution extended by zero on the conductor satisfies the
   adopted distributional equations with the source pair $(\rho_v+\sigma\delta_{\partial D},0)$
   by `lem-em-interface-derivatives` (piecewise divergence plus $n\cdot[E]\delta_S$) and the
   surface-charge relation of item 2; the induced charges are then determined. The stationary
   sheet-charge (vacuum transmission) branch is included with the jump
   $n\cdot[\varepsilon_0\nabla\varphi]=-\sigma_\Gamma$, and the scope records the excluded
   free-charge-data, nonsmooth-geometry, dielectric, unbounded and empirical content.
5. **`pthm-em-image-method-certificate`** (design item; level 17). The candidate
   $\varphi_I=(q/4\pi\varepsilon_0)(|x-ae_3|^{-1}-|x+ae_3|^{-1})$ on the half-space is proved
   harmonic off the pole, locally integrable with the distributional point source
   $-\Delta T_{\varphi_I}=(q/\varepsilon_0)\delta_p$ (the Coulomb point clause plus the smooth
   mirror term identified by integration by parts), continuous to the plane with zero trace,
   bounded by the mean-value cancellation estimate $|\varphi_I(x)|\le2|q|a/(\pi\varepsilon_0
   |x|^2)$ for $|x|\ge2a$, and unique in the declared continuous-boundary/decay class by the
   new local lemma 3. The ideal grounded-plane reading and its exclusions (noncompact plane,
   not a declared source type, no distributional Maxwell identity in the declared class) are
   stated; the design's dependency on the bounded-domain uniqueness theorem was **replaced**
   by the half-space lemma, see finding 2.
6. **`pthm-em-capacitance-energy`** (design item; level 20). Unit-potential harmonic
   solutions $\varphi_j$ for the grounded-outer-boundary conductor geometry; the capacitance
   matrix $C_{jk}=\varepsilon_0\int_{\partial D_j}\partial_\nu\varphi_k\,dS$ with linearity
   $Q=CV$, reciprocity $C_{jk}=C_{kj}$ (Green's second identity, i.e. two subtracted first
   identities), the energy identity $(\varepsilon_0/2)\int_{\Omega_v}|\nabla\varphi^V|^2
   =\tfrac12V^tCV=\tfrac12\sum_jV_jQ_j$, strict positivity of $C$ (nonnegative-integral
   criterion plus constancy on the connected grounded vacuum region), the two-conductor
   reading $U=\tfrac12QV=Q^2/(2C)=\tfrac12CV^2$ with $C=C_{11}>0$, and the assembly reading
   of `pthm-em-electrostatic-field-energy`(b) with surface charges. Existence and uniqueness
   are used only for the constant unit data; no charge-data solvability is claimed.
7. **`lem-em-boundary-of-a-bounded-smooth-domain-is-a-compact-embedded-hypersurface`** (new
   local prerequisite, mathematics, level 0). Nonemptiness (proper nonempty bounded open set
   in connected $\mathbb R^3$), compactness (Heine-Borel), finitely many components (local
   connectedness of $\mathbb R^3$ plus compactness), the finite graph presentation with
   $C^k$ transitions, the compact embedded hypersurface and finite surface measure, and the
   continuous outward normal field. Needed because the jump, surface-distribution and
   surface-integral interfaces require exactly this object.
8. **`lem-em-vacuum-region-of-conductors-is-a-bounded-smooth-domain`** (new local
   prerequisite, mathematics, level 1). The complement of finitely many compact smooth
   conductor bodies inside a bounded smooth domain is again a bounded smooth domain, with
   boundary the disjoint union of the outer boundary and the conductor surfaces and with the
   outward normal on a conductor surface the negative of the conductor's outward normal.
   Needed by the model, by the pointwise jump application (the interface is the boundary of
   the conductor *and* of the vacuum region) and by the existence/capacitance theorems.
9. **`lem-em-half-space-harmonic-uniqueness-with-decay`** (new local prerequisite,
   mathematics, level 0). A continuous function on the closed half-space minus a pole,
   $C^2$ and harmonic off the pole, vanishing on the plane, tending to $0$ at the pole and at
   infinity, is identically zero: truncate by a large ball and a small ball about the pole and
   apply the weak maximum principle on the bounded open region. This is the exact uniqueness
   tool for the image certificate in the unbounded half-space; it uses no removable-singularity
   theory.
10. **`ex-em-grounded-plane-image-force`** (design item; level 18). The external (mirror)
    field at the held charge is computed as
    $E_{\rm ext}(p)=-(q/(16\pi\varepsilon_0a^2))e_3$ and the adopted external Lorentz
    coupling at zero velocity gives $F=qE_{\rm ext}=-(q^2/(16\pi\varepsilon_0a^2))e_3$,
    attractive for either sign of $q$, with the self-field explicitly excluded by the
    postulate; no measurement, motion or radiation claim.
11. **`ex-em-parallel-plate-capacitor`** (design item; level 21). The ideal two-infinite-plane
    model is declared explicitly (piecewise field and potential, plane densities $\pm\sigma$)
    and verified directly: distributional $\operatorname{div}E=(\sigma/\varepsilon_0)
    (\delta_{\Pi_+}-\delta_{\Pi_-})$ and $\operatorname{curl}E=0$ against compactly supported
    tests, equipotential plates with $V=\sigma d/\varepsilon_0$, and for a chosen area $A$ the
    ideal-model identities $Q=(\varepsilon_0A/d)V$, $C=\varepsilon_0A/d>0$,
    $U=\tfrac12QV=Q^2/(2C)=\tfrac12CV^2$. The infinite planes are explicitly outside the
    bounded-conductor hypotheses and the declared stationary-sheet source type; fringing,
    finite-thickness, transient and measurement content is excluded.
12. **`ex-em-neumann-data-failure`** (design item; level 19). On the unit ball, $-\Delta
    \varphi=0$ with $\partial_\nu\varphi\equiv1$ has no classical solution
    ($0=-\int_{\partial B}1\,dS=-4\pi$) and no weak $H^1$ solution (testing $v\equiv1$ gives
    $\ell(1)=4\pi\ne0$), so the datum violates the necessary flux budget; the companion
    unit-source/zero-flux failure is evaluated inline. No measurement, apparatus or material
    claim.

## Dependency verification (actual transitive uses, not declared edges)

All dep targets resolve: published imported items on disk plus the in-run suppliers
`def-em-lab-geometry`, `def-em-si-conventions`, `def-em-sources`, `def-em-fields`,
`def-em-electrostatic-regime`, `def-em-weak-sources`, `post-em-distributional-vacuum-maxwell`,
`pthm-em-fixed-vacuum-jumps` (batches 23/24); `lem-em-surface-distribution`-family items
`def-em-surface-distribution`, `lem-em-interface-derivatives` (batch 13);
`lem-em-prescribed-fractional-dirichlet-existence`,
`lem-em-weak-neumann-and-transmission-existence`, `thm-em-elliptic-boundary-existence`
(batches 16/18); and `pthm-em-electrostatic-potential`, `pthm-em-coulomb-solution`,
`pthm-em-electrostatic-field-energy`, `lem-em-euclidean-balls-and-annuli-are-bounded-c-one-domains`
(batch 25). Interfaces were read on disk; the cross-batch input carries 56 rows (2 page rows
and 54 item rows), one per declared in-run cross-batch edge (22 edges to batch 23, 13 to batch
25, 10 to batch 24, 4 to batch 13, 3 to batch 16, 2 to batch 18), and the ledger refresh
reports no orphaned review for this batch. Points checked in particular:

- **`pthm-em-fixed-vacuum-jumps`**: the set Ω_+ is the vacuum side and Ω_- the conductor
  side; the normal convention (minus to plus) is fixed in the model and the pointwise branch's
  joint one-sided $C^1$ hypothesis is assumed explicitly. Only this branch is consumed; the
  general weak-trace branch is not needed.
- **`thm-em-elliptic-boundary-existence`**: the current (reconciliation-corrected) statement
  was read, including the componentwise Neumann compatibility with the plus sign
  $\int_{\Omega_j}\rho+\int_{\partial\Omega_j}g=0$ and the transmission clause with sheet
  charges, outer Dirichlet uniqueness and Neumann uniqueness modulo componentwise constants.
  The physics statements transcribe these clauses with $\varepsilon=\varepsilon_0I$ and the
  framework's sign conventions ($\int\rho+\varepsilon_0\int\partial_\nu\varphi=0$).
- **`pthm-em-coulomb-solution`** (point clause (d)): used by the image certificate for the
  point source and its distributional identities; its $L^1_{\rm loc}$ and pole conventions are
  respected (no value at the pole, no self-force).
- **`pthm-em-electrostatic-potential`**: used only on star-shaped regions (existence of the
  potential from the reduced field equations); the conductor vacuum region is *not* star-shaped
  and there the potential is supplied by the model, not by that theorem.
- **Axioms.** Countable Choice is declared and carried by the surface/measure/distribution
  interfaces (all three lemmas, the postulate's surface-distribution clause, items 2, 5, 6,
  10-12); the Axiom of Choice (and Countable Choice) is declared by the uniqueness and
  existence items through the batch-16 weak-solvability and batch-18 combined theorem.
  No use of Recorded results; no `deferred-set-theory-beyond-choice` path (checked by a manual
  closure over the twelve items: 1674 transitive items visited, 0 unresolved, 0
  `proved_here: false`, 0 external references).
- No missing, circular, forward or inadequate dependency was found; `validate-plan` passes for
  pages 331/332 (aside from other batches' concurrently appearing errors); item and page
  graphs are acyclic.

## Owner-direction interfaces checked

- **Sixth reconciliation (weak Maxwell) / stationary sheets**: conductor charge is a
  stationary sheet of `def-em-weak-sources`(c) with $K=0$; the jump theorem's stationary
  hypothesis is respected; no moving sheet, normal sheet current or magnetic sheet source is
  used; no product of distributions is formed anywhere (the fields enter only through
  distributional derivatives paired with tests, the surface densities only through ordinary
  surface integrals).
- **Combined elliptic theorem corrections**: outward Neumann data with the componentwise
  compatibility; outer Dirichlet versus outer Neumann transmission data distinguished; sheet
  charges included in the compatibility; uniqueness modulo componentwise constants until the
  means are fixed. These are transcribed in items 3 and 4 exactly.
- **SI conventions**: $\varepsilon_0=(\mu_0c^2)^{-1}$ with measured $\mu_0$; no numerical
  value of $\mu_0$ is asserted, and no empirical precision appears in any item.
- **Empirical content**: this page has no experiment, no measurement and no statistical claim;
  every item's scope clause carries the idealization/exclusion qualifications into the physics
  reading.
- **Atomic manifest publication** (owner direction after the batch-11 transient): the complete
  two-page array was assembled in a sibling temporary file and published by rename.

## Findings for owner reconciliation

1. **Two dependencies on items homed only on examples pages could not be used.**
   `validate-plan` initially rejected (a) `pthm-em-electrostatic-bvp-uniqueness` depending on
   `cex-exterior-dirichlet-uniqueness-needs-growth-or-decay-control` (homed on
   `poisson-problems-and-interior-harmonic-estimates-examples`) and (b)
   `ex-em-neumann-data-failure` depending on
   `cex-neumann-poisson-problem-needs-the-compatibility-condition` (homed on
   `fundamental-solutions-newtonian-potentials-and-green-functions-examples`): items homed only
   on B/examples pages cannot be another page's dependency. Both uses were replaced by
   complete inline arguments in the affected strategies (the radial exterior witness
   $0$ and $1-R/|x|$ for (a); the unit-source evaluation of the compatibility lemma for (b)).
   The two published counterexamples remain available for the mathematics library; only their
   use as physics prerequisites was dropped. No claim was weakened.
2. **Design dependency correction — image certificate.** The design lists
   `pthm-em-electrostatic-bvp-uniqueness` among the deps of
   `pthm-em-image-method-certificate`. The scaffold does not carry it: that theorem is stated
   for bounded vacuum regions, while the image problem lives on the unbounded half-space, where
   the uniqueness statement is the new local maximum-principle lemma (item 9) in the declared
   decay class. This is a dependency-accuracy correction, not a claim reduction.
3. **Three local mathematical prerequisites added** with stable IDs on the same A page
   (items 7-9), complete strategies and levels 0/1/0; the 100-item page cap is far from being
   approached (9 A items).
4. **Idealizations outside the declared source/model types** (recorded in item scope, not
   hidden): the grounded conducting half-space and the infinite plane of the image example and
   the parallel-plate example are noncompact and are not conductor bodies or stationary sheets
   of the framework's declared types; their statements are exact ideal-model statements with
   the idealization and its exclusions explicit. No theorem is transferred to them from the
   bounded-conductor results.
5. **Cavity/connectedness scope.** The conductor model requires a connected vacuum region and
   explicitly excludes enclosing closed shells and disconnected cavity components; the
   Faraday-cage passages of Griffiths §2.5.2, Tong §2.4 and Chew §32.1 are disposed
   out-of-scope in the coverage for that reason. If the owner wants cavity content, it needs a
   separate page-level treatment (the empty-cavity corollary of the second uniqueness theorem
   is the natural seed).
6. **No page-requires additions owed.** All imported mathematical home pages used are already
   in the plan's reachability closure of the two declared requires; no new `P` entry is
   needed, unlike batch 25's two additions.
7. **Run-level state observed, not this batch's.** At the time of writing, batches 30, 34-36
   and 38-40 still carry empty scaffold inventories (later taken up by concurrent workers;
   batch 35's freshly written items currently produce two `undeclared-prereq` errors of their
   own), and two stale item-readiness rows exist for another batch's items
   (`pthm-em-relativistic-lorentz-force`, `ex-em-constant-field-trajectory`). The
   `frontier-item-gate --tool extcheck -- --manifest-only` battery cannot start while any
   planned page has an empty inventory (it throws `Invalid or empty current page in
   ...batch-30.pages.json`); the manual transitive closure over this batch's twelve items is
   the substitute evidence for the external-reference check. `frontier-dependency-ledger
   refresh --require-reviewed` still fails only on the unreviewed edges of batches 30 and
   34-36/38-40. `coverage-checklist` reports one advisory `low-yield` warning for the B page
   (6 of 16 harvested results are `included`; the remaining dispositions are `inline` or
   documented declines), which is expected for an example page whose content is absorbed into
   the A-page proofs.

## Sources (four treatments, all full-text stamped 2026-10-09)

1. **D. J. Griffiths**, *Introduction to Electrodynamics*, 3rd edition, Prentice Hall 1999
   (textbook). Full scanned PDF (596 pp., 13484424 bytes, sha256_16 `ab7b67a3f6d60049`), read:
   §2.5.1-2.5.4 printed pp. 96-106, §3.1.4-3.1.6 printed pp. 114-121, §3.2.1-3.2.3 printed
   pp. 121-124.
2. **D. Tong**, *Electromagnetism*, Cambridge Part II lecture notes, 2026 printing
   (lecture-notes). Full-text PDF (236 pp., 1882418 bytes, sha256_16 `b99b41156dfe6cd9`),
   read: §2.4-2.4.3 printed pp. 30-36.
3. **W. C. Chew**, *Lectures on Electromagnetic Field Theory*, Purdue University Fall 2020
   (lecture-notes). Full-text PDF (497 pp., 6558677 bytes, sha256_16 `51495b51fe349871`),
   read: §3.3.4-3.4 printed pp. 36-38, §4.3-4.3.4 printed pp. 43-48, §24.4 printed p. 263,
   §32.1-32.2.1 printed pp. 351-354.
4. **J. K. Hunter**, *Notes on Partial Differential Equations*, UC Davis 2014
   (lecture-notes). Full-text PDF (242 pp., 1597256 bytes, sha256_16 `0dbade1806f7a1ea`),
   read: §1.10 printed pp. 13-16, §1.12 printed pp. 17-18, §2.3.1/§2.5 (Theorems 2.13/2.17
   and 2.23-2.24) printed pp. 25-32, §2.6.1 printed p. 33.

All eight source rows (four sources x two pages) were fetched and stamped by
`source-fetch-check --stamp` on 2026-10-09 (8 newly stamped); check mode reports 8/8
fetch-verified and 8/8 resolved. The Griffiths, Tong and Chew stamps are byte-identical to
the stamps already recorded by batches 22-25 for the same carriers.

## Checks run (actual results)

- `manifest-deps` over all manifests: 410 items, 0 normalized, 0 errors (count includes
  concurrent batches written after this batch's manifest).
- `item-dependency-levels check --run`: no error names a batch-26 page or item; the twelve
  items compute 0, 1, 0, 16, 17, 17, 18, 17, 20 (A) and 18, 21, 19 (B). The remaining errors
  are `empty scaffold inventory` rows for batches 30/34-36/38-40.
- `content-policy --manifest-only` over all manifests: 410 scoped items, 0 errors, 0 warnings.
- `physics-check --run ... --plan research/plan-spec.json`: 410 items checked, 0 errors.
- `coverage-checklist --require-destination` on batch 26: 2 pages, 46 harvested results,
  0 errors, 1 warning (`coverage-low-yield` on the B page, as recorded in finding 7).
- `source-fetch-check --coverage ... --stamp` then check mode: 8/8 fetch-verified (8 newly
  stamped; Griffiths 13484424 / ab7b67a3f6d60049 / 596 pp., Tong 1882418 / b99b41156dfe6cd9 /
  236 pp., Chew 6558677 / 51495b51fe349871 / 497 pp., Hunter 1597256 / 0dbade1806f7a1ea /
  242 pp., identical on both pages), 8/8 resolved.
- `step1-decisions record` x12 (all `ready`) + `check --run`: all twelve batch-26 items are
  current and ready; remaining work rows are other batches' empty inventories and stale
  records.
- `manifest-integrity --run`: 80 pages owed, 80 in the manifests, no scope drift.
- `drift-review-check --run`: 40 pages reviewed, 0 spec edits applied, no blocked edges;
  52 same-category requires edges checked, every owed A and B page strictly above 95%
  published-or-earlier-in-run.
- `frontier-dependency-ledger refresh --run`: refreshed; the batch-26 input carries 56 rows,
  no orphaned review; `--require-reviewed` still fails on the unreviewed edges of batches
  30/34-36/38-40 only.
- `frontier-item-gate --tool validate-plan`: exit 0 for pages 331/332 — "no item-level cycles,
  forward references, B-page dependencies, or unresolved ids"; the two reported errors at the
  time of writing belong to another batch's in-progress page (`em-wave-interfaces-and-conductors`).
- `frontier-item-gate --tool extcheck -- --manifest-only`: cannot run (empty inventories in
  batches 30/34-36/38-40). Substitute evidence: manual transitive closure over the twelve items
  (1674 items visited, 0 unresolved ids, 0 `proved_here: false`, 0 external references).

### Verification re-run (2026-10-09, after concurrent writers advanced)

Re-ran the batch's gate battery from the published files; every batch-26 result stands:

- `manifest-deps` over all 40 batch manifests: 410 items, 0 normalized, 0 errors.
- `item-dependency-levels check --run`: 12 errors, all `empty scaffold inventory` for the six
  pairs `em-induction-and-circuit-limits`, `em-waveguides-and-cavities`,
  `em-retarded-fields-and-radiation`, `em-empirical-tests-and-scope`,
  `em-action-and-variational-formulation`, `em-scattering-and-scalar-diffraction`; none names a
  batch-26 page or item. The twelve batch-26 labels re-compute to 0, 1, 0, 16, 17, 17, 18, 17,
  20 (A) and 18, 21, 19 (B).
- `content-policy --manifest-only`: 410 scoped items, 0 errors, 0 warnings.
- `physics-check --run ... --plan research/plan-spec.json`: 410 items, 0 errors.
- `coverage-checklist --require-destination`: 2 pages, 46 harvested results, 0 errors, 1 warning
  (the B-page `coverage-low-yield`, unchanged).
- `source-fetch-check` check mode: 8/8 fetch-verified, 8/8 resolved.
- `step1-decisions check --run`: 410/410 ready; the 12 work rows are the other batches' empty
  inventories only and no row names a batch-26 item, so all twelve records are still current.
- `manifest-integrity --run`: 80/80 pages owed and present, no scope drift.
- `drift-review-check --run`: 40 pages reviewed, 0 spec edits applied, no blocked edges.
- `frontier-item-gate --tool validate-plan`: exit 0 with no error rows; the two
  `undeclared-prereq` errors previously reported for another batch's in-progress page
  (`em-wave-interfaces-and-conductors`) are no longer present; pages 331/332 are clean.
- `frontier-dependency-ledger refresh --run`: refreshed; the batch-26 input contributes 56
  edges (54 item, 2 page), all present in the unified ledger with 0 orphaned reviews.
  `--require-reviewed` still fails only because batches 30/35/36/38/39/40 have not supplied or
  reviewed every edge.
- `frontier-item-gate --tool extcheck -- --manifest-only`: still cannot start while planned
  pages carry empty inventories (currently 12, the six pairs listed above); the manual
  transitive closure over the twelve items recorded above remains the substitute evidence.

Finding 7's run-level observations are superseded by the bullets above where they differ
(batch 35's errors are gone; the unreviewed-batch list is now 30/35/36/38/39/40); every
batch-26 result is unchanged.

## Honest uncertainty

- The twelve items are scaffolded with complete statements and proof strategies and with exact
  cited uses, but they are not authored item files and have not received independent review;
  Step 3 provides that. The delicate points to check line by line at authoring time are: the
  compactness/local-connectedness details and the finite graph presentation in item 7; the
  chart-gluing and normal-sign computation in item 8; the truncation choices and the use of the
  maximum principle on the punctured truncated region in item 9; the sign convention chain
  (normal from conductor to vacuum, $\sigma=-\varepsilon_0\partial\varphi/\partial n$,
  $Q_j=\varepsilon_0\int\partial_\nu\varphi$) in item 2; the passage from the smooth solution to
  the distributional sheet realization in item 4; the mean-value decay bound and the declared
  uniqueness class in item 5; and the reciprocity/positivity arguments in item 6.
- The image-method and parallel-plate items are ideal-model statements: their sources
  (Griffiths, Tong, Chew) present the physics in the same idealization, and the items state the
  exclusions (noncompact conductors, fringing, thickness, transients, self-force, measurement)
  rather than deriving them. Reviewers should keep those scope clauses intact and not promote
  the ideal-model identities into theorems about finite apparatus.
- The conductor model is an equilibrium idealization with a connected vacuum region; cavity
  configurations and charge-prescribed solvability are explicitly not supplied. If later pages
  consume conductor forces or charge-data uniqueness, they need their own items (the design's
  K3 does not promise them here).
- The design's dependency annotations were superseded in the two cases recorded in findings
  1-2; all other design content is preserved. The three new lemmas are framework-local
  mathematical suppliers created to satisfy the "define, do not merely name" and "complete the
  remaining gaps locally" obligations and are intended for reuse by later conductor, material
  and waveguide pages of this run.
