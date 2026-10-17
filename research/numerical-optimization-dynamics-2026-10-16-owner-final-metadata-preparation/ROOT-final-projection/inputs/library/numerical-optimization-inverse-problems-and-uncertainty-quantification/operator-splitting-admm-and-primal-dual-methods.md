---
page: operator-splitting-admm-and-primal-dual-methods
title: Operator splitting ADMM and primal dual methods
status: draft
requires:
  - sparse-matrix-models-and-kernel-costs
  - inequality-kkt-duality-and-optimality-certificates
  - proximal-gradient-and-accelerated-composite-optimization
  - krylov-methods-and-lanczos-convergence
items:
  - def-maximal-monotone-relation-on-euclidean-space
  - def-saddle-point-for-convex-concave-lagrangian
  - lem-firmly-nonexpansive-picard-iteration-converges
  - lem-one-point-extension-for-finite-dimensional-nonexpansive-map
  - lem-schur-reduction-for-polynomial-unit-disk-roots
  - alg-naive-sequential-three-block-admm
  - alg-two-block-admm-scaled
  - def-fenchel-conjugate-on-finite-dimensional-euclidean-space
  - def-resolvent-of-a-monotone-relation
  - lem-admm-exact-subproblem-optimality-relations
  - lem-fenchel-conjugate-is-proper-closed-convex
  - lem-fenchel-young-equality-characterizes-subgradients
  - thm-maximal-monotone-resolvent-is-firmly-nonexpansive
  - alg-douglas-rachford-splitting
  - alg-pdhg-primal-dual-hybrid-gradient
  - lem-two-block-admm-energy-and-objective-estimates
  - lem-douglas-rachford-map-is-firmly-nonexpansive
  - lem-pdhg-one-step-gap-telescope
  - thm-two-block-admm-residual-objective-and-dual-convergence
  - thm-douglas-rachford-shadow-converges-to-zero-of-sum
  - thm-pdhg-ergodic-saddle-gap-o1k
examples: []
---

This page develops three distinct finite-dimensional methods. Douglas–Rachford splitting is treated for two maximal-monotone relations; its resolvent theorem is proved locally from a one-point nonexpansive extension argument, and the shadow converges when the operator sum has a zero. Two-block ADMM has a separate exact-attainment guard: under a saddle point and attained exact subproblems, the primal residual and objective converge and the unscaled dual sequence converges, while convergence of the primal iterates is not asserted. A finite capped solver reports failure or exhaustion unless it certifies an exact minimizer.

The Chambolle–Pock primal-dual hybrid-gradient recurrence uses proper closed convex objectives, exact proximal updates, and the strict bound $\tau\sigma\|K\|_2^2<1$. Its proved rate is an $O(1/N)$ ergodic saddle-gap bound. It supplies no pointwise objective rate. The A page defines naive sequential three-block ADMM, and the companion examples page proves that its convergence failure can occur; the construction does not weaken the two-block theorem or extend it to nonconvex objectives.

All convergence arguments here are over finite-dimensional real Euclidean spaces and use no additional choice principle. The four declared supplier pages provide optimization-function conventions, prox interfaces, sparse-matrix contracts, and Lanczos bounds; their current bodies and acceptance remain recorded in the batch evidence.
