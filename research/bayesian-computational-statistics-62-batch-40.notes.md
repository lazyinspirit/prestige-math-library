# Batch 40 — authoring and evidence notes

## Inventory and dependency levels

The assigned pair is `mcmc-diagnostics-and-finite-run-limitations` and its
examples page. The manifest contains 14 items:

| Level | Items |
|---:|---|
| 0 | `def-blom-rank-normalization-for-pooled-draws`; `def-empirical-left-quantile-for-finite-draws`; `def-standard-cauchy-law`; `def-functional-specific-effective-sample-size`; `alg-split-rhat-from-multiple-chains` |
| 1 | `alg-multichain-effective-sample-size`; `alg-rank-normalized-folded-split-rhat`; `ex-thinning-can-mask-sticky-mcmc-output` |
| 2 | `alg-bulk-effective-sample-size`; `alg-tail-effective-sample-size`; `alg-quantile-monte-carlo-standard-error`; `ex-shared-funnel-region-missed-by-all-chains`; `ex-cauchy-heavy-tail-and-location-shift-rhat` |
| 3 | `ex-centered-eight-schools-low-tail-ess-and-thinning` |

Levels were calculated from the batch-40 manifest's in-run `deps`; external
suppliers do not raise item levels. Batch 40 remains assigned at batch level 5
with prerequisite batches 36 and 39 under the dispatch input
`e2c692b59bf73c48030daff126b4e56a33193754ff237750dc936c2a651c5e91`.
`alg-quantile-monte-carlo-standard-error` also has a direct item dependency on
batch 6's `def-beta-distribution`; this adds a batch-6 graph edge for owner
reconciliation, while the maximum batch level remains 5. The shared graph was
not edited.

## Design comparison and conflicts

The task, current plan-spec and assigned scaffold require
`mcmc-clt-and-monte-carlo-standard-error` (batch 36) and
`adaptive-mcmc-convergence-and-limitations` (batch 39). The BCS-37 track design
§174 instead says the page requires BCS-32 and BCS-33 and may be adjacent to
BCS-36 without depending on it mathematically. The owner direction identifies
the track design as controlling the mathematical scope. I kept the assigned
manifest's page requirements and scheduling input unchanged, followed §174 for
the claims, and recorded both unresolved page edges in the cross-batch input.
The local procedures make no MCMC CLT, adaptive-convergence, or universal
finite-run reliability claim. Owner reconciliation is required before the
page-level dependencies can be called complete.

The finite multi-chain ESS uses split chains before its between/within autocorrelation combination; its paired truncation includes the source odd/even antithetic averaging and short-chain software cap. The corrected Blom score uses the v5 expression `(r - 3/8)/(S + 1/4)`; an
older text extraction can display a different denominator. The versioned v5
PDF's equation (14) was directly inspected. Finite definitions specify tie
handling, split handling for odd chain lengths, estimator boundaries, and the
quantile convention rather than leaving these implementation choices implicit.

## Supplier inspection and open interfaces

The actual batch-36 draft bodies for `alg-overlapping-batch-means-mcse` and
`thm-mcmc-clt-sufficient-regimes` were inspected. The OBM supplier is a
finite sample-mean estimator and explicitly supplies no CLT or consistency
claim. The CLT supplier states six sufficient regimes, but its own Proof status
says those imported CLT criteria are not proved locally; it remains escalated.
Consequently batch 40 does not interpret an ESS or quantile interval as having
a theorem-backed error guarantee.

The actual batch-39 adaptive theorem and library A-page summary were inspected.
The theorem concludes one-time marginal total-variation convergence under
diminishing adaptation and either simultaneous uniform ergodicity or
containment. It expressly makes no strong-law or CLT claim. Batch 40 does not
invoke this theorem; the declared page edge remains open because it conflicts
with the controlling mathematical scope and its required upstream context is
still in flight. Inspection is not independent acceptance.

The batch-6 `def-beta-distribution` definition and its
`lem-beta-density-normalization` proof were inspected. The supplier defines a
Beta probability on `(0,1)` for positive shapes and assumes Countable Choice
for normalization. The quantile-MCSE algorithm has positive shapes because
`E_alpha>0` and `0<alpha<1`. Its direct external dependency and Countable Choice
assumption are declared separately from the full-AC rank-normalization path.
The supplier's Step-1 record is ready; this is not independent approval.

Published local interfaces read for the exact claims include the standard
normal law and its CDF lemma, probability measures, transition matrices,
invariant laws, time-homogeneous Markov chains, strict stationarity,
variance/covariance, full AC and Countable Choice. The thinning example derives
strict stationarity from the invariant initial law and the finite-state path
probability formula before using the theoretical ESS definition. No pointwise
regular conditional law beyond the cited chain interface is asserted.

## Sources and retrieval

The full 26-page v5 paper by Vehtari et al. was inspected at
[arXiv v5](https://arxiv.org/pdf/1903.08008v5): §§1–2 for finite-run
limitations and practical thresholds; §3.1 equations (1)–(4) for split
R-hat; §3.2 equations (10)–(13) for combined multi-chain ESS and Geyer's
paired positive/monotone truncation; §§4.1–4.4 equations (14)–(20) for Blom
scores, folding, bulk/tail ESS and quantile MCSE; §§5.1–5.2 for the Cauchy and
centered eight-schools simulations.

A second independent book treatment was read in full: Art B. Owen,
[Monte Carlo Theory, Methods and Examples, Chapter 11](https://artowen.su.domains/mc/Ch-MCMC.pdf).
The inspected passages are §§11.11–11.13, printed pp. 38–42, covering
multi-chain diagnostic limitations, error estimation and thinning's
storage/computation tradeoffs. The chapter's CLT cross-reference is incomplete
and is not used as a proof. I also inspected the complete official
[posterior package bulk-ESS reference](https://mc-stan.org/posterior/reference/ess_bulk.html).
It defines bulk-ESS as effective sample size for rank-normalized split chains,
confirming the preprocessing convention. This software reference is recorded
as an implementation cross-check, not as a third independent mathematical
treatment.

The author-maintained [online appendix](https://avehtari.github.io/rhat_ess/rhat_ess.html)
was retrieved in full (7.21 MiB) and Appendices A–D were inspected. Its
Appendix-D centered eight-schools runs report `Rhat(tau)=1.00`, bulk ESS 1880,
tail ESS 426 and 9955 divergences for the 100-times-longer run. For a separate
run thinned by 200, the appendix reports `Rhat(tau)=1.00`, tail ESS 1718 and a
posterior-mean difference exceeding three reported Monte Carlo standard errors
from the non-centered reference. These are empirical simulation observations,
not theorem guarantees. They are labeled as such in the B item.

The online-appendix web-reader route failed on its size limit; a direct GET
succeeded, and the complete HTML was extracted and inspected. The Owen PDF
reader returned 403; a direct GET succeeded, and the full chapter was extracted
and inspected. Attempt history is preserved in the coverage JSON. The final
`source-fetch-check --stamp` and post-stamp check results are recorded below.

## Proof and empirical scope

The exact finite proofs cover: the standard Cauchy density-law normalization and its divergent second moment; the two-state chain's invariant law,
stationarity, correlation powers and fixed-budget ESS comparison; the
four-chain finite funnel model's invariant target, positive-probability
missed-region event and both monitored coordinates' rank/folded split
statistics; and the Cauchy second-moment divergence plus exact raw,
rank-normalized and folded statistics for a separate finite location-shift
array. The finite shifted array is not presented as a Cauchy simulation. The Cauchy density-law definition was added locally because the example needs a normalized probability law; its proof uses Countable Choice only for Borel/Lebesgue measurability and proves the total mass by compact-interval integration and monotone convergence. The
eight-schools results are transcribed evidence only and have no synthetic proof.

## Scoped checks and decisions

Scoped validation passed on the final authored bytes:

- `precheck.mts`: 4 proof-bearing items passed (the Cauchy law definition and three finite examples).
- `proof-layout.mjs`: 14 items, 18 steps, zero defects.
- `proof-contract.mjs --strict`: 14/14 contracts, zero errors or warnings; citations contain exact supplier excerpts and every proof step has a mapped derivation.
- `rendercheck.mjs`: 16 changed item/page files, zero errors or warnings.
- `content-policy.mjs`: 14 scoped items, zero errors or warnings.
- Focused `depcheck`: 14 items and 2 pages; dependency closure covered 968 items and 388 pages, with zero errors or warnings.
- `coverage-checklist.mjs`: 1 A page, 33 harvested results, zero errors or warnings.
- `source-fetch-check.mjs`: all 4 source URLs fetch-verified and resolved; 0 documented drops.
- Focused item-level dependency calculation, including batch 6's `lem-beta-density-normalization` and `def-beta-distribution`: zero errors. All 14 batch-40 item labels match; `def-beta-distribution` computes to level 1, `alg-quantile-monte-carlo-standard-error` to level 2, and the batch maximum remains 3. Every direct external item dependency has a row in the cross-batch input.
- The two library page inventories exactly match the A/B manifest: 10 A items and 4 B examples.

The run-wide `node tools/item-dependency-levels.mjs check --run bayesian-computational-statistics-62` reports stale labels on unrelated items: `ex-cylinder-gaussian-process-is-not-banach-valued` (1 vs computed 2), `thm-gaussian-process-posterior-contraction` (10 vs 9), and three dependent Gaussian-process examples (11 vs 10): `ex-log-gaussian-uniform-density-posterior`, `ex-binary-regression-logistic-intercept-gp`, and `ex-fixed-design-gaussian-constant-process-and-unknown-scale`. These items are outside batch 40 and were not edited. The run-wide `node tools/batch-dependency-levels.mjs check --run bayesian-computational-statistics-62` reports the shared batch dependency levels as stale. Owner reconciliation must add the new batch-6 item edge for `def-beta-distribution` and recompute the shared graph; the assigned maximum level remains 5. No shared graph or engine state was edited.

The Step-1 decision tool recorded all 14 assigned items as `escalated`, without owner attribution, with their declared item dependencies and unresolved page requirements listed. The open page requirements are batch 36's CLT/MCSE page and batch 39's adaptive-MCMC page; the recorded evidence distinguishes their inspected draft bodies from readiness. These records document the authorship handoff only and are not mathematical verdicts or independent approval.

## Owner finite-domain repair and contextual prerequisite resolution

After native40 drained, focused same-agent repair made the3 bulk/tail/quantile ESS inputs explicitly require N>=2 per chain, matching their called procedure, and corrected funnel proof arithmetic/prose to16 broad states. Root read all4 carriers and integrated source-exact contracts/manifests; final layout4items4steps0defects and strictcontracts4/4zeroerrors/warnings passed. All14 stable dispositions and sole additional empirical consumer check: research/bayesian-computational-statistics-62-owner-diagnostics-final-resolution.json. Correct design-to-batch mapping retains required run36 CLT edge; run39 adaptive edge remains contextual. No logical unproved CLT is used and no finite-run diagnostic validity theorem is asserted. Upstream MCMC proof escalations remain explicit and prevent gates; authoring-readiness only.
