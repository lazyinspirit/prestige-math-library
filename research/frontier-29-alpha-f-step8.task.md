# Step 8 adjudication — group **f**, run `frontier-29`

You are the group Alpha for batches **8**, **9**, **15**: 4 A/B pair(s), 8 page(s), 99 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-29-alpha-f-step8-context.json` is what a group Alpha for this group wrote during step 7,
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

**Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-29-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 8 | `absolute-values-completions-and-p-adic-numbers` | A | number-theory | 302.017 | `regular-local-rings-and-homological-dimension-examples`, `pro-p-groups-and-the-p-adic-integers` |
| 8 | `absolute-values-completions-and-p-adic-numbers-examples` | B | number-theory | 302.018 | `absolute-values-completions-and-p-adic-numbers` |
| 8 | `dirichlet-series-and-euler-products` | A | number-theory | 348.007 | `chebyshev-bounds-and-mertens-theorems-examples`, `the-riemann-zeta-function` |
| 8 | `dirichlet-series-and-euler-products-examples` | B | number-theory | 348.008 | `dirichlet-series-and-euler-products` |
| 9 | `the-riemann-zeta-function` | A | complex-analysis | 345 | `the-gamma-function`, `mittag-leffler-and-runges-theorem`, `primes-and-the-fundamental-theorem-of-arithmetic`, `schwartz-space-and-the-plancherel-theorem`, `tempered-distributions-and-the-fourier-transform` |
| 9 | `the-riemann-zeta-function-examples` | B | complex-analysis | 346 | `the-riemann-zeta-function` |
| 15 | `generalized-niceness-and-reduction-outcomes` | A | combinatorics | 427 | `leaf-reducibility-and-wonderful-families` |
| 15 | `generalized-niceness-and-reduction-outcomes-examples` | B | combinatorics | 428 | `generalized-niceness-and-reduction-outcomes` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `absolute-values-completions-and-p-adic-numbers` — Absolute Values Completions and P Adic Numbers (22 item(s))

- `def-multiplicative-absolute-value-on-a-field` · definition — Absolute values on a field
- `lem-nonarchimedean-absolute-value-criterion` · lemma — An absolute value is nonarchimedean exactly when every integer has absolute value at most one
- `def-equivalent-field-absolute-values` · definition — Equivalent nontrivial absolute values
- `thm-equivalent-field-absolute-values-characterisation` · theorem — Two nontrivial absolute values induce the same topology exactly when one is a positive power of the other
- `def-p-adic-absolute-value-on-the-rationals` · definition — The p-adic absolute value on the rationals
- `thm-p-adic-absolute-value-is-nonarchimedean` · theorem — The p-adic absolute value is nonarchimedean
- `thm-ostrowskis-theorem-for-the-rationals` · theorem — Ostrowski's theorem for the rationals
- `def-place-of-the-rationals` · definition — Places of the rationals
- `thm-product-formula-for-the-rationals` · theorem — The product formula for the rationals
- `thm-weak-approximation-for-rational-places` · theorem — Weak approximation for rational places
- `def-field-of-p-adic-numbers` · definition — The field of p-adic numbers as a metric completion
- `thm-p-adic-completion-is-a-field` · theorem — The p-adic completion is a complete valued field
- `lem-p-adic-balls-are-clopen` · lemma — P-adic balls are clopen and intersecting comparable balls are nested
- `thm-p-adic-completion-agrees-with-the-fraction-field-of-zp` · theorem — The p-adic completion agrees with the fraction field of Z_p
- `cor-zp-is-the-valuation-ring-of-qp` · corollary — Z_p is the valuation ring of Q_p
- `cor-maximal-ideal-and-residue-field-of-zp` · corollary — The maximal ideal and residue field of Z_p
- `thm-p-adic-digit-expansion` · theorem — Every p-adic number has a unique digit expansion
- `cor-p-adic-field-is-locally-compact-and-totally-disconnected` · corollary — Q_p is locally compact and totally disconnected
- `cor-p-adic-simple-root-lifting` · corollary — Simple roots lift uniquely in Z_p
- `thm-p-adic-newton-criterion` · theorem — Newton's criterion in Q_p
- `thm-square-criterion-in-qp-for-odd-p` · theorem — Square criterion in Q_p for odd p
- `thm-square-criterion-in-q2` · theorem — Square criterion in Q_2

### `absolute-values-completions-and-p-adic-numbers-examples` — Absolute Values Completions and P Adic Numbers -- Examples (8 item(s))

- `ex-p-adic-geometric-series` · example — A geometric series that is p-adically convergent and really divergent
- `ex-p-adic-expansion-of-minus-one` · example — The p-adic expansion of minus one
- `ex-square-root-of-minus-one-in-q5` · example — A square root of minus one in Q_5
- `ex-no-square-root-of-p-in-qp` · example — There is no square root of p in Q_p
- `ex-p-adic-hensel-lifting-a-simple-root` · example — Simple-root lifting by digits and by Newton iteration
- `ex-two-adic-square-test` · example — Testing odd units for squareness in Q_2
- `ex-the-same-sequence-in-real-and-p-adic-metrics` · example — One rational sequence in the real and p-adic metrics
- `cex-zp-is-not-the-integral-closure-of-z-in-qp` · counterexample — Z_p is not the integral closure of Z in Q_p

### `dirichlet-series-and-euler-products` — Dirichlet Series and Euler Products (15 item(s))

- `def-dirichlet-series` · definition — Dirichlet series
- `def-abscissae-dirichlet-series` · definition — Abscissae of convergence and absolute convergence for a Dirichlet series
- `thm-dirichlet-series-half-plane-convergence` · theorem — Convergence at one point gives a right half-plane of holomorphy
- `thm-dirichlet-series-absolute-half-plane-holomorphy` · theorem — Absolute convergence gives a right half-plane of termwise differentiation
- `thm-dirichlet-series-abscissa-gap` · theorem — The absolute-convergence abscissa is at most one to the right of the convergence abscissa
- `thm-uniqueness-of-dirichlet-series-coefficients` · theorem — A Dirichlet series determines its coefficients
- `thm-dirichlet-series-summatory-integral` · theorem — Abel summation expresses a Dirichlet series by its summatory function
- `thm-dirichlet-series-multiplication-convolution` · theorem — Dirichlet-series multiplication is Dirichlet convolution
- `thm-multiplicative-dirichlet-series-euler-product` · theorem — Multiplicative functions give Euler products in the absolute half-plane
- `cor-completely-multiplicative-dirichlet-series-euler-product` · corollary — Completely multiplicative functions give geometric Euler factors
- `thm-landau-dirichlet-series` · theorem — Landau's theorem for Dirichlet series with nonnegative coefficients
- `thm-von-mangoldt-logarithmic-derivative-zeta` · theorem — The logarithmic derivative of zeta is the Dirichlet series of the von Mangoldt function
- `cor-mobius-dirichlet-series-reciprocal-zeta` · corollary — The Mobius Dirichlet series is 1/zeta
- `cor-divisor-dirichlet-series-zeta-square` · corollary — The divisor Dirichlet series is zeta squared
- `cor-euler-totient-dirichlet-series` · corollary — The Euler totient Dirichlet series is zeta(s-1)/zeta(s)

### `dirichlet-series-and-euler-products-examples` — Dirichlet Series and Euler Products -- Examples (7 item(s))

- `ex-dirichlet-series-abscissa-boundaries` · example — Dirichlet series with equal and unequal abscissae
- `ex-mobius-reciprocal-zeta-coefficients` · example — Finite coefficient multiplication for 1/zeta
- `ex-divisor-function-from-zeta-square` · example — Recovering tau(n) from zeta(s)^2
- `ex-euler-totient-dirichlet-series` · example — The local Euler factor for the totient Dirichlet series
- `ex-liouville-dirichlet-series` · example — The Dirichlet series of the Liouville function
- `cex-conditionally-convergent-euler-product-rearrangement` · counterexample — Outside absolute convergence, formal Euler-product regrouping is not licensed
- `cex-an-abscissa-need-not-be-a-line-of-convergence` · counterexample — A boundary line need not behave uniformly for a Dirichlet series

### `the-riemann-zeta-function` — The Riemann Zeta Function (22 item(s))

- `lem-riemann-zeta-dirichlet-series-converges-locally-uniformly` · lemma — The Dirichlet series for zeta converges absolutely and locally uniformly on the half-plane Re s greater than 1
- `def-riemann-zeta-function` · definition — The Riemann zeta function on the half-plane Re s greater than 1
- `thm-euler-product-for-riemann-zeta` · theorem — The Riemann zeta function has its Euler product on the half-plane Re s greater than 1
- `cor-riemann-zeta-is-zero-free-for-real-part-greater-than-one` · corollary — The Riemann zeta function has no zeros when Re s is greater than 1
- `rem-agreement-with-the-existing-infinitude-of-primes` · remark — The pole of zeta at 1 recovers Euclid's infinitude of primes without reminting it on this page
- `thm-riemann-zeta-continuation-to-the-right-half-plane` · theorem — For Re s greater than 0, zeta admits the fractional-part integral formula with a simple residue-one pole at 1
- `thm-dirichlet-eta-representation` · theorem — The Dirichlet eta series is holomorphic on Re s greater than 0 and equals the prefactor times zeta there
- `def-jacobi-theta-function` · definition — The Jacobi theta function theta(t)=sum over all integers of exp(-pi n squared t) for t greater than 0
- `thm-jacobi-theta-transformation` · theorem — The Jacobi theta function satisfies theta(t)=t to the minus one-half theta(1/t)
- `thm-theta-mellin-representation-of-completed-zeta` · theorem — The completed zeta function has its Mellin-theta integral representation on Re s greater than 1
- `def-completed-riemann-zeta-function` · definition — The completed zeta function Lambda(s)=pi to the minus s over 2 times Gamma(s over 2) times zeta(s)
- `thm-riemann-zeta-meromorphic-continuation` · theorem — The Riemann zeta function extends meromorphically to the complex plane with its only pole at 1
- `thm-completed-riemann-zeta-functional-equation` · theorem — The completed zeta function satisfies Lambda(s)=Lambda(1-s)
- `thm-riemann-zeta-functional-equation` · theorem — The Riemann zeta function satisfies the classical sine-gamma functional equation
- `def-riemann-xi-function` · definition — The Riemann xi function xi(s)=one-half s(s-1)Lambda(s)
- `thm-riemann-xi-is-entire-of-order-one` · theorem — The Riemann xi function is entire of order one, real on the real axis, and symmetric under s to 1 minus s
- `thm-riemann-zeta-is-zero-free-on-the-closed-right-half-plane` · theorem — The Riemann zeta function has no zeros on the closed half-plane Re s at least 1, except for its pole at 1
- `thm-trivial-zeros-and-critical-strip` · theorem — The only zeros of zeta on the nonpositive real axis are the negative even integers, and every other zero lies in the open critical strip
- `thm-hadamard-product-for-riemann-xi` · theorem — The Riemann xi function has its genus-one Hadamard product over the nontrivial zeros of zeta
- `def-bernoulli-numbers-by-their-generating-function` · definition — The Bernoulli numbers are defined by the generating series t over exp(t) minus 1
- `thm-special-values-of-riemann-zeta-at-integers` · theorem — The Riemann zeta function has the standard Bernoulli special values at the positive even and nonpositive integers
- `rem-dirichlet-series-continuation-and-regularized-sums` · remark — The analytic continuation of zeta is not the same object as the defining Dirichlet series outside Re s greater than 1

### `the-riemann-zeta-function-examples` — The Riemann Zeta Function — Examples (12 item(s))

- `ex-euler-product-numerically-approximates-zeta-at-two` · example — A short Euler-product truncation already numerically approximates zeta at 2
- `ex-zeta-four-equals-pi-to-the-four-over-ninety` · example — The special-value formula gives zeta(4)=pi to the fourth over 90
- `ex-zeta-zero-equals-minus-one-half` · example — The functional equation gives zeta(0)=-1/2 without substituting into a zero-times-pole expression
- `ex-splitting-the-theta-mellin-integral-isolates-the-two-polar-terms` · example — Splitting the theta Mellin integral at 1 isolates the two polar terms of completed zeta
- `ex-zeta-minus-two-vanishes-by-the-sine-factor` · example — The functional equation shows that zeta(-2)=0 through the sine factor
- `ex-symmetric-finite-zero-products-model-the-xi-hadamard-product` · example — Symmetric finite zero products model the genus-one product for xi
- `cex-the-eta-series-represents-the-continuation-where-the-dirichlet-series-diverges` · counterexample — The eta series can represent the continued zeta function where the defining Dirichlet series diverges
- `cex-the-harmonic-series-shows-the-defining-series-diverges-at-one` · counterexample — The defining Dirichlet series for zeta diverges at s=1 because it becomes the harmonic series
- `fs-riemann-zeta-is-given-by-its-dirichlet-series-for-all-s-not-one` · false-statement — FALSE: zeta is given by the same Dirichlet series for every complex s other than 1
- `fs-zeta-minus-one-is-the-ordinary-sum-one-plus-two-plus-three-and-so-on` · false-statement — FALSE: zeta(-1) is the ordinary sum 1+2+3 and so on
- `fs-riemann-zeta-is-entire` · false-statement — FALSE: the Riemann zeta function is entire
- `fs-the-functional-equation-alone-characterizes-zeta` · false-statement — FALSE: the classical functional equation alone characterizes the Riemann zeta function

### `generalized-niceness-and-reduction-outcomes` — Generalized Niceness and Reduction Outcomes (10 item(s))

- `def-generalized-nice-finite-family` · definition — Generalized nice finite graph families
- `lem-a-complete-or-weakly-sparse-blockade-can-be-thinned-to-equal-subblocks-with-directional-sparsity` · lemma — A complete-or-weakly-sparse blockade can be thinned to equal subblocks with directional sparsity
- `lem-a-complete-or-weakly-sparse-blockade-yields-a-complete-subblockade-or-an-anticonnected-thinning` · lemma — A complete-or-weakly-sparse blockade yields a complete subblockade or an anticonnected thinning
- `lem-a-wonderful-anticonnected-complete-or-sparse-blockade-yields-a-restricted-subgraph-or-a-large-anticomplete-pair` · lemma — A wonderful anticonnected complete-or-sparse blockade yields a restricted subgraph or a large anticomplete pair
- `lem-generalized-niceness-yields-four-reduction-outcomes` · lemma — Generalized niceness yields four reduction outcomes
- `cor-large-almost-pure-pair-hypotheses-yield-a-complete-or-anticomplete-blockade` · corollary — Large almost-pure pair hypotheses yield a complete or anticomplete blockade
- `lem-cy-restricted-generalized-niceness-yields-three-outcomes` · lemma — cy-restricted generalized niceness yields three outcomes
- `lem-iterated-restricted-sparsification-reaches-the-target-scale` · lemma — Iterated restricted sparsification reaches the target scale
- `lem-a-large-cy-restricted-subgraph-in-the-three-outcome-theorem-forces-a-smaller-scale-restricted-subgraph` · lemma — A large cy-restricted subgraph in the three-outcome theorem forces a smaller-scale restricted subgraph
- `lem-constant-scale-restricted-generalized-niceness-yields-an-x-scale-restricted-subgraph-a-polynomial-clique-or-stable-set-or-a-blockade` · lemma — Constant-scale restricted generalized niceness yields an x-scale restricted subgraph, a polynomial clique or stable set, or a blockade

### `generalized-niceness-and-reduction-outcomes-examples` — Generalized Niceness and Reduction Outcomes -- Examples (3 item(s))

- `ex-thinning-a-four-block-weakly-sparse-blockade-to-directional-sparse-subblocks` · example — Thinning a four-block weakly sparse blockade to directional sparse subblocks
- `ex-a-large-almost-pure-pair-extends-an-anticomplete-blockade` · example — A large almost-pure pair extends an anticomplete blockade
- `ex-a-numeric-run-of-the-lemma-three-three-exponent-choice` · example — A numeric run of the Lemma 3.3 exponent choice

## Your seams

Your pages depend on another group's:

- `absolute-values-completions-and-p-adic-numbers` requires `pro-p-groups-and-the-p-adic-integers` (group a, batch 2)

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Alerts from other groups

None. No other group flagged an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-29-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — fatal-only configured-judge adjudication, `frontier-29`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Web search is available in this role. If any mathematics is uncertain, use it
and verify the point against original sources before deciding the outcome or
making a repair. Record the sources consulted and the exact claim each source
supports in the group report; do not resolve uncertainty from memory or a
secondary summary alone.

Append one row per rejection to `research/frontier-29-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Descriptive defect-ledger subclasses
such as `invalid-inference`, `false-claim`, or `ill-typed-construction` are not
valid adjudication `defect_type` values.

For an incoming alert, append the owning-group disposition to
`research/frontier-29-step8-alert-decisions.jsonl`. A defect in another group is a
`research/frontier-29-step8-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-8 baseline or rewrite shared ledgers. Run the Step-8 guard
and scope check, then write `research/frontier-29-alpha-step8-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.
