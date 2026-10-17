---
page: finite-element-meshes-and-interpolation
title: "Finite-element meshes and interpolation"
status: draft
items:
  - def-matching-affine-simplicial-meshes
  - def-oriented-simplicial-cell-chains
  - lem-simplicial-boundary-squared-zero
  - def-broken-and-conforming-polynomial-spaces
  - def-reference-finite-element-and-unisolvent-dofs
  - lem-unisolvent-dofs-define-reference-interpolant
  - lem-reference-polynomial-norm-equivalence
  - lem-affine-pullback-weak-derivatives-and-scaling
  - lem-shape-regular-affine-simplex-scaling
  - lem-oriented-facet-cancellation-on-matching-meshes
  - lem-affine-simplex-gauss-green-formula
  - lem-smooth-density-on-reference-simplex
  - thm-reference-simplex-sobolev-extension
  - thm-reference-simplex-trace-and-gauss-green
  - thm-matching-continuous-piecewise-polynomials-are-wkp
  - thm-zero-boundary-piecewise-polynomials-in-w10p
  - thm-reference-simplex-poincare-wirtinger
  - thm-bramble-hilbert-on-reference-simplex
  - thm-local-finite-element-interpolation-estimates
  - thm-polynomial-inverse-and-discrete-trace-estimates
  - def-covariant-contravariant-piola-maps-and-hdiv-hcurl
  - thm-affine-piola-differential-and-trace-moment-identities
  - lem-affine-piola-transport-preserves-commuting-interpolation
  - thm-lagrange-point-evaluation-threshold-on-reference-simplex
examples: []
---

A finite face-to-face affine simplicial mesh is the setting for the interpolation and differential identities on this page. The construction fixes an orientation-preserving reference map and the diameter-to-inradius shape-regularity convention; curved cells are outside this scope. Oriented simplex chains, matching-facet cancellation, affine-simplex Gauss–Green, Sobolev extension, face traces, and Poincare–Wirtinger are established locally where the bounded C1-domain suppliers do not apply.

For conforming piecewise polynomials, equal interior traces give the weak cellwise gradient, while zero boundary facet values yield membership in the W0 closure and its Poincare estimate. Reference finite elements are stated conditionally on unisolvent, bounded degrees of freedom. Bramble–Hilbert and affine scaling give local interpolation, inverse, and discrete-trace estimates. Point-evaluation boundedness is proved for $\ell>d/p$ when $p<\infty$, and for $p=\infty$. The two-dimensional $W^{1,2}$ counterexample proves unboundedness at that critical case; no other threshold cases are characterized.

The covariant and contravariant Piola maps are defined with det A>0. Their weak gradient, divergence and curl identities and normal/tangential moment transformations are proved on affine simplices. Transfer of a commuting interpolation diagram is conditional on the corresponding reference diagram, so arbitrary unisolvent elements are not asserted to commute.
