---
page: subgradient-bundle-and-derivative-free-optimization-examples
title: Subgradient bundle and derivative free optimization — Examples
status: draft
items: []
examples:
  - ex-nelder-mead-flat-plateau-stagnation
  - ex-black-box-simulator-direct-search-fit
  - ex-max-affine-bundle-null-and-serious-steps
---

## Examples

These examples calculate a null step followed by a serious step for the max-affine kink $f(x)=|x|$, run direct search on a black-box quadratic using only function values, and exhibit Nelder–Mead meeting both finite tolerances on a flat plateau that is not globally minimizing. Their exact updates and evaluation counts distinguish what a finite run reports from stationarity or global-optimality guarantees.
