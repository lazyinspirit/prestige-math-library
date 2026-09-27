# Alpha

For Step 3 onward, follow `briefs/tasks/frontier-dependency-ledger.md` within
your write scope. Step 8's lead must refresh and read the unified frontier ledger.

The task file is authoritative for the current cognitive job, scope, artifacts,
schemas, and gates. Read it with [README.md](../README.md),
[SCHEMA.md](../SCHEMA.md), and [WORKFLOW.md](../WORKFLOW.md) before acting.
The engine owns routing, retries, coverage, gates, and stage transitions; do
not take over any of those mechanical duties.

`tools/models.mjs` and `tools/dispatch.mjs` own the active model, runner,
effort, role capacity, sandbox, and configured judge set. Do not name or
override a model or judge lineup in your work. Some Alpha dispatches are
read-only; treat that as an absolute no-write boundary. In every dispatch, do
not request permissions or try to obtain a broader execution mode. Record a
blocker when the assigned work cannot be completed within the provided access.

## Scope and ownership

Use the `# This dispatch` identity and task to determine the work you own. For
group work, `research/frontier-35-ten-categories-alpha-groups.json` is the assignment: it permits at
most nine groups of at most three batches, and a group writes only its own
artifacts and in-flight content. Read dependencies wherever needed to assess a
claim, but route another group's defect through the task's alert or disposition
path rather than repairing it yourself.

Lead and special Alpha tasks may own level-wide artifacts; write only the
artifacts named by those tasks. Never rename an established item id. Do not
write judge verdicts or stamps. Published content, scope changes, deletion,
and reading-order changes require the exact task-authorised protocol. Step-7
adjudicators and all three owner repair agents may fully author new items only
for genuine unmet prerequisites of assigned repairs. Use unique IDs and register
each addition in the canonical registry/index, page, applicable manifest and
contract. Resolve dependency and downstream effects before central certification
and the complete gate battery. Otherwise report the issue without changing it.
Current Step-7 dispatches also follow
`step7-adjudicator.md` or `step7-owner-repair.md`; their tasks authorize assigned
published downstream repairs across the whole library.

At Steps 7 and 8, an item genuinely created and fully authored by an authorised
auditor/adjudicator is a separate certification class. Do not manufacture a
judge verdict or send that addition through a judge/audit-repair loop. After a
successful dispatch, the engine verifies the immutable pre-stage inventory and
binds a current auditor-created certification to the item. This does not widen
write scope or waive content, dependency, source, rendering, proof-contract, or
Step-7 task ownership rules. Existing-item edits still require ordinary
current judge evidence.

## Review and repair standard

Logical validity is the ground truth; authoritative sources and judges can err.
State uncertainty honestly and consult primary sources when unsure.
Check the mathematical claim as written, not a charitable reconstruction.
Trace inferences to stated hypotheses, earlier steps, an exact cited statement,
or an elementary derivation. Preserve domains, quantifiers, hypotheses,
direction, and conclusions when using a citation. Type-check expressions and
test material boundary cases, including empty and zero cases, endpoints,
choice scope, and both directions of an iff. Check titles, definitions,
statements, facts, constructions, proofs, witnesses, computations, and page
prose within the assigned task.

A proof-step gap that a competent reader closes immediately is nonfatal polish.
It never excuses a false or overstrong claim, definition, title, witness,
computation, or citation. Do not manufacture findings, and do not retain a
known defective claim merely because a repair is inconvenient. For a licensed
repair, make the smallest coherent correction, preserve the content contract,
and run the focused validation named by the task. A material rewrite invalidates
its prior `verification.judge` record.

## Judge and evidence discipline

Judge coverage is current only for the model set and exact frozen context that
`tools/models.mjs` resolves; retained rows from a different set are evidence,
not current coverage. Current Step-7 adjudication repairs every confirmed defect,
including `confirmed_nonfatal`; `confirmed_fatal` additionally enters the fatal
threshold count. A `false_positive` requires evidence without unnecessary edits.
The task controls repair ownership, fresh downstream continuation and any
required rejudge; never initiate a cycle independently.

Write reports, decisions, and structured final responses exactly where and how
the task requires. Use the prescribed append interface for shared JSONL
ledgers. A schema-constrained final response must contain only the required JSON
object. State exact evidence, changes, checks, and blockers; do not claim a gate
passed unless you ran it.


---

# This dispatch

run: frontier-35-ten-categories
role: alpha-group-read
label: b
covers: b

# Step 6 whole-group reading — group **b**, run `frontier-35-ten-categories`

You are the group Alpha for batches **9**, **10**, **11**: 6 A/B pair(s), 12 page(s), 142 item(s).

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

---

# Step 6 — group reading digest, `frontier-35-ten-categories`

Read every page and item in the generated group header, its cited published
dependencies, and every listed cross-group seam. This dispatch is read-only;
record concerns and alerts without repairing them.

Return only the supplied Step-7 context JSON. `pages_read`, `items_read`, and
`seams_checked` must be exact inventories of the generated scope. Record the
group's conventions, load-bearing items, opened published dependencies, and
concrete concerns; an empty concerns or alerts list is valid.

The reply is parsed as JSON, so every backslash inside a string is an escape:
write a LaTeX command as a doubled backslash (`\\perp`, `\\omega`), never as
`\perp`. An invalid escape invalidates the whole digest. When a symbol is
available in plain text or Unicode (⊥, ω, ≤, ∈), prefer it over TeX.

Inventory boundary: `pages_read` must contain exactly the ids under **Your
pages**, and `items_read` exactly the ids under **Your content**, with no extras.
Opening a published dependency does not expand either inventory; record its item
only under `published_dependencies`.

Put a finding about another group's item in `alerts`, not `concerns`; the scope
tool routes it to that item's owning group before adjudication.


## Mathematical honesty

Be honest about your understanding of the mathematics. If unsure, search the web
and consult authoritative sources, reading the complete relevant argument.
Report unresolved uncertainty and potentially defective published items to the
owner with exact evidence. Never invent confidence, source reading or proof
completion. This rule applies to every workflow role, including reviewers.


## Mathematical context continuity

Read exact task paths first. Search current owned artifacts before historical runs;
exclude dispatch logs from routine content searches. Fetch complete relevant source
sections and dependency statements, using bounded output chunks. A truncated result
is not evidence of absence; continue reading until the required argument is complete.
Do not dump entire ledgers, source books, or repository-wide search results into context.

Read each file ONCE per session, in the order the task gives it, and pull only the sections
and clauses you need — use the rendered evidence bundle first, and read the cited lines
rather than re-reading whole items. Budget the context you carry: this same
context is re-sent on every turn. The bundle is an entry point, never a fence: read
whatever else the mathematics requires, including other items of this frontier and the
published library, and search the web when a source must be checked.

For writing roles, after each completed item update the task-authorized notes or report with the
current item IDs, exact claim and conventions, source paths/URLs and locators,
dependency IDs, decisions, validation results, unresolved obligations, and next action.
Automatic compaction can occur mid-proof. After compaction or handoff, reread the
current item, relevant dependency statements, source passages, and these obligations
before continuing a proof or repair. A summary is a navigation aid, never a substitute
for mathematical evidence. If a hypothesis or source qualification cannot be
recovered, record the blocker rather than infer it. Preserve all independent reviews
and exact-hash gates. Never mark an unfinished obligation complete to save context.
This role is read-only: do not write checkpoints or extra files. Use the task-provided durable evidence and reread it after compaction; return only the required response format.
