---
page: coordinate-and-block-descent-methods
title: Coordinate and block descent methods
status: draft
requires:
  - sparse-high-dimensional-estimation-and-covariance
  - proximal-gradient-and-accelerated-composite-optimization
items:
  - alg-randomized-coordinate-gradient-descent
  - lem-coordinate-block-smoothness-descent-model
  - lem-na-coordinate-soft-threshold-minimizer
  - alg-cyclic-exact-block-minimization
  - thm-randomized-coordinate-gradient-descent-rates
  - lem-cyclic-block-minimizer-value-continuity
  - cex-cyclic-block-descent-may-cycle-outside-hypotheses
  - lem-coordinate-lasso-soft-threshold-update
  - lem-coordinate-separable-penalty-is-proper-closed-convex
  - alg-randomized-coordinate-proximal-descent
  - lem-coordinatewise-minimum-implies-composite-stationarity
  - lem-randomized-coordinate-prox-subproblem-well-defined
  - cex-composite-coordinate-proximal-rate-needs-penalty-error
  - cex-composite-strong-convexity-alone-does-not-give-coordinate-factor
  - thm-cyclic-block-descent-stationarity-and-convergence
  - thm-randomized-coordinate-proximal-strongly-convex-contraction
  - thm-randomized-coordinate-proximal-composite-strong-convexity-contraction
examples: []
---

This page defines randomized coordinate-gradient and proximal updates, cyclic exact block minimization, and the Lasso coordinate formula. It proves finite separable block penalties are proper, closed, and convex by a local neighborhood argument that does not invoke sequential closure. Its smooth-gradient branch proves a finite-horizon expected $O(nL_{\max}R^2/k)$ bound and importance-sampling constants; the proximal branch proves well-defined updates and error recurrences both under strong convexity of the composite and, with a sharper factor, of the smooth term. It gives no penalty-independent $R$-only rate. Cyclic convergence is established only for convex separable composites with compact sublevels and unique continuous block-minimizer maps. A finite closed nonconvex domain shows why arbitrary tie selections need a cycling caveat. The canonical Lasso objective, minimizer existence theorem, and orthogonal-design soft-threshold example remain on the sparse-estimation page.
