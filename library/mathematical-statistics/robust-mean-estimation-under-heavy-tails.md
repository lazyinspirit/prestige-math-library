---
page: robust-mean-estimation-under-heavy-tails
title: "Robust Means under Heavy Tails"
status: published
items:
  - lem-variance-sensitive-bounded-empirical-process-concentration
  - alg-geometric-median-of-block-means
  - alg-multivariate-trimmed-mean
  - alg-univariate-trimmed-mean
  - lem-absolutely-continuous-upper-quantile-exact-tail-mass
  - lem-finite-covariance-matrix-basic-properties
  - lem-positive-real-has-dyadic-scale-in-factor-two
  - cex-correct-scale-trimming-slab-radius-four-is-false
  - cex-excess-tail-functional-does-not-bound-trimmed-mean
  - cex-univariate-clean-quantile-count-exponent-is-false
  - lem-geometric-median-majority-radius-bound
  - lem-measurable-minimum-norm-geometric-median-selection
  - lem-multivariate-trimmed-mean-selector-total-and-measurable
  - lem-univariate-trimmed-mean-total-and-measurable
  - lem-multivariate-mean-rate-given-correct-scale-event
  - lem-zero-covariance-multivariate-trimmed-mean-exact
  - prop-correct-scale-multivariate-trimming-slab-bound
  - thm-finite-variance-geometric-median-mean-bound
  - thm-univariate-trimmed-mean-under-replacement
  - thm-multivariate-trimmed-mean-under-replacement
examples: []
---

This page separates clean finite-variance estimation from estimation after adversarial sample replacement. Under Countable Choice, the Hilbert geometric median-of-means has a total Borel minimum-norm selector and, for iid Borel data in a separable real Hilbert space with finite second moment, a trace-covariance guarantee. The split-sample univariate estimator has both stated confidence bounds, using the raw centered-tail functional; separate counterexamples distinguish that upper bound from the excess-tail lower-bound functional and refute a source clean-count exponent. Exact count thresholds and wider comparison quantiles provide alternative complete proofs without changing the procedure or its sound constants.

For multivariate trimming, a local entropy and ghost-coordinate argument proves the needed variance-sensitive bounded empirical-process bound. Uniform absolute-tail counts and a symmetric clipped process then give the correct-scale slab event, dyadic nesting and the full covariance-sensitive mean rate. The former four-Q0 radius is refuted explicitly and corrected to sixteen-Q0. The conditional rate lemma retains its original constant as the b=4 specialization and also covers the corrected b=16 event. Totality, measurability and the zero-covariance case remain separate proved suppliers; the stated contamination/confidence domains and absolute-continuity caveat remain explicit.
