---
page: td-math-nonsmooth-equilibrium
title: Nonsmooth Equilibrium
status: draft
library: mathematics
items:
  - def-tdmath-extended-convex-function
  - def-tdmath-fenchel-transform-and-subgradient
  - lem-tdmath-extended-convex-epigraph-equivalence
  - lem-tdmath-closed-convex-separation
  - lem-tdmath-fenchel-young-equality
  - thm-tdmath-finite-dimensional-biconjugation
  - thm-tdmath-fenchel-attainment
  - thm-tdmath-finite-mixture-envelope
  - cor-tdmath-ordered-finite-mixture-envelope
  - lem-tdmath-lever-rule
  - lem-tdmath-concave-affine-maximizer-and-hessian
  - lem-tdmath-constrained-curvature
  - lem-tdmath-stoichiometric-tangent-cone
  - thm-tdmath-local-implicit-rank
  - thm-tdmath-phase-dimension
examples: []
---

This page develops finite-dimensional convex analysis and local equilibrium mathematics. It defines proper extended-real convex functions, lower semicontinuity, Fenchel conjugates and subgradients; proves epigraph characterizations, strict separation, Fenchel equality, and biconjugation; and gives an explicit coercive-tilt attainment result. The separation and biconjugation arguments include the vertical-separator case, including points outside the effective domain.

The finite-mixture result is restricted to a finite list of data: its minimum is attained on a simplex, its envelope is proper, closed and convex, and occupied points satisfy one supporting-affine equality. A conditional corollary transfers this conclusion to an additive compound representation only under the exact batch-3 interface and an affine coordinate assignment. The required page [[td-math-ordered-composition]] and its current additive-representation proof are present, with owner Step 1 proof-readiness recorded. This supplies the authored prerequisite context; both suppliers remain draft and independent review is pending. The corollary is conditional on the exact representation hypotheses, not an assertion of physical adoption or prior review acceptance. The scalar lever rule records its endpoint and uniqueness cases.

The remaining results keep smooth and nonsmooth claims separate. The concavity lemma proves supporting bounds along admitted segments, global stationary maxima on the stated affine slices, and local Hessian semidefiniteness without assuming convexity of an entire state domain. The constrained-curvature test assumes a continuous second directional form and stationarity on an affine feasible slice. The stoichiometric lemma proves the tangent cone for finite linear species-balance inequalities and states the directional optimality condition. The local implicit-rank theorem yields a graph only at a nonsingular derivative minor; the phase-dimension count is conditional on that rank and on interior composition coordinates. These are mathematical deductions and make no empirical claim about an actual material or equilibrium.
