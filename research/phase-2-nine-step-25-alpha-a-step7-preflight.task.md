# Step 7 adjudication — group **a**, run `phase-2-nine-step-25`

You are the group Alpha for batches **1**, **3**, **4**: 6 A/B pair(s), 12 page(s), 127 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

`research/phase-2-nine-step-25-alpha-a-step7-context.json` is what a group Alpha for this group wrote during step 6,
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

**Audit and repair one item at a time. Inspect related items first only when necessary.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/phase-2-nine-step-25-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 1 | `measure-preserving-systems-and-mixing-criteria` | A | measure-theory | 288.0421 | `sigma-algebras-and-borel-sets`, `measures-and-their-basic-properties`, `outer-measure-and-the-caratheodory-extension-theorem`, `lebesgue-measure-on-euclidean-space`, `measurable-functions-and-simple-approximation`, `the-lebesgue-integral-and-the-convergence-theorems`, `the-lp-spaces-holder-minkowski-and-riesz-fischer`, `the-maximal-function-and-lebesgue-differentiation`, `complex-lp-spaces-and-test-function-conventions` |
| 1 | `measure-preserving-systems-and-mixing-criteria-examples` | B | measure-theory | 288.0422 | `measure-preserving-systems-and-mixing-criteria` |
| 1 | `complex-riesz-thorin-endpoint-interpolation` | A | measure-theory | 288.078121 | `the-identity-theorem-and-the-open-mapping-theorem`, `complex-lp-spaces-and-test-function-conventions` |
| 1 | `complex-riesz-thorin-endpoint-interpolation-examples` | B | measure-theory | 288.078122 | `complex-riesz-thorin-endpoint-interpolation` |
| 3 | `strong-laws-of-large-numbers` | A | probability | 288.107 | `probability-spaces-random-variables-and-expectation`, `independence-borel-cantelli-and-zero-one-laws`, `infinite-product-measures-and-kolmogorov-extension`, `modes-of-convergence-for-random-variables`, `weak-laws-and-series-of-independent-random-variables`, `the-lebesgue-integral-and-the-convergence-theorems`, `product-measures-and-the-fubini-tonelli-theorems`, `the-lp-spaces-holder-minkowski-and-riesz-fischer`, `measure-preserving-systems-and-mixing-criteria`, `further-trigonometric-identities-and-inverses` |
| 3 | `strong-laws-of-large-numbers-examples` | B | probability | 288.108 | `strong-laws-of-large-numbers` |
| 3 | `weak-convergence-tightness-and-representation` | A | probability | 288.109 | `probability-spaces-random-variables-and-expectation`, `infinite-product-measures-and-kolmogorov-extension`, `modes-of-convergence-for-random-variables`, `metric-spaces`, `compactness-in-metric-spaces`, `complete-metrizability-and-baire`, `radon-measures-and-the-riesz-markov-kakutani-theorem`, `strong-laws-of-large-numbers`, `improper-and-parameter-dependent-multiple-integrals`, `the-lebesgue-and-riemann-integrals-compared`, `the-lebesgue-integral-and-the-convergence-theorems` |
| 3 | `weak-convergence-tightness-and-representation-examples` | B | probability | 288.11 | `weak-convergence-tightness-and-representation` |
| 4 | `standard-borel-real-codings-and-determining-classes` | A | probability | 288.1101 | `infinite-product-measures-and-kolmogorov-extension`, `complete-metrizability-and-baire` |
| 4 | `standard-borel-real-codings-and-determining-classes-examples` | B | probability | 288.1102 | `standard-borel-real-codings-and-determining-classes` |
| 4 | `conditional-expectation` | A | probability | 288.115 | `probability-spaces-random-variables-and-expectation`, `modes-of-convergence-for-random-variables`, `measurable-functions-and-simple-approximation`, `the-lebesgue-integral-and-the-convergence-theorems`, `modes-of-convergence-egorov-and-lusin`, `the-radon-nikodym-theorem-and-lebesgue-decomposition`, `the-lp-spaces-holder-minkowski-and-riesz-fischer` |
| 4 | `conditional-expectation-examples` | B | probability | 288.116 | `conditional-expectation` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `measure-preserving-systems-and-mixing-criteria` — Measure-Preserving Systems and Mixing Criteria (18 item(s))

- `def-measure-preserving-transformation-and-system` · definition — Measure-preserving transformations and systems
- `def-invertible-measure-preserving-system` · definition — Invertible measure-preserving systems
- `thm-measure-preservation-on-a-generating-pi-system` · theorem — Measure preservation can be checked on a generating pi-system
- `prop-measure-preserving-compositions-iterates-and-completions` · proposition — Compositions, iterates and completions preserve invariance
- `thm-integrals-are-invariant-under-measure-preserving-maps` · theorem — Integral invariance under measure-preserving maps
- `def-koopman-operator-on-l-p` · definition — The Koopman operator
- `thm-koopman-operator-is-a-linear-isometry-on-l-p` · theorem — Koopman operators are linear isometries
- `def-strict-and-mod-null-invariant-sigma-algebras` · definition — Strict and mod-null invariant sigma-algebras
- `prop-invariant-families-are-sigma-algebras` · proposition — Both invariant families are sigma-algebras
- `lem-mod-null-invariant-sets-have-strictly-invariant-representatives` · lemma — Mod-null invariant sets have strict representatives
- `def-ergodic-measure-preserving-system` · definition — Ergodicity relative to an invariant measure
- `thm-ergodicity-and-invariant-functions` · theorem — Equivalent invariant-set and invariant-function criteria for ergodicity
- `prop-ergodic-positive-sets-sweep-out-almost-every-point` · proposition — Positive sets sweep out ergodic probability systems
- `def-strong-and-weak-mixing` · definition — Strong and weak mixing on a probability space
- `thm-mixing-implies-weak-mixing-implies-ergodicity` · theorem — Mixing implies weak mixing, which implies ergodicity
- `lem-finite-measure-sets-are-approximable-by-a-generating-algebra` · lemma — Approximation in symmetric difference by a generating algebra
- `thm-mixing-is-checkable-on-a-generating-pi-system` · theorem — Mixing is checkable on a generating pi-system
- `prop-mixing-correlations-extend-to-l-two` · proposition — Mixing correlations extend to L2 functions

### `measure-preserving-systems-and-mixing-criteria-examples` — Measure-Preserving Systems and Mixing Criteria — Examples (3 item(s))

- `ex-two-point-preserving-permutation` · example — A preserving permutation on two equal atoms
- `cex-identity-on-two-points-is-not-ergodic` · counterexample — A preserving identity need not be ergodic
- `ex-koopman-on-a-finite-probability-space` · example — The Koopman matrix for a two-point swap

### `complex-riesz-thorin-endpoint-interpolation` — Complex Riesz–Thorin Endpoint Interpolation (4 item(s))

- `lem-endpoint-interpolation-simple-analytic-families` · lemma — Finite simple analytic families and their exact endpoint norms
- `lem-riesz-thorin-bound-on-the-finite-simple-core` · lemma — Riesz–Thorin estimate on the finite simple core
- `cor-complex-interpolation-extensions-agree-on-intersections` · corollary — Compatible extensions from the finite simple core
- `cor-l-one-l-infinity-and-l-two-bounds-interpolate-to-l-p-l-p-prime` · corollary — Interpolate L1 to Linfinity and L2 to L2 bounds

### `complex-riesz-thorin-endpoint-interpolation-examples` — Complex Riesz–Thorin Endpoint Interpolation: Examples (4 item(s))

- `ex-endpoint-interpolation-for-a-finite-matrix` · example — Interpolation for the two-by-two Hadamard matrix
- `ex-hausdorff-young-endpoint-exponent-arithmetic` · example — The Hausdorff–Young exponent arithmetic
- `cex-finite-target-interpolation-does-not-state-an-infinite-endpoint` · counterexample — Finite target bounds do not supply an infinite target bound
- `ex-interpolation-of-an-integral-averaging-operator` · example — Interpolation of an averaging operator on a probability space

### `strong-laws-of-large-numbers` — Strong Laws of Large Numbers (16 item(s))

- `def-strong-law-of-large-numbers-for-a-sequence` · definition — Strong law of large numbers for a sequence
- `cor-kolmogorov-strong-law-for-independent-uniformly-bounded-variances` · corollary — Kolmogorov strong law for independent uniformly bounded variances
- `cor-iid-finite-variance-strong-law` · corollary — Iid finite variance strong law
- `lem-tail-sum-integrability-equivalence` · lemma — Tail sum integrability equivalence
- `lem-iid-linear-truncation-occurs-only-finitely-often` · lemma — Iid linear truncation occurs only finitely often
- `lem-summability-of-truncated-normalized-variances` · lemma — Summability of truncated normalized variances
- `lem-cesaro-limit-of-truncated-means` · lemma — Cesaro limit of truncated means
- `thm-kolmogorov-iid-l1-strong-law` · theorem — Kolmogorov iid l1 strong law
- `thm-integrability-is-necessary-for-an-iid-finite-mean-strong-law` · theorem — Integrability is necessary for an iid finite mean strong law
- `thm-etemadi-strong-law-for-pairwise-independent-iid-variables` · theorem — Etemadi strong law for pairwise independent iid variables
- `cor-iid-strong-law-implies-the-weak-law` · corollary — Iid strong law implies the weak law
- `lem-finite-probability-maximal-ergodic-inequality` · lemma — The maximal ergodic inequality on a probability space
- `thm-birkhoff-ergodic-probability-case-for-strong-laws` · theorem — Birkhoff's theorem for an ergodic probability system
- `cor-birkhoff-strong-law-for-iid-coordinate-shifts` · corollary — Birkhoff strong law for iid coordinate shifts
- `rem-strong-law-does-not-assert-a-rate` · remark — Strong law does not assert a rate
- `thm-finite-variance-logarithmic-rate-for-iid-sums` · theorem — Finite variance logarithmic rate for iid sums

### `strong-laws-of-large-numbers-examples` — Strong Laws of Large Numbers — Examples (7 item(s))

- `ex-almost-sure-frequency-of-heads` · example — Almost sure frequency of heads
- `ex-strong-law-for-empirical-indicator-averages` · example — Strong law for empirical indicator averages
- `ex-strong-law-estimator-of-an-integrable-mean` · example — Strong law estimator of an integrable mean
- `ex-nonidentical-strong-law-under-summable-normalized-variances` · example — Nonidentical strong law under summable normalized variances
- `cex-weak-law-does-not-imply-strong-law` · counterexample — Weak law does not imply strong law
- `cex-iid-strong-law-fails-at-infinite-absolute-mean` · counterexample — Iid strong law fails at infinite absolute mean
- `cex-identical-distribution-without-independence-can-defeat-the-mean-law` · counterexample — Identical distribution without independence can defeat the mean law

### `weak-convergence-tightness-and-representation` — Weak Convergence Tightness and Representation (27 item(s))

- `def-borel-probability-law-on-a-polish-space` · definition — Borel probability law on a polish space
- `def-weak-convergence-of-borel-probability-measures` · definition — Weak convergence of borel probability measures
- `def-convergence-in-distribution-of-random-elements` · definition — Convergence in distribution of random elements
- `thm-portmanteau-theorem` · theorem — Portmanteau theorem
- `lem-real-cdf-and-bounded-continuous-definitions-agree` · lemma — Real cdf and bounded continuous definitions agree
- `cor-weak-limits-are-unique` · corollary — Weak limits are unique
- `thm-continuous-mapping-theorem` · theorem — Continuous mapping theorem
- `thm-converging-together-lemma` · theorem — Converging together lemma
- `def-tight-family-of-probability-measures` · definition — Tight family of probability measures
- `def-relative-sequential-compactness-for-weak-convergence` · definition — Relative sequential compactness for weak convergence
- `thm-every-borel-probability-on-a-polish-space-is-tight` · theorem — Every borel probability on a polish space is tight
- `lem-countable-uniformly-dense-tests-on-a-compact-metric-space` · lemma — Countable uniformly dense tests on a compact metric space
- `lem-probability-laws-on-a-compact-metric-space-have-weakly-convergent-subsequences` · lemma — Probability laws on a compact metric space have weakly convergent subsequences
- `thm-prokhorov-tightness-theorem-on-polish-spaces` · theorem — Prokhorov tightness theorem on polish spaces
- `cor-weakly-convergent-sequences-are-tight` · corollary — Weakly convergent sequences are tight
- `cor-tightness-extracts-a-weakly-convergent-subsequence` · corollary — Tightness extracts a weakly convergent subsequence
- `def-levy-prokhorov-metric` · definition — Levy prokhorov metric
- `lem-levy-prokhorov-distance-is-a-metric` · lemma — Levy prokhorov distance is a metric
- `lem-countable-boundary-null-partitions-of-a-separable-metric-space` · lemma — Countable boundary null partitions of a separable metric space
- `thm-levy-prokhorov-metric-metrizes-weak-convergence` · theorem — Levy prokhorov metric metrizes weak convergence
- `lem-interval-realization-from-refining-small-diameter-partitions` · lemma — Interval realization from refining small diameter partitions
- `thm-skorokhod-representation-on-polish-spaces` · theorem — Skorokhod representation on polish spaces
- `rem-skorokhod-representation-does-not-couple-the-original-variables` · remark — Skorokhod representation does not couple the original variables
- `lem-countable-compactly-supported-tests-determine-euclidean-weak-convergence` · lemma — Countable compactly supported tests determine euclidean weak convergence
- `thm-empirical-measures-of-iid-euclidean-samples-converge-weakly` · theorem — Empirical measures of iid euclidean samples converge weakly
- `lem-normal-density-has-total-mass-one` · lemma — The standard normal density has total mass one
- `def-standard-normal-and-normal-laws` · definition — Standard normal and normal laws

### `weak-convergence-tightness-and-representation-examples` — Weak Convergence Tightness and Representation — Examples (10 item(s))

- `ex-dirac-laws-converge-weakly-exactly-when-their-points-converge` · example — Dirac laws converge weakly exactly when their points converge
- `ex-uniform-laws-on-expanding-finite-grids-converge-to-uniform-zero-one` · example — Uniform laws on expanding finite grids converge to uniform zero one
- `ex-tightness-from-a-uniform-moment-bound` · example — Tightness from a uniform moment bound
- `ex-weak-convergence-of-gaussian-laws-by-parameters` · example — Weak convergence of gaussian laws by parameters
- `ex-quantile-coupling-on-the-real-line` · example — Quantile coupling on the real line
- `cex-pointwise-cdf-convergence-at-a-jump-is-not-required` · counterexample — Pointwise cdf convergence at a jump is not required
- `cex-bounded-continuous-cannot-be-replaced-by-all-bounded-measurable-functions` · counterexample — Bounded continuous cannot be replaced by all bounded measurable functions
- `cex-a-nontight-sequence-with-no-probability-law-subsequence-limit` · counterexample — A nontight sequence with no probability law subsequence limit
- `cex-boundedness-of-first-moments-alone-does-not-give-uniform-integrability` · counterexample — Boundedness of first moments alone does not give uniform integrability
- `ex-empirical-laws-of-a-finite-valued-iid-sample` · example — Empirical laws of a finite valued iid sample

### `standard-borel-real-codings-and-determining-classes` — Standard-Borel Real Codings and Determining Classes (4 item(s))

- `lem-hilbert-cube-has-a-bimeasurable-real-coding` · lemma — Hilbert cube has a bimeasurable real coding
- `thm-standard-borel-spaces-admit-bimeasurable-real-codings` · theorem — Standard borel spaces admit bimeasurable real codings
- `cor-standard-borel-spaces-have-countable-generating-and-measure-determining-algebras` · corollary — Standard borel spaces have countable generating and measure determining algebras
- `lem-borel-subspaces-admit-polish-presentations` · lemma — Borel subspaces admit polish presentations

### `standard-borel-real-codings-and-determining-classes-examples` — Standard-Borel Real Codings and Determining Classes: Examples (3 item(s))

- `ex-countable-discrete-spaces-are-standard-borel` · example — Countable discrete spaces are standard borel
- `ex-euclidean-borel-spaces-are-standard-borel` · example — Euclidean borel spaces are standard borel
- `ex-borel-subspaces-of-polish-spaces-are-standard-borel` · example — Borel subspaces of polish spaces are standard borel

### `conditional-expectation` — Conditional Expectation (22 item(s))

- `def-conditional-expectation-given-a-sigma-algebra` · definition — Conditional expectation given a sigma algebra
- `thm-conditional-expectation-exists-by-radon-nikodym` · theorem — Conditional expectation exists by radon nikodym
- `lem-conditional-expectation-is-unique-almost-surely` · lemma — Conditional expectation is unique almost surely
- `def-conditional-expectation-as-an-ae-class` · definition — Conditional expectation as an ae class
- `thm-basic-algebra-and-order-properties-of-conditional-expectation` · theorem — Basic algebra and order properties of conditional expectation
- `thm-taking-out-what-is-known` · theorem — Taking out what is known
- `thm-tower-property-of-conditional-expectation` · theorem — Tower property of conditional expectation
- `lem-conditioning-a-known-variable-and-an-independent-variable` · lemma — Conditioning a known variable and an independent variable
- `def-conditional-expectation-for-nonnegative-variables` · definition — Conditional expectation for nonnegative variables
- `thm-conditional-monotone-convergence` · theorem — Conditional monotone convergence
- `thm-conditional-fatou-and-dominated-convergence` · theorem — Conditional fatou and dominated convergence
- `lem-convex-functions-have-countable-supporting-line-representations` · lemma — Convex functions have countable supporting line representations
- `thm-conditional-jensen-inequality` · theorem — Conditional jensen inequality
- `lem-absolute-real-powers-are-convex` · lemma — Absolute real powers are Borel measurable and convex
- `cor-conditional-lp-contraction` · corollary — Conditional lp contraction
- `thm-conditional-expectation-is-the-l2-orthogonal-projection` · theorem — Conditional expectation is the l2 orthogonal projection
- `def-conditional-variance` · definition — Conditional variance
- `lem-conditional-variance-is-well-defined-and-has-the-second-moment-formula` · lemma — Conditional variance is well-defined and has the second-moment formula
- `cor-conditional-variance-decomposition` · corollary — Conditional variance decomposition
- `thm-uniform-integrability-of-conditional-expectations-of-one-variable` · theorem — Uniform integrability of conditional expectations of one variable
- `rem-conditional-expectation-is-a-class-not-a-canonical-pointwise-function` · remark — Conditional expectation is a class not a canonical pointwise function
- `cor-conditional-cauchy-schwarz-inequality` · corollary — Conditional cauchy schwarz inequality

### `conditional-expectation-examples` — Conditional Expectation — Examples (9 item(s))

- `ex-conditioning-on-a-finite-partition` · example — Conditioning on a finite partition
- `ex-conditioning-on-trivial-and-full-sigma-algebras` · example — Conditioning on trivial and full sigma algebras
- `ex-conditioning-an-independent-sum-on-one-summand` · example — Conditioning an independent sum on one summand
- `ex-conditional-expectation-given-a-discrete-random-variable` · example — Conditional expectation given a discrete random variable
- `ex-l2-best-prediction-by-conditional-expectation` · example — L2 best prediction by conditional expectation
- `ex-law-of-total-variance` · example — Law of total variance
- `cex-a-version-can-fail-a-pointwise-identity-on-a-null-set` · counterexample — A version can fail a pointwise identity on a null set
- `cex-conditioning-does-not-preserve-strict-inequalities` · counterexample — Conditioning does not preserve strict inequalities
- `cex-taking-out-an-unbounded-factor-needs-integrability` · counterexample — Taking out an unbounded factor needs integrability

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-6 reader warnings

None. No Step-6 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/phase-2-nine-step-25-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 7 — targeted repair-integrity review, `phase-2-nine-step-25`

The generated repair envelope is authoritative. It supplies unresolved
diagnostics, exact live ids and rejection tuples, and each id's
run or published scope. Work only on `assigned_items`, using the live tuples
and retained fatal repair licences as evidence. Rerun focused checks where supported.

Inspect only the named finding and the item/dependency text needed to resolve it.
Do not repeat whole-group reading, settled adjudication, or upheld boundary
reviews. Cited suppliers are context, not additional repair targets. Original
reports are retained in `full_evidence`; open only relevant sections if needed.

Resolve every assigned finding in this pass, keeping the existing mathematics
and detail except where an exact fatal licence requires correction. A serial
reviewer must establish ownership before editing an ambiguous record. If the
detector or repair authority is wrong, report the cause; unchanged retries stop.

Complete a repair already licensed by an exact `confirmed_fatal` adjudication,
including the envelope's `fatal_repair_licences`. These bind validated original
rejections to the pre-Step-7 baseline even after a repair makes their verdicts
stale. Empty `live_tuples` does not revoke these licences. Use them only to
complete the assigned repair; do not readjudicate settled findings.
You may also correct a documentary contract, manifest, impact or verification
record to match the current proof. A licensed fatal repair may add fully proved
missing-dependency lemmas under the Step-7 adjudication instructions, including
their page, manifest, contract, and scope registrations. Do not otherwise
broaden scope, edit a nonfatal or false-positive item, run a judge sweep, or run
a workflow transition.

Preserve append-only ledgers and return the gate, ids, licensing rows, changed
files, targeted checks, and blocker. This task applies before `7-rejudge`; a
frozen-cutover dispatch uses the Step-7 close task instead.
