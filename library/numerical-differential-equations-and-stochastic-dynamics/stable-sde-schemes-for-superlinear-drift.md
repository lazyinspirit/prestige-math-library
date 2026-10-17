---
page: stable-sde-schemes-for-superlinear-drift
title: Stable sde schemes for superlinear drift
status: published
requires:
  - euler-maruyama-convergence
  - milstein-stochastic-taylor-and-iterated-integrals
  - implicit-stiff-time-stepping-and-algebraic-error
items:
  - def-locally-lipschitz-ito-sde-and-maximal-solution
  - lem-brownian-ito-integral-bdg-moment-bound
  - alg-cir-lamperti-positive-implicit-scheme
  - alg-tamed-euler-superlinear-drift
  - thm-local-sde-existence-and-uniqueness-until-exit
  - lem-cir-lamperti-transform-and-positive-root
  - lem-tamed-euler-uniform-moment-bounds
  - thm-superlinear-sde-global-existence-and-moments
  - alg-drift-implicit-euler-sde
  - thm-cir-positive-solution-and-nonattainment
  - thm-tamed-euler-strong-order-half
  - thm-cir-lamperti-scheme-converges-in-probability
  - thm-drift-implicit-euler-sde-strong-order-half
examples: []
---

This page develops three specific methods for SDEs outside the globally
Lipschitz drift setting. The tamed Euler update replaces $b$ by
$b_h=b/(1+h|b|)$; under a one-sided Lipschitz condition, a polynomial bound
on $Db$, globally Lipschitz diffusion, and all finite initial moments, its
grid values have uniform finite-horizon moments and its continuous
interpolation has strong path-supremum order one-half. The proof keeps the
rare-event moment estimate separate from the error recurrence.

The drift-implicit Euler–Maruyama method applies the backward resolvent to
$Y_n+\sigma(Y_n)\Delta W_n$. For globally dissipative drift with a unique
resolvent and Lipschitz diffusion, the page proves finite-time mean-square
stability and a grid-point strong order-one-half bound under the stated
polynomial derivative and moment assumptions. A failed finite-precision
solve is reported as a failure status and supplies no next scheme value.

For CIR, the page transforms $Z=\sqrt X$ and solves a quadratic implicit
step with a unique strictly positive root under the Feller condition
$2\kappa\theta\ge\sigma^2$. The exact solution is shown to remain positive
and nonexplosive; localization then proves convergence in probability on
finite horizons. No $L^p$ error rate is asserted without further inverse
moment control.
