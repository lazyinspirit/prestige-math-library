---
page: robust-covariance-and-high-dimensional-stability
title: Robust Covariance and Sparse Robust Estimation
status: published
items:
- def-covariance-matrix-of-a-random-vector
- lem-finite-dimensional-golden-thompson-trace-inequality
- lem-matrix-depth-gaussian-scale-constant-exists-uniquely
- lem-projection-slab-uniform-deviation
- def-bounded-spectrum-covariance-class
- def-matrix-variance-of-a-random-vector
- lem-bounded-independent-matrix-bernstein-via-trace-exponential
- lem-finite-second-moment-covariance-matrix-is-well-defined
- alg-adaptive-truncated-covariance-estimator
- def-block-sparse-covariance-class
- def-huber-covariance-model
- lem-covariance-median-pilot-exact-block-budget
- lem-matrix-variance-intrinsic-dimension-at-least-one
- lem-oracle-truncated-covariance-and-vector-concentration
- def-matrix-depth-covariance-estimator
- lem-adaptive-truncated-covariance-estimator-is-total
- lem-fixed-scale-truncated-covariance-deviation
- lem-huber-covariance-mixture-is-a-probability-measure
- lem-adaptive-covariance-lepski-scale-reduction
- lem-matrix-depth-maximizer-exists-on-compact-classes
- lem-scaled-gaussian-covariance-has-depth-at-least-half
- lem-huber-covariance-ambient-action-tail-lower-bound
- lem-huber-covariance-contamination-modulus-lower-bound
- lem-huber-matrix-depth-estimator-operator-error
- lem-measurable-matrix-depth-maximizer-selection
- thm-heavy-tailed-covariance-bound
- lem-clean-block-sparse-gaussian-covariance-minimax-lower-bound
- lem-clean-dense-gaussian-covariance-minimax-lower-bound
- thm-huber-covariance-upper-and-lower-risk
- thm-huber-sparse-covariance-upper-and-lower-risk
examples: []
---












This page separates two observation models that can produce different
covariance guarantees. Under Gaussian Huber contamination, an arbitrary
probability law contaminates an iid sample while the target remains the clean
Gaussian covariance. Under a clean heavy-tail model, the sample is uncorrupted
and the finite matrix variance controls the covariance procedure. It proves
dense and single-block sparse Gaussian Huber rates in squared operator norm,
with global and bounded-class Borel maximizing selectors. A local
trace-aware theorem proves the clean heavy-tail guarantee under
$D=\max\{d,(\operatorname{tr}\Sigma/\sigma_0)^2\}$ and the stated sample
condition, including the same-sample pilot. Separate counterexamples refute
the source's two-axis trace comparison and its former intrinsic-ratio-only
pilot guarantee; they do not refute the trace-aware theorem.

## Clean heavy-tail covariance

The radial-truncation estimator retains its original same-sample geometric-
median pilot and adaptive scale rule. Its complete proof separates ambient
dimension from intrinsic matrix variance. Local Golden–Thompson and matrix
Bernstein arguments give a known-mean bound for every sample size; a uniform
pilot-ball comparison handles a pilot computed from the same observations.
A trace-aware sufficient sample condition gives the fixed-scale and adaptive
constants three and eighteen for every clean finite-fourth-moment law.
The adaptive proof pays the common pilot failure once and recovers the
unrounded logarithmic probability factor through sharper event budgets.
The companion axis-family counterexample shows why the former intrinsic-
ratio-only sample condition fails, independently of the separate two-axis
counterexample to the source trace inequality.
