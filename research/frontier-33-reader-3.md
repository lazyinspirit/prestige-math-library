# Frontier 33 — reader report, batch 3

## Scope opened

Read `research/frontier-33-batch-3.pages.json`, the current coverage and proof-contract artifacts, current batch notes, both assigned pages, and every assigned current item body.

- A page: `weak-laws-and-series-of-independent-random-variables`. Its 27 opened items were: `def-identically-distributed-and-iid-random-variables`, `def-partial-sums-and-sample-means`, `thm-chebyshev-weak-law-for-uncorrelated-arrays`, `cor-iid-finite-variance-weak-law`, `def-truncation-at-a-fixed-level`, `thm-khinchin-weak-law-for-iid-integrable-variables`, `def-almost-sure-convergence-of-a-random-series`, `thm-kolmogorov-maximal-inequality`, `thm-kolmogorov-convergence-criterion`, `cor-kolmogorov-two-series-sufficiency`, `def-symmetric-real-random-variable`, `lem-symmetrization-for-independent-random-series`, `lem-bounded-centered-convergent-series-have-summable-variances`, `lem-three-series-necessity-for-truncated-means-and-variances`, `thm-kolmogorov-three-series-theorem`, `lem-kronecker-summation-lemma`, `thm-kolmogorov-strong-law-under-summable-normalized-variances`, `cor-independent-nonidentical-finite-variance-strong-law`, `lem-one-sided-maximal-inequality-for-symmetric-independent-sums`, `lem-independent-copy-symmetrization-tail-bounds`, `thm-truncation-weak-law-for-independent-arrays`, `lem-vanishing-tail-control-implies-small-truncated-second-moment`, `lem-largest-summand-bound-for-symmetric-independent-variables`, `thm-truncated-centering-criterion-for-an-iid-weak-law`, `lem-levy-maximal-inequality-for-independent-tail-sums`, `lem-cauchy-in-probability-sequences-have-a-measurable-limit`, and `thm-independent-series-probability-and-almost-sure-convergence-agree`.
- B page: `weak-laws-and-series-of-independent-random-variables-examples`. Its 9 opened items were: `ex-weak-law-for-bernoulli-sample-means`, `ex-weak-law-for-independent-nonidentical-variables`, `ex-rademacher-series-convergence-threshold`, `ex-a-random-series-that-converges-conditionally-almost-surely`, `ex-three-series-with-rare-large-jumps`, `cex-weak-law-can-fail-without-tail-control`, `cex-sum-of-variances-condition-is-sufficient-not-necessary-without-further-hypotheses`, `cex-iid-cauchy-averages-have-no-deterministic-weak-centering`, and `ex-truncated-centering-weak-law-with-infinite-mean`.
- Opened every direct mathematical dependency needed by those arguments: independent-copy/product constructions, independence and factorization, moments/variance/covariance, convergence modes and completeness, Borel--Cantelli, measure continuity and subadditivity, layer-cake and dominated convergence, finite-sum/series/Abel/integral/p-series/alternating-series results, and the relevant Bernoulli and distribution-function items. All 46 direct dependency files named by the manifest were current readable files; none was missing.

## Independent source checks

Opened the cited current PDFs: Durrett, *Probability: Theory and Examples*, sections 2.2 and 2.5; Varadhan, Chapter 3, especially the maximal inequalities, one-/two-/three-series results and the bounded-variance necessity argument; and Roch Notes 4 and 5, including the triangular-array weak law, tail criterion, largest-summand estimate, and symmetric maximal inequality. The source statements agree with the local claims. The local proofs retain strict/non-strict threshold distinctions and establish the atom-sensitive largest-summand and symmetrization steps directly.

## Reading result

The finite-row weak law has the required square-integrability, pairwise uncorrelatedness, positive normalizer, and empty-row handling. The IID and integrable weak laws preserve the exact moment hypotheses. The maximal, one-/two-/three-series, and normalized-variance arguments correctly keep independence, truncation cutoff, deterministic-normalizer, and probability-one-event scopes. The Cauchy-in-probability argument proves a finite measurable limit rather than silently choosing a path.

The examples correctly separate failure of an array weak law without the variance/tail condition; almost-sure convergence from finitely many rare jumps despite divergent untruncated variances; the three independent three-series obstructions; the Rademacher square-summability and absolute-convergence thresholds; and the exact truncated-centering tail criterion. The Cauchy and logarithmic-tail constructions have the stated endpoint and atom corrections.

## Edits and findings

No defect was confirmed. No item, page prose, proof contract, or verification record was edited. The structured findings artifact therefore has no entries.

## Page verdicts and checks

- A page: pass. Its title and summary accurately distinguish variance weak laws, integrable IID weak laws, independent-series criteria, and deterministic truncated centering; its finite-real, indexing, cutoff, and measurable probability-one-event conventions match the items.
- B page: pass. Its summary distinguishes IID from nonidentical constructions, variance/tail control, conditional from absolute convergence, and the Cauchy and logarithmic-tail centering boundaries without overclaiming a mean.

Focused validation passed: `tools/precheck.mts` checked all 31 proof-bearing assigned items (0 failures); `tools/rendercheck.mjs` checked both pages and all 36 assigned items (38 files, clean); `tools/content-policy.mjs` reported 36 scoped items with 0 errors/warnings; and `tools/proof-contract.mjs --strict` reported 31/31 checked with 0 errors/warnings. The structured findings JSON also parses. Blockers: none.
