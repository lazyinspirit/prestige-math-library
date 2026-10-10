# Batch 23 notes — `em-primitives-and-postulates` / `-examples`

Run `physics-em-sr-40-2026-10-08`, role beta, Step 1 scaffold construction, 2026-10-09.
Scope: exactly one A/B pair, A page order **325**, B page order **326**, category
`classical-electromagnetism`, library `physics`. Final inventory: **10 A items + 2 B items**.
No item file, page, plan, published item, engine state or verdict was edited. Files written:
this manifest (`research/physics-em-sr-40-2026-10-08-batch-23.pages.json`), coverage, the
cross-batch dependency input, the `step1-*` readiness records for the twelve items, this note,
and the tool-refreshed unified ledger. The binding owner direction
`research/physics-em-sr-40-2026-10-08-owner-authoring-direction.md` was read first; its named
corrections were checked against every interface this page consumes (see “Owner-direction
interfaces” below) and none is contradicted.

## Design vs plan

Design section `research/plan-classical-electromagnetism-track.md` L1676–L1697 (“Primitives and
postulates”, quoting `proposed-inventory.json` and the exact contracts in
`definition-contracts.md`, `core-conditional-proofs.md#K1` and
`worked-example-verifications.md#X1`). Compared with `research/plan-spec.json` orders 325/326:
page ids, kinds, orders, category, library `physics`, titles, companion links, the declared
`requires` (`em-minkowski-mathematical-prerequisites`, `linear-independence-bases-and-dimension`,
`sr-forces-and-continuum`, `vector-spaces-and-subspaces`) and the design inventories
(10 A items, 2 B items) agree exactly. **No page-metadata plan conflict.** The design's own
`dependency_level` labels (0–6, computed over a small pre-run set) are superseded by the run's
in-run level convention: the twelve computed levels are 6, 7, 10, 8, 8, 12, 11, 13, 12, 17 and
12, 18, and `item-dependency-levels check --run` confirms them.

## Inventory decisions (recorded, item by item)

All twelve design items are kept with their promised content; the dependency lists were
reconciled to the actual uses (the design lists were written before the SR pages and the EM
mathematics pages were scaffolded, and omit several genuinely used suppliers). No claim was
dropped and no item was weakened for convenience. Levels are the computed in-run levels.

1. **`def-em-lab-geometry`** (design item; level 6). Kept the design’s deps and added the three
   in-run suppliers the statement actually names: `def-inertial-frame-and-inertial-chart` (the
   chart that is restricted), `def-spatial-euclidean-structure-of-an-inertial-frame` (the
   Euclidean form δ, the oriented orthonormal spatial basis and the identification
   R³ ≅ n⊥) and `def-interval` (the open interval I). `def-directional-and-partial-derivatives`,
   `def-ck-euclidean-maps-and-diffeomorphisms`, `def-euclidean-inner-product`,
   `def-vector-space`, `lem-standard-basis-of-f-n` and `post-sr-inertial-covariance` are the
   design’s own list.
2. **`def-em-si-conventions`** (design item; level 7). Design dep `def-em-lab-geometry` only;
   kept. The item is a convention table, so it carries no forward dependency on the source,
   field or tensor items introduced later on the page; the unit names are declared by the item
   itself.
3. **`def-em-sources`** (design item; level 10). Kept `def-em-lab-geometry`,
   `thm-sr-tensor-and-current-transformation`; added `def-em-si-conventions` (the units and the
   constant conventions the densities use), `def-riemann-integral-over-a-jordan-set` (the
   volume charge Q(V,t)) and `def-oriented-unit-normal-and-flux-of-a-surface-patch` (the
   current flux).
4. **`def-em-fields`** (design item; level 8). Kept `def-em-lab-geometry`,
   `def-em-si-conventions`; added `def-ck-euclidean-maps-and-diffeomorphisms` (the regularity
   notion of the component maps).
5. **`post-em-minkowski-physical-model`** (design item; level 8). Kept
   `def-em-lab-geometry`, `def-em-si-conventions`, `def-em-minkowski-affine-space`,
   `post-sr-inertial-covariance`, `post-sr-ideal-clocks-and-light`; added
   `def-inertial-frame-and-inertial-chart` (the inertial descriptions named in clause (ii)).
6. **`def-em-relativistic-worldlines-frames`** (design item; level 12). Kept
   `post-em-minkowski-physical-model` and `thm-sr-proper-time-and-observer-decomposition`; added
   the exact curve suppliers the statement uses: `def-sr-regular-causal-curve-and-worldline`
   (worldlines and causal curves), `def-sr-proper-time` (proper time and its exclusion of null
   curves), `def-sr-four-velocity-and-four-acceleration` (U and A), plus
   `def-inertial-frame-and-inertial-chart`, `def-sr-affine-minkowski-model` and the two
   formulation suppliers `def-em-lab-geometry`, `def-em-si-conventions`.
7. **`post-em-vacuum-maxwell`** (design item; level 11). Kept `def-em-fields`,
   `def-em-sources`; added `def-divergence-and-curl-of-a-c1-vector-field` and
   `def-directional-and-partial-derivatives` (the differential operators of the smooth branch)
   and `def-distribution`, `def-distributional-derivative`,
   `def-test-function-space-d-of-an-open-set`,
   `def-regular-distribution-from-a-locally-integrable-function`,
   `thm-locally-integrable-functions-embed-in-distributions` (the weak branch). The design’s
   title promises “smooth/weak branches” and both are stated; the weak branch is stated for
   locally integrable fields and sources, and sources that are not locally integrable (point
   and sheet sources) are explicitly excluded and left to their own definitions.
8. **`def-em-electromagnetic-tensor`** (design item; level 13). Kept
   `def-em-relativistic-worldlines-frames`, `thm-sr-antisymmetric-observer-decomposition`,
   `def-em-fields`; added `def-em-sources` and `def-em-si-conventions` (the four-current and
   the units), `def-ck-tensor-field-on-minkowski-space` (that F is a C^k tensor field),
   `def-sr-affine-minkowski-model`, `def-inertial-frame-and-inertial-chart`,
   `def-oriented-minkowski-volume-form` (ε0123=+1 and the square wedge),
   `def-cross-product-in-r3` and `lem-em-antisymmetric-tensor-contraction` (the raised-index
   operator Φ of the owner’s corrected interface) and `def-directional-and-partial-derivatives`
   (the potential components in clause (c)).
9. **`pthm-em-linear-superposition`** (design item; level 12). Kept `post-em-vacuum-maxwell`;
   added `def-divergence-and-curl-of-a-c1-vector-field`,
   `def-directional-and-partial-derivatives`, `thm-algebra-of-derivatives` (linearity of the
   coordinate derivatives in the smooth branch) and `def-distribution`,
   `def-distributional-derivative` (linearity of the pairings in the weak branch).
10. **`post-em-lorentz-coupling`** (design item; level 17). Kept `def-em-fields`,
    `def-em-sources`, `pthm-sr-momentum-and-four-force`,
    `thm-sr-proper-time-and-observer-decomposition`, `def-em-electromagnetic-tensor`,
    `post-sr-massive-particle-dynamics`; added `def-em-relativistic-worldlines-frames` (the
    worldline data), `post-em-minkowski-physical-model` (the framework’s spacetime),
    `lem-em-antisymmetric-tensor-contraction` (the operator Φ used in the equation) and
    `def-cross-product-in-r3` (the continuum J × B term). The role of the SR physics theorem is
    `formulation-prerequisite` (a postulate may not use physical-result roles) and the
    coordinate Newtonian expression is deliberately **not** adopted as exact.
11. **`ex-em-smooth-and-point-source-types`** (design item; level 12). Kept `def-em-sources`,
    `def-em-fields`; added `post-em-vacuum-maxwell` (the smooth branch the density belongs to),
    `lem-em-point-current-continuity` (the point-source pairings and their continuity),
    `def-distribution`, `def-test-function-space-d-of-an-open-set`,
    `def-dirac-delta-and-its-derivatives`, `def-riemann-integral-over-a-jordan-set`, and the
    suppliers of the inline non-representation proof:
    `def-regular-distribution-from-a-locally-integrable-function`,
    `thm-locally-integrable-functions-embed-in-distributions`, `def-countable-choice`,
    `def-measure-null-set-and-almost-everywhere`,
    `prop-countable-subsets-of-rn-are-lebesgue-null`,
    `thm-finite-and-countable-subadditivity-of-measures`,
    `lem-test-function-cutoffs-and-euclidean-localization`. The design’s promised claim
    “qδ_z acts by evaluation and is not a function” is kept in its full locally-integrable form
    and proved inline (ACω declared and used only through the embedding theorem’s injectivity).
12. **`ex-em-unit-dimensional-checks`** (design item; level 18). Kept
    `post-em-vacuum-maxwell`, `post-em-lorentz-coupling`; added `def-em-si-conventions` (the
    unit table) and `def-divergence-and-curl-of-a-c1-vector-field` (that divergence and curl
    divide a field unit by a length).

## Dependency verification (actual transitive uses, not declared edges)

All dep targets resolve: published imported items on disk, plus the in-run suppliers
`def-sr-affine-minkowski-model`, `def-inertial-frame-and-inertial-chart`,
`def-spatial-euclidean-structure-of-an-inertial-frame`, `post-sr-inertial-covariance`,
`post-sr-ideal-clocks-and-light`, `def-sr-regular-causal-curve-and-worldline`,
`def-sr-proper-time`, `def-sr-four-velocity-and-four-acceleration`,
`thm-sr-proper-time-and-observer-decomposition` (batches 1/3),
`thm-sr-tensor-and-current-transformation`, `def-ck-tensor-field-on-minkowski-space` (batch 2),
`pthm-sr-momentum-and-four-force`, `post-sr-massive-particle-dynamics` (batch 8),
`thm-sr-antisymmetric-observer-decomposition` (batch 9),
`lem-em-point-current-continuity` (batch 13) and `def-em-minkowski-affine-space`,
`lem-em-antisymmetric-tensor-contraction` (batch 14). The statements were read on disk (manifest
level) and the interfaces checked:

- **Tensor conventions.** `def-em-electromagnetic-tensor` fixes F₀ᵢ = −Eᵢ/c and
  F_ij = ε_ijk B_k, so F^{0i} = E_i/c and F^{ij} = ε_ijk B_k. Substituted into
  `thm-sr-antisymmetric-observer-decomposition` (a)-(c) this gives e_i = −E_i/c, b_i = −B_i and
  the invariants ½F_abF^ab = |B|² − |E|²/c², F_ab(*F)^ab = −4E·B/c, F∧F = 2E·B ε/c, using the
  owner-corrected normalisation “square wedge = 2(e·b) ε, dual contraction = −4(e·b)”. The SR
  theorem’s clause (d) records the opposite optional magnetic sign; the definition documents
  that the two are not mixed, and the Lorentz-force sign check (F^{iν}U_ν = γ(E + v×B) on the
  U^μ = γ(c,v) convention) confirms the choice.
- **Raised-index operator.** `lem-em-antisymmetric-tensor-contraction` (as repaired) defines
  Φ by η(Φ(u),w) = F(w,u) with Φ(u)^μ = η^{μα}F_{αβ}u^β, and its pointwise extension with no
  derivative of the field; `post-em-lorentz-coupling` uses exactly m dU/dτ = qΦ(U).
- **Current normalization.** `thm-sr-tensor-and-current-transformation` clause (vii) gives
  j = ρ₀U = (ρ₀U⁰)u with u = U/U⁰ and supplier coordinate density j⁰; the framework’s
  normalization j = (cρ, J) therefore gives ρ = ρ₀U⁰/c, with the supplier’s warning that the
  frame density and the scalar multiplier differ unless U⁰ = 1 retained verbatim.
- **Point source.** `lem-em-point-current-continuity` is stated for an open interval I, a C¹
  trajectory with proper graph map; the example states the properness hypothesis and uses
  exactly the two pairings and the continuity conclusion.
- **Axioms.** Only `ex-em-smooth-and-point-source-types` carries an assumption beyond ZF:
  ACω, declared in its statement and used only through the embedding theorem’s injectivity
  (`thm-locally-integrable-functions-embed-in-distributions`). No use of the Recorded
  results, no `deferred-set-theory-beyond-choice` path, and no other choice principle.
- No missing, circular, forward or inadequate dependency was found; `manifest-deps` reports
  0 errors, `physics-check --run --plan` reports 0 errors for 299 items, and
  `content-policy --manifest-only` over all forty manifests reports 0 errors and 0 warnings.

## Owner-direction interfaces checked

- The fourth-reconciliation corrections for the tensor/current supplier (ρ = ρ₀U⁰, u = U/U⁰,
  J = ρu; the corrected Hodge and square-wedge normalization; the corrected raised-index
  operator) are used verbatim in `def-em-sources` and `def-em-electromagnetic-tensor`.
- The SR items consumed here (`def-sr-*`, `thm-sr-proper-time-and-observer-decomposition`,
  `thm-sr-tensor-and-current-transformation`) were read in their current repaired form and are
  used with their exact hypotheses; the page does not consume any of the pairs the owner
  direction flags as needing repair (`lem-em-global-retarded-root`,
  `lem-sr-proper-time-reparametrization-invariance`, the elliptic/resolvent items, the
  accelerated-observer items) or any later EM page.

## Findings for owner reconciliation

1. **Design/plan reconciliation for `def-em-sources` (recorded formulation decision).** The
   design contract says “for bounded measurable V compact in Ω, Q(V,t) = ∫_V ρ dx”. The item as
   scaffolded defines the volume charge for **compact Jordan-measurable** V with the Riemann
   integral over a Jordan set. Reason: the page’s declared closure contains
   `the-riemann-integral-in-rn-and-jordan-content` but not `the-lebesgue-integral-and-the-convergence-theorems`
   or `lebesgue-measure-on-euclidean-space`, and the framework’s smooth branch (continuous
   densities, compact test regions) is what every consumer uses. This is a formulation-level
   restriction of the definition, not a lost result; the weak/measure-theoretic generality for
   singular sources belongs to the already-planned page 327 (`def-em-weak-sources`). If the
   owner wants the measurable phrasing, the two Lebesgue homes must be declared on page 325.
2. **Undeclared prerequisite pages (design/plan metadata; `validate-plan` FAIL, 8 rows).**
   Running `frontier-item-gate … --tool validate-plan` after this scaffold reports eight
   `[undeclared-prereq]` errors, all naming this pair’s two pages (no other page is named):
   - page `em-primitives-and-postulates` needs `the-divergence-theorem-and-classical-stokes`
     (home of `def-divergence-and-curl-of-a-c1-vector-field`, used by
     `post-em-vacuum-maxwell`, `pthm-em-linear-superposition` and `ex-em-unit-dimensional-checks`);
   - page `em-primitives-and-postulates` needs `distributions-test-functions-and-differentiation`
     (home of `def-distribution`, `def-distributional-derivative`,
     `def-test-function-space-d-of-an-open-set`,
     `def-regular-distribution-from-a-locally-integrable-function`,
     `def-dirac-delta-and-its-derivatives`,
     `lem-test-function-cutoffs-and-euclidean-localization`,
     `thm-locally-integrable-functions-embed-in-distributions`);
   - the B page additionally needs `em-elementary-mathematical-prerequisites` (in-run page 305,
     order 305 < 325; the point-current supplier), `lebesgue-measure-on-euclidean-space`
     (`prop-countable-subsets-of-rn-are-lebesgue-null`), `measures-and-their-basic-properties`
     (`def-measure-null-set-and-almost-everywhere`,
     `thm-finite-and-countable-subadditivity-of-measures`) and `countability-and-uncountability`
     (`def-countable-choice`).
   The minimal repair is to add all six to page 325’s `requires` (the B page inherits them); no
   ordering conflict exists (plan-spec orders: countability-and-uncountability 12,
   distributions-test-functions-and-differentiation 15, measures-and-their-basic-properties 37,
   the-divergence-theorem-and-classical-stokes 66, lebesgue-measure-on-euclidean-space 80.4,
   em-elementary-mathematical-prerequisites 305 — all strictly earlier than 325).
   An alternative, arguably cleaner, repair is to move the example’s non-representation lemma
   into the page-305 inventory (whose declared closure already covers the distribution and
   measure homes) and have the example consume it. All named suppliers are published (or
   scaffolded in-run) and were read; none is a missing mathematical prerequisite, only a
   plan-level `requires` declaration.
3. **B-homed counterexample deliberately not consumed (recorded).** The library’s
   `cex-not-every-distribution-is-a-locally-integrable-function` states the non-regularity of δ
   and would have shortened the example, but it is homed on the examples page
   `distributions-test-functions-and-differentiation-examples` and B pages must be leaves, so no
   page may depend on it. The example therefore proves the locally-integrable
   non-representation inline from the A-homed embedding, measure and cutoff suppliers. If the
   owner re-homes a copy of the counterexample to the A page, the example could be simplified;
   the scaffolded proof does not need it.
4. **Weak-branch interface to page 327 (cross-page note).** `post-em-vacuum-maxwell` states the
   weak branch for locally integrable fields and sources and excludes point/sheet sources, whose
   distributional definitions are planned on page 327 (`def-em-weak-sources`). Batch 24’s
   scaffold must ensure the weak reading of the four equations is available there for its
   distributional sources; this batch neither consumes nor duplicates that content.
5. **`def-em-fields` and the later tensor page.** The design contract mentions that (E,B) are
   “observer components of C1’s two-form, with full boosts C3”; those objects live on the later
   `em-lorentz-covariant-formulation` page and cannot be prerequisites here. `def-em-fields`
   therefore fixes only the type, regularity and polar/axial conventions and points to
   `def-em-electromagnetic-tensor` (same page) for the two-form identification. No claimed
   content is lost: the tensor item on this page supplies the component dictionary and the
   observer decomposition.
6. **Published defects: none found** among the published suppliers used. No supplier statement
   was found false, mistyped or directionally wrong; the pre-2019 exact value of μ0 printed by
   the two textbook treatments is a known superseded convention and is explicitly not adopted
   (the SI brochure’s measured status controls `def-em-si-conventions`).

## Sources (four treatments, all full-text stamped 2026-10-09)

1. **L. D. Landau, E. M. Lifshitz,** *The Classical Theory of Fields*, Third Revised English
   Edition, Pergamon 1971 (monograph). Full-text PDF (387 pp., 11 900 733 bytes, sha256_16
   `57de03326f8ebe4a`) at `http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf`.
   Read: §1–§4 pp. 1–12 (relativity, intervals, proper time, Lorentz transformation), §6–§7 and
   §9 pp. 14–28 (four-vectors, four-velocity, energy–momentum), §16–§17 pp. 44–49 (four-potential
   and equations of motion), §23 pp. 60–62 (field tensor), §26 pp. 66–67 and §28–§30 pp. 69–75
   (the two Maxwell pairs, four-current, continuity). Dispositions: the equation structure,
   tensor and current definitions are `included`; the Gaussian-unit normalisation is `deferred`
   to the SI conventions; the mechanics, constant-field, wave and radiation chapters are
   `out-of-scope` with reasons in the coverage.
2. **D. J. Griffiths,** *Introduction to Electrodynamics*, 3rd edition, Prentice Hall 1999
   (textbook). Full scanned PDF (596 pp., 13 484 424 bytes, sha256_16 `ab7b67a3f6d60049`) at the
   `hlevkin.com` mirror. Read: §1.5 pp. 45–52 (delta function), §5.1.2 pp. 204–205 (Lorentz
   force as axiom; B pseudovector), §5.3.2 pp. 224–225 (μ0 and the tesla), §7.3.3–§7.3.4
   pp. 326–328 (Maxwell in SI; no magnetic charge), §12.1–§12.3 pp. 491–531 (relativity and the
   field tensor), Appendix B pp. 561–562 (SI units). The pre-2019 exact μ0 printed by this
   edition is not adopted.
3. **D. Tong,** *Electromagnetism*, Cambridge Part II lecture notes, 2026 printing
   (lecture-notes). Author-hosted full-text PDF (236 pp., 1 882 418 bytes, sha256_16
   `b99b41156dfe6cd9`, byte-identical to the copy stamped by batches 21/22) at
   `https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf`. Read: §1.1–§1.2 pp. 2–6
   (charge, densities, Lorentz force, Maxwell in SI), §3.5 pp. 63–65 (post-2019 SI and the
   status of μ0), Chapter 5 pp. 113–135 (inertial frames). The notes’ printed
   μ0 = 4π×10⁻⁷ is superseded by their own §3.5 and by the SI brochure.
4. **BIPM,** *Le Système international d’unités / The International System of Units (SI)*,
   9th edition 2019 (official metrological reference). Full PDF (214 pp., 3 503 078 bytes,
   sha256_16 `1122cf38e25b23d7`) at
   `https://www.bipm.org/documents/20126/41483022/SI-Brochure-9.pdf`. Read: §2.2.1
   (English pp. 124–125; French pp. 16–17) defining constants c and e exact; §2.3.1 the ampere
   (English pp. 127–128; French pp. 19–20) μ0 measured, ε0μ0 = 1/c² exact, and the adoption-time
   value and uncertainty of μ0; §2.3.3–§2.3.4 for the derived units used in the check. This is a
   secondary metrological reference, not counted as a physics treatment; the pair has three
   primary treatments.

No retrieval failure occurred: all eight source rows (four sources × two pages) stamped on the
first fetch attempt; `source-fetch-check` check mode passes 8/8. The full texts were read
locally (downloaded copies; text extraction by `mutool`), and the equation identities used by
the items were read in the texts and cross-checked between treatments (Tong and Griffiths in
SI; Landau–Lifshitz in Gaussian units).

## Checks run (actual results)

- `manifest-deps` on batch 23: 12 items, 0 normalized, 0 errors.
- `item-dependency-levels check --run`: the twelve items compute levels 6, 7, 10, 8, 8, 12, 11,
  13, 12, 17 (A) and 12, 18 (B), matching their labels; the 34 reported errors are
  `empty scaffold inventory` rows for the pages of batches 24–40 still in flight; no error names
  a batch-23 page or item.
- `content-policy --manifest-only` over all forty manifests: 299 scoped items, 0 errors,
  0 warnings.
- `physics-check --run … --plan research/plan-spec.json`: 299 items checked, 0 errors.
- `coverage-checklist --require-destination` on batch 23: 2 pages, 47 harvested results,
  0 errors, 0 warnings.
- `source-fetch-check --coverage … --stamp`, then check mode: 8/8 fetch-verified (8 newly
  stamped), 8/8 resolved.
- `step1-decisions record` ×12 (all `ready`) + `check --run`: 299 items, 298 ready; the one
  remaining item is `pthm-sr-specified-model-comparison` (batch 12, an owner escalation that is
  not this batch’s); the 34 page work rows are the empty inventories of batches 24–40.
- `frontier-dependency-ledger refresh --run`: refreshed; the batch-23 input contains 28 rows
  (2 page rows and 26 item rows), every row matched a declared cross-batch edge and no orphaned
  review was reported for this batch. `--require-reviewed` still fails because batches 24–40
  have supplied no inputs yet (run-level state).
- `manifest-integrity --run`: 80 pages owed, 80 in the manifests, no scope drift.
- `drift-review-check --run`: 40 pages reviewed, 0 spec edits, no blocked edges; 52
  same-category requires edges checked, every owed A and B page strictly above 95%
  published-or-earlier-in-run.
- `frontier-item-gate … --tool validate-plan`: FAIL with the eight `[undeclared-prereq]` rows of
  finding 2 (all naming page 325 or 326); no error names any other page. The 13 existing
  warnings (redundant-prereq rows on other pages plus four on page 325 inherited from the plan’s
  direct listing of pages already reachable through its requires) are unchanged from the
  pre-scaffold state and are owner-held.
- `frontier-item-gate … --tool extcheck -- --manifest-only`: cannot run; `run-manifest-pages`
  throws `Invalid or empty current page in …batch-24.pages.json` because batches 24–40 still
  have empty inventories (the same run-level limitation batches 21 and 22 recorded).

## Honest uncertainty

- The twelve items are scaffolded with complete statements and proof strategies and with exact
  cited uses, but they are not authored item files and have not received independent review;
  Step 3 provides that. In particular the tensor sign dictionary and the example’s inline
  non-representation argument must be checked line by line at authoring time, and the weak
  branch’s distribution conventions must be checked against the published items then.
- The Landau–Lifshitz and Griffiths full texts were read from third-party mirrors of the printed
  editions; the locators are the printed page numbers of those editions as shown by the
  documents, and the section/equation numbers were verified against the extracted text. The
  Griffiths copy is a scan whose OCR mangles some symbols; every formula cited from it was
  cross-checked against at least one of the other two treatments.
- Findings 1–5 concern plan-level declarations, one design formulation choice and cross-page
  interfaces; they are reported, not repaired. This scaffolder owns only batch 23.
