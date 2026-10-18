---
page: discontinuous-galerkin-methods-examples
title: "Symmetric interior-penalty discontinuous Galerkin — Examples"
status: published
items: []
examples:
  - ex-sipdg-broken-function-is-not-h1
  - ex-sipdg-one-dimensional-interior-jump
  - ex-sipdg-small-penalty-loses-coercivity
---

The interval calculations use a self-contained one-dimensional extension of the jump, average, and penalty formulas, with counting measure on point faces and $h_F$ equal to the common interval-cell length. They compute an exact interior consistency contribution and show that a too-small penalty makes the symmetric form negative on a nonzero test function. A separate broken polynomial example computes its distributional derivative and verifies why a nonzero facet jump is incompatible with global $H^1$ regularity.
