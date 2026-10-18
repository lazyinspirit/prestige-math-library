---
page: nystrom-product-integration-and-fredholm-error
title: Nystrom product integration and fredholm error
status: draft
requires: [composite-quadrature-rules, gaussian-quadrature, compact-operators-and-riesz-schauder-theory]
items:
  - def-nystrom-quadrature-and-finite-rank-operators
  - lem-finite-node-equation-reconstruction-equivalence
  - lem-continuous-kernel-integral-operator-is-compact-on-C
  - thm-collectively-compact-operator-stability-and-error
  - lem-half-order-singular-integral-exists
  - lem-half-order-kernel-translation-modulus-in-l1
  - thm-nystrom-operator-norm-perturbation-error
  - lem-midpoint-nystrom-collective-compactness-and-consistency
  - def-half-order-product-integration
  - lem-half-order-product-weights-closed-form
  - thm-midpoint-nystrom-smooth-solution-error
  - lem-half-order-product-integration-stability-and-consistency
  - thm-half-order-product-integration-fredholm-error
examples: []
---

This page sets up finite-rank Nyström operators and proves their equivalence with the sampled grid equations. It treats two stability routes separately: an operator-norm perturbation estimate and an AC-dependent collectively compact Fredholm argument. For composite midpoint sampling, it proves pointwise consistency, the solution error bound under smoothness of the actual integrand, and the limitation of operator-norm convergence on the full space of continuous functions. A second section develops piecewise-linear product integration for the kernel $|x-y|^{-1/2}$, including the improper weights, their exact closed forms, the kernel's improper L1 translation modulus, collective compactness, consistency, and a Fredholm error bound. The page keeps the choice assumptions explicit and makes no operator-norm convergence claim for point sampling on $C([0,1])$.
