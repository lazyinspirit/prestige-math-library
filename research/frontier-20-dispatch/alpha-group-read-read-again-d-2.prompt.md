# Alpha

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
group work, `research/frontier-20-alpha-groups.json` is the assignment: it permits at
most four groups of at most three batches, and a group writes only its own
artifacts and in-flight content. Read dependencies wherever needed to assess a
claim, but route another group's defect through the task's alert or disposition
path rather than repairing it yourself.

Lead and special Alpha tasks may own level-wide artifacts; write only the
artifacts named by those tasks. Never rename an established item id. Do not
write judge verdicts or stamps. Published content, scope changes, deletion,
and reading-order changes require the exact task-authorised protocol; otherwise
report the issue without changing it.

## Review and repair standard

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
not current coverage. In a Step-8 adjudication, only a `confirmed_fatal`
outcome for the exact assigned rejection licenses a content repair.
`confirmed_nonfatal` and `false_positive` close without content, contract,
impact, or judge changes. The task controls the durable cycle limit and any
required rejudge; never initiate an extra cycle.

Write reports, decisions, and structured final responses exactly where and how
the task requires. Use the prescribed append interface for shared JSONL
ledgers. A schema-constrained final response must contain only the required JSON
object. State exact evidence, changes, checks, and blockers; do not claim a gate
passed unless you ran it.


---

# This dispatch

run: frontier-20
role: alpha-group-read
label: read-again-d-2

# Step 8 — group **d**, run `frontier-20`

You are the group Alpha for batches **5**, **8**, **10**: 4 A/B pair(s), 8 page(s), 149 item(s), 0 open rejection(s) over 0 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

**No step-7 digest exists for this group.** The reading half did not run or did
not produce one, so you are meeting this mathematics for the first time with the
rejections already in front of you. Read the pages before the verdicts anyway —
the order matters more than where the notes came from.

## Read scope, write scope

**You may read the entire library.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-20-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 5 | `regular-continued-fractions-and-diophantine-approximation` | A | number-theory | 78.3 | `positive-definite-binary-quadratic-forms-and-reduction-examples` |
| 5 | `regular-continued-fractions-and-diophantine-approximation-examples` | B | number-theory | 78.4 | `regular-continued-fractions-and-diophantine-approximation` |
| 8 | `set-partitions-stirling-numbers-and-exponential-generating-functions` | A | combinatorics | 199 | `lattice-paths-and-catalan-numbers`, `inclusion-exclusion-and-the-pigeonhole-principle`, `combinatorial-classes-and-the-symbolic-method`, `permutation-statistics-inversions-and-eulerian-numbers`, `the-exponential-function` |
| 8 | `set-partitions-stirling-numbers-and-exponential-generating-functions-examples` | B | combinatorics | 200 | `set-partitions-stirling-numbers-and-exponential-generating-functions` |
| 8 | `blockades-combs-and-pattern-graphs` | A | combinatorics | 407 | `polynomial-rodl-and-viral-equivalence` |
| 8 | `blockades-combs-and-pattern-graphs-examples` | B | combinatorics | 408 | `blockades-combs-and-pattern-graphs` |
| 10 | `preadditive-and-additive-categories-and-biproducts` | A | category-theory | 365.013 | `kan-extensions-density-and-the-free-cocompletion-examples` |
| 10 | `preadditive-and-additive-categories-and-biproducts-examples` | B | category-theory | 365.014 | `preadditive-and-additive-categories-and-biproducts` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `regular-continued-fractions-and-diophantine-approximation` — Regular Continued Fractions and Diophantine Approximation (19 item(s))

- `def-regular-continued-fraction` · definition — Finite and infinite regular continued fractions
- `def-convergents-of-regular-continued-fraction` · definition — Convergents of a regular continued fraction
- `lem-continued-fraction-convergent-recurrence` · lemma — Convergents are given by the standard recurrences and tail formula
- `lem-continued-fraction-determinant-identity` · lemma — Determinant identity for consecutive convergents
- `cor-continued-fraction-convergents-are-reduced` · corollary — Convergents are reduced fractions
- `def-continued-fraction-complete-quotients` · definition — Complete quotients in the continued-fraction algorithm
- `lem-continued-fraction-complete-quotient-formula` · lemma — Complete-quotient tail formula
- `thm-convergence-of-infinite-regular-continued-fractions` · theorem — Every infinite regular continued fraction converges to a unique real number
- `thm-continued-fraction-algorithm-for-real-numbers` · theorem — The continued-fraction algorithm for real numbers
- `thm-rational-continued-fraction-termination` · theorem — The continued-fraction algorithm terminates exactly on rational numbers
- `thm-normalized-finite-continued-fraction-uniqueness` · theorem — Normalized finite regular continued fractions are unique
- `lem-continued-fraction-error-bound` · lemma — Convergent error bound
- `thm-continued-fraction-convergents-are-best-approximations` · theorem — Convergents are best rational approximations of the first kind
- `thm-legendre-continued-fraction-criterion` · theorem — Legendre's criterion for convergents
- `def-quadratic-irrational` · definition — Quadratic irrationals
- `def-eventually-periodic-continued-fraction` · definition — Eventually periodic regular continued fractions
- `lem-periodic-continued-fraction-is-quadratic` · lemma — Eventually periodic regular continued fractions are quadratic irrationals
- `lem-quadratic-irrational-complete-quotients-are-finite-state` · lemma — Complete quotients of a quadratic irrational lie in a finite state space
- `thm-lagrange-periodic-continued-fraction-theorem` · theorem — Lagrange's theorem for regular continued fractions

### `regular-continued-fractions-and-diophantine-approximation-examples` — Regular Continued Fractions and Diophantine Approximation — Examples (8 item(s))

- `ex-two-finite-continued-fractions-for-a-rational` · example — A rational number has exactly two finite regular continued-fraction expansions
- `ex-continued-fraction-and-extended-euclid` · example — The continued fraction of 37/11 matches Euclid and Bézout
- `ex-continued-fraction-of-square-root-two` · example — The continued fraction [1; overline 2] for sqrt(2)
- `ex-continued-fraction-of-square-root-fourteen` · example — The continued fraction [3; overline{1,2,1,6}] for sqrt(14)
- `ex-golden-ratio-as-a-periodic-continued-fraction` · example — The golden ratio is [1; overline 1]
- `ex-best-rational-approximations-to-pi` · example — The convergents 22/7, 333/106, and 355/113 for pi
- `cex-an-excellent-approximation-at-the-legendre-boundary` · counterexample — A very good rational approximation need not be a convergent once the Legendre constant exceeds 1/2
- `ex-a-negative-real-continued-fraction` · example — A negative irrational still has positive later partial quotients

### `set-partitions-stirling-numbers-and-exponential-generating-functions` — Set Partitions, Stirling Numbers and Exponential Generating Functions (21 item(s))

- `rem-stirling-number-and-egf-conventions` · remark — This page fixes the Stirling-sign and exponential-generating-function conventions
- `def-set-partition-and-block` · definition — Set partitions and blocks
- `lem-set-partitions-of-a-finite-set-are-finite` · lemma — The set partitions of a finite set form a finite set
- `def-stirling-second-kind-and-bell-number` · definition — The Stirling numbers of the second kind and the Bell numbers
- `def-signed-and-signless-stirling-first-kind` · definition — The signed and signless Stirling numbers of the first kind
- `def-rising-factorial` · definition — The rising factorial
- `def-exponential-generating-function-over-a-q-algebra` · definition — Exponential generating functions over a commutative $\mathbb{Q}$-algebra
- `def-labelled-classes-and-basic-labelled-constructions` · definition — Labelled classes, labelled product, and the constructions $\operatorname{SEQ}$, $\operatorname{SET}$, $\operatorname{CYC}$, and boxed product
- `thm-stirling-second-kind-recurrence` · theorem — The Stirling numbers of the second kind satisfy $S(n,k)=kS(n-1,k)+S(n-1,k-1)$
- `cor-bell-number-binomial-recurrence` · corollary — The Bell numbers satisfy $B_{n+1}=\sum_{k=0}^n\binom{n}{k}B_k$
- `thm-stirling-second-kind-inclusion-exclusion-formula` · theorem — The Stirling numbers of the second kind are given by $S(n,k)=\frac{1}{k!}\sum_{i=0}^k(-1)^i\binom{k}{i}(k-i)^n$
- `thm-powers-expand-in-the-falling-factorial-basis` · theorem — Ordinary powers expand in the falling-factorial basis by the second-kind Stirling numbers
- `thm-signless-first-kind-recurrence-and-rising-factorial-expansion` · theorem — The signless first-kind Stirling numbers satisfy their recurrence and expand the rising factorial
- `thm-signed-stirling-inversion` · theorem — The signed first-kind and second-kind Stirling numbers are inverse transition matrices
- `thm-labelled-symbolic-method-rules-for-exponential-generating-functions` · theorem — The labelled constructions translate into the usual exponential-generating-function rules
- `thm-vertical-egfs-for-the-stirling-triangles` · theorem — The two Stirling triangles have the expected vertical exponential generating functions
- `thm-exponential-formula-for-set-partitions-and-bell-numbers` · theorem — The exponential formula gives the Bell-number generating function
- `cor-dobinski-formula-for-bell-numbers` · corollary — Dobinski's formula expresses the Bell numbers as $B_n=e^{-1}\sum_{\ell\ge0}\ell^n/\ell!$
- `cor-standard-specializations-of-the-labelled-symbolic-method` · corollary — Standard labelled specializations give involutions, ordered Bell numbers, and partitions without singletons
- `thm-lah-numbers-count-ordered-set-partitions-and-expand-rising-factorials` · theorem — The Lah numbers count ordered-block set partitions and expand the rising factorial in the falling basis
- `cor-touchards-congruence-for-bell-numbers` · corollary — Touchard's congruence: for prime $p$, $B_{n+p}\equiv B_n+B_{n+1}\pmod p$

### `set-partitions-stirling-numbers-and-exponential-generating-functions-examples` — Set Partitions, Stirling Numbers and Exponential Generating Functions — Examples (13 item(s))

- `ex-set-partitions-of-four-by-block-count` · example — The set partitions of $[4]$ grouped by their number of blocks
- `ex-s-four-two-computed-by-recurrence-formula-and-listing` · example — $S(4,2)$ computed by recurrence, inclusion-exclusion, and direct listing
- `ex-stirling-triangles-invert-up-to-four` · example — The two Stirling triangles multiply to the identity through size $4$
- `ex-ordered-bell-versus-bell-at-three` · example — Ordered Bell structures and ordinary Bell partitions differ already on $[3]$
- `ex-involutions-of-four-and-their-cycle-decomposition` · example — The involutions of $S_4$ are exactly the products of disjoint $1$-cycles and $2$-cycles
- `ex-lah-number-l-four-two` · example — The Lah number $L(4,2)$ counts the ordered two-block partitions of $[4]$
- `ex-set-partitions-of-four-with-no-singletons` · example — The partitions of $[4]$ with no singleton blocks
- `ex-singleton-block-families-have-egf-exp-x` · example — Singleton blocks alone recover the EGF $e^x$
- `fs-bell-numbers-count-ordered-set-partitions` · false-statement — FALSE: the Bell number counts ordered set partitions
- `fs-stirling-second-kind-counts-surjections` · false-statement — FALSE: $S(n,k)$ counts surjections $[n]\to[k]$
- `fs-exponential-generating-functions-multiply-without-labelled-product-hypothesis` · false-statement — FALSE: exponential generating functions multiply for every informal product of labelled structures
- `cex-set-partitions-with-the-same-block-sizes-can-be-distinct` · counterexample — Two distinct set partitions can have the same multiset of block sizes
- `cex-the-second-kind-inclusion-exclusion-formula-does-not-count-permutations-by-cycles` · counterexample — The second-kind inclusion-exclusion formula does not count permutations by cycle number

### `blockades-combs-and-pattern-graphs` — Blockades, Combs and Pattern Graphs (11 item(s))

- `rem-blockade-conventions-and-order` · remark — Blockades are ordered sequences, and directional sparsity follows that order
- `def-blockade-length-and-width` · definition — A blockade, its length, and its width
- `def-complete-anticomplete-pure-and-x-sparse-blockades` · definition — Complete, anticomplete, pure, weakly sparse, and $x$-sparse blockades
- `def-comb-in-a-graph` · definition — Combs built on a blockade
- `def-pattern-graph-of-a-pure-blockade` · definition — The pattern graph of a pure blockade
- `def-sparse-orientation-of-a-blockade` · definition — The sparse orientation attached to an ordered blockade
- `lem-p-four-free-pattern-graphs-have-square-root-homogeneous-sets` · lemma — $P_4$-free pattern graphs have homogeneous sets of square-root size
- `lem-pure-blockades-with-p-four-free-patterns-contain-large-homogeneous-subblockades` · lemma — A pure blockade whose pattern graph is $P_4$-free contains a large complete or anticomplete subblockade
- `lem-maximal-pattern-pure-blockades-force-many-blocks` · lemma — The maximal-pattern argument forces a long pure blockade before theorem 2.3 can fail
- `thm-complete-or-anticomplete-blockade-hypotheses-force-restricted-induced-subgraphs` · theorem — Polynomially large complete or anticomplete blockades force polynomially large restricted induced subgraphs
- `thm-large-sparse-pair-hypotheses-yield-x-sparse-blockades` · theorem — Repeated large sparse pairs produce a long $x$-sparse blockade

### `blockades-combs-and-pattern-graphs-examples` — Blockades, Combs and Pattern Graphs — Examples (9 item(s))

- `ex-a-three-block-blockade-and-its-width` · example — A three-block blockade and its width
- `ex-pure-but-not-complete-blockade` · example — A pure blockade need not be complete or anticomplete
- `ex-a-three-tooth-comb` · example — A three-tooth comb built on a blockade
- `ex-pattern-graph-of-a-pure-blockade` · example — The pattern graph of a four-block pure blockade
- `ex-a-sparse-orientation-of-four-blocks` · example — An ordered blockade determines a sparse orientation
- `fs-every-pure-blockade-is-complete-or-anticomplete` · false-statement — FALSE: every pure blockade is complete or anticomplete
- `fs-blockade-order-never-matters-for-x-sparsity` · false-statement — FALSE: reordering a blockade never changes whether it is $x$-sparse
- `cex-weak-sparsity-does-not-imply-directional-sparsity` · counterexample — Weak sparsity does not force directional sparsity
- `cex-a-comb-fails-when-a-tooth-sees-a-foreign-block` · counterexample — A would-be comb fails if one attachment vertex sees a foreign block

### `preadditive-and-additive-categories-and-biproducts` — Preadditive and Additive Categories and Biproducts (60 item(s))

- `def-preadditive-category` · definition — Preadditive category
- `thm-a-one-object-preadditive-category-is-the-same-thing-as-a-ring` · theorem — A one-object preadditive category is the same thing as a ring
- `thm-additive-functors-from-a-ring-to-abelian-groups-are-left-modules` · theorem — Additive functors from a ring to abelian groups are left modules
- `def-additive-functor` · definition — Additive functor
- `prop-an-additive-functor-preserves-zero-morphisms` · proposition — An additive functor preserves zero morphisms
- `thm-the-opposite-of-a-preadditive-category-is-preadditive` · theorem — The opposite of a preadditive category is preadditive
- `prop-a-small-product-of-preadditive-categories-is-preadditive` · proposition — A small product of preadditive categories is preadditive
- `prop-additive-functors-and-natural-transformations-form-a-preadditive-category` · proposition — Additive functors and natural transformations form a preadditive category
- `thm-in-a-preadditive-category-an-object-is-initial-exactly-when-it-is-terminal` · theorem — In a preadditive category, an object is initial exactly when it is terminal
- `prop-the-zero-morphism-of-a-preadditive-category-is-the-neutral-element-of-its-hom-group` · proposition — In a preadditive category with a zero object, the zero morphism is the neutral element of each hom-group
- `cor-a-preadditive-category-with-a-zero-object-has-zero-morphisms-in-the-published-sense` · corollary — A preadditive category with a zero object has zero morphisms in the published sense
- `def-canonical-morphism-from-a-finite-coproduct-to-a-finite-product` · definition — Canonical morphism from a finite coproduct to a finite product
- `def-biproduct` · definition — Biproduct
- `thm-biproduct-data-characterisation-without-addition` · theorem — Biproduct data characterisation without addition
- `prop-the-empty-biproduct-is-a-zero-object` · proposition — The empty biproduct is a zero object
- `prop-biproducts-are-associative-commutative-and-unital-up-to-canonical-isomorphism` · proposition — Biproducts are associative, commutative, and unital up to canonical isomorphism
- `thm-a-category-with-finite-biproducts-is-enriched-in-commutative-monoids` · theorem — A category with finite biproducts is enriched in commutative monoids
- `thm-the-commutative-monoid-enrichment-of-a-category-with-finite-biproducts-is-unique` · theorem — The commutative-monoid enrichment of a category with finite biproducts is unique
- `cor-the-uniqueness-of-the-enrichment-is-an-instance-of-the-eckmann-hilton-argument` · corollary — The uniqueness of the enrichment is an Eckmann-Hilton phenomenon
- `def-semiadditive-category` · definition — Semiadditive category
- `thm-on-a-biproduct-the-injections-and-projections-satisfy-the-identity-sum-relation` · theorem — On a biproduct, the injections and projections satisfy the identity-sum relation
- `thm-a-semiadditive-category-is-preadditive-exactly-when-every-morphism-has-an-additive-inverse` · theorem — A semiadditive category is preadditive exactly when every morphism has an additive inverse
- `def-additive-category` · definition — Additive category
- `thm-in-a-preadditive-category-a-finite-product-is-automatically-a-biproduct` · theorem — In a preadditive category, a finite product is automatically a biproduct
- `cor-additive-categories-are-closed-under-passage-to-the-opposite` · corollary — Additive categories are closed under passage to the opposite
- `thm-morphisms-between-finite-biproducts-correspond-to-matrices` · theorem — Morphisms between finite biproducts correspond to matrices
- `thm-composition-of-morphisms-between-finite-biproducts-is-matrix-multiplication` · theorem — Composition between finite biproducts is matrix multiplication
- `cor-the-biproduct-of-morphisms-is-the-diagonal-matrix` · corollary — The biproduct of morphisms is the diagonal matrix
- `cex-an-infinite-coproduct-need-not-agree-with-the-infinite-product` · counterexample — An infinite coproduct need not agree with the infinite product
- `def-the-additive-category-of-matrices-over-a-ring` · definition — The additive category of matrices over a ring
- `thm-the-matrix-category-over-a-ring-is-additive` · theorem — The matrix category over a ring is additive
- `thm-the-matrix-category-is-equivalent-to-the-finitely-generated-free-modules` · theorem — The matrix category is equivalent to the finitely generated free modules
- `rem-the-matrix-category-is-the-finite-biproduct-completion-of-a-ring` · remark — The matrix category is the finite-biproduct completion of a ring
- `thm-in-a-preadditive-category-the-equalizer-of-a-parallel-pair-is-the-kernel-of-their-difference` · theorem — In a preadditive category, the equalizer of a parallel pair is the kernel of their difference
- `cor-in-a-preadditive-category-the-coequalizer-of-a-parallel-pair-is-the-cokernel-of-their-difference` · corollary — In a preadditive category, the coequalizer of a parallel pair is the cokernel of their difference
- `thm-an-additive-category-with-all-kernels-and-cokernels-has-all-finite-limits-and-colimits` · theorem — An additive category with all kernels and cokernels has all finite limits and colimits
- `thm-in-a-preadditive-category-with-a-zero-object-a-morphism-is-monic-exactly-when-its-kernel-is-zero` · theorem — In a preadditive category with a zero object, a morphism is monic exactly when its kernel is zero
- `cor-in-a-preadditive-category-with-a-zero-object-a-morphism-is-epic-exactly-when-its-cokernel-is-zero` · corollary — In a preadditive category with a zero object, a morphism is epic exactly when its cokernel is zero
- `cex-a-zero-kernel-does-not-force-monicity-in-a-merely-semiadditive-category` · counterexample — A zero kernel does not force monicity in a merely semiadditive category
- `thm-an-additive-functor-preserves-finite-biproducts` · theorem — An additive functor preserves finite biproducts
- `thm-a-functor-between-additive-categories-is-additive-exactly-when-it-preserves-finite-biproducts` · theorem — A functor between additive categories is additive exactly when it preserves finite biproducts
- `cor-a-functor-between-additive-categories-preserving-finite-products-is-additive` · corollary — A functor between additive categories preserving finite products is additive
- `cor-any-adjoint-between-additive-categories-is-additive` · corollary — Any adjoint between additive categories is additive
- `thm-an-additive-functor-is-left-exact-exactly-when-it-preserves-kernels` · theorem — An additive functor is left exact exactly when it preserves kernels
- `prop-an-additive-functor-preserves-split-biproduct-diagrams` · proposition — An additive functor preserves split biproduct diagrams
- `thm-the-hom-bifunctor-of-a-preadditive-category-takes-values-in-abelian-groups` · theorem — The Hom bifunctor of a preadditive category takes values in abelian groups
- `cor-hom-functors-on-a-preadditive-category-are-left-exact` · corollary — Hom functors on a preadditive category are left exact
- `rem-the-published-module-statement-is-the-instance-of-this-corollary` · remark — The published module statement is the instance of this corollary
- `cex-a-covariant-hom-functor-on-an-additive-category-need-not-preserve-cokernels` · counterexample — A covariant hom functor on an additive category need not preserve cokernels
- `def-idempotent-and-split-idempotent` · definition — Idempotent and split idempotent
- `thm-a-splitting-of-an-idempotent-is-simultaneously-an-equalizer-and-a-coequalizer-and-is-unique-up-to-unique-isomorphism` · theorem — A splitting of an idempotent is simultaneously an equalizer and a coequalizer and is unique up to unique isomorphism
- `def-idempotent-complete-category` · definition — Idempotent-complete category
- `thm-an-additive-category-with-kernels-is-idempotent-complete` · theorem — An additive category with kernels is idempotent complete
- `def-the-idempotent-completion-of-a-preadditive-category` · definition — The idempotent completion of a preadditive category
- `thm-the-idempotent-completion-is-idempotent-complete-and-its-inclusion-is-fully-faithful-and-universal` · theorem — The idempotent completion is idempotent complete, and its inclusion is fully faithful and universal
- `fs-the-addition-on-an-additive-category-is-extra-structure-that-must-be-chosen` · false-statement — The addition on an additive category is extra structure that must be chosen
- `fs-a-category-with-finite-products-and-finite-coproducts-has-biproducts` · false-statement — A category with finite products and finite coproducts has biproducts
- `fs-a-functor-preserving-zero-morphisms-is-additive` · false-statement — A functor preserving zero morphisms is additive
- `fs-a-preadditive-category-with-a-zero-object-has-binary-biproducts` · false-statement — A preadditive category with a zero object has binary biproducts
- `fs-every-idempotent-splits` · false-statement — Every idempotent splits

### `preadditive-and-additive-categories-and-biproducts-examples` — Preadditive and Additive Categories and Biproducts - Examples (8 item(s))

- `ex-the-biproduct-of-two-abelian-groups-computed-as-a-matrix-calculus` · example — The biproduct of two abelian groups computed as a matrix calculus
- `ex-abelian-groups-modules-and-vector-spaces-are-additive` · example — Abelian groups, modules, and vector spaces are additive
- `ex-a-ring-viewed-as-a-one-object-preadditive-category-with-its-matrices` · example — A ring viewed as a one-object preadditive category with its matrices
- `ex-the-idempotent-completion-of-a-ring-is-the-finitely-generated-projective-modules` · example — The idempotent completion of a ring is the finitely generated projective modules
- `cex-pointed-sets-are-not-additive` · counterexample — Pointed sets are not additive
- `cex-commutative-monoids-are-semiadditive-and-not-additive` · counterexample — Commutative monoids are semiadditive and not additive
- `ex-additive-functors-out-of-the-matrix-category` · example — Additive functors out of the matrix category
- `ex-a-preadditive-category-with-two-objects-and-a-nonzero-hom-group` · example — A preadditive category with two objects and a nonzero hom-group

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
`research/frontier-20-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 7 — group reading digest, `frontier-20`

Read every page and item in the generated group header, its cited published
dependencies, and every listed cross-group seam. This dispatch is read-only;
record concerns and alerts without repairing them.

Return only the supplied Step-8 context JSON. `pages_read`, `items_read`, and
`seams_checked` must be exact inventories of the generated scope. Record the
group's conventions, load-bearing items, opened published dependencies, and
concrete concerns; an empty concerns or alerts list is valid.

Put a finding about another group's item in `alerts`, not `concerns`; the scope
tool routes it to that item's owning group before adjudication.
