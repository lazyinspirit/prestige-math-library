---
page: crouzeix-raviart-finite-elements
title: "Crouzeix–Raviart finite elements"
status: draft
items:
  - def-crouzeix-raviart-local-p1-element
  - def-crouzeix-raviart-fractional-sobolev-regularity
  - lem-crouzeix-raviart-continuous-poincare
  - lem-crouzeix-raviart-local-face-unisolvence
  - def-crouzeix-raviart-global-space
  - lem-crouzeix-raviart-simplex-traces-and-green-identity
  - def-crouzeix-raviart-poisson-smoothing-index
  - lem-crouzeix-raviart-global-face-basis
  - def-crouzeix-raviart-face-average-interpolant
  - lem-crouzeix-raviart-face-jump-estimate
  - def-crouzeix-raviart-poisson-method
  - lem-crouzeix-raviart-broken-gradient-is-a-norm
  - lem-crouzeix-raviart-local-interpolation-estimates
  - lem-crouzeix-raviart-conforming-companion
  - lem-crouzeix-raviart-comparison-norm
  - thm-crouzeix-raviart-discrete-well-posedness
  - thm-crouzeix-raviart-discrete-poincare
  - lem-crouzeix-raviart-consistency-defect
  - thm-crouzeix-raviart-energy-error-estimate
  - thm-crouzeix-raviart-l2-error-estimate
examples: []
requires:
  - variational-crimes-and-strang-lemmas
---

The P1 Crouzeix–Raviart space consists of cellwise affine functions whose
facet means agree on interior facets and vanish on boundary facets. These
degrees of freedom do not impose pointwise continuity. The chapter constructs
the local and global face bases, defines the face-average interpolant, and
proves trace, interpolation, jump, and discrete Poincare estimates on
matching shape-regular simplex meshes.

For Poisson's problem, cellwise Green identities give a consistency residual;
the face means cancel while the remaining terms are bounded by local trace
fluctuations and jumps. The energy estimate uses the nonconforming second
Strang theorem through a bounded cellwise-gradient extension. The L2 estimate
is conditional on a Dirichlet Poisson smoothing index $s>1/2$. Normal-gradient
traces require $u\in H^{1+r}$ with $r>1/2$; these strict regularity conditions
are part of the claims.
