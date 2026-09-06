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
group work, `research/frontier-32-alpha-groups.json` is the assignment: it permits at
most nine groups of at most three batches, and a group writes only its own
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

run: frontier-32
role: alpha-adjudicate
label: step8-b
covers: 3, 5, 6

# Step 8 adjudication — group **b**, run `frontier-32`

You are the group Alpha for batches **3**, **5**, **6**: 3 A/B pair(s), 6 page(s), 88 item(s), 36 open rejection(s) over 36 item(s).

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

| item | page | model | context_sha256 |
|---|---|---|---|
| `cex-almost-sure-convergence-does-not-imply-convergence-of-expectations` | `modes-of-convergence-for-random-variables-examples` | gpt-5.6-terra | `98056fb31667a430949c1f1b0ff16e9ba869e7da04db439e7f87035b80786c60` |
| `cex-almost-sure-convergence-need-not-imply-lp-convergence` | `modes-of-convergence-for-random-variables-examples` | gpt-5.6-terra | `37d8d21389f6aacc741cdd88bc7293d7f8aef4ebcf758ad2706b39f5b9419979` |
| `cex-convergence-in-probability-need-not-imply-lp-convergence` | `modes-of-convergence-for-random-variables-examples` | gpt-5.6-terra | `f4ee03e48292af2d895412e8405f5ab3de531b70f2c422c1ef2162c8a1e9055f` |
| `cex-dieudonne-borel-measure-on-omega-one-plus-one-is-not-regular` | `radon-measures-and-the-riesz-markov-kakutani-theorem-examples` | gpt-5.6-terra | `1571d891802daac90c61e88c429eed57a060ce48db3dcfbd29a10eef6dfeef60` |
| `cex-lp-convergence-need-not-imply-lq-convergence-for-p-less-than-q` | `modes-of-convergence-for-random-variables-examples` | gpt-5.6-terra | `a021d466835a430e2938e5f23e01f8525416c87194d0cd19ab1b3cac1fe450fa` |
| `def-hadamard-lacunary-sequence-and-lacunary-trigonometric-series` | `lacunary-fourier-series-and-sidon-sets` | gpt-5.6-terra | `a98e26631ef24a0d4f31ecf1324fb999f2844ed308f1abe16c68ad46141e84a8` |
| `def-regular-complex-borel-measure-on-an-lch-space` | `radon-measures-and-the-riesz-markov-kakutani-theorem` | gpt-5.6-terra | `e12f97886b7ca50e17f5b4c1c3f79ddb8df927cadc580e7cbf0f2cf240ed0f9b` |
| `ex-a-probability-convergent-sequence-with-a-prescribed-fast-as-subsequence` | `modes-of-convergence-for-random-variables-examples` | gpt-5.6-terra | `39e6ed11c069ba09b0ef0c4fdd0e4f9c1f4ac23dd9e371dcdf46a4f61810ebc4` |
| `ex-locally-integrable-density-functional-is-represented-by-g-dlambda` | `radon-measures-and-the-riesz-markov-kakutani-theorem-examples` | gpt-5.6-terra | `bb7fc92f4290f73db5fbefa138e0672be088040b1c064c7ae14137cffc358018` |
| `ex-point-evaluation-functional-is-represented-by-a-dirac-measure` | `radon-measures-and-the-riesz-markov-kakutani-theorem-examples` | gpt-5.6-terra | `4f126c6cb3508edeca96bdd439d1d420d0403c4b0700343219b1b06d1e559136` |
| `ex-riemann-integral-functional-is-represented-by-interval-lebesgue-measure` | `radon-measures-and-the-riesz-markov-kakutani-theorem-examples` | gpt-5.6-terra | `be0c4582a336c1489d48db198d47ab62ed785f5e80527b4d19e46254917d9104` |
| `fs-every-finite-borel-measure-on-a-compact-hausdorff-space-is-regular` | `radon-measures-and-the-riesz-markov-kakutani-theorem` | gpt-5.6-terra | `7bc2624b9f90d5d84b6d416680b32d133dbcbfcce5cc9dd97c55b06151b4f9a2` |
| `fs-inner-regularity-on-open-sets-implies-inner-regularity-on-all-borel-sets` | `radon-measures-and-the-riesz-markov-kakutani-theorem` | gpt-5.6-terra | `d67297c601f37b23267f6adf84f35d5cf0844408c990f8c07ddf30bfd20c22f4` |
| `lem-continuous-functions-on-omega-one-plus-one-are-eventually-constant` | `radon-measures-and-the-riesz-markov-kakutani-theorem` | gpt-5.6-terra | `11cc1faef8a416424a2e30892955de0adf8c54535294d95edbac1e2a7d946553` |
| `lem-dieudonne-measure-and-top-dirac-agree-on-continuous-functions` | `radon-measures-and-the-riesz-markov-kakutani-theorem` | gpt-5.6-terra | `55f290ba38a13218f3f023a26f0a2047a298021c90029a2fb8a3c1eed7a203c3` |
| `lem-finite-lacunary-fourier-sums-have-their-coefficient-ell-two-norm` | `lacunary-fourier-series-and-sidon-sets` | gpt-5.6-terra | `7a1c360ea67cf5f7ca145f9b80f1ecf1368ac791e11b4c5116313af48321db57` |
| `lem-finite-lch-partition-of-unity-near-a-compact-set` | `radon-measures-and-the-riesz-markov-kakutani-theorem` | gpt-5.6-terra | `9b1e89e7a1f1c6beabe704200f0a94ecf749b429a91efa92e95fceca3cbb7572` |
| `lem-hadamard-gaps-bound-additive-representations` | `lacunary-fourier-series-and-sidon-sets` | gpt-5.6-terra | `576ceea0f6478154ab07e72e400f0fe560198265c9b716ea8f9ca9de635c228c` |
| `lem-rmk-compact-set-formula-and-local-finiteness` | `radon-measures-and-the-riesz-markov-kakutani-theorem` | gpt-5.6-terra | `87ca4552a619d9bcdaf77ad7ca74c75d7082f46ea36e4f2a0facdc3f1831fe07` |
| `lem-rmk-functional-outer-content-is-well-defined` | `radon-measures-and-the-riesz-markov-kakutani-theorem` | gpt-5.6-terra | `36d7df4ac269810cd2bac0078855bf76a3d5884e1a0f49a12d22f32a796712ad` |
| `prop-lebesgue-stieltjes-and-lch-radon-conventions-agree-on-r` | `radon-measures-and-the-riesz-markov-kakutani-theorem` | gpt-5.6-terra | `3eec4309c9d4d8d3509e88d5ffb033bf01cdc54858e63abf32f8aea4423d8625` |
| `rem-complete-convergence-implication-diagram` | `modes-of-convergence-for-random-variables` | gpt-5.6-terra | `042f995ca08ae1e22510e513687d80066dabb34346e2d81256260ca1c1a30c81` |
| `thm-almost-sure-convergence-implies-convergence-in-probability` | `modes-of-convergence-for-random-variables` | gpt-5.6-terra | `d8eb678ebebfea521682c49b8965651e458a8e0b94f89266d6ffacce9fad0f4b` |
| `thm-almost-sure-subsequence-from-convergence-in-probability` | `modes-of-convergence-for-random-variables` | gpt-5.6-terra | `28a9c8394b8323bf5442b67cf01881834d2648871f4419c5632225771d62c763` |
| `thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals` | `radon-measures-and-the-riesz-markov-kakutani-theorem` | gpt-5.6-terra | `cacff73046438e4ce031a4e40e9d8cdf38410df2b859bc6d7e293921f01cdae5` |
| `thm-c-c-is-dense-in-l-p-for-radon-measures` | `radon-measures-and-the-riesz-markov-kakutani-theorem` | gpt-5.6-terra | `84c2aa2378e239cd4b2406ca1be2114aefe1fc01ff5a5037698f0a320da003ed` |
| `thm-continuous-maps-preserve-convergence-in-probability` | `modes-of-convergence-for-random-variables` | gpt-5.6-terra | `eb7bac087d7efadf6abc4d9236b34498ef6a263b9d5e40fed8b550e3c51c83fa` |
| `thm-convergence-in-distribution-to-a-constant-is-convergence-in-probability` | `modes-of-convergence-for-random-variables` | gpt-5.6-terra | `e7b9a592a6b1b58c205c01648e01159b95af1e4fa6c3d43f0e219d6a5f7b6007` |
| `thm-dominated-convergence-in-lp` | `modes-of-convergence-for-random-variables` | gpt-5.6-terra | `63d14d7429036164a5951d2135abfacf945a42f943cae766aa68a52c07537bd1` |
| `thm-hadamard-lacunary-sets-are-sidon` | `lacunary-fourier-series-and-sidon-sets` | gpt-5.6-terra | `cd16504e5aeb70f75a137f685103d6be30ebefff2b3e663f9911fdf2f8345128` |
| `thm-lebesgue-measure-is-a-radon-measure-on-rn` | `radon-measures-and-the-riesz-markov-kakutani-theorem` | gpt-5.6-terra | `27336200778556300d718918323aa84182f1c427b82c1b2f878341d07ff9a94d` |
| `thm-locally-finite-borel-measures-are-regular-when-open-sets-are-sigma-compact` | `radon-measures-and-the-riesz-markov-kakutani-theorem` | gpt-5.6-terra | `5eb2788a2c22631645e6630a7a230b77566fa580c7dde62d5a0d1cae8e171df5` |
| `thm-lusin-theorem-for-radon-measures` | `radon-measures-and-the-riesz-markov-kakutani-theorem` | gpt-5.6-terra | `80813f8748cfd5997fd02a63b5d33908752b6a67ee2ae0ee4075921503324c3b` |
| `thm-rmk-open-sets-are-caratheodory-measurable` | `radon-measures-and-the-riesz-markov-kakutani-theorem` | gpt-5.6-terra | `aa04eab1ce71d360f0c57dd496d36d57678093a7f9ed917c5591142daee23936` |
| `thm-rmk-representing-measure-is-inner-regular-on-open-sets` | `radon-measures-and-the-riesz-markov-kakutani-theorem` | gpt-5.6-terra | `75eac963b6dcf42729e48c34ce39a3f701756dba09bed1c42dfb5983c21c1a2a` |
| `thm-slutsky-for-real-random-variables` | `modes-of-convergence-for-random-variables` | gpt-5.6-terra | `4a4265a6e227f4a1219ed929d339889a74a32050c7679530fa1efff02844e80f` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — fatal-only judge and reader-warning adjudication, `frontier-32`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Web search is available in this role. If any mathematics is uncertain, use it
and verify the point against original sources before deciding the outcome or
making a repair. Record the sources consulted and the exact claim each source
supports in the group report; do not resolve uncertainty from memory or a
secondary summary alone.

Append one row per rejection to `research/frontier-32-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set.

Every entry under **Step-7 reader warnings** also requires an owning-group
decision in `research/frontier-32-step8-alert-decisions.jsonl`. Use `not_defect` or
`nonfatal` when no content change is warranted, and `covered_by_rejection` when
an exact judge rejection already licenses the same repair. If a Step-7 reader
warning is independently `confirmed_fatal`, record `defect_type`, the full
pre-edit `itemHashGuard` digest as `item_sha256`, the full repaired digest as
`post_sha256`, repair the item before returning, and add exactly one matching
defect-ledger row whose structured `adjudication_ref` contains this `alert_id`,
`item`, and `item_sha256`. Only Step-7 reader warnings have this direct fatal
licence; later cross-group alerts raised while
adjudicating a judge rejection still require a targeted judge rejection.

A warning may name an owned page, for example a missing prerequisite page.
Read the page and its declared prerequisites and retain an explicit disposition.
A page warning grants no item-edit authority: identify the affected item and its
fatal evidence, or report an unresolved page defect with
`confirmed_fatal_unlicensed`. Never dismiss it merely because it names a page.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Descriptive defect-ledger subclasses
such as `invalid-inference`, `false-claim`, or `ill-typed-construction` are not
valid adjudication `defect_type` values.

For every reader warning, append the owning-group disposition to
`research/frontier-32-step8-alert-decisions.jsonl`. A defect in another group is a
`research/frontier-32-step8-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-8 baseline or rewrite shared ledgers. Run the Step-8 guard
and scope check, then write `research/frontier-32-alpha-step8-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.


## Mathematical context continuity

Read exact task paths first. Search current owned artifacts before historical runs;
exclude dispatch logs from routine content searches. Fetch complete relevant source
sections and dependency statements, using bounded output chunks. A truncated result
is not evidence of absence; continue reading until the required argument is complete.
Do not dump entire ledgers, source books, or repository-wide search results into context.

For writing roles, after each completed item update the task-authorized notes or report with the
current item IDs, exact claim and conventions, source paths/URLs and locators,
dependency IDs, decisions, validation results, unresolved obligations, and next action.
Automatic compaction can occur mid-proof. After compaction or handoff, reread the
current item, relevant dependency statements, source passages, and these obligations
before continuing a proof or repair. A summary is a navigation aid, never a substitute
for mathematical evidence. If a hypothesis or source qualification cannot be
recovered, record the blocker rather than infer it. Preserve all independent reviews
and exact-hash gates. Never mark an unfinished obligation complete to save context.
Checkpoint only in the task-authorized notes/report; do not create transcripts or alter other owners’ artifacts.
