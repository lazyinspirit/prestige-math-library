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
label: step8-a
covers: 1, 2

# Step 8 — group **a**, run `frontier-20`

You are the group Alpha for batches **1**, **2**: 3 A/B pair(s), 6 page(s), 130 item(s), 101 open rejection(s) over 101 item(s).

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

| item | page | model | context_sha256 |
|---|---|---|---|
| `cex-a-continuous-preimage-can-break-lebesgue-measurability` | `measurable-functions-and-simple-approximation-examples` | gpt-5.6-terra | `ace62903da58434c7fb592d719de616762abcfc1fec9f596b8fc18d1bb1e1b73` |
| `cex-a-function-can-have-measurable-level-sets-without-being-measurable` | `measurable-functions-and-simple-approximation-examples` | gpt-5.6-terra | `484554315710f582c2b3f3ecb6e2ae79b093dd8e019a05045c737c0b247b9d41` |
| `cex-ae-equality-can-fail-on-an-incomplete-space` | `measurable-functions-and-simple-approximation-examples` | gpt-5.6-terra | `7b2c0abd6bab550bdd42dee64d19d065f673ccdb78cf45770f9d62710601b1bd` |
| `cex-an-uncountable-supremum-of-indicators-need-not-be-measurable` | `measurable-functions-and-simple-approximation-examples` | gpt-5.6-terra | `5f6dd51c564c296b3e7d522a9affacc503eb06bcce4310f401c98a82a9c9cfbf` |
| `cex-cantor-measure-is-atomless-but-not-absolutely-continuous` | `lebesgue-stieltjes-measures-and-distribution-functions-examples` | gpt-5.6-terra | `a2f0b2a7512ab98456613d87d2538eeb96d834480b4d1efae1fea6b25d7844c5` |
| `cex-decreasing-convergence-without-an-integrable-start-does-not-preserve-the-integral` | `the-lebesgue-integral-and-the-convergence-theorems-examples` | gpt-5.6-terra | `73e68be686d3a87a1b72854e1eeaeddfb01aab4ce097e43fc41390307f94775f` |
| `cex-dirichlet-function-is-positive-but-has-zero-lebesgue-integral` | `the-lebesgue-integral-and-the-convergence-theorems-examples` | gpt-5.6-terra | `0997ff596ca76b07a152f1d62d6473ecb8105abb657ed89e82b2a604c1064647` |
| `cex-fatou-can-be-strict-and-domination-can-fail-simultaneously` | `the-lebesgue-integral-and-the-convergence-theorems-examples` | gpt-5.6-terra | `07ccc35736789ee390f3e11e06afda4a73f6c2d4ad1aa371a31aa8f904d393d8` |
| `cex-jensen-can-fail-without-probability-normalization` | `the-lebesgue-integral-and-the-convergence-theorems-examples` | gpt-5.6-terra | `01cced0aea23c3bab0a0bdc154f9a30c03d3d0af64c53e897aec3c4798b82617` |
| `cex-linearity-can-fail-without-integrability` | `the-lebesgue-integral-and-the-convergence-theorems-examples` | gpt-5.6-terra | `fb0c56f69e03f2ca36d28c3a982a117dac148c3da22ccda2e0bb55441bc9c573` |
| `cex-mass-escapes-to-infinity-under-pointwise-convergence` | `the-lebesgue-integral-and-the-convergence-theorems-examples` | gpt-5.6-terra | `3e135550f5073d8e3f7b3563614b3227d3dc674c319cad1e97e328d9726a931e` |
| `cex-pointwise-limit-of-integrable-functions-can-be-nonintegrable` | `the-lebesgue-integral-and-the-convergence-theorems-examples` | gpt-5.6-terra | `50ff1eded8aebf76bba84096f61665693a3383b0cb5cfcd9ad1a57402316507f` |
| `cex-uniform-convergence-does-not-force-integral-convergence-on-an-infinite-measure-space` | `the-lebesgue-integral-and-the-convergence-theorems-examples` | gpt-5.6-terra | `38c3440442fd6e62adbdef233cd673c160b302a43bdba39d25022b2722c15b26` |
| `cor-almost-everywhere-monotone-convergence` | `the-lebesgue-integral-and-the-convergence-theorems` | gpt-5.6-terra | `041ee44ddb8cac5e53a79c9b04be73031379fdd58cae0c933e38c16de380fff1` |
| `cor-bounded-convergence-on-a-finite-measure-space` | `the-lebesgue-integral-and-the-convergence-theorems` | gpt-5.6-terra | `6e800df00105a593a9afa14a9d417ca4b1c8b257efe583519ab136217d5fae9e` |
| `cor-continuous-functions-are-borel-measurable` | `measurable-functions-and-simple-approximation` | gpt-5.6-terra | `50a4ef7f3aa04414d53a50098e787f6f2ccc341d4be97929f558cbc99b097304` |
| `cor-finite-nonnegative-integral-implies-finite-almost-everywhere` | `the-lebesgue-integral-and-the-convergence-theorems` | gpt-5.6-terra | `8dd01858cefeee0727979fc2362e640f794493dc9da9b2c3ceba3771cf0f527b` |
| `cor-integral-over-a-null-set-vanishes` | `the-lebesgue-integral-and-the-convergence-theorems` | gpt-5.6-terra | `461b0adb3f982673672e1797c7ada85fbe8336d578d08004364fe04fa4624051` |
| `cor-lebesgue-measure-is-the-lebesgue-stieltjes-measure-of-the-identity` | `lebesgue-stieltjes-measures-and-distribution-functions` | gpt-5.6-terra | `4b6f267358a0c70a12ec7b2e5d7d9820b6b3b550090f015d45ee37243506253b` |
| `cor-measurable-functions-admit-dominated-simple-approximations` | `measurable-functions-and-simple-approximation` | gpt-5.6-terra | `a6e1d0239733b5466feb26717c7010c3191a25d835e062b31ffd21b8965408b2` |
| `cor-reverse-fatou-lemma-under-an-integrable-majorant` | `the-lebesgue-integral-and-the-convergence-theorems` | gpt-5.6-terra | `ef229ddaa143b98ff64ab1f677ce7fd25d55462c9648254387b7be516f8c57c5` |
| `def-atom-of-a-measure-on-r` | `lebesgue-stieltjes-measures-and-distribution-functions` | gpt-5.6-terra | `49f9deb8f122fda129b5cc5ed793201ffb9da3cf44836ce54cbdadbbdfda1de1` |
| `def-borel-and-lebesgue-measurable-function-on-rn` | `measurable-functions-and-simple-approximation` | gpt-5.6-terra | `733c878a2b15e96c89f9fcae71eecc159078d98fc60aef410d0a038327243e7e` |
| `def-distribution-function-of-a-borel-measure-on-r` | `lebesgue-stieltjes-measures-and-distribution-functions` | gpt-5.6-terra | `171955e69b7fd73510eb7df45e18c1b985ae5403118595e19496f6a1fa8531a1` |
| `def-half-open-interval-algebra-on-r` | `lebesgue-stieltjes-measures-and-distribution-functions` | gpt-5.6-terra | `631ac5d557ae5b537fdf29c4e5d74d5f86e99fb0273a89f2ce0f94d4d87643c8` |
| `def-integrable-real-and-complex-functions-and-their-integrals` | `the-lebesgue-integral-and-the-convergence-theorems` | gpt-5.6-terra | `055d4086f0073cd655c19acd21e5395554b802a908e64679d652e49e705bbdbe` |
| `def-integral-of-a-nonnegative-simple-function` | `the-lebesgue-integral-and-the-convergence-theorems` | gpt-5.6-terra | `6da7857ae857b1ddb87b712d7436c6fdbbf6633080233fe31fc91a4aaa50921f` |
| `def-integral-over-a-measurable-set` | `the-lebesgue-integral-and-the-convergence-theorems` | gpt-5.6-terra | `e3cb03735b5589cf0559d2d5ee3649972445506da48696f6017770f6eb5c7bf2` |
| `def-measure-with-density` | `the-lebesgue-integral-and-the-convergence-theorems` | gpt-5.6-terra | `8fb1baed6a25acda119d8a06038577764b9c0595ce76be4991c6ef8ac835c23c` |
| `def-nonnegative-lebesgue-integral` | `the-lebesgue-integral-and-the-convergence-theorems` | gpt-5.6-terra | `7cf5993cd9ac79b73d93e4b897bfaf48345b0419b769ebd4182f9242c9f1e13c` |
| `def-simple-function-and-canonical-representation` | `measurable-functions-and-simple-approximation` | gpt-5.6-terra | `a1d526aa10dcdb10b0e5cbeeba1d7c03f5d77667c6f9520449701fc44da9197e` |
| `ex-a-lebesgue-measurable-function-that-is-not-borel` | `measurable-functions-and-simple-approximation-examples` | gpt-5.6-terra | `903826144e7e6b093308b0d70ecba5df64ea80583cd2bc750394a8c25c274d54` |
| `ex-a-simple-function-and-its-canonical-representation` | `measurable-functions-and-simple-approximation-examples` | gpt-5.6-terra | `5335ebe533ff1f0a0900deb21928383a6aeb5b3020e210b07a5b07b58e35965f` |
| `ex-a-step-function-generates-a-finite-atomic-measure` | `lebesgue-stieltjes-measures-and-distribution-functions-examples` | gpt-5.6-terra | `b2442786d1370765f08db5e7c3dc35cf3faa1017aa039a8cbf018f1f5dc9b8b4` |
| `ex-arctangent-generates-a-borel-probability-measure` | `lebesgue-stieltjes-measures-and-distribution-functions-examples` | gpt-5.6-terra | `5db383f6e1b332d6d424a0340bf39e6c24f7bfbe47bcf16e78ad65e81981acef` |
| `ex-counting-measure-integral-is-a-series` | `the-lebesgue-integral-and-the-convergence-theorems-examples` | gpt-5.6-terra | `32b3ffa91c7e62c2b74606ce7d42cd7725bbe66de9883628e047a219e2b07d4c` |
| `ex-differentiating-the-laplace-sine-integral-under-the-integral-sign` | `the-lebesgue-integral-and-the-convergence-theorems-examples` | gpt-5.6-terra | `95ad157178f47ca574c498f8e770d590504079c073f36f7954743ea82ad2bbf5` |
| `ex-dirac-integral-is-evaluation-at-a-point` | `the-lebesgue-integral-and-the-convergence-theorems-examples` | gpt-5.6-terra | `d24d9a7d4c696cab86a914fffadf1772d15bb311ee4e9a78225de49b32f76315` |
| `ex-dirichlet-function-is-borel-and-nowhere-continuous` | `measurable-functions-and-simple-approximation-examples` | gpt-5.6-terra | `07cfb885865262a5319c16456eb6e32e9591966e88e39562f2f5678edfad5883` |
| `ex-exponential-integral-by-monotone-truncation` | `the-lebesgue-integral-and-the-convergence-theorems-examples` | gpt-5.6-terra | `fa3f4014e6147542bc710fd4d7967cdaffd91130f10b8488a6f2c3719f655e9d` |
| `ex-jensen-yields-weighted-am-gm` | `the-lebesgue-integral-and-the-convergence-theorems-examples` | gpt-5.6-terra | `40fd326e5f40f056890c3b79d3c0001a242d423a4f53f536552083ef31201fb8` |
| `ex-one-jump-function-generates-a-dirac-mass-at-zero` | `lebesgue-stieltjes-measures-and-distribution-functions-examples` | gpt-5.6-terra | `d351fd079d1c5faa3aca3801b51546f29a2ac306264cf35207353a40075b7628` |
| `ex-sigma-of-a-two-step-simple-function` | `measurable-functions-and-simple-approximation-examples` | gpt-5.6-terra | `41c6c87272295995ba13af1ea8f3594a63ba4f3ea7897b77c1d9dc9fe470fb2b` |
| `ex-sigma-of-an-indicator-function` | `measurable-functions-and-simple-approximation-examples` | gpt-5.6-terra | `4cd9c429de489445c7e4e83dbbcc023ef1ec2f0e5c6261fe6542202fa19b65d3` |
| `ex-the-identity-function-generates-lebesgue-measure` | `lebesgue-stieltjes-measures-and-distribution-functions-examples` | gpt-5.6-terra | `fe525ab97d3f19b27d3996d6a91c966621cdd9ce52777fc547c8b2005e7b5144` |
| `ex-x-to-the-minus-one-half-is-unbounded-but-integrable` | `the-lebesgue-integral-and-the-convergence-theorems-examples` | gpt-5.6-terra | `3ee1394e41d5d3a224024f37be9f0be87f50ae5bd4258518297adf6fc118b6b9` |
| `fs-a-pointwise-limit-of-continuous-functions-need-not-be-continuous-ae` | `measurable-functions-and-simple-approximation` | gpt-5.6-terra | `1a657c48469818ef1ae670220d6990ce361a44fc56457685def86bca354ef638` |
| `fs-absolute-value-measurable-does-not-imply-measurability` | `measurable-functions-and-simple-approximation` | gpt-5.6-terra | `2c66886a9a8a23ca56b40cab5db8d2ea4c2956c4873aa09dc2e1afa9c0f0cd1f` |
| `fs-ae-equality-with-a-measurable-function-does-not-imply-measurability` | `measurable-functions-and-simple-approximation` | gpt-5.6-terra | `40949a6f9473b4f910ada79d43b56bc14051c804376adaf2af5d8762be95d04a` |
| `fs-an-arbitrary-supremum-of-measurable-functions-need-not-be-measurable` | `measurable-functions-and-simple-approximation` | gpt-5.6-terra | `65cb97715777aa314219ec0fc3f45e4849bbbc881385f96ff8bde1b031d2ae55` |
| `fs-composing-a-lebesgue-measurable-function-with-a-continuous-map-need-not-preserve-measurability` | `measurable-functions-and-simple-approximation` | gpt-5.6-terra | `129b01315aa48cdb5304c066f5808e7752fde296ad241bd2a898299644f8d4c4` |
| `fs-dominated-convergence-without-a-dominating-function` | `the-lebesgue-integral-and-the-convergence-theorems` | gpt-5.6-terra | `0d7950a0fe6260e42bc476d38525a4feab9133caf0e3c72b64aa5c752d600798` |
| `fs-every-atomless-borel-measure-on-r-has-a-density` | `lebesgue-stieltjes-measures-and-distribution-functions` | gpt-5.6-terra | `ac14d8d73e34fd31f8d22273068c08a260fbf745e7f8b1498d24bbb57de8297f` |
| `fs-every-borel-measure-on-r-is-finite-on-compact-sets` | `lebesgue-stieltjes-measures-and-distribution-functions` | gpt-5.6-terra | `69b8c9a3682378c7d7805a8d2948b3e02347b83d7a1af85d36b1ebe3de1d6b9f` |
| `fs-fatou-lemma-is-always-an-equality` | `the-lebesgue-integral-and-the-convergence-theorems` | gpt-5.6-terra | `de6ecea4f5dbcb04c3788ee78d90639e289a3fadd4684a8275516aaac497580f` |
| `fs-jensens-inequality-on-an-infinite-measure-space` | `the-lebesgue-integral-and-the-convergence-theorems` | gpt-5.6-terra | `330e6a8918df42dd78d1989c012f25d05f376558a5b796f47380feff65c94784` |
| `fs-lebesgue-stieltjes-measures-have-zero-point-masses` | `lebesgue-stieltjes-measures-and-distribution-functions` | gpt-5.6-terra | `e669765c4f94f4f8e525bbef044848bba8c14d723210090df8b589efe5e27d87` |
| `fs-linearity-without-the-integrability-hypothesis` | `the-lebesgue-integral-and-the-convergence-theorems` | gpt-5.6-terra | `edf4d51e5891a4be0b4e3075ae05d925aa2df2ca403b9b9b5db283f42930a690` |
| `fs-measurable-level-sets-do-not-imply-measurability` | `measurable-functions-and-simple-approximation` | gpt-5.6-terra | `98d1b2ae029ab4df684baba8bc1104b4b10aceb15fe362f9e74de09935d45180` |
| `fs-monotone-convergence-without-monotonicity` | `the-lebesgue-integral-and-the-convergence-theorems` | gpt-5.6-terra | `51a40407537e317488d4b3166d9613d1756e200da652ac0e3cbc992de48f4bef` |
| `fs-pointwise-limits-of-integrable-functions-are-integrable` | `the-lebesgue-integral-and-the-convergence-theorems` | gpt-5.6-terra | `e488a84c3576e4d6fc2c6f4129eb131274a0f94b608be318557652d3b1dba4fe` |
| `fs-zero-integral-forces-everywhere-zero` | `the-lebesgue-integral-and-the-convergence-theorems` | gpt-5.6-terra | `620c6e1ffc3b83f85da6309da860758811be2977e059c6fa1e6262fcb72d00c2` |
| `lem-well-definedness-of-the-simple-integral` | `the-lebesgue-integral-and-the-convergence-theorems` | gpt-5.6-terra | `bc544edb5810a32353e58981e9af00441d9c6ccd9f9c3500215ca8bfddca0b1d` |
| `prop-cantor-measure-is-a-singular-atomless-probability-measure` | `lebesgue-stieltjes-measures-and-distribution-functions` | gpt-5.6-terra | `3019bf4341485918be800d935b068eb03fe9171c20001e36788a79792f980394` |
| `prop-closure-properties-of-measurable-functions-used-by-the-integral` | `the-lebesgue-integral-and-the-convergence-theorems` | gpt-5.6-terra | `b90bc133fe56ebd06b48c6ca2a078e7c7c5b32646791c92a45049c3e90e464b9` |
| `prop-indefinite-integral-of-an-integrable-function-is-countably-additive` | `the-lebesgue-integral-and-the-convergence-theorems` | gpt-5.6-terra | `fa220df040c65f2f26a83b2ac841574ab301480abac149313b37366575c486c7` |
| `prop-indicator-function-is-measurable-iff-its-set-is-measurable` | `measurable-functions-and-simple-approximation` | gpt-5.6-terra | `c3796093bbb5dd6e37e88eb4321bd2e10868b9f76272e8cbd505bf4814601b95` |
| `prop-order-and-scalar-rules-for-the-nonnegative-integral` | `the-lebesgue-integral-and-the-convergence-theorems` | gpt-5.6-terra | `28a201eef7a31097a242f3da8d7b00d52eaeb302ddcd27814e5e3d4ac82f99f5` |
| `prop-stieltjes-interval-set-function-is-finitely-additive` | `lebesgue-stieltjes-measures-and-distribution-functions` | gpt-5.6-terra | `7156a9f88b16f947ba387e678dbd87243d680bff67facfe70132aadaacd544d1` |
| `rem-zero-times-infinity-convention-for-pointwise-products` | `measurable-functions-and-simple-approximation` | gpt-5.6-terra | `975cfbafad5fa2bae28f46174641b692bb28a4f848bafb4d0f3e52980fbeef0c` |
| `thm-absolute-continuity-of-the-integral` | `the-lebesgue-integral-and-the-convergence-theorems` | gpt-5.6-terra | `164e7833c8772d70ba43053b39201731c574219136271dc9d411f1f6df7d956e` |
| `thm-arithmetic-and-lattice-operations-preserve-measurability` | `measurable-functions-and-simple-approximation` | gpt-5.6-terra | `549239bfcc68cbd0b012a8df6d5096516fa95b0d1b7873f52df4d8132de3f12c` |
| `thm-chebyshev-markov-inequality-for-the-integral` | `the-lebesgue-integral-and-the-convergence-theorems` | gpt-5.6-terra | `85f1d8f20ca81411a33e0c6de2fdab138f7142487de41712d332d464a837431c` |
| `thm-completion-measurable-functions-have-base-measurable-representatives` | `measurable-functions-and-simple-approximation` | gpt-5.6-terra | `c6ca100c68b17fe66d9f545c9eb9349731df99c6e51c2305f419e7590b86ec35` |
| `thm-continuity-under-the-integral-sign` | `the-lebesgue-integral-and-the-convergence-theorems` | gpt-5.6-terra | `bb32dce2140c4b7a97f829043318eac49a1160100141d1faf9815e3a4db35142` |
| `thm-coordinatewise-measurability-into-r-n` | `measurable-functions-and-simple-approximation` | gpt-5.6-terra | `e66c87fd4badf1342041ef5fcd6f99b29aadcefe6bc3d216b12148825477e642` |
| `thm-differentiation-under-the-integral-sign` | `the-lebesgue-integral-and-the-convergence-theorems` | gpt-5.6-terra | `65c0fcfc51d35083e4e2ddcd4e4771c147fb508e40d4cd331a2ad6d30bee38f0` |
| `thm-dominated-convergence` | `the-lebesgue-integral-and-the-convergence-theorems` | gpt-5.6-terra | `81821e7f94b789329c96172bccc373af4238cefec32c192dc9bb4c23f8593d6c` |
| `thm-doob-dynkin-lemma` | `measurable-functions-and-simple-approximation` | gpt-5.6-terra | `a61c49e1d82e7f0f42775c948457d52cc6c658adc9b165622889256fbe568e76` |
| `thm-existence-of-the-lebesgue-stieltjes-measure` | `lebesgue-stieltjes-measures-and-distribution-functions` | gpt-5.6-terra | `5a327923942f4e5b2216cc578418d4af822c09e3ef11007d5d2bb58869d49814` |
| `thm-fatou-lemma` | `the-lebesgue-integral-and-the-convergence-theorems` | gpt-5.6-terra | `a0095574edf4b6e906baf43de8845c95a506e525c627c6e9ad63a9a4084396d4` |
| `thm-finite-borel-measure-on-r-is-atomic-plus-atomless` | `lebesgue-stieltjes-measures-and-distribution-functions` | gpt-5.6-terra | `4fe8cb6ca2997a3dab612ef5d3fe661dbc314cc7d6131b47820758fdec4e672a` |
| `thm-increasing-simple-approximation-of-a-nonnegative-measurable-function` | `the-lebesgue-integral-and-the-convergence-theorems` | gpt-5.6-terra | `80bbe0b9d6bc2efd5e73e9627129feea869817ebf4db0e674277b871f765064b` |
| `thm-indefinite-integral-of-a-nonnegative-function-is-a-measure` | `the-lebesgue-integral-and-the-convergence-theorems` | gpt-5.6-terra | `18bedaf0a1cd355d5fae3821b8aefa9e4e0bb12240ffca57a93a31d123d6e2b7` |
| `thm-integrable-simple-functions-are-dense-in-l-one` | `the-lebesgue-integral-and-the-convergence-theorems` | gpt-5.6-terra | `782a356018751eb479eee82c5e1d96b32e7a05a42725a7a8b85792b60bdb43c8` |
| `thm-integral-triangle-inequality` | `the-lebesgue-integral-and-the-convergence-theorems` | gpt-5.6-terra | `792032059883a046457454e363e07e65329bd7f355aa5f7b1aa8b10864ff7cc9` |
| `thm-integration-against-a-density` | `the-lebesgue-integral-and-the-convergence-theorems` | gpt-5.6-terra | `0b62bb8e6a0647a2cd9b31a9a0981ad2de3a815790d7df180a86f5d1e6f73df3` |
| `thm-interval-formulas-and-atoms-for-lebesgue-stieltjes-measures` | `lebesgue-stieltjes-measures-and-distribution-functions` | gpt-5.6-terra | `cabe5b2e085cf69a4dcb629160f23adc2508f27628c84eb7452c51534a4a37f0` |
| `thm-jensens-integral-inequality` | `the-lebesgue-integral-and-the-convergence-theorems` | gpt-5.6-terra | `c8f7d8f64034ce73dd1977a1711d10af65072e20dcb9c5d223488a9a34915ea7` |
| `thm-lebesgue-stieltjes-correspondence-with-distribution-functions` | `lebesgue-stieltjes-measures-and-distribution-functions` | gpt-5.6-terra | `357a5e5d59e3fc0536239c68d94fd3656fa69fd7adfa650ed4d563926491e47f` |
| `thm-lebesgue-stieltjes-measures-are-regular-on-r` | `lebesgue-stieltjes-measures-and-distribution-functions` | gpt-5.6-terra | `34a27aceeaf0d37e4161831f204e35869d4a9ccc77b606aecc837519996a85de` |
| `thm-linearity-of-the-lebesgue-integral-on-l-one` | `the-lebesgue-integral-and-the-convergence-theorems` | gpt-5.6-terra | `bc9c74a5d88af9f9e5ce3a054cc8df40a04740f663eaa2fb611aba08964232ca` |
| `thm-monotone-convergence-for-the-integral` | `the-lebesgue-integral-and-the-convergence-theorems` | gpt-5.6-terra | `c50f3a862eee3725fa465137ea70ee9bf6fc218b0e1e35db5c6d8b816050fd17` |
| `thm-monotone-real-functions-are-borel-measurable` | `measurable-functions-and-simple-approximation` | gpt-5.6-terra | `b4d7d5558d640d7dd5adbc93034e15925618116d804e074c307692c8e783fc4e` |
| `thm-nonnegative-integral-zero-iff-zero-almost-everywhere` | `the-lebesgue-integral-and-the-convergence-theorems` | gpt-5.6-terra | `aaad44930cb270f6ff79d5033e6d0d13951fbd56eb5fc9aa8fc5ad1e392c8c70` |
| `thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable` | `measurable-functions-and-simple-approximation` | gpt-5.6-terra | `46c413db319e7dace4d85cf7c33ed55e471f82785abb10ff4c8f44ebef1c4b1f` |
| `thm-simple-indefinite-integral-is-a-measure` | `the-lebesgue-integral-and-the-convergence-theorems` | gpt-5.6-terra | `3da2a1ed00a485777cc6d44ac5ad3c545906442d58dcfc7836abc1535046ca8d` |
| `thm-stieltjes-interval-set-function-is-a-premeasure` | `lebesgue-stieltjes-measures-and-distribution-functions` | gpt-5.6-terra | `b8455420737bf5b2f7642e85bee6410f4370ccaa604fae3f9a4fcd92be5f1a14` |
| `thm-the-lebesgue-integral-respects-almost-everywhere-equality` | `the-lebesgue-integral-and-the-convergence-theorems` | gpt-5.6-terra | `608f7ab3bc209e4cba12dadf5f33ce1ce09168bbfff66badb43d8ead8a973c8d` |
| `thm-threshold-characterisations-of-real-and-extended-real-measurability` | `measurable-functions-and-simple-approximation` | gpt-5.6-terra | `462ca439501c7d828c6d698055daf1e5ce35672148c5911e1886d0749a0e9334` |
| `thm-uniqueness-of-the-lebesgue-stieltjes-measure-on-r` | `lebesgue-stieltjes-measures-and-distribution-functions` | gpt-5.6-terra | `d3a482fe176f08b527b96e661ecc0780fd7277d62842f7976ccf2603f82908f3` |

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
