# Step 7 adjudication — group **e**, run `phase-2-nine-step-25`

You are the group Alpha for batches **10**, **11**: 3 A/B pair(s), 6 page(s), 98 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

`research/phase-2-nine-step-25-alpha-e-step7-context.json` is what a group Alpha for this group wrote during step 6,
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
in `research/phase-2-nine-step-25-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

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

## Step-6 reader warnings

None. No Step-6 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/phase-2-nine-step-25-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 7 — frozen integrity close, `phase-2-nine-step-25`

The final judge boundary is closed. The generated repair envelope above is
authoritative: review only its exact `assigned_items` and `live_tuples`, with
their explicit run or published scope; use a focused check when supported.

Resolve all assigned documentary findings in this pass. A serial reviewer must
establish ownership before editing an ambiguous record. Report detector or
authority defects explicitly; unchanged retries stop.

Do not alter mathematical items, start a judge cycle, or change another group's
records. You may correct a contract or receipt only when it exactly describes
the current item and cannot conceal a defect. A mathematical correction is a
blocker for the supervising session.

Return the gate, ids, non-item records changed, focused checks, and blockers.
