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
role: alpha-adjudicate
label: step8-d
covers: 5, 8, 10

# Step 8 — group **d**, run `frontier-20`

You are the group Alpha for batches **5**, **8**, **10**: 4 A/B pair(s), 8 page(s), 149 item(s), 79 open rejection(s) over 79 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-20-alpha-d-step8-context.json` is what a group Alpha for this group wrote during step 7,
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

| item | page | model | context_sha256 |
|---|---|---|---|
| `cex-a-covariant-hom-functor-on-an-additive-category-need-not-preserve-cokernels` | `preadditive-and-additive-categories-and-biproducts` | gpt-5.6-terra | `51be2f0ce5c47f2583e2cc4548be7aaf76206ebe316eb012c72bd8bfb2941c10` |
| `cex-a-zero-kernel-does-not-force-monicity-in-a-merely-semiadditive-category` | `preadditive-and-additive-categories-and-biproducts` | gpt-5.6-terra | `0ced7d849877c251a915dd41a4d0658938c625ff5afe13a42980ec5691a75ac8` |
| `cex-an-excellent-approximation-at-the-legendre-boundary` | `regular-continued-fractions-and-diophantine-approximation-examples` | gpt-5.6-terra | `9208ec6f1e29854435a4dfc325b0b07913fdd8ac72b891ba62c024e7705a99ed` |
| `cex-an-infinite-coproduct-need-not-agree-with-the-infinite-product` | `preadditive-and-additive-categories-and-biproducts` | gpt-5.6-terra | `5bb7b8ca4817b15022959a203e39f9c3d3080e42f083a8b5e7ca77ca86e82e6b` |
| `cex-commutative-monoids-are-semiadditive-and-not-additive` | `preadditive-and-additive-categories-and-biproducts-examples` | gpt-5.6-terra | `25ed4156f85c5a9d251af04feb9e83f959f73598461c618203d4a0091c0e4ca5` |
| `cex-pointed-sets-are-not-additive` | `preadditive-and-additive-categories-and-biproducts-examples` | gpt-5.6-terra | `2654683d368c23ee43e3add98954af1733aab5a9e732e0f05c1a68ac8f1bcb3f` |
| `cor-additive-categories-are-closed-under-passage-to-the-opposite` | `preadditive-and-additive-categories-and-biproducts` | gpt-5.6-terra | `f09579ce2c76841efb402f8bf09e0c25c631a146bb2c76d8ece44f0f3c0d43fe` |
| `cor-any-adjoint-between-additive-categories-is-additive` | `preadditive-and-additive-categories-and-biproducts` | gpt-5.6-terra | `8aade1eb524c8b29599962175dd01abb9679940d1649bcada9034e7b01c10d99` |
| `cor-dobinski-formula-for-bell-numbers` | `set-partitions-stirling-numbers-and-exponential-generating-functions` | gpt-5.6-terra | `7705356742ab9587c0a3a7269b201a67bba0dc4cd901e25412f4bbed4571e00a` |
| `cor-hom-functors-on-a-preadditive-category-are-left-exact` | `preadditive-and-additive-categories-and-biproducts` | gpt-5.6-terra | `3e74ca3f16eacfa2a3c874607c0726eab343a3800f3a415b4c2221879ac9e1b8` |
| `cor-in-a-preadditive-category-the-coequalizer-of-a-parallel-pair-is-the-cokernel-of-their-difference` | `preadditive-and-additive-categories-and-biproducts` | gpt-5.6-terra | `f30a67d887e9043eb0efe891ce9406c114b4efdada33a30dc499aa0cb176f6eb` |
| `cor-in-a-preadditive-category-with-a-zero-object-a-morphism-is-epic-exactly-when-its-cokernel-is-zero` | `preadditive-and-additive-categories-and-biproducts` | gpt-5.6-terra | `98554cb77d131e00bc1399e5d2ca57bae256b8fcfd82edf266602b692e47746e` |
| `cor-standard-specializations-of-the-labelled-symbolic-method` | `set-partitions-stirling-numbers-and-exponential-generating-functions` | gpt-5.6-terra | `5cfc8f56bc7646a967a6306b3163f421a683b3ccf77b42653102e83b39e74477` |
| `cor-touchards-congruence-for-bell-numbers` | `set-partitions-stirling-numbers-and-exponential-generating-functions` | gpt-5.6-terra | `cf1458672d5e97c0afe04cf84278541588eb1da5a70d9798fc76fbd6e320c87e` |
| `def-additive-category` | `preadditive-and-additive-categories-and-biproducts` | gpt-5.6-terra | `a6ef847670cc5e8320ab73c33f4a7b45f483a01188ef0d8e42eec99d0b22eba1` |
| `def-biproduct` | `preadditive-and-additive-categories-and-biproducts` | gpt-5.6-terra | `f7b9370800dfaf088d263909f9a57e58e95eef713caf769607dc069f4a52294b` |
| `def-comb-in-a-graph` | `blockades-combs-and-pattern-graphs` | gpt-5.6-terra | `ee884dd1323e47cec9ed9524bb2c4413e2139c5acacfd60d7529893c25eb27d7` |
| `def-continued-fraction-complete-quotients` | `regular-continued-fractions-and-diophantine-approximation` | gpt-5.6-terra | `6096bdc66f1070fd77d46b0d3de2b1506ec76fd95ee15b4bc907568361cb0ac4` |
| `def-convergents-of-regular-continued-fraction` | `regular-continued-fractions-and-diophantine-approximation` | gpt-5.6-terra | `7802f0193902e45720782bfe6fec95501cef654a6ca778012c2b858d4dcef8ae` |
| `def-eventually-periodic-continued-fraction` | `regular-continued-fractions-and-diophantine-approximation` | gpt-5.6-terra | `680b6a32afbddec2b02aeff67323ca2d353920d00168847f162fd9cd4f8a145c` |
| `def-regular-continued-fraction` | `regular-continued-fractions-and-diophantine-approximation` | gpt-5.6-terra | `ae7f65fcffbca031499f721338cd17aa028d52a187f4de1254d9e123c573fb9f` |
| `def-sparse-orientation-of-a-blockade` | `blockades-combs-and-pattern-graphs` | gpt-5.6-terra | `010d6fcbc8ae5a4e5b0cbab64070c7bfc6d3424a474ae014f3c9faccfeef52d9` |
| `def-the-additive-category-of-matrices-over-a-ring` | `preadditive-and-additive-categories-and-biproducts` | gpt-5.6-terra | `f260882280dbc2a245a02394d20b4d2d2c6722c8aaddd2cee59fdaeee71c9036` |
| `def-the-idempotent-completion-of-a-preadditive-category` | `preadditive-and-additive-categories-and-biproducts` | gpt-5.6-terra | `e8532ba00b5b5c87b4b974ed68a5c1e13e76264e1889c5d835160ccc0ec042d4` |
| `ex-a-negative-real-continued-fraction` | `regular-continued-fractions-and-diophantine-approximation-examples` | gpt-5.6-terra | `aae236bad40b70086460eb45c9ef9da8247686ec3807906d9a13e881d5cad9fe` |
| `ex-a-three-block-blockade-and-its-width` | `blockades-combs-and-pattern-graphs-examples` | gpt-5.6-terra | `c1c82091ed10991a3b3ee23c8e6f2ad8e75091237dc90f227e51d3f49cbe866d` |
| `ex-a-three-tooth-comb` | `blockades-combs-and-pattern-graphs-examples` | gpt-5.6-terra | `037467a5e383429d722463c66e1adc0b1a0d472403a8597c8fee541bd3509022` |
| `ex-abelian-groups-modules-and-vector-spaces-are-additive` | `preadditive-and-additive-categories-and-biproducts-examples` | gpt-5.6-terra | `de4482ad71c2f30933736851596f74511d3be6c471055e0699547f44e7163011` |
| `ex-additive-functors-out-of-the-matrix-category` | `preadditive-and-additive-categories-and-biproducts-examples` | gpt-5.6-terra | `7656e7e62fb5b00b841a4ca1dce043ec15cdc725e1d9cbfdcd293db20e4e6893` |
| `ex-best-rational-approximations-to-pi` | `regular-continued-fractions-and-diophantine-approximation-examples` | gpt-5.6-terra | `e7af3f90921cd9c1ed3c01251002b9f227072d3ba0ecb608ecdc2d4e06d0a469` |
| `ex-continued-fraction-of-square-root-fourteen` | `regular-continued-fractions-and-diophantine-approximation-examples` | gpt-5.6-terra | `adfe53f9c540527c35fa810fb2ffa21c29f0e9de36ebfba364812577ae222109` |
| `ex-continued-fraction-of-square-root-two` | `regular-continued-fractions-and-diophantine-approximation-examples` | gpt-5.6-terra | `2a5b1550753905a707b706b25231b5edf912679f46e20864d0bc72baa5beaa49` |
| `ex-golden-ratio-as-a-periodic-continued-fraction` | `regular-continued-fractions-and-diophantine-approximation-examples` | gpt-5.6-terra | `7d28a1a5b7a9c75fd4cf7ef56afbaeac315525973c90f53bfb15f1fc45f34caa` |
| `ex-the-biproduct-of-two-abelian-groups-computed-as-a-matrix-calculus` | `preadditive-and-additive-categories-and-biproducts-examples` | gpt-5.6-terra | `addecc8e1946898984db7bc9f00db33d2ad784c2279d5e53613e4d751cb73c79` |
| `ex-the-idempotent-completion-of-a-ring-is-the-finitely-generated-projective-modules` | `preadditive-and-additive-categories-and-biproducts-examples` | gpt-5.6-terra | `1f31d6a912ba806cae63f202cf16b244d196ec2f496e800a4e212a262852e0c5` |
| `fs-a-category-with-finite-products-and-finite-coproducts-has-biproducts` | `preadditive-and-additive-categories-and-biproducts` | gpt-5.6-terra | `bc6f70eb3a216a816d1286dc5144fa883062147147913872832757bc4d8d4f97` |
| `fs-a-functor-preserving-zero-morphisms-is-additive` | `preadditive-and-additive-categories-and-biproducts` | gpt-5.6-terra | `1ed8a469e201a81521c668eeab1ffe31d4ddbf49e325875de7c4fbf5eacc8598` |
| `fs-bell-numbers-count-ordered-set-partitions` | `set-partitions-stirling-numbers-and-exponential-generating-functions-examples` | gpt-5.6-terra | `4240093770e8398b8e7add0093ee3f8caa6b5f4e26d37a46545026667ea18455` |
| `fs-every-idempotent-splits` | `preadditive-and-additive-categories-and-biproducts` | gpt-5.6-terra | `8457d8ec3081b352d77b8249dafb1507a5a6153a089760a692269880c66321df` |
| `fs-the-addition-on-an-additive-category-is-extra-structure-that-must-be-chosen` | `preadditive-and-additive-categories-and-biproducts` | gpt-5.6-terra | `1579ced66dbbb9adb3a740dee70ba75da2cb35cd395cee5ba7c9e4ccaba4d0bb` |
| `lem-continued-fraction-convergent-recurrence` | `regular-continued-fractions-and-diophantine-approximation` | gpt-5.6-terra | `f16c5fa750a48dd05f021abd60b5f12b793c57703a91a25576e44461b3de2ca1` |
| `lem-continued-fraction-determinant-identity` | `regular-continued-fractions-and-diophantine-approximation` | gpt-5.6-terra | `7d9de7f49c1db59bf8f5cd3ca25267cfc49a7447aeba9fc72fd52e4b73023a88` |
| `lem-continued-fraction-error-bound` | `regular-continued-fractions-and-diophantine-approximation` | gpt-5.6-terra | `c7cf84fae4496681da3e17b60b0067d3dfeea3e1cfc229532157913600007f62` |
| `lem-maximal-pattern-pure-blockades-force-many-blocks` | `blockades-combs-and-pattern-graphs` | gpt-5.6-terra | `5a76058f647539615288451717c0bcb8dcc299b030e197a29c9cd9be7f3607f5` |
| `lem-p-four-free-pattern-graphs-have-square-root-homogeneous-sets` | `blockades-combs-and-pattern-graphs` | gpt-5.6-terra | `5ef0dd53803f8caf394c25c922b4af8712ce2c753709e50a15b1e792bee975d0` |
| `lem-periodic-continued-fraction-is-quadratic` | `regular-continued-fractions-and-diophantine-approximation` | gpt-5.6-terra | `d7a9abd994e850fadf83fc8d51b513fba9826281e1194aea5d8873fb88ccdd17` |
| `lem-quadratic-irrational-complete-quotients-are-finite-state` | `regular-continued-fractions-and-diophantine-approximation` | gpt-5.6-terra | `e8b06014cf37974f051cac7e9a21c9bdf37865fdb88ff10970610bf89912e228` |
| `prop-a-small-product-of-preadditive-categories-is-preadditive` | `preadditive-and-additive-categories-and-biproducts` | gpt-5.6-terra | `08c9ed51d0d83f3e49207f187ca6cd4a4cca43d10e990145d9353a5373e43464` |
| `prop-an-additive-functor-preserves-split-biproduct-diagrams` | `preadditive-and-additive-categories-and-biproducts` | gpt-5.6-terra | `c2f871a57f28dc81d5bc1942ef9ff344bbabbfed5535cdc0b05c98f82b13380b` |
| `rem-the-published-module-statement-is-the-instance-of-this-corollary` | `preadditive-and-additive-categories-and-biproducts` | gpt-5.6-terra | `d6d8c815f071fd16bd9990665e51f1c33a90a320e59c703d4632eef9b4a63074` |
| `thm-a-functor-between-additive-categories-is-additive-exactly-when-it-preserves-finite-biproducts` | `preadditive-and-additive-categories-and-biproducts` | gpt-5.6-terra | `bf3198f1789ec984e3ccc4c4d8d4a5859dd0817094c4695a8434c6a4dd186c41` |
| `thm-a-one-object-preadditive-category-is-the-same-thing-as-a-ring` | `preadditive-and-additive-categories-and-biproducts` | gpt-5.6-terra | `ad540407b7accfcc0be801093a3de5211da72d4fcc746548e5a82ea105766fb7` |
| `thm-a-semiadditive-category-is-preadditive-exactly-when-every-morphism-has-an-additive-inverse` | `preadditive-and-additive-categories-and-biproducts` | gpt-5.6-terra | `d51df42ce75f0271746c6f850bab9a9f99bb47599df1f5691f85637d35b853b6` |
| `thm-additive-functors-from-a-ring-to-abelian-groups-are-left-modules` | `preadditive-and-additive-categories-and-biproducts` | gpt-5.6-terra | `d09519f473acf97185ac4ba896991eb3371d5346760b8d768465e640e71d2e12` |
| `thm-an-additive-category-with-kernels-is-idempotent-complete` | `preadditive-and-additive-categories-and-biproducts` | gpt-5.6-terra | `2f16832ed3a3015693ac90296acd28b0d2b6ace70961d3485c12cac3b1ba34f5` |
| `thm-an-additive-functor-is-left-exact-exactly-when-it-preserves-kernels` | `preadditive-and-additive-categories-and-biproducts` | gpt-5.6-terra | `cd62891dd6011eff62a1467554636bf9ed3dd79193fae0c0949f9dd1096f4db3` |
| `thm-biproduct-data-characterisation-without-addition` | `preadditive-and-additive-categories-and-biproducts` | gpt-5.6-terra | `5af4f61d0e35461d444903eb60475c48031d83d26c6bc2de09e09bb1d2e07867` |
| `thm-complete-or-anticomplete-blockade-hypotheses-force-restricted-induced-subgraphs` | `blockades-combs-and-pattern-graphs` | gpt-5.6-terra | `d9eaf4aecdbcfa8432d30cfebc53a846d59cc8bb0e30ed5bd9bb05f26cd1a4df` |
| `thm-composition-of-morphisms-between-finite-biproducts-is-matrix-multiplication` | `preadditive-and-additive-categories-and-biproducts` | gpt-5.6-terra | `de4fee67a0276609781fe7a501444291e96fecb6d9935c387ccf0bf1715b833b` |
| `thm-continued-fraction-algorithm-for-real-numbers` | `regular-continued-fractions-and-diophantine-approximation` | gpt-5.6-terra | `cc75fa635f1f195d71e2ebf3b938b7e038fe856abd1cd73571ee97091c4cfacd` |
| `thm-continued-fraction-convergents-are-best-approximations` | `regular-continued-fractions-and-diophantine-approximation` | gpt-5.6-terra | `5fe890b1fb3d578a10fd6b7f748486a2e9f09395781b691e4ce28c50da0519ec` |
| `thm-convergence-of-infinite-regular-continued-fractions` | `regular-continued-fractions-and-diophantine-approximation` | gpt-5.6-terra | `9c2e901555f725acfc09a5e12980c0f1f8b387c219a24a366b31af1146f8c8e9` |
| `thm-exponential-formula-for-set-partitions-and-bell-numbers` | `set-partitions-stirling-numbers-and-exponential-generating-functions` | gpt-5.6-terra | `516c06d06c255b6e53b7defa7875953994b04017e6cc4bab94d3760b671d6685` |
| `thm-in-a-preadditive-category-a-finite-product-is-automatically-a-biproduct` | `preadditive-and-additive-categories-and-biproducts` | gpt-5.6-terra | `4dac7983df7a784de912acc99fb40c4400637657b81aedbebbf7e8fd20eecfc8` |
| `thm-in-a-preadditive-category-the-equalizer-of-a-parallel-pair-is-the-kernel-of-their-difference` | `preadditive-and-additive-categories-and-biproducts` | gpt-5.6-terra | `adf48fe6f873e7f97257be09c1959754a826f9afd523ac5a8f6f227153721ee0` |
| `thm-labelled-symbolic-method-rules-for-exponential-generating-functions` | `set-partitions-stirling-numbers-and-exponential-generating-functions` | gpt-5.6-terra | `ff612999a282e1f3bb2fa628cba90a8ebde04ab55765e798865d4a8fc15923db` |
| `thm-lagrange-periodic-continued-fraction-theorem` | `regular-continued-fractions-and-diophantine-approximation` | gpt-5.6-terra | `77637d32f781c93a045a39710610422a37c7d0109ffb263dfd68a04d88c289d1` |
| `thm-lah-numbers-count-ordered-set-partitions-and-expand-rising-factorials` | `set-partitions-stirling-numbers-and-exponential-generating-functions` | gpt-5.6-terra | `d17fe458069819604fa507e1ea330bef5f245837410fcaba7eadba8c3c579938` |
| `thm-large-sparse-pair-hypotheses-yield-x-sparse-blockades` | `blockades-combs-and-pattern-graphs` | gpt-5.6-terra | `203de1227c830a90d102064ef84cb1095a2d18a37dc7b34f7cf57329f5174152` |
| `thm-legendre-continued-fraction-criterion` | `regular-continued-fractions-and-diophantine-approximation` | gpt-5.6-terra | `02ee6325ededccb60d6720cb9dfbbfe648d8301de3216aa85dd4095ed84815bd` |
| `thm-morphisms-between-finite-biproducts-correspond-to-matrices` | `preadditive-and-additive-categories-and-biproducts` | gpt-5.6-terra | `a845d97534a2799af6c6ec6f5ec28ca294f7be630020f35c76db7f62d6dfd8c5` |
| `thm-normalized-finite-continued-fraction-uniqueness` | `regular-continued-fractions-and-diophantine-approximation` | gpt-5.6-terra | `4ff545ba42103139887a98bfb074006906d65fe283431088ba8a936fd9b75241` |
| `thm-powers-expand-in-the-falling-factorial-basis` | `set-partitions-stirling-numbers-and-exponential-generating-functions` | gpt-5.6-terra | `051d8e382b78d5c039f5348a22c5a905f09600b4b808d96e5cf87ba23a873577` |
| `thm-rational-continued-fraction-termination` | `regular-continued-fractions-and-diophantine-approximation` | gpt-5.6-terra | `c4878b9e761b76ffce8c58b6ea867adb29e3d2ac5279ef321595b05582967ca7` |
| `thm-signed-stirling-inversion` | `set-partitions-stirling-numbers-and-exponential-generating-functions` | gpt-5.6-terra | `541a3428c8408def375cf7f9b18804c518680e13710aae1c6d52ffddc6fce3f4` |
| `thm-the-idempotent-completion-is-idempotent-complete-and-its-inclusion-is-fully-faithful-and-universal` | `preadditive-and-additive-categories-and-biproducts` | gpt-5.6-terra | `2828682aa4e0682efc92822fccebb9e12862cffef78e1801eb727c23fdddd1ee` |
| `thm-the-matrix-category-is-equivalent-to-the-finitely-generated-free-modules` | `preadditive-and-additive-categories-and-biproducts` | gpt-5.6-terra | `d9ec1b799747bde9a534292f0b82f5e58ed3ba3022840236bba7ab7a0dbc6b85` |
| `thm-the-matrix-category-over-a-ring-is-additive` | `preadditive-and-additive-categories-and-biproducts` | gpt-5.6-terra | `045ba24365a52379244fdd493d29d9a8398492ed1e073406e9aa93399cf1c7ab` |
| `thm-the-opposite-of-a-preadditive-category-is-preadditive` | `preadditive-and-additive-categories-and-biproducts` | gpt-5.6-terra | `6e37a2a9de80f2cb83675a719726b1660ad5647618a33bd90b9e1df671677d50` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — fatal-only configured-judge adjudication, `frontier-20`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Append one row per rejection to `research/frontier-20-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set.

For an incoming alert, append the owning-group disposition to
`research/frontier-20-step8-alert-decisions.jsonl`. A defect in another group is a
`research/frontier-20-step8-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-8 baseline or rewrite shared ledgers. Run the Step-8 guard
and scope check, then write `research/frontier-20-alpha-step8-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.
