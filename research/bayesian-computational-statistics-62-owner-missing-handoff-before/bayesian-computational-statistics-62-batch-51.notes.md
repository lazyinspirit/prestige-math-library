# Bayesian and Computational Statistics — batch 51 notes

Run: `bayesian-computational-statistics-62`  
Role: beta; pair: `iid-bootstrap-and-jackknife-validity` / `iid-bootstrap-and-jackknife-validity-examples`  
Assigned batch dependency level: 1; prerequisite batch: 50  
Scheduling input supplied for this handoff: `4353922e2bc21330b8d06b628923b2b91b410a0bed9abbcf2167572e3af83d9d`  
Output manifest: `research/bayesian-computational-statistics-62-batch-51.pages.json`

## Controlling plan and reconciliation

Read `research/bayesian-computational-statistics-62-owner-authoring-direction.md`, the complete BCS-48 design section in `research/plan-bayesian-computational-statistics-track.md` (L207 onward), `research/plan-spec.json`, the generated batch task, and current batch evidence. The owner direction controls the assignment of the conditional empirical-law bootstrap CLT to BCS-48; an older BCS-47 index entry is stale. The local conditional CLT and its downstream smooth-statistic theorem are therefore on this pair, as required by the controlling direction.

The page IDs, titles, category, order (2142/2143), companion relationship, and page-level prerequisites match the plan-spec and generated task. Their item arrays were scaffold placeholders and are now populated in the assigned manifest. The A page retains all three page requirements: BCS-47 resampling and sampling units, the delta-method page, and the confidence-sets/pivots page. The design's MSF-02 statistic/estimator and MSF-14 delta-method facts are consumed at item level. The confidence-set page is retained as planned page context and terminology; this pair asserts no interval-coverage theorem. The design's MSF-10 coverage definition applies only if a separately proved coverage result is supplied, which this pair does not do. No claim was weakened or omitted to resolve that page-vs-item granularity.

The actual BCS-47 draft bodies were inspected for the unit contract, empirical measure and its probability-measure lemma, the size-n empirical bootstrap, and the conditional-IID draw theorem. Their finite IID vector and finite-index interfaces agree with the local definition and proofs here. This verifies body compatibility only: the supplier page remains draft, and no independent acceptance or approval is claimed. The published delta-method and confidence-set pages were also checked at their cited definitions and proofs. Cross-page evidence is in `research/bayesian-computational-statistics-62-batch-51.cross-batch-dependencies.json`.

## Inventory, dependencies, and levels

The 18-item inventory and `deps` were set in the manifest before writing the carriers. Levels count only in-run `deps`: zero with no in-run `deps`, otherwise one plus the maximum supplier level. `justified_by` is recorded separately and is not an ordering edge. Scoped recomputation found all labels correct.

| Item | Home | In-run `deps` | Level |
|---|---|---|---:|
| `alg-lower-empirical-bootstrap-quantile` | A | — | 0 |
| `def-iid-empirical-bootstrap-sample` | A | — | 0 |
| `lem-iid-sample-covariance-converges` | A | — | 0 |
| `alg-basic-bootstrap-interval` | A | `alg-lower-empirical-bootstrap-quantile`, `def-iid-empirical-bootstrap-sample` | 1 |
| `alg-bias-corrected-bootstrap-interval` | A | `alg-lower-empirical-bootstrap-quantile`, `def-iid-empirical-bootstrap-sample` | 1 |
| `alg-bootstrap-t-interval` | A | `alg-lower-empirical-bootstrap-quantile`, `def-iid-empirical-bootstrap-sample` | 1 |
| `alg-percentile-bootstrap-interval` | A | `alg-lower-empirical-bootstrap-quantile`, `def-iid-empirical-bootstrap-sample` | 1 |
| `lem-empirical-bootstrap-law-is-a-probability-measure` | A | `def-iid-empirical-bootstrap-sample` | 1 |
| `thm-delete-one-jackknife-linearization-for-smooth-statistics` | A | `def-iid-empirical-bootstrap-sample`, `lem-iid-sample-covariance-converges` | 1 |
| `lem-finite-bootstrap-cdf-supremum-is-measurable` | A | `def-iid-empirical-bootstrap-sample` | 1 |
| `alg-delete-one-jackknife-acceleration` | A | `thm-delete-one-jackknife-linearization-for-smooth-statistics` | 2 |
| `lem-finite-index-bootstrap-sample-is-conditionally-iid` | A | `def-iid-empirical-bootstrap-sample`, `lem-empirical-bootstrap-law-is-a-probability-measure` | 2 |
| `ex-delete-one-jackknife-for-sample-mean` | B | `def-iid-empirical-bootstrap-sample`, `thm-delete-one-jackknife-linearization-for-smooth-statistics` | 2 |
| `alg-bca-bootstrap-interval` | A | `alg-delete-one-jackknife-acceleration`, `alg-lower-empirical-bootstrap-quantile`, `def-iid-empirical-bootstrap-sample` | 3 |
| `ex-discrete-median-bootstrap-ties` | B | `alg-basic-bootstrap-interval`, `alg-lower-empirical-bootstrap-quantile`, `alg-percentile-bootstrap-interval`, `def-iid-empirical-bootstrap-sample`, `lem-finite-index-bootstrap-sample-is-conditionally-iid` | 3 |
| `thm-conditional-iid-bootstrap-clt-for-empirical-law` | A | `def-iid-empirical-bootstrap-sample`, `lem-empirical-bootstrap-law-is-a-probability-measure`, `lem-finite-index-bootstrap-sample-is-conditionally-iid`, `lem-iid-sample-covariance-converges`, `lem-finite-bootstrap-cdf-supremum-is-measurable` | 3 |
| `cex-iid-bootstrap-inconsistency-at-absolute-mean-kink` | B | `def-iid-empirical-bootstrap-sample`, `thm-conditional-iid-bootstrap-clt-for-empirical-law` | 4 |
| `thm-iid-bootstrap-validity-for-smooth-statistics` | A | `def-iid-empirical-bootstrap-sample`, `lem-iid-sample-covariance-converges`, `thm-conditional-iid-bootstrap-clt-for-empirical-law` | 4 |
| `ex-iid-bootstrap-smooth-mean` | B | `def-iid-empirical-bootstrap-sample`, `thm-iid-bootstrap-validity-for-smooth-statistics` | 5 |

The finite-index bootstrap definition now declares the finite probability-space and function-count suppliers needed to make its tuple space and uniform weights well-defined. The conditional CLT declares the well-ordering principle for least-index subsequence selection, the reciprocal Archimedean corollary for passing from thresholds `1/r` to every positive real threshold, a local lemma proving the conditional CDF supremum measurable by a finite support maximum, and the published almost-sure-to-in-probability theorem used in its final subsequence contradiction. The measurability lemma is a necessary well-definedness input to the probability-convergence statement; it adds no asymptotic claim. The A page now has 15 of the permitted 100 items. The local lemma is level 1, so the conditional CLT remains level 3.

The BCS-47 page and the published MSF pages are page-level inputs; the exact item-level dependencies and justifications are listed in each carrier and manifest row. The proof contract now records the exact supplier excerpts, per-step inputs, eight boundary cases per proof-bearing item, and applicable finite checks.

## Source reading and dispositions

Three independent full-text treatments were inspected, including full proofs where the pair uses asymptotic arguments. URLs, locators, item support, harvested-result dispositions, fetch stamps, and per-item local argument/dependency alternatives are recorded in `research/bayesian-computational-statistics-62-batch-51.coverage.json`.

| Source and inspected locator | Supported items and disposition |
|---|---|
| Bradley Efron and Robert Tibshirani (1985), “The Bootstrap Method for Assessing Statistical Accuracy,” complete 35-page publisher PDF. [Springer full text](https://link.springer.com/content/pdf/10.2333/bhmk.12.17_1.pdf) | §§1–2 support the empirical bootstrap setup; §4 supports the bootstrap-t construction; §7 supports percentile, BC, and BCa procedures; §10 supplies jackknife convention context. For `lem-finite-bootstrap-cdf-supremum-is-measurable`, §§1–2 are setup context only; the finite-maximum measurability proof is local. The interval algorithms are specified locally and no coverage/accuracy theorem is imported. The jackknife linearization theorem and sample-mean identity are proved locally. |
| UW STAT 581, Chapter 8, complete 28-page notes. [Full chapter](https://sites.stat.washington.edu/jaw/COURSES/580s/581/LECTNOTES/ch8b.pdf) | §2 empirical/bootstrap laws; §3 delete-one definitions and pseudovalues; §4 Theorem 4.1 and its complete conditional sample-mean CLT proof (PDF pp. 14–15); §5 Theorem 5.1 and its bootstrap delta proof (PDF pp. 25–26); Example 2.1 for the median (PDF pp. 5–6). For `lem-finite-bootstrap-cdf-supremum-is-measurable`, §2 is setup context only; the finite-maximum measurability proof is local. The local carriers give the assigned finite enumeration and jackknife theorem proof. No §6 content is claimed: the retrieved PDF ends after §5. |
| P. J. Bickel, F. Götze, and W. R. van Zwet (1997), “Resampling Fewer Than n Observations: Gains, Losses, and Remedies for Losses,” complete 31-page article. [Full text](https://www3.stat.sinica.edu.tw/statistica/oldpdf/a7n11.pdf) | §2.2 gives sample-mean bootstrap-success context; §2.3, Example 6 (PDF p. 7), gives the nondifferentiable absolute-mean failure mechanism for `cex-iid-bootstrap-inconsistency-at-absolute-mean-kink`. The local Rademacher counterexample proof is complete. m-out-of-n remedies and higher-order regimes are deferred to BCS-49. |
| Stanford LCS Technical Report 19 / BIO 101 duplicate scan. [Full PDF](https://stacks.stanford.edu/file/xv648rw7816/xv648rw7816_LCS-19.pdf) | Full PDF fetched; its scanned pages have no usable text layer. Duplicate context only; all relevant Efron–Tibshirani claims are supported by the readable Springer article and the local arguments. |

`source-fetch-check --stamp` recorded 3/4 fetch-verified sources and 4/4 resolved sources. The direct Springer PDF URL hit a cookie-consent wall on the initial request and five recovery retries. The complete 35-page article was nevertheless opened from the official Springer article page and inspected in the browser. The `dropped` source-resolution status applies only to automated fetch-backed evidence for that Springer URL; it does not drop any mathematical claim. Search also found a Stanford duplicate and a related Project Euclid PDF route; the latter returned an 81-character HTML response and was not used. The UW and Bickel full texts fetched and stamped successfully. No further retries were made after the five recovery attempts.

## Axioms and mathematical limits

The conditional CLT assumes AC because its Lindeberg–Feller and normal-law/CDF suppliers require it. The smooth-statistic theorem inherits AC through that conditional CLT, the multivariate IID CLT, and the multivariate normal law. The BC and BCa algorithms separately assume AC only for the standard-normal law and quantile; their finite sorting, counting, delete-one calculations, and branch checks are choice-free. The finite empirical bootstrap space and the subsequence selection are choice-free; the selection uses the well-ordering principle, and threshold extension uses the reciprocal Archimedean corollary. The conditional proof states the finite-second-moment and positive projected-variance hypotheses and proves the empirical tail Lindeberg control, the conditional CLT, and the uniform CDF upgrade. The smooth-statistic theorem uses the local Fréchet-delta expansion and explicitly makes no interval-coverage claim.

The algorithms define finite procedures only. No validity or coverage assertion is attached to the percentile, basic, BC, BCa, or bootstrap-t intervals. The nondifferentiability counterexample is local and fully verified; literature is used for context, not as a substitute for its proof.

The finite checks recorded for the examples are: for the lower sample median and observed data `(0,0,1)`, all `3^3=27` tuples give 20 zero medians and 7 one medians; the lower quantiles at `1/6` and `5/6` are 0 and 1, yielding percentile endpoints `[0,1]` and basic endpoints `[-1,0]`. For sample `(1,2,3)`, delete-one pseudovalues are exactly `(1,2,3)`, and both the jackknife variance and unbiased sample variance divided by `n` equal `1/3`.

## Checks and readiness

Final scoped checks on 2026-10-15:

- Batch-only dependency-level recomputation: 19 items, levels 0–5, zero errors. The full item check has no batch-51 finding; it reports 40 empty page inventories across 20 other pairs and 10 declared-vs-computed level mismatches on other items.
- Focused `depcheck`: all 19 items and both pages, 1,624-item / 374-page prerequisite closure, zero errors and warnings.
- `content-policy`: 19 items, zero errors and warnings.
- `manifest-deps`: 19 manifest items, all with explicit `deps` arrays, zero errors.
- Phase `precheck`: 19 files, 11 proof-bearing items checked, zero failures.
- `proof-contract.mjs --strict`: all 19 contracts checked, zero errors and warnings.
- `proof-layout.mjs` on all 19 assigned item paths: 19 items, 36 steps, zero defects.
- `rendercheck.mjs`: all 19 assigned items and both pages (21 files), zero errors and warnings.
- `source-fetch-check --stamp`: 3/4 fetch-verified and 4/4 resolved, with the Springer transport drop documented above.
- `source-resolution.mjs`: the one documented dropped-fetch record passes its attempt/search/alternative-proof structure check.
- A final `step1-decisions.mjs record` attempt for the new measurability lemma failed before writing because `loadStep3` cannot parse an unrelated run coverage file. The 18 earlier records predate the final theorem/manifest update and are not claimed as current; the new lemma has no record. After the owner repairs the JSON blocker below, refresh and hash-check all 19 batch-51 records without `--owner`. These records are authoring readiness only and do not constitute independent approval.

The shared `batch-dependency-levels` snapshot needs owner reconciliation. The current saved artifact has input hash `3c923c4741e14eb21bd8f4643f897e341fc7f0bb011645fe2e91713dd37cc2d8` and records batch 51 at level 1 with prerequisite batch 50. A fresh recomputation/check cannot currently finish: its `loadStep3` input scan stops at the malformed batch-26 coverage JSON described below. The task supplied the earlier scheduling input `4353922e2bc21330b8d06b628923b2b91b410a0bed9abbcf2167572e3af83d9d`. After the JSON repair, the owner should recompute and reconcile the shared digest; this batch did not edit the shared artifact.

The final readiness-record attempt is blocked by malformed JSON in the unassigned `research/bayesian-computational-statistics-62-batch-26.coverage.json`: line 173 contains raw `\|` escapes in the `support` string (`$(b-a)h^2\|f''\|_\infty/12$`). `step1-decisions.mjs record` and the batch dependency recomputation both fail while reading this file with “Bad escaped character in JSON” at position 12256. This file belongs to another pair and was left untouched.

The final full item-level check reports empty inventories for both pages of these 20 other pairs: `marginal-likelihoods-bayes-factors-and-empirical-bayes`, `misspecified-posterior-consistency`, `parametric-bernstein-von-mises-and-misspecification`, `gaussian-process-support-and-concentration`, `gaussian-process-posterior-contraction`, `dirichlet-normal-mixture-contraction`, `functional-bayesian-limits-and-credible-set-calibration`, `adaptive-empirical-bayes-credible-set-calibration`, `mcmc-clt-and-monte-carlo-standard-error`, `adaptive-mcmc-convergence-and-limitations`, `mcmc-diagnostics-and-finite-run-limitations`, `kalman-smoothing-and-rts-recursion`, `smc-clts-error-and-degeneracy`, `particle-smoothing-backward-simulation-and-rbpf`, `particle-mcmc-pmmh-and-particle-gibbs`, `data-assimilation-variational-and-ensemble-methods`, `abc-mcmc-and-sequential-abc`, `randomized-quasi-monte-carlo-and-replicates`, `synthetic-likelihood-and-indirect-inference`, and `identifiability-and-approximation-bias-in-computational-inference`. It also reports ten other item-level mismatches: `rem-em-ascent-does-not-imply-global-optimality-or-convergence` (declared 3, computed 5); `def-approximate-bayesian-computation` (0 vs 2); `alg-abc-rejection` (1 vs 3); `thm-abc-zero-tolerance-target-is-summary-posterior-under-density-regularity` (1 vs 3); `thm-sufficient-summary-recovers-full-posterior` (1 vs 4); `thm-abc-rejection-target-is-tolerance-conditioned-posterior` (2 vs 4); `cex-abc-zero-tolerance-limit-fails-without-integrable-envelope` (2 vs 4); `ex-abc-finite-sample-sufficient-summary` (3 vs 5); `cex-identifiable-model-with-insufficient-abc-summary` (3 vs 5); and `ex-abc-vanishing-acceptance-rate` (3 vs 5). None is owned by batch 51; no other pair was edited.

The live `.autopilot/bayesian-computational-statistics-62` status still shows the run active, no worker in flight, and a separate stage-1 scaffold blocker: an item handoff YAML parse error at line 3 for the unquoted title `Uniform endpoint: ordinary bootstrap failure and the m-out-of-n remedy`, plus the owner repair/recertification blocker in `research/bayesian-computational-statistics-62-step1-blockers.json`. These findings belong to the run controller/other pair and were not changed. The assigned carriers, pages, manifest, coverage, proof contracts, cross-batch input, and these notes are handoff-complete; final Step 1 readiness records remain outstanding pending repair of the run-level JSON blocker.
