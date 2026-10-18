# Step 5 adjudication — group **g**, run `non-ml-math-remaining-81-2026-10-18`

You are the group Alpha for batches 1, 50, 51: 3 A/B pair(s), 6 page(s), 91 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **1**: `research/non-ml-math-remaining-81-2026-10-18-batch-1-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **50**: `research/non-ml-math-remaining-81-2026-10-18-batch-50-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **51**: `research/non-ml-math-remaining-81-2026-10-18-batch-51-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/non-ml-math-remaining-81-2026-10-18-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 1 | `frattini-subgroups-and-the-burnside-basis-theorem` | A | group-theory | 83 | `sylow-theorems-and-nilpotent-groups` |
| 1 | `frattini-subgroups-and-the-burnside-basis-theorem-examples` | B | group-theory | 84 | `frattini-subgroups-and-the-burnside-basis-theorem`, `primitive-roots-and-unit-groups-modulo-n` |
| 50 | `finitary-ringel-hall-algebras` | A | hall-algebras-and-tensor-categories | 2914 | `algebraic-representation-and-tensor-symmetry-map`, `cyclotomic-klr-algebras-and-highest-weight-categorification`, `symmetric-functions-hall-inner-product-and-schur-bases` |
| 50 | `finitary-ringel-hall-algebras-examples` | B | hall-algebras-and-tensor-categories | 2915 | `finitary-ringel-hall-algebras` |
| 51 | `green-hall-bialgebras-and-quantum-group-realizations` | A | hall-algebras-and-tensor-categories | 2916 | `finitary-ringel-hall-algebras`, `bialgebras-convolution-and-antipode-identities`, `noncrossing-partition-lattices-and-kreweras-complements` |
| 51 | `green-hall-bialgebras-and-quantum-group-realizations-examples` | B | hall-algebras-and-tensor-categories | 2917 | `green-hall-bialgebras-and-quantum-group-realizations` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `frattini-subgroups-and-the-burnside-basis-theorem` — Frattini Subgroups and the Burnside Basis Theorem (24 item(s))

- `lem-frattini-subgroup-is-characteristic` · lemma — The Frattini subgroup of a finite group is characteristic
- `cor-generation-is-detected-modulo-the-frattini-subgroup` · corollary — Generation of a finite group is detected modulo its Frattini subgroup
- `def-elementary-abelian-p-group` · definition — Elementary abelian $p$-groups
- `lem-elementary-abelian-p-groups-are-canonical-fp-vector-spaces` · lemma — An elementary abelian $p$-group has a canonical $\mathbb F_p$-vector-space structure
- `def-fp-basis-of-an-elementary-abelian-p-group` · definition — $\mathbb F_p$-spanning sets, independence, and bases in an elementary abelian $p$-group
- `lem-finite-elementary-abelian-p-groups-have-bases-and-basis-extension` · lemma — Finite elementary abelian $p$-groups have bases, basis extension, and a well-defined dimension
- `def-pth-power-subgroup-of-a-group` · definition — The $p$th-power subgroup $G^p$
- `thm-frattini-quotient-is-the-largest-elementary-abelian-quotient` · theorem — The Frattini quotient is the largest elementary abelian quotient of a finite $p$-group
- `thm-frattini-subgroup-formula-for-a-finite-p-group` · theorem — $\Phi(P)=P'P^p$ for a finite $p$-group
- `prop-frattini-subgroup-monotonicity-for-subgroups-of-finite-p-groups` · proposition — If $H\le P$ are finite $p$-groups, then $\Phi(H)\le\Phi(P)$
- `prop-frattini-subgroup-of-a-quotient-finite-p-group` · proposition — $\Phi(P/N)=\Phi(P)N/N$ for a normal subgroup of a finite $p$-group
- `prop-frattini-subgroup-of-a-direct-product-of-finite-p-groups` · proposition — $\Phi(P\times Q)=\Phi(P)\times\Phi(Q)$ for finite $p$-groups
- `cor-frattini-subgroup-of-a-finite-two-group-is-the-square-subgroup` · corollary — $\Phi(P)=P^2$ for a finite $2$-group
- `cor-frattini-free-finite-p-groups-are-elementary-abelian` · corollary — A finite $p$-group has trivial Frattini subgroup exactly when it is elementary abelian
- `def-minimal-generating-set-of-a-group` · definition — Minimal generating sets of a group
- `def-generator-rank-of-a-finite-p-group` · definition — The generator rank $d(P)$ of a finite $p$-group
- `thm-burnside-basis-theorem` · theorem — Burnside Basis Theorem
- `cor-minimal-generating-sets-of-a-finite-p-group-have-equal-size` · corollary — Minimal generating sets of a finite $p$-group have size $d(P)$
- `cor-every-nonfrattini-element-belongs-to-a-minimal-generating-set` · corollary — Every element outside $\Phi(P)$ belongs to a minimal generating set of $P$
- `cor-nontrivial-finite-p-group-is-cyclic-iff-generator-rank-one` · corollary — A nontrivial finite $p$-group is cyclic exactly when $d(P)=1$
- `cor-maximal-subgroups-of-a-finite-p-group-are-frattini-hyperplanes` · corollary — Maximal subgroups of a finite $p$-group are the inverse images of Frattini hyperplanes
- `thm-automorphisms-act-linearly-on-the-frattini-quotient` · theorem — Automorphisms act linearly on the Frattini quotient
- `thm-hall-burnside-automorphism-theorem` · theorem — Hall–Burnside: coprime automorphisms are detected on the Frattini quotient
- `cor-kernel-of-the-action-on-the-frattini-quotient-is-a-p-group` · corollary — The kernel of the automorphism action on $P/\Phi(P)$ is a $p$-group

### `frattini-subgroups-and-the-burnside-basis-theorem-examples` — Frattini Subgroups and the Burnside Basis Theorem — Examples (12 item(s))

- `ex-frattini-subgroup-of-a-cyclic-p-group` · example — The Frattini subgroup of a nontrivial cyclic $p$-group
- `ex-frattini-subgroup-of-an-elementary-abelian-p-group` · example — The Frattini subgroup of $(\mathbb Z/p)^n$ is trivial
- `ex-frattini-subgroups-of-dihedral-and-quaternion-groups` · example — The Frattini subgroups of the dihedral and quaternion groups of order eight
- `ex-generator-rank-of-upper-unitriangular-groups` · example — The $3\times3$ upper-unitriangular group over a prime field has generator rank two
- `ex-maximal-subgroups-as-frattini-hyperplanes` · example — The maximal subgroups of the dihedral group of order eight as Frattini hyperplanes
- `cex-frattini-image-under-a-nonsurjective-homomorphism` · counterexample — A nonsurjective homomorphism need not carry the Frattini subgroup into the target Frattini subgroup
- `cex-fitting-centralizer-without-solvability` · counterexample — The Fitting subgroup of $A_5$ does not contain its centralizer
- `ex-hall-burnside-detects-a-nontrivial-coprime-automorphism` · example — Inversion on $C_3$ is detected on its Frattini quotient
- `fs-the-frattini-subgroup-is-the-union-of-the-maximal-subgroups` · false-statement — FALSE: the Frattini subgroup is the union of the maximal subgroups
- `fs-the-frattini-subgroup-is-functorial-for-all-homomorphisms` · false-statement — FALSE: every homomorphism carries the Frattini subgroup into the target Frattini subgroup
- `fs-every-minimal-generating-set-of-an-arbitrary-finite-group-has-the-same-size` · false-statement — FALSE: all minimal generating sets of a finite group have the same size
- `fs-centralizer-of-the-fitting-subgroup-is-always-contained-in-the-fitting-subgroup` · false-statement — FALSE: the Fitting subgroup always contains its centralizer

### `finitary-ringel-hall-algebras` — Finitary Ringel–Hall Algebras (12 item(s))

- `def-hall-finitary-abelian-category` · definition — Small finitary abelian categories for Hall multiplication
- `lem-hall-flags-lift-through-a-quotient` · lemma — Flags lift uniquely through a quotient in an abelian category
- `def-jordan-quiver-nilpotent-representation-category` · definition — Nilpotent representations of the Jordan quiver
- `def-untwisted-hall-algebra` · definition — The untwisted Hall algebra of a finitary abelian category
- `lem-jordan-quiver-category-is-finitary` · lemma — Jordan-quiver categories are abelian; finite-field models are finitary
- `lem-jordan-quiver-isoclasses-are-partition-indexed` · lemma — Jordan-quiver isomorphism classes are indexed by partitions
- `lem-untwisted-hall-product-finiteness` · lemma — Untwisted Hall structure constants and products are finite
- `thm-untwisted-hall-algebra-is-associative-and-unital` · theorem — The untwisted Hall product is associative and unital
- `thm-generic-jordan-hall-algebra-is-symmetric-functions` · theorem — The generic Jordan-quiver Hall algebra is the symmetric-function ring
- `def-hall-littlewood-scalar-product-and-functions` · definition — Hall–Littlewood scalar product and monic functions
- `lem-jordan-block-automorphism-count` · lemma — Automorphism counts for nilpotent Jordan representations
- `thm-jordan-hall-pairing-and-hall-littlewood-basis` · theorem — Jordan Hall classes are Hall–Littlewood functions with the transported Green pairing

### `finitary-ringel-hall-algebras-examples` — Finitary Ringel–Hall Algebras: Examples and Counterexamples (4 item(s))

- `ex-finite-vector-space-hall-square` · example — The Hall square of the simple finite-field vector space
- `ex-finite-abelian-p-group-hall-square` · example — The Hall square in finite abelian p-groups
- `ex-jordan-quiver-hall-square` · example — The degree-two Jordan-quiver Hall product
- `ex-jordan-hall-littlewood-degree-two-normalizations` · example — Jordan Hall–Littlewood basis and pairing in degrees zero, one and two

### `green-hall-bialgebras-and-quantum-group-realizations` — Euler-Twisted Hall Products, Green Coproducts, and Quantum Groups (36 item(s))

- `def-quiver-hall-positive-borel` · definition — The Hall-normalized extended positive Borel of a loopless quiver
- `lem-symmetric-gaussian-alternating-sum-vanishes` · lemma — A symmetric Gaussian alternating sum vanishes in the Serre range
- `lem-yext-zero-splice-factorization` · lemma — A zero Yoneda splice factors through the middle object
- `lem-yext-exact-sequences-in-both-variables` · lemma — Low-degree exact sequences for Yoneda Ext in both variables
- `def-finite-field-hereditary-hall-category` · definition — Finite-field hereditary Hall categories
- `lem-finite-acyclic-quiver-hall-category-is-hereditary-finitary` · lemma — Finite-dimensional representations of an acyclic quiver form a hereditary finitary Hall category
- `lem-finite-loopless-quiver-nilpotent-category-is-hereditary-finitary` · lemma — Finite loopless quiver nilpotent representation categories are hereditary and finitary
- `lem-hall-euler-form-is-additive` · lemma — The hereditary Euler form is additive on the Grothendieck group
- `lem-hall-sequence-count-equals-aut-weighted-subobject-count` · lemma — Exact-sequence counts equal endpoint automorphism counts times subobject counts
- `def-euler-twisted-hall-algebra` · definition — The Euler-twisted Hall algebra
- `lem-euler-twisted-hall-product-is-well-defined` · lemma — The Euler-twisted Hall product is well-defined
- `def-green-hall-completion-and-coproduct` · definition — The Green Hall completion and coproduct
- `lem-euler-twisted-hall-product-is-associative-and-unital` · lemma — The Euler-twisted Hall product is associative and unital
- `lem-green-hall-coproduct-coefficients-are-finite` · lemma — Green coproduct coefficients are finite
- `lem-green-cross-square-counting-identity` · lemma — The Green cross–square counting identity
- `def-extended-hall-algebra-and-composition-subalgebra` · definition — The extended Hall algebra and composition subalgebra
- `lem-extended-hall-torus-action-is-well-defined` · lemma — The extended Hall torus action is well-defined
- `lem-green-hall-coproduct-is-coassociative` · lemma — The Green Hall coproduct is coassociative
- `lem-green-coproduct-products-converge` · lemma — Products of Green coproducts converge coefficientwise
- `thm-green-hall-coproduct-is-a-twisted-bialgebra-map` · theorem — Green’s coproduct is an algebra map into the twisted tensor completion
- `prop-green-hall-pairing-is-nondegenerate` · proposition — The Green Hall pairing is nondegenerate and adjoint to product and coproduct
- `cor-extended-green-hall-bialgebra` · corollary — The extended Green coproduct is an algebra map
- `lem-hall-and-dj-borel-conventions-are-isomorphic` · lemma — The extended Green and repository Drinfeld–Jimbo coproduct conventions agree on simple generators
- `prop-ringel-map-is-well-defined-and-has-composition-image` · proposition — The Ringel assignment is a bialgebra homomorphism onto the extended composition subalgebra
- `thm-prime-power-specializations-of-the-integral-quantum-half-have-a-nondegenerate-green-form` · theorem — Prime-power specializations of the integral quantum half have a nondegenerate Green form
- `lem-positive-green-pairing-specializes-the-integral-half-into-the-composition-algebra` · lemma — Green positivity specializes the integral half into the composition algebra
- `lem-finite-dynkin-quiver-reflection-classification` · lemma — Reflection classifies finite-Dynkin quiver indecomposables over a finite field
- `lem-finite-dynkin-hall-algebra-is-simple-generated` · lemma — Finite-Dynkin Hall algebras are generated by vertex simples
- `lem-finite-field-schur-descent-and-restriction` · lemma — Finite-field descent and restriction of Schur quiver representations
- `lem-affine-de-quivers-have-exponentially-many-indecomposables` · lemma — Explicit affine D and E flag families give exponentially many indecomposables
- `lem-hall-composition-full-exactly-finite-dynkin` · lemma — The full Hall algebra is simple-generated exactly in componentwise finite Dynkin type
- `lem-numerical-serre-rank-one-skew-kernel-is-integrable` · lemma — Rank-one skew kernels in a numerical quantum Serre algebra
- `lem-the-nondegenerate-integral-specialization-has-a-quantum-casimir` · lemma — The nondegenerate integral specialization has a quantum Casimir
- `lem-a-minimal-numerical-serre-kernel-obeys-the-quantum-casimir-constraint` · lemma — A minimal numerical Serre kernel obeys the quantum Casimir constraint
- `thm-prime-power-numerical-serre-half-is-the-integral-specialization` · theorem — The prime-power numerical Serre half is the integral specialization
- `thm-ringel-map-embedding-and-finite-dynkin-criterion` · theorem — The Ringel map embeds the extended positive Borel and is full Hall exactly in finite Dynkin type

### `green-hall-bialgebras-and-quantum-group-realizations-examples` — Euler-Twisted Hall Products, Green Coproducts, and Quantum Groups: Examples and Counterexamples (3 item(s))

- `cex-kronecker-composition-subalgebra-is-proper` · counterexample — The Kronecker Hall algebra strictly contains its composition subalgebra
- `ex-green-hall-square-and-coproduct-for-finite-vector-spaces` · example — A one-vertex Green coproduct and twisted Hall square
- `ex-a2-hall-products-and-quantum-serre` · example — The A2 Hall products and their quantum Serre relation

## Your seams

Your pages depend on another group's:

- `finitary-ringel-hall-algebras` requires `algebraic-representation-and-tensor-symmetry-map` (group a, batch 32)

Another group's pages depend on yours:

- `derived-hall-algebras` (group h) requires your `finitary-ringel-hall-algebras`
- `hall-algebra-modules-and-geometric-actions` (group h) requires your `green-hall-bialgebras-and-quantum-group-realizations`
- `motivic-hall-algebras-and-integration` (group h) requires your `finitary-ringel-hall-algebras`
- `cohomological-hall-algebras-and-quiver-correspondences` (group i) requires your `finitary-ringel-hall-algebras`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/non-ml-math-remaining-81-2026-10-18-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 5 batch adjudication, `non-ml-math-remaining-81-2026-10-18`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
