---
page: radial-basis-and-kernel-interpolation-examples
title: "Radial basis and kernel interpolation — Examples"
status: published
requires:
  - radial-basis-and-kernel-interpolation
items: []
examples:
  - ex-duplicate-rbf-sites-singular-gram-matrix
  - ex-small-fill-distance-can-have-poor-rbf-conditioning
  - ex-smooth-scattered-surface-matern-rate
---

The examples apply the Matérn fill-distance theorem to a smooth Gaussian graph on a cube, show that duplicate sites make the Gram matrix singular, and construct near-duplicate sites whose exact condition numbers diverge even as fill distance tends to zero. The last example isolates separation from fill distance; it makes no floating-point solver or stabilization claim.
