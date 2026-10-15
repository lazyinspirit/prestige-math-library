---
page: gaussian-process-posterior-contraction-examples
title: Gaussian-process posterior contraction — Examples
status: published
items: []
examples:
  - ex-degenerate-gp-phi-does-not-bound-unknown-scale-local-mass
  - ex-l2-small-log-density-far-in-hellinger
  - cex-degenerate-gaussian-scale-prior-can-break-arbitrary-concentration-rate
  - ex-log-gaussian-uniform-density-posterior
  - ex-binary-regression-logistic-intercept-gp
  - ex-fixed-design-gaussian-constant-process-and-unknown-scale
---


## Examples

The examples calculate one theorem-covered case in each of the three sampling models and show a norm that fails to control likelihood distance. A degenerate-Gaussian example demonstrates that concentration alone does not supply the usual unknown-scale interval-mass bound, while its uniform scale prior remains covered by the sharper parametric alternative. A separate explicit spiky-prior counterexample proves that the original arbitrary-rate assertion for every lower-bounded scale density would actually be false. This distinguishes a failed sufficient-condition check from posterior failure.
