# Step 8 adjudication — group **c**, run `frontier-29`

You are the group Alpha for batches **4**, **6**, **7**: 3 A/B pair(s), 6 page(s), 94 item(s), 0 open rejection(s) over 0 item(s).

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

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-29-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — targeted repair-integrity review, `frontier-29`

The generated repair envelope above is authoritative. It supplies every failed
gate with full output, the exact live ids and rejection tuples, and each id's
run or published scope. Take only its `assigned_items` and `live_tuples`; rerun
the focused gate where it supports item scope.

Complete a repair already licensed by an exact `confirmed_fatal` adjudication,
or correct a documentary contract/manifest/impact/verification record that must
match the current proof. Do not edit a nonfatal or false-positive item, broaden
the scope, run a judge sweep, or run a workflow transition.

Preserve append-only ledgers and return the gate, ids, licensing rows, changed
files, targeted checks, and blocker. This task applies before `8-rejudge`; a
frozen-cutover dispatch uses the Step-8 close task instead.
