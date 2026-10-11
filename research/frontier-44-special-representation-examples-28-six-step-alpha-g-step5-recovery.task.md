# Step 5 adjudication — group **g**, run `frontier-44-special-representation-examples-28-six-step`

You are the group Alpha for batches 1, 2, 3: 3 A/B pair(s), 6 page(s), 104 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **1**: `research/frontier-44-special-representation-examples-28-six-step-batch-1-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **2**: `research/frontier-44-special-representation-examples-28-six-step-batch-2-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **3**: `research/frontier-44-special-representation-examples-28-six-step-batch-3-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/frontier-44-special-representation-examples-28-six-step-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 1 | `roots-and-rational-powers` | A | real-analysis | 15 | `suprema-and-infima` |
| 1 | `roots-and-rational-powers-examples` | B | real-analysis | 16 | `roots-and-rational-powers` |
| 2 | `countability-and-uncountability` | A | real-analysis | 17 | `suprema-and-infima`, `order-zorn-and-the-axiom-of-choice` |
| 2 | `countability-and-uncountability-examples` | B | real-analysis | 18 | `countability-and-uncountability`, `roots-and-rational-powers` |
| 3 | `sequences-and-limits` | A | real-analysis | 181 | `countability-and-uncountability` |
| 3 | `sequences-and-limits-examples` | B | real-analysis | 182 | `sequences-and-limits`, `roots-and-rational-powers` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `roots-and-rational-powers` — Roots, Rational Powers, and Classical Inequalities (22 item(s))

- `def-finite-sum` · definition — Finite sums and finite products, by recursion
- `lem-finite-sum-laws` · lemma — Laws of finite sums and finite products
- `def-integer-power` · definition — Integer powers $a^m$
- `lem-power-laws` · lemma — Laws of integer exponents
- `lem-power-monotone` · lemma — Monotonicity of $x \mapsto x^n$ and of $n \mapsto a^n$
- `lem-bernoulli-inequality` · lemma — Bernoulli's inequality $(1+x)^n \ge 1 + nx$
- `lem-power-difference-factorisation` · lemma — Factorisation of $b^n - a^n$, and the resulting Lipschitz estimate
- `thm-nth-roots-exist` · theorem — Existence and uniqueness of $n$-th roots: a unique $a^{1/n} \ge 0$ with $(a^{1/n})^n = a$
- `def-rational-power` · definition — Rational powers $a^r$ of a positive base
- `lem-rational-power-well-defined` · lemma — Rational powers do not depend on the representative
- `lem-rational-power-laws` · lemma — Laws of rational exponents
- `lem-rational-power-monotone` · lemma — Monotonicity of $r \mapsto a^{r}$ and of $a \mapsto a^{r}$
- `lem-triangle-inequality-finite` · lemma — Triangle inequality for finite sums
- `thm-am-gm` · theorem — The arithmetic mean, geometric mean inequality
- `thm-weighted-am-gm-rational` · theorem — Weighted AM-GM inequality with rational weights
- `thm-young-inequality` · theorem — Young's inequality for products (rational conjugate exponents)
- `thm-cauchy-schwarz-finite` · theorem — The Cauchy-Schwarz inequality for finite sums
- `thm-holder-finite` · theorem — Hölder's inequality for finite sums (rational exponents)
- `thm-minkowski-finite` · theorem — Minkowski's inequality for finite sums (rational exponent)
- `fs-negative-has-square-root` · false-statement — FALSE: every real number has a real square root
- `fs-rational-power-of-negative-base` · false-statement — FALSE: $a^{m/n} := (a^{1/n})^{m}$ extends to negative bases
- `rem-real-exponents-deferred` · remark — Why real exponents are deferred on the rational-powers page

### `roots-and-rational-powers-examples` — Roots, Rational Powers, and Classical Inequalities: Examples and Counterexamples (16 item(s))

- `ex-rational-power-computations-of-rational-bases` · example — Rational powers of rational bases computed from the definition
- `ex-odd-roots-of-negative-reals` · example — Odd powers are bijections of $\mathbb{R}$: $x^{3} = -8$ has the unique solution $x = -2$
- `ex-two-term-am-gm-and-equality` · example — The two-term AM-GM inequality, its equality case, and $x + x^{-1} \ge 2$
- `ex-comparing-rational-powers` · example — Comparing rational powers: $2^{1/3} < 2^{1/2} < 3^{1/3}$
- `ex-weighted-am-gm-with-rational-weights` · example — A weighted AM-GM computation: $8^{2/3}\,1^{1/3} \le \frac{2}{3}\cdot 8 + \frac{1}{3}\cdot 1$
- `ex-young-inequality-instances` · example — Young's inequality at $p = q = 2$ and at $p = 3$, $q = 3/2$
- `ex-cauchy-schwarz-lagrange-identity-two-terms` · example — The two-term Lagrange identity and Cauchy-Schwarz
- `ex-holder-at-three-halves-conjugate-exponents` · example — Hölder at the conjugate pair $p = 3$, $q = 3/2$: an exact equality instance and a strict instance
- `ex-minkowski-two-entry-vectors-equality-and-strict` · example — Minkowski for two-entry vectors: equality and strict cases
- `cex-am-gm-needs-nonnegative-terms` · counterexample — AM-GM fails for negative entries: $(-1,-4)$ has geometric mean $2$ and arithmetic mean $-5/2$
- `cex-weighted-am-gm-needs-normalized-nonnegative-weights` · counterexample — Weighted AM-GM needs nonnegative weights summing to $1$
- `cex-minkowski-fails-for-p-below-one` · counterexample — Minkowski fails for $p = 1/2$: the hypothesis $p \ge 1$ is load-bearing
- `cex-bernoulli-needs-x-at-least-minus-one` · counterexample — Bernoulli fails for $x < -1$: $x = -4$, $n = 3$
- `cex-rational-power-laws-need-positive-base` · counterexample — The iterated rational-power law fails without a positive base: $\big((-3)^{2}\big)^{1/2} = 3 \ne -3$
- `ex-five-algebraic-proofs-of-bernoulli-and-rational-forms` · example — Five finite proofs of Bernoulli, with rational exponents and the quadratic refinement
- `ex-five-finite-proofs-of-am-gm-and-equality` · example — Five finite AM-GM proofs, with the same sharp equality case

### `countability-and-uncountability` — Countability and the Uncountability of R (22 item(s))

- `def-equinumerous` · definition — Equinumerous sets, $A \approx B$ and $A \preceq B$
- `lem-nat-order-is-membership` · lemma — On $\mathbb{N}$ the order is membership: $m < n \iff m \in n$
- `lem-pigeonhole` · lemma — The pigeonhole principle on $\mathbb{N}$
- `def-countable` · definition — Finite, countably infinite, countable, uncountable
- `thm-schroder-bernstein` · theorem — The Schröder-Bernstein theorem
- `lem-subset-of-countable` · lemma — Every subset of an at most countable set is at most countable
- `lem-countable-iff-surjection-from-n` · lemma — A nonempty set is at most countable iff it is a surjective image of $\mathbb{N}$
- `lem-finite-subsets-listable` · lemma — The nonempty finite subsets of $\mathbb{R}$ are exactly the listable ones
- `thm-n-cross-n-countable` · theorem — $\mathbb{N} \times \mathbb{N} \approx \mathbb{N}$
- `thm-product-of-countable` · theorem — A product of two at most countable sets is at most countable
- `def-countable-choice` · definition — The Axiom of Countable Choice ($\mathrm{AC}_\omega$)
- `def-dependent-choice` · definition — The axiom of dependent choice: a relation in which every element is related to something admits an $\mathbb{N}$-indexed chain
- `def-choice-for-pairs-and-countable-finite-choice` · definition — Choice for pairs and countable finite choice
- `thm-choice-implies-dependent-implies-countable-choice` · theorem — AC implies DC implies countable choice
- `thm-countable-union-of-countable` · theorem — Countable unions of at most countable sets, assuming $\mathrm{AC}_\omega$
- `thm-rationals-countable` · theorem — $\mathbb{Q}$ is countably infinite
- `thm-cantor-powerset` · theorem — Cantor's theorem: $A \prec \mathcal{P}(A)$
- `thm-r-uncountable` · theorem — $\mathbb{R}$ is uncountable (Cantor's nested intervals, 1874)
- `cor-interval-uncountable` · corollary — Every nondegenerate interval of $\mathbb{R}$ is uncountable
- `cor-irrationals-uncountable` · corollary — The irrationals are uncountable
- `rem-continuum-hypothesis` · remark — The continuum hypothesis and the later local consistency results
- `fs-uncountable-contains-interval` · false-statement — FALSE: every uncountable subset of $\mathbb{R}$ contains an interval

### `countability-and-uncountability-examples` — Countability and the Uncountability of R: Examples and Counterexamples (12 item(s))

- `ex-integers-are-countably-infinite` · example — The integers are countably infinite: $\mathbb{Z} \approx \mathbb{N}$
- `ex-deleting-a-point-from-a-countably-infinite-set` · example — Deleting one point of a countably infinite set leaves a set equinumerous with it
- `ex-power-set-of-the-naturals-is-uncountable` · example — $\mathcal{P}(\mathbb{N})$ is uncountable
- `ex-binary-sequences-are-uncountable` · example — The set of binary sequences is equinumerous with $\mathcal{P}(\mathbb{N})$, hence uncountable
- `ex-rationals-in-an-interval` · example — The rationals in an interval are countably infinite while the interval is uncountable
- `ex-complement-of-a-countable-set-of-reals-is-uncountable` · example — The complement of an at most countable set of reals is uncountable
- `cex-a-surjective-image-of-n-need-not-be-equinumerous-with-n` · counterexample — A nonempty surjective image of $\mathbb{N}$ need not be equinumerous with $\mathbb{N}$
- `cex-the-empty-set-is-not-a-surjective-image-of-n` · counterexample — The empty set is at most countable but no function from $\mathbb{N}$ is onto it
- `ex-explicit-enumeration-of-the-rationals` · example — An explicit enumeration of the rationals, with repetitions and then without them
- `lem-finite-real-coefficient-lists-have-at-most-degree-many-roots` · lemma — A real coefficient list of degree d has at most d real roots
- `ex-real-algebraic-numbers-are-countably-infinite` · example — Real algebraic numbers are countably infinite, without choice
- `ex-cantor-diagonal-misses-every-listed-binary-sequence` · example — Cantor diagonal construction misses every prescribed list of binary sequences

### `sequences-and-limits` — Sequences and Limits (18 item(s))

- `def-sequence` · definition — Sequences of reals: bounded, eventually, frequently, tails, subsequences
- `lem-limit-of-tail` · lemma — Convergence depends only on the tail
- `lem-limit-unique` · lemma — A sequence has at most one limit
- `lem-convergent-implies-bounded` · lemma — Every convergent sequence is bounded
- `lem-convergent-implies-cauchy` · lemma — Every convergent sequence is Cauchy
- `lem-null-times-bounded` · lemma — A null sequence times a bounded sequence is null
- `thm-algebra-of-limits` · theorem — Algebra of limits: sums, scalar multiples, products and quotients
- `lem-limit-preserves-order` · lemma — Limits preserve non-strict inequalities
- `thm-squeeze` · theorem — The squeeze theorem
- `lem-limit-abs` · lemma — The absolute value is compatible with limits
- `def-divergence-to-infinity` · definition — Divergence to $+\infty$ and to $-\infty$
- `lem-reciprocal-of-null-diverges` · lemma — For positive terms, null and divergence to $+\infty$ are reciprocal
- `lem-index-map-grows` · lemma — A strictly increasing index map satisfies $n_k \ge k$
- `lem-subsequence-inherits-limit` · lemma — Subsequences inherit the limit
- `fs-bounded-implies-convergent` · false-statement — FALSE: every bounded sequence converges
- `fs-limit-preserves-strict-inequality` · false-statement — FALSE: limits preserve strict inequalities
- `fs-subsequence-convergence-implies-convergence` · false-statement — FALSE: a convergent subsequence forces the sequence to converge
- `rem-sequence-conventions` · remark — Conventions for sequences: indexing, eventually, $\lim$, and rational $\varepsilon$

### `sequences-and-limits-examples` — Sequences and Limits: Examples and Counterexamples (14 item(s))

- `ex-the-reciprocal-of-k-plus-one-is-null` · example — The sequence $1/(k+1)$ converges to $0$
- `ex-a-rational-expression-limit` · example — A rational expression in $k$: $(2(k+1)+3)/(5(k+1)+1) \to 2/5$
- `ex-an-alternating-null-sequence` · example — The alternating sequence $(-1)^k/(k+1)$ converges to $0$
- `ex-square-roots-diverge-to-infinity` · example — The square roots $\sqrt{k}$ diverge to $+\infty$
- `ex-successive-root-differences` · example — The successive differences $\sqrt{k+1} - \sqrt{k}$ converge to $0$
- `ex-changing-finitely-many-terms` · example — Changing the first hundred terms leaves convergence to $0$ and boundedness intact
- `ex-two-squeeze-computations` · example — Two squeeze computations: $1/((k+1)\sqrt{k+1}) \to 0$ and $(k+(-1)^k)/(k+1) \to 1$
- `ex-subsequences-of-a-null-sequence` · example — Even and odd subsequences of $1/(k+1)$ converge to $0$
- `ex-absolute-value-limit` · example — The absolute value of the limit, and the limit of the absolute value
- `cex-sum-of-divergent-sequences-converges` · counterexample — The sum of two divergent sequences can converge: $k + (-k)$
- `cex-null-times-unbounded-need-not-be-null` · counterexample — A null sequence times an unbounded sequence need not be null: $(k+1)^{-1}\cdot(k+1) = 1$
- `cex-quotient-rule-needs-a-nonzero-limit` · counterexample — The quotient rule needs a nonzero limit in the denominator: $1\big/(k+1)^{-1} = k+1$
- `cex-squeeze-with-unequal-bound-limits` · counterexample — The squeeze theorem needs the two bounds to share their limit
- `ex-geometric-sequences-all-real-ratios` · example — Geometric sequences: the complete classification for every real ratio

## Your seams

Another group's pages depend on yours:

- `geometric-fixed-parts-and-gauss-manin-semisimplicity` (group b) requires your `countability-and-uncountability`
- `proper-hyperresolutions-and-mixed-hodge-restriction-images` (group b) requires your `countability-and-uncountability`
- `compact-laplace-type-operators-and-hodge-representatives` (group d) requires your `countability-and-uncountability`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/frontier-44-special-representation-examples-28-six-step-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Historical Step-5 closure recovery, `frontier-44-special-representation-examples-28-six-step`

Historical compatibility task only. Preserve historical exact-tuple decisions
as evidence; this template grants no current repair or certification authority.
Historical receipts constrain `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`; do not reinterpret those records
as current round coverage.

Current rounds use `tools/step5-workflow.mjs`, `briefs/step5-adjudicator.md`
and `briefs/step5-owner-repair.md`. Follow those briefs
and the generated round-bound task. Repair all confirmed defects, including
nonfatal defects, and continue downstream repair until complete before the
single central certification pass.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
