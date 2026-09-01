# Step 8 — group **b**, run `frontier-28`

You are the group Alpha for batches **1**, **7**, **10**: 4 A/B pair(s), 8 page(s), 163 item(s), 0 open rejection(s) over 0 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-28-alpha-b-step8-context.json` is what a group Alpha for this group wrote during step 7,
while the judges were still sweeping and no verdict existed. It records the
conventions your pages fix, which items the rest lean on, which published
dependencies were actually opened, and what already looked thin.

**Its `concerns` list is evidence, not decoration.** Each entry was found with
nobody suggesting where to look. A judge rejection landing at the same place is
two independent readings agreeing and should be very hard to call a
`false_positive`; a rejection landing nowhere near any of them is not thereby
wrong, but it is the case to read most carefully against the text.

It is notes, not authority. Where it and the item files disagree, the files win.

## Read scope, write scope

**You may read the entire library.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-28-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 1 | `small-cancellation-and-dehn-algorithms` | A | group-theory | 71.015 | `decision-problems-for-finitely-presented-groups-examples` |
| 1 | `small-cancellation-and-dehn-algorithms-examples` | B | group-theory | 71.016 | `small-cancellation-and-dehn-algorithms` |
| 1 | `inverse-systems-profinite-groups-and-completion` | A | group-theory | 302.013 | `graphs-of-groups-and-bass-serre-theory-examples` |
| 1 | `inverse-systems-profinite-groups-and-completion-examples` | B | group-theory | 302.014 | `inverse-systems-profinite-groups-and-completion` |
| 7 | `braided-and-symmetric-monoidal-categories` | A | category-theory | 365.029 | `closed-monoidal-categories-and-the-internal-hom-examples` |
| 7 | `braided-and-symmetric-monoidal-categories-examples` | B | category-theory | 365.03 | `braided-and-symmetric-monoidal-categories` |
| 10 | `whitney-embedding-tubular-neighbourhoods-and-approximation` | A | differential-geometry | 455 | `smooth-partitions-of-unity-and-exhaustions`, `smooth-vector-bundles-and-sections`, `sard-theorem-and-transversality`, `homotopy-and-homotopy-equivalence` |
| 10 | `whitney-embedding-tubular-neighbourhoods-and-approximation-examples` | B | differential-geometry | 456 | `whitney-embedding-tubular-neighbourhoods-and-approximation` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `small-cancellation-and-dehn-algorithms` — Small Cancellation and Dehn Algorithms (26 item(s))

- `def-symmetrisation-of-a-relator-set` · definition — The symmetrisation of a relator set closes under inverses and cyclic conjugates
- `lem-symmetrisation-has-the-same-normal-closure` · lemma — A relator set and its symmetrisation have the same normal closure
- `def-piece-in-a-symmetrised-presentation` · definition — A piece is a common initial segment occurring in two distinct places of a symmetrised relator set
- `def-small-cancellation-conditions-c-lambda-and-c-prime-lambda` · definition — The small-cancellation conditions C(lambda) and C prime(lambda)
- `def-small-cancellation-condition-t-q` · definition — The condition T(q) forbids short cycles of pieces in the relator graph
- `lem-c-prime-lambda-implies-c-lambda` · lemma — C prime(lambda) implies C(lambda)
- `def-van-kampen-diagram-boundary-label-and-area` · definition — Van Kampen diagrams, boundary labels, and diagram area for a presentation
- `lem-boundary-label-of-a-van-kampen-diagram-is-null-in-the-presented-group` · lemma — The boundary label of a van Kampen diagram is trivial in the presented group
- `thm-van-kampen-lemma` · theorem — A word is trivial in a presented group exactly when it bounds a finite van Kampen diagram
- `thm-diagram-area-agrees-with-algebraic-relator-area` · theorem — Minimal van Kampen area agrees with minimal algebraic relator area
- `def-reduced-van-kampen-diagram` · definition — A reduced van Kampen diagram has no cancellable adjacent faces
- `lem-minimal-area-diagrams-are-reduced` · lemma — A minimal-area van Kampen diagram is reduced
- `lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams` · lemma — Reduced C prime(1/6) diagrams satisfy the standard combinatorial curvature count
- `thm-greendlinger-lemma-for-c-prime-one-sixth-presentations` · theorem — In a reduced C prime(1/6) null diagram, some face contributes more than half of its boundary to the outer boundary
- `def-dehn-reduced-word-and-dehn-presentation` · definition — Dehn-reduced words and Dehn presentations
- `lem-dehn-replacement-strictly-shortens-a-word` · lemma — A Dehn replacement shortens the word strictly
- `thm-dehn-algorithm-solves-the-word-problem` · theorem — Dehn's algorithm terminates and decides the word problem for a Dehn presentation
- `cor-finite-c-prime-one-sixth-presentations-have-solvable-word-problem` · corollary — Finite C prime(1/6) presentations have solvable word problem
- `cor-linear-isoperimetric-bound-for-finite-c-prime-one-sixth-presentations` · corollary — Finite C prime(1/6) presentations satisfy a linear isoperimetric inequality
- `thm-torsion-theorem-for-c-prime-one-sixth-groups` · theorem — In a C prime(1/6) group, every nontrivial torsion element is conjugate to a power of a relator root
- `cor-c-prime-one-sixth-with-no-proper-power-relators-is-torsion-free` · corollary — A C prime(1/6) presentation with no proper-power relators defines a torsion-free group
- `fs-every-repeated-subword-is-a-piece` · false-statement — FALSE: every repeated subword of a relator is a piece
- `fs-c-prime-one-sixth-means-every-relator-has-length-at-most-six` · false-statement — FALSE: C prime(1/6) means every relator has length at most six
- `fs-greendlinger-lemma-applies-to-every-finitely-presented-group` · false-statement — FALSE: Greendlinger's lemma holds for every finite presentation
- `fs-dehn-reduction-is-the-same-as-free-reduction` · false-statement — FALSE: Dehn reduction is just free reduction under another name
- `fs-no-proper-power-relators-alone-implies-torsion-free` · false-statement — FALSE: a presentation with no proper-power relators is automatically torsion-free

### `small-cancellation-and-dehn-algorithms-examples` — Small Cancellation and Dehn Algorithms — Examples (7 item(s))

- `ex-symmetrising-a-one-relator-presentation` · example — Symmetrising a one-relator presentation adds the cyclic conjugates and inverse cyclic conjugates
- `ex-finding-pieces-and-checking-c-prime-one-sixth` · example — A concrete relator set with its pieces and a direct C prime(1/6) check
- `ex-a-dehn-reduction-sequence` · example — A trivial word is reduced to the empty word by successive Dehn moves
- `ex-a-greendlinger-cell-in-a-van-kampen-diagram` · example — A minimal diagram exhibits the Greendlinger face covering more than half its boundary
- `ex-a-torsion-free-small-cancellation-group` · example — A strict C prime(1/6) presentation with no proper-power relators defines a torsion-free group
- `cex-an-overlap-at-exactly-one-sixth-under-the-strict-convention` · counterexample — An overlap of exactly one sixth shows that the strict C prime(1/6) inequality is not cosmetic
- `cex-a-no-proper-power-presentation-with-torsion-outside-small-cancellation` · counterexample — No proper-power relators alone do not prevent torsion outside small cancellation

### `inverse-systems-profinite-groups-and-completion` — Inverse Systems Profinite Groups and Completion (33 item(s))

- `def-directed-set-and-inverse-system-of-groups` · definition — A directed set and an inverse system of groups indexed by it
- `def-compatible-tuple-inverse-limit-of-groups` · definition — The inverse limit is the set of compatible tuples in the Cartesian product
- `lem-compatible-tuples-form-a-subgroup` · lemma — Compatible tuples form a subgroup of the product group
- `def-coordinate-projections-from-an-inverse-limit` · definition — The inverse limit has its canonical coordinate projection maps
- `thm-concrete-inverse-limit-universal-property-in-groups` · theorem — The compatible-tuple construction satisfies the inverse-limit universal property in groups
- `def-inverse-limit-topology-for-finite-discrete-groups` · definition — The inverse limit of finite groups carries the subspace topology from the product of discrete factors
- `lem-inverse-limit-of-finite-discrete-groups-is-a-closed-topological-subgroup` · lemma — The inverse limit of finite discrete groups is a closed topological subgroup of the full product
- `thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected` · theorem — An inverse limit of finite discrete groups is Hausdorff, compact, and totally disconnected
- `def-profinite-group-by-inverse-limit` · definition — A profinite group is a topological group isomorphic to an inverse limit of finite discrete groups
- `lem-kernels-of-finite-projections-form-an-open-normal-neighbourhood-basis` · lemma — The kernels of the finite coordinate projections form an open normal neighbourhood basis at the identity
- `thm-continuity-into-an-inverse-limit-is-coordinatewise` · theorem — A map into an inverse limit is continuous exactly when all coordinate composites are continuous
- `def-cofinal-subsystem` · definition — A cofinal subsystem meets every index eventually
- `thm-cofinal-subsystems-have-isomorphic-inverse-limits` · theorem — A cofinal subsystem has the same inverse limit up to canonical isomorphism
- `def-totally-disconnected-and-totally-separated-spaces` · definition — Totally disconnected spaces and totally separated spaces
- `thm-compact-hausdorff-total-disconnectedness-and-total-separatedness-agree` · theorem — For compact Hausdorff spaces, total disconnectedness and total separatedness are equivalent
- `thm-topological-characterisation-of-profinite-groups` · theorem — A topological group is profinite exactly when it is compact, Hausdorff, and totally disconnected, equivalently when a compact Hausdorff group has a basis of open normal subgroups with finite quotients
- `def-profinite-topology-on-an-abstract-group` · definition — The profinite topology on a group uses finite-index normal subgroups as an identity-neighbourhood basis
- `def-finite-residual-and-residually-finite-group` · definition — The finite residual is the intersection of the finite-index normal subgroups, and a group is residually finite when that intersection is trivial
- `def-profinite-completion-of-an-abstract-group` · definition — The profinite completion is the inverse limit of the finite quotients G over N
- `def-canonical-map-to-the-profinite-completion` · definition — The canonical map sends g to its coherent system of residue classes
- `thm-kernel-and-density-of-the-canonical-map-to-the-profinite-completion` · theorem — The canonical map to the profinite completion has kernel equal to the finite residual and has dense image
- `cor-the-canonical-map-is-injective-iff-the-group-is-residually-finite` · corollary — The canonical map is injective exactly when the group is residually finite
- `thm-universal-property-of-profinite-completion` · theorem — The profinite completion is initial among continuous homomorphisms from G to profinite groups
- `thm-profinite-completion-is-functorial` · theorem — A homomorphism induces a continuous homomorphism of profinite completions
- `rem-malcev-finitely-generated-linear-groups-are-residually-finite` · remark — Malcev's theorem gives a canonical non-load-bearing source of residually finite groups
- `thm-free-groups-are-residually-finite` · theorem — Free groups are residually finite
- `def-subgroup-separable-and-lerf` · definition — A subgroup is separable when it is closed in the profinite topology, and a group is LERF when every finitely generated subgroup is separable
- `thm-finitely-generated-free-groups-are-subgroup-separable` · theorem — Every finitely generated free group is subgroup separable
- `fs-an-inverse-limit-of-groups-may-be-empty` · false-statement — FALSE: an inverse limit of groups can be empty
- `fs-projections-from-every-surjective-inverse-system-are-surjective-in-zf` · false-statement — FALSE: every inverse limit of surjective finite-group systems has surjective coordinate projections in ZF
- `fs-the-canonical-map-to-profinite-completion-is-always-injective` · false-statement — FALSE: the canonical map to the profinite completion is always injective
- `fs-a-compact-hausdorff-group-is-profinite-without-total-disconnectedness` · false-statement — FALSE: every compact Hausdorff topological group is profinite
- `fs-two-groups-with-isomorphic-profinite-completions-are-isomorphic` · false-statement — FALSE: isomorphic profinite completions force the original groups to be isomorphic

### `inverse-systems-profinite-groups-and-completion-examples` — Inverse Systems Profinite Groups and Completion — Examples (7 item(s))

- `ex-an-eventually-constant-inverse-system` · example — An eventually constant inverse system has inverse limit equal to its stable value
- `ex-the-profinite-completion-of-a-finite-group` · example — A finite group is canonically isomorphic to its profinite completion
- `ex-the-profinite-completion-of-the-integers` · example — The profinite completion of the integers is the inverse limit of the rings Z mod n
- `ex-a-residually-finite-free-group` · example — A free group separates one nontrivial reduced word by a finite quotient
- `ex-a-dense-nonclosed-copy-of-a-group-in-its-completion` · example — The integers sit densely but not closedly inside their profinite completion
- `ex-a-non-residually-finite-baumslag-solitar-group` · example — A Baumslag-Solitar group gives a noninjective completion map
- `cex-same-finite-quotients-do-not-trivially-identify-abstract-groups` · counterexample — Nonisomorphic groups can share the same profinite completion

### `braided-and-symmetric-monoidal-categories` — Braided and Symmetric Monoidal Categories (29 item(s))

- `def-braiding` · definition — Braiding
- `def-braided-monoidal-category` · definition — Braided monoidal category
- `thm-the-inverse-braiding-is-a-braiding` · theorem — The inverse braiding is again a braiding
- `thm-the-braiding-is-compatible-with-the-unit-constraints` · theorem — The braiding is compatible with the unit constraints
- `thm-in-a-strict-braided-monoidal-category-the-braiding-satisfies-the-yang-baxter-equation` · theorem — In a strict braided monoidal category the braiding satisfies the Yang-Baxter equation
- `def-symmetric-monoidal-category` · definition — Symmetric monoidal category
- `thm-in-the-presence-of-the-symmetry-axiom-one-hexagon-implies-the-other` · theorem — In the presence of symmetry, one hexagon implies the other
- `def-braided-monoidal-functor` · definition — Braided monoidal functor
- `rem-being-braided-is-a-property-of-a-monoidal-functor` · remark — Being braided is a property of a strong monoidal functor
- `thm-the-cartesian-swap-braiding-is-a-symmetry` · theorem — The cartesian swap braiding is a symmetry
- `thm-the-double-braiding-center-is-symmetric` · theorem — The double-braiding center is a symmetric monoidal subcategory
- `thm-every-braided-monoidal-category-is-monoidally-equivalent-to-a-strict-braided-one` · theorem — Every braided monoidal category is monoidally equivalent to a strict braided one
- `def-braid-group-by-the-artin-presentation` · definition — The braid group by Artin presentation
- `thm-the-two-strand-braid-group-is-infinite-cyclic` · theorem — The two-strand braid group is infinite cyclic
- `thm-the-symmetric-group-has-the-coxeter-presentation` · theorem — The symmetric group has the Coxeter presentation
- `thm-the-braid-group-surjects-onto-the-symmetric-group` · theorem — The braid group surjects onto the symmetric group
- `def-the-braid-category` · definition — The braid category
- `cex-the-braid-category-is-braided-but-not-symmetric` · counterexample — The braid category is braided but not symmetric
- `thm-symmetric-coherence` · theorem — Symmetric coherence
- `cor-unbracketed-and-unordered-tensor-strings-are-well-defined-in-a-symmetric-monoidal-category` · corollary — Labelled unbracketed and unordered tensor strings are well defined in a symmetric monoidal category
- `thm-braided-coherence-fails-in-the-symmetric-form` · theorem — Braided coherence fails in the symmetric form
- `fs-every-diagram-built-from-the-associator-and-the-braiding-commutes` · false-statement — FALSE: every diagram built from the associator and the braiding commutes
- `thm-the-braid-category-is-the-free-strict-braided-monoidal-category-on-one-generator` · theorem — The braid category is the free strict braided monoidal category on one generator
- `thm-braided-coherence-via-underlying-braids` · theorem — Braided coherence is controlled by underlying braids
- `cor-two-canonical-braided-composites-agree-exactly-when-their-underlying-braids-agree` · corollary — Two canonical braided composites agree exactly when their underlying braids agree
- `rem-the-symmetric-and-braided-coherence-theorems-compare-s-n-with-b-n` · remark — The symmetric and braided coherence theorems compare S_n with B_n
- `fs-every-braided-monoidal-category-is-equivalent-to-a-strict-commutative-one` · false-statement — FALSE: every braided monoidal category is equivalent to a strict commutative one
- `thm-monoid-objects-in-a-braided-monoidal-category-form-a-monoidal-category` · theorem — Monoid objects in a braided monoidal category form a monoidal category
- `cor-monoid-objects-in-a-symmetric-monoidal-category-form-a-symmetric-monoidal-category` · corollary — Monoid objects in a symmetric monoidal category form a symmetric monoidal category

### `braided-and-symmetric-monoidal-categories-examples` — Braided and Symmetric Monoidal Categories - Examples (7 item(s))

- `ex-the-swap-braiding-on-sets` · example — The swap map on sets is the cartesian braiding
- `ex-the-braid-group-on-three-strands` · example — The braid group on three strands and its quotient to S_3
- `ex-the-hexagon-checked-for-cartesian-products` · example — The hexagon checked for cartesian products
- `ex-the-sign-braiding-on-supervector-spaces` · example — Supervector spaces with the sign braiding
- `ex-the-two-strand-braiding-in-the-braid-category-has-infinite-order` · example — The two-strand braiding in the braid category has infinite order
- `ex-two-canonical-maps-with-different-underlying-braids` · example — Two canonical maps with different underlying braids do not agree
- `ex-commutative-monoid-objects-in-sets-are-ordinary-commutative-monoids` · example — Commutative monoid objects in sets are ordinary commutative monoids

### `whitney-embedding-tubular-neighbourhoods-and-approximation` — Whitney Embedding Tubular Neighbourhoods and Approximation (44 item(s))

- `lem-a-finite-coordinate-bump-map-embeds-a-compact-manifold-in-some-euclidean-space` · lemma — A finite coordinate-bump map embeds a compact manifold in some Euclidean space
- `lem-a-countable-coordinate-bump-map-embeds-a-manifold-in-countable-euclidean-data` · lemma — A countable coordinate-bump map embeds a manifold in countable Euclidean data
- `lem-a-smooth-exhaustion-separates-the-locally-finite-chart-bands` · lemma — A smooth exhaustion separates the locally finite chart bands
- `thm-every-smooth-manifold-embeds-in-some-finite-dimensional-euclidean-space` · theorem — Every smooth manifold embeds in some finite-dimensional Euclidean space
- `prop-a-proper-injective-immersion-is-a-smooth-embedding` · proposition — A proper injective immersion is a smooth embedding
- `def-secant-and-tangent-direction-maps-of-an-euclidean-embedding` · definition — Secant and tangent direction maps of a Euclidean embedding
- `lem-a-generic-linear-projection-preserves-injectivity-and-immersion` · lemma — A generic linear projection preserves injectivity and immersion
- `lem-a-generic-projection-can-preserve-properness` · lemma — A generic projection can preserve properness
- `thm-weak-whitney-proper-embedding-theorem` · theorem — The weak Whitney proper embedding theorem
- `thm-weak-whitney-immersion-theorem` · theorem — The weak Whitney immersion theorem
- `rem-strong-whitney-embedding-theorem` · remark — The strong Whitney embedding theorem
- `rem-strong-whitney-immersion-theorem` · remark — The strong Whitney immersion theorem
- `def-tubular-neighbourhood-of-an-embedded-submanifold` · definition — Tubular neighbourhoods of embedded submanifolds
- `def-normal-addition-map-for-a-euclidean-submanifold` · definition — The normal addition map for a Euclidean submanifold
- `lem-normal-addition-is-a-local-diffeomorphism-along-the-zero-section` · lemma — Normal addition is a local diffeomorphism along the zero section
- `lem-variable-radius-injectivity-for-normal-addition` · lemma — Variable-radius injectivity for normal addition
- `thm-euclidean-tubular-neighbourhood-theorem` · theorem — The Euclidean tubular neighbourhood theorem
- `cor-a-closed-euclidean-submanifold-has-a-smooth-neighbourhood-retraction` · corollary — A closed Euclidean submanifold has a smooth neighborhood retraction
- `prop-nearest-point-projection-is-the-tubular-retraction-after-shrinking` · proposition — Nearest-point projection is the tubular retraction after shrinking
- `thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold` · theorem — The tubular neighbourhood theorem in a smooth ambient manifold
- `cor-every-closed-embedded-submanifold-has-a-smooth-neighbourhood-retraction` · corollary — Every closed embedded submanifold has a smooth neighborhood retraction
- `prop-two-tubular-neighbourhood-germs-are-isomorphic-near-the-zero-section` · proposition — Two tubular neighbourhood germs are isomorphic near the zero section
- `def-positive-continuous-error-function-for-strong-approximation` · definition — Positive continuous error functions for strong approximation
- `thm-whitney-approximation-for-euclidean-valued-maps` · theorem — Whitney approximation for Euclidean-valued maps
- `thm-relative-whitney-approximation-for-euclidean-valued-maps` · theorem — Relative Whitney approximation for Euclidean-valued maps
- `lem-a-fine-euclidean-approximation-lands-in-a-prescribed-tubular-neighbourhood` · lemma — A fine Euclidean approximation lands in a prescribed tubular neighbourhood
- `thm-whitney-approximation-for-manifold-valued-maps` · theorem — Whitney approximation for manifold-valued maps
- `thm-relative-whitney-approximation-for-manifold-valued-maps` · theorem — Relative Whitney approximation for manifold-valued maps
- `cor-every-continuous-map-between-smooth-manifolds-is-homotopic-to-a-smooth-map` · corollary — Every continuous map between smooth manifolds is homotopic to a smooth map
- `thm-continuously-homotopic-smooth-maps-are-smoothly-homotopic` · theorem — Continuously homotopic smooth maps are smoothly homotopic
- `cor-the-smooth-and-continuous-homotopy-categories-of-smooth-manifolds-have-the-same-morphism-sets` · corollary — The smooth and continuous homotopy categories of smooth manifolds have the same morphism sets
- `cor-a-continuous-map-from-a-closed-subset-extends-smoothly-exactly-when-it-has-a-continuous-extension-and-is-smooth-near-the-subset` · corollary — A continuous map from a closed subset extends smoothly exactly when it has a continuous extension and is smooth near the subset
- `lem-a-tubular-target-produces-a-submersive-finite-dimensional-perturbation-family` · lemma — A tubular target produces a submersive finite-dimensional perturbation family
- `thm-transversality-homotopy-theorem` · theorem — The transversality homotopy theorem
- `thm-strong-whitney-approximation-by-transverse-maps` · theorem — Strong Whitney approximation by transverse maps
- `cor-transverse-maps-are-dense-in-the-strong-smooth-topology` · corollary — Transverse maps are dense in the strong smooth topology
- `cor-a-smooth-section-can-be-perturbed-transverse-to-the-zero-section` · corollary — A smooth section transverse to the zero section has a submanifold zero set
- `prop-relative-transversality-preserves-a-map-on-a-closed-good-region` · proposition — Relative transversality preserves a map on a closed good region
- `fs-every-injective-immersion-is-a-proper-embedding` · false-statement — FALSE: every injective immersion is a proper embedding
- `fs-an-arbitrary-linear-projection-of-an-embedding-is-an-embedding` · false-statement — FALSE: an arbitrary linear projection of an embedding is an embedding
- `fs-every-proper-embedding-of-an-n-manifold-lands-in-r-n` · false-statement — FALSE: every proper embedding of an n-manifold lands in R^n
- `fs-every-noncompact-submanifold-has-a-uniform-radius-tubular-neighbourhood` · false-statement — FALSE: every noncompact submanifold has a uniform-radius tubular neighbourhood
- `fs-the-tubular-neighbourhood-retraction-is-canonical` · false-statement — FALSE: the tubular-neighbourhood retraction is canonical
- `fs-uniform-approximation-is-the-right-global-notion-on-every-noncompact-manifold` · false-statement — FALSE: uniform approximation is the right global notion on every noncompact manifold

### `whitney-embedding-tubular-neighbourhoods-and-approximation-examples` — Whitney Embedding Tubular Neighbourhoods and Approximation — Examples (10 item(s))

- `ex-the-standard-circle-and-its-annular-tubular-neighbourhood` · example — The standard circle and its annular tubular neighbourhood
- `ex-the-sphere-and-its-two-sided-normal-tube` · example — The sphere and its two-sided normal tube
- `ex-a-noncompact-embedded-curve-with-no-uniform-tubular-radius` · example — A noncompact embedded curve with no uniform tubular radius
- `ex-a-coordinate-bump-embedding-of-the-circle-in-euclidean-space` · example — A coordinate-bump embedding of the circle in Euclidean space
- `ex-projecting-a-space-curve-can-create-a-double-point` · example — Projecting a space curve can create a double point
- `ex-smoothing-a-piecewise-linear-real-valued-function-relative-to-a-closed-set` · example — Smoothing a piecewise-linear real-valued function relative to a closed set
- `ex-smoothing-a-continuous-circle-valued-map-through-an-annular-retraction` · example — Smoothing a continuous circle-valued map through an annular retraction
- `ex-a-generic-section-of-a-line-bundle-has-a-hypersurface-zero-set` · example — A generic section of a line bundle has a hypersurface zero set
- `cex-a-nearest-point-projection-is-not-unique-outside-the-tubular-radius` · counterexample — A nearest-point projection need not be unique outside the tubular radius
- `cex-a-smooth-approximation-without-relative-control-destroys-prescribed-values` · counterexample — A smooth approximation without relative control destroys prescribed values

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Alerts from other groups

None. No other group flagged an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-28-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — fatal-only configured-judge adjudication, `frontier-28`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Web search is available in this role. If any mathematics is uncertain, use it
and verify the point against original sources before deciding the outcome or
making a repair. Record the sources consulted and the exact claim each source
supports in the group report; do not resolve uncertainty from memory or a
secondary summary alone.

Append one row per rejection to `research/frontier-28-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Descriptive defect-ledger subclasses
such as `invalid-inference`, `false-claim`, or `ill-typed-construction` are not
valid adjudication `defect_type` values.

For an incoming alert, append the owning-group disposition to
`research/frontier-28-step8-alert-decisions.jsonl`. A defect in another group is a
`research/frontier-28-step8-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-8 baseline or rewrite shared ledgers. Run the Step-8 guard
and scope check, then write `research/frontier-28-alpha-step8-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.
