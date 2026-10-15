# Batch 40 — authoring and evidence notes

## Inventory and dependency levels

The assigned A/B pair is stationary-time-series-moments-and-autocovariance /
stationary-time-series-moments-and-autocovariance-examples. The scaffold now
contains six items:

| Level | Items |
|---:|---|
| 0 | def-strict-and-weak-stationarity-for-time-series; ex-pairwise-uncorrelated-dependent-triple |
| 1 | def-autocovariance-and-sample-autocovariance; cor-ergodic-time-series-sample-mean-converges-a-s-and-l1 |
| 2 | thm-sample-acvf-properties-and-summable-covariance-mean-consistency; cex-pair-count-normalized-sample-acvf-not-positive-semidefinite |

The item graph has no cycles. The level-0 A definition uses published process,
law, expectation and moment definitions. The sample-ACVF definition depends on
that local definition. The main theorem depends on both A definitions plus
published expectation/covariance identities. The ergodic corollary depends on
the A stationarity definition and the actual one-sided Birkhoff suppliers; AC
is carried exactly as those suppliers require. The B counterexample depends on
the A sample-ACVF definition. The finite triple has only published finite
probability-space suppliers.

The assigned scheduling input places batch 40 at batch level 1 because its A
page requires batch 1. Its page requirements are the model-contract, probability
and stationary-Markov pages; the companion requires the A page. The current
batch-level artifact still records level 1 and prerequisite batch 1. The
item-level calculation for this manifest passed with the levels above.

## Design comparison and recorded conflicts

The current plan and plan-spec.json agree on both page IDs, order, category,
titles and required pages. The plan-spec items:[] entries were the pre-authoring
scaffold inventory; they have now been filled by the authored manifest.

The older models-05 TS01 dossier is broader than the controlling SME-40 plan.
It proposes a Gaussian weak/strict equivalence, an exact expectation formula
for a known-mean sample ACVF, and a random-constant nonergodic example. The
current plan does not request those claims; they are omitted. The current plan
does require a separate Birkhoff a.s./L1 result under strict stationarity,
integrability and ergodicity, so the A page adds the local corollary
cor-ergodic-time-series-sample-mean-converges-a-s-and-l1 from the existing
supplier. Its AC assumption and exact use are explicit. The current B contract
asks for uncorrelated dependent data and an indefinite pair-count rescaling;
the B page uses an exactly enumerated finite triple and a proved three-point
counterexample. The finite triple is not asserted to be a stationary process.

## Supplier checks

The actual draft body for def-scientific-statistical-model-contract and its
A page were inspected. Its observation-record, index/time-origin, quantity
status and sampling-law clauses supply the required model context; the
definition remains draft and no independent acceptance is claimed. The two
other required pages are published. The exact current process, moment,
expectation, covariance-bilinearity, ergodicity and Birkhoff bodies were read;
the Birkhoff proof was checked for its integrability, ergodicity, L1 and AC
hypotheses. No citation is used as a substitute for a local argument.

The A page records its abstract observation tuple, integer time-origin and
index roles, random versus observed quantities, target mean, joint-law
conditioning convention and absence of additional support restrictions. It
also distinguishes assumptions that finite observations may challenge from
scientific adequacy, which the mathematics does not establish.

The sample-mean proof counts ordered pairs by lag, derives the finite
covariance identity, then bounds it by n^-1 sum_h |gamma(h)|. The sample
ACVF proof writes every finite Toeplitz quadratic form as a finite sum of
squares. The B counterexample uses data (1,0,0) and vector (1,1/2,1),
giving quadratic form -1/18. These claims make no mixing, CLT, sample-ACF
limit or unbiasedness assertion.

## Source reading and retrieval

Two independent full-text treatments were read at the relevant passages:

- Meinshausen, [Time Series Analysis: Notes for the course HS 2022](https://www.stat.ethz.ch/~nicolai/timeseries/TimeSeries2022b.pdf), a complete 57-page lecture-note PDF. This batch inspected the stationarity, covariance and sample-ACVF arguments on PDF pages 3–9 and the sample-mean variance/summability proof on PDF pages 13–14. Its additional long-run variance limit is recorded inline as context and is not claimed.
- Wang, [STAT 720 Time Series Analysis](https://people.stat.sc.edu/wang528/Stat%20720/STAT720%20Notes.pdf), a 150-page course-note PDF. This batch inspected PDF pages 14–17, PDF page 25, and PDF page 46, including Theorem 2.2 and Lemma 2.3. The plan cites Lemma 2.3 at p.47, while the inspected extracted PDF page marker places it on PDF page 46 (printed page 43); the coverage locator records the inspected page. The notes' sample-ACF asymptotic normality claim is out of scope and is not used.

source-fetch-check --stamp fetched and stamped both full PDFs: ETH 475,791
bytes / 57 pages, Wang 8,801,561 bytes / 150 pages; both initial fetches
succeeded without recovery retries. The final A/B coverage repeats the same
two verified source records on both page entries; check mode therefore reports
4/4 source entries verified. URLs, exact locators, harvested results and every
result disposition are in
research/statistical-models-experiments-62-batch-40.coverage.json. No source
was dropped and no source-resolution recovery was needed.

## Scoped checks

The assigned manifest has six explicit dependency arrays. The local item-level
calculation passed; proof-contract strict validation passed for all six items;
precheck passed for all four proof-bearing items; proof-layout checked six
items and 13 steps with zero defects; rendercheck checked the six items and two
pages with zero errors or warnings. Content policy passed for six items,
focused dependency/page checks passed for six items and two pages with zero
errors or warnings, and coverage passed for two pages / 13 harvested results.
Source-fetch check passed in stamp mode and final check mode.

The Step-1 decision tool recorded all six assigned items as ready, without
owner attribution. A focused hash/readiness check confirmed all six current
records are closed and still match their item and supplier bytes. These
readiness records document completed authorship checks only; they are not
independent mathematical approval.

The run-wide node tools/batch-dependency-levels.mjs check --run
statistical-models-experiments-62 could not recompute the shared graph: it
stops while parsing an unrelated malformed frontmatter source title in
items/def-gaussian-mixture-confidence-sequence-boundary.md:19 (the unquoted
“Martingales 1: Concentration Inequalities — Conjugate Mixtures” source title).
A one-file rendercheck confirmed that file's frontmatter error. The native run
status records the same Step-1 unit-prerequisite blocker. That item is outside
batch 40 and was not edited. The current shared artifact's input digest is
de6e1027b46ea7b3c37bc74c904656e5f2a8999ca9c3ccc4d34d3328478c9e0d; the
dispatched task recorded
be0b7aca66787065a1de6e365a80730a6752b56b03a5c15b6c6abcb95603d30d. Both
records retain batch 40 at level 1 with prerequisite batch 1. The run-wide
digest reconciliation remains for the owner because it requires recomputing
shared run inputs and the unrelated YAML blocker is outside this assignment.
