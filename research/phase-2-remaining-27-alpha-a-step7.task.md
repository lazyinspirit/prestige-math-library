# Step 7 adjudication — group **a**, run `phase-2-remaining-27`

You are the group Alpha for batches **11**, **12**, **13**: 6 A/B pair(s), 12 page(s), 350 item(s), 220 open rejection(s) over 220 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

`research/phase-2-remaining-27-alpha-a-step7-context.json` is what a group Alpha for this group wrote during step 6,
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

**Audit and repair one item at a time. Inspect related items first only when necessary.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/phase-2-remaining-27-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 11 | `cartan-subalgebras-and-root-space-decompositions` | A | differential-geometry | 501 | `lie-algebra-representations-enveloping-algebras-and-pbw`, `solvable-and-nilpotent-lie-algebras`, `semisimple-lie-algebras-cohomology-and-levi-theory`, `the-spectral-theorem-and-singular-value-decomposition` |
| 11 | `cartan-subalgebras-and-root-space-decompositions-examples` | B | differential-geometry | 502 | `cartan-subalgebras-and-root-space-decompositions` |
| 11 | `root-systems-dynkin-diagrams-and-cartan-killing-classification` | A | differential-geometry | 503 | `lie-algebra-representations-enveloping-algebras-and-pbw`, `semisimple-lie-algebras-cohomology-and-levi-theory`, `cartan-subalgebras-and-root-space-decompositions`, `inner-product-spaces-and-orthogonality`, `trees-forests-and-spanning-trees`, `semisimple-lie-algebras-cohomology-and-levi-theory-examples` |
| 11 | `root-systems-dynkin-diagrams-and-cartan-killing-classification-examples` | B | differential-geometry | 504 | `root-systems-dynkin-diagrams-and-cartan-killing-classification`, `the-riemann-sphere-and-mobius-transformations` |
| 12 | `highest-weight-theory-for-complex-semisimple-lie-algebras` | A | differential-geometry | 505 | `lie-algebra-representations-enveloping-algebras-and-pbw`, `semisimple-lie-algebras-cohomology-and-levi-theory`, `cartan-subalgebras-and-root-space-decompositions`, `root-systems-dynkin-diagrams-and-cartan-killing-classification` |
| 12 | `highest-weight-theory-for-complex-semisimple-lie-algebras-examples` | B | differential-geometry | 506 | `highest-weight-theory-for-complex-semisimple-lie-algebras`, `lie-subgroups-actions-and-homogeneous-spaces-examples` |
| 12 | `compact-lie-groups-maximal-tori-and-peter-weyl-theory` | A | differential-geometry | 507 | `riemannian-metrics-length-distance-and-volume`, `riemann-curvature-and-riemannian-submanifolds`, `lie-groups-invariant-fields-and-the-exponential-map`, `lie-subgroups-actions-and-homogeneous-spaces`, `lie-algebra-representations-enveloping-algebras-and-pbw`, `solvable-and-nilpotent-lie-algebras`, `semisimple-lie-algebras-cohomology-and-levi-theory`, `cartan-subalgebras-and-root-space-decompositions`, `root-systems-dynkin-diagrams-and-cartan-killing-classification`, `highest-weight-theory-for-complex-semisimple-lie-algebras`, `haar-measure-existence-and-uniqueness`, `stone-weierstrass-general`, `hilbert-space-geometry-and-riesz-representation`, `orthonormal-bases-parseval-and-fourier-series`, `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators` |
| 12 | `compact-lie-groups-maximal-tori-and-peter-weyl-theory-examples` | B | differential-geometry | 508 | `compact-lie-groups-maximal-tori-and-peter-weyl-theory` |
| 13 | `real-forms-and-real-semisimple-lie-algebras` | A | differential-geometry | 509 | `lie-groups-invariant-fields-and-the-exponential-map`, `lie-subgroups-actions-and-homogeneous-spaces`, `lie-algebra-representations-enveloping-algebras-and-pbw`, `solvable-and-nilpotent-lie-algebras`, `semisimple-lie-algebras-cohomology-and-levi-theory`, `cartan-subalgebras-and-root-space-decompositions`, `root-systems-dynkin-diagrams-and-cartan-killing-classification`, `highest-weight-theory-for-complex-semisimple-lie-algebras`, `compact-lie-groups-maximal-tori-and-peter-weyl-theory`, `covering-spaces-and-lifting`, `root-systems-dynkin-diagrams-and-cartan-killing-classification-examples`, `semisimple-lie-algebras-cohomology-and-levi-theory-examples` |
| 13 | `real-forms-and-real-semisimple-lie-algebras-examples` | B | differential-geometry | 510 | `real-forms-and-real-semisimple-lie-algebras`, `cartan-subalgebras-and-root-space-decompositions-examples`, `lie-groups-invariant-fields-and-the-exponential-map-examples`, `semisimple-lie-algebras-cohomology-and-levi-theory-examples` |
| 13 | `moment-maps-and-symplectic-reduction` | A | differential-geometry | 515 | `rank-theorems-and-embedded-submanifolds`, `lie-subgroups-actions-and-homogeneous-spaces`, `semisimple-lie-algebras-cohomology-and-levi-theory`, `compact-lie-groups-maximal-tori-and-peter-weyl-theory`, `symplectic-manifolds-moser-stability-and-darboux-weinstein-theory`, `hamiltonian-mechanics-and-completely-integrable-systems`, `subspaces-products-and-quotients`, `compactness`, `hamiltonian-mechanics-and-completely-integrable-systems-examples`, `lie-groups-invariant-fields-and-the-exponential-map-examples` |
| 13 | `moment-maps-and-symplectic-reduction-examples` | B | differential-geometry | 516 | `moment-maps-and-symplectic-reduction`, `hamiltonian-mechanics-and-completely-integrable-systems-examples`, `lie-groups-invariant-fields-and-the-exponential-map-examples`, `symplectic-manifolds-moser-stability-and-darboux-weinstein-theory-examples` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `cartan-subalgebras-and-root-space-decompositions` — Cartan Subalgebras and Root Space Decompositions (46 item(s))

- `rem-additive-jordan-chevalley-is-supplied-by-x-two` · remark — The additive Jordan–Chevalley supplier
- `rem-jordan-chevalley-parts-agree-under-the-adjoint-representation` · remark — Jordan–Chevalley parts under the adjoint representation
- `def-abstract-jordan-decomposition-in-a-lie-algebra` · definition — Abstract Jordan decomposition
- `lem-jordan-chevalley-parts-agree-under-adjoint-representation` · lemma — Jordan–Chevalley parts agree under the adjoint representation
- `thm-jordan-decomposition-lies-inside-a-complex-semisimple-lie-algebra` · theorem — Jordan decomposition lies inside a complex semisimple Lie algebra
- `def-normalizer-of-a-lie-subalgebra` · definition — Normalizer of a Lie subalgebra
- `def-cartan-subalgebra-of-a-lie-algebra` · definition — Cartan subalgebra
- `def-toral-and-maximal-toral-subalgebra` · definition — Toral and maximal toral subalgebras
- `def-regular-element-and-rank-of-a-complex-lie-algebra` · definition — Regular element and rank
- `thm-centralizer-of-a-regular-semisimple-element-is-a-cartan-subalgebra` · theorem — Centralizer of a regular semisimple element is Cartan
- `thm-cartan-subalgebras-exist-in-complex-semisimple-lie-algebras` · theorem — Existence of Cartan subalgebras
- `lem-generalized-weight-space-decomposition-for-a-nilpotent-subalgebra` · lemma — Generalized weight spaces of a nilpotent subalgebra
- `thm-cartan-subalgebras-of-complex-semisimple-lie-algebras-are-exactly-maximal-toral-subalgebras` · theorem — Cartan subalgebras are exactly maximal toral subalgebras
- `thm-cartan-subalgebras-of-a-complex-semisimple-lie-algebra-are-conjugate` · theorem — Conjugacy of Cartan subalgebras
- `def-root-and-root-space-relative-to-a-cartan-subalgebra` · definition — Root and root space
- `thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra` · theorem — Root-space decomposition
- `prop-brackets-of-root-spaces` · proposition — Brackets of root spaces
- `prop-killing-form-orthogonality-of-root-spaces` · proposition — Killing-form orthogonality of root spaces
- `cor-opposite-root-spaces-pair-nondegenerately` · corollary — Opposite root spaces pair nondegenerately
- `def-killing-dual-vector-of-a-root` · definition — Killing-dual vector of a root
- `prop-bracket-of-opposite-root-spaces-is-the-root-line-in-the-cartan-subalgebra` · proposition — Bracket of opposite root spaces
- `lem-killing-length-of-a-root-is-nonzero` · lemma — The Killing length of a root is nonzero
- `def-coroot-of-a-lie-algebra-root` · definition — Coroot of a Lie-algebra root
- `def-special-linear-lie-algebra-sl-two` · definition — The special linear Lie algebra sl_2
- `thm-root-sl-two-triple` · theorem — Root sl₂ triple
- `thm-finite-dimensional-representations-of-sl-two` · theorem — Finite-dimensional representations of sl₂
- `thm-root-string-property` · theorem — Root-string property
- `cor-cartan-integers-are-integral` · corollary — Cartan integers are integral
- `thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional` · theorem — Root spaces are one-dimensional
- `cor-the-only-scalar-multiples-of-a-root-that-are-roots-are-plus-or-minus-the-root` · corollary — Root systems are reduced
- `def-root-reflection-from-a-coroot` · definition — Root reflection
- `thm-root-reflections-preserve-the-root-set` · theorem — Root reflections preserve roots
- `prop-root-reflections-are-induced-by-inner-automorphisms` · proposition — Root reflections are inner
- `thm-roots-of-a-complex-semisimple-lie-algebra-form-a-reduced-crystallographic-root-system` · theorem — Lie-algebra roots form a reduced crystallographic root system
- `prop-dimension-formula-from-roots` · proposition — Dimension formula from roots
- `prop-the-center-is-the-common-kernel-of-all-roots-inside-the-cartan-subalgebra` · proposition — Center as the common root kernel
- `def-regular-root-hyperplanes` · definition — Regular root hyperplanes
- `prop-centralizer-dimension-from-vanishing-roots` · proposition — Centralizer dimension from vanishing roots
- `cor-regular-elements-form-a-dense-zariski-open-subset-of-a-cartan-subalgebra` · corollary — Regular Cartan elements are dense Zariski open
- `fs-a-cartan-subalgebra-of-an-arbitrary-lie-algebra-means-a-maximal-abelian-subalgebra` · false-statement — A Cartan subalgebra is always maximal abelian
- `fs-every-element-of-a-complex-semisimple-lie-algebra-is-semisimple` · false-statement — Every element of a complex semisimple Lie algebra is semisimple
- `fs-root-spaces-can-have-arbitrary-dimension-in-a-complex-semisimple-lie-algebra` · false-statement — Root spaces may have arbitrary dimension
- `fs-if-alpha-and-beta-are-roots-then-alpha-plus-beta-is-always-a-root` · false-statement — Sums of roots are always roots
- `fs-all-integer-multiples-of-a-root-are-roots` · false-statement — All integer multiples of a root are roots
- `fs-the-root-space-decomposition-classifies-real-semisimple-lie-algebras-with-no-extra-data` · false-statement — Complex root data classify real semisimple Lie algebras without extra data
- `ex-diagonal-cartan-subalgebra-and-roots-of-sl-n` · example — Diagonal Cartan subalgebra and roots of sl_n

### `cartan-subalgebras-and-root-space-decompositions-examples` — Cartan Subalgebras and Root Space Decompositions — Examples (10 item(s))

- `ex-cartan-subalgebra-and-roots-of-sl-two` · example — The Cartan subalgebra and roots of sl₂
- `ex-root-space-brackets-for-matrix-units` · example — Root-space brackets for matrix units
- `ex-cartan-subalgebras-of-a-direct-sum` · example — Cartan subalgebras of a direct sum
- `ex-the-root-sl-two-triple-inside-sl-n` · example — A root sl₂ triple inside slₙ
- `ex-root-strings-in-type-a-two` · example — Root strings in type A₂
- `ex-root-systems-b-two-and-c-two-from-matrix-lie-algebras` · example — B₂ and C₂ from matrix Lie algebras
- `ex-regular-and-singular-diagonal-elements-of-sl-n` · example — Regular and singular diagonal elements of slₙ
- `cex-a-maximal-abelian-subalgebra-that-is-not-a-cartan-subalgebra-in-a-nonsemisimple-algebra` · counterexample — A maximal abelian subalgebra need not be Cartan
- `ex-weyl-reflection-in-sl-two` · example — The Weyl reflection in sl₂
- `ex-the-killing-form-identifies-roots-with-coroot-directions` · example — Killing form and coroot directions

### `root-systems-dynkin-diagrams-and-cartan-killing-classification` — Root Systems Dynkin Diagrams and Cartan Killing Classification (52 item(s))

- `def-reduced-crystallographic-euclidean-root-system` · definition — Reduced crystallographic Euclidean root system
- `def-rank-and-isomorphism-of-root-systems` · definition — Rank and isomorphism of root systems
- `def-coroot-and-dual-root-system` · definition — Coroot and dual root system
- `def-weyl-group-of-a-root-system` · definition — Weyl group
- `prop-the-weyl-group-is-finite-and-acts-faithfully-on-the-root-system` · proposition — The Weyl group is finite and faithful
- `def-reducible-and-irreducible-root-system` · definition — Reducible and irreducible root systems
- `prop-root-systems-decompose-uniquely-into-irreducible-components` · proposition — Unique irreducible decomposition
- `thm-rank-two-root-system-classification` · theorem — Rank-two root-system classification
- `def-positive-system-and-base-of-simple-roots` · definition — Positive systems and simple roots
- `thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates` · theorem — Simple roots form a signed integral basis
- `prop-distinct-simple-roots-have-nonpositive-inner-product` · proposition — Distinct simple roots have nonpositive inner product
- `def-height-of-a-root-and-highest-root` · definition — Height and highest root
- `prop-highest-root-exists-and-is-unique-in-an-irreducible-finite-root-system` · proposition — Existence and uniqueness of the highest root
- `def-root-lattice-coroot-lattice-weight-lattice-and-coweight-lattice` · definition — Root, coroot, weight, and coweight lattices
- `def-fundamental-weights` · definition — Fundamental weights
- `def-open-and-closed-weyl-chambers` · definition — Open and closed Weyl chambers
- `thm-the-weyl-group-acts-simply-transitively-on-weyl-chambers` · theorem — Simple transitivity on Weyl chambers
- `prop-every-positive-system-is-weyl-conjugate-and-bases-correspond-to-chambers` · proposition — Positive systems, bases, and chambers
- `def-length-and-longest-element-of-a-finite-weyl-group` · definition — Length and longest Weyl-group element
- `prop-weyl-length-equals-positive-root-inversion-number` · proposition — Weyl length equals the positive-root inversion number
- `def-cartan-matrix-of-a-based-root-system` · definition — Cartan matrix of a based root system
- `prop-finite-type-cartan-matrix-properties` · proposition — Finite-type Cartan-matrix properties
- `def-dynkin-diagram-with-edge-multiplicity-and-arrow-convention` · definition — Dynkin diagram and arrow convention
- `thm-a-based-root-system-is-determined-up-to-isomorphism-by-its-cartan-matrix` · theorem — The Cartan matrix determines the based root system
- `prop-irreducibility-corresponds-to-connectedness-of-the-dynkin-diagram` · proposition — Irreducibility and connected Dynkin diagrams
- `lem-dynkin-diagrams-of-irreducible-finite-root-systems-are-trees-with-controlled-branching` · lemma — Finite irreducible Dynkin diagrams are controlled trees
- `thm-classification-of-irreducible-reduced-crystallographic-root-systems` · theorem — Classification of irreducible reduced crystallographic root systems
- `thm-existence-of-each-classified-root-system` · theorem — Existence of every classified root system
- `prop-duality-exchanges-b-n-and-c-n-and-fixes-the-other-types` · proposition — Duality of irreducible types
- `def-free-lie-algebra-on-a-vector-space` · definition — Free Lie algebra on a vector space
- `thm-universal-property-of-the-free-lie-algebra` · theorem — Universal property of the free Lie algebra
- `def-lie-algebra-presented-by-generators-and-relations` · definition — Lie algebra presented by generators and relations
- `def-serre-lie-algebra-of-a-finite-type-cartan-matrix` · definition — Serre Lie algebra of finite type
- `thm-serre-presentation-theorem` · theorem — Serre presentation theorem
- `thm-isomorphism-theorem-for-complex-semisimple-lie-algebras` · theorem — Isomorphism theorem for complex semisimple Lie algebras
- `thm-existence-theorem-for-complex-semisimple-lie-algebras` · theorem — Existence theorem for complex semisimple Lie algebras
- `thm-cartan-killing-classification-of-complex-simple-lie-algebras` · theorem — Cartan–Killing classification of complex simple Lie algebras
- `cor-complex-semisimple-lie-algebras-are-classified-by-finite-disjoint-unions-of-dynkin-diagrams` · corollary — Classification of complex semisimple Lie algebras
- `def-classical-complex-matrix-lie-algebras` · definition — The classical complex matrix Lie algebras sp and so
- `prop-classical-matrix-lie-algebras-have-split-cartan-subalgebras` · proposition — The classical complex matrix Lie algebras have split Cartan subalgebras
- `prop-root-systems-of-the-classical-complex-lie-algebras` · proposition — Root systems of the classical complex Lie algebras
- `prop-classical-types-correspond-to-sl-so-and-sp` · proposition — Classical types correspond to sl, so, and sp
- `prop-dimensions-of-the-exceptional-simple-lie-algebras` · proposition — Dimensions of exceptional simple Lie algebras
- `rem-dynkin-diagrams-do-not-classify-global-lie-groups` · remark — Dynkin diagrams do not classify global Lie groups
- `fs-every-finite-reflection-invariant-set-of-vectors-is-a-crystallographic-root-system` · false-statement — Every finite reflection-invariant vector set is crystallographic
- `fs-simple-roots-are-pairwise-orthogonal` · false-statement — Simple roots are pairwise orthogonal
- `fs-every-connected-finite-graph-is-a-dynkin-diagram` · false-statement — Every connected finite graph is Dynkin
- `fs-b-n-and-c-n-are-isomorphic-root-systems-for-all-n` · false-statement — Bₙ and Cₙ are always isomorphic
- `fs-dynkin-diagrams-classify-all-real-semisimple-lie-algebras` · false-statement — Dynkin diagrams classify real semisimple Lie algebras
- `fs-two-connected-lie-groups-with-the-same-dynkin-diagram-are-isomorphic` · false-statement — The same Dynkin diagram forces isomorphic connected Lie groups
- `ex-classical-root-systems-in-euclidean-coordinates` · example — Classical root systems in coordinates
- `ex-weyl-groups-of-b-n-and-d-n-as-signed-permutation-groups` · example — Weyl groups of B_n and D_n

### `root-systems-dynkin-diagrams-and-cartan-killing-classification-examples` — Root Systems Dynkin Diagrams and Cartan Killing Classification — Examples (10 item(s))

- `ex-root-system-a-one` · example — The root system A₁
- `ex-root-systems-a-two-b-two-and-g-two` · example — Rank-two systems A₂, B₂, and G₂
- `ex-simple-roots-and-fundamental-weights-of-a-n` · example — Simple roots and fundamental weights of Aₙ
- `ex-weyl-group-of-a-n-is-the-symmetric-group` · example — The Weyl group of Aₙ is symmetric
- `ex-dynkin-diagram-duality-of-b-n-and-c-n` · example — Dynkin duality of Bₙ and Cₙ
- `ex-low-rank-dynkin-coincidences` · example — Low-rank Dynkin coincidences
- `ex-serre-relations-for-a-two-recover-sl-three` · example — Serre relations for A₂ recover sl₃
- `ex-positive-roots-and-highest-root-of-g-two` · example — Positive roots and highest root of G₂
- `cex-a-cycle-graph-fails-finite-type-positive-definiteness` · counterexample — A cycle graph is not finite type
- `cex-same-complex-lie-algebra-with-distinct-global-groups-sl-two-and-pgl-two` · counterexample — SL₂ and PGL₂ have the same Lie algebra but differ globally

### `highest-weight-theory-for-complex-semisimple-lie-algebras` — Highest Weight Theory for Complex Semisimple Lie Algebras (38 item(s))

- `prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system` · proposition — The roots form a reduced crystallographic Euclidean root system
- `def-weight-and-weight-space-of-a-lie-algebra-representation` · definition — Weight and weight space
- `prop-finite-dimensional-representations-of-a-complex-semisimple-lie-algebra-decompose-into-weight-spaces` · proposition — Finite-dimensional modules decompose into weight spaces
- `lem-simple-reflections-preserve-weight-multiplicities` · lemma — Simple reflections preserve weight multiplicities
- `prop-root-vectors-shift-weight-spaces` · proposition — Root vectors shift weights
- `def-positive-and-negative-nilpotent-subalgebras-and-borel-subalgebra` · definition — Positive and negative nilpotent subalgebras and the Borel
- `thm-triangular-decomposition-of-a-complex-semisimple-lie-algebra` · theorem — Triangular decomposition
- `def-partial-order-on-weights` · definition — Root order on weights
- `def-highest-weight-vector-and-highest-weight-module` · definition — Highest-weight vectors and modules
- `lem-highest-weight-modules-have-weights-below-the-top-weight` · lemma — Highest weight modules lie below the top weight
- `lem-every-finite-dimensional-irreducible-representation-has-a-highest-weight-vector` · lemma — Every finite-dimensional irreducible module has a highest-weight vector
- `prop-a-finite-dimensional-irreducible-module-is-generated-by-any-highest-weight-vector` · proposition — An irreducible module is generated by its highest-weight vector
- `prop-the-highest-weight-space-of-an-irreducible-module-is-one-dimensional` · proposition — The highest-weight space is one-dimensional
- `def-integral-dominant-and-strictly-dominant-weights` · definition — Integral, dominant, and strictly dominant weights
- `prop-dominant-integral-weights-are-nonnegative-combinations-of-fundamental-weights` · proposition — Dominant weights in fundamental coordinates
- `lem-highest-weight-of-a-finite-dimensional-module-is-dominant-integral` · lemma — Finite-dimensional highest weights are dominant integral
- `lem-integrability-relations-for-a-dominant-highest-weight` · lemma — Simple-root integrability relations
- `def-dominant-integrable-highest-weight-cyclic-module` · definition — Dominant integrable cyclic highest-weight module
- `lem-pbw-shows-the-dominant-cyclic-highest-weight-generator-survives` · lemma — The dominant cyclic generator survives
- `lem-simple-root-integrability-bounds-the-dominant-cyclic-module` · lemma — Simple-root integrability bounds the dominant cyclic module
- `lem-a-dominant-cyclic-highest-weight-module-has-a-unique-simple-quotient` · lemma — Unique simple quotient of the dominant cyclic module
- `thm-finite-dimensionality-of-lambda-highest-weight-simple-modules-for-dominant-integral-lambda` · theorem — Dominant simple highest-weight modules are finite-dimensional
- `thm-simple-highest-weight-modules-are-classified-by-their-highest-weight` · theorem — Simple highest-weight modules are classified by highest weight
- `thm-highest-weight-classification-of-finite-dimensional-irreducible-representations` · theorem — Highest-weight classification
- `cor-every-finite-dimensional-representation-is-a-direct-sum-of-highest-weight-modules` · corollary — Every finite-dimensional module is a direct sum of highest-weight modules
- `prop-highest-weight-of-the-dual-representation` · proposition — Highest weight of the dual representation
- `prop-top-highest-weight-summand-in-a-tensor-product` · proposition — Top summand in a tensor product
- `prop-the-adjoint-representation-has-highest-weight-the-highest-root` · proposition — The adjoint highest weight is the highest root
- `def-weyl-vector-rho` · definition — The Weyl vector
- `prop-weyl-vector-is-the-sum-of-fundamental-weights` · proposition — The Weyl vector in fundamental coordinates
- `prop-weyl-orbit-of-the-highest-weight-gives-extremal-weights-with-multiplicity-one` · proposition — Extremal Weyl-orbit weights
- `rem-harish-chandra-isomorphism-and-category-o` · remark — Beyond finite-dimensional highest-weight theory
- `fs-every-weight-vector-is-a-highest-weight-vector` · false-statement — Not every weight vector is highest
- `fs-every-verma-module-is-finite-dimensional` · false-statement — Verma modules need not be finite-dimensional
- `fs-every-highest-weight-lambda-gives-a-finite-dimensional-simple-module` · false-statement — Finite-dimensionality requires dominance integrality
- `fs-dominance-is-defined-without-choosing-positive-roots` · false-statement — Dominance depends on a positive system
- `fs-the-highest-weight-of-a-tensor-product-determines-its-complete-irreducible-decomposition` · false-statement — A tensor-product top weight does not determine all constituents
- `fs-the-weyl-character-formula-is-an-ordinary-quotient-of-functions-before-formal-cancellation-is-justified` · false-statement — The Weyl quotient requires cancellation or extension

### `highest-weight-theory-for-complex-semisimple-lie-algebras-examples` — Highest Weight Theory for Complex Semisimple Lie Algebras — Examples (11 item(s))

- `ex-all-finite-dimensional-irreducible-sl-two-modules` · example — All irreducible finite-dimensional sl2 modules
- `ex-verma-modules-for-sl-two` · example — Verma modules for sl2
- `ex-standard-and-dual-representations-of-sl-n-by-highest-weights` · example — Standard and dual representations of sl_n
- `ex-symmetric-powers-as-highest-weight-modules` · example — Symmetric powers as highest-weight modules
- `ex-exterior-powers-and-fundamental-weights-of-sl-n` · example — Exterior powers and fundamental weights of sl_n
- `ex-the-adjoint-representation-and-the-highest-root` · example — The adjoint representation and highest root
- `ex-weyl-character-and-dimension-formulas-for-sl-two` · example — Weyl character and dimension formulas for sl2
- `ex-the-eight-dimensional-adjoint-representation-of-sl-three` · example — The eight-dimensional adjoint representation of sl3
- `ex-a-tensor-product-decomposition-for-sl-two` · example — Clebsch–Gordan decomposition for sl2
- `cex-a-nondominant-integral-verma-quotient-that-is-infinite-dimensional` · counterexample — A nondominant integral highest-weight module can be infinite-dimensional
- `cex-the-full-weight-lattice-does-not-integrate-to-every-central-quotient-group` · counterexample — The full weight lattice need not integrate through a central quotient

### `compact-lie-groups-maximal-tori-and-peter-weyl-theory` — Compact Lie Groups Maximal Tori and Peter Weyl Theory (54 item(s))

- `def-left-right-and-bi-invariant-borel-measure-on-a-lie-group` · definition — Left, right, and bi-invariant Borel measures
- `cor-normalized-haar-measure-on-a-compact-lie-group` · corollary — Normalized Haar measure on a compact Lie group
- `prop-integration-against-haar-is-invariant-under-translations-and-conjugation` · proposition — Haar integration is translation and conjugation invariant
- `def-continuous-and-unitary-representation-of-a-compact-lie-group` · definition — Continuous and unitary representations
- `thm-every-finite-dimensional-continuous-representation-of-a-compact-lie-group-is-unitarizable` · theorem — Finite-dimensional compact-group representations are unitarizable
- `cor-complete-reducibility-for-compact-lie-groups` · corollary — Complete reducibility for compact Lie groups
- `def-matrix-coefficient-and-character-of-a-compact-group-representation` · definition — Matrix coefficients and characters
- `thm-schur-orthogonality-for-compact-lie-groups` · theorem — Schur orthogonality
- `cor-irreducible-characters-are-orthonormal-class-functions` · corollary — Irreducible characters are orthonormal class functions
- `prop-compact-lie-groups-admit-bi-invariant-riemannian-metrics` · proposition — Compact Lie groups admit bi-invariant metrics
- `def-torus-and-maximal-torus-in-a-compact-lie-group` · definition — Tori and maximal tori
- `thm-structure-of-a-compact-connected-abelian-lie-group` · theorem — Structure of compact connected abelian Lie groups
- `thm-maximal-tori-exist-in-compact-lie-groups` · theorem — Existence of maximal tori
- `thm-every-element-of-a-compact-connected-lie-group-lies-in-a-maximal-torus` · theorem — Every element lies in a maximal torus
- `thm-conjugacy-of-maximal-tori` · theorem — Conjugacy of maximal tori
- `cor-every-compact-connected-abelian-subgroup-is-contained-in-a-maximal-torus` · corollary — Connected abelian subgroups lie in maximal tori
- `cor-rank-of-a-compact-connected-lie-group-is-well-defined` · corollary — Rank is well-defined
- `def-weyl-group-of-a-compact-connected-lie-group` · definition — Compact Weyl group
- `thm-compact-group-weyl-group-is-finite` · theorem — The compact Weyl group is finite
- `prop-conjugacy-classes-meet-a-fixed-maximal-torus-in-weyl-orbits` · proposition — Conjugacy classes meet T in Weyl orbits
- `def-roots-of-a-compact-connected-lie-group` · definition — Roots of a compact connected Lie group
- `thm-compact-group-roots-form-a-reduced-crystallographic-root-system-on-the-semisimple-part` · theorem — Compact roots form a reduced crystallographic root system
- `thm-analytic-and-root-system-weyl-groups-agree` · theorem — Analytic and root-system Weyl groups agree
- `def-weyl-jacobian-on-a-maximal-torus` · definition — Weyl Jacobian
- `prop-weyl-jacobian-is-well-defined-and-weyl-invariant` · proposition — The Weyl Jacobian is independent and invariant
- `thm-weyl-integration-formula` · theorem — Weyl integration formula
- `def-character-and-cocharacter-lattices-of-a-torus` · definition — Character and cocharacter lattices
- `prop-differentiation-identifies-characters-with-the-integral-weight-lattice-of-t` · proposition — Characters are the integral weights
- `def-root-datum-of-a-compact-connected-lie-group` · definition — Root datum of a compact connected Lie group
- `prop-root-and-weight-lattice-sandwich-for-a-compact-semisimple-group` · proposition — Root and weight lattice sandwich
- `thm-compact-connected-semisimple-lie-groups-are-classified-up-to-isogeny-by-root-systems` · theorem — Semisimple compact groups up to isogeny
- `thm-compact-connected-lie-groups-are-classified-by-root-data` · theorem — Compact connected Lie groups are classified by root data
- `prop-central-quotients-correspond-to-intermediate-character-lattices` · proposition — Central quotients and intermediate character lattices
- `def-left-and-right-regular-unitary-representations-on-l-two-of-a-compact-lie-group` · definition — Left and right regular representations on L2(G)
- `def-convolution-operator-associated-to-a-continuous-function-on-a-compact-group` · definition — Convolution operators
- `lem-continuous-convolution-operators-are-hilbert-schmidt-and-compact` · lemma — Continuous convolution operators are Hilbert–Schmidt
- `lem-compact-convolution-operators-decompose-into-finite-dimensional-invariant-subspaces` · lemma — Spectral convolution eigenspaces are finite-dimensional and invariant
- `lem-compact-lie-groups-admit-central-continuous-approximate-identities` · lemma — Central continuous approximate identities
- `thm-peter-weyl-for-compact-lie-groups` · theorem — Peter–Weyl theorem
- `cor-matrix-coefficients-are-uniformly-dense-in-continuous-functions-on-a-compact-lie-group` · corollary — Matrix coefficients are uniformly dense in C(G)
- `cor-finite-dimensional-unitary-representations-separate-points-of-a-compact-lie-group` · corollary — Finite-dimensional representations separate points
- `cor-every-compact-lie-group-is-isomorphic-to-a-closed-matrix-lie-group` · corollary — Every compact Lie group is a closed matrix group
- `thm-highest-weight-classification-for-a-compact-connected-lie-group` · theorem — Highest weights for compact connected groups
- `prop-differentiation-relates-compact-group-and-complexified-lie-algebra-highest-weights` · proposition — Differentiation and integration of highest weights
- `lem-weyl-denominator-and-anti-invariant-orbit-sum-basis` · lemma — Weyl denominator and anti-invariant orbit sums
- `lem-weyl-orthogonality-identifies-the-highest-weight-character-numerator` · lemma — Orthogonality identifies the Weyl numerator
- `thm-weyl-character-formula-for-compact-connected-lie-groups` · theorem — Weyl character formula for compact connected groups
- `cor-representation-ring-has-the-dominant-character-basis` · corollary — Dominant characters form the representation-ring basis
- `fs-haar-measure-on-a-compact-group-is-only-left-invariant-not-right-invariant` · false-statement — Compact Haar measure is bi-invariant
- `fs-every-element-of-a-disconnected-compact-lie-group-lies-in-the-identity-components-maximal-torus` · false-statement — Disconnected elements need not lie in identity-component tori
- `fs-a-root-system-determines-a-compact-connected-semisimple-group-up-to-isomorphism` · false-statement — Root systems determine only isogeny class
- `fs-every-dominant-weight-of-the-abstract-weight-lattice-integrates-to-every-compact-group-form` · false-statement — Not every abstract dominant weight integrates
- `fs-peter-weyl-says-every-continuous-function-is-a-finite-sum-of-matrix-coefficients` · false-statement — Peter–Weyl gives density, not finite equality
- `fs-every-unitary-representation-of-a-compact-group-is-finite-dimensional` · false-statement — Compact groups have infinite-dimensional unitary representations

### `compact-lie-groups-maximal-tori-and-peter-weyl-theory-examples` — Compact Lie Groups Maximal Tori and Peter Weyl Theory — Examples (12 item(s))

- `ex-normalized-haar-measure-on-a-torus` · example — Normalized Haar measure on a torus
- `ex-maximal-tori-and-weyl-groups-of-u-n-and-su-n` · example — Maximal tori and Weyl groups of U(n) and SU(n)
- `ex-maximal-torus-and-weyl-group-of-so-three` · example — A maximal torus and Weyl group of SO(3)
- `ex-weyl-integration-formula-for-su-two` · example — Weyl integration for SU(2)
- `ex-character-lattices-of-su-two-and-so-three` · example — Character lattices of SU(2) and SO(3)
- `ex-simply-connected-adjoint-and-intermediate-forms-of-a-semisimple-compact-group` · example — Simply connected, adjoint, and intermediate compact forms
- `ex-fourier-series-on-a-torus-as-peter-weyl` · example — Fourier series on a torus as Peter–Weyl
- `ex-matrix-coefficients-of-the-standard-su-two-representation` · example — Matrix coefficients of the standard SU(2) representation
- `ex-schur-orthogonality-for-a-finite-group-as-a-zero-dimensional-compact-case` · example — Finite-group Schur orthogonality
- `cex-su-two-and-so-three-share-a-root-system-but-are-not-isomorphic` · counterexample — SU(2) and SO(3) share roots but are not isomorphic
- `cex-a-disconnected-compact-group-element-outside-every-identity-component-torus` · counterexample — A disconnected element outside every identity-component torus
- `ex-the-peter-weyl-decomposition-of-l-two-su-two` · example — Peter–Weyl decomposition of L2(SU(2))

### `real-forms-and-real-semisimple-lie-algebras` — Real Forms and Real Semisimple Lie Algebras (52 item(s))

- `def-complexification-of-a-real-lie-algebra` · definition — Complexification of a real lie algebra
- `prop-complexification-has-a-canonical-conjugation-with-fixed-algebra-g-zero` · proposition — Complexification has a canonical conjugation with fixed algebra g zero
- `def-real-form-of-a-complex-lie-algebra` · definition — Real form of a complex lie algebra
- `thm-real-forms-correspond-to-conjugate-linear-involutions` · theorem — Real forms correspond to conjugate linear involutions
- `prop-complexification-preserves-semisimplicity` · proposition — Complexification preserves semisimplicity
- `lem-chevalley-basis-and-real-structure-constants` · lemma — Chevalley basis and real structure constants
- `def-compact-real-form-of-a-complex-semisimple-lie-algebra` · definition — Compact real form of a complex semisimple lie algebra
- `thm-existence-of-a-compact-real-form` · theorem — Existence of a compact real form
- `thm-conjugacy-of-compact-real-forms` · theorem — Conjugacy of compact real forms
- `def-split-real-form` · definition — Split real form
- `thm-existence-and-uniqueness-up-to-isomorphism-of-the-split-real-form` · theorem — Existence and uniqueness up to isomorphism of the split real form
- `def-cartan-involution-of-a-real-semisimple-lie-algebra` · definition — Cartan involution of a real semisimple lie algebra
- `thm-existence-of-a-cartan-involution` · theorem — Existence of a cartan involution
- `thm-conjugacy-of-cartan-involutions` · theorem — Conjugacy of cartan involutions
- `def-cartan-decomposition-of-a-real-semisimple-lie-algebra` · definition — Cartan decomposition of a real semisimple lie algebra
- `prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition` · proposition — Bracket relations and killing signs in a cartan decomposition
- `thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group` · theorem — Global cartan decomposition for a connected finite center semisimple lie group
- `def-riemannian-symmetric-pair-of-noncompact-type` · definition — Riemannian symmetric pair of noncompact type
- `prop-cartan-decomposition-gives-the-invariant-metric-and-curvature-of-g-mod-k` · proposition — Cartan decomposition gives the invariant metric and curvature of g mod k
- `thm-cartan-decomposition-identifies-p-with-the-noncompact-symmetric-space` · theorem — Cartan decomposition identifies p with the noncompact symmetric space
- `cor-maximal-compact-subgroups-exist-and-are-conjugate-in-a-connected-finite-center-semisimple-lie-group` · corollary — Maximal compact subgroups exist and are conjugate in a connected finite center semisimple lie group
- `def-maximal-split-abelian-subspace-and-real-rank` · definition — Maximal split abelian subspace and real rank
- `thm-maximal-abelian-subspaces-of-p-are-conjugate-by-k` · theorem — Maximal abelian subspaces of p are conjugate by k
- `def-restricted-root-and-restricted-root-space` · definition — Restricted root and restricted root space
- `thm-restricted-root-space-decomposition` · theorem — Restricted root space decomposition
- `prop-restricted-root-systems-may-be-nonreduced` · proposition — Restricted root systems may be nonreduced
- `def-restricted-weyl-group` · definition — Restricted weyl group
- `thm-restricted-weyl-group-is-the-reflection-group-of-the-restricted-root-system` · theorem — Restricted weyl group is the reflection group of the restricted root system
- `def-positive-restricted-roots-and-nilpotent-n-algebra` · definition — Positive restricted roots and nilpotent n algebra
- `thm-iwasawa-decomposition-on-the-lie-algebra-level` · theorem — Iwasawa decomposition on the lie algebra level
- `thm-global-iwasawa-decomposition` · theorem — Global iwasawa decomposition
- `prop-uniqueness-and-change-of-positive-system-in-iwasawa-decomposition` · proposition — Uniqueness and change of positive system in iwasawa decomposition
- `def-theta-stable-cartan-subalgebra-and-compact-split-parts` · definition — Theta stable cartan subalgebra and compact split parts
- `thm-every-real-cartan-subalgebra-is-conjugate-to-a-theta-stable-one` · theorem — Every real cartan subalgebra is conjugate to a theta stable one
- `prop-real-cartan-subalgebras-need-not-be-conjugate` · proposition — Real cartan subalgebras need not be conjugate
- `def-cayley-transform-of-a-theta-stable-cartan-subalgebra` · definition — Cayley transform of a theta stable cartan subalgebra
- `thm-cayley-transforms-connect-theta-stable-cartans-in-the-classification` · theorem — Cayley transforms connect theta stable cartans in the classification
- `def-vogan-diagram` · definition — Vogan diagram
- `thm-vogan-diagram-of-a-real-semisimple-lie-algebra-is-well-defined-up-to-equivalence` · theorem — Vogan diagram of a real semisimple lie algebra is well defined up to equivalence
- `thm-classification-of-real-forms-by-vogan-diagrams` · theorem — Classification of real forms by vogan diagrams
- `def-satake-diagram` · definition — Satake diagram
- `thm-vogan-and-satake-diagrams-give-equivalent-real-form-classifications` · theorem — Vogan and satake diagrams give equivalent real form classifications
- `thm-complexification-dichotomy-for-a-real-simple-lie-algebra` · theorem — Complexification dichotomy for a real simple lie algebra
- `thm-classification-of-real-semisimple-lie-algebras` · theorem — Classification of real semisimple lie algebras
- `prop-classical-real-forms-of-the-classical-complex-lie-algebras` · proposition — Classical real forms of the classical complex lie algebras
- `rem-representation-theory-of-noncompact-real-reductive-groups` · remark — Representation theory of noncompact real reductive groups
- `fs-a-real-form-is-merely-the-same-complex-lie-algebra-with-scalars-forgotten` · false-statement — A real form is merely the same complex lie algebra with scalars forgotten
- `fs-all-real-forms-of-a-complex-semisimple-lie-algebra-are-isomorphic` · false-statement — All real forms of a complex semisimple lie algebra are isomorphic
- `fs-all-cartan-subalgebras-of-a-real-semisimple-lie-algebra-are-conjugate` · false-statement — All cartan subalgebras of a real semisimple lie algebra are conjugate
- `fs-restricted-root-systems-are-always-reduced` · false-statement — Restricted root systems are always reduced
- `fs-a-plain-dynkin-diagram-classifies-real-forms` · false-statement — A plain dynkin diagram classifies real forms
- `fs-global-cartan-and-iwasawa-decompositions-hold-for-every-nonlinear-cover-without-modified-k` · false-statement — Global cartan and iwasawa decompositions hold for every nonlinear cover without modified k

### `real-forms-and-real-semisimple-lie-algebras-examples` — Real Forms and Real Semisimple Lie Algebras — Examples (12 item(s))

- `ex-compact-and-split-real-forms-of-sl-two-c` · example — Compact and split real forms of sl two c
- `ex-cartan-involution-and-k-plus-p-for-sl-n-r` · example — Cartan involution and k plus p for sl n r
- `ex-polar-cartan-decomposition-of-sl-n-r` · example — Polar cartan decomposition of sl n r
- `ex-compact-and-split-cartan-subalgebras-of-sl-two-r` · example — Compact and split cartan subalgebras of sl two r
- `ex-iwasawa-decomposition-of-sl-two-r` · example — Iwasawa decomposition of sl two r
- `ex-restricted-roots-of-sl-n-r` · example — Restricted roots of sl n r
- `ex-a-nonreduced-bc-root-system-from-a-real-form` · example — A nonreduced bc root system from a real form
- `ex-vogan-diagrams-for-real-forms-of-sl-three-c` · example — Vogan diagrams for real forms of sl three c
- `ex-complex-simple-lie-algebra-viewed-as-a-real-simple-algebra` · example — Complex simple lie algebra viewed as a real simple algebra
- `cex-two-nonconjugate-real-cartan-subalgebras` · counterexample — Two nonconjugate real cartan subalgebras
- `cex-same-complexification-with-different-killing-form-signatures` · counterexample — Same complexification with different killing form signatures
- `ex-hyperbolic-space-as-so-zero-n-one-mod-so-n` · example — Hyperbolic space as so zero n one mod so n

### `moment-maps-and-symplectic-reduction` — Moment Maps and Symplectic Reduction (41 item(s))

- `def-coadjoint-representation-of-a-lie-group` · definition — The coadjoint representation, action and orbits
- `def-symplectic-and-hamiltonian-lie-group-action` · definition — Symplectic and hamiltonian lie group action
- `def-moment-map-and-component-hamiltonian` · definition — Moment map and component hamiltonian
- `prop-infinitesimal-generator-of-a-symplectic-action-is-symplectic` · proposition — Infinitesimal generator of a symplectic action is symplectic
- `prop-moment-map-components-generate-the-negative-infinitesimal-action` · proposition — Moment map components generate the negative infinitesimal action
- `prop-equivariance-is-equivalent-to-the-moment-map-poisson-bracket-identity` · proposition — Equivariance is equivalent to the moment map poisson bracket identity
- `lem-nonequivariance-defect-of-an-infinitesimal-moment-map-is-a-constant-lie-algebra-two-cocycle` · lemma — Nonequivariance defect of an infinitesimal moment map is a constant lie algebra two cocycle
- `prop-moment-maps-for-one-action-form-an-affine-space-over-coadjoint-fixed-covectors` · proposition — Moment maps for one action form an affine space over coadjoint fixed covectors
- `cor-semisimple-hamiltonian-actions-have-unique-equivariant-moment-map-when-one-exists` · corollary — Semisimple hamiltonian actions have unique equivariant moment map when one exists
- `prop-whitehead-two-removes-the-infinitesimal-equivariance-obstruction-for-semisimple-actions` · proposition — Whitehead two removes the infinitesimal equivariance obstruction for semisimple actions
- `thm-noether-conservation-law-for-hamiltonian-actions` · theorem — Noether conservation law for hamiltonian actions
- `prop-equivariant-symplectomorphisms-preserve-moment-maps-up-to-a-coadjoint-fixed-covector` · proposition — Equivariant symplectomorphisms preserve moment maps up to a coadjoint fixed covector
- `prop-cotangent-lift-is-hamiltonian-with-tautological-moment-map` · proposition — Cotangent lift is hamiltonian with tautological moment map
- `lem-tautological-cotangent-moment-map-is-equivariant` · lemma — Tautological cotangent moment map is equivariant
- `def-kirillov-kostant-souriau-form-on-a-coadjoint-orbit` · definition — Kirillov kostant souriau form on a coadjoint orbit
- `lem-kks-form-is-independent-of-lie-algebra-representatives` · lemma — Kks form is independent of lie algebra representatives
- `thm-coadjoint-orbits-are-symplectic-manifolds` · theorem — Coadjoint orbits are symplectic manifolds
- `prop-coadjoint-orbit-inclusion-is-an-equivariant-moment-map` · proposition — Coadjoint orbit inclusion is an equivariant moment map
- `prop-product-and-opposite-symplectic-moment-maps` · proposition — Product and opposite symplectic moment maps
- `lem-differential-of-the-moment-map-and-orbit-orthogonal-identity` · lemma — Differential of the moment map and orbit orthogonal identity
- `prop-regularity-of-a-moment-map-is-equivalent-to-local-freeness` · proposition — Regularity of a moment map is equivalent to local freeness
- `prop-moment-level-is-invariant-under-the-coadjoint-stabilizer` · proposition — Moment level is invariant under the coadjoint stabilizer
- `lem-characteristic-kernel-on-a-regular-moment-level` · lemma — Characteristic kernel on a regular moment level
- `lem-invariant-horizontal-form-on-a-free-proper-quotient-descends-uniquely` · lemma — Invariant horizontal form on a free proper quotient descends uniquely
- `thm-marsden-weinstein-meyer-symplectic-reduction` · theorem — Marsden weinstein meyer symplectic reduction
- `cor-zero-level-symplectic-reduction-and-dimension-formula` · corollary — Zero level symplectic reduction and dimension formula
- `prop-dimension-of-a-regular-nonzero-reduced-space` · proposition — Dimension of a regular nonzero reduced space
- `prop-invariant-hamiltonians-descend-to-reduced-hamiltonians` · proposition — Invariant hamiltonians descend to reduced hamiltonians
- `prop-reduction-commutes-with-products` · proposition — Reduction commutes with products
- `thm-reduction-in-stages-for-free-proper-regular-actions` · theorem — Reduction in stages for free proper regular actions
- `prop-shifting-trick-identifies-reduction-at-alpha-with-zero-reduction` · proposition — Shifting trick identifies reduction at alpha with zero reduction
- `prop-compact-group-symplectic-actions-admit-an-invariant-compatible-almost-complex-structure` · proposition — Compact group symplectic actions admit an invariant compatible almost complex structure
- `prop-compact-group-moment-map-can-be-averaged-to-an-equivariant-one-when-the-affine-obstruction-vanishes` · proposition — Compact group moment map can be averaged to an equivariant one when the affine obstruction vanishes
- `rem-nonregular-or-nonfree-symplectic-quotients-need-not-be-manifolds` · remark — Nonregular or nonfree symplectic quotients need not be manifolds
- `rem-convexity-and-toric-classification-for-hamiltonian-torus-actions` · remark — Convexity and toric classification for hamiltonian torus actions
- `fs-every-symplectic-action-is-hamiltonian` · false-statement — Every symplectic action is hamiltonian
- `fs-an-infinitesimal-moment-map-is-automatically-equivariant` · false-statement — An infinitesimal moment map is automatically equivariant
- `fs-moment-maps-are-unique-without-normalization` · false-statement — Moment maps are unique without normalization
- `fs-the-cotangent-lift-moment-map-has-a-plus-sign-under-the-library-fundamental-field-convention` · false-statement — The cotangent lift moment map has a plus sign under the library fundamental field convention
- `fs-every-value-of-a-moment-map-gives-a-smooth-symplectic-quotient` · false-statement — Every value of a moment map gives a smooth symplectic quotient
- `fs-the-general-reduced-dimension-is-dim-m-minus-two-dim-g` · false-statement — The general reduced dimension is dim m minus two dim g

### `moment-maps-and-symplectic-reduction-examples` — Moment Maps and Symplectic Reduction — Examples (12 item(s))

- `ex-circle-rotation-on-complex-n-space-and-its-quadratic-moment-map` · example — Circle rotation on complex n space and its quadratic moment map
- `ex-complex-projective-space-as-a-circle-symplectic-reduction` · example — Complex projective space as a circle symplectic reduction
- `ex-weighted-circle-actions-and-weighted-projective-singular-quotients` · example — Weighted circle actions and weighted projective singular quotients
- `ex-angular-momentum-as-the-moment-map-for-rotations-of-a-cotangent-bundle` · example — Angular momentum as the moment map for rotations of a cotangent bundle
- `ex-cotangent-reduction-for-a-principal-bundle-at-zero` · example — Cotangent reduction for a principal bundle at zero
- `ex-two-sphere-as-a-coadjoint-orbit-of-so-three` · example — Two sphere as a coadjoint orbit of so three
- `ex-grassmannians-from-unitary-symplectic-reduction` · example — Grassmannians from unitary symplectic reduction
- `ex-diagonal-action-and-addition-of-angular-momenta` · example — Diagonal action and addition of angular momenta
- `ex-shifting-trick-for-a-nonzero-coadjoint-orbit` · example — Shifting trick for a nonzero coadjoint orbit
- `ex-reduced-harmonic-oscillator-flow-on-projective-space` · example — Reduced harmonic oscillator flow on projective space
- `cex-irrational-flow-on-a-symplectic-torus-is-symplectic-but-not-hamiltonian` · counterexample — Irrational flow on a symplectic torus is symplectic but not hamiltonian
- `cex-zero-angular-momentum-level-with-nonfree-points-is-singular` · counterexample — Zero angular momentum level with nonfree points is singular

## Your seams

Your pages depend on another group's:

- `compact-lie-groups-maximal-tori-and-peter-weyl-theory` requires `hilbert-space-geometry-and-riesz-representation` (group c, batch 1)
- `compact-lie-groups-maximal-tori-and-peter-weyl-theory` requires `orthonormal-bases-parseval-and-fourier-series` (group c, batch 1)
- `compact-lie-groups-maximal-tori-and-peter-weyl-theory` requires `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators` (group e, batch 3)

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-6 reader warnings

12 warning(s) a Step-6 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-d1d94383483c8b5b570d7e11 · `thm-root-sl-two-triple`** (from group a, would-be-fatal) — Fact [L2] states '[x,y] = -B(x,y)H_alpha' for x in g_alpha, y in g_{-alpha}. With the library's own definitions and its own sl_2 data this is false: B(h,h)=8 gives H_alpha=h/4 and B(e,f)=4, while [e,f]=h, so [e,f]=+B(e,f)H_alpha. Step 1.1 then chooses f with B(e,f)=-2/alpha(H_alpha), which under the true identity yields [e,f]=-h_alpha, not h_alpha; the theorem's conclusion is true (take the opposite sign of f), but the stated fact and the displayed construction are wrong as written.
- **s8a-504d6f91bba7d13a5818352d · `prop-bracket-of-opposite-root-spaces-is-the-root-line-in-the-cartan-subalgebra`** (from group a, gap-a-reader-closes) — Step 1.1 misapplies invariance: from B([e,f],H) = B(e,[f,H]) (not B(e,[H,f])) and [f,H]=alpha(H)f one gets B([e,f],H)=+alpha(H)B(e,f), hence [e,f]=+B(e,f)H_alpha. The identity actually derived, [e,f]=-B(e,f)H_alpha, is false. The item's own statement ([g_alpha,g_{-alpha}]=C H_alpha) still holds, since the bracket is a nonzero multiple of H_alpha; the repair is a one-line sign flip (same convention issue as thm-root-sl-two-triple, and def-cayley-transform-of-a-theta-stable-cartan-subalgebra uses the correct + sign).
- **s8a-8a04705b005451a70517e6fa · `lem-killing-length-of-a-root-is-nonzero`** (from group a, gap-a-reader-closes) — Step 1.1 imports the wrong-sign version of the root-space identity (z=-B(e,f)H_alpha, alpha(z)=-B(e,f)alpha(H_alpha)) from the item above. The conclusion B(H_alpha,H_alpha)=alpha(H_alpha) nonzero is unaffected, because the argument only uses z nonzero, alpha(z) proportional to alpha(H_alpha), and the case alpha(H_alpha)=0; a reader repairs the sign in seconds.
- **s8a-ca3e35230c0f4eba4b54efcc · `thm-rank-two-root-system-classification`** (from group a, would-be-fatal) — Statement (i) lists the unequal-length Cartan pairs transposed: with |alpha|>=|beta| and the item's own definition n_{alpha beta}=2(beta,alpha)/(alpha,alpha), n_{beta alpha}=2(alpha,beta)/(beta,beta), one has |n_{alpha beta}|/|n_{beta alpha}|=|beta|^2/|alpha|^2, so for |alpha|^2=2|beta|^2 the pair is (1,2) (and (-1,-2) at 135 degrees), and for |alpha|^2=3|beta|^2 it is (1,3) ((-1,-3) at 150 degrees), not (2,1), (-2,-1), (3,1), (-3,-1) as printed. The item's own steps 1.2 and 2.1 derive the correct values (|n_{alpha beta}|=1, |n_{beta alpha}|=2 or 3), so the hypothesis section and the statement conflict; e.g. in B_2 with long alpha=eps_1+eps_2 and short beta=eps_1 (45 degrees) one computes n_{alpha beta}=1, n_{beta alpha}=2.
- **s8a-95c9c72fdb655c4bbe61b22b · `ex-root-strings-in-type-a-two`** (from group a, would-be-fatal) — The closing sentence asserts that the alpha-string through alpha is {-alpha,0,alpha} 'so p=q=1 and p-q=0 ... consistent with ... p-q=0 for beta=alpha'. Under the cited thm-root-string-property the index set for beta=alpha is {-2,-1,0}, so p=2, q=0 (p-q=0 is also inconsistent with p-q=beta(h_alpha)=alpha(h_alpha)=2, which the same sentence states). The set {-alpha,0,alpha} is right; the (p,q) labelling and the 'consistent' clause are wrong.
- **s8a-4454bbe082772fc44e0e7520 · `cor-complete-reducibility-for-compact-lie-groups`** (from group a, gap-a-reader-closes) — Fact [L3] cites def-real-and-complex-inner-product-space for 'dim W-perp = dim V - dim W for a subspace of a finite-dimensional inner-product space' and for '0 is the direct sum of the empty family'. The cited definition states neither; the orthogonal complement and its dimension formula are stated elsewhere on the cited page (def-orthogonality-and-orthogonal-complement / thm-orthogonal-decomposition-by-a-closed-subspace). Citation over-attribution; the mathematics is unaffected.
- **s8a-32a5894c99c2e337c193ecbd · `thm-peter-weyl-for-compact-lie-groups`** (from group a, gap-a-reader-closes) — Fact [L5] bundles 'a proper closed subspace has nonzero orthogonal complement' under a citation of thm-hilbert-space-fourier-expansion; that item's statement contains only the finite-subset-net convergence, coefficient uniqueness and countable-support claims, not the orthocomplement statement. The convergence half is quoted faithfully; the second half is attributed to an item that does not contain it (see seam report).
- **s8a-957adcaa2f669c513daa2534 · `thm-structure-of-a-compact-connected-abelian-lie-group`** (from group a, presentation) — Fact [L3] cites def-the-one-dimensional-torus-and-normalized-haar-integral for 'the circle group is S^1=R/Z with its Lie-group structure'. That definition constructs R/Z as a compact Hausdorff topological group with normalized Haar measure and notes it is homeomorphic to the Euclidean circle, but does not state a Lie-group (smooth) structure claim; the smooth structure and the identification with the circle as a Lie group are not contained in the cited item.
- **s8a-0c4f5daa7b7ad293b0e3bfbd · `prop-restricted-root-systems-may-be-nonreduced`** (from group a, presentation) — Part (a) concludes 'Thus Sigma is a finite abstract root system in a* with the reflections s_lambda realised inside N_K(a)'. The library's root-system notion (def-reduced-crystallographic-euclidean-root-system) requires reducedness, which Sigma need not satisfy (as the same item proves in (b)), and 'abstract root system' is not a defined library notion; readers should be told the phrase is used in the non-reduced axiomatic sense only.
- **s8a-6620c22509cb5bf85dd67ba3 · `thm-classification-of-real-forms-by-vogan-diagrams`** (from group a, presentation) — Reading-depth disclosure, not an asserted defect: this item's 16-step existence/uniqueness proof (and the long constructive proofs of thm-serre-presentation-theorem and the Weyl character/denominator items) were read at statement and facts level in this pass, together with their cited statements; their internal case analyses were not re-derived, so no defect is asserted there and none is excluded. Everything I do assert above rests on the full texts I read.
- **s8a-912c4448ec9268d07012201a · `thm-peter-weyl-for-compact-lie-groups`** (from group c, gap-a-reader-closes) — Fact [L5] states: 'In a Hilbert space, the finite-subset net of coefficients along a complete orthonormal family converges to the vector, and a proper closed subspace has nonzero orthogonal complement ([[thm-hilbert-space-fourier-expansion]])'. The cited item states only expansion, coefficient uniqueness and unconditional convergence for a complete orthonormal family; it does not contain the second assertion, which is a consequence of thm-orthogonal-decomposition-by-a-closed-subspace (also on the required geometry page, not of the cited Fourier-expansion item).
- **s8a-86041504bf6d2fcc5e6f5825 · `thm-structure-of-a-compact-connected-abelian-lie-group`** (from group c, presentation) — Fact [L3] states 'The circle group is S^1 = R/Z with its Lie-group structure' citing ([[def-the-one-dimensional-torus-and-normalized-haar-integral]]). That item constructs R/Z as a compact Hausdorff topological group with the normalized Haar measure and shows a homeomorphism onto the Euclidean circle; it does not construct a smooth (Lie-group) structure, so the smooth structure is attributed to a supplier that does not provide it.

Append one owning-group disposition per warning to `research/phase-2-remaining-27-step7-alert-decisions.jsonl`.
A Step-6 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-7 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

| item | page | model | context_sha256 |
|---|---|---|---|
| `cex-a-nondominant-integral-verma-quotient-that-is-infinite-dimensional` | `highest-weight-theory-for-complex-semisimple-lie-algebras-examples` | gpt-5.6-terra | `76a57f1ce746158ce25f48e4901fd2f9da4a6a0ea515268ae527f63b35e0b6f9` |
| `cex-irrational-flow-on-a-symplectic-torus-is-symplectic-but-not-hamiltonian` | `moment-maps-and-symplectic-reduction-examples` | gpt-5.6-terra | `0cb39ad5773fe7c322aae5c501eac7f3ff4aa40fefbcf65583c008695897b495` |
| `cex-same-complex-lie-algebra-with-distinct-global-groups-sl-two-and-pgl-two` | `root-systems-dynkin-diagrams-and-cartan-killing-classification-examples` | gpt-5.6-terra | `9f1636a636381831be51f9b50517b9dd3567f48b853338300495cec800b35d97` |
| `cex-su-two-and-so-three-share-a-root-system-but-are-not-isomorphic` | `compact-lie-groups-maximal-tori-and-peter-weyl-theory-examples` | gpt-5.6-terra | `99768d680ec6ded7d92e0cdb7d927e4f69990ca68c3373a05ec97cb5967c5ce6` |
| `cor-complete-reducibility-for-compact-lie-groups` | `compact-lie-groups-maximal-tori-and-peter-weyl-theory` | gpt-5.6-terra | `a48cd253ceea89d548060985ccd37e3b6f3ded332d8f563bd53aa957ddbce3ec` |
| `cor-complex-semisimple-lie-algebras-are-classified-by-finite-disjoint-unions-of-dynkin-diagrams` | `root-systems-dynkin-diagrams-and-cartan-killing-classification` | gpt-5.6-terra | `7f5d8fd532d65a63a568fd9e3ef50571667683a220a75e2e13563e4868743c6f` |
| `cor-every-compact-connected-abelian-subgroup-is-contained-in-a-maximal-torus` | `compact-lie-groups-maximal-tori-and-peter-weyl-theory` | gpt-5.6-terra | `7e4fecff4df3cb3014c2f929760d94621397e8c68732c4ae4f094438dd2a769b` |
| `cor-every-compact-lie-group-is-isomorphic-to-a-closed-matrix-lie-group` | `compact-lie-groups-maximal-tori-and-peter-weyl-theory` | gpt-5.6-terra | `cb6de8e901ff03e4addafc7e424e3743b9e1fb88537f1ab922cb632ef5c77dba` |
| `cor-every-finite-dimensional-representation-is-a-direct-sum-of-highest-weight-modules` | `highest-weight-theory-for-complex-semisimple-lie-algebras` | gpt-5.6-terra | `069db1e83ed05724e12debd992593e92186252e4ff138395358cbc43ca31784a` |
| `cor-finite-dimensional-unitary-representations-separate-points-of-a-compact-lie-group` | `compact-lie-groups-maximal-tori-and-peter-weyl-theory` | gpt-5.6-terra | `29bd7fe2a2dabcf5e446063b14cce067c85aaf4538ba65e2dda53f52b82105fa` |
| `cor-matrix-coefficients-are-uniformly-dense-in-continuous-functions-on-a-compact-lie-group` | `compact-lie-groups-maximal-tori-and-peter-weyl-theory` | gpt-5.6-terra | `03957051092b8f5abf9eb179886b7d209e90eea12206c45c5a0769213ade7d27` |
| `cor-maximal-compact-subgroups-exist-and-are-conjugate-in-a-connected-finite-center-semisimple-lie-group` | `real-forms-and-real-semisimple-lie-algebras` | gpt-5.6-terra | `2642d81e7ed1cb8a61ce5ef3abd35da40866caaeb80582419fa48cb12ad8c74d` |
| `cor-normalized-haar-measure-on-a-compact-lie-group` | `compact-lie-groups-maximal-tori-and-peter-weyl-theory` | gpt-5.6-terra | `7d89981133e44ba3339c60a88758a1746c1a308a8885d3d98c1fb30d8de68cd7` |
| `cor-opposite-root-spaces-pair-nondegenerately` | `cartan-subalgebras-and-root-space-decompositions` | gpt-5.6-terra | `5ea66c523908ea02d3ea172e6f53128281069a35a95ff8031422715f30fc277f` |
| `cor-rank-of-a-compact-connected-lie-group-is-well-defined` | `compact-lie-groups-maximal-tori-and-peter-weyl-theory` | gpt-5.6-terra | `89b9f62ee36eb50d817df6a49a6b63ee9bf8a171ab3f49ddd4b232fb09ed796b` |
| `cor-regular-elements-form-a-dense-zariski-open-subset-of-a-cartan-subalgebra` | `cartan-subalgebras-and-root-space-decompositions` | gpt-5.6-terra | `6d6bc466d59e789f82133ee4382108c557d423772e1edf78518488bbc919b0b9` |
| `cor-representation-ring-has-the-dominant-character-basis` | `compact-lie-groups-maximal-tori-and-peter-weyl-theory` | gpt-5.6-terra | `351ff471f399da3b0aad3548b8d81ab9494a5d14db3b23ed5f398c8e6a3e8395` |
| `cor-the-only-scalar-multiples-of-a-root-that-are-roots-are-plus-or-minus-the-root` | `cartan-subalgebras-and-root-space-decompositions` | gpt-5.6-terra | `a1cf052e9b9bf47c8fd96a32242470b3a126bffa5f80180aa0182051a3f81898` |
| `cor-zero-level-symplectic-reduction-and-dimension-formula` | `moment-maps-and-symplectic-reduction` | gpt-5.6-terra | `2a3845cb3ba97bfc2f6d3129b24c94350d2465a2346bd16136368f002e572623` |
| `def-cartan-subalgebra-of-a-lie-algebra` | `cartan-subalgebras-and-root-space-decompositions` | gpt-5.6-terra | `f15116d62a5024a096510bfa613c328e0e306f5453434e45d870c1729e733d96` |
| `def-character-and-cocharacter-lattices-of-a-torus` | `compact-lie-groups-maximal-tori-and-peter-weyl-theory` | gpt-5.6-terra | `0259c6885e7fa5fa28b4580434fb38cfcd4abaa946d08dfe9f3fd7b0286a3d8d` |
| `def-classical-complex-matrix-lie-algebras` | `root-systems-dynkin-diagrams-and-cartan-killing-classification` | gpt-5.6-terra | `fccbebff70ead3d4262aacda8843383a031625b49853e0003c48277f16fa4407` |
| `def-coadjoint-representation-of-a-lie-group` | `moment-maps-and-symplectic-reduction` | gpt-5.6-terra | `841ba6a99018430c2ddbcfcf2bcf95ec016b7161ee6757c1ec37f5e6c579e661` |
| `def-continuous-and-unitary-representation-of-a-compact-lie-group` | `compact-lie-groups-maximal-tori-and-peter-weyl-theory` | gpt-5.6-terra | `5b0e9915a8995e864625bb61b79caca05fbe73853b5ea53cd90ec0b847db5559` |
| `def-convolution-operator-associated-to-a-continuous-function-on-a-compact-group` | `compact-lie-groups-maximal-tori-and-peter-weyl-theory` | gpt-5.6-terra | `7b0258aaf781b2f25f33abcd26f8973e52afe2265b8103ea748be05d069611cb` |
| `def-dominant-integrable-highest-weight-cyclic-module` | `highest-weight-theory-for-complex-semisimple-lie-algebras` | gpt-5.6-terra | `dc8837d6f28800e5292847ca38c8e72cf9fc7065ef7a3dfa6a8d52db3e4dc85f` |
| `def-free-lie-algebra-on-a-vector-space` | `root-systems-dynkin-diagrams-and-cartan-killing-classification` | gpt-5.6-terra | `bf997cf85a903685577eea1cdd3499362ea85efa567ce8bb4f277df0373a3de8` |
| `def-integral-dominant-and-strictly-dominant-weights` | `highest-weight-theory-for-complex-semisimple-lie-algebras` | gpt-5.6-terra | `b92f277446500f972b1140657c5bae9ee50a4b017810b0320f042bcdf2f03389` |
| `def-left-and-right-regular-unitary-representations-on-l-two-of-a-compact-lie-group` | `compact-lie-groups-maximal-tori-and-peter-weyl-theory` | gpt-5.6-terra | `c195c083e481837db431977b4715759777368989d8dbaa901a64540a61b1aace` |
| `def-maximal-split-abelian-subspace-and-real-rank` | `real-forms-and-real-semisimple-lie-algebras` | gpt-5.6-terra | `65a38c643bacda5c00740e379c26c776790437a593e8c2e0e2478de355c20e80` |
| `def-open-and-closed-weyl-chambers` | `root-systems-dynkin-diagrams-and-cartan-killing-classification` | gpt-5.6-terra | `fcad319af404676454e8f24e826632ea8f99e7cd11352c47b5f29a444df4842b` |
| `def-partial-order-on-weights` | `highest-weight-theory-for-complex-semisimple-lie-algebras` | gpt-5.6-terra | `bb5f25dad04b0bf2a3eec3345be4760b2921f81c3fe26bad040c129d98078a10` |
| `def-positive-and-negative-nilpotent-subalgebras-and-borel-subalgebra` | `highest-weight-theory-for-complex-semisimple-lie-algebras` | gpt-5.6-terra | `7ae8a7c70a90feafea33e2883e5e14067a15acaa9c47b72fb86f454ced385233` |
| `def-positive-restricted-roots-and-nilpotent-n-algebra` | `real-forms-and-real-semisimple-lie-algebras` | gpt-5.6-terra | `8c6f11654162732414f254fdd67698978360671e624abaa29b92ef33725316aa` |
| `def-reducible-and-irreducible-root-system` | `root-systems-dynkin-diagrams-and-cartan-killing-classification` | gpt-5.6-terra | `c991b7e3d5368909cf58c2a9e2100ad756ac36daa5e5f0c58115072117f9c6b8` |
| `def-riemannian-symmetric-pair-of-noncompact-type` | `real-forms-and-real-semisimple-lie-algebras` | gpt-5.6-terra | `d3690e0fee9cb79119897f0f0ccf7617b36133221c19cde5d194b5e5d03adf72` |
| `def-root-and-root-space-relative-to-a-cartan-subalgebra` | `cartan-subalgebras-and-root-space-decompositions` | gpt-5.6-terra | `c8a6b0eb9deb7846ee47983ae6729c5f38447c3d7a9a81acddd8cbe63c660314` |
| `def-root-datum-of-a-compact-connected-lie-group` | `compact-lie-groups-maximal-tori-and-peter-weyl-theory` | gpt-5.6-terra | `197f87ab2aeccc8fa27e79444654daae74fffe42f25041359217fe741bde9e05` |
| `def-roots-of-a-compact-connected-lie-group` | `compact-lie-groups-maximal-tori-and-peter-weyl-theory` | gpt-5.6-terra | `f9d497d4d5f9aa75a973346d164464ab421e2eae1e2a490426836e1035c6d9a3` |
| `def-satake-diagram` | `real-forms-and-real-semisimple-lie-algebras` | gpt-5.6-terra | `2a82d22767b06352a7896ce25b32e53ba2462b45b967608d0c359ee4a45963c6` |
| `def-theta-stable-cartan-subalgebra-and-compact-split-parts` | `real-forms-and-real-semisimple-lie-algebras` | gpt-5.6-terra | `d3a939ba5722f6cda1aac157387e60c9f4b63f26612a6b1fa7bceb02af520ada` |
| `def-toral-and-maximal-toral-subalgebra` | `cartan-subalgebras-and-root-space-decompositions` | gpt-5.6-terra | `8976edfb0f9f297a792b965642fe4f496d4955969f0b3d06763f5cc70f27623a` |
| `def-torus-and-maximal-torus-in-a-compact-lie-group` | `compact-lie-groups-maximal-tori-and-peter-weyl-theory` | gpt-5.6-terra | `616b13eac21f227723931e5c2b4f367a0f3903b61fe7826984ffab27e4227860` |
| `def-vogan-diagram` | `real-forms-and-real-semisimple-lie-algebras` | gpt-5.6-terra | `895f676c0361e71fc6c687de60402f6be7dfe17dd1d5eba1713fa9a0b9a50166` |
| `def-weyl-group-of-a-compact-connected-lie-group` | `compact-lie-groups-maximal-tori-and-peter-weyl-theory` | gpt-5.6-terra | `2d59850b20aba48e1887d975c64be1384631ffba7e4bb9a038cec27807224b2f` |
| `def-weyl-vector-rho` | `highest-weight-theory-for-complex-semisimple-lie-algebras` | gpt-5.6-terra | `213f1abb0b7353e3351765e30d5ee0f298ee4cae3727576cdefb416baaf2bb76` |
| `ex-a-nonreduced-bc-root-system-from-a-real-form` | `real-forms-and-real-semisimple-lie-algebras-examples` | gpt-5.6-terra | `0eee91f29f39fb0e7920e8054dfd10ed4adb656caeea255d06473650387ad3a8` |
| `ex-a-tensor-product-decomposition-for-sl-two` | `highest-weight-theory-for-complex-semisimple-lie-algebras-examples` | gpt-5.6-terra | `083c8d68e1623700cfdaef7b762aea536e5402f690a8ab4a1a1414d57dbc2ef2` |
| `ex-angular-momentum-as-the-moment-map-for-rotations-of-a-cotangent-bundle` | `moment-maps-and-symplectic-reduction-examples` | gpt-5.6-terra | `fc096ac24e0d7ebf0f15a80c96def11bf65b111a11f6f61e444c22c42586c7ed` |
| `ex-cartan-involution-and-k-plus-p-for-sl-n-r` | `real-forms-and-real-semisimple-lie-algebras-examples` | gpt-5.6-terra | `1ff4f0064d9bb65bbab1f857812f4bde36b1ad909784ac77036cc239cb98b333` |
| `ex-cartan-subalgebra-and-roots-of-sl-two` | `cartan-subalgebras-and-root-space-decompositions-examples` | gpt-5.6-terra | `b0f915671491fce7eec25c5cb665d77b2b9bf18029a27912e557832716993fa3` |
| `ex-cartan-subalgebras-of-a-direct-sum` | `cartan-subalgebras-and-root-space-decompositions-examples` | gpt-5.6-terra | `1bca1409802ec2f832291ae2e2ce6be53974cd1660936f216dd9b1a8d3448e64` |
| `ex-circle-rotation-on-complex-n-space-and-its-quadratic-moment-map` | `moment-maps-and-symplectic-reduction-examples` | gpt-5.6-terra | `5b51552367eadd71a4df9a6652864e58c2b36aa6c4eca2f294be72138e24d1d5` |
| `ex-classical-root-systems-in-euclidean-coordinates` | `root-systems-dynkin-diagrams-and-cartan-killing-classification` | gpt-5.6-terra | `ce7b900ed824ab9306d3d05508ea983b4806f68426d74601049574b95f85d150` |
| `ex-compact-and-split-cartan-subalgebras-of-sl-two-r` | `real-forms-and-real-semisimple-lie-algebras-examples` | gpt-5.6-terra | `9cd81c7b8b301d716109aebc3ee68b5f3b3f8c3554b00ce7128706b9679c2471` |
| `ex-compact-and-split-real-forms-of-sl-two-c` | `real-forms-and-real-semisimple-lie-algebras-examples` | gpt-5.6-terra | `87a1884615324900a43d9b849da8af1cf362dc4d4759fd726a3d26ef1f52688b` |
| `ex-complex-projective-space-as-a-circle-symplectic-reduction` | `moment-maps-and-symplectic-reduction-examples` | gpt-5.6-terra | `d663293084e92810bed867e8b730889f560f3bddb26dc46373845645af9a2c27` |
| `ex-complex-simple-lie-algebra-viewed-as-a-real-simple-algebra` | `real-forms-and-real-semisimple-lie-algebras-examples` | gpt-5.6-terra | `55556c4204416a10d3f6012d0862bf6b881fba0a6f4513f7d26ca0589554b55e` |
| `ex-cotangent-reduction-for-a-principal-bundle-at-zero` | `moment-maps-and-symplectic-reduction-examples` | gpt-5.6-terra | `f285d57401a0dbdcea2d830ecf3d2b8842d05861dad2047510b982f928085794` |
| `ex-diagonal-action-and-addition-of-angular-momenta` | `moment-maps-and-symplectic-reduction-examples` | gpt-5.6-terra | `93f83f02f1018acecfcfcd1154df54de295bf482460ebc9cf448e79ffb3df662` |
| `ex-diagonal-cartan-subalgebra-and-roots-of-sl-n` | `cartan-subalgebras-and-root-space-decompositions` | gpt-5.6-terra | `9980b34d4712b5c7902c31d1ecb772cc88fab29727ffabed4834aa5cdc79ad5f` |
| `ex-dynkin-diagram-duality-of-b-n-and-c-n` | `root-systems-dynkin-diagrams-and-cartan-killing-classification-examples` | gpt-5.6-terra | `7b58485e416945662f8b3b101fc9735e3b653dbc2e96518c84053f0669733de9` |
| `ex-fourier-series-on-a-torus-as-peter-weyl` | `compact-lie-groups-maximal-tori-and-peter-weyl-theory-examples` | gpt-5.6-terra | `2ddf0dcc656312b73ef0320aab6d64bb212356916d01a7af7bf2e912f44898f3` |
| `ex-grassmannians-from-unitary-symplectic-reduction` | `moment-maps-and-symplectic-reduction-examples` | gpt-5.6-terra | `e9f28ecd956b34133f248530ec98037b8a98f8ba4ae2a3503be4ca8baf4e412d` |
| `ex-hyperbolic-space-as-so-zero-n-one-mod-so-n` | `real-forms-and-real-semisimple-lie-algebras-examples` | gpt-5.6-terra | `91a06e4697345169240be8cacb33b862c50fc61af2ec4376dbefe1caaa108719` |
| `ex-iwasawa-decomposition-of-sl-two-r` | `real-forms-and-real-semisimple-lie-algebras-examples` | gpt-5.6-terra | `c2eee1dd62a7d9f78771496d068bc889b769f575422bbdddb7e8d3a3294df029` |
| `ex-low-rank-dynkin-coincidences` | `root-systems-dynkin-diagrams-and-cartan-killing-classification-examples` | gpt-5.6-terra | `9fc2d7f49b52c4177bdbe182ff4f6a212e960b4f42af30cd111fb448f7c4c2ff` |
| `ex-matrix-coefficients-of-the-standard-su-two-representation` | `compact-lie-groups-maximal-tori-and-peter-weyl-theory-examples` | gpt-5.6-terra | `b037b9f80f085dbdbafbd2146837409aeffb1fc1836a2f16ffd0c253b859bff9` |
| `ex-maximal-tori-and-weyl-groups-of-u-n-and-su-n` | `compact-lie-groups-maximal-tori-and-peter-weyl-theory-examples` | gpt-5.6-terra | `2c005939c23809f6762be9cd891e94bca61321e486d7f8feac1344916cce2716` |
| `ex-normalized-haar-measure-on-a-torus` | `compact-lie-groups-maximal-tori-and-peter-weyl-theory-examples` | gpt-5.6-terra | `da5201fff7093d2b3efdbac8538731cf962207fe998e3f87e0abc38d5515b499` |
| `ex-polar-cartan-decomposition-of-sl-n-r` | `real-forms-and-real-semisimple-lie-algebras-examples` | gpt-5.6-terra | `423dd352e09adb71c43d1a7f93f0e1586af9b5e76ac240799ee7634cb47f6d41` |
| `ex-positive-roots-and-highest-root-of-g-two` | `root-systems-dynkin-diagrams-and-cartan-killing-classification-examples` | gpt-5.6-terra | `2a7dc5d862b2ca73bedf4280aafbd9943ad2a01f466784665c12373b616deeca` |
| `ex-reduced-harmonic-oscillator-flow-on-projective-space` | `moment-maps-and-symplectic-reduction-examples` | gpt-5.6-terra | `8a9a43eaae3c589559df20fd63c8c31e1a2fd69b1e8ca3787bf283d857a3a173` |
| `ex-restricted-roots-of-sl-n-r` | `real-forms-and-real-semisimple-lie-algebras-examples` | gpt-5.6-terra | `a1ffbc5d606d28c922b2d40da4f4b03ebd52f522c5adfaa04aebbb36315380c1` |
| `ex-root-space-brackets-for-matrix-units` | `cartan-subalgebras-and-root-space-decompositions-examples` | gpt-5.6-terra | `8172f10caf540a0816648f3cca43db842a577e2dfb97758778ca639de5d90985` |
| `ex-root-strings-in-type-a-two` | `cartan-subalgebras-and-root-space-decompositions-examples` | gpt-5.6-terra | `78549b266a38b099e449a528c8845efbdc7abe598dfb52cf1ff9a88006a73f40` |
| `ex-root-system-a-one` | `root-systems-dynkin-diagrams-and-cartan-killing-classification-examples` | gpt-5.6-terra | `47c514b8a267fd6335eb2d83e6295d6e19138f3da82890a0bad8b5f8cdcea2c4` |
| `ex-root-systems-a-two-b-two-and-g-two` | `root-systems-dynkin-diagrams-and-cartan-killing-classification-examples` | gpt-5.6-terra | `4aae028607fc274f86086931416a72970c831278483b5303f66c1929d9d11b5c` |
| `ex-root-systems-b-two-and-c-two-from-matrix-lie-algebras` | `cartan-subalgebras-and-root-space-decompositions-examples` | gpt-5.6-terra | `d2758657af99c1074abd448591dd3c926f31326471844ad8e3c527ac5ac0f2f4` |
| `ex-schur-orthogonality-for-a-finite-group-as-a-zero-dimensional-compact-case` | `compact-lie-groups-maximal-tori-and-peter-weyl-theory-examples` | gpt-5.6-terra | `6ce6ac64b03496dc2820723860d9d77fa9f6412fc373058f8d7afb0f9b6005fa` |
| `ex-serre-relations-for-a-two-recover-sl-three` | `root-systems-dynkin-diagrams-and-cartan-killing-classification-examples` | gpt-5.6-terra | `c71455da842c490e6aa1ceb8948d76324a0c37bac23b3cb8b6aac7b15d9d0db3` |
| `ex-shifting-trick-for-a-nonzero-coadjoint-orbit` | `moment-maps-and-symplectic-reduction-examples` | gpt-5.6-terra | `d576fdd5b0061c62e98f1d6faffc0308ed0466d9c7ac32d11470f24999641d86` |
| `ex-standard-and-dual-representations-of-sl-n-by-highest-weights` | `highest-weight-theory-for-complex-semisimple-lie-algebras-examples` | gpt-5.6-terra | `3acb12849aef7da6e44fe0dae8abc0284edf6f67ef8e9b422a0b3a2f882f3416` |
| `ex-symmetric-powers-as-highest-weight-modules` | `highest-weight-theory-for-complex-semisimple-lie-algebras-examples` | gpt-5.6-terra | `7bec953c91ac4b4880213c9dbbe48ee7e4ce3e81fe3800cb6037af800a181431` |
| `ex-the-adjoint-representation-and-the-highest-root` | `highest-weight-theory-for-complex-semisimple-lie-algebras-examples` | gpt-5.6-terra | `0a53b27d29ee780c33ffea8a5ba690694dd8bf3911c98e2dd796e0654045099e` |
| `ex-the-eight-dimensional-adjoint-representation-of-sl-three` | `highest-weight-theory-for-complex-semisimple-lie-algebras-examples` | gpt-5.6-terra | `2df098900f8b5a24213a1aaf23fa308dbfaac3f024dac0d1dba41c1d972a64bc` |
| `ex-the-peter-weyl-decomposition-of-l-two-su-two` | `compact-lie-groups-maximal-tori-and-peter-weyl-theory-examples` | gpt-5.6-terra | `41ed1684a47688776b9aa45dfa03d24e7bc8356babe95a3e1d7d839dfffe6fda` |
| `ex-two-sphere-as-a-coadjoint-orbit-of-so-three` | `moment-maps-and-symplectic-reduction-examples` | gpt-5.6-terra | `69915b37bcf42491723a7464af61eaa803c443e212cb8cb9b6bf9e87ffb08846` |
| `ex-verma-modules-for-sl-two` | `highest-weight-theory-for-complex-semisimple-lie-algebras-examples` | gpt-5.6-terra | `9c1f493507fdb3795ca115703d48dc8e2df1dda8ac2d6d3f9282c69047dc7891` |
| `ex-vogan-diagrams-for-real-forms-of-sl-three-c` | `real-forms-and-real-semisimple-lie-algebras-examples` | gpt-5.6-terra | `d0db550f7b1b601c168ea5452c1f4df71a4de51d15c098e9c859520848596d15` |
| `ex-weighted-circle-actions-and-weighted-projective-singular-quotients` | `moment-maps-and-symplectic-reduction-examples` | gpt-5.6-terra | `56832536ffca21f02f83b3424380198118a5906222f870adb56ea1abd48ef70b` |
| `ex-weyl-group-of-a-n-is-the-symmetric-group` | `root-systems-dynkin-diagrams-and-cartan-killing-classification-examples` | gpt-5.6-terra | `b74eafb5f81ad6a790bcf3280b9d4a0f544bb50dc210acf6fb9f954e9c8d8511` |
| `ex-weyl-groups-of-b-n-and-d-n-as-signed-permutation-groups` | `root-systems-dynkin-diagrams-and-cartan-killing-classification` | gpt-5.6-terra | `fd9334778924b3a03a0a0da45f3b18d5172a47fbd05cb44351c929f433f7d012` |
| `ex-weyl-integration-formula-for-su-two` | `compact-lie-groups-maximal-tori-and-peter-weyl-theory-examples` | gpt-5.6-terra | `569036a12b54305a334be5b8111c0499b2c6bb496f362058db41c95df6ac5a9f` |
| `fs-a-plain-dynkin-diagram-classifies-real-forms` | `real-forms-and-real-semisimple-lie-algebras` | gpt-5.6-terra | `c88509715eefca24a9c017c557905d6f7f1edbebd4ed0d531b12e1c086735c0d` |
| `fs-all-integer-multiples-of-a-root-are-roots` | `cartan-subalgebras-and-root-space-decompositions` | gpt-5.6-terra | `661a9d04fd86345947f4e4cabc562dda803f370c4172d71a95c125d58e8cc896` |
| `fs-dynkin-diagrams-classify-all-real-semisimple-lie-algebras` | `root-systems-dynkin-diagrams-and-cartan-killing-classification` | gpt-5.6-terra | `4368438df7a56066e515729e914a18edbc6c66c72fcfb04bdaf97368d5850627` |
| `fs-every-connected-finite-graph-is-a-dynkin-diagram` | `root-systems-dynkin-diagrams-and-cartan-killing-classification` | gpt-5.6-terra | `1ed7f930875acd69a18060af17661bc1c560dfcd692905c2ceef503d1bc3db13` |
| `fs-every-dominant-weight-of-the-abstract-weight-lattice-integrates-to-every-compact-group-form` | `compact-lie-groups-maximal-tori-and-peter-weyl-theory` | gpt-5.6-terra | `17f2f7ffd402df2bdb8678cfa323a90bb1a65f9aaeb7864b618b38ad010669d1` |
| `fs-every-element-of-a-complex-semisimple-lie-algebra-is-semisimple` | `cartan-subalgebras-and-root-space-decompositions` | gpt-5.6-terra | `d8eb8030de3e339bea86b73a54cf722e4154a6ef66c11c9809606b090ae7e6a7` |
| `fs-every-finite-reflection-invariant-set-of-vectors-is-a-crystallographic-root-system` | `root-systems-dynkin-diagrams-and-cartan-killing-classification` | gpt-5.6-terra | `80d4d895a155696584a2a8cbef13f007108118c77a4a58a7bb450c2e2ebebe2e` |
| `fs-every-symplectic-action-is-hamiltonian` | `moment-maps-and-symplectic-reduction` | gpt-5.6-terra | `289c3161f74c64c73bbba7bf8912e033f89f33c0dea857e0ad1dcc66df2380d0` |
| `fs-every-unitary-representation-of-a-compact-group-is-finite-dimensional` | `compact-lie-groups-maximal-tori-and-peter-weyl-theory` | gpt-5.6-terra | `e4d0f0f779e72140e7a20aa02f713fb0ce184df706389ce6be653929e1577953` |
| `fs-global-cartan-and-iwasawa-decompositions-hold-for-every-nonlinear-cover-without-modified-k` | `real-forms-and-real-semisimple-lie-algebras` | gpt-5.6-terra | `712712173536fff7e0652d953afc5e82ad19317e7ec371ce880ea821576c66f1` |
| `fs-haar-measure-on-a-compact-group-is-only-left-invariant-not-right-invariant` | `compact-lie-groups-maximal-tori-and-peter-weyl-theory` | gpt-5.6-terra | `9971128a707f7c4b3b5f203b94c754c04d7e4704d34f990337c0d9e3a62733a7` |
| `fs-if-alpha-and-beta-are-roots-then-alpha-plus-beta-is-always-a-root` | `cartan-subalgebras-and-root-space-decompositions` | gpt-5.6-terra | `16fcf9c52c62ba92c52429809a5a3cd611d19e3e3f0796cb56f3bdb385045ead` |
| `fs-moment-maps-are-unique-without-normalization` | `moment-maps-and-symplectic-reduction` | gpt-5.6-terra | `b5abea1c15c79e554d3a0fc476ad813ed8cdd452bd7cdf74deb040d9d9c83301` |
| `fs-peter-weyl-says-every-continuous-function-is-a-finite-sum-of-matrix-coefficients` | `compact-lie-groups-maximal-tori-and-peter-weyl-theory` | gpt-5.6-terra | `9c5a581410422520cecf949c3f4c5be1c91fff545ac6a194358060a48d575cc9` |
| `fs-restricted-root-systems-are-always-reduced` | `real-forms-and-real-semisimple-lie-algebras` | gpt-5.6-terra | `0de75d9b9e6dffe1990ea76769143297925898f437fee76d93e96935a31fc8db` |
| `fs-the-cotangent-lift-moment-map-has-a-plus-sign-under-the-library-fundamental-field-convention` | `moment-maps-and-symplectic-reduction` | gpt-5.6-terra | `7bf9a710f322dcd959d6c336af244a79f3baaeafb221ae97fbac2f7f624d109a` |
| `fs-the-general-reduced-dimension-is-dim-m-minus-two-dim-g` | `moment-maps-and-symplectic-reduction` | gpt-5.6-terra | `81238af834f59eeb1e14083cc1793ddd84fb210e436a730dce0396de9d4f91d1` |
| `fs-the-highest-weight-of-a-tensor-product-determines-its-complete-irreducible-decomposition` | `highest-weight-theory-for-complex-semisimple-lie-algebras` | gpt-5.6-terra | `4344d1e43e3171a471e135d910d4ffb155d4258c6507118840dc37680eafd8d0` |
| `fs-the-root-space-decomposition-classifies-real-semisimple-lie-algebras-with-no-extra-data` | `cartan-subalgebras-and-root-space-decompositions` | gpt-5.6-terra | `a632ef5f53802132216cda1c8a636bcdcb54f8a16eebe769b64d9f95b028e11a` |
| `fs-two-connected-lie-groups-with-the-same-dynkin-diagram-are-isomorphic` | `root-systems-dynkin-diagrams-and-cartan-killing-classification` | gpt-5.6-terra | `4f34973fd3cd01300385f81c606f0061226f8f40528efc636fb09d751fa9a782` |
| `lem-a-dominant-cyclic-highest-weight-module-has-a-unique-simple-quotient` | `highest-weight-theory-for-complex-semisimple-lie-algebras` | gpt-5.6-terra | `fc769082e23f1e647164805b38609d153790ceda25c75669c8962fdaf69125f4` |
| `lem-characteristic-kernel-on-a-regular-moment-level` | `moment-maps-and-symplectic-reduction` | gpt-5.6-terra | `77812c1224f5fefbce9be33141acef48e45755e28c25cdf1ccd7c66e1897b161` |
| `lem-compact-convolution-operators-decompose-into-finite-dimensional-invariant-subspaces` | `compact-lie-groups-maximal-tori-and-peter-weyl-theory` | gpt-5.6-terra | `38083d199ef77bda02d58af31e9cdc58540973b6638af5e5f10bb4ad3125c1c3` |
| `lem-compact-lie-groups-admit-central-continuous-approximate-identities` | `compact-lie-groups-maximal-tori-and-peter-weyl-theory` | gpt-5.6-terra | `ceaf436f93944595a08c7d4643ba451faa04bab7d57c4db5133c92ae2591eb35` |
| `lem-continuous-convolution-operators-are-hilbert-schmidt-and-compact` | `compact-lie-groups-maximal-tori-and-peter-weyl-theory` | gpt-5.6-terra | `4c749c660f9f82fcc485537f6245dbb650df1b68e6252b27b65d01d4f6d58eac` |
| `lem-highest-weight-modules-have-weights-below-the-top-weight` | `highest-weight-theory-for-complex-semisimple-lie-algebras` | gpt-5.6-terra | `0807574d6fb5685d676188cf4f94762123d9bbf6c5fe315341f0ecbe839b4247` |
| `lem-highest-weight-of-a-finite-dimensional-module-is-dominant-integral` | `highest-weight-theory-for-complex-semisimple-lie-algebras` | gpt-5.6-terra | `b2c90c0e1aa55dbebfd1dbce7d44699d365b3eae4db82e1ca956d4d99bb1a46f` |
| `lem-integrability-relations-for-a-dominant-highest-weight` | `highest-weight-theory-for-complex-semisimple-lie-algebras` | gpt-5.6-terra | `75ba9e6c35aded4d1c06f2738577789a0667bc4b0e7b8591939057475e442f46` |
| `lem-killing-length-of-a-root-is-nonzero` | `cartan-subalgebras-and-root-space-decompositions` | gpt-5.6-terra | `248bf1f92f00b3b36f40160f4ed2d0b7539c15d67d369f517727cc14b39fd7a9` |
| `lem-pbw-shows-the-dominant-cyclic-highest-weight-generator-survives` | `highest-weight-theory-for-complex-semisimple-lie-algebras` | gpt-5.6-terra | `07e2127f7c89083a3ac77b16a421e1095ba3ffa6f7272a3f9c15233b59812b37` |
| `lem-simple-reflections-preserve-weight-multiplicities` | `highest-weight-theory-for-complex-semisimple-lie-algebras` | gpt-5.6-terra | `1ff9c8d03633a64e877dcafcc55fbb88283507f3171b84164c2a17eca97e7ff5` |
| `lem-simple-root-integrability-bounds-the-dominant-cyclic-module` | `highest-weight-theory-for-complex-semisimple-lie-algebras` | gpt-5.6-terra | `b3463233e34bc243fe469ce1e77d1646b0f8ca481bb851d906238eac6b8d27cb` |
| `lem-weyl-denominator-and-anti-invariant-orbit-sum-basis` | `compact-lie-groups-maximal-tori-and-peter-weyl-theory` | gpt-5.6-terra | `ff5644d0a5a86f1f45de9c94a05f74eeb5bc8b90e9b94a1424e21a87234faa23` |
| `lem-weyl-orthogonality-identifies-the-highest-weight-character-numerator` | `compact-lie-groups-maximal-tori-and-peter-weyl-theory` | gpt-5.6-terra | `1e37a33dc26a89850b70e38fa34d59bc4394b17a11c49d096f02eed81f9484c7` |
| `prop-bracket-of-opposite-root-spaces-is-the-root-line-in-the-cartan-subalgebra` | `cartan-subalgebras-and-root-space-decompositions` | gpt-5.6-terra | `6985c2d4ccc660400aa434eadf1f4b9f939b2a0c6819b687c6553b305c764c9f` |
| `prop-brackets-of-root-spaces` | `cartan-subalgebras-and-root-space-decompositions` | gpt-5.6-terra | `8400577dffcf82608a9f16012c6fb9c5124dfcd125bc138ac1989c792045c44c` |
| `prop-cartan-decomposition-gives-the-invariant-metric-and-curvature-of-g-mod-k` | `real-forms-and-real-semisimple-lie-algebras` | gpt-5.6-terra | `b6938e50f18d3a8d4a1a1254326a419fa8676c07a889091c60b43bf84e494a86` |
| `prop-central-quotients-correspond-to-intermediate-character-lattices` | `compact-lie-groups-maximal-tori-and-peter-weyl-theory` | gpt-5.6-terra | `5b684c74d0f6b1b66d7f0ef4da07ad15c901285a4f017438f585ebc638a48e8d` |
| `prop-classical-matrix-lie-algebras-have-split-cartan-subalgebras` | `root-systems-dynkin-diagrams-and-cartan-killing-classification` | gpt-5.6-terra | `dbfd910c6b969ea17ec3e94f1060e8bf5c616307b85b3202aed8637d376f191b` |
| `prop-classical-real-forms-of-the-classical-complex-lie-algebras` | `real-forms-and-real-semisimple-lie-algebras` | gpt-5.6-terra | `e3f4d4ea413a3c143ddc1f8146c54523cf6fdc0f8ce558be0a8f0211873c77ec` |
| `prop-classical-types-correspond-to-sl-so-and-sp` | `root-systems-dynkin-diagrams-and-cartan-killing-classification` | gpt-5.6-terra | `70103b493c3f5f665ff22179a8c3eabf6670bd04ce30599c84f8554712b3a890` |
| `prop-compact-group-moment-map-can-be-averaged-to-an-equivariant-one-when-the-affine-obstruction-vanishes` | `moment-maps-and-symplectic-reduction` | gpt-5.6-terra | `587c6f53e396faafefd729d026a1225adafcdb9ac3b18925c4f46bde16c5c491` |
| `prop-compact-lie-groups-admit-bi-invariant-riemannian-metrics` | `compact-lie-groups-maximal-tori-and-peter-weyl-theory` | gpt-5.6-terra | `59e47ebe4ddfa91a8007ac0020ac3b5f336ba41378050a7fa8de8a7a0fead449` |
| `prop-complexification-has-a-canonical-conjugation-with-fixed-algebra-g-zero` | `real-forms-and-real-semisimple-lie-algebras` | gpt-5.6-terra | `21581164fdd5ce3941e0717e20f386015728972069f81e108001a0a24aab1985` |
| `prop-conjugacy-classes-meet-a-fixed-maximal-torus-in-weyl-orbits` | `compact-lie-groups-maximal-tori-and-peter-weyl-theory` | gpt-5.6-terra | `2a5b23b537e32c470e4a1a2174a8b8e265ca1e2addc22bbf4f0725567e569ac0` |
| `prop-differentiation-identifies-characters-with-the-integral-weight-lattice-of-t` | `compact-lie-groups-maximal-tori-and-peter-weyl-theory` | gpt-5.6-terra | `b7655f8c46bd87c123eb0f2c8fc5de315fc6339a7ea14a246b99d65168fe39af` |
| `prop-differentiation-relates-compact-group-and-complexified-lie-algebra-highest-weights` | `compact-lie-groups-maximal-tori-and-peter-weyl-theory` | gpt-5.6-terra | `9b5c56f5f566863d8110b6d6981c928c45d4ac3626c1165a60e3ac446891a4d1` |
| `prop-dimension-formula-from-roots` | `cartan-subalgebras-and-root-space-decompositions` | gpt-5.6-terra | `fbb531f40383a1a5ef630eff6f59edc6ebcfed91c12e78882dd33c64bbb7dd97` |
| `prop-dimension-of-a-regular-nonzero-reduced-space` | `moment-maps-and-symplectic-reduction` | gpt-5.6-terra | `577a8d14a66e6fceccda5f4e519769747e9cf755a43b60cbbf663db474c07dbf` |
| `prop-dimensions-of-the-exceptional-simple-lie-algebras` | `root-systems-dynkin-diagrams-and-cartan-killing-classification` | gpt-5.6-terra | `94725677c9248196ed61ec41340b431f237c983d4290b27f6cfe978f8ed6c306` |
| `prop-equivariance-is-equivalent-to-the-moment-map-poisson-bracket-identity` | `moment-maps-and-symplectic-reduction` | gpt-5.6-terra | `d83cc74a30509334bd20a01b3cf48140240ac0365b70003aaebee2be9b7d84b9` |
| `prop-equivariant-symplectomorphisms-preserve-moment-maps-up-to-a-coadjoint-fixed-covector` | `moment-maps-and-symplectic-reduction` | gpt-5.6-terra | `0a59601f689c27b7d4076189bb2b5c23bff4b892e9f893316ad87d4c31af5c9b` |
| `prop-every-positive-system-is-weyl-conjugate-and-bases-correspond-to-chambers` | `root-systems-dynkin-diagrams-and-cartan-killing-classification` | gpt-5.6-terra | `b23bfa33a5bacd15d21a45c5083d669d5e2d43288520b47038a41c7c2ba0bf80` |
| `prop-finite-dimensional-representations-of-a-complex-semisimple-lie-algebra-decompose-into-weight-spaces` | `highest-weight-theory-for-complex-semisimple-lie-algebras` | gpt-5.6-terra | `52c5ac96e0cbb69e9ec0d58b293d5c9cb6914671541545f6aafe79f0904ba175` |
| `prop-highest-root-exists-and-is-unique-in-an-irreducible-finite-root-system` | `root-systems-dynkin-diagrams-and-cartan-killing-classification` | gpt-5.6-terra | `d4d1384214c2b5ca6311ab25cab847fe619c1bdfc3d062fedc695dba003e3671` |
| `prop-infinitesimal-generator-of-a-symplectic-action-is-symplectic` | `moment-maps-and-symplectic-reduction` | gpt-5.6-terra | `ddbbb2d96b74adbbbea1df8cd1edfcb9788af96a3274beeb90c2b78854864e19` |
| `prop-integration-against-haar-is-invariant-under-translations-and-conjugation` | `compact-lie-groups-maximal-tori-and-peter-weyl-theory` | gpt-5.6-terra | `cfc6c3f693944cadd78e8ff3c31d57adb14909022166e60ec6dc3d512396daa8` |
| `prop-invariant-hamiltonians-descend-to-reduced-hamiltonians` | `moment-maps-and-symplectic-reduction` | gpt-5.6-terra | `c26f41b04f0516aef60868d1f6ee6eddf072dcc1d700b28b4f35dc6fd8fc4532` |
| `prop-irreducibility-corresponds-to-connectedness-of-the-dynkin-diagram` | `root-systems-dynkin-diagrams-and-cartan-killing-classification` | gpt-5.6-terra | `c67d4e34429e1d9cd4afedca11bd4c47b3fbba29fab6f27f637bbe037d46e3b0` |
| `prop-real-cartan-subalgebras-need-not-be-conjugate` | `real-forms-and-real-semisimple-lie-algebras` | gpt-5.6-terra | `78670ac4cf8633ec84ab585197e0d07142909ca3c0b9b53bb1fec6992d6d0262` |
| `prop-reduction-commutes-with-products` | `moment-maps-and-symplectic-reduction` | gpt-5.6-terra | `6afb74146c83d322e3e65464fbaeb8c5b033edde0808d72a2d860ea12c5e0ba5` |
| `prop-regularity-of-a-moment-map-is-equivalent-to-local-freeness` | `moment-maps-and-symplectic-reduction` | gpt-5.6-terra | `cb76ab7048d94b743a28ca3fe13769a5f63b923b2ffa7aae00e15142abe3db9a` |
| `prop-restricted-root-systems-may-be-nonreduced` | `real-forms-and-real-semisimple-lie-algebras` | gpt-5.6-terra | `a3d1218bd4f60eda72c61aa6169173b68e74ca722661a50e35c436788d0647ee` |
| `prop-root-and-weight-lattice-sandwich-for-a-compact-semisimple-group` | `compact-lie-groups-maximal-tori-and-peter-weyl-theory` | gpt-5.6-terra | `7245dca3e4a8e35fc90a56ae4a2b50ad8f78ae2fdd7a72712be509f408a36de2` |
| `prop-root-reflections-are-induced-by-inner-automorphisms` | `cartan-subalgebras-and-root-space-decompositions` | gpt-5.6-terra | `7f4b5f261b773e7303773dc00cf6e5605beaef3386b8db04a5f150f3c168e5e4` |
| `prop-root-systems-decompose-uniquely-into-irreducible-components` | `root-systems-dynkin-diagrams-and-cartan-killing-classification` | gpt-5.6-terra | `6d6bcab579723391659fbfe802868aefed5bde27b2dfb458fe2f38b7db0157a7` |
| `prop-root-systems-of-the-classical-complex-lie-algebras` | `root-systems-dynkin-diagrams-and-cartan-killing-classification` | gpt-5.6-terra | `e1f7372058c433d169230b26c3e1dcb16c4d7e2cad06c602f75da0bcdff4c9e4` |
| `prop-root-vectors-shift-weight-spaces` | `highest-weight-theory-for-complex-semisimple-lie-algebras` | gpt-5.6-terra | `a434f92dbf19d201c890ea96b610e37c7bb5378b9fc218fc7300abed00048917` |
| `prop-shifting-trick-identifies-reduction-at-alpha-with-zero-reduction` | `moment-maps-and-symplectic-reduction` | gpt-5.6-terra | `072c05f0ac7e30e1bef25e32c2454b47acc6e0cec4f13c137ea0610cabf0a391` |
| `prop-the-adjoint-representation-has-highest-weight-the-highest-root` | `highest-weight-theory-for-complex-semisimple-lie-algebras` | gpt-5.6-terra | `b463e68820143566ec78f9a595f2e1dab0e7fcec95bef5e94ea46e95d524334c` |
| `prop-the-center-is-the-common-kernel-of-all-roots-inside-the-cartan-subalgebra` | `cartan-subalgebras-and-root-space-decompositions` | gpt-5.6-terra | `9ad7280a1c5b2cfc9034a951d8d050629a691bf9b6ee471ec1571dd962f092c5` |
| `prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system` | `highest-weight-theory-for-complex-semisimple-lie-algebras` | gpt-5.6-terra | `7b467d042527e7f92559b1281fbd84f3f203c8e4c4855e44f17873594d534e33` |
| `prop-top-highest-weight-summand-in-a-tensor-product` | `highest-weight-theory-for-complex-semisimple-lie-algebras` | gpt-5.6-terra | `b82755b29f3dbb4d2ab98a1c5fd5fbe811704448868be238740596cea7eaab58` |
| `prop-uniqueness-and-change-of-positive-system-in-iwasawa-decomposition` | `real-forms-and-real-semisimple-lie-algebras` | gpt-5.6-terra | `bd9d9745bb4e92ce985534d626323afe85e5636a72c3951ce53cdda0f9cde5e6` |
| `prop-weyl-length-equals-positive-root-inversion-number` | `root-systems-dynkin-diagrams-and-cartan-killing-classification` | gpt-5.6-terra | `533ea329b8a698066297bd004e83bae6f68a03e54ac235d8ea64bb35ac0e78e3` |
| `prop-whitehead-two-removes-the-infinitesimal-equivariance-obstruction-for-semisimple-actions` | `moment-maps-and-symplectic-reduction` | gpt-5.6-terra | `d607c562ab27315b7128874e12b90fb6150a3a3bf4be367721135e52f490ffef` |
| `rem-dynkin-diagrams-do-not-classify-global-lie-groups` | `root-systems-dynkin-diagrams-and-cartan-killing-classification` | gpt-5.6-terra | `576748258282c0616ecd4c7980ef2b4c8e3f02d4456a382880cf18a1b2a4d643` |
| `rem-nonregular-or-nonfree-symplectic-quotients-need-not-be-manifolds` | `moment-maps-and-symplectic-reduction` | gpt-5.6-terra | `96e70c8ecc2c8e03db0e18417523235a0c921a5e3731e91869e6fb1289eae7ae` |
| `rem-representation-theory-of-noncompact-real-reductive-groups` | `real-forms-and-real-semisimple-lie-algebras` | gpt-5.6-terra | `313a1e7ca61b3f1a1e0bee2e3adb81f0991a7e18466749eb6ac70a55521d6ba4` |
| `thm-a-based-root-system-is-determined-up-to-isomorphism-by-its-cartan-matrix` | `root-systems-dynkin-diagrams-and-cartan-killing-classification` | gpt-5.6-terra | `5bb4470fedf972ab77e21e117fa90832e1897cc2d32515789b1eee78172803c9` |
| `thm-analytic-and-root-system-weyl-groups-agree` | `compact-lie-groups-maximal-tori-and-peter-weyl-theory` | gpt-5.6-terra | `ccff4356e9e7abb8f03df045811da6b7eeaf7cc40ce62e4dbe668b83e1513dfc` |
| `thm-cartan-decomposition-identifies-p-with-the-noncompact-symmetric-space` | `real-forms-and-real-semisimple-lie-algebras` | gpt-5.6-terra | `9b30bea17923aaeefc309210a0f1110570cdd27030680fb232f83dba9e9b807f` |
| `thm-cartan-killing-classification-of-complex-simple-lie-algebras` | `root-systems-dynkin-diagrams-and-cartan-killing-classification` | gpt-5.6-terra | `225f38631c2fa1f3ad062e1eed05a9db17626497cff90580d76d82c841cc411f` |
| `thm-cartan-subalgebras-exist-in-complex-semisimple-lie-algebras` | `cartan-subalgebras-and-root-space-decompositions` | gpt-5.6-terra | `a662ae69d49b8e602881aaf781c3e21423c60ac51c048829ea823c25af3672e5` |
| `thm-cartan-subalgebras-of-a-complex-semisimple-lie-algebra-are-conjugate` | `cartan-subalgebras-and-root-space-decompositions` | gpt-5.6-terra | `024059a74433c2b99f300441135e047fe5d05a28244a5aae9404d5c492d08370` |
| `thm-cartan-subalgebras-of-complex-semisimple-lie-algebras-are-exactly-maximal-toral-subalgebras` | `cartan-subalgebras-and-root-space-decompositions` | gpt-5.6-terra | `bf14c196e4a6c5e0e813f125ae3fb4cf92fae421a54af9421599e98dc379c21a` |
| `thm-cayley-transforms-connect-theta-stable-cartans-in-the-classification` | `real-forms-and-real-semisimple-lie-algebras` | gpt-5.6-terra | `845ef52546261a11b10b3552587fe281262672cb1ca817358e41a81eaa1fdb8a` |
| `thm-classification-of-irreducible-reduced-crystallographic-root-systems` | `root-systems-dynkin-diagrams-and-cartan-killing-classification` | gpt-5.6-terra | `a1f240916ed82c200982bba875350da3a8502480b491d464c5dade14a3ab54be` |
| `thm-classification-of-real-forms-by-vogan-diagrams` | `real-forms-and-real-semisimple-lie-algebras` | gpt-5.6-terra | `a027f8df1a1ab400dd7818b5c067f46299f41271871cf8fa0608dc2912eb5c16` |
| `thm-classification-of-real-semisimple-lie-algebras` | `real-forms-and-real-semisimple-lie-algebras` | gpt-5.6-terra | `ab22be88a8971f2131c9257e9c1653e645b909025743ce43aa304d14b19c74d8` |
| `thm-coadjoint-orbits-are-symplectic-manifolds` | `moment-maps-and-symplectic-reduction` | gpt-5.6-terra | `f86f5804d96d55a7ff5953941d46dbf39c106606559dfb0851038dd93bee4784` |
| `thm-compact-connected-lie-groups-are-classified-by-root-data` | `compact-lie-groups-maximal-tori-and-peter-weyl-theory` | gpt-5.6-terra | `4c53a4d196314a2175c89b0ca8f6b5efb2fb6e311a905318b261367d3455d02b` |
| `thm-compact-connected-semisimple-lie-groups-are-classified-up-to-isogeny-by-root-systems` | `compact-lie-groups-maximal-tori-and-peter-weyl-theory` | gpt-5.6-terra | `8731640936a9cc8b30f27c6b629b0b28cb32dd9ef5d5a854f4bd04f82f589377` |
| `thm-compact-group-roots-form-a-reduced-crystallographic-root-system-on-the-semisimple-part` | `compact-lie-groups-maximal-tori-and-peter-weyl-theory` | gpt-5.6-terra | `0be64ba65dd4d54c16610555f5260ea48cbe5f7ed15d9a66efb2f9848913b61d` |
| `thm-compact-group-weyl-group-is-finite` | `compact-lie-groups-maximal-tori-and-peter-weyl-theory` | gpt-5.6-terra | `e39aa5727e993d1f7a899b01ffb9ba784b6abf33e641907ae2e6829cb88a6b96` |
| `thm-complexification-dichotomy-for-a-real-simple-lie-algebra` | `real-forms-and-real-semisimple-lie-algebras` | gpt-5.6-terra | `aad31ddeb924f4a4e97bfd37a2ad451d28d6431fe3b6192888870ff1e0e17f1f` |
| `thm-conjugacy-of-compact-real-forms` | `real-forms-and-real-semisimple-lie-algebras` | gpt-5.6-terra | `8dcb849a9cd49487d5476b4683c571888184141289edb5417e7230304cbe7f7e` |
| `thm-conjugacy-of-maximal-tori` | `compact-lie-groups-maximal-tori-and-peter-weyl-theory` | gpt-5.6-terra | `0f40cc46c26a9f384c234f1b4f7bd79b9c42eed2d2febbca6f69e6057d853216` |
| `thm-every-real-cartan-subalgebra-is-conjugate-to-a-theta-stable-one` | `real-forms-and-real-semisimple-lie-algebras` | gpt-5.6-terra | `98dc7b5b94dd649770fa3bf95358cd97f482682be9e15c620045243f626ab8b7` |
| `thm-existence-of-a-compact-real-form` | `real-forms-and-real-semisimple-lie-algebras` | gpt-5.6-terra | `4b2293d542473e47480def9e24310381e846436ad1903ecc3e4abd241a446ed7` |
| `thm-existence-of-each-classified-root-system` | `root-systems-dynkin-diagrams-and-cartan-killing-classification` | gpt-5.6-terra | `be85cf9907f16f762fb8623632898e1783ab68bb92432eed8c276b7e6e976691` |
| `thm-existence-theorem-for-complex-semisimple-lie-algebras` | `root-systems-dynkin-diagrams-and-cartan-killing-classification` | gpt-5.6-terra | `551f18a526bf8ffd0cfedf3e57d7eedd6317ad2724257f0e19ce440a1f683b82` |
| `thm-finite-dimensional-representations-of-sl-two` | `cartan-subalgebras-and-root-space-decompositions` | gpt-5.6-terra | `b7b920a490f93f24b8ec906153f12595161e749532f7e0ec905e42223366986d` |
| `thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group` | `real-forms-and-real-semisimple-lie-algebras` | gpt-5.6-terra | `7865fe22abdc6815b9d69f9ba288fc70286c7d45227ccdc81145351bcad86e3a` |
| `thm-global-iwasawa-decomposition` | `real-forms-and-real-semisimple-lie-algebras` | gpt-5.6-terra | `45da2bb7d2ab16a8b2d09eece7d30ac437b9710ffac23d1204a7a20b43380785` |
| `thm-highest-weight-classification-for-a-compact-connected-lie-group` | `compact-lie-groups-maximal-tori-and-peter-weyl-theory` | gpt-5.6-terra | `a2bb9f9ea7e3ced797ed7683360ee42471fe59a7792f878c2773ccdd32bf2e13` |
| `thm-jordan-decomposition-lies-inside-a-complex-semisimple-lie-algebra` | `cartan-subalgebras-and-root-space-decompositions` | gpt-5.6-terra | `51b0dc8667e96cc73437485bc8a4d590b95d3273eb7aa272580b8beea7dcd434` |
| `thm-marsden-weinstein-meyer-symplectic-reduction` | `moment-maps-and-symplectic-reduction` | gpt-5.6-terra | `59711950b53931e4b2b5805be3ac1a0d5a0d1d2d2696b33b543806ec09f9dd60` |
| `thm-maximal-tori-exist-in-compact-lie-groups` | `compact-lie-groups-maximal-tori-and-peter-weyl-theory` | gpt-5.6-terra | `64cb01c551125eabdfaa98f067b13ba39b72389cffad2f1934259f9bd3452a38` |
| `thm-peter-weyl-for-compact-lie-groups` | `compact-lie-groups-maximal-tori-and-peter-weyl-theory` | gpt-5.6-terra | `d6cf860b4a0beb3500232269569257fe8cf6db25a38f3923a6600a3d0f1cec95` |
| `thm-rank-two-root-system-classification` | `root-systems-dynkin-diagrams-and-cartan-killing-classification` | gpt-5.6-terra | `b94d952535924bacc82ca1f96f456b039a1e36c0b61fed82df4d0c2421ac6dec` |
| `thm-real-forms-correspond-to-conjugate-linear-involutions` | `real-forms-and-real-semisimple-lie-algebras` | gpt-5.6-terra | `933b39aba7cb554450dc826e8b9c74744a03639b7ae5d2593594d45954970b88` |
| `thm-reduction-in-stages-for-free-proper-regular-actions` | `moment-maps-and-symplectic-reduction` | gpt-5.6-terra | `fcfac9b2f434ea94fc5d4ff37817a29976f90dd636675b236fbc1ea03da49aea` |
| `thm-restricted-root-space-decomposition` | `real-forms-and-real-semisimple-lie-algebras` | gpt-5.6-terra | `a2d0d1c31737718a1d84e72787fc316a8ffc0db52b3034fa6733d7b0295bc2f2` |
| `thm-root-sl-two-triple` | `cartan-subalgebras-and-root-space-decompositions` | gpt-5.6-terra | `dc0e6be7844d02f452a0330aace6a852960f794b66df10b3434358a090117856` |
| `thm-root-string-property` | `cartan-subalgebras-and-root-space-decompositions` | gpt-5.6-terra | `78d369326c5ebe9abf25876e13a3cf71d548a79d5a623cee00d2f210009a2b20` |
| `thm-roots-of-a-complex-semisimple-lie-algebra-form-a-reduced-crystallographic-root-system` | `cartan-subalgebras-and-root-space-decompositions` | gpt-5.6-terra | `aced76b70576cb2c444db7d7694e38b1806e53bc16a1975298b44cb80c9d0a6d` |
| `thm-schur-orthogonality-for-compact-lie-groups` | `compact-lie-groups-maximal-tori-and-peter-weyl-theory` | gpt-5.6-terra | `bc62aba82eb165db296b036378c6df3babf2c2f18da707bcae91c0e9611db7de` |
| `thm-serre-presentation-theorem` | `root-systems-dynkin-diagrams-and-cartan-killing-classification` | gpt-5.6-terra | `70d8c8d4643f568fcfa5d59c9997d4325f2d03d5f04a67fa625aeb68c56c42a5` |
| `thm-structure-of-a-compact-connected-abelian-lie-group` | `compact-lie-groups-maximal-tori-and-peter-weyl-theory` | gpt-5.6-terra | `b61e03a9863596bf1f252ccfb3284d90b3edcb6274288b65eff56ca010cb2b0a` |
| `thm-the-weyl-group-acts-simply-transitively-on-weyl-chambers` | `root-systems-dynkin-diagrams-and-cartan-killing-classification` | gpt-5.6-terra | `ef171e582285ea3d097a572c8f6c34cb9e5d9fe294b0a22db4d080a0cbce3c18` |
| `thm-universal-property-of-the-free-lie-algebra` | `root-systems-dynkin-diagrams-and-cartan-killing-classification` | gpt-5.6-terra | `b418cda8b32f9bc112f9809ce85b838cb4e85e81c101527dc0cfd7d008234522` |
| `thm-vogan-and-satake-diagrams-give-equivalent-real-form-classifications` | `real-forms-and-real-semisimple-lie-algebras` | gpt-5.6-terra | `91333c9f637069b4e146aca7c28c929d930b671189655b91188ca6879fcd31cc` |
| `thm-vogan-diagram-of-a-real-semisimple-lie-algebra-is-well-defined-up-to-equivalence` | `real-forms-and-real-semisimple-lie-algebras` | gpt-5.6-terra | `a165dff5f80210489c38c2842cc83f741af00c2832cfe067b4794bce99fc1249` |
| `thm-weyl-character-formula-for-compact-connected-lie-groups` | `compact-lie-groups-maximal-tori-and-peter-weyl-theory` | gpt-5.6-terra | `97fd9efc421cc89cde52261c9b7765dfbc00e171f12335bdc49fc0b0321f5734` |
| `thm-weyl-integration-formula` | `compact-lie-groups-maximal-tori-and-peter-weyl-theory` | gpt-5.6-terra | `840ab771674c6a96919023cdaa73fa6d6409a14c0dd88abfeafb0146d2778bc9` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 7 — fatal-only judge and reader-warning adjudication, `phase-2-remaining-27`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Audit one item, record its decision, complete its authorized repair and focused
checks, then continue to the next item. Do not run judges or final adjudicators.
The engine runs repair checks, one rejudge, then one terminal adjudication pass
after every group finishes. On resume, retain completed decisions and repairs.

Web search is available in this role. If any mathematics is uncertain, use it
and verify the point against original sources before deciding the outcome or
making a repair. Record the sources consulted and the exact claim each source
supports in the group report; do not resolve uncertainty from memory or a
secondary summary alone.

Append one row per rejection to `research/phase-2-remaining-27-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set after preflight.

You may add and author new lemma items when a licensed fatal repair needs a
genuinely missing dependency. Prove each lemma fully, verify unfamiliar or
uncertain mathematics against authoritative sources, and cite it in the
consumer's `deps` and proof. Supporting chains of new lemmas are permitted.
Place the lemmas on an owned page before their consumers and update that page,
the owning batch manifest and proof contract, and the Step-7 scope's group item
list and `by_item` entries. Record the missing dependency and its consuming
fatal repair in your report. This is an authorized scope addition; do not
invent a rejection or adjudication for a new lemma. New lemmas enter the
engine's normal coverage and targeted judgment checks.

Every entry under **Step-6 reader warnings** also requires an owning-group
decision in `research/phase-2-remaining-27-step7-alert-decisions.jsonl`. Use `not_defect` or
`nonfatal` when no content change is warranted, and `covered_by_rejection` when
an exact judge rejection already licenses the same repair. If a Step-6 reader
warning is independently `confirmed_fatal`, record `defect_type`, the full
pre-edit `itemHashGuard` digest as `item_sha256`, the full repaired digest as
`post_sha256`, repair the item before returning, and add exactly one matching
defect-ledger row whose structured `adjudication_ref` contains this `alert_id`,
`item`, and `item_sha256`. Only Step-6 reader warnings have this direct fatal
licence; later cross-group alerts raised while
adjudicating a judge rejection still require a targeted judge rejection.

A warning may name an owned page, for example a missing prerequisite page.
Read the page and its declared prerequisites and retain an explicit disposition.
The frontier policy permits unbuilt cross-category prerequisites. Check actual
item dependencies and citations before classifying such an absence as fatal;
the scheduling allowance does not excuse a missing fact used in a proof.
A page warning grants no item-edit authority: identify the affected item and its
fatal evidence, or report an unresolved page defect with
`confirmed_fatal_unlicensed`. Never dismiss it merely because it names a page.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Descriptive defect-ledger subclasses
such as `invalid-inference`, `false-claim`, or `ill-typed-construction` are not
valid adjudication `defect_type` values.

For every reader warning, append the owning-group disposition to
`research/phase-2-remaining-27-step7-alert-decisions.jsonl`. A defect in another group is a
`research/phase-2-remaining-27-step7-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-7 baseline or rewrite shared ledgers. Run the Step-7 guard
and scope check, then write `research/phase-2-remaining-27-alpha-step7-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.
