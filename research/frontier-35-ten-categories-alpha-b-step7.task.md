# Step 7 adjudication — group **b**, run `frontier-35-ten-categories`

You are the group Alpha for batches **9**, **10**, **11**: 6 A/B pair(s), 12 page(s), 142 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

**No step-6 digest exists for this group.** The reading half did not run or did
not produce one, so you are meeting this mathematics for the first time with the
rejections already in front of you. Read the pages before the verdicts anyway —
the order matters more than where the notes came from.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-35-ten-categories-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 9 | `projective-extensions-and-the-little-group-method` | A | representation-theory | 510.039 | `clifford-theory-over-normal-subgroups`, `group-extensions-complements-and-schur-zassenhaus`, `normal-subgroups-and-quotient-groups`, `second-cohomology-and-abelian-kernel-extensions` |
| 9 | `projective-extensions-and-the-little-group-method-examples` | B | representation-theory | 510.04 | `projective-extensions-and-the-little-group-method` |
| 9 | `monomial-characters-and-m-groups` | A | representation-theory | 510.041 | `brauer-induction-and-elementary-subgroups`, `clifford-theory-over-normal-subgroups`, `induced-representations-and-frobenius-reciprocity` |
| 9 | `monomial-characters-and-m-groups-examples` | B | representation-theory | 510.042 | `monomial-characters-and-m-groups`, `extraspecial-p-groups-and-central-products` |
| 10 | `frobenius-groups-and-the-normal-complement-theorem` | A | representation-theory | 510.043 | `clifford-theory-over-normal-subgroups`, `characters-and-the-orthogonality-relations`, `induced-representations-and-frobenius-reciprocity`, `sylow-theorems-and-nilpotent-groups`, `normal-subgroups-and-quotient-groups` |
| 10 | `frobenius-groups-and-the-normal-complement-theorem-examples` | B | representation-theory | 510.044 | `frobenius-groups-and-the-normal-complement-theorem` |
| 10 | `the-modular-function-and-l1-group-algebras` | A | representation-theory | 510.067 | `haar-measure-existence-and-uniqueness`, `product-measures-and-the-fubini-tonelli-theorems`, `the-lp-spaces-holder-minkowski-and-riesz-fischer`, `banach-algebras-spectrum-and-holomorphic-functional-calculus` |
| 10 | `the-modular-function-and-l1-group-algebras-examples` | B | representation-theory | 510.068 | `the-modular-function-and-l1-group-algebras`, `the-group-algebra-and-representations` |
| 11 | `young-diagrams-tableaux-and-permutation-modules` | A | representation-theory | 510.045 | `group-actions-and-cayleys-theorem`, `induced-representations-and-frobenius-reciprocity` |
| 11 | `young-diagrams-tableaux-and-permutation-modules-examples` | B | representation-theory | 510.046 | `young-diagrams-tableaux-and-permutation-modules` |
| 11 | `bruhat-decomposition-and-flags-over-finite-fields` | A | representation-theory | 510.053 | `group-actions-and-cayleys-theorem`, `induced-representations-and-frobenius-reciprocity`, `matrices-and-the-matrix-of-a-linear-map`, `determinants-of-matrices-over-a-commutative-ring`, `gaussian-elimination-and-row-reduction` |
| 11 | `bruhat-decomposition-and-flags-over-finite-fields-examples` | B | representation-theory | 510.054 | `bruhat-decomposition-and-flags-over-finite-fields` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `projective-extensions-and-the-little-group-method` — Projective Extensions and the Little Group Method (12 item(s))

- `def-projective-representation-and-factor-set` · definition — "Projective representations and normalized factor sets"
- `lem-factor-set-is-a-normalized-two-cocycle` · lemma — "The factor set satisfies the two-cocycle equation"
- `lem-rephasing-changes-the-factor-set-by-a-coboundary` · lemma — "Rephasing changes factor sets by coboundaries"
- `def-twisted-group-algebra-for-a-factor-set` · definition — "Twisted group algebra of a factor set"
- `lem-projective-representations-are-twisted-group-algebra-modules` · lemma — "Projective representations and twisted algebra modules"
- `lem-invariant-irrep-produces-a-projective-inertia-extension` · lemma — "An invariant irreducible normal representation yields projective inertia operators"
- `def-clifford-obstruction-class` · definition — "The Clifford obstruction class of an invariant irreducible representation"
- `thm-extension-exists-iff-the-clifford-obstruction-vanishes` · theorem — "An invariant irreducible representation extends to its inertia group exactly when the Clifford obstruction vanishes"
- `lem-cocycle-central-extension-is-a-group` · lemma — "The twisted product of a normalized cocycle is a central extension"
- `lem-central-extension-linearizes-a-projective-representation` · lemma — "The cocycle central extension linearizes a projective representation"
- `thm-projective-clifford-correspondence` · theorem — "The projective Clifford correspondence for an invariant irreducible representation"
- `thm-little-group-method-for-a-split-abelian-normal-subgroup` · theorem — "The little group method for a semidirect product with abelian kernel"

### `projective-extensions-and-the-little-group-method-examples` — Projective Extensions and the Little Group Method — Examples (4 item(s))

- `ex-q8-as-a-central-extension-of-c2-times-c2` · example — "The quaternion group as a cocycle central extension of C2 x C2"
- `cex-invariant-character-need-not-extend-linearly` · counterexample — "An invariant central character of the quaternion group with no linear extension"
- `ex-little-groups-for-a-finite-dihedral-group` · example — "Little groups compute the irreducible characters of a dihedral group"
- `ex-coboundary-rephasing-of-a-projective-representation` · example — "Rephasing the trivial projective representation of C2 by a coboundary"

### `monomial-characters-and-m-groups` — Monomial Characters and M Groups (10 item(s))

- `def-monomial-representation-and-m-group` · definition — Monomial characters and M-groups
- `lem-monomial-representation-has-a-monomial-matrix-model` · lemma — Coset-basis monomial matrices
- `lem-faithful-irrep-with-a-noncentral-abelian-normal-subgroup-is-properly-induced` · lemma — Faithful irreducibles induce from proper inertia groups
- `lem-nonabelian-supersolvable-group-has-the-required-abelian-normal-subgroup` · lemma — A noncentral abelian normal layer in a supersolvable group
- `lem-induction-commutes-with-inflation` · lemma — Induction commutes with quotient inflation
- `thm-supersolvable-groups-are-m-groups` · theorem — Finite supersolvable groups are M-groups
- `thm-monomial-induction-for-virtual-characters` · theorem — Brauer monomial induction for virtual characters
- `lem-kernel-of-an-induced-character-lies-in-the-inducing-subgroup` · lemma — Kernel of an induced module and its inducing subgroup
- `cor-m-groups-are-solvable` · corollary — Taketa theorem for finite M-groups
- `rem-m-group-converses-and-boundary` · remark — Implications and limits for M-groups

### `monomial-characters-and-m-groups-examples` — Monomial Characters and M Groups — Examples (4 item(s))

- `ex-dihedral-groups-are-m-groups` · example — All finite dihedral groups are M-groups
- `ex-unitriangular-group-of-order-p-cubed-is-an-m-group` · example — The order-p-cubed unitriangular group is an M-group
- `cex-solvable-group-need-not-be-an-m-group` · counterexample — A solvable group that is not an M-group
- `ex-one-dimensional-and-trivial-monomial-boundaries` · example — Trivial and one-dimensional monomial cases

### `frobenius-groups-and-the-normal-complement-theorem` — Frobenius Groups and the Normal Complement Theorem (39 item(s))

- `def-frobenius-complement-and-frobenius-group` · definition — Frobenius complement and frobenius group
- `prop-frobenius-permutation-action-characterization` · proposition — Frobenius permutation action characterization
- `def-frobenius-kernel-set` · definition — Frobenius kernel set
- `lem-frobenius-kernel-cardinality` · lemma — Frobenius kernel cardinality
- `def-induced-class-function-on-a-finite-group` · definition — Induced class functions and restricted class functions
- `lem-induction-restriction-reciprocity-for-class-functions` · lemma — Frobenius reciprocity for class functions
- `lem-zero-at-identity-induction-restriction-for-a-frobenius-complement` · lemma — Zero at identity induction restriction for a frobenius complement
- `lem-frobenius-character-extension-construction` · lemma — Frobenius character extension construction
- `lem-frobenius-character-extension-is-irreducible` · lemma — Frobenius character extension is irreducible
- `lem-frobenius-kernel-is-an-intersection-of-character-kernels` · lemma — Frobenius kernel is an intersection of character kernels
- `thm-frobenius-kernel-theorem` · theorem — Frobenius kernel theorem
- `cor-frobenius-semidirect-product-decomposition` · corollary — Frobenius semidirect product decomposition
- `prop-frobenius-groups-and-fixed-point-free-actions` · proposition — Frobenius groups and fixed point free actions
- `def-p-prime-core-of-a-finite-group` · definition — The p-prime core of a finite group
- `def-normal-p-complement-and-p-nilpotent-group` · definition — Normal p complement and p nilpotent group
- `def-transfer-homomorphism-for-a-finite-index-subgroup` · definition — Transfer homomorphism for a finite index subgroup
- `lem-transfer-is-independent-of-the-transversal` · lemma — Transfer is independent of the transversal
- `lem-transfer-is-a-homomorphism` · lemma — Transfer is a homomorphism
- `lem-transfer-cycle-decomposition-formula` · lemma — Transfer cycle decomposition formula
- `prop-equivalent-forms-of-having-a-normal-p-complement` · proposition — Equivalent forms of having a normal p complement
- `def-p-residual-of-a-finite-group` · definition — P residual of a finite group
- `lem-sylow-subgroups-of-a-normal-subgroup-are-intersections` · lemma — Sylow subgroups of a normal subgroup are intersections with Sylow subgroups
- `lem-p-residual-is-generated-by-p-prime-elements-and-idempotent` · lemma — P residual is generated by p prime elements and idempotent
- `lem-abelian-sylow-fusion-in-its-normalizer` · lemma — Abelian sylow fusion in its normalizer
- `thm-burnside-normal-p-complement-theorem` · theorem — Burnside normal p complement theorem
- `def-p-local-normalizer-for-normal-complement-theory` · definition — P local normalizer for normal complement theory
- `def-control-of-fusion-in-a-sylow-p-subgroup` · definition — Control of fusion in a sylow p subgroup
- `lem-proper-subgroup-of-a-finite-p-group-is-properly-normalized-local` · lemma — Proper subgroup of a finite p group is properly normalized local
- `lem-normal-p-complements-pass-to-subgroups-and-p-local-normalizers` · lemma — Normal p complements pass to subgroups and p local normalizers
- `lem-fusion-control-and-centralizer-transitivity` · lemma — Fusion control and centralizer transitivity are equivalent
- `lem-local-sylow-conjugacy-ascent-for-fusion` · lemma — Local sylow conjugacy ascent for fusion
- `lem-local-normal-p-complements-force-control-of-fusion` · lemma — Local normal p complements force control of fusion
- `lem-normal-p-subgroup-has-proper-commutator-in-a-p-group` · lemma — Normal p subgroup has proper commutator in a p group
- `lem-fusion-control-gives-a-nontrivial-p-quotient-of-the-p-residual` · lemma — Fusion control gives a nontrivial p quotient of the p residual
- `thm-frobenius-normal-p-complement-theorem` · theorem — Frobenius normal p complement theorem
- `lem-sylow-times-normal-subgroup-covers-when-index-is-a-p-power` · lemma — Sylow times normal subgroup covers when the index is a p-power
- `lem-automizer-condition-gives-centralizer-transitivity` · lemma — The local automizer condition gives centralizer conjugacy of Sylow subgroups
- `lem-p-automizer-condition-implies-fusion-control` · lemma — P automizer condition implies fusion control
- `cor-frobenius-automizer-criterion-for-p-nilpotence` · corollary — Frobenius automizer criterion for p nilpotence

### `frobenius-groups-and-the-normal-complement-theorem-examples` — Frobenius Groups and the Normal Complement Theorem — Examples (6 item(s))

- `ex-s3-as-a-frobenius-group` · example — S3 as a frobenius group
- `ex-affine-linear-frobenius-groups-over-finite-fields` · example — Affine linear frobenius groups over finite fields
- `cex-a-transitive-action-need-not-be-frobenius` · counterexample — A transitive action need not be frobenius
- `rem-frobenius-kernel-closure-is-the-content-of-the-theorem` · remark — Frobenius kernel closure is the content of the theorem
- `ex-frobenius-normal-two-complement-for-s3` · example — Frobenius normal two complement for s3
- `cex-cyclic-sylow-does-not-alone-imply-a-normal-p-complement` · counterexample — Cyclic sylow does not alone imply a normal p complement

### `the-modular-function-and-l1-group-algebras` — The Modular Function and L1 Group Algebras (22 item(s))

- `lem-right-translation-scales-left-haar-measure` · lemma — Right translation scales left haar measure
- `def-modular-function-of-a-locally-compact-group` · definition — Modular function of a locally compact group
- `thm-the-modular-function-is-a-continuous-homomorphism` · theorem — The modular function is a continuous homomorphism
- `lem-haar-change-of-variables-under-inversion` · lemma — Haar change of variables under inversion
- `def-unimodular-locally-compact-group` · definition — Unimodular locally compact group
- `lem-counting-measure-on-a-discrete-group` · lemma — Counting measure on a discrete group is Haar, Haar measures there are its multiples, and integrals against them are sums
- `prop-compact-discrete-and-abelian-groups-are-unimodular` · proposition — Compact discrete and abelian groups are unimodular
- `def-complex-haar-lp-spaces-and-compactly-supported-functions` · definition — Complex haar lp spaces and compactly supported functions
- `def-compactly-supported-convolution-on-a-group` · definition — Compactly supported convolution on a group
- `lem-convolution-preserves-cc-and-is-associative` · lemma — Convolution preserves cc and is associative
- `lem-l1-convolution-norm-inequality` · lemma — L1 convolution norm inequality
- `lem-complex-haar-l1-and-l2-are-complete-and-cc-dense` · lemma — Complex haar l1 and l2 are complete and cc dense
- `def-convolution-on-cc-and-l1-of-a-group` · definition — Convolution on cc and l1 of a group
- `def-involution-on-l1-of-a-group` · definition — Involution on l1 of a group
- `lem-the-l1-involution-is-isometric-and-reverses-convolution` · lemma — The l1 involution is isometric and reverses convolution
- `def-banach-star-algebra-without-required-unit` · definition — Banach star algebra without required unit
- `thm-l1-of-a-locally-compact-group-is-a-banach-star-algebra` · theorem — L1 of a locally compact group is a banach star algebra
- `lem-haar-translations-are-strongly-continuous-on-lp-one-and-two` · lemma — Haar translations are strongly continuous on lp one and two
- `thm-l1-group-algebras-have-a-contractively-bounded-approximate-identity` · theorem — L1 group algebras have a contractively bounded approximate identity
- `prop-l1-group-algebra-has-a-unit-iff-g-is-discrete` · proposition — L1 group algebra has a unit iff g is discrete
- `def-left-and-right-regular-unitary-representations` · definition — Left and right regular unitary representations
- `thm-regular-representations-are-unitary-and-strongly-continuous` · theorem — Regular representations are unitary and strongly continuous

### `the-modular-function-and-l1-group-algebras-examples` — The Modular Function and L1 Group Algebras — Examples (4 item(s))

- `ex-modular-function-of-the-affine-group-of-the-line` · example — Modular function of the affine group of the line
- `ex-convolution-on-a-discrete-group` · example — Convolution on a discrete group
- `ex-convolution-on-a-compact-group` · example — Convolution on a compact group
- `cex-naive-inversion-is-not-the-l1-involution-for-a-nonunimodular-group` · counterexample — Naive inversion is not the l1 involution for a nonunimodular group

### `young-diagrams-tableaux-and-permutation-modules` — Young Diagrams Tableaux and Permutation Modules (12 item(s))

- `def-partition-young-diagram-and-conjugate-partition` · definition — Partitions, English diagrams, and conjugation
- `def-young-tableau-standard-tableau-and-shape` · definition — Tableaux and standard tableaux
- `def-removable-and-addable-nodes-of-a-partition` · definition — Removable and addable nodes
- `lem-largest-entry-of-a-standard-tableau-is-removable` · lemma — The largest standard entry lies in a removable box
- `def-dominance-order-on-partitions` · definition — Dominance order on partitions
- `lem-conjugation-reverses-dominance` · lemma — Conjugation reverses dominance
- `def-row-and-column-stabilizers-of-a-tableau` · definition — Row and column stabilizers
- `lem-basic-combinatorial-lemma-for-tableaux` · lemma — Basic row-column incidence lemma
- `def-young-subgroup-tabloid-and-permutation-module` · definition — Young subgroups, tabloids, and permutation modules
- `lem-young-permutation-module-is-induced-from-the-trivial-character` · lemma — Young permutation modules are induced trivial modules
- `lem-tableau-stabilizers-transform-by-conjugation` · lemma — Tableau stabilizers transform by conjugation
- `def-semistandard-tableau-and-kostka-number` · definition — Semistandard tableaux and Kostka numbers

### `young-diagrams-tableaux-and-permutation-modules-examples` — Young Diagrams Tableaux and Permutation Modules — Examples (4 item(s))

- `ex-partitions-and-dominance-through-size-five` · example — Small partitions and the first dominance incomparability
- `ex-removable-nodes-and-row-endpoints` · example — Removable nodes versus row endpoints
- `ex-young-permutation-modules-for-row-and-column-partitions` · example — The two extreme Young permutation modules
- `ex-semistandard-tableaux-and-small-kostka-numbers` · example — Small Kostka numbers

### `bruhat-decomposition-and-flags-over-finite-fields` — Bruhat Decomposition and Flags over Finite Fields (20 item(s))

- `def-standard-subgroups-of-gl-n-over-a-finite-field` · definition — Standard subgroups of finite general linear groups
- `thm-complete-flags-form-gl-n-over-b` · theorem — Complete flags are G/B
- `def-compositions-partial-flags-and-standard-parabolics` · definition — Compositions, partial flags, and standard parabolics
- `thm-levi-decomposition-of-standard-parabolics-in-gl-n-fq` · theorem — Block Levi decomposition of standard parabolics
- `def-weyl-group-and-length-for-finite-gl-n` · definition — Permutation Weyl group and inversion length
- `lem-gaussian-elimination-produces-a-pivot-permutation` · lemma — Triangular elimination produces a pivot permutation
- `lem-rank-matrices-determine-the-pivot-permutation` · lemma — Southwest rank matrices determine Bruhat cells
- `thm-bruhat-decomposition-of-gl-n-over-a-finite-field` · theorem — Bruhat decomposition of finite GL_n
- `thm-relative-position-classifies-pairs-of-complete-flags` · theorem — Relative position of complete flags
- `prop-cardinality-of-a-finite-bruhat-cell` · proposition — Size of a finite Bruhat cell in G/B
- `def-harish-chandra-induction-and-restriction-for-finite-gl-n` · definition — Harish-Chandra induction and restriction
- `lem-unipotent-invariants-are-exact-over-c` · lemma — Exactness of finite unipotent invariants over C
- `thm-harish-chandra-adjunction-for-finite-gl-n` · theorem — Harish-Chandra induction is left adjoint to restriction
- `lem-standard-parabolic-double-cosets-are-young-double-cosets` · lemma — Parabolic double cosets and block permutations
- `lem-parabolic-mackey-biset-splitting-in-gl-n` · lemma — Unipotent double-coset biset splitting
- `def-coordinate-parabolics-for-ordered-partitions` · definition — Ordered partitions and coordinate parabolics
- `thm-parabolic-mackey-formula-for-finite-gl-n` · theorem — Parabolic Mackey formula for finite GL_n
- `thm-transitivity-and-parabolic-independence-of-harish-chandra-induction` · theorem — Transitivity and parabolic independence of Harish-Chandra induction
- `def-cuspidal-support-and-harish-chandra-series` · definition — Cuspidal representations and Harish-Chandra series
- `thm-existence-and-uniqueness-of-cuspidal-support-for-finite-gl-n` · theorem — Existence and uniqueness of cuspidal support

### `bruhat-decomposition-and-flags-over-finite-fields-examples` — Bruhat Decomposition and Flags over Finite Fields — Examples (5 item(s))

- `ex-gl-one-and-the-trivial-parabolic-boundary` · example — GL_1 and the trivial parabolic endpoints
- `ex-complete-flags-and-bruhat-cells-for-gl2-fq` · example — Flags and Bruhat cells for GL_2(F_q)
- `ex-relative-position-of-flags-in-gl3-fq` · example — The six relative positions of GL_3 flags
- `ex-grassmannians-as-maximal-parabolic-quotients` · example — Grassmannians as maximal parabolic quotients
- `ex-parabolic-induction-as-functions-on-partial-flags` · example — Parabolic induction of the trivial module as flag functions

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-6 reader warnings

None. No Step-6 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/frontier-35-ten-categories-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 7 batch adjudication, `frontier-35-ten-categories`

Follow `briefs/step7-adjudicator.md` and the engine-generated, round-bound task.
It supplies the batch, exact rejections, ownership, evidence paths and structured
result schema. Do not reconstruct these from an old group task.

Adjudicate by logical validity, repair all confirmed defects (including nonfatal
defects), and identify all
relevant downstream consumers including published items. The engine routes
downstream repairs to three Sol xhigh owners and certifies once after all
writers drain. Sol rejudgment and adjudication/repair/certification repeat
under WORKFLOW.md. New downstream work continues in the repair phase until
complete before certification. Fatal classification controls only the threshold.
Historical terminal receipts cannot close current rounds.
Adjudicators and all three owner agents may author new items only for genuine
unmet prerequisites. Follow the dedicated briefs for evidence, unique IDs,
registry/index and metadata inclusion, downstream repair closure and central
certification and gates; the frozen original scope never grows.
