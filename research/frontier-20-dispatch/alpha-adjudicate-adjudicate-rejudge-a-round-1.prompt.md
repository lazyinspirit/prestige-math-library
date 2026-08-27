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
label: adjudicate-rejudge-a-round-1

# Step 8 — group **a**, run `frontier-20`

You are the group Alpha for batches **1**, **2**: 3 A/B pair(s), 6 page(s), 130 item(s), 30 open rejection(s) over 30 item(s).

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
| `cex-a-function-can-have-measurable-level-sets-without-being-measurable` | `measurable-functions-and-simple-approximation-examples` | gpt-5.6-terra | `1e8cc23e278df077f4ef812e7b6bf8ece5729f65a9c942a99e3cc064f9126014` |
| `cex-ae-equality-can-fail-on-an-incomplete-space` | `measurable-functions-and-simple-approximation-examples` | gpt-5.6-terra | `148d71230345f0d4066719c7b2a988a33ba5a1f2c8560f17fff314f02e2e9b54` |
| `cex-an-uncountable-supremum-of-indicators-need-not-be-measurable` | `measurable-functions-and-simple-approximation-examples` | gpt-5.6-terra | `bc53d265f456b3b1532058eb4ecf55dfe9111198e264bd4908ac01cff14caa16` |
| `cex-cantor-measure-is-atomless-but-not-absolutely-continuous` | `lebesgue-stieltjes-measures-and-distribution-functions-examples` | gpt-5.6-terra | `7163ccc742cacdd84c0d380d7d99998c56cb710b440e47361294938ba376a334` |
| `cex-fatou-can-be-strict-and-domination-can-fail-simultaneously` | `the-lebesgue-integral-and-the-convergence-theorems-examples` | gpt-5.6-terra | `2bc41aaf34dcca0978cfda1867be199ec27b0fc2d98987e2e9b77103361e7054` |
| `cex-pointwise-limit-of-integrable-functions-can-be-nonintegrable` | `the-lebesgue-integral-and-the-convergence-theorems-examples` | gpt-5.6-terra | `15fb3e86edf7e77293d02872903b6927fb81543bf8f0f1bd71ad6faa492cfb95` |
| `cex-uniform-convergence-does-not-force-integral-convergence-on-an-infinite-measure-space` | `the-lebesgue-integral-and-the-convergence-theorems-examples` | gpt-5.6-terra | `2babf03e193b74ebc68c83b611a6f326a5b163576b1bfb4dc45d882c05613c39` |
| `cor-continuous-functions-are-borel-measurable` | `measurable-functions-and-simple-approximation` | gpt-5.6-terra | `fe79a297b5fe07082edd728d8745243897ac6ea186aac3ae80d68fa54e4a752c` |
| `def-borel-and-lebesgue-measurable-function-on-rn` | `measurable-functions-and-simple-approximation` | gpt-5.6-terra | `dd9951bd5489eb6ec370eeed3a51fed535699562ffc367816e9860e13be0e409` |
| `ex-a-lebesgue-measurable-function-that-is-not-borel` | `measurable-functions-and-simple-approximation-examples` | gpt-5.6-terra | `74369e861412c92b1dbec6c3a2686ce78a9472e19425ab3a7b48320b62ab72da` |
| `ex-arctangent-generates-a-borel-probability-measure` | `lebesgue-stieltjes-measures-and-distribution-functions-examples` | gpt-5.6-terra | `1187e2ef93016b32986fec7707a82e1113c546b814c7fa1159bc3a5c4f02bc5c` |
| `ex-counting-measure-integral-is-a-series` | `the-lebesgue-integral-and-the-convergence-theorems-examples` | gpt-5.6-terra | `dd7e0cbafe546d7f976ae55c63c6179d1362029415ec918c074edf9490a5f07d` |
| `ex-sigma-of-a-two-step-simple-function` | `measurable-functions-and-simple-approximation-examples` | gpt-5.6-terra | `609cb6823aaee6bec768eace59ba3fe543b653330d396ac1263c89957c525da5` |
| `fs-ae-equality-with-a-measurable-function-does-not-imply-measurability` | `measurable-functions-and-simple-approximation` | gpt-5.6-terra | `867543d9948d2819b9ab762b482af8613d4f2b8c0c5f01bc9d1c4a8e6b215d54` |
| `fs-an-arbitrary-supremum-of-measurable-functions-need-not-be-measurable` | `measurable-functions-and-simple-approximation` | gpt-5.6-terra | `6b3ddfacb2b248c7097dd9608f7bfee0fde5fa9d23829be93803bd7fcd7dfae1` |
| `fs-composing-a-lebesgue-measurable-function-with-a-continuous-map-need-not-preserve-measurability` | `measurable-functions-and-simple-approximation` | gpt-5.6-terra | `496f5753b10902554551e1fccfdd5e4a6a12c1ba3e386d7c9f1d5709b4d94c0b` |
| `fs-dominated-convergence-without-a-dominating-function` | `the-lebesgue-integral-and-the-convergence-theorems` | gpt-5.6-terra | `055b181d8edbddf9ad9595107fb202f409fcf93b4676a8681a39031d993712ad` |
| `fs-every-atomless-borel-measure-on-r-has-a-density` | `lebesgue-stieltjes-measures-and-distribution-functions` | gpt-5.6-terra | `5c672e6a8f24e1508dc34a88107cae86d3b21427b076073ccd9daabe54f0138f` |
| `fs-linearity-without-the-integrability-hypothesis` | `the-lebesgue-integral-and-the-convergence-theorems` | gpt-5.6-terra | `29a3e3cf7aeaf5a7c3082123bd3f9c225d84fa185b3f7ea137102248ad3477f3` |
| `fs-measurable-level-sets-do-not-imply-measurability` | `measurable-functions-and-simple-approximation` | gpt-5.6-terra | `df27be99eb4e15661101372d5c79f3ebf35beb62c94d041fa94507b844d4cec9` |
| `fs-monotone-convergence-without-monotonicity` | `the-lebesgue-integral-and-the-convergence-theorems` | gpt-5.6-terra | `1de1d7fb9a7c739eb71bf4776384843c547030bb6324cca7e5f0be5487250385` |
| `fs-pointwise-limits-of-integrable-functions-are-integrable` | `the-lebesgue-integral-and-the-convergence-theorems` | gpt-5.6-terra | `5d556a66271251652169f0b63f15ce913b0f6718284ddf2a310a9db8ee7b1371` |
| `prop-cantor-measure-is-a-singular-atomless-probability-measure` | `lebesgue-stieltjes-measures-and-distribution-functions` | gpt-5.6-terra | `ecfb0ae17c00f508b41422d59dc4823d5448cb38f4dc019b9a1b32eeec99e787` |
| `prop-indefinite-integral-of-an-integrable-function-is-countably-additive` | `the-lebesgue-integral-and-the-convergence-theorems` | gpt-5.6-terra | `23f50781a864fb0f5b4d2f78484525d1518a339692915410372980602f798587` |
| `thm-completion-measurable-functions-have-base-measurable-representatives` | `measurable-functions-and-simple-approximation` | gpt-5.6-terra | `8991c79a411a6162361567c18bbb2080298656e59ac25a77166951d8f86539d8` |
| `thm-coordinatewise-measurability-into-r-n` | `measurable-functions-and-simple-approximation` | gpt-5.6-terra | `1ec442f218b170240d799eb073ecff5adc0c11addab127d3a355b65f05b1a238` |
| `thm-finite-borel-measure-on-r-is-atomic-plus-atomless` | `lebesgue-stieltjes-measures-and-distribution-functions` | gpt-5.6-terra | `a3a2a6bdcc45809dfbf79c0462ce5f904a1a9891d6b663e55988d487d6f76225` |
| `thm-interval-formulas-and-atoms-for-lebesgue-stieltjes-measures` | `lebesgue-stieltjes-measures-and-distribution-functions` | gpt-5.6-terra | `f1d5334b8a544d49beddd1f64c3cae9b685011753806633504aaada35ef9ad7d` |
| `thm-lebesgue-stieltjes-measures-are-regular-on-r` | `lebesgue-stieltjes-measures-and-distribution-functions` | gpt-5.6-terra | `b3c3775d788b3301f393d40ac304caad335cb753d4ee0422efe88512bc39c965` |
| `thm-the-lebesgue-integral-respects-almost-everywhere-equality` | `the-lebesgue-integral-and-the-convergence-theorems` | gpt-5.6-terra | `05d96ffc6b28ed668ed38bbc3855b1091238e591293995c0c2780a456c576805` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — exact closure recovery, `frontier-20`

Read `research/frontier-20-judge-closure.json`,
`research/frontier-20-judge.jsonl`,
`research/frontier-20-judge-adjudications.jsonl`, and the generated `by_item`
ownership map in `research/frontier-20-step8-scope.json`. Take only current
unadjudicated `(id, model, context_sha256)` rows owned by this group; leave
other groups' rows untouched. A row owned by no group is a reported blocker,
not a row to discard.

Append one exact adjudication outcome per owned row. Only
`confirmed_fatal` licenses its coherent repair and matching ledger row; update
only records made stale by that repair. Send a concrete other-group finding to
`research/frontier-20-step8-cross-group.jsonl`, never repair that item.

Write `research/frontier-20-alpha-step8-closure-recovery-<group>.md` with the rows
handled, outcomes, licensed repairs, rejudge targets, cross-group alerts, and
blockers. Preserve shared append-only ledgers.
