# Phase 2 recorded-result retirement audit

Date: 2026-09-08.

## Verdict

The 122-pair Phase-2 baseline examined by this audit is an exact declared-page
closure for published consumers, but it is **not** a complete closure for retiring every
`proved_here: false` item.  The read-only census
`node research/audit-phase-2-closure.mjs` finds 161 recorded items.  The owner
has exempted the two records on
`the-finite-simple-group-classification-landscape` for later deletion, leaving
159 retirement obligations.  `node tools/extcheck.mjs` currently reports 63
published consequences; that is only the live consumer-impact baseline, not a
census of all recorded mathematics.

No manifest pair reaches a `not-proved-here` page, which is the correct
Foundations bootstrapping invariant.  It also means that merely publishing the
122 pairs cannot retire the catalogue.  Retirement requires (1) the additional
proved supplier closures below, (2) the Phase-3 local insertions/cutovers below,
and (3) rehoming open questions as dated status records rather than pretending
to prove answers.

## Exact Set Theory catalogue map

This is the clause-level destination map from
`plan-set-theory-completion-track.md`.  “In” means the destination A page was in
the 122-pair baseline (or was already published); “add” means its A/B pair was
missing from that baseline and is an expansion obligation.

| recorded item | proved destination(s) | disposition |
|---|---|---|
| `rem-godel-constructible-universe` | `the-constructible-hierarchy-and-inner-models`; `condensation-gch-and-diamond-in-l`; formal transfer via `arithmetization-incompleteness-and-relative-consistency` and `the-forcing-theorem-and-formal-consistency-transfer` | in |
| `rem-cohen-forcing-ac-independent` | `symmetric-extensions-and-basic-choice-failure-models`; formal transfer via `the-forcing-theorem-and-formal-consistency-transfer` | in |
| `rem-independence-of-ch-and-gch` | `condensation-gch-and-diamond-in-l`; `preservation-cohen-forcing-and-the-continuum` | in |
| `rem-gch-implies-ac` | already-published `weak-choice-principles-and-sierpinskis-theorem` | Phase-3 alias/cutover only |
| `rem-cohen-first-model` | `symmetric-extensions-and-basic-choice-failure-models` | in |
| `rem-fraenkel-socks-model` | `permutation-models-and-transfer-to-zf`; `symmetric-extensions-and-basic-choice-failure-models` | in |
| `rem-feferman-levy-model` | `symmetric-collapse-and-ultrafilter-free-models` | **add** |
| `rem-feferman-no-free-ultrafilter-in-zf` | `symmetric-collapse-and-ultrafilter-free-models` | **add** |
| `rem-blass-model-without-ultrafilters` | `symmetric-collapse-and-ultrafilter-free-models` | **add; unresolved full-text proof gate** |
| `rem-halpern-levy-bpi-not-ac` | the in-manifest replacement `boolean-prime-ideal-theorem-in-the-basic-cohen-model` supplies the consistency interface; the currently declared full-track proof home is `halpern-lauchli-and-bpi-without-choice` | **add the latter while it remains a declared prerequisite/claim destination** |
| `rem-solovay-model` | `large-cardinals-measures-and-elementary-embeddings`; `borel-analytic-sets-perfect-sets-and-determinacy`; `symmetric-collapse-and-ultrafilter-free-models`; `solovays-model-and-regularity-of-all-sets-of-reals` | **add all missing destinations** |
| `rem-shelah-inaccessible-and-the-baire-property` | `shelahs-baire-property-model-and-inner-model-lower-bounds`, after the Solovay/large-cardinal closure | **add** |
| `rem-gitik-all-uncountable-cardinals-singular` | `prikry-forcing-and-gitiks-singular-cardinal-model`, after the large-cardinal and symmetric-model closure | **add** |
| `rem-baire-category-choice-strength` | in-manifest `dependent-choice-and-the-complete-metric-baire-theorem` for metric BCT iff DC; remaining compact-Hausdorff/DMC clauses on `choice-strength-in-baire-urysohn-stone-and-tychonoff` | **add the latter; do not claim the unverified `DMC < DC` clause** |
| `rem-urysohn-lemma-not-a-zf-theorem` | `choice-strength-in-baire-urysohn-stone-and-tychonoff` | **add; `URY -> DMC?` is status only** |
| `rem-stone-theorem-choice-strength` | `choice-strength-in-baire-urysohn-stone-and-tychonoff` | **add; exact-strength question is status only** |
| `rem-schechter-kelley-tychonoff` | in-manifest `boolean-algebras-stone-duality-and-the-prime-ideal-theorem`; remaining choice-strength clauses on `choice-strength-in-baire-urysohn-stone-and-tychonoff` | **add latter** |
| `rem-martins-axiom` | `finite-support-iterations-and-martins-axiom` | in |
| `rem-suslin-hypothesis-independent` | `suslin-trees-lines-algebras-and-independence` | in |
| `rem-normal-moore-space-conjecture` | `proper-forcing-countable-support-iterations-and-pfa`; `shelahs-baire-property-model-and-inner-model-lower-bounds`; `normal-moore-spaces-pmea-and-consistency-strength` | **add all three** |
| `rem-l-spaces-and-s-spaces` | `proper-forcing-countable-support-iterations-and-pfa`; `minimal-walks-oscillation-and-l-and-s-spaces` | **add both** |
| `rem-dowker-spaces` | `pcf-scales-and-zfc-dowker-spaces` | **add; the ZFC `aleph_1` question is dated status only** |

Consequently the exact additional registered Foundations A/B closure is:

1. `borel-analytic-sets-perfect-sets-and-determinacy` (SET-10);
2. `symmetric-collapse-and-ultrafilter-free-models` (SET-20);
3. `halpern-lauchli-and-bpi-without-choice` (SET-21);
4. `choice-strength-in-baire-urysohn-stone-and-tychonoff` (SET-22);
5. `large-cardinals-measures-and-elementary-embeddings` (SET-23);
6. `solovays-model-and-regularity-of-all-sets-of-reals` (SET-24);
7. `shelahs-baire-property-model-and-inner-model-lower-bounds` (SET-25);
8. `prikry-forcing-and-gitiks-singular-cardinal-model` (SET-26);
9. `proper-forcing-countable-support-iterations-and-pfa` (SET-27);
10. `normal-moore-spaces-pmea-and-consistency-strength` (SET-28);
11. `minimal-walks-oscillation-and-l-and-s-spaces` (SET-29);
12. `pcf-scales-and-zfc-dowker-spaces` (SET-30).

SET-31 is enrichment, not a destination of one of the 22 recorded Set Theory
items, so it is not invented as a retirement root.  The twelve-pair list is a
route map, not a proof-adequacy certificate.  In particular, SET-20 is blocked
on the complete Blass proof, and SET-22 must delete or source-correct the
unverified `DMC < DC` assertion.  Repický's complete four-page proof does support
the narrow basic-Cohen-model BPI-without-AC replacement already in the manifest;
Andretta--Notaro supports the new DC interface, not the disputed global DMC
separation.

## Functional Analysis catalogue (33 items)

The manifest does cover the main unpublished FA spine.  The exact mapping is:

| recorded items | destination A page(s) |
|---|---|
| `rem-hahn-banach-theorem` | `norming-and-separation-under-hahn-banach`, followed by Phase-3 cutover of the published Hahn--Banach items |
| `rem-hahn-banach-choice-strength` | the new BPI consistency corollary plus a Phase-3 rewrite of the published choice ledger |
| `rem-open-mapping-theorem`, `rem-closed-graph-theorem`, `rem-uniform-boundedness`, `rem-mazur-lemma`, `rem-banach-no-countable-hamel-basis`, `rem-kuratowski-wojdyslawski` | already-published FA-3/5/6 proofs; Phase-3 alias/cutover only (the Hamel-basis proof also cuts over to the in-manifest DC/Baire replacement) |
| `rem-weak-and-weak-star-topologies` | `weak-and-weak-star-topologies` |
| `rem-banach-alaoglu`, the isometric half of `rem-c0-not-a-dual-space` | `banach-alaoglu-goldstine-and-krein-milman` |
| `rem-eberlein-smulian`, `rem-schur-property-l1`, `rem-james-theorem`, `rem-bishop-phelps` | `reflexivity-and-eberlein-smulian` (existing complete-proof gate applies) |
| `rem-james-space`, `rem-banach-limits`, `rem-dual-of-l-infinity`, `rem-enflo-space` | `schauder-bases-approximation-and-banach-space-pathologies` |
| `rem-radon-nikodym-property`, the isomorphic half of `rem-c0-not-a-dual-space` | `banach-valued-integration-and-the-radon-nikodym-property` (existing complete-proof gate applies) |
| `rem-riesz-representation-hilbert` | `hilbert-space-geometry-and-riesz-representation` |
| `rem-separable-hilbert-isometric-l2` | `orthonormal-bases-parseval-and-fourier-series` |
| `rem-compact-operators`, `rem-fredholm-theory` | `compact-operators-and-riesz-schauder-theory`; compact self-adjoint clauses continue on `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators` |
| `rem-spectral-theory-bounded-operators` | `banach-algebras-spectrum-and-holomorphic-functional-calculus`; `continuous-functional-calculus-for-self-adjoint-and-normal-operators`; `spectral-measures-and-borel-functional-calculus` |
| `rem-banach-stone`, `rem-gelfand-naimark-commutative`, `rem-gelfand-kolmogorov`, `rem-stone-duality` | `gelfand-theory-and-commutative-c-star-algebras` |

Four FA records are **not actually retired by that map**:

- `rem-enflo-space`: the FA scaffold expressly leaves Enflo's construction as
  a source-only boundary even though it puts an orientation remark on FA-11.
  A remark on an in-manifest page is not a proof supplier.
- `rem-nagata-theorem-cp`, `rem-gerlits-nagy`, and
  `rem-dugundji-extension-linear`: the FA scaffold defers these to Topology,
  but no planned Topology A page in the manifest proves them.  They need honest
  new supplier designs, not FA-18 remarks.
- `rem-discontinuous-functional-choice-strength` contains sourced consistency
  boundaries plus two open Hahn--Banach implications.  The explicit incomplete
  `c_00` example is already proved; the open clauses can only become dated
  status records.

## Measure/Fourier catalogue (29 items)

Twenty-three records already have published MT proof replacements.  Their
Phase-3 work is alias/cutover, not new Phase 2 pairs:
`rem-lebesgue-measure-and-integral`, `rem-monotone-convergence-theorem`,
`rem-fatou-lemma`, `rem-dominated-convergence-theorem`,
`rem-vitali-covering-theorem`, `rem-mini-vitali-covering-theorem`,
`rem-lebesgue-monotone-differentiation`,
`rem-lebesgue-differentiation-theorem`, `rem-absolutely-continuous-function`,
`rem-ftc-absolutely-continuous`, `rem-banach-zarecki`, `rem-egorov-theorem`,
`rem-lusin-theorem`, `rem-holder-minkowski-integral`, `rem-lp-separability`,
`rem-fubini-tonelli`, `rem-fubini-counting-measure-diagonal`,
`rem-riesz-markov-kakutani`, `rem-semicontinuous-not-ae-riemann`,
`rem-null-set-not-discontinuity-set`, and
`rem-improper-riemann-not-lebesgue`; the construction clauses of
`rem-vitali-non-measurable-set` and
`rem-sierpinski-ultrafilter-not-measurable` are also published.

The residual clauses are exact and must not be lost:

| record | residual destination |
|---|---|
| `rem-riesz-fischer` | completeness is published; its Fourier-coefficient/`ell^2` clause is supplied by the in-manifest `orthonormal-bases-parseval-and-fourier-series` |
| `rem-vitali-non-measurable-set` | construction is published; Solovay/Shelah independence clause needs added SET-23--25 |
| `rem-sierpinski-ultrafilter-not-measurable` | measure half is published; the Baire-property zero--one-law half has no identified proved supplier and needs a local proved insertion or a small supplier design |
| `rem-sierpinski-iterated-integrals` | no new track is needed: after the published Fubini theory, its CH well-order construction is a bounded Phase-3 local theorem on the Fubini page; CH is a hypothesis, not something the proof must decide |
| `rem-du-bois-reymond-divergent-fourier` | already proved by published `cex-continuous-function-with-divergent-fourier-series-at-a-point` |
| `rem-kolmogorov-divergent-fourier` | the manifest's Kolmogorov block pair proves **almost-everywhere** divergence only; the catalogue asserts **everywhere** divergence.  That stronger 1926 construction remains an unscheduled supplier gap |
| `rem-henstock-kurzweil-vs-lebesgue` | the gauge-integral page and MT prerequisites are published, but no complete comparison proof is scaffolded; this is omitted supplier mathematics, not a metadata repair |
| `rem-banach-tarski` | no complete paradoxical-decomposition/transfer scaffold is in the manifest; this remains an omitted specialist supplier |

The three recorded results on the published Fourier page are covered by
`kolmogorov-block-construction-and-almost-everywhere-divergence` and
`carleson-hunt-time-frequency-theorem`; their published remarks are Phase-3
cutovers.  This does not close the stronger catalogue `rem-kolmogorov-divergent-fourier`.

## Algebraic Topology catalogue (17 items)

- Already proved and needing only Phase-3 alias/cutover:
  `rem-simple-connectedness`, `rem-pi1-circle-is-z`,
  `rem-covering-spaces-and-universal-cover`,
  `rem-semilocal-simple-connectedness`, and the covering/exponential clauses of
  `rem-exponential-sequence-as-covering` and `rem-riemann-surface-of-log`.
- Already proved on the published homology spine:
  `rem-brouwer-fixed-point` (all dimensions, not merely the old two-dimensional
  fragment), the dimension theorem in
  `rem-dimension-invariance-of-euclidean-space`, and the homology half of
  `rem-homology-and-cohomology`.
- Covered by manifest destinations:
  the cohomology half of `rem-homology-and-cohomology` by
  `singular-cohomology-and-coefficient-theorems`; invariance of domain and the
  Jordan--Brouwer separation/horned-sphere clauses by
  `orientations-poincare-lefschetz-and-alexander-duality`; and
  `rem-hopf-extension-and-obstruction` by
  `obstruction-theory-postnikov-towers-and-classifying-spaces` plus its earlier
  higher-homotopy/cohomology prerequisites.
- General Stokes in `rem-de-rham-and-stokes-on-manifolds` is already proved on
  the published `integration-of-forms-and-the-general-stokes-theorem`.  For its
  de Rham-isomorphism clause, **add two registered DG pairs**:
  `singular-cochains-mayer-vietoris-and-smooth-singular-comparison` and
  `the-de-rham-theorem-and-degree`.  The manifest currently contains only the
  earlier `the-de-rham-complex-homotopy-and-mayer-vietoris` prerequisite.
- The full Jordan--Schoenflies clause of `rem-jordan-curve-theorem`, the
  uncountable/nonfree fundamental-group clauses of
  `rem-hawaiian-earring-fundamental-group`, `rem-shape-theory`,
  `rem-warsaw-circle-weakly-contractible`, and
  `rem-homotopy-invariants-of-classical-continua` have **no complete planned
  supplier**.  The 15 algebraic-topology pairs added for page closure do not
  prove shape theory or these wild-continuum results.

## Open-problems page

These items cannot all be “retired by proof.”  Rehome genuinely open clauses as
dated, sourced status remarks outside the recorded-theorem mechanism:
`rem-e-plus-pi-irrationality-open`, `rem-normality-of-pi-open`,
`rem-jacobian-conjecture`, `rem-aleph-one-dowker-space-open`,
`rem-hahn-banach-hamel-basis-open`, and
`rem-hahn-banach-discontinuous-additive-open`.  Likewise preserve only the open
range of `rem-weierstrass-graph-hausdorff-dimension` as status.  SET-30 may
prove known Dowker constructions, but it cannot prove the `aleph_1` question.

Settled results still need real suppliers.  The manifest covers only
`rem-suslin-line-non-ccc-square-unverified` (SET-17).  It has no proof homes for
`rem-lindemann-weierstrass-theorem`, `rem-transcendence-of-pi`,
`rem-brent-salamin-agm-algorithm`, `rem-ramanujan-chudnovsky-pi-series`,
`rem-hilbert-transform-characterisation-of-pi`, or the settled integer-base
part of `rem-weierstrass-graph-hausdorff-dimension`.

## Phase-3 local repairs that are not missing pairs

Do not inflate Phase 2 for these bounded published-page repairs:

- Combinatorics: insert the three-item Skolem construction before the Steiner
  existence theorem; insert `thm-weak-perfect-graph-theorem` and
  `thm-substitution-preserves-perfect-graphs` on the bull page.  The Strong
  Perfect Graph Theorem route remains a genuine unsupplied blocker and its
  eleven-item bull consequence cone cannot be declared clean.
- Topology: insert
  `lem-regular-sigma-locally-finite-basis-gives-a-uniform-coordinate-embedding`,
  `lem-stone-countably-discrete-small-diameter-closed-cover`, and
  `lem-metric-spaces-have-sigma-discrete-bases` on the already-published
  metrization A page, then cut over Nagata--Smirnov, Bing, Urysohn metrization,
  Smirnov local metrization, and the manifold consequence.
- Differential geometry: the explicit compatible-metric and coordinate-bump
  lemmas are local additions on the published smooth-manifold page.
- Category theory: remove the Freyd--Mitchell edge from the false statement and
  refute it using the already-published connecting-morphism material.
- Group Theory's Phase-3 consumer-edge repairs follow the central ledger's
  exact local refutations and metadata arguments; deletion of an edge is not a
  proof of the deep recorded theorem and is not counted as its retirement.
- Foundations/Real Analysis/Topology orientation prose must drop unsupported
  `external_refs` and independence claims.  This cleans consumers but does not
  count as retiring the cited result.

## Ordinary-page recorded items: confirmed roots and claim-match queue

The 161-item census also includes recorded leaves on ordinary category pages.
The manifest/ledger supplies some of them (Cauchy--Kovalevskaya; the two Fourier
pairs; quantitative induced density; Bass--Guivarc'h; Brauer-character and
finite-module interfaces), and Phase 3 supplies the bounded repairs listed
above.

One further recorded result has a complete, existing four-pair successor
scaffold and therefore contributes **four additional registered Phase-2
roots**, not an unbounded research request.  The destination of
`rem-defect-groups-and-brauer-main-theorems` is:

1. `blocks-defect-groups-and-the-brauer-homomorphism` (RG-14);
2. `vertices-sources-and-the-green-correspondence` (RG-15);
3. `brauers-first-main-theorem` (RG-16);
4. `brauers-second-main-theorem` (RG-17).

The RG plan gives proof-level item inventories and full-text locators for defect
groups, Green correspondence, and Brauer's first and second main theorems.  All
four are absent from the 122-pair baseline, and RG-14's declared prerequisite
closure begins with already-published modular representations and Brauer
characters.

The following is an **unresolved claim-match queue**, not a blanket assertion
that every row needs a brand-new A/B pair.  Each item lacks an exact complete
proved destination in the current manifest/central ledger.  Some may close by
a bounded Phase-3 insertion using already-published prerequisites; others need
a specialist supplier.  None may be counted closed merely because a nearby
track discusses the subject:

`rem-the-freyd-mitchell-embedding-theorem`,
`rem-strong-perfect-graph-theorem-for-the-bull-route`,
`rem-gromov-polynomial-growth-theorem`,
`rem-grigorchuk-groups-of-intermediate-growth`,
`rem-nonamenable-groups-without-nonabelian-free-subgroups`,
`rem-novikov-boone-undecidability-of-the-word-problem`,
`rem-adian-rabin-undecidability-for-markov-properties`,
`rem-triviality-and-finiteness-are-undecidable-for-finite-presentations`,
`rem-groups-with-unsolvable-conjugacy-problem`,
`rem-undecidability-of-the-isomorphism-problem-for-finitely-presented-groups`,
`rem-nonabelian-extension-obstruction-and-h-two-torsor`,
`rem-nonabelian-extension-obstruction-in-h-three`,
`rem-schur-zassenhaus-conjugacy-in-full-generality`,
`rem-stallings-theorem-on-ends-and-splittings`,
`rem-higman-neumann-neumann-embedding-theorem`,
`rem-malcev-finitely-generated-linear-groups-are-residually-finite`,
`rem-cfsg-refinements-of-the-onan-scott-reduction`,
`rem-kronecker-weber`,
`rem-brauers-cyclotomic-splitting-field-criterion-is-not-proved-here`,
`rem-the-exact-sequence-additivity-of-trace-and-its-missing-hypotheses`,
`rem-strong-whitney-embedding-theorem`,
`rem-strong-whitney-immersion-theorem`,
`rem-henstock-kurzweil-and-lebesgue-integral-comparison-on-a-compact-interval`,
`rem-hausdorff-cover-conventions-and-normalisation`,
`rem-mixed-characteristic-cohen-structure-boundary`,
`rem-the-borel-hierarchy-never-stabilizes`, and
`rem-sine-period-arc-length-integrand-is-nonelementary`.

Three further ordinary-page records already have identifiable closures and do
not belong in that queue:

- `rem-the-hairy-ball-theorem-for-even-dimensional-spheres` is claim-matched by
  the published `thm-a-sphere-has-a-nowhere-zero-tangent-vector-field-iff-its-dimension-is-odd`;
- `rem-the-p-equals-infinity-case-is-recorded-not-proved-here` and
  `rem-a-bounded-functional-on-l-infinity-of-unit-interval-need-not-come-from-l-one`
  have a bounded Phase-3 proof after the in-manifest
  `norming-and-separation-under-hahn-banach` pair lands: extend point evaluation
  from the continuous representatives in `L^infinity[0,1]`, then rule out an
  `L^1` density.  FA-11's dual-of-`ell^infinity` construction is related but is
  not falsely claimed as the same interval result;
- `rem-von-neumanns-hilbert-space-proof-of-radon-nikodym` is orientation about
  an alternative proof of the already-published Radon--Nikodym theorem.  Once
  the in-manifest Hilbert Riesz page lands, Phase 3 can either write that route
  locally or rewrite the item as a non-load-bearing proof-route note; it does
  not require a new mathematical result.

`rem-the-exact-sequence-additivity-of-trace-and-its-missing-hypotheses` is also
a strong candidate for a bounded Phase-3 insertion: its missing multitensor and
biexactness hypotheses are now published on `tensor-and-fusion-categories`.
That candidate still needs an exact proof/statement claim match before it is
marked closed.

The list deliberately does not include the owner-exempt CFSG and
Feit--Thompson records.  The exact page/item scan finds no consumer outside the
exempt classification A/B stub; deletion therefore needs no external cutover.

## Completion gate

Before calling the expanded Phase 2 complete, require a machine-readable row
for every one of the 159 in-scope recorded ids, split multi-clause items into
atomic claims, and classify each atom as one of:

1. proved by an already-published item (Phase-3 alias/cutover);
2. proved by a named manifest A item with its prerequisite closure included;
3. bounded local Phase-3 insertion on a published A page;
4. dated open/status statement, never a proof dependency; or
5. unresolved source/proof gap.

Any atom in class 5 blocks retirement.  A new remark, a page shell, removal of
an `external_refs` field, or an unverified source locator is not a supplier.

## Authoritative full-text checks used in this audit

- Miroslav Repický, *A proof of the independence of the Axiom of Choice from
  the Boolean Prime Ideal Theorem*, CMUC 56 (2015), 543--546, complete journal
  PDF: <https://dml.cz/bitstream/handle/10338.dmlcz/144758/CommentatMathUnivCarolRetro_56-2015-4_8.pdf>.
  This supports the narrow replacement BPI-without-AC pair; it does not support
  the unrelated SET-20 ultrafilter-free-model clauses.
- Alessandro Andretta and Lorenzo Notaro, *Does DC imply AC_omega,
  uniformly?*, complete author/publisher text: <https://arxiv.org/abs/2305.06676>
  and DOI <https://doi.org/10.1017/jsl.2024.33>.  Its global theorem is
  `DC -> AC_omega`; the paper's separation is a set-relative uniform
  separation, so it is not evidence for the disputed global `DMC < DC` clause.
- The original Set Theory source audit recovered Feferman's complete paper and
  locates the no-free-ultrafilter argument at Theorem 4.12, while recording that
  no complete Blass proof was recovered.  The latter remains a content gate;
  bibliographic identification or a secondary summary is not full-text proof
  evidence.
