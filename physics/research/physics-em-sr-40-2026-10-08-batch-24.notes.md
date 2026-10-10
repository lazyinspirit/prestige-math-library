# Batch 24 notes — `em-maxwell-integral-and-constraints` / `-examples`

Run `physics-em-sr-40-2026-10-08`, role beta, Step 1 scaffold construction, 2026-10-09.
Scope: exactly one A/B pair, A page order **327**, B page order **328**, category
`classical-electromagnetism`, library `physics`. Final inventory: **8 A items + 2 B items**
(six design items plus two local mathematical prerequisites on the A page, and the two
design B items). No item file, page, plan, published item, engine state or verdict was
edited. Files written: this manifest
(`research/physics-em-sr-40-2026-10-08-batch-24.pages.json`), the coverage file
(`...-batch-24.coverage.json`), the cross-batch dependency input
(`...-batch-24.cross-batch-dependencies.json`), the ten `step1-<item>` readiness records,
this note, and the tool-refreshed unified dependency ledger. The binding owner direction
`research/physics-em-sr-40-2026-10-08-owner-authoring-direction.md` was read first; its
named corrections relevant to this pair are checked under "Owner-direction interfaces".

## Design vs plan

Design section `research/plan-classical-electromagnetism-track.md` L1710–L1734 ("Integral
Maxwell and constraints", quoting `proposed-inventory.json` and the exact contracts in
`definition-contracts.md#def-em-fixed-test-geometry`, `definition-contracts.md#def-em-weak-sources`
and `core-conditional-proofs.md#K1`, with the worked example at `worked-example-verifications.md#X1`).
Compared with `research/plan-spec.json` orders 327/328: page ids, kinds, orders, category,
library `physics`, titles, companion links and the declared `requires`
(`em-elementary-mathematical-prerequisites`, `em-primitives-and-postulates`) agree exactly,
and the reserved inventories (6 A items, 2 B items) are preserved. **No page-metadata plan
conflict.** The design's own `dependency_level` labels (1, 4, 4, 4, 5, 5, 5, 5) were computed
over a pre-run dependency set; under the run's in-run convention the ten computed levels are
0, 0, 7, 14, 14, 14, 15, 15 (A) and 15, 15 (B), and `item-dependency-levels check --run`
confirms them. The one page-metadata addition this batch makes is the requires entry
`inverse-and-implicit-function-theorems` (see finding 2).

## Inventory decisions (recorded, item by item)

The six design items keep their promised content with exact statements and complete proof
strategies; dependency lists were reconciled to the actual uses, and two local mathematical
prerequisites were added on the same A page before their consumers (the mandate's preferred
placement). No claim was dropped and none weakened; the design's contracts were followed
clause by clause.

1. **`def-em-fixed-test-geometry`** (design item; level 7). Kept the design deps
   `def-em-lab-geometry` (formulation prerequisite), `def-bounded-piecewise-c-one-euclidean-domain`,
   `def-oriented-unit-normal-and-flux-of-a-surface-patch`,
   `def-scalar-and-vector-line-integrals-along-piecewise-c1-paths`; added
   `def-bounded-c-one-domain-boundary-charts-and-outward-normal` (the AC_w convention and the
   outward normal), `def-surface-integral-on-a-compact-c-one-hypersurface` (the face fluxes),
   `def-the-induced-boundary-chain-of-a-c2-surface-patch` and
   `def-type-i-type-ii-and-elementary-green-regions` (the patch class and its boundary
   orientation), `def-admissible-regular-parametrized-surface-patch`,
   `def-cross-product-in-r3` (the induced normal) and `def-ck-euclidean-maps-and-diffeomorphisms`
   (the C² regularity), plus `def-countable-choice` for the declared AC_w. The definition states
   the design's exact class (bounded finite piecewise C¹ volumes with outward normals and finite
   face presentation; oriented regular C² patches over finite elementary planar regions with
   induced normal and compatible boundary orientation), the regularity convention on
   neighbourhoods of the compact test sets, and the two instances the theorems use
   (axis-parallel boxes; affine graph patches over axis-parallel squares), each with its
   verification.
2. **`def-em-weak-sources`** (design item; level 14). Kept the design deps `def-em-sources`,
   `post-em-vacuum-maxwell`, `def-distribution`, `def-distributional-derivative`,
   `def-dirac-delta-and-its-derivatives`, `def-em-surface-distribution`,
   `lem-em-point-current-continuity`; added `def-em-lab-geometry` and `def-em-si-conventions`
   (region and units), `def-test-function-space-d-of-an-open-set`,
   `def-regular-distribution-from-a-locally-integrable-function`,
   `thm-locally-integrable-functions-embed-in-distributions` (the regular-distribution
   identification), `def-surface-integral-on-a-compact-c-one-hypersurface` (the sheet pairings)
   and `def-countable-choice`. The definition keeps the design's clauses exactly: distributions
   as continuous linear maps with bilinear pairing; ∂_μT(ψ) = −T(∂_μψ); the point pairings
   ∫qψ(z(t),t)dt and ∫qz′(t)ψ(z(t),t)dt with the properness/endpoint caveat; the stationary-sheet
   pairings ∫_I∫_Sσψ and ∫_I∫_SKψ with K tangential; fields locally integrable and piecewise C¹
   with continuous one-sided traces; and the explicit exclusion of arbitrary products of
   distributions. It adds the precise clause (e) fixing what it means to satisfy the weak
   Maxwell equations with such a source pair, which is what batch 23's note 4 required of this
   batch.
3. **`pthm-em-charge-continuity`** (design item; level 14). Deps kept from the design
   (`post-em-vacuum-maxwell`, `thm-the-divergence-of-a-curl-vanishes`,
   `thm-distributional-differentiation-is-continuous-and-commutes`) plus the exact suppliers of
   the computation: `def-em-fields`, `def-em-sources`, `def-em-si-conventions`,
   `def-em-lab-geometry`, `def-divergence-and-curl-of-a-c1-vector-field`,
   `def-directional-and-partial-derivatives`, `thm-clairaut-schwarz-mixed-partials`,
   `def-distribution`, `def-distributional-derivative`,
   `def-regular-distribution-from-a-locally-integrable-function`,
   `thm-locally-integrable-functions-embed-in-distributions`,
   `def-test-function-space-d-of-an-open-set` and `thm-algebra-of-derivatives`. The statement
   gives the smooth branch (C² fields, C¹ sources) and a distributional branch for arbitrary
   distributional source pairs satisfying the four equations, which is exactly what the B
   example consumes. No choice principle is used.
4. **`pthm-em-integral-maxwell`** (design item; level 14). The design's dep list named
   `lem-em-continuous-localization` for the recovery direction; the scaffold uses instead the
   new `lem-em-coordinate-cell-localization` on this page, because the admissible patch family
   supplies affine square patches (and boxes for volumes), while the batch-13 lemma's disk clause
   is stated for planar disks and is not obviously instantiated by that family; the exact needed
   interface is recorded in the cross-batch input and in the local lemma's statement (all
   axis-parallel cubes, every centre and side). Kept and completed the rest:
   `post-em-vacuum-maxwell`, `def-em-fixed-test-geometry`, `def-em-fields`, `def-em-sources`,
   `def-em-si-conventions`, `def-em-lab-geometry`, `def-divergence-and-curl-of-a-c1-vector-field`,
   `def-directional-and-partial-derivatives`,
   `thm-divergence-theorem-for-bounded-piecewise-c-one-domains`,
   `thm-the-classical-stokes-theorem-for-a-c2-surface-patch`, `lem-em-parameter-integrals`,
   `lem-riemann-lebesgue-comparison-for-distribution-test-integrands` and `def-countable-choice`.
   Both directions of the equivalence are stated, for the exact test-geometry class, as the
   design requires ("not recovery from one selected test surface").
5. **`pthm-em-fixed-vacuum-jumps`** (design item; level 15). Kept `def-em-weak-sources` and
   `lem-em-interface-derivatives`; added the second half of the design's strategy, which the
   design's two-element list does not supply: the off-sheet vanishing of the function parts
   (bump/monotonicity localization, with `lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound`,
   `thm-monotonicity-of-the-integral`, `prop-order-and-scalar-rules-for-the-nonnegative-integral`,
   `cor-continuous-functions-are-borel-measurable`, `def-integral-over-a-measurable-set`), the
   new on-sheet `lem-em-surface-density-localization`, the jump/δ_S conventions of
   `def-em-surface-distribution`, the region/unit/field/source formulation suppliers, the weak
   postulate, `def-cross-product-in-r3`, the distribution objects and `def-countable-choice`.
   The four conclusions are exactly the design's (n·[E]=σ/ε₀, n×[B]=μ₀K, n·[B]=0, n×[E]=0), with
   the normal from the minus to the plus side and [F]=F₊−F₋, and with the exclusions the design
   states (bounded one-sided C¹ traces, no interface edges/magnetic sheets, no moving support).
6. **`pthm-em-gauss-constraint-propagation`** (design item; level 15). Kept
   `post-em-vacuum-maxwell` and `pthm-em-charge-continuity`; added the exact suppliers of the
   two branches and of the constant-in-t conclusion: the field/source/unit/region formulation
   items, `def-divergence-and-curl-of-a-c1-vector-field`,
   `def-directional-and-partial-derivatives`, `thm-the-divergence-of-a-curl-vanishes`,
   `thm-clairaut-schwarz-mixed-partials`,
   `thm-distributional-differentiation-is-continuous-and-commutes`, the distribution items,
   `cor-mean-value-theorem`, `def-interval`, the bump/monotonicity localization items and
   `def-countable-choice` (declared for that clause only). The statement covers both the smooth
   propagation/persistence reading and the distributional identities, including the honest
   clause that a weak defect's independence of t is asserted when it is represented by a
   continuous function.
7. **`lem-em-coordinate-cell-localization`** (new local prerequisite, mathematics, level 0).
   Needed because the converse direction of the equivalence must recover the divergence and
   curl components from the integral identities of the exact test families; the lemma states and
   proves that a continuous function whose integral over every axis-parallel cube (every centre,
   every side) vanishes is identically zero, and its planar clause covers the coordinate-normal
   square patches.
8. **`lem-em-surface-density-localization`** (new local prerequisite, mathematics, level 0).
   Needed because `lem-em-interface-derivatives` delivers the delta formula but not the
   pointwise conclusion on the hypersurface; the lemma states that a continuous density on a
   compact embedded C² hypersurface whose surface integral against every test vanishes is
   identically zero, proved by the local graph reduction, chart independence, the graph formula
   and the sign-and-bump localization.
9. **`ex-em-nonconserved-switched-charge`** (design item; level 15). Kept
   `pthm-em-charge-continuity`; added `def-em-weak-sources` (the weak reading and the pairings
   used), `lem-em-point-current-continuity` (the endpoint clause), `post-em-vacuum-maxwell`,
   the distribution/delta items and `def-countable-choice` (inherited convention). The
   statement reproduces X1's content exactly: ρ with the pairing q∫₀^∞ψ(0,t)dt and J=0 has
   ∂_tρ+divJ = qδ_(0,0) ≠ 0, so no locally integrable fields satisfy the weak equations with
   this source pair, and the omitted endpoint term is exactly the finite-history term of the
   point-current supplier.
10. **`texp-em-displacement-current-surface-choice`** (design item; level 15). Kept
    `pthm-em-integral-maxwell` and `pthm-em-charge-continuity`; completed with
    `def-em-fixed-test-geometry`, `def-em-lab-geometry`, `post-em-vacuum-maxwell`,
    `def-em-fields`, `def-em-sources`, `def-em-si-conventions`,
    `thm-divergence-theorem-for-bounded-piecewise-c-one-domains`,
    `thm-clairaut-schwarz-mixed-partials`, `def-divergence-and-curl-of-a-c1-vector-field`,
    `def-directional-and-partial-derivatives`, `def-cross-product-in-r3`,
    `def-ck-euclidean-maps-and-diffeomorphisms`,
    `def-the-induced-boundary-chain-of-a-c2-surface-patch`,
    `def-oriented-unit-normal-and-flux-of-a-surface-patch`,
    `def-type-i-type-ii-and-elementary-green-regions`,
    `def-scalar-and-vector-line-integrals-along-piecewise-c1-paths`,
    `lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound`,
    `lem-riemann-lebesgue-comparison-for-distribution-test-integrands`,
    `lem-euclidean-balls-have-positive-finite-lebesgue-measure`,
    `thm-monotonicity-of-the-integral`, `thm-algebra-of-derivatives` and `def-countable-choice`
    (the last three additions support the strict negativity of the first conduction flux, which
    equals $1$ on a ball around the origin after the comparison of the patch's Riemann integral
    with its Lebesgue value). The statement carries the design's
    three obligations: the total-current flux is surface independent and equals the circulation
    of B divided by μ₀; the conduction-only flux need not be, its difference being the negative
    of the displacement-flux difference; and an explicit declared smooth realisation realises
    different conduction fluxes with equal total fluxes. **Formulation decision (recorded):** the
    framework's declared singular source types (point and stationary-sheet) do not include an
    idealised thin-wire line current, so the realisation is the explicit smooth slab model
    (χ, E=(t/ε₀)χ(z)e_z, B=0, ρ=tχ′(z), J=−χ(z)e_z) with two graph patches over the same square
    sharing the same induced boundary chain, rather than a literal capacitor circuit; the
    charging-capacitor reading is retained as the explanatory interpretation, not as an
    additional empirical claim.

## Dependency verification (actual transitive uses, not declared edges)

All dep targets resolve: published imported items on disk, plus the in-run suppliers
`def-em-lab-geometry`, `def-em-si-conventions`, `def-em-sources`, `def-em-fields`,
`post-em-vacuum-maxwell` (batch 23, levels 6/7/12/8/13), `def-em-surface-distribution`,
`lem-em-point-current-continuity`, `lem-em-parameter-integrals`, `lem-em-interface-derivatives`
(batch 13, levels 0/0/0/1) and the two new local lemmas and the six design items on this page.
Interfaces checked by reading the supplier statements on disk; the checks are recorded per
consumer in the cross-batch input. Points checked in particular:

- **`def-em-lab-geometry`**: the restricted inertial chart, its slices and fixed-time fields are
  the exact ambient objects of every item of this page; the page never asserts a Galilean
  transformation, an observer congruence or a second frame.
- **`def-em-si-conventions`**: exact defining values of c and e, measured status of μ₀ and
  ε₀=(μ₀c²)⁻¹; the identity c²ε₀μ₀=1 is used in the continuity, jump and realisation
  computations exactly as defined there.
- **`def-em-sources`**: ρ, J are frame densities (C m⁻³, A m⁻²), with Q(V,t) and the current
  flux; the item explicitly declares point and sheet sources to be different objects defined by
  their own pairings, which is exactly the split this page implements in `def-em-weak-sources`.
- **`post-em-vacuum-maxwell`**: smooth branch for jointly C¹ fields with the additional
  derivatives required by each equation; weak branch for locally integrable fields and sources,
  with singular sources explicitly reserved to their own definition. Every use on this page is
  inside those branches, and the singular pairings are supplied by the new definition.
- **`lem-em-interface-derivatives`** and **`def-em-surface-distribution`**: same normal
  convention (from Ω₋ to Ω₊) and same jump [F]=F₊−F₋ as this page's jump theorem, so the four
  jump signs are traceable. The interface is stationary in both.
- **`lem-em-point-current-continuity`**: C¹ trajectory with proper graph map; the endpoint
  variant qδ_start−qδ_end is consumed by the B example exactly as stated.
- **`lem-em-parameter-integrals`**: the K-clause (compact measurable parameter set of finite
  measure, continuous integrand with continuous ∂_t) is applied to the patch flux after the
  Riemann–Lebesgue comparison identifies the patch's Riemann integral with its Lebesgue value.
- **Axioms.** AC_w is declared and used in `def-em-fixed-test-geometry`, `def-em-weak-sources`,
  `lem-em-coordinate-cell-localization`, `lem-em-surface-density-localization`,
  `pthm-em-integral-maxwell`, `pthm-em-fixed-vacuum-jumps`,
  `pthm-em-gauss-constraint-propagation` (localization clause only),
  `ex-em-nonconserved-switched-charge` (inherited convention) and
  `texp-em-displacement-current-surface-choice`; `pthm-em-charge-continuity` is choice-free.
  No use of the Recorded results and no `deferred-set-theory-beyond-choice` path.
- No missing, circular, forward or inadequate dependency was found. The design's dep lists were
  extended only with suppliers the statements and proofs genuinely use; no listed supplier is
  unused.

## Owner-direction interfaces checked

- The direction's singular-source scope rule ("Singular-source equations must be explicitly
  adopted under their own distributional scope; no point/sheet source is covered by the current
  L1-only Maxwell branch") is implemented in `def-em-weak-sources`: the point and sheet objects
  are introduced by their own pairings, the four weak equations are defined by vanishing
  pairings, and products of distributions are excluded explicitly.
- Batch 23's note 4 ("Batch 24's scaffold must ensure the weak reading of the four equations is
  available there for its distributional sources") is satisfied by `def-em-weak-sources`(e).
- The tensor/current corrections of the fourth reconciliation concern `def-em-sources` only
  through its frame-density interface; this page uses ρ, J, σ, K as densities and the four-current
  only through the definitions, never the ρ=ρ₀U⁰ factorization, so no corrected formula is
  contradicted.
- The fifth reconciliation's EM primitive conventions (F₀ᵢ=−Eᵢ/c, j=(cρ,J), μ₀ nominal context)
  are not used on this page beyond c, ε₀, μ₀ in the SI equations; the page asserts no numerical
  μ₀ and no singular-source theorem beyond the declared scope.

## Findings for owner reconciliation

1. **Dead Griffiths URL recorded by earlier batches; repaired here.** The URL
   `https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Electrodynamics/David J. Griffiths
   - Introduction to Electrodynamics-Prentice Hall (1999).pdf` (used by batches 21–23) now returns
   HTTP 404 (six attempts recorded). The same host serves the byte-identical document at the path
   with the extra `/Physics/` segment:
   `.../90MathPhysBioBooks/Physics/Physics/Electrodynamics/...` (13484424 bytes, sha256_16
   `ab7b67a3f6d60049`, 596 pages, stamped 2026-10-09). This batch repaired its own two coverage
   entries to the live path and preserved the six failed attempts in `failed_url_attempts` with a
   `url_repair` note; item source references on this page use the live URL. Owner action: refresh
   the same URL in the earlier batches' coverage files (their stamps remain genuine for the bytes
   they fetched).
2. **Page requires addition (this batch's manifest).** `lem-em-surface-density-localization` uses
   `thm-euclidean-implicit-function-theorem` and `thm-euclidean-inverse-function-theorem`, whose
   published home `inverse-and-implicit-function-theorems` (declared P page, order 31) was not in
   the plan's requires closure for page 327. The manifest overlay now declares it (with all
   ordering guarantees: order 31 < 327, acyclic, non-redundant). The plan-spec itself still lists
   only the original two requires; owner may sync the canonical plan.
3. **Rejected dependency and alternative recorded.** The first draft of the two local lemmas and
   of `pthm-em-fixed-vacuum-jumps` used
   `lem-fundamental-lemma-of-the-calculus-of-variations`, whose home page
   `the-direct-method-and-euler-lagrange-equations` is a published mathematics page that is **not
   declared in plan-spec.json**, so validate-plan reports it as an undeclared prerequisite that
   cannot be repaired by a requires entry. The scaffold therefore replaces that single supplier by
   the elementary sign-and-bump localization already used elsewhere on the page (bumps,
   monotonicity, scalar rules, measurability). This is a proof-route substitution with the same
   conclusion, not a claim reduction; if the owner prefers the fundamental-lemma route, the page
   needs a plan P entry for `the-direct-method-and-euler-lagrange-equations` and the direct dep
   restored.
4. **Inherited `redundant-prereq` warning on page 327.** `frontier-item-gate --tool validate-plan`
   warns that page 327 requires `em-elementary-mathematical-prerequisites` directly while already
   reaching it through `em-primitives-and-postulates` (which requires it). Both edges were declared
   by the plan; the scaffold keeps them unchanged and records the warning as owner-held.
5. **Run-level findings observed, not this batch's.** `validate-plan` FAILs with 12 errors, all on
   `em-potentials-and-gauge` / `em-potentials-and-gauge-examples` (batch 31): five `b-leaf`
   findings (published examples-page suppliers) and seven `undeclared-prereq` findings
   (`em-causal-wave-kernel-prerequisites`, `sobolev-poincare-and-morrey-inequalities`,
   `the-divergence-theorem-and-classical-stokes-examples`, `sine-cosine-and-the-definition-of-pi`,
   `the-seifert-van-kampen-theorem`, `categories-functors-and-natural-transformations-examples`).
   No finding names a batch-24 page or item. `frontier-item-gate extcheck --manifest-only` cannot
   run at all while 28 manifests still have empty inventories (run-level state).
6. **Coverage low-yield advisory on the A page (9/28).** The source headings read are largely
   absorbed inline or already published: the divergence and Stokes theorems and the two
   distributional-architecture items the page consumes are published mathematical items
   (`already-published`), many textbook derivations are the same content stated in the framework's
   own weaker/stronger hypotheses (`inline`), and only the framework-specific constructions are
   new items (`included`). This is a subject-driven, not padding-driven, yield; for Alpha to
   confirm at Step 5.
7. **Capacitor realisation (formulation decision recorded above).** The B thought experiment
   realises the surface-choice phenomenon with an explicit smooth slab model rather than a literal
   thin-wire circuit, because line currents are not among the framework's declared source types
   and a compact-plate capacitor's exact field is not explicit at this stage of the library. The
   design's "conditional example with its specified smooth/source/sheet geometry" is honoured by
   the smooth model; the capacitor reading is interpretive.
8. **No published defects found.** None of the published suppliers used by this batch was found
   false, mistyped or directionally wrong. The batch-13 in-run suppliers are scaffolded but not
   authored; their interfaces were read as manifests and are consumed with the exact hypotheses
   recorded above (the disk clause of `lem-em-continuous-localization` is deliberately not used;
   see item 4).

## Sources (four treatments, all full-text stamped 2026-10-09)

1. **D. J. Griffiths**, *Introduction to Electrodynamics*, 3rd edition, Prentice Hall 1999
   (textbook). Full scanned PDF (596 pp., 13484424 bytes, sha256_16 `ab7b67a3f6d60049`) at the
   repaired `hlevkin.com` URL. Read: §1.3.1 pp. 24–28, §1.3.4 pp. 31–34, §1.3.5 pp. 34–37,
   §7.3.1 pp. 321–323, §7.3.2 pp. 323–325, §7.3.3 pp. 326–328, §7.3.6 pp. 331–333.
2. **D. Tong**, *Electromagnetism*, Cambridge Part II lecture notes, 2026 printing
   (lecture-notes). Author-hosted full-text PDF (236 pp., 1882418 bytes, sha256_16
   `b99b41156dfe6cd9`). Read: §1.1.1 pp. 3–4, §1.2.1 pp. 5–6, §2.1 p. 8, §3.1 pp. 42–43,
   §4.1 pp. 66–68, §4.2–§4.2.1 pp. 79–81.
3. **L. D. Landau, E. M. Lifshitz**, *The Classical Theory of Fields*, Third Revised English
   Edition, Pergamon 1971 (monograph). Full-text PDF (387 pp., 11900733 bytes, sha256_16
   `57de03326f8ebe4a`). Read: §26 pp. 66–67, §28 pp. 69–70, §29 pp. 71–72, §30 pp. 73–75
   (Gaussian units re-expressed in SI).
4. **W. C. Chew**, *Lectures on Electromagnetic Field Theory*, Purdue University Fall 2020
   (lecture-notes). Full-text PDF (497 pp., 6558677 bytes, sha256_16 `51495b51fe349871`).
   Read: §1.2 p. 8, §2.1 pp. 17–22, §2.2 pp. 22–26, §4.3–§4.3.4 pp. 43–48.

The three treatments already stamped by earlier batches were re-fetched and re-stamped in this
batch's coverage file; their byte hashes match the earlier stamps exactly. All eight source rows
(four sources × two pages) are fetch-verified in check mode; no drop or alternative source was
needed.

## Checks run (actual results)

- `manifest-deps` on batch 24: 10 items, 0 normalized, 0 errors.
- `item-dependency-levels check --run`: the ten items compute 0, 0, 7, 14, 14, 14, 15, 15 (A) and
  15, 15 (B), matching their labels; the 28 remaining errors are `empty scaffold inventory` rows
  for the pages of batches still in flight; no error names a batch-24 page or item.
- `content-policy --manifest-only` over all forty manifests: 325 scoped items, 0 errors,
  0 warnings.
- `physics-check --run … --plan research/plan-spec.json`: 325 items checked, 0 errors.
- `coverage-checklist --require-destination` on batch 24: 2 pages, 38 harvested results,
  0 errors, 1 warning (the low-yield advisory of finding 6).
- `source-fetch-check --coverage … --stamp`, then check mode: 8/8 fetch-verified (6 + 2 newly
  stamped after the URL repair), 8/8 resolved.
- `step1-decisions record` ×10 (all `ready`; two records re-recorded after the final assembly added the positive-area suppliers to the thought experiment) + `check --run`: 325 items, 325 ready; the 28 remaining
  work rows are the empty inventories of pages still in flight.
- `manifest-integrity --run`: 80 pages owed, 80 in the manifests, no scope drift.
- `drift-review-check --run`: 40 pages reviewed, 0 spec edits, no blocked edges; 52 same-category
  requires edges checked, every owed A and B page strictly above 95% published-or-earlier-in-run.
- `frontier-dependency-ledger refresh --run`: refreshed; the batch-24 input contains 35 rows
  (3 page rows and 32 item rows), one per declared cross-batch edge.
- `frontier-item-gate … --tool validate-plan`: 12 errors, all on `em-potentials-and-gauge` /
  `em-potentials-and-gauge-examples` (finding 5); the single warning naming this page is the
  inherited `redundant-prereq` of finding 4. No error names a batch-24 page or item.
- `frontier-item-gate … --tool extcheck -- --manifest-only`: cannot run; `run-manifest-pages`
  fails while 28 batch manifests have empty inventories (run-level state).

## Honest uncertainty

- The ten items are scaffolded with complete statements and proof strategies and with exact
  cited uses, but they are not authored item files and have not received independent review;
  Step 3 provides that. The delicate points to check line by line at authoring time are: the
  local graph reduction and the test-function extension in `lem-em-surface-density-localization`;
  the density-factor positivity and the Riemann–Lebesgue identification; the admissibility of
  the affine square patches and the two box instances in `def-em-fixed-test-geometry`; the
  delta-separation argument (off-sheet vanishing then surface localization) in
  `pthm-em-fixed-vacuum-jumps`, including the interpretation of the interface lemma for
  time-dependent test functions; and the explicit slab realisation's flux arithmetic in
  `texp-em-displacement-current-surface-choice`.
- The design's dependency lists were written before the EM mathematics pages (batch 13) and the
  primitives page (batch 23) were scaffolded; the reconciliations recorded above are the
  scaffolder's reading of the actual uses and must be re-verified against the authored supplier
  texts at Step 3, not treated as certification.
- The Griffiths full text is read from a third-party mirror of the printed edition; the page
  and equation numbers cited are the printed ones, cross-checked in the OCR text. The earlier
  batches' 404 URL is recorded above; the repaired URL serves the same bytes.
