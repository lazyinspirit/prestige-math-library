# Step 8 — group **a**, run `frontier-21`

You are the group Alpha for batches **1**, **5**, **9**: 4 A/B pair(s), 8 page(s), 163 item(s), 0 open rejection(s) over 0 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-21-alpha-a-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
in `research/frontier-21-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 1 | `subgroups-of-free-groups-and-schreier-rewriting` | A | group-theory | 71.009 | `socles-and-the-onan-scott-landscape-examples` |
| 1 | `subgroups-of-free-groups-and-schreier-rewriting-examples` | B | group-theory | 71.01 | `subgroups-of-free-groups-and-schreier-rewriting` |
| 1 | `amenable-groups-and-folner-criteria` | A | group-theory | 302.007 | `hyperbolic-spaces-and-hyperbolic-groups-examples` |
| 1 | `amenable-groups-and-folner-criteria-examples` | B | group-theory | 302.008 | `amenable-groups-and-folner-criteria` |
| 5 | `the-group-algebra-and-representations` | A | abstract-algebra | 143 | `chain-conditions-and-semisimple-modules`, `the-fundamental-theorem-of-algebra`, `sylow-theorems-and-nilpotent-groups`, `matrices-and-the-matrix-of-a-linear-map` |
| 5 | `the-group-algebra-and-representations-examples` | B | abstract-algebra | 144 | `the-group-algebra-and-representations` |
| 9 | `abelian-categories` | A | category-theory | 365.015 | `preadditive-and-additive-categories-and-biproducts-examples`, `modules-over-a-pid-and-canonical-forms` |
| 9 | `abelian-categories-examples` | B | category-theory | 365.016 | `abelian-categories`, `uniform-spaces`, `localisation-of-modules-and-support` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `subgroups-of-free-groups-and-schreier-rewriting` — Subgroups of Free Groups and Schreier Rewriting (21 item(s))

- `def-labeled-schreier-coset-graph` · definition — The labeled Schreier coset graph of a subgroup of a free group
- `lem-schreier-coset-graph-is-connected-and-deterministic` · lemma — The Schreier coset graph is connected and deterministic
- `def-schreier-transversal-and-schreier-system` · definition — Schreier transversals and Schreier systems
- `lem-spanning-trees-and-schreier-systems-correspond` · lemma — Rooted spanning trees and Schreier systems correspond
- `def-schreier-generator` · definition — Schreier generators in the right-coset convention
- `lem-schreier-generators-lie-in-the-subgroup` · lemma — Every Schreier generator lies in the subgroup
- `def-schreier-rewriting-map` · definition — The Schreier rewriting map
- `lem-schreier-rewriting-is-invariant-under-free-reduction` · lemma — Schreier rewriting is invariant under free reduction
- `thm-schreier-generating-lemma` · theorem — The nontrivial Schreier generators generate the subgroup
- `lem-tree-schreier-generators-are-freely-independent` · lemma — Tree Schreier generators are freely independent
- `thm-nielsen-schreier-with-an-explicit-basis` · theorem — Under the stated choice boundary, every subgroup of a free group is free with its nontrivial Schreier generators as a basis
- `thm-schreier-index-rank-formula` · theorem — The Schreier index-rank formula
- `cor-free-groups-of-rank-at-least-two-have-subgroups-of-every-finite-rank` · corollary — A free group of rank at least two has subgroups of every finite rank
- `thm-reidemeister-schreier-presentation` · theorem — The Reidemeister-Schreier presentation theorem
- `lem-reidemeister-schreier-relators-are-independent-of-word-representatives` · lemma — Reidemeister-Schreier relators are independent of word representatives
- `cor-finite-index-subgroups-of-finitely-presented-groups-are-finitely-presented` · corollary — Finite-index subgroups of finitely presented groups are finitely presented
- `thm-marshall-hall-free-factor-theorem` · theorem — Every finitely generated subgroup of a finite-rank free group is a free factor of a finite-index subgroup
- `fs-a-subgroup-of-a-finitely-generated-free-group-is-finitely-generated` · false-statement — FALSE: every subgroup of a finitely generated free group is finitely generated
- `fs-schreier-generators-are-always-a-free-basis` · false-statement — FALSE: the raw Schreier generators are always a free basis
- `fs-a-finite-index-d-subgroup-of-a-rank-n-free-group-has-rank-dn` · false-statement — FALSE: a finite-index d subgroup of a rank n free group has rank dn
- `fs-reidemeister-schreier-needs-no-choice-of-transversal` · false-statement — FALSE: the Reidemeister-Schreier presentation needs no choice of transversal

### `subgroups-of-free-groups-and-schreier-rewriting-examples` — Subgroups of Free Groups and Schreier Rewriting — Examples (7 item(s))

- `ex-index-two-subgroup-of-a-rank-two-free-group` · example — An index-two subgroup of a rank-two free group has rank three
- `ex-kernel-of-the-exponent-sum-map` · example — The kernel of an exponent-sum map in a free group
- `ex-a-schreier-coset-graph-and-its-tree-basis` · example — A Schreier coset graph and its spanning-tree basis
- `ex-reidemeister-schreier-for-a-surface-subgroup` · example — A Reidemeister-Schreier presentation for a surface subgroup
- `ex-infinite-rank-subgroup-of-a-rank-two-free-group` · example — A rank-two free group contains an infinite-rank subgroup
- `ex-marshall-hall-separating-quotient` · example — Marshall Hall's theorem produces a separating finite-index overgroup
- `cex-an-arbitrary-transversal-does-not-give-the-reduced-schreier-basis` · counterexample — An arbitrary transversal need not give the reduced Schreier basis

### `amenable-groups-and-folner-criteria` — Amenable Groups and Folner Criteria (29 item(s))

- `def-mean-on-bounded-functions-on-a-group` · definition — Means on bounded functions on a group
- `def-left-translation-action-on-bounded-functions` · definition — Left translation on bounded functions
- `def-left-invariant-mean-and-amenable-group` · definition — Left-invariant means and amenable groups
- `lem-left-and-right-amenability-agree-by-inversion` · lemma — Left and right amenability agree by inversion
- `prop-finite-groups-are-amenable` · proposition — Finite groups are amenable
- `thm-abelian-groups-are-amenable` · theorem — Abelian groups are amenable
- `thm-subgroups-and-quotients-of-amenable-groups-are-amenable` · theorem — Subgroups and quotients of amenable groups are amenable
- `thm-extensions-of-amenable-groups-are-amenable` · theorem — Extensions of amenable groups are amenable
- `def-locally-finite-group` · definition — Locally finite groups
- `lem-directed-union-of-amenable-subgroups-is-amenable` · lemma — Directed unions of amenable subgroups are amenable
- `cor-solvable-and-locally-finite-groups-are-amenable` · corollary — Solvable groups and locally finite groups are amenable
- `def-folner-set-and-folner-condition` · definition — Folner sets and the Folner condition
- `lem-equivalent-folner-boundary-formulations` · lemma — Equivalent boundary formulations of the Folner condition
- `thm-folner-criterion-for-amenability` · theorem — The Folner criterion for amenability
- `def-folner-sequence` · definition — Folner sequences for enumerated groups
- `prop-enumerated-countable-amenable-groups-admit-folner-sequences` · proposition — Enumerated countable amenable groups admit Folner sequences
- `thm-subexponential-growth-implies-amenability` · theorem — Subexponential growth implies amenability
- `def-paradoxical-decomposition-of-a-group` · definition — Paradoxical decompositions of groups
- `lem-paradoxical-groups-admit-no-invariant-mean` · lemma — Paradoxical groups admit no invariant mean
- `thm-tarski-alternative` · theorem — A group is amenable if and only if it is not paradoxical
- `thm-free-group-of-rank-two-is-nonamenable` · theorem — The free group of rank two is nonamenable
- `cor-groups-containing-a-rank-two-free-subgroup-are-nonamenable` · corollary — Groups containing a rank-two free subgroup are nonamenable
- `thm-amenability-is-a-quasi-isometry-invariant-for-finitely-generated-groups` · theorem — Amenability is a quasi-isometry invariant for finitely generated groups
- `rem-nonamenable-groups-without-nonabelian-free-subgroups` · remark — There exist nonamenable groups without nonabelian free subgroups
- `fs-amenable-means-finite` · false-statement — FALSE: amenable means finite
- `fs-every-nonamenable-group-contains-a-rank-two-free-subgroup` · false-statement — FALSE: every nonamenable group contains a rank-two free subgroup
- `fs-one-finite-folner-set-proves-amenability` · false-statement — FALSE: one finite Folner set proves amenability
- `fs-folner-sequences-exist-for-every-uncountable-amenable-group` · false-statement — FALSE: every uncountable amenable group has a Folner sequence
- `fs-paradoxical-decomposition-means-a-set-theoretic-partition-without-group-translates` · false-statement — FALSE: a paradoxical decomposition is just an abstract partition without prescribed translates

### `amenable-groups-and-folner-criteria-examples` — Amenable Groups and Folner Criteria — Examples (7 item(s))

- `ex-folner-intervals-in-the-integers` · example — Intervals in Z are Folner sets
- `ex-folner-boxes-in-zn` · example — Boxes in Z^n are Folner sets
- `ex-finite-and-locally-finite-amenable-groups` · example — Finite groups and locally finite groups are amenable
- `ex-the-lamplighter-group-is-amenable` · example — The standard lamplighter group is amenable
- `ex-boundary-expansion-in-the-free-group` · example — Boundary expansion in the free group
- `ex-paradoxical-decomposition-of-a-free-group` · example — A paradoxical decomposition of a free group of rank two
- `cex-amenability-does-not-imply-subexponential-growth` · counterexample — Amenability does not imply subexponential growth

### `the-group-algebra-and-representations` — The Group Algebra and Representations of Finite Groups (24 item(s))

- `def-group-ring` · definition — The group ring $R[G]$ of finitely supported formal $R$-linear combinations of group elements
- `thm-group-ring-is-a-unital-algebra-with-basis-g` · theorem — The group ring $R[G]$ is a unital $R$-algebra with basis $G$, and each $g\in G$ is a unit of $R[G]$
- `def-augmentation-map-and-augmentation-ideal-of-a-group-ring` · definition — The augmentation map $\varepsilon:R[G]\to R$ and the augmentation ideal $I_G=\ker\varepsilon$
- `cor-dimension-of-a-finite-group-algebra` · corollary — If $G$ is finite then $\dim_k k[G]=|G|$
- `thm-group-ring-is-commutative-iff-the-group-is-abelian` · theorem — For a field $k$, the group algebra $k[G]$ is commutative if and only if $G$ is abelian
- `def-g-module-over-a-commutative-ring` · definition — An $R$-linear action of $G$ on a left $R$-module, and a $G$-module over $R$
- `def-finite-dimensional-representation-of-a-group-over-a-field` · definition — A finite-dimensional representation $\rho:G\to \operatorname{GL}(V)$ over a field, and its degree
- `def-subrepresentation-and-irreducible-representation` · definition — Subrepresentations, direct sums of representations, and irreducibility
- `def-intertwiner-equivalent-and-faithful-representations` · definition — Intertwiners, the spaces $\operatorname{Hom}_G(V,W)$ and $\operatorname{End}_G(V)$, equivalent representations, and faithful representations
- `thm-group-actions-and-group-ring-modules-correspond` · theorem — For a commutative ring $R$, $R$-linear $G$-actions are exactly the compatible left $R[G]$-module structures
- `cor-subrepresentations-correspond-to-submodules-and-irreducibility-to-simplicity` · corollary — Under the dictionary, subrepresentations are exactly submodules and irreducible representations are exactly simple modules
- `prop-intertwiner-space-is-a-vector-space-and-endomorphisms-form-a-k-algebra` · proposition — $\operatorname{Hom}_G(V,W)$ is a $k$-vector space and $\operatorname{End}_G(V)$ is a $k$-algebra
- `def-trivial-regular-and-permutation-representations` · definition — The trivial representation, the regular representation, and permutation representations from finite $G$-sets
- `def-sign-representation-and-restriction-of-a-representation` · definition — The sign representation of $S_n$ and the restriction $\operatorname{Res}^G_H(V)$ of a representation to a subgroup
- `thm-regular-representation-is-faithful` · theorem — The regular representation is faithful
- `thm-every-irreducible-representation-is-a-quotient-of-the-regular-representation` · theorem — Every irreducible representation of a finite group is a quotient of the regular representation
- `cor-irreducible-representations-have-degree-at-most-the-group-order` · corollary — Every irreducible representation of a finite group has degree at most $|G|$
- `def-splitting-field-for-a-finite-group` · definition — A splitting field for a finite group: every irreducible representation has scalar endomorphism ring
- `rem-brauers-cyclotomic-splitting-field-criterion-is-not-proved-here` · remark — Brauer's cyclotomic criterion for splitting fields is recorded here only as an external theorem
- `cor-schurs-lemma-for-irreducible-representations` · corollary — Schur's lemma for irreducible representations: a nonzero intertwiner is an isomorphism, and $\operatorname{End}_G(V)$ is a division ring
- `cor-endomorphisms-of-an-irreducible-over-a-splitting-field-are-scalars` · corollary — Over a splitting field, every $G$-endomorphism of an irreducible representation is scalar
- `cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars` · corollary — Over an algebraically closed field, every endomorphism of an irreducible representation is scalar
- `thm-irreducible-representations-of-a-finite-abelian-group-over-a-splitting-field-are-one-dimensional` · theorem — Every irreducible representation of a finite abelian group over a splitting field is one-dimensional
- `thm-degree-one-representations-are-exactly-homomorphisms-to-k-times-and-form-an-abelian-group` · theorem — Equivalence classes of degree-one representations are exactly homomorphisms $G\to k^{\times}$; equivalently they factor through $G/G'$, and they form an abelian group

### `the-group-algebra-and-representations-examples` — The Group Algebra and Representations of Finite Groups — Examples (11 item(s))

- `ex-the-complex-representations-of-a-cyclic-group-of-order-n-are-the-n-characters` · example — Over $\mathbb{C}$, a cyclic group of order $n$ has exactly $n$ irreducible representations up to equivalence, represented by the characters $g\mapsto \lambda$ with $\lambda^n=1$
- `ex-the-regular-representation-of-c-two-splits-as-trivial-plus-sign` · example — The regular representation of $C_2$ over a field of characteristic not $2$ is the direct sum of the trivial and sign representations
- `ex-the-standard-two-dimensional-representation-of-s-three-is-irreducible` · example — The standard $2$-dimensional representation of $S_3$ inside the permutation representation on $\mathbb C^3$ is irreducible
- `ex-the-permutation-representation-on-left-cosets-g-mod-h` · example — The permutation representation on the left cosets $G/H$
- `ex-zero-divisors-in-the-group-algebra-of-a-nontrivial-finite-group` · example — Any nontrivial finite group algebra has zero divisors coming from a nonidentity cyclic subgroup
- `ex-the-quaternion-group-acts-on-the-quaternions-by-left-multiplication` · example — The quaternion group $Q_8$ acts on $\mathbb H$ by left multiplication
- `ex-the-real-two-dimensional-irreducible-of-c-three-has-endomorphism-ring-c` · example — The real $2$-dimensional irreducible representation of $C_3$ has endomorphism ring $\mathbb C$
- `fs-every-representation-is-faithful` · false-statement — FALSE: every representation is faithful
- `fs-the-group-algebra-of-a-nontrivial-finite-group-is-a-field` · false-statement — FALSE: if $|G|>1$, then $k[G]$ is a field
- `fs-every-degree-one-representation-is-trivial` · false-statement — FALSE: every degree-one representation is trivial
- `fs-schurs-lemma-over-an-arbitrary-field-still-forces-scalars` · false-statement — FALSE: over every field, the endomorphism ring of an irreducible representation is just the base field

### `abelian-categories` — Abelian Categories (55 item(s))

- `def-normal-monomorphism-and-conormal-epimorphism` · definition — Normal monomorphisms and conormal epimorphisms
- `prop-the-kernel-of-a-monomorphism-is-zero-and-the-cokernel-of-an-epimorphism-is-zero` · proposition — The kernel of a monomorphism is zero and the cokernel of an epimorphism is zero
- `prop-the-cokernel-of-a-zero-morphism-out-of-the-zero-object-is-an-isomorphism` · proposition — The cokernel of the zero map out of the zero object is the target, and dually for kernels
- `def-image-and-coimage-in-a-category-with-kernels-and-cokernels` · definition — Image and coimage in a category with kernels and cokernels
- `thm-a-morphism-factors-uniquely-through-its-coimage` · theorem — A morphism factors uniquely through its coimage
- `thm-a-morphism-factors-uniquely-through-its-image` · theorem — A morphism factors uniquely through its image
- `thm-the-canonical-morphism-from-the-coimage-to-the-image-exists-and-is-unique` · theorem — The canonical morphism from the coimage to the image exists and is unique
- `prop-the-coimage-projection-is-epic-and-the-image-inclusion-is-monic` · proposition — The coimage projection is epic and the image inclusion is monic
- `def-abelian-category` · definition — Abelian category
- `rem-the-axiom-labels-and-where-they-come-from` · remark — This page uses Grothendieck's AB1 and AB2 labels, and records the competing conventions
- `thm-an-abelian-category-is-balanced` · theorem — An abelian category is balanced
- `thm-the-opposite-of-an-abelian-category-is-abelian` · theorem — The opposite of an abelian category is abelian
- `thm-every-monomorphism-is-the-kernel-of-its-cokernel` · theorem — Every monomorphism is the kernel of its cokernel, and dually every epimorphism is the cokernel of its kernel
- `thm-epimorphism-monomorphism-factorisation-exists-and-is-unique-up-to-unique-isomorphism` · theorem — Every morphism factors as an epimorphism followed by a monomorphism, uniquely up to unique isomorphism
- `thm-the-image-is-the-least-subobject-through-which-a-morphism-factors` · theorem — The image is the least subobject through which a morphism factors
- `cor-a-morphism-in-an-abelian-category-is-monic-exactly-when-its-kernel-is-zero-and-epic-exactly-when-its-cokernel-is-zero` · corollary — In an abelian category, monic means zero kernel and epic means zero cokernel
- `def-the-freyd-axioms-for-an-abelian-category` · definition — Freyd's axioms A0, A1, A1*, A2, A2*, A3, and A3* for abelian categories
- `thm-the-freyd-axioms-imply-the-additive-axioms` · theorem — Freyd's axioms force the additive structure and recover the AB2 definition
- `thm-the-freyd-mitchell-characterisation-of-an-abelian-category` · theorem — Freyd and Mitchell's characterisation of abelian categories
- `rem-additivity-is-a-property-of-an-abelian-category-and-not-part-of-its-data` · remark — Additivity can be derived rather than postulated, depending on the axiomatisation
- `thm-an-abelian-category-has-all-finite-limits-and-all-finite-colimits` · theorem — An abelian category has all finite limits and all finite colimits
- `thm-the-pullback-of-a-cospan-is-the-kernel-of-the-difference-of-its-legs` · theorem — A pullback is the kernel of the difference of the two legs, and dually for pushouts
- `thm-the-pullback-of-an-epimorphism-is-an-epimorphism` · theorem — The pullback of an epimorphism is an epimorphism
- `cor-the-pushout-of-a-monomorphism-is-a-monomorphism` · corollary — The pushout of a monomorphism is a monomorphism
- `thm-in-a-pullback-square-the-induced-morphism-on-the-kernels-of-the-parallel-legs-is-an-isomorphism` · theorem — In a pullback square, the induced map on the kernels of the two parallel arrows is an isomorphism
- `thm-a-commuting-square-with-monic-legs-is-a-pullback-exactly-when-the-induced-morphism-to-the-intersection-is-an-isomorphism` · theorem — A square with monic legs is a pullback exactly when it identifies the source with the intersection subobject
- `thm-pullback-pasting-in-an-abelian-category` · theorem — Pullback pasting in an abelian category
- `thm-kernel-and-cokernel-are-mutually-inverse-order-anti-isomorphisms-between-subobjects-and-quotient-objects` · theorem — Kernel and cokernel are mutually inverse order-reversing correspondences between subobjects and quotient objects
- `def-the-quotient-of-an-object-by-a-subobject` · definition — The quotient of an object by a subobject
- `thm-the-quotient-is-independent-of-the-representing-monomorphism` · theorem — The quotient by a subobject is independent of the chosen representing monomorphism
- `thm-first-isomorphism-theorem-in-an-abelian-category` · theorem — First isomorphism theorem in an abelian category
- `thm-third-isomorphism-theorem-in-an-abelian-category` · theorem — Third isomorphism theorem in an abelian category
- `thm-a-composite-of-a-quotient-and-a-subobject-inclusion-is-the-canonical-factorisation` · theorem — The quotient by the kernel followed by the image inclusion is the canonical epi-mono factorization
- `def-exact-functor-between-abelian-categories` · definition — Exact functor between abelian categories
- `thm-a-left-or-right-exact-functor-between-abelian-categories-is-additive` · theorem — A left or right exact functor between abelian categories is automatically additive
- `thm-one-sided-and-two-sided-exactness-by-short-exact-sequences` · theorem — Left exactness, right exactness, and exactness are characterized by short exact sequences
- `thm-an-additive-functor-is-exact-exactly-when-it-preserves-kernels-and-cokernels` · theorem — An additive functor is exact exactly when it preserves kernels and cokernels
- `thm-a-left-exact-functor-preserves-monomorphisms-and-a-right-exact-functor-preserves-epimorphisms` · theorem — A left exact functor preserves monomorphisms and a right exact functor preserves epimorphisms
- `cex-an-exact-functor-need-not-be-faithful` · counterexample — An exact functor need not be faithful
- `thm-an-equivalence-between-abelian-categories-is-exact` · theorem — An equivalence between abelian categories is exact
- `def-abelian-subcategory-and-exact-embedding` · definition — Abelian subcategory and exact embedding
- `thm-abelian-groups-form-an-abelian-category` · theorem — Abelian groups form an abelian category
- `thm-modules-over-a-ring-form-an-abelian-category` · theorem — Modules over a ring form an abelian category
- `thm-additive-functors-from-a-small-preadditive-category-to-an-abelian-category-form-an-abelian-category` · theorem — Additive functors from a small preadditive category to an abelian category form an abelian category
- `thm-a-small-product-of-abelian-categories-is-abelian` · theorem — A small product of abelian categories is abelian
- `cex-filtered-vector-spaces-form-an-additive-category-with-all-kernels-and-cokernels-that-is-not-abelian` · counterexample — Filtered vector spaces can be additive with kernels and cokernels without being abelian
- `cex-torsion-free-abelian-groups-do-not-form-an-abelian-category` · counterexample — Torsion-free abelian groups do not form an abelian category
- `cor-an-abelian-category-that-is-a-preorder-is-trivial` · corollary — An abelian category that is a preorder is trivial
- `rem-the-freyd-mitchell-embedding-theorem` · remark — Freyd-Mitchell gives a fully faithful exact embedding of every small abelian category into a module category
- `rem-why-the-diagram-lemmas-are-not-proved-by-the-embedding-theorem` · remark — The library does not use Freyd-Mitchell to prove the diagram lemmas
- `fs-an-additive-category-with-all-kernels-and-cokernels-is-abelian` · false-statement — FALSE: every additive category with all kernels and cokernels is abelian
- `fs-the-canonical-morphism-from-the-coimage-to-the-image-is-invertible-whenever-the-two-objects-are-isomorphic` · false-statement — FALSE: if coimage and image happen to be isomorphic as objects, then the canonical map is automatically an isomorphism
- `fs-in-an-abelian-category-a-morphism-that-is-monic-and-epic-need-not-be-an-isomorphism` · false-statement — FALSE: in an abelian category a morphism can be monic and epic without being an isomorphism
- `fs-every-abelian-category-is-equivalent-to-a-category-of-modules` · false-statement — FALSE: every abelian category is equivalent to a module category
- `fs-the-pullback-of-an-epimorphism-is-an-epimorphism-in-any-category-with-pullbacks` · false-statement — FALSE: pullbacks preserve epimorphisms in every category with pullbacks

### `abelian-categories-examples` — Abelian Categories — Examples (9 item(s))

- `ex-kernels-cokernels-images-and-coimages-computed-in-abelian-groups` · example — Kernels, cokernels, images, and coimages in abelian groups are the familiar subgroup and quotient constructions
- `ex-the-canonical-factorisation-of-a-module-homomorphism` · example — A module homomorphism factors as quotient by its kernel followed by inclusion of its image
- `ex-a-pullback-computed-as-a-kernel-of-a-difference` · example — A pullback of module maps is computed as a kernel of a difference map
- `ex-vector-spaces-over-a-field-as-an-abelian-category` · example — Vector spaces over a field form an abelian category
- `ex-the-abelian-category-of-representations-of-a-two-object-quiver` · example — Representations of the quiver 1 -> 2 in abelian groups form an abelian category
- `cex-topological-abelian-groups-are-additive-and-not-abelian` · counterexample — Topological abelian groups are additive but not abelian
- `ex-the-third-isomorphism-theorem-checked-for-abelian-groups` · example — The third isomorphism theorem in abelian groups matches the categorical statement
- `ex-an-exact-functor-between-module-categories` · example — Localization of modules gives an exact functor between module categories
- `cex-filtered-vector-spaces-fail-the-coimage-image-axiom` · counterexample — Filtered vector spaces can have zero kernel and zero cokernel without satisfying AB2

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
`research/frontier-21-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — exact closure recovery, `frontier-21`

Read `research/frontier-21-judge-closure.json`,
`research/frontier-21-judge.jsonl`,
`research/frontier-21-judge-adjudications.jsonl`, and the generated `by_item`
ownership map in `research/frontier-21-step8-scope.json`. Take only current
unadjudicated `(id, model, context_sha256)` rows owned by this group; leave
other groups' rows untouched. A row owned by no group is a reported blocker,
not a row to discard.

Append one exact adjudication outcome per owned row. Only
`confirmed_fatal` licenses its coherent repair and matching ledger row; update
only records made stale by that repair. Send a concrete other-group finding to
`research/frontier-21-step8-cross-group.jsonl`, never repair that item.

Write `research/frontier-21-alpha-step8-closure-recovery-<group>.md` with the rows
handled, outcomes, licensed repairs, rejudge targets, cross-group alerts, and
blockers. Preserve shared append-only ledgers.
