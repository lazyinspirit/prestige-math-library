# Step 6 whole-group reading — group **e**, run `phase-2-nine-step-25`

You are the group Alpha for batches **10**, **11**: 3 A/B pair(s), 6 page(s), 98 item(s).

Read every owned item and every listed seam before returning the compact
schema-constrained digest. That file, not this conversation, is the handoff
to a fresh Step-7 adjudicator. No judge verdict is supplied here.
In the digest, `pages_read` is exactly the ids under **Your pages** and
`items_read` exactly the ids under **Your content**. External items you
open belong only in `published_dependencies`; never add them to those inventories.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## Read scope

**Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything an owned item touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**This dispatch is read-only.** Record concerns about owned items and alerts
about other groups in the returned digest; do not repair anything.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 10 | `haar-measure-existence-and-uniqueness` | A | representation-theory | 506.1 | `compactness`, `partitions-of-unity-and-paracompactness`, `radon-measures-and-the-riesz-markov-kakutani-theorem`, `product-measures-and-the-fubini-tonelli-theorems` |
| 10 | `haar-measure-existence-and-uniqueness-examples` | B | representation-theory | 506.2 | `haar-measure-existence-and-uniqueness` |
| 10 | `blocks-defect-groups-and-the-brauer-homomorphism` | A | representation-theory | 510.057 | `modular-representations-and-projective-covers`, `brauer-characters-and-decomposition-matrices` |
| 10 | `blocks-defect-groups-and-the-brauer-homomorphism-examples` | B | representation-theory | 510.058 | `blocks-defect-groups-and-the-brauer-homomorphism` |
| 11 | `kac-moody-algebras-from-generalized-cartan-matrices` | A | lie-theory | 510.023 | `harish-chandra-isomorphism-casimir-and-central-characters`, `the-topology-of-euclidean-space` |
| 11 | `kac-moody-algebras-from-generalized-cartan-matrices-examples` | B | lie-theory | 510.024 | `kac-moody-algebras-from-generalized-cartan-matrices` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `haar-measure-existence-and-uniqueness` — Haar Measure Existence and Uniqueness (14 item(s))

- `def-left-haar-integral-and-left-haar-measure` · definition — Left Haar integral and left Haar measure
- `lem-translations-preserve-compactly-supported-continuous-functions` · lemma — Translations preserve compactly supported continuous functions
- `def-haar-covering-ratio-of-test-functions` · definition — Haar covering ratio of test functions
- `lem-haar-covering-ratios-are-finite-and-positive` · lemma — Haar covering ratios are finite and positive
- `lem-normalized-approximate-haar-functionals-are-positive-and-invariant-in-the-limit` · lemma — Normalized approximate Haar functionals are positive and invariant in the limit
- `lem-haar-covering-functionals-are-asymptotically-additive` · lemma — Haar covering functionals are asymptotically additive
- `lem-haar-candidate-sets-have-the-finite-intersection-property` · lemma — Haar candidate sets have the finite intersection property
- `thm-existence-of-a-left-haar-integral` · theorem — Existence of a left Haar integral
- `cor-existence-of-left-and-right-haar-measures` · corollary — Existence of left and right Haar measures
- `lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets` · lemma — Haar measure is positive on nonempty open sets and finite on compact sets
- `lem-compactly-supported-kernels-admit-commuting-radon-integrals` · lemma — Compactly supported kernels admit commuting radon integrals
- `lem-haar-integral-comparison-inequality` · lemma — Haar integral comparison inequality
- `thm-uniqueness-of-left-haar-measure-up-to-scale` · theorem — Uniqueness of left Haar measure up to scale
- `cor-normalized-haar-probability-on-a-compact-group` · corollary — Normalized Haar probability on a compact group

### `haar-measure-existence-and-uniqueness-examples` — Haar Measure Existence and Uniqueness — Examples (4 item(s))

- `ex-counting-measure-as-haar-measure-on-a-discrete-group` · example — Counting measure as Haar measure on a discrete group
- `ex-lebesgue-measure-as-haar-measure-on-rn` · example — Lebesgue measure as Haar measure on rn
- `ex-normalized-haar-measure-on-a-finite-group` · example — Normalized Haar measure on a finite group
- `ex-haar-measure-on-an-infinite-product-of-compact-groups` · example — Haar measure on an infinite product of compact groups

### `blocks-defect-groups-and-the-brauer-homomorphism` — Blocks Defect Groups and the Brauer Homomorphism (37 item(s))

- `def-block-bimodule-for-the-double-group` · definition — Block bimodule for the double group
- `lem-group-algebra-bimodule-is-induced-from-the-diagonal` · lemma — Group algebra bimodule is induced from the diagonal
- `lem-relative-projectivity-mackey-intersections-for-finite-modules` · lemma — Relative projectivity mackey intersections for finite modules
- `thm-block-bimodule-has-a-diagonal-vertex` · theorem — Block bimodule has a diagonal vertex
- `def-defect-group-and-numerical-defect-of-a-block` · definition — Defect group and numerical defect of a block
- `thm-defect-groups-of-a-block-are-conjugate` · theorem — Defect groups of a block are conjugate
- `lem-block-relative-trace-characterizes-diagonal-projectivity` · lemma — Block relative trace characterizes diagonal projectivity
- `thm-vertices-of-modules-in-a-block-lie-in-a-defect-group` · theorem — Vertices of modules in a block lie in a defect group
- `prop-principal-block-has-sylow-defect` · proposition — Principal block has sylow defect
- `lem-projective-simple-symmetric-block-is-a-matrix-algebra` · lemma — A projective simple in a symmetric block forces a matrix block
- `thm-defect-zero-blocks-are-simple-algebras` · theorem — Defect zero blocks are simple algebras
- `def-brauer-homomorphism-for-a-p-subgroup` · definition — Brauer homomorphism for a p subgroup
- `thm-brauer-homomorphism-is-multiplicative` · theorem — Brauer homomorphism is multiplicative
- `lem-brauer-homomorphism-is-conjugation-equivariant` · lemma — Brauer homomorphism is conjugation equivariant
- `def-relative-brauer-homomorphism` · definition — Relative Brauer homomorphism
- `lem-relative-brauer-homomorphisms-are-transitive` · lemma — Relative Brauer homomorphisms are transitive
- `prop-central-idempotents-under-the-brauer-homomorphism` · proposition — Central idempotents under the Brauer homomorphism
- `lem-brauer-kernel-and-relative-trace-support` · lemma — Brauer kernel and relative trace support
- `lem-block-centre-locality-and-trace-ideal-sums` · lemma — Block centre locality and trace ideal sums
- `thm-defect-groups-are-maximal-brauer-support` · theorem — Defect groups are maximal Brauer support
- `lem-finite-dimensional-algebras-admit-primitive-idempotent-decompositions` · lemma — Finite-dimensional algebras admit primitive idempotent decompositions
- `def-brauer-pair-for-a-block` · definition — Brauer pair for a block
- `def-normal-inclusion-of-brauer-pairs` · definition — Normal inclusion of Brauer pairs
- `lem-brauer-maps-kill-nontrivial-idempotent-orbit-sums` · lemma — Brauer maps kill nontrivial idempotent orbit sums
- `thm-unique-normal-subpair-below-a-brauer-pair` · theorem — Unique normal subpair below a Brauer pair
- `lem-brauer-images-of-primitive-idempotent-decompositions` · lemma — Brauer images retain the surviving primitive idempotents
- `thm-brauer-pair-order-is-independent-of-the-normal-chain` · theorem — Brauer pair order is independent of the normal chain
- `thm-every-brauer-pair-determines-a-unique-global-block` · theorem — Every Brauer pair determines a unique global block
- `lem-finite-dimensional-commutative-algebras-decompose-into-local-factors` · lemma — Finite-dimensional commutative algebras decompose into local factors
- `lem-idempotents-lift-through-finite-commutative-algebra-quotients` · lemma — Idempotents lift through finite commutative algebra quotients
- `thm-maximal-brauer-pairs-exist-and-are-conjugate` · theorem — Maximal Brauer pairs exist and are conjugate
- `thm-maximal-brauer-pairs-detect-defect-groups` · theorem — Maximal Brauer pairs detect defect groups
- `lem-restriction-to-a-containing-p-subgroup-retains-a-vertex` · lemma — Restriction to a containing p subgroup retains a vertex
- `lem-transitive-p-group-permutation-modules-have-point-stabilizer-vertices` · lemma — Transitive p-group permutation modules have point-stabilizer vertices
- `lem-block-defect-is-an-intersection-of-two-sylow-subgroups` · lemma — Block defect is an intersection of two sylow subgroups
- `cor-normal-p-core-lies-in-every-block-defect-group` · corollary — Normal p core lies in every block defect group
- `cor-block-defect-groups-are-p-radical` · corollary — Block defect groups are p radical

### `blocks-defect-groups-and-the-brauer-homomorphism-examples` — Blocks Defect Groups and the Brauer Homomorphism — Examples (4 item(s))

- `ex-defect-and-brauer-pairs-for-a4-in-characteristic-three` · example — Defect and Brauer pairs for a4 in characteristic three
- `ex-brauer-pair-branching-for-c3-semidirect-d8-in-characteristic-two` · example — Brauer pair branching for c3 semidirect d8 in characteristic two
- `ex-blocks-and-defect-groups-of-s3` · example — Blocks and defect groups of s3
- `ex-defect-zero-and-p-group-boundaries` · example — Defect zero and p group boundaries

### `kac-moody-algebras-from-generalized-cartan-matrices` — Kac Moody Algebras from Generalized Cartan Matrices (33 item(s))

- `def-generalized-cartan-matrix` · definition — Generalized cartan matrix
- `def-symmetrizable-generalized-cartan-matrix` · definition — Symmetrizable generalized cartan matrix
- `def-realization-of-a-generalized-cartan-matrix` · definition — Realization of a generalized cartan matrix
- `prop-minimal-realizations-exist-and-are-unique-up-to-isomorphism` · proposition — Minimal realizations exist and are unique up to isomorphism
- `def-kac-moody-root-lattice-height-and-positive-cone` · definition — Kac Moody root lattice height and positive cone
- `lem-pbw-for-countably-presented-kac-moody-lie-algebras` · lemma — PBW for countably presented Kac Moody Lie algebras
- `lem-free-lie-construction-for-finite-kac-moody-generators` · lemma — Free Lie construction for finite Kac Moody generators
- `def-contragredient-lie-algebra-before-the-maximal-ideal-quotient` · definition — Contragredient lie algebra before the maximal ideal quotient
- `prop-contragredient-algebra-has-a-triangular-decomposition` · proposition — Contragredient algebra has a triangular decomposition
- `lem-the-sum-of-triangularly-disjoint-graded-ideals-is-disjoint-from-h` · lemma — The sum of triangularly disjoint graded ideals is disjoint from h
- `def-kac-moody-algebra-associated-to-a-gcm` · definition — Kac moody algebra associated to a gcm
- `prop-kac-moody-root-spaces-are-finite-dimensional` · proposition — Kac moody root spaces are finite dimensional
- `lem-kac-moody-opposite-simple-centralizer-vanishes` · lemma — The opposite simple centralizer in a Kac Moody half vanishes
- `lem-serre-elements-vanish-before-serre-generation` · lemma — Serre elements vanish before Serre generation
- `def-simple-reflections-and-the-kac-moody-weyl-group` · definition — Simple reflections and the kac moody weyl group
- `prop-the-weyl-group-preserves-roots-and-root-multiplicities` · proposition — The weyl group preserves roots and root multiplicities
- `thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra` · theorem — Invariant bilinear form for a symmetrizable kac moody algebra
- `def-kac-moody-category-o` · definition — Kac moody category o
- `def-kac-moody-verma-module` · definition — Kac moody verma module
- `def-generalized-casimir-on-restricted-kac-moody-modules` · definition — Generalized casimir on restricted kac moody modules
- `thm-generalized-kac-moody-casimir-is-central-and-scalar-on-highest-weight-modules` · theorem — Generalized kac moody casimir is central and scalar on highest weight modules
- `lem-bounded-above-kac-moody-weight-modules-are-generated-by-primitive-vectors` · lemma — Bounded above kac moody weight modules are generated by primitive vectors
- `lem-enveloping-quotient-kernels-and-augmentation-intersections` · lemma — Enveloping quotient kernels and augmentation intersections
- `lem-kac-moody-relation-module-embeds-in-verma-modules-and-obeys-the-casimir-constraint` · lemma — Kac moody relation module embeds in verma modules and obeys the casimir constraint
- `lem-the-serre-quotient-has-weyl-symmetry-and-no-residual-kac-moody-kernel` · lemma — The serre quotient has weyl symmetry and no residual kac moody kernel
- `thm-serre-presentation-of-a-kac-moody-algebra` · theorem — Serre presentation of a kac moody algebra
- `def-real-and-imaginary-kac-moody-roots` · definition — Real and imaginary kac moody roots
- `prop-real-root-spaces-are-one-dimensional-sl2-roots` · proposition — Real root spaces are one dimensional sl2 roots
- `lem-strict-linear-alternative-for-gcm-trichotomy` · lemma — Strict linear alternative for GCM trichotomy
- `thm-finite-affine-indefinite-trichotomy-for-indecomposable-gcms` · theorem — Finite affine indefinite trichotomy for indecomposable gcms
- `lem-finite-type-kac-moody-roots-descend-to-simple-roots` · lemma — Finite-type Kac–Moody roots descend to simple roots
- `lem-nonsingular-indecomposable-kac-moody-algebras-are-simple` · lemma — Nonsingular indecomposable Kac–Moody algebras are simple
- `prop-finite-type-kac-moody-algebras-recover-the-dg-semisimple-algebras` · proposition — Finite type kac moody algebras recover the dg semisimple algebras

### `kac-moody-algebras-from-generalized-cartan-matrices-examples` — Kac Moody Algebras from Generalized Cartan Matrices — Examples (6 item(s))

- `ex-rank-one-gcm-recovers-sl2` · example — Rank one gcm recovers sl2
- `ex-the-a2-serre-relations` · example — The a2 serre relations
- `ex-the-affine-a1-gcm-has-singular-rank-one-realization-data` · example — The affine a1 gcm has singular rank one realization data
- `ex-a-symmetrizable-indefinite-rank-two-gcm` · example — A symmetrizable indefinite rank two gcm
- `cex-a-matrix-with-one-zero-off-diagonal-is-not-a-gcm` · counterexample — A matrix with one zero off diagonal is not a gcm
- `cex-imaginary-root-spaces-need-not-have-multiplicity-one` · counterexample — Imaginary root spaces need not have multiplicity one

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

---

# Step 6 — group reading digest, `phase-2-nine-step-25`

Read every page and item in the generated group header, its cited published
dependencies, and every listed cross-group seam. This dispatch is read-only;
record concerns and alerts without repairing them.

Return only the supplied Step-7 context JSON. `pages_read`, `items_read`, and
`seams_checked` must be exact inventories of the generated scope. Record the
group's conventions, load-bearing items, opened published dependencies, and
concrete concerns; an empty concerns or alerts list is valid.

Inventory boundary: `pages_read` must contain exactly the ids under **Your
pages**, and `items_read` exactly the ids under **Your content**, with no extras.
Opening a published dependency does not expand either inventory; record its item
only under `published_dependencies`.

Put a finding about another group's item in `alerts`, not `concerns`; the scope
tool routes it to that item's owning group before adjudication.
