# Step 8 adjudication — group **a**, run `frontier-33`

You are the group Alpha for batches **1**, **3**, **4**: 3 A/B pair(s), 6 page(s), 96 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-33-alpha-a-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
in `research/frontier-33-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 1 | `hausdorff-measure-and-hausdorff-dimension` | A | measure-theory | 288.041 | `radon-measures-and-the-riesz-markov-kakutani-theorem-examples` |
| 1 | `hausdorff-measure-and-hausdorff-dimension-examples` | B | measure-theory | 288.042 | `hausdorff-measure-and-hausdorff-dimension` |
| 3 | `weak-laws-and-series-of-independent-random-variables` | A | probability | 288.105 | `modes-of-convergence-for-random-variables-examples` |
| 3 | `weak-laws-and-series-of-independent-random-variables-examples` | B | probability | 288.106 | `weak-laws-and-series-of-independent-random-variables` |
| 4 | `divergence-and-almost-everywhere-convergence-of-fourier-series` | A | fourier-analysis | 288.14018 | `lacunary-fourier-series-and-sidon-sets-examples` |
| 4 | `divergence-and-almost-everywhere-convergence-of-fourier-series-examples` | B | fourier-analysis | 288.1402 | `divergence-and-almost-everywhere-convergence-of-fourier-series` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `hausdorff-measure-and-hausdorff-dimension` — Hausdorff Measure and Hausdorff Dimension (31 item(s))

- `def-extended-diameter-for-hausdorff-covers` · definition — Extended diameter for Hausdorff covers
- `def-hausdorff-content-at-scale-delta` · definition — Hausdorff content at a prescribed scale
- `lem-hausdorff-scale-monotonicity-and-limit` · lemma — The small-scale Hausdorff limit exists
- `def-hausdorff-measure` · definition — Unnormalised Hausdorff measure
- `thm-hausdorff-measure-is-an-outer-measure` · theorem — Hausdorff measure is an outer measure
- `thm-hausdorff-measure-is-metric-and-borel-measurable` · theorem — Hausdorff measure is metric and measures every Borel set
- `prop-zero-dimensional-hausdorff-measure-counts` · proposition — Zero-dimensional Hausdorff measure is counting measure
- `thm-hausdorff-measure-has-borel-hulls` · theorem — Hausdorff measure is Borel regular
- `prop-finite-hausdorff-measurable-sets-have-borel-cores` · proposition — Borel cores of sigma-finite Hausdorff measurable sets
- `prop-hausdorff-content-and-measure-have-the-same-null-sets` · proposition — Content and measure have the same null sets
- `thm-hausdorff-measure-under-lipschitz-maps` · theorem — Lipschitz maps control Hausdorff measure
- `cor-hausdorff-measure-under-similarities` · corollary — Similarities scale Hausdorff measure exactly
- `lem-hausdorff-exponent-comparison` · lemma — Increasing the exponent past finite measure gives zero
- `def-hausdorff-dimension` · definition — Hausdorff dimension
- `thm-hausdorff-dimension-critical-exponent` · theorem — Hausdorff dimension is the unique critical exponent
- `thm-hausdorff-dimension-is-countably-stable` · theorem — Hausdorff dimension is monotone and countably stable
- `cor-lipschitz-maps-do-not-increase-hausdorff-dimension` · corollary — Lipschitz monotonicity and bi-Lipschitz invariance of dimension
- `lem-euclidean-cube-bounds-for-hausdorff-measure` · lemma — Elementary lower and upper bounds on a unit cube
- `thm-hausdorff-one-measure-is-lebesgue-outer-measure-on-the-line` · theorem — One-dimensional Hausdorff measure on the line is Lebesgue outer measure
- `thm-hausdorff-n-measure-is-proportional-to-lebesgue-measure` · theorem — Euclidean Hausdorff measure is proportional to Lebesgue measure
- `cor-euclidean-hausdorff-dimension` · corollary — Euclidean space and positive-volume sets have their Euclidean dimension
- `thm-hausdorff-mass-distribution-principle` · theorem — The mass distribution principle
- `lem-cantor-cylinder-masses` · lemma — Cantor basic intervals have their expected masses
- `lem-sharp-cantor-interval-mass-bound` · lemma — The sharp interval bound for Cantor measure
- `thm-cantor-set-hausdorff-dimension-and-exact-measure` · theorem — The Cantor set has dimension log 2 / log 3 and critical measure one
- `def-binary-digit-restriction-set` · definition — Sets defined by permitted binary digit positions
- `prop-binary-digit-restriction-hausdorff-dimension` · proposition — Digit-position density determines Hausdorff dimension
- `rem-critical-hausdorff-measure-can-be-zero-finite-or-infinite` · remark — Dimension leaves the critical measure undetermined
- `rem-hausdorff-cover-conventions-and-normalisation` · remark — Content, spherical covers, and normalisation
- `rem-hypersurface-chart-measure-and-hausdorff-measure-agreement` · remark — Chart surface measure and Hausdorff measure: a boundary of scope
- `rem-hausdorff-dimension-orients-the-weierstrass-graph` · remark — Orientation for the published Weierstrass graph remark

### `hausdorff-measure-and-hausdorff-dimension-examples` — Hausdorff Measure and Hausdorff Dimension — Examples (15 item(s))

- `ex-cantor-critical-measure-computed` · example — The ordinary Cantor set at its critical exponent
- `ex-fat-cantor-hausdorff-measure-and-dimension` · example — The fat Cantor set has positive length and dimension one
- `ex-line-segment-hausdorff-length` · example — A planar segment has Hausdorff measure equal to length
- `ex-lipschitz-graph-has-finite-hausdorff-length` · example — A Lipschitz graph has finite Hausdorff length
- `ex-countable-dense-set-has-zero-hausdorff-dimension` · example — The rationals are dense but have dimension zero
- `ex-sierpinski-gasket-dimension-by-hand` · example — A Sierpinski gasket computed by hand
- `cex-dimension-one-binary-digit-set-with-zero-length` · counterexample — A dimension-one set can have zero length
- `cex-uncountable-zero-dimensional-binary-digit-set` · counterexample — An uncountable compact set can have dimension zero
- `cex-continuous-cantor-image-raises-hausdorff-dimension` · counterexample — A continuous image can raise Hausdorff dimension
- `fs-hausdorff-measure-is-countably-additive-on-all-subsets` · false-statement — Hausdorff measure is countably additive on every subset
- `fs-hausdorff-dimension-of-union-is-the-sum` · false-statement — Dimensions add under unions
- `fs-critical-hausdorff-measure-is-always-finite-positive` · false-statement — Critical Hausdorff measure is always finite and positive
- `fs-continuous-injections-preserve-hausdorff-dimension` · false-statement — Continuous injections preserve Hausdorff dimension
- `fs-zero-hausdorff-dimension-implies-countability` · false-statement — Dimension zero forces countability
- `fs-vanishing-positive-hausdorff-measures-implies-countability` · false-statement — Vanishing at all positive exponents forces countability

### `weak-laws-and-series-of-independent-random-variables` — Weak Laws and Series of Independent Random Variables (27 item(s))

- `def-identically-distributed-and-iid-random-variables` · definition — Identical distribution and IID families
- `def-partial-sums-and-sample-means` · definition — Partial sums, row sums and sample means
- `thm-chebyshev-weak-law-for-uncorrelated-arrays` · theorem — Chebyshev weak law for uncorrelated arrays
- `cor-iid-finite-variance-weak-law` · corollary — IID finite-variance weak law
- `def-truncation-at-a-fixed-level` · definition — Zero truncation at a positive level
- `thm-khinchin-weak-law-for-iid-integrable-variables` · theorem — Khinchin weak law for integrable IID variables
- `def-almost-sure-convergence-of-a-random-series` · definition — Almost-sure convergence of a random series
- `thm-kolmogorov-maximal-inequality` · theorem — Kolmogorov maximal inequality
- `thm-kolmogorov-convergence-criterion` · theorem — Kolmogorov convergence criterion
- `cor-kolmogorov-two-series-sufficiency` · corollary — Kolmogorov two-series sufficiency
- `def-symmetric-real-random-variable` · definition — Symmetric real random variables
- `lem-symmetrization-for-independent-random-series` · lemma — Independent-copy symmetrization of random series
- `lem-bounded-centered-convergent-series-have-summable-variances` · lemma — Bounded centered convergent series have summable variances
- `lem-three-series-necessity-for-truncated-means-and-variances` · lemma — Necessity of the truncated mean and variance conditions
- `thm-kolmogorov-three-series-theorem` · theorem — Kolmogorov three-series theorem
- `lem-kronecker-summation-lemma` · lemma — Kronecker summation lemma
- `thm-kolmogorov-strong-law-under-summable-normalized-variances` · theorem — Strong law under summable normalized variances
- `cor-independent-nonidentical-finite-variance-strong-law` · corollary — Strong law for independent nonidentical variables
- `lem-one-sided-maximal-inequality-for-symmetric-independent-sums` · lemma — One-sided maximal inequality for symmetric independent sums
- `lem-independent-copy-symmetrization-tail-bounds` · lemma — Tail comparisons under independent-copy symmetrization
- `thm-truncation-weak-law-for-independent-arrays` · theorem — Truncation weak law for independent arrays
- `lem-vanishing-tail-control-implies-small-truncated-second-moment` · lemma — Vanishing tail control bounds truncated second moments
- `lem-largest-summand-bound-for-symmetric-independent-variables` · lemma — Largest-summand bound for independent symmetric variables
- `thm-truncated-centering-criterion-for-an-iid-weak-law` · theorem — Exact tail criterion for a truncated-centered IID weak law
- `lem-levy-maximal-inequality-for-independent-tail-sums` · lemma — Levy maximal bound from uniform tail bounds
- `lem-cauchy-in-probability-sequences-have-a-measurable-limit` · lemma — Cauchy sequences in probability have a measurable limit
- `thm-independent-series-probability-and-almost-sure-convergence-agree` · theorem — Convergence in probability and almost surely agree for independent series

### `weak-laws-and-series-of-independent-random-variables-examples` — Weak Laws and Series of Independent Random Variables — Examples (9 item(s))

- `ex-weak-law-for-bernoulli-sample-means` · example — Bernoulli sample frequencies
- `ex-weak-law-for-independent-nonidentical-variables` · example — A nonidentical Bernoulli weak law
- `ex-rademacher-series-convergence-threshold` · example — Rademacher-series threshold
- `ex-a-random-series-that-converges-conditionally-almost-surely` · example — Almost-sure conditional convergence
- `ex-three-series-with-rare-large-jumps` · example — The three series impose separate conditions
- `cex-weak-law-can-fail-without-tail-control` · counterexample — A macroscopic row term defeats averaging
- `cex-sum-of-variances-condition-is-sufficient-not-necessary-without-further-hypotheses` · counterexample — Summable untruncated variances are not necessary
- `cex-iid-cauchy-averages-have-no-deterministic-weak-centering` · counterexample — Cauchy averages admit no deterministic weak centering
- `ex-truncated-centering-weak-law-with-infinite-mean` · example — An infinite-mean law requiring diverging centering

### `divergence-and-almost-everywhere-convergence-of-fourier-series` — Divergence and Almost Everywhere Convergence of Fourier Series (10 item(s))

- `def-carleson-maximal-partial-sum-operator` · definition — Carleson maximal partial-sum operator
- `lem-fourier-partial-sum-operator-norm-equals-the-lebesgue-constant` · lemma — Fourier partial-sum operator norm equals the Lebesgue constant
- `cex-continuous-function-with-divergent-fourier-series-at-a-point` · counterexample — A continuous function with divergent Fourier series at a prescribed point
- `lem-fourier-maximal-weak-bound-closes-almost-everywhere-convergence` · lemma — A weak maximal bound implies almost-everywhere Fourier convergence
- `rem-kolmogorov-block-polynomials-have-large-partial-sum-maxima` · remark — Kolmogorov polynomial blocks — recorded construction lemma
- `rem-kolmogorov-lone-fourier-series-diverges-almost-everywhere` · remark — Kolmogorov almost-everywhere divergence — recorded theorem
- `rem-carleson-hunt-almost-everywhere-convergence` · remark — Carleson–Hunt maximal bound and almost-everywhere convergence — recorded theorem
- `cor-lp-fourier-series-converges-almost-everywhere-for-p-greater-than-one` · corollary — Almost-everywhere convergence from the Carleson–Hunt estimate
- `rem-proof-cost-of-the-carleson-hunt-theorem` · remark — What the Carleson–Hunt proof requires
- `rem-the-lone-endpoint-is-excluded-from-carleson-hunt` · remark — The L1 endpoint is excluded

### `divergence-and-almost-everywhere-convergence-of-fourier-series-examples` — Divergence and Almost Everywhere Convergence of Fourier Series — Examples (4 item(s))

- `ex-fourier-partial-sum-operators-and-uniform-boundedness` · example — A residual set of continuous functions has unbounded partial sums at zero
- `cex-continuous-fourier-series-need-not-converge-everywhere` · counterexample — Uniform Fejer convergence can coexist with divergent ordinary partial sums
- `rem-lone-fourier-series-can-diverge-almost-everywhere` · remark — Reading the Kolmogorov example at the endpoint
- `cex-carleson-maximal-operator-is-not-strong-type-one-one` · counterexample — The Carleson maximal operator is not strong type (1,1)

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-7 reader warnings

None. No Step-7 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-33-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — targeted repair-integrity review, `frontier-33`

The generated repair envelope above is authoritative. It supplies every failed
gate with full output, the exact live ids and rejection tuples, and each id's
run or published scope. Work only on `assigned_items`, using the live tuples
and retained fatal repair licences as evidence. Rerun focused checks where supported.

Resolve every assigned finding in this pass, keeping the existing mathematics
and detail except where an exact fatal licence requires correction. A serial
reviewer must establish ownership before editing an ambiguous record. If the
detector or repair authority is wrong, report the cause; unchanged retries stop.

Complete a repair already licensed by an exact `confirmed_fatal` adjudication,
including the envelope's `fatal_repair_licences`. These bind validated original
rejections to the pre-Step-8 baseline even after a repair makes their verdicts
stale. Empty `live_tuples` does not revoke these licences. Use them only to
complete the assigned repair; do not readjudicate settled findings.
You may also correct a documentary contract, manifest, impact or verification
record to match the current proof. A licensed fatal repair may add fully proved
missing-dependency lemmas under the Step-8 adjudication instructions, including
their page, manifest, contract, and scope registrations. Do not otherwise
broaden scope, edit a nonfatal or false-positive item, run a judge sweep, or run
a workflow transition.

Preserve append-only ledgers and return the gate, ids, licensing rows, changed
files, targeted checks, and blocker. This task applies before `8-rejudge`; a
frozen-cutover dispatch uses the Step-8 close task instead.
