# Step 3b — scaffold audit and authoring: `equivariant-borel-moore-correspondence-convolution-and-constructible-ext`

Run `frontier-44-special-representation-examples-28`, batch 44 (orders 1821/1826),
role `alpha-high`, label
`step3b-pair-equivariant-borel-moore-correspondence-convolution-and-constructible-ext-4108ff6edc8ffe9b`.
A page `equivariant-borel-moore-correspondence-convolution-and-constructible-ext`
(5 scaffolded items), B page `…-examples` (2 scaffolded items), category
`special-topics-in-representation-theory`. Own only this pair; sibling rows in shared batch
files are preserved. Report opened at entry 2026-10-10 before any edit.

## Owned IDs and open obligations (entry checkpoint)

A-page items, in the dispatch's dependency-level authoring order (all scaffold-only; item
files, pages and contracts owed):

1. `lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports` (level 18)
2. `def-equivariant-borel-moore-homology-and-correspondence-convolution` (level 19)
3. `thm-proper-pushforward-ext-is-equivariant-borel-moore-homology-of-the-fiber-product` (level 20)
4. `thm-verdier-duality-identification-intertwines-yoneda-product-and-convolution` (level 21)
5. `lem-smooth-flag-incidence-correspondences-have-the-required-oriented-push-pull-calculus` (level 22)

B-page items (scaffold-only; item files and B page owed):

6. `ex-unequal-dimensional-proper-pushforwards-have-the-summed-dimension-ext-bm-shift` (level 21)
7. `ex-a-point-and-projective-line-check-source-first-convolution-and-opposite-composition` (level 22)

Open obligations at entry: (1) author all seven item files and both pages
`library/special-topics-in-representation-theory/equivariant-borel-moore-correspondence-convolution-and-constructible-ext.md`
and `…-examples.md`; (2) audit each scaffold statement, hypothesis and declared supplier
against the current inputs; (3) sync the batch-44 manifest deps/provenance/dependency levels to
the authored items, preserving sibling rows; (4) write
`research/frontier-44-special-representation-examples-28-batch-44.proof-contracts.json`;
(5) refresh `…-batch-44.cross-batch-dependencies.json` with the actual consuming steps and
refresh the frontier dependency ledger; (6) run the explicit-path checks (proof-layout,
precheck, rendercheck, content-policy, depcheck, manifest-deps, item-dependency-levels,
validate-plan, coverage-checklist, proof-contract --strict, depsource/fwdcheck/extcheck where
applicable); (7) record a step-3 item decision for every owned ID, escalating consumers of
still-unfinished suppliers with exact IDs and consuming steps.

## Entry audit notes (recheck of Step 3a findings against current inputs)

- **Unfinished in-run suppliers (no `items/` file on disk at entry).** Batch 40
  (`thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace`,
  `thm-verdier-duality-on-oriented-stratified-complex-varieties`), batch 41
  (`thm-constructible-six-functors-proper-base-change-and-verdier-duality`,
  `lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom`) and batch 37
  (`thm-constructible-sheaves-admit-finite-stratified-triangulations-and-finite-local-cohomology`).
  Their sibling writers are running concurrently (batch-40 reports written 22:41, item 1 of that
  batch authored 22:43); the scaffold statements in the batch manifests are the current
  interfaces. Consumers are authored against those statements and their decisions stay
  escalated with the exact supplier ID and consuming step.
- **Authored in-run supplier.** `def-equivariant-constructible-derived-category-for-complex-algebraic-varieties`
  (batch 41, level 10) has an item file (written 22:43); items 2, 3, 4, 6 were checked against
  its actual Definition (action nerve $G^p\times X$, Cartesian cohomology, bounded
  constructibility on $X$, $\operatorname{Ext}_G^m(A,B)=\operatorname{Hom}(A,B[m])$, restriction
  to $X$, `justified_by` the unfinished cartesian-simplicial lemma).
- **Step 3a note 2 (positivity normalization).** The "positive compactly supported generator on a
  complex coordinate ball" used by item 1 is the normalization proved by batch-40
  `thm-verdier-duality-on-oriented-stratified-complex-varieties` ("the complex orientation
  normalizes $\omega_X\simeq k_X[2d]$", strategy step 2: compact-support cochains of a small ball,
  positive orientation). Item 1 therefore declares that item as a direct dependency and cites it
  for the normalization; the manifest dependency row is synced accordingly.
- **Step 3a note 1 (CW bookkeeping, item 5).** `thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle`
  assumes a numerable complex bundle over a path-connected CW base; item 5 declares the batch-37
  finite-triangulation theorem for CW-type models of the finite Borel approximations and states
  the per-approximation application explicitly in Facts and in the final step.
- **Trusted published inputs read on disk.** `def-axiom-of-choice`, `lem-flag-variety-of-a-vector-space`,
  `thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle`,
  `def-stiefel-space-grassmannian-and-tautological-bundle`,
  `def-schubert-cells-in-real-and-complex-grassmannians`,
  `thm-schubert-cells-give-the-stable-grassmannian-cw-structure`,
  `cor-a-cw-complex-with-no-cells-in-adjacent-dimensions-has-zero-cellular-boundary`,
  `thm-cellular-cochains-compute-cohomology-with-local-coefficients`,
  `def-cw-complex-with-closure-finiteness-and-weak-topology`.

## Checkpoint log

(one entry per item, in the dispatch's dependency order; resume here)

### Item 1 (level 18): `lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports`

- Authored `items/lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports.md`.
- Exact claim/conventions: analytic constructible six-functor setting; smooth complex $M$ of pure
  dimension $d$ (analytic space of a smooth complex algebraic variety); morphisms $q:A\to M$,
  $u:B\to M$; $T=A\times_MB$ with projections $a,b$; refined diagonal operation via the mate
  $\mathrm{ex}:a^*q^!\to b^!u^*$ of the base-change morphism, equal to cap product with the
  positive middle-diagonal Thom class, degree drop $2d$, no transversality, ordered iterated
  diagonals, zero-section Euler clause. Clarified the scaffold's "smooth complex manifold" to the
  analytic space of a smooth complex algebraic variety (the suppliers' setting); claim otherwise
  preserved.
- Dependency changes: added `thm-verdier-duality-on-oriented-stratified-complex-varieties`
  (batch 40, the positivity normalization; resolves Step 3a note 2) and published
  `lem-closed-immersion-proper` (Δ and θ proper, used for base change). Level stays 18.
- Suppliers: `thm-analytic-sheaf-six-operations-…`, `thm-verdier-duality-on-oriented-stratified-complex-varieties`
  (batch 40) and `thm-constructible-six-functors-proper-base-change-and-verdier-duality` (batch 41)
  have no item file yet; consuming steps 1.1 (purity/normalization), 2.1 (proper base change),
  3.1 (supported evaluation/exchange), 4.1 (equivariant form). Decision to be escalated with these
  exact IDs and steps.
- Checks: `precheck.mts` 1/1 clean; `proof-layout.mjs` 5 steps, 0 defects; `rendercheck.mjs` OK.

(item 2 authoring in progress)

### Item 2 (level 19): `def-equivariant-borel-moore-homology-and-correspondence-convolution`

- Authored `items/def-equivariant-borel-moore-homology-and-correspondence-convolution.md`.
- Exact claim/conventions: normalized $\omega_X^G|_X=\omega_X$ (not the quotient-stack shift);
  $H_j^{\mathrm{BM},G}(X;k)=H_G^{-j}(X,\omega_X^G)$ with the stable Borel value $H^{\mathrm{BM}}_{j+2b}(X\times_GU;k)$;
  source-first product $a*b=h_*\Delta_{X_j}^!(a\boxtimes b)$ with degree drop $2d_j$, ordered
  coordinates, zero on nonmatching indices, corner degree $d_i+d_j-p$; sheaf model via the
  exchange mate, a morphism and not an asserted isomorphism; agreement with the geometric
  operation deferred to item 4 via `justified_by`.
- Dependency changes: none to the declared five; the definition links only declared deps plus the
  `justified_by` target.
- Suppliers: item 1 (authored here), `def-equivariant-constructible-derived-category-…` (batch 41,
  authored, checked), `lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom`
  and `thm-constructible-six-functors-proper-base-change-and-verdier-duality` (batch 41, unfinished;
  consuming clauses: stable Borel value/well-formedness paragraph and the normalized dualizing
  object and smooth orientation). Decision to be escalated for the unfinished ones.
- Checks: `rendercheck.mjs` OK; `proof-layout.mjs` 0 steps (definition, no proof phase);
  `precheck.mts` not-applicable.

### Item 3 (level 20): `thm-proper-pushforward-ext-is-equivariant-borel-moore-homology-of-the-fiber-product`

- Authored. Three steps: adjunction chain (with the extraordinary base change
  $f_i^!f_{j!}\cong p_*q^!$), orientation/degree ($q^!k_j=\omega_Z[-2d_j]$, corner degree
  $d_i+d_j-r$, finite-approximation degree $d_i+d_j+2b-r$), naturality/linearity/degreewise
  finiteness. Dependency changes: none. Unfinished suppliers with consuming steps:
  `thm-constructible-six-functors-proper-base-change-and-verdier-duality` (steps 1.1, 2.1, 3.1),
  `lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom` (steps 1.1, 3.1).
  Checks: precheck clean; proof-layout 3 steps, 0 defects; rendercheck OK.

### Item 4 (level 21): `thm-verdier-duality-identification-intertwines-yoneda-product-and-convolution`

- Authored. Seven steps: typed correspondences; explicit composite $W$ and its adjoint kernel form;
  geometric interpretation (normal-ball $+1$ normalization, no transversality); push to the third
  corner; composition square/Beck–Chevalley units; shifts, degrees and absence of signs; unit image
  and unital graded algebra conclusion. Dependency changes: none. Unfinished suppliers with
  consuming steps: `thm-constructible-six-functors-…` (steps 2.1, 3.1, 4.1, 5.1),
  `lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom` (step 6.1).
  Checks: precheck clean (step 2.1 kept on one source line so the checker sees its cites and tags);
  proof-layout 7 steps, 0 defects; rendercheck OK.

### Item 6 (level 21): `ex-unequal-dimensional-proper-pushforwards-have-the-summed-dimension-ext-bm-shift`

- Authored. Five steps: the two objects; the $P^1$ cellular computation and
  $R\Gamma(\mathbb P^1,k)\cong k\oplus k[-2]$; forward corner $r=-1,1$; reverse corner same two
  degrees; degree comparison and failure of the single-source shifts.
- Dependency repair: added published `def-complex-projective-space-and-holomorphic-charts`
  (smoothness of $P^1$ of pure complex dimension 1) and `thm-projective-space-proper-over-base`
  (properness of $P^1\to\operatorname{Spec}\mathbb C$).
- ai-generated statement: `generation.role: example` recorded per SCHEMA; as an ai-generated
  statement this item may not be a `deps` target, so item 7 will not depend on it (local
  restatement of the two-group identification, see item 7 below).
- Unfinished supplier with consuming step: `lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom`
  (identity Borel model, [F2]). Checks: precheck clean; proof-layout 5 steps, 0 defects; rendercheck OK.

### Item 5 (level 22): `lem-smooth-flag-incidence-correspondences-have-the-required-oriented-push-pull-calculus`

- Authored. Four steps: the associated-bundle model $X_\nu=G\times_{P_\nu}S_\nu$; smoothness,
  projectivity and properness (closed immersion into the product with the projective flag product,
  with the properness toolbox cited from published items); equivariant orientations and the Thom
  operation in every corner; zero sections, Euler/top-Chern and the push-pull calculus.
- Dependency changes: added published `cor-projective-variety-product-exists`,
  `def-proper-morphism`, `lem-closed-immersion-proper`, `thm-projective-space-proper-over-base`.
- Interface reconciled: the batch-37 `thm-constructible-sheaves-admit-finite-stratified-triangulations-and-finite-local-cohomology`
  is now authored and its finite CW-type model clause is exactly the one used in [F3];
  `lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom` is authored.
- Checks: precheck clean; proof-layout 4 steps, 0 defects; rendercheck OK.

### Item 7 (level 24): `ex-a-point-and-projective-line-check-source-first-convolution-and-opposite-composition`

- Authored. Four steps: the local geometry/cohomology; the classes $\alpha,\beta$ and
  $\beta[-1]\circ\alpha=\operatorname{id}_k$; the product theorem check $\alpha*\beta=\operatorname{id}_k$;
  the geometric product $[\mathbb P^1]*[\mathrm{pt}]=[\mathrm{pt}]$ with the middle drop $2$, the
  source-first order and the absence of an extra sign.
- Dependency repair: removed the dependency on the ai-generated example
  `ex-unequal-dimensional-proper-pushforwards-have-the-summed-dimension-ext-bm-shift` (SCHEMA
  forbids an ai-generated statement as a `deps` target) and restated the two-group identification
  locally from the published Schubert and cellular suppliers; added
  `def-complex-projective-space-and-holomorphic-charts` and `thm-projective-space-proper-over-base`.
- Checks: precheck clean; proof-layout 4 steps, 0 defects; rendercheck OK.

## Interface reconciliation and dependency/level changes (Step-4 notes)

All six in-run suppliers of this pair finished authoring during the dispatch and were rechecked
against their actual item files (not only the scaffold statements):
`thm-analytic-sheaf-six-operations-…` and `thm-verdier-duality-on-oriented-stratified-complex-varieties`
(batch 40), `def-equivariant-constructible-derived-category-…`, `lem-cartesian-simplicial-sheaves-…`,
`thm-constructible-six-functors-…` and `lem-product-general-linear-stiefel-approximations-…`
(batch 41), and `thm-constructible-sheaves-admit-finite-stratified-triangulations-…` (batch 37);
both page suppliers (`analytic-derived-six-operations-and-duality`,
`equivariant-constructible-perverse-foundations`) exist on disk. Consequences recorded in the
items, the manifest and the cross-batch input:

- item 1 gained `thm-verdier-duality-on-oriented-stratified-complex-varieties` (the positive
  complex generator normalization, whose authored proof step 1.2 explicitly fixes the generator
  used by the oriented diagonal Thom classes) and published `lem-closed-immersion-proper`.
- items 3 and 4 gained `thm-analytic-sheaf-six-operations-…` so that the dualizing-transitivity
  and trace clauses they use are cited from the ordinary contract that states them explicitly,
  transported by the equivariant theorem's resolution comparisons.
- item 5 gained the four published projectivity/properness items listed above; item 6 gained
  published `def-complex-projective-space-and-holomorphic-charts` and
  `thm-projective-space-proper-over-base`, and both examples now cite
  `lem-product-general-linear-stiefel-approximations-…` for the trivial-group identity model
  ($r_N=\infty$, $Q_N=\mathrm{id}$).
- item 7's dependency on the ai-generated example was removed (see item 7).
- Recomputed `dependency_level`s (verified by `item-dependency-levels check`: no batch-44 error):
  20 (`lem-complex-oriented-diagonal-thom-class-…`), 21 (`def-equivariant-borel-moore-homology-…`),
  22 (`thm-proper-pushforward-ext-…`), 23 (`thm-verdier-duality-identification-…` and
  `ex-unequal-dimensional-…`), 24 (`lem-smooth-flag-incidence-…` and
  `ex-a-point-and-projective-line-check-…`). The dispatch's Step-1 labels (18–22) were superseded
  by in-run supplier level growth; the authoring order was unchanged and remains the dispatch
  order. The batch-44 manifest deps and levels were synced to the authored items.
- Two clause-level gaps stay escalated (owner-held): (i) the definition's equivalence with the
  eventual stable Borel value $H^{\mathrm{BM}}_{j+2b}(X\times_GU;k)$ is not literally stated by the
  authored `lem-cartesian-simplicial-sheaves-…`, which supplies the finite-resolution model and its
  Hom comparisons; (ii) item 3's degreewise-finiteness use is supplied through that same
  resolution model rather than by a literal finite-dimensionality clause, and the dedicated
  batch-41 degreewise-finiteness theorem is still unauthored. The other five items' uses were
  reconciled against the authored suppliers and recorded as current.

## Pages authored

`library/special-topics-in-representation-theory/equivariant-borel-moore-correspondence-convolution-and-constructible-ext.md`
(A; 5 items in dependency order) and `…-examples.md` (B; the two examples). Both render clean;
neither is placed in the category pathway (the run's pathway writer owns that shared file and
`pathcheck` reports the 19 in-run draft pages as `draft-unplaced`).

## Checks actually run (final state)

- `node tools/proof-layout.mjs <7 item paths>` (single batched run after the last item edit) →
  7 items, 28 steps, 0 defects.
- `node tools/tsx-run.mjs tools/precheck.mts <7 item paths>` → 6 checked, 0 failing (the
  definition has no proof phase).
- `node tools/rendercheck.mjs <7 items + 2 pages>` → OK, 9 files.
- `node tools/content-policy.mjs research/…-batch-44.pages.json` → 7 scoped items, 0 errors,
  0 warnings (the two `ai-generated` example statements carry `generation.role: example` and no
  item depends on either).
- `node tools/manifest-deps.mjs research/…-batch-44.pages.json` → 7 items, 0 errors.
- `node tools/item-dependency-levels.mjs check --run …` → no batch-44 finding; the command still
  reports 32 `dependency-level` rows belonging to sibling pairs writing concurrently.
- `node tools/depcheck.mjs --items-file <7 ids>` → OK; focused item/page and prerequisite cycle
  checks over 3176 items and 398 pages.
- `node tools/fwdcheck.mjs --quiet --items-file <7 ids>` → OK.
- `node tools/extcheck.mjs --items-file <7 ids>` → 7 items, 0 recorded-not-proved.
- `node tools/depsource.mjs --run … --items-file <7 ids>` → 7/7 consumer coverage, 0 unresolved.
- `node tools/validate-plan.mjs research/plan-spec.json --run …` → exit 0; batch-44 pages appear
  with their planned orders/requires and no item-level cycle, forward reference, B-page dependency
  or unresolved id; only pre-existing `redundant-prereq` advisories.
- `node tools/coverage-checklist.mjs research/…-batch-44.coverage.json --require-destination` →
  2 pages, 26 harvested results, 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage …` → 5/6 fetch-verified, 6/6 resolved (the
  documented Chriss–Ginzburg drop); `url-sweep --recover --fail-on-dead` → 4/4 live, 0 blocking;
  `source-backing` → 5 authored results, every one backed.
- `node tools/proof-contract.mjs research/…-batch-44.proof-contracts.json --strict` → 7/7 items
  checked, 0 errors, 0 warnings (regenerated after the suppliers were authored, so the earlier
  `citation-source-missing` rows are gone).
- `node tools/boundary-audit.mjs … --fail-on-contradicted --fail-on-template` → exit 0, no
  contradicted disposition, no template cluster; 56 rows, 26 `not_applicable` with item-specific
  reasons.
- `node tools/citation-fidelity.mjs --fail-on-missing-quote …` → no missing quote, no widening
  candidate.
- `node tools/pathcheck.mjs special-topics-in-representation-theory` → 0 errors, 19
  `draft-unplaced` warnings for in-run draft pages (pathway writer).
- `node tools/frontier-dependency-ledger.mjs refresh --run …` → refreshed and deduplicated; the
  batch-44 input now carries 23 rows (21 `verified`, 2 `open` for the escalated clauses).
- `node tools/step3-decisions.mjs check --run … --phase final` → five items current
  (`repaired`); `def-equivariant-borel-moore-homology-…` and `thm-proper-pushforward-ext-…`
  remain owner-held escalations for the two clause gaps above. Because suppliers were edited
  concurrently during the dispatch, a later serial re-record after writers drain restores
  currency for the non-escalated rows.

## Published concerns

None confirmed in this batch. All published dependencies read on disk (`def-axiom-of-choice`,
`lem-flag-variety-of-a-vector-space`, `thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle`,
`def-stiefel-space-grassmannian-and-tautological-bundle`,
`def-schubert-cells-in-real-and-complex-grassmannians`,
`thm-schubert-cells-give-the-stable-grassmannian-cw-structure`,
`cor-a-cw-complex-with-no-cells-in-adjacent-dimensions-has-zero-cellular-boundary`,
`thm-cellular-cochains-compute-cohomology-with-local-coefficients`,
`def-cw-complex-with-closure-finiteness-and-weak-topology`, `lem-closed-immersion-proper`,
`def-proper-morphism`, `thm-projective-space-proper-over-base`,
`cor-projective-variety-product-exists`, `def-complex-projective-space-and-holomorphic-charts`)
match their uses; no shared-ledger row was written.

## Open obligations at handoff

1. Owner resolution of the two escalated item decisions (stable-Borel-value clause; degreewise
   finiteness clause), with the two `open` cross-batch rows as the exact edges.
2. Pathway placement of the two new pages in `library/special-topics-in-representation-theory/_pathway.md`
   (shared file, pathway writer).
3. Steps 5–7 owe the independent mathematical audit; the checks here are format, policy, contract,
   dependency and interface checks, not independent proof review.
