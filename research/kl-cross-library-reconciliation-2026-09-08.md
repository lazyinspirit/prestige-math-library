# Kazhdan--Lusztig cross-library reconciliation — 2026-09-08

Supervisor reconciliation: the KL-local Skryabin source gate is closed, but
the finite QG-5 tensor-bar supplier remains subject to `QG-QUASI-R` and its
upstream quantum proof gates in `research/four-track-proof-gates.json`.
Thus adequate KL-local sources do not certify the entire KL prerequisite
closure. The combined checker intentionally also fails for those open gates,
as well as the two deferred published HA B-dependencies. Its exact current
counts are in `research/four-track-dependency-reconciliation.json`.

## Outcome

The KL future track is reconciled against the published library and the current
HA, braid, quantum-group, Lie and symmetric-group plans. No published page or
item was edited. The Phase-2 total remains the independently maintained
provisional 142; this audit adds no Phase-2 page. The CFSG stub-owner exception
is outside the KL closure and was not used.

The KL proposal still has eight A/B pairs (16 pages). Its item inventory changes
from 126 to 141 identities: 108 A-page items and 33 B-page examples or
counterexamples. There is no remaining KL-local full-proof source gate; the
upstream QG gates listed above remain open. The Hodge
induction, tensor--Fock truncation and Skryabin routes have adequate complete
sources and explicit intermediate items; they remain substantial normal
authoring work, not unresolved prerequisites.

## Exact plan deltas

No new KL page pair is proposed. Two missing page-level supplier edges were
added and mirrored in the canonical plan by the central-plan owner:

| KL page | new exact page supplier | reason |
|---|---|---|
| `kazhdan-lusztig-bases-polynomials-and-cells` | `permutation-statistics-inversions-and-eulerian-numbers` | published owner of `def-bruhat-order-on-the-symmetric-group`; the finite-field Bruhat page does not supply the rank-inequality order |
| `projective-functors-and-the-soergel-functor-in-category-o` | `finite-weyl-invariants-bruhat-and-kostant-harmonics` | planned Phase-2 owner of the finite-Weyl Chevalley--Shephard--Todd and Hilbert-dimension inputs |

The net `+15` item change is:

- KL-1: three lemmas separating dual-Knuth/star edges, star transport of
  `mu`-edges, and the converse from left-cell equivalence to equal recording
  tableaux.
- KL-2: two `Q -> R` scalar-extension/descent items; the former single
  Rouquier-to-weak-Lefschetz lemma is replaced by six items for minimal/perverse
  complexes, delta-splitting, conditional linearity, induced Hodge--Riemann
  signs, Lefschetz factorization and weak injectivity. This is net `+7`.
- KL-3: the duplicated CST claim is renamed
  `thm-the-weyl-coinvariant-algebra-is-the-graded-regular-representation` and
  narrowed to the harmonic-complement/regular-module comparison after the two
  Lie suppliers.
- KL-4: the false ordinary-grading claim is renamed
  `thm-projective-verma-multiplicities-are-kazhdan-lusztig-values-at-one`.
  Ordinary category-O multiplicities are `P_{y,w}(1)`; polynomial coefficients
  remain auxiliary Soergel-graded data pending the later Koszul/Ext frontier.
- KL-6: three items for the column-monomial basis, finite QG tensor-bar to
  truncation/direct-limit compatibility, and the standard-monomial basis of the
  highest-weight submodule.
- KL-7: the combined PBW/Skryabin item is replaced by three items:
  `lem-gan-ginzburg-skryabin-inputs-hold-for-the-type-a-pyramid-good-grading`,
  `thm-skryabins-equivalence-for-the-type-a-whittaker-pair` and
  `thm-the-loop-filtration-on-the-type-a-finite-w-algebra-has-associated-graded-u-of-g-e`.
  The filtered double-centralizer route uses the loop filtration, not the
  Kazhdan filtration.

The four retired IDs have zero occurrences in all five future proposed/page
manifests:

- `lem-the-rouquier-complex-supplies-weak-lefschetz-injectivity`
- `thm-chevalley-shephard-todd-freeness-and-the-coinvariant-regular-module`
- `thm-projective-verma-multiplicities-are-kazhdan-lusztig-coefficients`
- `thm-the-finite-w-algebra-pbw-theorem-and-skryabin-equivalence`

## Exact cross-library item contracts

These are every direct item import now declared by the KL machine manifest.
“Prose-only” is an explicit unhydrated supplier boundary, not a claim that the
supplier is already proof-ready.

| supplier owner and state | exact imported IDs | immediate KL consumer |
|---|---|---|
| RG-13 `principal-series-representations-of-gl-n-over-a-finite-field`, prose-only | `def-generic-type-a-hecke-algebra`; `thm-standard-basis-of-the-generic-type-a-hecke-algebra` | `def-normalized-type-a-hecke-algebra-and-its-bar-involution` |
| published `permutation-statistics-inversions-and-eulerian-numbers` | `def-bruhat-order-on-the-symmetric-group` | `def-bruhat-interval-and-r-polynomials` |
| RG-11 `the-hook-length-formula-and-rsk-correspondence`, prose-only | `thm-robinson-schensted-correspondence`; `cor-rsk-symmetry-under-inversion` | `lem-left-cell-equivalence-forces-equality-of-recording-tableaux-in-type-a` |
| BG-16 `type-a-soergel-bimodules-and-hecke-categorification`, planned manifest | `def-type-a-reflection-realization-and-polynomial-ring`; `thm-indecomposable-type-a-diagrammatic-soergel-objects-are-indexed-by-permutations-and-shifts`; `lem-type-a-soergel-generators-are-finite-free-on-both-sides`; `thm-the-type-a-soergel-hom-formula`; `lem-bott-samelson-bimodules-have-delta-and-nabla-support-filtrations` | KL-2 scalar extension, minimal-complex, delta-split and linearity items |
| published `tensor-products-of-modules` | `def-restriction-and-extension-of-scalars` | `def-real-type-a-soergel-category-and-scalar-extension` |
| HA-24 `homological-gaussian-elimination`, planned manifest through the BG prerequisite closure | `thm-homological-gaussian-elimination-splits-off-a-contractible-two-term-complex` | `def-minimal-complexes-and-perverse-truncations-in-the-type-a-soergel-category` |
| BG-17 `rouquier-complexes-and-categorical-braid-relations`, planned manifest | `def-rouquier-complex-of-a-braid-word` | `thm-positive-rouquier-complexes-are-delta-split` |
| Phase-2 Lie `finite-weyl-invariants-bruhat-and-kostant-harmonics`, prose-only | `thm-chevalley-shephard-todd-for-finite-weyl-groups`; `lem-weyl-coinvariant-hilbert-series-has-order-w-dimension` | `thm-the-weyl-coinvariant-algebra-is-the-graded-regular-representation` |
| published `category-o-finiteness-duality-and-blocks` | `prop-tensoring-with-a-finite-dimensional-module-preserves-category-o` | `def-projective-functors-on-a-regular-integral-category-o-block` |
| RL-5 `projectives-standard-filtrations-and-bgg-reciprocity`, prose-only | `thm-category-o-has-enough-projectives`; `def-translation-functor-between-o-blocks`; `prop-translation-functors-are-exact-and-biadjoint-across-a-wall`; `thm-translation-to-and-from-a-wall-on-standard-modules`; `def-verma-flag-and-its-multiplicities`; `thm-projectives-in-category-o-have-verma-flags`; `thm-bgg-reciprocity` | respectively KL-3 projective-functor, wall-crossing, Verma-flag and KL-4 simple-multiplicity seams |
| QG-5 `balanced-triples-and-global-crystal-bases`, planned manifest | `thm-quasi-r-tensor-bars-on-finite-products-of-based-integrable-modules` | `thm-the-qg-tensor-product-bar-is-triangular-and-compatible-with-fock-truncations` |

The RG-13 contract is deliberately minimal. Its finite presentation is
`thm-type-a-iwahori-hecke-presentation`, built from RG-13's finite double-coset
basis, length-increasing multiplication and rank-one quadratic count. The generic
definition depends on that presentation, and the generic standard-basis theorem
must prove the free Laurent basis from the type-A Coxeter word input; KL-1 does
not infer generic freeness from a finite-field specialization.

The QG-5 contract is equally narrow: finite tensor products of based integrable
finite-weight-space type-A modules, weightwise finite quasi-R action, compatible
involutive bar, integral-lattice preservation, parenthesization independence and
locally finite dominance triangularity. It supplies neither a completed universal
R-matrix nor semi-infinite/direct-limit compatibility. KL-6 owns the latter.

## Consumers

### Published consumers

There are no direct or transitive published consumers of any KL page or KL item.
This was checked by exact-ID search over `items/` and `library/` for all 16 page
IDs and all 141 proposed item IDs. Thus there is no published repair obligation
and no published-file edit.

### Planned page consumers

All declared planned consumers are internal to the KL track:

| supplier A page | direct planned consumers | transitive planned consumers after the direct edge |
|---|---|---|
| KL-1 `kazhdan-lusztig-bases-polynomials-and-cells` | its B companion; KL-2 A | KL-2 B and every KL-3--KL-8 A/B page (15 total downstream pages) |
| KL-2 `soergel-intersection-forms-and-hodge-theory` | its B companion; KL-3 A | KL-3 B and every KL-4--KL-8 A/B page (13 total) |
| KL-3 `projective-functors-and-the-soergel-functor-in-category-o` | its B companion; KL-4 A | KL-4 B and every KL-5--KL-8 A/B page (11 total) |
| KL-4 `the-kazhdan-lusztig-character-and-multiplicity-theorem` | its B companion; KL-5 A | KL-5 B and every KL-6--KL-8 A/B page (9 total) |
| KL-5 `singular-and-parabolic-kazhdan-lusztig-theory` | its B companion; KL-6 A | KL-6 B and every KL-7--KL-8 A/B page (7 total) |
| KL-6 `parabolic-category-o-and-fock-space-bases` | its B companion; KL-7 A | KL-7 B and KL-8 A/B (5 total) |
| KL-7 `arakawa-suzuki-functors-and-higher-level-schur-weyl-duality` | its B companion; KL-8 A | KL-8 B (3 total) |
| KL-8 `the-degenerate-ariki-categorification-theorem` | its B companion | none beyond that companion (1 total) |

Every B companion is a dependency leaf. No HA, braid, QG or symmetric-group
page manifest declares a KL page prerequisite. The symmetric-group prose's later
comparison with the degenerate Ariki route is optional prose, not a machine edge,
and is therefore not counted as a consumer.

For the new item seams, the direct consumers are exactly the next named item in
each chain: star edge -> star transport -> recording-tableau converse -> cell
classification; real scalar extension -> rational/real descent -> Soergel module;
minimal/perverse complex -> delta-split -> conditional linearity -> induced HR ->
Lefschetz factorization -> weak injectivity -> deformed hard Lefschetz; Weyl
coinvariant regular module -> projective functors; `P(1)` projective multiplicity
-> simple multiplicity; column monomial basis -> truncation-compatible bar ->
four bases, while standard monomials -> the parabolic-O block; and the
Gan--Ginzburg good-grading inputs -> Skryabin -> loop PBW -> deformed tensor
space. A scan across all five proposed manifests
found no additional direct item consumer.

## Cycle, recorded-supplier and boundary audit

The combined declared-edge checker reports for the audited future closure:

- zero KL missing IDs;
- zero duplicate proposed IDs, same-page forward dependencies, forward-page
  dependencies or cycles;
- zero paths to recorded suppliers and zero paths to draft suppliers;
- the RG-13, RG-11, Phase-2 Lie and RL-5 imports above as explicit
  `prose-only-unhydrated` boundaries.

The latest combined snapshot has zero missing IDs overall and `klMissing: []`.
Its current nonzero exit reflects the five open quantum proof/source gates
and the two acknowledged legacy HA B-dependencies (`bTargets: 2`,
`legacyBDependencyRepairs: 2`). KL-local source closure does not discharge
the upstream quantum gates. Published repairs remain deferred to Phase 3.

The apparent cycle risks are resolved as follows:

- KL-2 consumes BG-16/BG-17 and HA-24, but those plans do not consume KL.
- KL-6 consumes the finite QG-5 tensor bar, while QG-5 does not consume KL;
  KL-6 alone performs the wedge truncation/direct limit.
- KL-3/4 consume category O and RL-5; the Lie pages do not consume KL.
- Later symmetric-group comparisons are not suppliers for this KL proof chain.

## Grading, flatness, Hochschild and geometry boundaries

The Soergel realization enters over `Q` from BG-16 and is extended to `R` only
for signatures. Because `Q -> R` is a field extension and the Bott--Samelson/Hom
modules are finite free on the relevant sides, tensor products, support ranks and
split exact rows commute with extension. The separate descent item must prove
that the degree-zero local endomorphism quotient stays a field, so the labels and
indecomposables used by the rational character theorem are not silently replaced.

Rouquier word invariance is not weak Lefschetz. Delta-splitting and sidewise
freeness supply the exact support rows; Gaussian elimination supplies minimal
complexes; conditional linearity and induced forms supply the simultaneous lower
Bruhat induction; only then does the first minimal differential yield weak
injectivity. Elias--Williamson plus Libedinsky--Williamson give a complete proof
route for this chain. The remaining work is page authoring and convention checks,
not a missing theorem source.

No KL page directly or transitively consumes HA-22/HA-23 Hochschild/cyclic
material or BG-19 Hochschild homology. Internal grading, homological grading and
the later category-O Koszul/Ext grading remain distinct. Likewise, the present
Soergel Hodge proof is algebraic and does not require Schubert geometry. KL-7's
loop associated graded is `U(g^e)`; the Kazhdan filtration's commutative
Slodowy-slice associated graded belongs to a later geometry frontier.

## Source adequacy and remaining gate

| seam | adequacy on 2026-09-08 |
|---|---|
| KL-1 recursions, star transport and type-A cells | adequate: complete Björner--Brenti full text plus Casselman's complete notes; Casselman Theorem 6.2 supplies the full star/edge-transport calculation that Björner--Brenti leaves as Exercise 6.4(5) |
| KL-2 Hodge induction | adequate: complete Elias--Williamson 45-page article and Libedinsky--Williamson 25-page article, including Proposition 3.7/Lemma 3.8 |
| KL-3/4 Soergel functor and category O | adequate for the planned scope: complete 32-page Soergel preprint, with the exact RL-5 prose contracts still unhydrated until their normal scaffolding |
| KL-6 tensor--Fock route | adequate: the exact QG-5 finite tensor-bar supplier plus Brundan's complete 29-page tensor-bar/standard-monomial/KL comparison; KL-6's truncation proof remains explicit normal authoring work |
| KL-7 filtered higher-level Schur--Weyl | adequate for shifted-Yangian PBW, loop filtration, double centralizer and Whittaker application: complete Brundan--Kleshchev 49- and 50-page papers |
| KL-7 Skryabin equivalence | adequate: Gan--Ginzburg's complete 13-page article proves Theorem 6.1 over a complex semisimple Lie algebra by the contracting decomposition, `gr_K Q`, affine-unipotent de Rham acyclicity, a convergent Lie-cohomology spectral sequence, and Whittaker-vector detection. Brundan--Kleshchev explicitly state that this proof extends unchanged to any good grading. KL-7's new preparatory lemma must check those ingredients for the chosen pyramid grading and split the central `gl_N = sl_N + z` factor before invoking the theorem. The cached 40-page positive-characteristic Premet precursor is not used |
| KL-8 degenerate Ariki | adequate: complete Brundan--Kleshchev 44-page paper |

The synchronized authoritative files for this audit are
`research/plan-kazhdan-lusztig-track.md`,
`research/kazhdan-lusztig-planning/pages.json`,
`research/kazhdan-lusztig-planning/proposed-items.json`, and
`research/kazhdan-lusztig-planning/source-manifest.json`.
