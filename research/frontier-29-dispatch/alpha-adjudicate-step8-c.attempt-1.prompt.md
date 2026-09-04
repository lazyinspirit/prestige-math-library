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
group work, `research/frontier-29-alpha-groups.json` is the assignment: it permits at
most eight groups of at most three batches, and a group writes only its own
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

run: frontier-29
role: alpha-adjudicate
label: step8-c
covers: 4, 6, 7

# Step 8 adjudication — group **c**, run `frontier-29`

You are the group Alpha for batches **4**, **6**, **7**: 3 A/B pair(s), 6 page(s), 94 item(s), 41 open rejection(s) over 41 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-29-alpha-c-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
| 4 | `the-maximal-function-and-lebesgue-differentiation` | A | measure-theory | 288.033 | `the-duality-of-lp-and-lq-examples` |
| 4 | `the-maximal-function-and-lebesgue-differentiation-examples` | B | measure-theory | 288.034 | `the-maximal-function-and-lebesgue-differentiation` |
| 6 | `probability-spaces-random-variables-and-expectation` | A | probability | 288.097 | `tempered-distributions-and-the-fourier-transform-examples` |
| 6 | `probability-spaces-random-variables-and-expectation-examples` | B | probability | 288.098 | `probability-spaces-random-variables-and-expectation` |
| 7 | `dirichlet-kernel-localisation-and-pointwise-fourier-convergence` | A | fourier-analysis | 288.14002 | `itos-formula-and-brownian-martingales-examples`, `density-separability-and-convolution-in-lp` |
| 7 | `dirichlet-kernel-localisation-and-pointwise-fourier-convergence-examples` | B | fourier-analysis | 288.14004 | `dirichlet-kernel-localisation-and-pointwise-fourier-convergence` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `the-maximal-function-and-lebesgue-differentiation` — The Maximal Function and Lebesgue Differentiation (25 item(s))

- `def-locally-integrable-function-on-r-n` · definition — A locally integrable function on $\mathbb{R}^n$
- `lem-euclidean-balls-have-positive-finite-lebesgue-measure` · lemma — Euclidean balls have positive finite Lebesgue measure
- `def-ball-average-operator-on-r-n` · definition — The average of a locally integrable function over a Euclidean ball
- `def-centered-and-uncentered-hardy-littlewood-maximal-functions` · definition — The centered and uncentered Hardy-Littlewood maximal functions
- `def-sublinear-operator-weak-and-strong-type-p-q` · definition — Sublinear operators and weak or strong type $(p,q)$ bounds
- `def-lebesgue-point-and-lebesgue-set` · definition — Lebesgue points and the Lebesgue set of an $L^1_{loc}$ class
- `def-density-of-a-measurable-set-at-a-point` · definition — Density of a measurable set at a point
- `def-family-shrinking-nicely-to-a-point` · definition — A family shrinking nicely to a point
- `thm-vitali-covering-lemma-for-balls-with-fivefold-dilates` · theorem — Vitali covering lemma for Euclidean balls with fivefold dilates
- `prop-ball-average-is-continuous-in-centre-and-radius` · proposition — Ball averages vary continuously with the centre and radius
- `thm-centered-hardy-littlewood-maximal-function-is-borel-measurable` · theorem — The centered Hardy-Littlewood maximal function is Borel measurable
- `prop-centered-and-uncentered-maximal-functions-are-comparable` · proposition — The centered and uncentered maximal functions are pointwise comparable
- `thm-hardy-littlewood-maximal-inequality-for-balls` · theorem — The centered Hardy-Littlewood maximal operator is weak type $(1,1)$
- `prop-hardy-littlewood-maximal-function-is-l-infinity-bounded` · proposition — The centered maximal operator is bounded on $L^\infty$
- `thm-marcinkiewicz-interpolation-for-weak-one-one-and-strong-infinity` · theorem — Marcinkiewicz interpolation from weak $(1,1)$ and strong $(\infty,\infty)$
- `cor-centered-hardy-littlewood-maximal-operator-is-l-p-bounded` · corollary — The centered maximal operator is bounded on $L^p(\mathbb{R}^n)$ for $1<p<\infty$
- `thm-riesz-thorin-interpolation` · theorem — Riesz-Thorin interpolation theorem
- `lem-continuous-compactly-supported-functions-differentiate-by-ball-averages` · lemma — Continuous compactly supported functions are recovered by small ball averages
- `thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n` · theorem — Lebesgue differentiation theorem on $\mathbb{R}^n$
- `thm-almost-every-point-is-a-lebesgue-point` · theorem — Almost every point is a Lebesgue point of a locally integrable function
- `thm-lebesgue-density-theorem` · theorem — Lebesgue density theorem
- `thm-differentiation-along-families-shrinking-nicely` · theorem — Differentiation holds along families shrinking nicely
- `thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n` · theorem — Differentiation of sigma-finite Borel measures finite on compact sets
- `thm-first-fundamental-theorem-of-calculus-for-l-one` · theorem — The indefinite integral of an $L^1$ function is differentiable almost everywhere
- `cex-the-hardy-littlewood-maximal-operator-is-not-strong-type-one-one` · counterexample — The Hardy-Littlewood maximal operator is not strong type $(1,1)$

### `the-maximal-function-and-lebesgue-differentiation-examples` — The Maximal Function and Lebesgue Differentiation — Examples (9 item(s))

- `ex-the-centered-maximal-function-of-the-unit-interval-indicator-on-r` · example — The centered maximal function of $\mathbf{1}_{[0,1]}$ on $\mathbb{R}$
- `cex-the-unit-interval-indicator-has-nonintegrable-maximal-function` · counterexample — The maximal function of $\mathbf{1}_{[0,1]}$ is not integrable
- `ex-a-unit-mass-spike-has-a-large-maximal-superlevel-set` · example — A unit-mass spike has a large maximal superlevel set
- `ex-the-lebesgue-set-of-the-rationals-indicator-is-all-of-r` · example — The $L^1_{loc}$ class of $\mathbf{1}_{\mathbb{Q}}$ has every point as a Lebesgue point
- `ex-an-interval-endpoint-is-not-a-density-point` · example — An endpoint of an interval has density one half, not one
- `ex-a-positive-measure-compact-set-can-miss-part-of-every-interval` · example — A positive-measure compact set can miss part of every interval
- `ex-steinhaus-follows-from-the-density-theorem` · example — Steinhaus follows in two lines from the density theorem
- `fs-there-is-a-measurable-set-with-density-one-half-in-every-interval` · false-statement — FALSE: some measurable set has density one half in every interval
- `ex-a-locally-integrable-function-can-fail-to-differentiate-on-a-null-set` · example — A locally integrable function can fail to differentiate on a null set

### `probability-spaces-random-variables-and-expectation` — Probability Spaces Random Variables and Expectation (30 item(s))

- `lem-probability-measure-basic-identities` · lemma — Basic identities for a probability measure
- `thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces` · theorem — Finite probability spaces are exactly finite full-power-set probability spaces
- `rem-finite-probability-space-definition-agreement` · remark — Agreement with the published finite probability-space definition
- `def-random-element-and-real-random-variable` · definition — Random elements and real random variables
- `lem-finite-random-variables-are-measurable` · lemma — Finite random variables are measurable
- `def-law-or-distribution-of-a-random-element` · definition — Law or distribution of a random element
- `lem-law-of-a-random-element-is-a-probability-measure` · lemma — The law of a random element is a probability measure
- `lem-laws-commute-with-measurable-maps` · lemma — Laws commute with measurable maps
- `def-cumulative-distribution-function-of-a-random-variable` · definition — Cumulative distribution function of a real random variable
- `thm-probability-law-and-distribution-function-correspondence` · theorem — Probability laws correspond to distribution functions
- `def-atom-and-continuity-point-of-a-law` · definition — Atoms and continuity points of a law
- `def-expectation-of-a-nonnegative-or-integrable-random-variable` · definition — Expectation of a nonnegative or integrable random variable
- `lem-expectation-is-independent-of-the-ae-representative` · lemma — Expectation depends only on the almost-everywhere class
- `thm-change-of-variables-for-expectation` · theorem — Change of variables for expectation
- `cor-expectation-agrees-with-the-finite-weighted-sum` · corollary — Expectation agrees with the published finite weighted sum
- `cor-expectation-of-an-indicator-is-probability` · corollary — The expectation of an indicator is the probability of the event
- `cor-layer-cake-formulas-for-random-variables` · corollary — Layer-cake formulas for random variables
- `cor-expectation-linearity-monotonicity-and-modulus-bound` · corollary — Linearity, monotonicity, and the modulus bound for expectation
- `def-moments-variance-and-covariance` · definition — Moments, variance, and covariance on a probability space
- `lem-variance-and-covariance-identities-for-random-variables` · lemma — Variance and covariance identities for random variables
- `thm-jensen-inequality-for-expectation` · theorem — Jensen's inequality for expectation
- `cor-markov-inequality-for-random-variables` · corollary — Markov's inequality for random variables
- `cor-chebyshev-inequality-for-random-variables` · corollary — Chebyshev's inequality for random variables
- `cor-holder-inequality-for-random-variables` · corollary — Holder's inequality for random variables
- `cor-cauchy-schwarz-for-random-variables` · corollary — Cauchy-Schwarz for random variables
- `cor-lyapunov-moment-inequality-on-a-probability-space` · corollary — Lyapunov's moment inequality on a probability space
- `cor-second-moment-positive-probability-bound` · corollary — The second-moment lower bound for positive probability
- `rem-general-inequalities-restrict-to-the-published-finite-ones` · remark — The general inequalities restrict to the published finite ones
- `thm-normal-equations-for-best-affine-l2-prediction` · theorem — Normal equations for best affine $L^2$ prediction
- `cor-best-affine-predictor-from-one-random-variable` · corollary — Best affine prediction from one random variable

### `probability-spaces-random-variables-and-expectation-examples` — Probability Spaces Random Variables and Expectation — Examples (11 item(s))

- `ex-countable-probability-space-with-geometric-weights` · example — A countable probability space with geometric weights
- `ex-uniform-random-variable-on-zero-one` · example — The uniform random variable on [0,1]
- `ex-exponential-random-variable-from-its-tail` · example — Recovering an exponential law from its tail
- `ex-discrete-continuous-and-mixed-distribution-functions` · example — Discrete, continuous, and mixed distribution functions
- `ex-expectation-under-a-measurable-transformation` · example — Expectation under a measurable transformation
- `ex-jensen-for-logarithm-and-exponential` · example — Jensen for logarithm and exponential
- `ex-markov-and-chebyshev-sharpness` · example — Markov and Chebyshev sharpness
- `cex-a-random-variable-need-not-have-a-finite-expectation` · counterexample — A random variable need not have a finite expectation
- `cex-a-distribution-function-need-not-have-a-density` · counterexample — A distribution function need not have a density
- `cex-equality-almost-surely-is-not-pointwise-equality` · counterexample — Equality almost surely is not pointwise equality
- `ex-bertrand-chord-paradox-is-a-model-specification-problem` · example — Bertrand's chord paradox is a model-specification problem

### `dirichlet-kernel-localisation-and-pointwise-fourier-convergence` — Dirichlet Kernel Localisation and Pointwise Fourier Convergence (14 item(s))

- `def-period-one-fourier-coefficients-partial-sums-and-convolution` · definition — Period-one Fourier coefficients, partial sums, and convolution on the torus
- `def-dirichlet-and-fejer-kernels` · definition — Dirichlet and Fejer kernels
- `lem-fourier-partial-sums-are-dirichlet-convolutions` · lemma — Fourier partial sums are Dirichlet convolutions
- `lem-closed-form-and-size-bounds-for-the-dirichlet-kernel` · lemma — Closed form and size bounds for the Dirichlet kernel
- `lem-step-functions-have-vanishing-torus-fourier-coefficients` · lemma — Step functions on one period have vanishing Fourier coefficients
- `lem-step-functions-on-one-period-are-dense-in-l-one-on-the-torus` · lemma — Step functions on one period are dense in L^1 on the torus
- `thm-riemann-lebesgue-lemma-for-fourier-coefficients` · theorem — Riemann-Lebesgue lemma for Fourier coefficients
- `lem-symmetric-difference-formula-for-fourier-partial-sums` · lemma — Symmetric difference formula for Fourier partial sums
- `thm-riemann-localisation-principle-for-fourier-series` · theorem — Riemann localisation principle for Fourier series
- `thm-dini-pointwise-convergence-criterion-for-fourier-series` · theorem — Dini pointwise convergence criterion for Fourier series
- `cor-local-holder-regularity-implies-fourier-convergence-at-a-point` · corollary — Local Holder regularity implies Fourier convergence at a point
- `lem-bounded-variation-gives-one-sided-dirichlet-integrability` · lemma — Bounded variation gives one-sided Dirichlet integrability
- `thm-dirichlet-jordan-pointwise-convergence` · theorem — Dirichlet-Jordan pointwise convergence
- `cor-piecewise-c-one-fourier-series-converges-to-midpoint-values` · corollary — Piecewise C^1 Fourier series converges to midpoint values

### `dirichlet-kernel-localisation-and-pointwise-fourier-convergence-examples` — Dirichlet Kernel Localisation and Pointwise Fourier Convergence — Examples (5 item(s))

- `ex-dirichlet-kernel-at-zero-and-away-from-zero` · example — The Dirichlet kernel at zero and away from zero
- `thm-lebesgue-constants-grow-logarithmically` · theorem — Lebesgue constants grow logarithmically
- `ex-fourier-partial-sums-of-the-sawtooth` · example — Fourier partial sums of the sawtooth
- `ex-localisation-for-functions-equal-on-an-arc` · example — Localisation for functions equal on an arc
- `cex-continuity-alone-does-not-satisfy-a-dini-modulus` · counterexample — Continuity alone does not satisfy a Dini modulus

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
| `cex-a-random-variable-need-not-have-a-finite-expectation` | `probability-spaces-random-variables-and-expectation-examples` | gpt-5.6-terra | `f9d7f3a85a6fdaed62322fa7c81c89a85981e16214c007a1375f3298710499e0` |
| `cex-continuity-alone-does-not-satisfy-a-dini-modulus` | `dirichlet-kernel-localisation-and-pointwise-fourier-convergence-examples` | gpt-5.6-terra | `efd32b11770948adfde757a4c43c37f357c2577f510a9ca9163b34fcd7f63d37` |
| `cex-the-hardy-littlewood-maximal-operator-is-not-strong-type-one-one` | `the-maximal-function-and-lebesgue-differentiation` | gpt-5.6-terra | `f4e3415fa5b77e97a11a65f67db3d1944bdf10d93a596d3765d74b9b49b02d3a` |
| `cor-expectation-agrees-with-the-finite-weighted-sum` | `probability-spaces-random-variables-and-expectation` | gpt-5.6-terra | `04bef19bd00457f161412a1f437e0acbc9aaa049bdc57c6da19256a8312d647b` |
| `cor-expectation-linearity-monotonicity-and-modulus-bound` | `probability-spaces-random-variables-and-expectation` | gpt-5.6-terra | `ea4e26fc317f5d3c2619c785304685ef90630104e498ef33190019c3376ebcb0` |
| `cor-layer-cake-formulas-for-random-variables` | `probability-spaces-random-variables-and-expectation` | gpt-5.6-terra | `bba76e54c5aa72469a1c5ab598b21b1fa9924ffb4076eaa8221057278c49c176` |
| `cor-local-holder-regularity-implies-fourier-convergence-at-a-point` | `dirichlet-kernel-localisation-and-pointwise-fourier-convergence` | gpt-5.6-terra | `c2075bdcfc17824a0e34806e762769233b3ac6b4a543e3143a27ce273dd9dd4e` |
| `cor-lyapunov-moment-inequality-on-a-probability-space` | `probability-spaces-random-variables-and-expectation` | gpt-5.6-terra | `e4a903eb8415e4c6752547000ae2d2ecd9c0119a1f8d0177d759f2f9a7034ae7` |
| `cor-second-moment-positive-probability-bound` | `probability-spaces-random-variables-and-expectation` | gpt-5.6-terra | `d6cf16ea6c609d476223c9555e4c69b389e726fda648fc6d7ce56a29972d89fa` |
| `def-density-of-a-measurable-set-at-a-point` | `the-maximal-function-and-lebesgue-differentiation` | gpt-5.6-terra | `2a220cff8e64e171fee0277ea4a42fea50078b5118920b9dd82258794cec5218` |
| `def-family-shrinking-nicely-to-a-point` | `the-maximal-function-and-lebesgue-differentiation` | gpt-5.6-terra | `4ba2264e33a409ab06b78b281b76e90a192c30cd2bd13f608c75471c0f4f269c` |
| `def-locally-integrable-function-on-r-n` | `the-maximal-function-and-lebesgue-differentiation` | gpt-5.6-terra | `f7076cfc99e7055d8e0572b2e1cdb24805dc49ff6dec9fb933acad04ec567bac` |
| `def-period-one-fourier-coefficients-partial-sums-and-convolution` | `dirichlet-kernel-localisation-and-pointwise-fourier-convergence` | gpt-5.6-terra | `8740e70cff0b377b69a6bbcb8a9ac934859ced88a1096e34040bc68b4b7e2040` |
| `def-sublinear-operator-weak-and-strong-type-p-q` | `the-maximal-function-and-lebesgue-differentiation` | gpt-5.6-terra | `166bdc06c73104b5d68f95c9b97738bd7e3c1b9069dc847f0b3a00aca60dae91` |
| `ex-a-locally-integrable-function-can-fail-to-differentiate-on-a-null-set` | `the-maximal-function-and-lebesgue-differentiation-examples` | gpt-5.6-terra | `f07299c78071c7b089cd73dc21cf052d8b981f8f9ea3c051d0c1488e9300b01b` |
| `ex-a-positive-measure-compact-set-can-miss-part-of-every-interval` | `the-maximal-function-and-lebesgue-differentiation-examples` | gpt-5.6-terra | `5fe1ca9742ef1e8d818dac5dcbd36e9eb03834ca7bec3bf34273b55650c73379` |
| `ex-countable-probability-space-with-geometric-weights` | `probability-spaces-random-variables-and-expectation-examples` | gpt-5.6-terra | `53a822b2976f1f5fe4b20a0f4003e0b3e074044147846742887e1e45f0de6e43` |
| `ex-steinhaus-follows-from-the-density-theorem` | `the-maximal-function-and-lebesgue-differentiation-examples` | gpt-5.6-terra | `48dad81b9935f4b8842fa305939c9fd030646739873d853aeda8587fb7a420f8` |
| `lem-closed-form-and-size-bounds-for-the-dirichlet-kernel` | `dirichlet-kernel-localisation-and-pointwise-fourier-convergence` | gpt-5.6-terra | `28d3b65cf6068b110d33bed50b5cc0375372d2e63a9dcba84045f17048bf3102` |
| `lem-continuous-compactly-supported-functions-differentiate-by-ball-averages` | `the-maximal-function-and-lebesgue-differentiation` | gpt-5.6-terra | `a33675b8f8aa0ca16994468ab7e4400cf20e2ccf2a88aef86872058d08458ffd` |
| `lem-euclidean-balls-have-positive-finite-lebesgue-measure` | `the-maximal-function-and-lebesgue-differentiation` | gpt-5.6-terra | `74d23f9f313bab67ee48909df95e29773f27bcb4657147468c23a8a990b65737` |
| `lem-fourier-partial-sums-are-dirichlet-convolutions` | `dirichlet-kernel-localisation-and-pointwise-fourier-convergence` | gpt-5.6-terra | `91eb612a519506880bc4588b74b815f9e7e635db06d385b40f508b1af2069878` |
| `lem-probability-measure-basic-identities` | `probability-spaces-random-variables-and-expectation` | gpt-5.6-terra | `c97f7ea8689842c18f603468dd736a8b9464e2131d04ee54d00586f158c3ca51` |
| `lem-step-functions-on-one-period-are-dense-in-l-one-on-the-torus` | `dirichlet-kernel-localisation-and-pointwise-fourier-convergence` | gpt-5.6-terra | `db4f08e045480c448ac703fa9e926d49a9358b3e29a30a875772a501ad19f1a4` |
| `lem-variance-and-covariance-identities-for-random-variables` | `probability-spaces-random-variables-and-expectation` | gpt-5.6-terra | `0fdaa7506be58a54aa993e31b4f216c10293bfaa205f6f4e83a64c571f328efb` |
| `prop-ball-average-is-continuous-in-centre-and-radius` | `the-maximal-function-and-lebesgue-differentiation` | gpt-5.6-terra | `3a46b617537db13dd84abb937f64670182546623fbcfbef2c25eec3fd915c799` |
| `prop-centered-and-uncentered-maximal-functions-are-comparable` | `the-maximal-function-and-lebesgue-differentiation` | gpt-5.6-terra | `2b01f884460771cad25ebd5f41503c3900957b383506d40230eb06438755495e` |
| `prop-hardy-littlewood-maximal-function-is-l-infinity-bounded` | `the-maximal-function-and-lebesgue-differentiation` | gpt-5.6-terra | `ca6132eb63fe33dc1a31164e463b58ff5b5c5b2648c59124af41e3900ac590be` |
| `rem-general-inequalities-restrict-to-the-published-finite-ones` | `probability-spaces-random-variables-and-expectation` | gpt-5.6-terra | `551073c06266fcf904768a81db38350fda949efeeacf90f5b9f087e13a5841c4` |
| `thm-almost-every-point-is-a-lebesgue-point` | `the-maximal-function-and-lebesgue-differentiation` | gpt-5.6-terra | `d898e98aa2fdfd87b027acca5aa313af0226b6dde723217017728c8fde02a834` |
| `thm-change-of-variables-for-expectation` | `probability-spaces-random-variables-and-expectation` | gpt-5.6-terra | `dac4472de393ce7a7179b24b28071da66ac20eca5e6a5c72a6ef72913a59b90e` |
| `thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n` | `the-maximal-function-and-lebesgue-differentiation` | gpt-5.6-terra | `ff75764fe457217c71c47f041ad6e84f548ed38a2132d3d190a6f20252666a00` |
| `thm-dini-pointwise-convergence-criterion-for-fourier-series` | `dirichlet-kernel-localisation-and-pointwise-fourier-convergence` | gpt-5.6-terra | `1418ac0015ee8e5d5b97fd3a86ea23854a0fce9c55be189b717a245713f65049` |
| `thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces` | `probability-spaces-random-variables-and-expectation` | gpt-5.6-terra | `6d0d5a9b052b8be7a90053e9c21f8e0cf467c1a6d3664ea3205bd307f2c92b58` |
| `thm-hardy-littlewood-maximal-inequality-for-balls` | `the-maximal-function-and-lebesgue-differentiation` | gpt-5.6-terra | `8c5bb102503ebe39f3851ef7a37959f49978ba218cf017d67caf602f3d806421` |
| `thm-jensen-inequality-for-expectation` | `probability-spaces-random-variables-and-expectation` | gpt-5.6-terra | `bbf46db1863656757aea9d16de1aafae3bc5ad2bbb672219eb611a5b68f5e11a` |
| `thm-marcinkiewicz-interpolation-for-weak-one-one-and-strong-infinity` | `the-maximal-function-and-lebesgue-differentiation` | gpt-5.6-terra | `0f774df3087d90aa6e1331ad6763b5a362ede5b3aec2bf4061d7fdb49dfe4bdc` |
| `thm-probability-law-and-distribution-function-correspondence` | `probability-spaces-random-variables-and-expectation` | gpt-5.6-terra | `06d253e363abd38bd00695d5d326c5c72e4e63c26f723980846d01e4cf49caf6` |
| `thm-riemann-localisation-principle-for-fourier-series` | `dirichlet-kernel-localisation-and-pointwise-fourier-convergence` | gpt-5.6-terra | `4d5dda6ed1ced77e13eafc59166a0df829239cd50701b0163a17fb3d2cc57527` |
| `thm-riesz-thorin-interpolation` | `the-maximal-function-and-lebesgue-differentiation` | gpt-5.6-terra | `b397a9c915496443f6459b2e3581c2d57923fa0dfd6b73b61b3b6dd158308284` |
| `thm-vitali-covering-lemma-for-balls-with-fivefold-dilates` | `the-maximal-function-and-lebesgue-differentiation` | gpt-5.6-terra | `3388d34dd6a7b7a13afc32bed87e4f961252357e6bb76e272656923a0e40702f` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

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
