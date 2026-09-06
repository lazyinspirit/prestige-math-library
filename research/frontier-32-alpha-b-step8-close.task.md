# Step 8 adjudication — group **b**, run `frontier-32`

You are the group Alpha for batches **3**, **5**, **6**: 3 A/B pair(s), 6 page(s), 88 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-32-alpha-b-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
in `research/frontier-32-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 3 | `radon-measures-and-the-riesz-markov-kakutani-theorem` | A | measure-theory | 288.039 | `absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus-examples`, `partitions-of-unity-and-paracompactness` |
| 3 | `radon-measures-and-the-riesz-markov-kakutani-theorem-examples` | B | measure-theory | 288.04 | `radon-measures-and-the-riesz-markov-kakutani-theorem` |
| 5 | `modes-of-convergence-for-random-variables` | A | probability | 288.103 | `infinite-product-measures-and-kolmogorov-extension-examples` |
| 5 | `modes-of-convergence-for-random-variables-examples` | B | probability | 288.104 | `modes-of-convergence-for-random-variables` |
| 6 | `lacunary-fourier-series-and-sidon-sets` | A | fourier-analysis | 288.14014 | `absolute-convergence-and-the-wiener-algebra-examples` |
| 6 | `lacunary-fourier-series-and-sidon-sets-examples` | B | fourier-analysis | 288.14016 | `lacunary-fourier-series-and-sidon-sets` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `radon-measures-and-the-riesz-markov-kakutani-theorem` — Radon Measures and the Riesz Markov Kakutani Theorem (36 item(s))

- `def-compact-support-c-c-and-c-zero-on-an-lch-space` · definition — Compact support, C_c(X), and C_0(X) on a locally compact Hausdorff space
- `def-cutoff-relation-f-prec-u` · definition — The compactly supported cutoff relation f prec U
- `def-positive-linear-functional-on-c-c` · definition — Positive linear functionals on C_c(X)
- `def-radon-measure-on-an-lch-space` · definition — Radon measure on a locally compact Hausdorff space
- `def-regular-borel-measure-on-an-lch-space` · definition — Regular Borel measure on a locally compact Hausdorff space
- `def-regular-complex-borel-measure-on-an-lch-space` · definition — Regular complex Borel measures
- `lem-positive-linear-functionals-on-c-c-are-monotone` · lemma — A positive linear functional on C_c(X) is monotone
- `lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set` · lemma — LCH Urysohn cutoff for a compact set inside an open set
- `lem-finite-lch-partition-of-unity-near-a-compact-set` · lemma — A finite compactly supported partition of unity near a compact set
- `lem-rmk-functional-outer-content-is-well-defined` · lemma — The RMK functional outer content is well defined
- `thm-rmk-functional-outer-content-is-an-outer-measure` · theorem — The RMK functional outer content is an outer measure
- `thm-rmk-open-sets-are-caratheodory-measurable` · theorem — Open sets are Caratheodory measurable for the RMK outer measure
- `lem-rmk-compact-set-formula-and-local-finiteness` · lemma — Compact-set formula and local finiteness of the RMK measure
- `thm-rmk-representing-measure-is-inner-regular-on-open-sets` · theorem — The RMK representing measure is inner regular on open sets
- `thm-rmk-positive-functional-is-integration-against-its-representing-measure` · theorem — Positive functionals on C_c(X) are integration against a Radon measure
- `thm-rmk-uniqueness-among-radon-measures` · theorem — Uniqueness of the RMK representing measure among Radon measures
- `thm-locally-finite-borel-measures-are-regular-when-open-sets-are-sigma-compact` · theorem — Sigma-compact open sets make locally finite Borel measures regular
- `cor-second-countable-lch-locally-finite-borel-measures-are-regular` · corollary — Locally finite Borel measures on second-countable LCH spaces are regular
- `thm-lebesgue-measure-is-a-radon-measure-on-rn` · theorem — Lebesgue measure is a Radon measure on R^n
- `prop-lebesgue-stieltjes-and-lch-radon-conventions-agree-on-r` · proposition — Lebesgue--Stieltjes regularity agrees with the LCH Radon convention on R
- `thm-lusin-theorem-for-radon-measures` · theorem — Lusin's theorem for a Radon measure
- `thm-c-c-is-dense-in-l-p-for-radon-measures` · theorem — C_c(X) is dense in L^p(mu) for a Radon measure
- `lem-positive-c-zero-functionals-have-finite-regular-representing-measures` · lemma — Positive C_0(X) functionals have finite regular representing measures
- `lem-bounded-real-c-zero-functional-is-a-difference-of-positive-functionals` · lemma — A bounded real C_0(X) functional is a difference of positive functionals
- `thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals` · theorem — The bounded complex dual of C_0(X) is regular complex measures
- `rem-rmk-functional-analysis-uses` · remark — Functional-analysis uses of the Riesz--Markov--Kakutani theorem
- `lem-countable-intersections-of-club-subsets-of-omega-one-are-club` · lemma — Countable intersections of club subsets of omega_1 are club
- `thm-dieudonne-club-set-function-is-a-borel-measure` · theorem — The Dieudonne club-set function is a Borel measure
- `lem-continuous-functions-on-omega-one-plus-one-are-eventually-constant` · lemma — Continuous functions on [0, omega_1] are eventually constant
- `lem-dieudonne-measure-and-top-dirac-agree-on-continuous-functions` · lemma — The Dieudonne measure and top-point Dirac mass agree on continuous functions
- `fs-every-borel-measure-on-an-lch-space-is-radon` · false-statement — Every Borel measure on an LCH space is Radon
- `fs-rmk-representing-measure-is-unique-among-all-borel-measures` · false-statement — An RMK functional determines every Borel representing measure uniquely
- `fs-positive-linear-functionals-on-c-c-are-uniformly-bounded` · false-statement — Every positive linear functional on C_c(X) is uniformly sup-norm bounded
- `fs-inner-regularity-on-open-sets-implies-inner-regularity-on-all-borel-sets` · false-statement — Inner regularity on open sets implies inner regularity on all Borel sets
- `fs-every-finite-borel-measure-on-a-compact-hausdorff-space-is-regular` · false-statement — Every finite Borel measure on a compact Hausdorff space is regular
- `fs-c-c-is-dense-in-l-infinity-for-radon-measures` · false-statement — C_c(X) is dense in L^infinity(mu) for every Radon measure

### `radon-measures-and-the-riesz-markov-kakutani-theorem-examples` — Radon Measures and the Riesz Markov Kakutani Theorem — Examples (7 item(s))

- `ex-riemann-integral-functional-is-represented-by-interval-lebesgue-measure` · example — The Riemann integral functional is represented by Lebesgue measure on an interval
- `ex-point-evaluation-functional-is-represented-by-a-dirac-measure` · example — Point evaluation is represented by a Dirac measure
- `ex-locally-integrable-density-functional-is-represented-by-g-dlambda` · example — A locally integrable density functional is represented by g dlambda
- `ex-lebesgue-stieltjes-functional-is-represented-by-its-stieltjes-measure` · example — A Lebesgue--Stieltjes functional is represented by its Stieltjes measure
- `ex-counting-functional-on-a-discrete-lch-space` · example — Counting measure represents finite-support summation on a discrete LCH space
- `cex-dieudonne-borel-measure-on-omega-one-plus-one-is-not-regular` · counterexample — The Dieudonne Borel measure on [0, omega_1] is not regular
- `cex-distinct-borel-measures-can-represent-the-same-c-c-functional` · counterexample — Distinct Borel measures can represent the same C_c functional

### `modes-of-convergence-for-random-variables` — Modes of Convergence for Random Variables (23 item(s))

- `def-almost-sure-convergence-of-random-variables` · definition — Almost-sure convergence of real random variables
- `lem-almost-sure-convergence-event-is-measurable` · lemma — The almost-sure convergence event is measurable
- `def-convergence-in-probability` · definition — Convergence in probability
- `def-convergence-in-lp-for-random-variables` · definition — L^p convergence for random variables
- `def-convergence-in-distribution-for-real-random-variables` · definition — Convergence in distribution for real random variables
- `thm-limits-in-probability-are-unique-almost-surely` · theorem — Limits in probability are unique almost surely
- `thm-almost-sure-convergence-implies-convergence-in-probability` · theorem — Almost-sure convergence implies convergence in probability
- `thm-lp-convergence-implies-convergence-in-probability` · theorem — L^p convergence implies convergence in probability
- `thm-lq-convergence-implies-lp-convergence-on-a-probability-space` · theorem — L^q convergence implies L^p convergence on a probability space
- `thm-convergence-in-probability-implies-convergence-in-distribution` · theorem — Convergence in probability implies convergence in distribution
- `thm-convergence-in-distribution-to-a-constant-is-convergence-in-probability` · theorem — Convergence in distribution to a constant is convergence in probability
- `thm-almost-sure-subsequence-from-convergence-in-probability` · theorem — An almost-surely convergent subsequence from convergence in probability
- `thm-subsequence-characterization-of-convergence-in-probability` · theorem — Subsequence characterization of convergence in probability
- `def-probability-convergence-metric` · definition — A metric for convergence in probability
- `thm-probability-convergence-is-metrized-by-d-zero` · theorem — Convergence in probability is metrized by d_0
- `thm-dominated-convergence-in-lp` · theorem — Dominated convergence in L^p
- `thm-uniform-integrability-plus-probability-convergence-implies-l1-convergence` · theorem — Uniform integrability plus convergence in probability implies L^1 convergence
- `thm-l1-convergence-implies-uniform-integrability` · theorem — L^1 convergence implies uniform integrability
- `cor-uniform-integrability-characterizes-l1-convergence-under-probability-convergence` · corollary — Uniform integrability characterizes L^1 convergence under probability convergence
- `thm-slutsky-for-real-random-variables` · theorem — Slutsky's theorem for real random variables
- `rem-complete-convergence-implication-diagram` · remark — Complete convergence implication diagram
- `lem-pairing-preserves-convergence-in-probability` · lemma — Pairing preserves convergence in probability
- `thm-continuous-maps-preserve-convergence-in-probability` · theorem — Continuous maps preserve convergence in probability

### `modes-of-convergence-for-random-variables-examples` — Modes of Convergence for Random Variables — Examples (9 item(s))

- `cex-convergence-in-probability-need-not-be-almost-sure` · counterexample — Convergence in probability need not be almost sure
- `cex-almost-sure-convergence-need-not-imply-lp-convergence` · counterexample — Almost-sure convergence need not imply L^p convergence
- `cex-lp-convergence-need-not-imply-almost-sure-convergence` · counterexample — L^p convergence need not imply almost-sure convergence
- `cex-convergence-in-distribution-need-not-be-in-probability` · counterexample — Convergence in distribution need not be convergence in probability
- `cex-convergence-in-probability-need-not-imply-lp-convergence` · counterexample — Convergence in probability need not imply L^p convergence
- `cex-lp-convergence-need-not-imply-lq-convergence-for-p-less-than-q` · counterexample — L^p convergence need not imply L^q convergence when p is less than q
- `cex-almost-sure-convergence-does-not-imply-convergence-of-expectations` · counterexample — Almost-sure convergence does not imply convergence of expectations
- `ex-a-probability-convergent-sequence-with-a-prescribed-fast-as-subsequence` · example — A probability-convergent sequence with a prescribed fast almost-sure subsequence
- `ex-uniform-integrability-repairs-the-expectation-limit` · example — Uniform integrability repairs the expectation limit

### `lacunary-fourier-series-and-sidon-sets` — Lacunary Fourier Series and Sidon Sets (9 item(s))

- `def-hadamard-lacunary-sequence-and-lacunary-trigonometric-series` · definition — Hadamard-lacunary sequences and lacunary trigonometric series
- `lem-finite-lacunary-fourier-sums-have-their-coefficient-ell-two-norm` · lemma — Finite lacunary Fourier sums have their coefficient ell-two norm
- `lem-hadamard-gaps-bound-additive-representations` · lemma — Hadamard gaps bound the additive representations used in even moments
- `thm-lacunary-lp-norm-equivalence` · theorem — L-p norm equivalence for finite Hadamard-lacunary sums
- `cor-lacunary-series-lp-membership-is-coefficient-ell-two` · corollary — L-p convergence of a lacunary series is equivalent to ell-two coefficients
- `def-sidon-set-in-the-integer-dual` · definition — Sidon sets in the integer dual
- `lem-riesz-product-for-a-hadamard-lacunary-set` · lemma — Riesz-product witnesses for a Hadamard-lacunary set
- `thm-hadamard-lacunary-sets-are-sidon` · theorem — Hadamard-lacunary sets are Sidon
- `cor-fourier-series-supported-on-a-sidon-set-and-continuous-has-ell-one-coefficients` · corollary — A continuous Fourier series supported on a Sidon set has ell-one coefficients

### `lacunary-fourier-series-and-sidon-sets-examples` — Lacunary Fourier Series and Sidon Sets — Examples (4 item(s))

- `ex-powers-of-two-form-a-hadamard-lacunary-sequence` · example — The powers of two form a Hadamard-lacunary sequence
- `cex-gaps-tending-to-infinity-need-not-be-hadamard-lacunary` · counterexample — Gaps tending to infinity need not be Hadamard-lacunary
- `ex-riesz-product-for-three-powers-of-three` · example — A Riesz product for three powers of three
- `cex-the-integers-are-not-a-sidon-set` · counterexample — The integers are not a Sidon set

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-7 reader warnings

2 warning(s) a Step-7 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-de4f5235dae514cd724470c9 · `lem-finite-lch-partition-of-unity-near-a-compact-set`** (from group b, gap-a-reader-closes) — In proof step 2.1, the text says that shrinking to "{g=1}^circ intersect {h>1/2}" leaves an open neighbourhood of K. From the cited cutoff lemma one only has g=1 on K, not that K is contained in the interior of {g=1}. The asserted neighbourhood conclusion therefore does not follow as written. It is repairable by first choosing an open O with K subset O and compact closure O contained in W, then taking a cutoff equal to 1 on closure O.
- **s8a-87eaf189a8829c651992d754 · `thm-c-c-is-dense-in-l-p-for-radon-measures`** (from group b, gap-a-reader-closes) — Proof step 2.1 asserts |f-1_E| <= 1_{U\setminus K} for a cutoff satisfying 1_K<=f<=1_U. At x in K\setminus E, the left side can equal 1 while the displayed right side is 0. The standard repair is |f-1_E| <= 1_{U\setminus K}+1_{U\setminus E}, with U chosen so mu(U\setminus E) is small and K chosen so mu(U\setminus K) is small.

Append one owning-group disposition per warning to `research/frontier-32-step8-alert-decisions.jsonl`.
A Step-7 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-8 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-32-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — frozen integrity close, `frontier-32`

The final judge boundary is closed. The generated repair envelope above is
authoritative: review only its exact `assigned_items` and `live_tuples`, with
their explicit run or published scope; use a focused check when supported.

Resolve all assigned documentary findings in this pass. A serial reviewer must
establish ownership before editing an ambiguous record. Report detector or
authority defects explicitly; unchanged retries stop.

Do not alter mathematical items, start a judge cycle, or change another group's
records. You may correct a contract or receipt only when it exactly describes
the current item and cannot conceal a defect. A mathematical correction is a
blocker for the supervising session.

Return the gate, ids, non-item records changed, focused checks, and blockers.
