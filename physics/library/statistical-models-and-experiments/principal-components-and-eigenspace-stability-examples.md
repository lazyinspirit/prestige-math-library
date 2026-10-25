---
page: principal-components-and-eigenspace-stability-examples
title: PCA and eigengap stability — Examples
status: published
items: []
examples:
  - cex-small-eigengap-allows-fixed-angle-rotation
  - ex-covariance-and-correlation-pca-differ-after-rescaling
  - ex-pca-tied-eigenvalues-and-sign-ambiguity
---

## Objective

These finite examples show why a PCA direction may fail to be uniquely
specified at a tie, why a simple eigenvector still has a sign ambiguity, and
why covariance-PCA can change when measurement scales change. The final
counterexample lets the eigengap shrink with the perturbation: the matrix
perturbation tends to zero while the leading line retains a fixed nonzero
rotation. It illustrates why the local bound depends on the gap.
