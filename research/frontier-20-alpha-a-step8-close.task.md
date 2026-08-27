# Step 8 — group **a**, run `frontier-20`

You are the group Alpha for batches **1**, **2**: 3 A/B pair(s), 6 page(s), 130 item(s), 0 open rejection(s) over 0 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-20-alpha-a-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
| 1 | `lebesgue-stieltjes-measures-and-distribution-functions` | A | measure-theory | 288.011 | `non-measurable-sets-and-the-cost-of-choice-examples` |
| 1 | `lebesgue-stieltjes-measures-and-distribution-functions-examples` | B | measure-theory | 288.012 | `lebesgue-stieltjes-measures-and-distribution-functions` |
| 1 | `measurable-functions-and-simple-approximation` | A | measure-theory | 288.013 | `lebesgue-stieltjes-measures-and-distribution-functions-examples` |
| 1 | `measurable-functions-and-simple-approximation-examples` | B | measure-theory | 288.014 | `measurable-functions-and-simple-approximation` |
| 2 | `the-lebesgue-integral-and-the-convergence-theorems` | A | measure-theory | 288.015 | `measurable-functions-and-simple-approximation-examples`, `convexity` |
| 2 | `the-lebesgue-integral-and-the-convergence-theorems-examples` | B | measure-theory | 288.016 | `the-lebesgue-integral-and-the-convergence-theorems` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `lebesgue-stieltjes-measures-and-distribution-functions` — Lebesgue Stieltjes Measures and Distribution Functions (22 item(s))

- `rem-lebesgue-stieltjes-convention-ledger` · remark — This page uses the nondecreasing, right-continuous, (a,b]-interval convention
- `def-borel-measure-finite-on-compact-sets-on-r` · definition — A Borel measure on R that is finite on compact sets
- `def-half-open-interval-algebra-on-r` · definition — The algebra of finite disjoint unions of half-open intervals in R with extended endpoints
- `def-lebesgue-stieltjes-interval-set-function` · definition — The interval set function attached to a nondecreasing right-continuous function
- `prop-stieltjes-interval-set-function-is-finitely-additive` · proposition — The Stieltjes interval set function is finitely additive on the half-open interval algebra
- `thm-stieltjes-interval-set-function-is-a-premeasure` · theorem — The Stieltjes interval set function is a premeasure
- `thm-existence-of-the-lebesgue-stieltjes-measure` · theorem — Assuming countable choice, a nondecreasing right-continuous function defines a Borel measure on R
- `thm-uniqueness-of-the-lebesgue-stieltjes-measure-on-r` · theorem — The interval data on (a,b] determines the Borel measure uniquely
- `def-distribution-function-of-a-borel-measure-on-r` · definition — The distribution function of a Borel measure on R, normalized at 0
- `thm-lebesgue-stieltjes-correspondence-with-distribution-functions` · theorem — Assuming countable choice, finite-on-compacts Borel measures on R correspond to nondecreasing right-continuous functions modulo constants
- `def-atom-of-a-measure-on-r` · definition — An atom of a measure on R
- `thm-interval-formulas-and-atoms-for-lebesgue-stieltjes-measures` · theorem — Interval formulas and atoms for a Lebesgue-Stieltjes measure
- `thm-lebesgue-stieltjes-measures-are-regular-on-r` · theorem — Lebesgue-Stieltjes measures on R are outer regular and inner regular by compact sets
- `cor-lebesgue-measure-is-the-lebesgue-stieltjes-measure-of-the-identity` · corollary — Lebesgue measure is the Lebesgue-Stieltjes measure of the identity function
- `def-cantor-measure` · definition — The Cantor measure
- `prop-cantor-measure-is-a-singular-atomless-probability-measure` · proposition — The Cantor measure is a singular atomless probability measure concentrated on the Cantor set
- `thm-finite-borel-measure-on-r-is-atomic-plus-atomless` · theorem — Every finite Borel measure on R splits as an atomic part plus an atomless part
- `fs-every-increasing-function-defines-a-lebesgue-stieltjes-measure` · false-statement — FALSE: every nondecreasing function defines a Lebesgue-Stieltjes measure on Borel sets
- `fs-lebesgue-stieltjes-measures-have-zero-point-masses` · false-statement — FALSE: a Lebesgue-Stieltjes measure always gives every singleton measure 0
- `fs-lebesgue-stieltjes-measures-determine-the-distribution-function-without-normalization` · false-statement — FALSE: a Lebesgue-Stieltjes measure determines its distribution function uniquely
- `fs-every-borel-measure-on-r-is-finite-on-compact-sets` · false-statement — FALSE: every Borel measure on R is finite on compact sets
- `fs-every-atomless-borel-measure-on-r-has-a-density` · false-statement — FALSE: every atomless Borel measure on R is absolutely continuous with respect to Lebesgue measure

### `lebesgue-stieltjes-measures-and-distribution-functions-examples` — Lebesgue Stieltjes Measures and Distribution Functions - Examples (9 item(s))

- `ex-the-identity-function-generates-lebesgue-measure` · example — The identity function generates Lebesgue measure
- `ex-one-jump-function-generates-a-dirac-mass-at-zero` · example — A single jump generates the Dirac mass at 0
- `ex-a-step-function-generates-a-finite-atomic-measure` · example — A step function generates a finite atomic measure
- `ex-two-normalizations-give-the-same-lebesgue-stieltjes-measure` · example — Two different normalizations can give the same measure
- `ex-interval-formulas-for-a-function-with-one-jump` · example — The four interval formulas for a function with one jump
- `ex-cantor-measure-is-concentrated-on-the-cantor-set` · example — The Cantor measure lives on the Cantor set
- `ex-arctangent-generates-a-borel-probability-measure` · example — The arctangent distribution function generates a Borel probability measure
- `cex-right-continuity-is-necessary-for-lebesgue-stieltjes-measures` · counterexample — Without right continuity the interval formula need not be countably additive
- `cex-cantor-measure-is-atomless-but-not-absolutely-continuous` · counterexample — The Cantor measure is atomless but not absolutely continuous

### `measurable-functions-and-simple-approximation` — Measurable Functions and Simple Approximation (28 item(s))

- `rem-measurable-function-codomain-convention` · remark — Measurability is relative to sigma-algebras on both domain and codomain
- `def-borel-sigma-algebra-on-the-extended-real-line` · definition — The Borel sigma-algebra on the extended real line
- `def-measurable-function-between-measurable-spaces` · definition — A measurable function between measurable spaces
- `prop-indicator-function-is-measurable-iff-its-set-is-measurable` · proposition — An indicator function is measurable exactly when its set is measurable
- `def-borel-and-lebesgue-measurable-function-on-rn` · definition — Borel measurable and Lebesgue measurable functions on R^n
- `def-positive-and-negative-parts-of-a-function` · definition — The positive and negative parts of a real-valued function
- `def-simple-function-and-canonical-representation` · definition — Simple functions and their canonical representation
- `def-sigma-algebra-generated-by-a-function` · definition — The sigma-algebra generated by a measurable function
- `rem-zero-times-infinity-convention-for-pointwise-products` · remark — The convention 0 times infinity equals 0 is used only for pointwise products of measurable functions
- `thm-generating-family-criterion-for-measurable-functions` · theorem — To prove measurability it suffices to test a generating family in the codomain
- `thm-threshold-characterisations-of-real-and-extended-real-measurability` · theorem — Real-valued and extended-real-valued measurability can be checked on threshold sets
- `cor-continuous-functions-are-borel-measurable` · corollary — Continuous functions are Borel measurable
- `thm-monotone-real-functions-are-borel-measurable` · theorem — Monotone real functions are Borel measurable
- `thm-coordinatewise-measurability-into-r-n` · theorem — A map into R^n is measurable exactly when each coordinate is measurable
- `thm-composition-with-borel-functions-preserves-measurability` · theorem — Composing with a Borel function preserves measurability
- `thm-arithmetic-and-lattice-operations-preserve-measurability` · theorem — Arithmetic and lattice operations preserve measurability whenever they are defined
- `thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable` · theorem — Sequential suprema, infima, limsup, liminf, and pointwise limits of measurable functions are measurable
- `thm-nonnegative-measurable-functions-admit-increasing-simple-approximations` · theorem — Every nonnegative measurable function is the increasing pointwise limit of explicit simple functions
- `cor-measurable-functions-admit-dominated-simple-approximations` · corollary — Every measurable real-valued function has simple approximations dominated by its absolute value
- `thm-ae-equality-preserves-measurability-on-complete-spaces` · theorem — On a complete measure space, equality almost everywhere preserves measurability
- `thm-completion-measurable-functions-have-base-measurable-representatives` · theorem — A function measurable for a completion is almost everywhere equal to one measurable for the original sigma-algebra
- `thm-doob-dynkin-lemma` · theorem — Doob-Dynkin factorization through the sigma-algebra generated by a function
- `fs-measurable-level-sets-do-not-imply-measurability` · false-statement — FALSE: if every level set of a real-valued function is measurable, then the function is measurable
- `fs-absolute-value-measurable-does-not-imply-measurability` · false-statement — FALSE: if the absolute value is measurable, then the function is measurable
- `fs-an-arbitrary-supremum-of-measurable-functions-need-not-be-measurable` · false-statement — FALSE: the supremum of an arbitrary family of measurable functions is always measurable
- `fs-ae-equality-with-a-measurable-function-does-not-imply-measurability` · false-statement — FALSE: equality almost everywhere with a measurable function always implies measurability
- `fs-composing-a-lebesgue-measurable-function-with-a-continuous-map-need-not-preserve-measurability` · false-statement — FALSE: composing a Lebesgue measurable function with a continuous map always preserves measurability
- `fs-a-pointwise-limit-of-continuous-functions-need-not-be-continuous-ae` · false-statement — FALSE: a pointwise limit of continuous functions is continuous almost everywhere

### `measurable-functions-and-simple-approximation-examples` — Measurable Functions and Simple Approximation - Examples (12 item(s))

- `ex-indicator-functions-are-measurable` · example — Indicator functions are the basic measurable functions
- `ex-a-simple-function-and-its-canonical-representation` · example — A simple function written in canonical form
- `ex-dirichlet-function-is-borel-and-nowhere-continuous` · example — The Dirichlet function is Borel measurable and nowhere continuous
- `ex-cantor-function-is-borel-measurable` · example — The Cantor function is monotone, continuous, and Borel measurable
- `ex-dyadic-simple-approximations-to-x-squared-on-zero-two` · example — The dyadic simple approximants to x^2 on [0,2] for the first two levels
- `ex-sigma-of-an-indicator-function` · example — The sigma-algebra generated by an indicator function
- `ex-sigma-of-a-two-step-simple-function` · example — The sigma-algebra generated by a two-step simple function
- `ex-a-lebesgue-measurable-function-that-is-not-borel` · example — A Lebesgue measurable function need not be Borel measurable
- `cex-an-uncountable-supremum-of-indicators-need-not-be-measurable` · counterexample — An uncountable supremum of measurable indicators need not be measurable
- `cex-a-continuous-preimage-can-break-lebesgue-measurability` · counterexample — A continuous preimage can break Lebesgue measurability
- `cex-ae-equality-can-fail-on-an-incomplete-space` · counterexample — Almost-everywhere equality can fail to preserve measurability on an incomplete space
- `cex-a-function-can-have-measurable-level-sets-without-being-measurable` · counterexample — A function can have measurable level sets without being measurable

### `the-lebesgue-integral-and-the-convergence-theorems` — The Lebesgue Integral and the Convergence Theorems (45 item(s))

- `def-extended-real-valued-measurable-function` · definition — Extended-real-valued measurable functions
- `def-nonnegative-simple-measurable-function` · definition — Nonnegative simple measurable functions
- `prop-closure-properties-of-measurable-functions-used-by-the-integral` · proposition — Closure properties of measurable functions used by the integral
- `thm-increasing-simple-approximation-of-a-nonnegative-measurable-function` · theorem — Every nonnegative measurable function is the increasing limit of simple measurable functions
- `def-integral-of-a-nonnegative-simple-function` · definition — The integral of a nonnegative simple function
- `lem-well-definedness-of-the-simple-integral` · lemma — The simple integral is independent of the chosen representation
- `prop-basic-properties-of-the-nonnegative-simple-integral` · proposition — The simple integral is monotone, homogeneous, and additive
- `def-nonnegative-lebesgue-integral` · definition — The nonnegative Lebesgue integral
- `prop-the-nonnegative-integral-agrees-with-the-simple-integral` · proposition — The nonnegative integral agrees with the simple integral on simple functions
- `def-integral-over-a-measurable-set` · definition — Integral over a measurable subset
- `thm-simple-indefinite-integral-is-a-measure` · theorem — The indefinite integral of a nonnegative simple function is a measure
- `prop-order-and-scalar-rules-for-the-nonnegative-integral` · proposition — Monotonicity and nonnegative homogeneity of the nonnegative integral
- `thm-monotone-convergence-for-the-integral` · theorem — Monotone convergence for the integral
- `cor-additivity-of-the-nonnegative-lebesgue-integral` · corollary — Additivity of the nonnegative Lebesgue integral
- `cor-beppo-levi-theorem` · corollary — Beppo Levi's theorem for nonnegative series
- `thm-indefinite-integral-of-a-nonnegative-function-is-a-measure` · theorem — The indefinite integral of a nonnegative measurable function is a measure
- `def-measure-with-density` · definition — The measure with density $f$ relative to $\mu$
- `thm-integration-against-a-density` · theorem — Integrating against a density agrees with integrating the product
- `thm-fatou-lemma` · theorem — Fatou's lemma
- `cor-reverse-fatou-lemma-under-an-integrable-majorant` · corollary — Reverse Fatou's lemma under an integrable majorant
- `thm-nonnegative-integral-zero-iff-zero-almost-everywhere` · theorem — A nonnegative measurable function has integral $0$ exactly when it vanishes almost everywhere
- `cor-finite-nonnegative-integral-implies-finite-almost-everywhere` · corollary — A nonnegative measurable function with finite integral is finite almost everywhere
- `cor-integral-over-a-null-set-vanishes` · corollary — A nonnegative integral over a null set vanishes
- `cor-almost-everywhere-monotone-convergence` · corollary — Almost-everywhere monotone convergence
- `thm-chebyshev-markov-inequality-for-the-integral` · theorem — Chebyshev-Markov inequality for the integral
- `def-integrable-real-and-complex-functions-and-their-integrals` · definition — Integrable real and complex functions, and their integrals
- `def-l-one-of-a-measure` · definition — The class $L^1(\mu)$ of integrable functions
- `thm-linearity-of-the-lebesgue-integral-on-l-one` · theorem — The Lebesgue integral is linear on $L^1(\mu)$
- `thm-the-lebesgue-integral-respects-almost-everywhere-equality` · theorem — Two integrable functions are equal almost everywhere exactly when all of their indefinite integrals agree
- `thm-integral-triangle-inequality` · theorem — The modulus of an integral is bounded by the integral of the modulus
- `thm-dominated-convergence` · theorem — Dominated convergence
- `cor-bounded-convergence-on-a-finite-measure-space` · corollary — Bounded convergence on a finite measure space
- `thm-integrable-simple-functions-are-dense-in-l-one` · theorem — Integrable simple functions are dense in $L^1(\mu)$
- `thm-absolute-continuity-of-the-integral` · theorem — Absolute continuity of the integral
- `prop-indefinite-integral-of-an-integrable-function-is-countably-additive` · proposition — The indefinite integral of an integrable function is countably additive on measurable sets
- `thm-continuity-under-the-integral-sign` · theorem — Continuity under the integral sign
- `thm-differentiation-under-the-integral-sign` · theorem — Differentiation under the integral sign
- `thm-jensens-integral-inequality` · theorem — Jensen's integral inequality for a probability measure
- `fs-monotone-convergence-without-monotonicity` · false-statement — FALSE: monotone convergence holds without monotonicity
- `fs-fatou-lemma-is-always-an-equality` · false-statement — FALSE: Fatou's lemma is always an equality
- `fs-dominated-convergence-without-a-dominating-function` · false-statement — FALSE: dominated convergence holds without a dominating function
- `fs-zero-integral-forces-everywhere-zero` · false-statement — FALSE: a nonnegative measurable function with integral $0$ vanishes everywhere
- `fs-pointwise-limits-of-integrable-functions-are-integrable` · false-statement — FALSE: pointwise limits of integrable functions are integrable
- `fs-linearity-without-the-integrability-hypothesis` · false-statement — FALSE: the Lebesgue integral extends linearly to all measurable functions
- `fs-jensens-inequality-on-an-infinite-measure-space` · false-statement — FALSE: Jensen's inequality holds on an infinite measure space without normalization

### `the-lebesgue-integral-and-the-convergence-theorems-examples` — The Lebesgue Integral and the Convergence Theorems — Examples (14 item(s))

- `ex-counting-measure-integral-is-a-series` · example — Integrating against counting measure recovers a series
- `cex-dirichlet-function-is-positive-but-has-zero-lebesgue-integral` · counterexample — The Dirichlet function is positive on a dense set but has Lebesgue integral $0$
- `ex-exponential-integral-by-monotone-truncation` · example — The exponential tail function is integrable by monotone truncation and geometric comparison
- `ex-x-to-the-minus-one-half-is-unbounded-but-integrable` · example — The function $x^{-1/2}$ on $(0,1]$ is unbounded and integrable
- `ex-dirac-integral-is-evaluation-at-a-point` · example — Integrating against a Dirac measure is evaluation at the point
- `ex-differentiating-the-laplace-sine-integral-under-the-integral-sign` · example — Differentiating $\int_0^{\infty} e^{-tx}\sin x\,dx$ under the integral sign
- `ex-jensen-yields-weighted-am-gm` · example — Jensen's inequality yields the weighted AM-GM inequality
- `cex-fatou-can-be-strict-and-domination-can-fail-simultaneously` · counterexample — Fatou can be strict and domination can fail simultaneously
- `cex-pointwise-limit-of-integrable-functions-can-be-nonintegrable` · counterexample — A pointwise limit of integrable functions need not be integrable
- `cex-mass-escapes-to-infinity-under-pointwise-convergence` · counterexample — Mass can escape to infinity under pointwise convergence
- `cex-uniform-convergence-does-not-force-integral-convergence-on-an-infinite-measure-space` · counterexample — Uniform convergence does not force convergence of integrals on an infinite-measure space
- `cex-decreasing-convergence-without-an-integrable-start-does-not-preserve-the-integral` · counterexample — A decreasing sequence need not satisfy a monotone convergence theorem without an integrable start
- `cex-linearity-can-fail-without-integrability` · counterexample — Linearity can fail without an integrability hypothesis
- `cex-jensen-can-fail-without-probability-normalization` · counterexample — Jensen's inequality can fail on an infinite measure space without normalization

## Your seams

Another group's pages depend on yours:

- `subharmonic-functions-and-the-dirichlet-problem` (group b) requires your `the-lebesgue-integral-and-the-convergence-theorems`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Alerts from other groups

None. No other group flagged an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-20-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — frozen integrity close, `frontier-20`

The final judge boundary is closed. The generated repair envelope above is
authoritative: review only its exact `assigned_items` and `live_tuples`, with
their explicit run or published scope; use a focused check when supported.

Do not alter mathematical items, start a judge cycle, or change another group's
records. You may correct a contract or receipt only when it exactly describes
the current item and cannot conceal a defect. A mathematical correction is a
blocker for the supervising session.

Return the gate, ids, non-item records changed, focused checks, and blockers.
