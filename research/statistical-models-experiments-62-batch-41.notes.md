# Batch 41 — authoring and evidence notes

## Inventory and dependency levels

The assigned A/B pair is `spectral-measures-and-periodogram-bias` /
`spectral-measures-and-periodogram-bias-examples`. It contains six items:

| Level | Items |
|---:|---|
| 0 | `thm-discrete-integers-have-circle-dual` |
| 2 | `def-time-series-spectral-measure-and-periodogram` |
| 3 | `lem-angular-fourier-orthogonality` |
| 4 | `thm-herglotz-spectrum-and-spectral-density`; `thm-periodogram-fejer-expectation-and-smoothing-bias` |
| 5 | `ex-atomic-spectrum-versus-continuous-spectral-density` |

The local duality theorem and angular orthogonality lemma were added as A-page
prerequisites with explicit dependency lists and complete proofs. The definition
depends on the batch-40 stationarity and autocovariance interfaces plus the
local dual theorem. The orthogonality lemma depends on the angular-measure
definition. The Herglotz theorem depends on the batch-40 process interfaces,
Bochner's theorem, the local dual and orthogonality results, and the stated
measure/regularity suppliers. The periodogram theorem depends on the process
interfaces, the angular orthogonality lemma and the analytic suppliers used in
its finite-sum and approximate-identity arguments. The B example depends on
the two A theorems and the finite-probability, IID and $L^2$ suppliers.
The scoped batch-40/41 graph contains 12 items, has no cycles and reproduces
these labels. The full item-level check passed for 511 items across 124 pages,
with maximum level 9.

The assigned batch level is 2 with prerequisite batch 40. The dispatch records
scheduling input hash
`94c87259c6c21716f65338c78b9fd1d65f59dff9ef50728ba0ff60be01881775`;
`research/statistical-models-experiments-62-batch-dependency-levels.json`
currently records input hash
`7678825e1f7f6ce11798fe342466b92d8abf015b55c31f19d48984f17f5437c6`.
The run-wide batch-level checker reports this shared artifact as stale. It was
left unchanged for owner reconciliation.

## Design comparison and mathematical scope

The binding owner-authoring direction was read before authoring. The complete
SME-41 design section and `plan-spec.json` agree on page IDs, order, category,
titles and required pages. No plan/spec conflict remains. The design's angular
frequency convention is made explicit by identifying the circle endpoints.
The repository's Lebesgue-measure suppliers require Countable Choice, so CC is
stated for the angular-measure/orthogonality and smoothing branch. This is an
explicit prerequisite clarification: the finite expectation identity and the
convolution identity for a supplied spectral measure remain choice-free.

The Herglotz existence and density result states the Axiom of Choice and
Dependent Choice because its Bochner supplier requires both. Its direct proof
checks the covariance positive-definite form, transports the dual measure to
the angular circle, proves regularity and the integral-transport identity,
then constructs the density and identifies its Fourier coefficients. The
periodogram theorem proves the finite expectation identity, supplied-measure
Fejér convolution and the local smoothing bias limit under the stated
continuity, kernel and bandwidth conditions. The example proves the atomic
sinusoid has no density and derives the causal AR(1) covariance, density and
exact expected-periodogram formulas. It proves the one-sided innovation series
converges absolutely almost surely by monotone convergence and identifies that
limit with its $L^2$ limit, so the causal representation is established
locally; the later batch-42 general definition is not imported. No
raw-periodogram limit distribution, variance consistency or interval coverage
is claimed.

The batch-40 supplier definitions for weak stationarity and autocovariance were
read in their current draft bodies; they give a real process on $\mathbb Z$,
finite second moments, constant mean and lag-only covariance. The batch-40
theorem body was checked but is not used for a CLT or ergodic conclusion. Its
draft status is interface evidence only, not approval. The published Bochner
statement and proof were read and checked for continuity, positive-definiteness,
LCA-group, AC and DC hypotheses. There are no unresolved supplier IDs at this
handoff.

## Source reading, dispositions and retrieval

The complete source texts were fetched and the relevant arguments inspected.
The A page has independent time-series treatments plus a textbook treatment
for the local duality result. The recorded harvest and dispositions are:

- Wang, [STAT 720 Time Series Analysis](https://people.stat.sc.edu/wang528/Stat%20720/STAT720%20Notes.pdf), complete 150-page PDF, inspected PDF pp. 63–65 (Theorem 4.2, Corollary 4.2, Example 4.2 and Theorem 4.4): Theorem 4.2 and Corollary 4.2 are `included` in the Herglotz theorem; Theorem 4.4 is `inline` in the AR(1) example because that example derives its own process, covariance and density; the angular-frequency normalization is `inline` in the local orthogonality lemma. On the B page, the Herglotz/AR(1) context is `inline` as a consistency check, not a proof substitute.
- Meinshausen, [Time Series Analysis: Notes for the course HS 2022](https://www.stat.ethz.ch/~nicolai/timeseries/TimeSeries2022b.pdf), complete 57-page PDF, inspected PDF pp. 36–44: spectral representation on pp. 38–40 and periodogram/Fejér expectation on pp. 40–42 are `included`; approximate-identity discussion on pp. 41–42 is `inline` because the local proof supplies the circular-tail and grid-normalizer details; the PDF p. 43 confidence-interval discussion is `out-of-scope`; its angular character convention on pp. 36–42 is `inline` in the orthogonality lemma. The notes use cycles-per-unit frequency; the carriers convert to angular frequency $\lambda=2\pi\nu$. The B-page spectral and expected-periodogram context on pp. 38–42 is `inline` because the example derives both models directly.
- Spodarev, [Spatial Statistics: Lecture Notes (2024)](https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.110/lehre/ss24/SpatialStatistics_2024.pdf), complete 101-page PDF, inspected Section 2.3, PDF pp. 20–25 (printed pp. 18–23): Definition 2.9 and the full proof of Lemma 2.10 are `included`; Lemma 2.14 is `inline` because its continuous-domain/field argument differs from the local circle/grid proof; following variance, consistency and asymptotic-normality results are `out-of-scope`.
- Dikranjan, [Introduction to Topological Groups](http://www.mat.ucm.es/imi/documents/20062007_Dikran.pdf), complete 69-page PDF, inspected Section 7.1 Example 7.1(2), printed p. 46, and Section 7.2 Example 7.7, printed pp. 48–49: the compact-open/pointwise topology result is `included`; the evaluation-at-1 identification is `inline` because the local theorem supplies the complete algebraic and topological proof.
- Loomis, [Introduction to Abstract Harmonic Analysis](https://people.math.harvard.edu/~shlomo/212a/loomis.pdf), complete 198-page PDF, inspected Chapter VII, Section 35E, printed p. 140: the character classification and topological dual identification are `included` for the local duality theorem.

The original Loomis URL `https://people.math.harvard.edu/~shlomo/loomis.pdf`
failed HEAD preflight with HTTP/2 404. The recorded search found the 1953
edition and the working Harvard mirror above; that mirror is the active,
fetch-verified source and was read. The recovery attempt, search and alternative
argument/dependency list are preserved in the A-page coverage
`source_resolution`. No source was dropped. `source-fetch-check --stamp`
passed 7/7 with zero new stamps; check mode also passed 7/7, with zero drops.
The coverage file records each URL, locator, harvested result and disposition.

## Scoped checks and readiness

The final assigned manifest has six items and explicit dependencies;
`manifest-deps` passed with zero normalization or errors. The scoped item graph
and full `item-dependency-levels check` passed. The strict proof-contract check
passed 6/6 items with zero errors or warnings. Precheck passed all five
proof-bearing items. `proof-layout` checked six items and 29 numbered steps
with zero defects. `rendercheck` checked six items and both pages (8 files total)
with zero errors or warnings. Content policy passed for six items; focused
dependency checking passed for six items and two pages with zero errors or
warnings; forward-reference checking found zero open or closed forward
references and zero errors or warnings. Coverage passed for two pages and 17
harvested results with zero errors or warnings.

The `depcheck --help` probe is not a help mode and launched an unscoped
whole-corpus scan. Its output included unrelated existing `published-unaudited`
findings, `b-leaf-content` findings for
`ex-known-variance-normal-z-sample-size-and-sensitivity` and
`thm-known-variance-normal-z-test-power-and-minimum-sample-size`, and a
`justification-backward` finding for
`def-power-and-sample-size-planning-specification`. These were not changed or
used as batch-41 acceptance evidence. The subsequent correctly scoped depcheck
passed with zero errors and warnings.

The Step-1 decision tool recorded all six assigned items `ready`, with
`owner:false` and their examined direct dependencies. A run-wide decision check
reports 488/511 ready, with all six assigned records closed and 23 other items
still needing work; completion records are authorship evidence, not independent
approval.

The native `.autopilot/statistical-models-experiments-62` status reports the
run still at Stage 1 scaffold, with no work in flight and an owner-held repair
and recertification blocker. Its latest status reports 59/62 covered, missing
units 41, 42 and 46, and missing artifacts for 42 and 46; the authored batch-41
files exist but the run's shared dispatch coverage has not been reconciled.
`research/statistical-models-experiments-62-step1-blockers.json` records a
`stage-stalemate` for unit 18 as covered but artifact-incomplete and no longer
running. No autopilot state, shared plan, shared scheduling artifact, blocker
or verdict was changed in this batch.
