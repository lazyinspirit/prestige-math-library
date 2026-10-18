---
page: substructuring-feti-dp-and-bddc-preconditioners-examples
title: "Substructuring, FETI-DP and BDDC — Examples"
status: draft
items: []
examples:
  - ex-pe26-missing-primal-corner
  - ex-pe26-two-floating-poisson-subdomains
  - ex-pe26-matching-primal-dual-spectrum
  - ex-pe26-coarse-solve-work-bottleneck
---

These examples calculate a floating Poisson stiffness kernel, show why every floating component needs a primal anchor, verify a BDDC/FETI-DP spectral match in a two-coordinate SPD model, and separate the dense coarse-solve cost from the condition-number estimate. The square-mesh calculation uses exact rational matrices; the spectral example is explicitly an abstract finite-dimensional model, not a mesh discretization.
