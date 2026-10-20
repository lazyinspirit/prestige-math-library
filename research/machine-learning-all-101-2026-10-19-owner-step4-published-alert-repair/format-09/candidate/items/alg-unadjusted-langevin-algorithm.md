---
id: alg-unadjusted-langevin-algorithm
kind: algorithm
title: Unadjusted Langevin algorithm (ULA)
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - alg-gradient-descent
  - def-axiom-of-choice
  - def-borel-and-lebesgue-measurable-function-on-rn
  - def-jacobian-matrix-and-gradient
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-measure-with-density
  - def-multivariate-normal-law
  - def-probability-measure
  - def-standard-normal-and-normal-laws
justified_by:
  - lem-langevin-gaussian-proposal-kernel
axiom_use: "AC is inherited from the standard and multivariate normal laws; the IID sequence is a randomness input contract, not a choice made by this procedure."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Alain Durmus and Éric Moulines, Non-asymptotic convergence analysis for the Unadjusted Langevin Algorithm, §1, equation (2)"
      url: "https://arxiv.org/pdf/1507.05021v3"
      locator: "Complete 37-page paper; §1, equation (2), PDF p. 2: fixed-step Euler update with IID standard Gaussian vectors."
    - title: "Gautam Iyer, Lecture 20: Langevin Monte Carlo, course notes, §3"
      url: "https://geometrycollective.github.io/monte-carlo/notes/Lecture20/Lecture20.pdf"
      locator: "Complete 5-page lecture note; §3, PDF p. 3: ULA update and the warning that its step size changes the stationary distribution."
---

## Definition

Assume AC (The Axiom of Choice). Let $d\ge1$, let $U:\mathbb R^d\to\mathbb R$ be Borel measurable
in the sense of Borel measurable and Lebesgue measurable functions on $\mathbb{R}^n$ and
continuously differentiable with
$$0<Z_U:=\int_{\mathbb R^d}e^{-U(x)}\,dx<\infty,$$
and define the target probability
$$\pi_U(dx):=Z_U^{-1}e^{-U(x)}\,dx.$$
This is the measure with density $Z_U^{-1}e^{-U}$ relative to Lebesgue measure
(The measure with density $f$ relative to $\mu$ and Lebesgue measurable sets, the family $\mathcal{L}(\mathbb{R}^n)$, and the restricted set function $\lambda_n$);
the probability-measure convention is Probability measures and probability spaces, and the
normalizer makes its total mass one.
Given a step size $\gamma>0$, an initial state $X_0\in\mathbb R^d$, and an
IID sequence $Z_1,Z_2,\ldots\sim N_d(0,I_d)$, using the multivariate-normal
law of Multivariate normal law, including singular covariance and standard-normal convention of
Standard normal and normal laws, repeat for $k\ge0$:

1. Compute the Euclidean gradient $\nabla U(X_k)$ using the convention of
   The Jacobian matrix of partial derivatives and the gradient in the scalar-valued case.
2. Take the fixed-step gradient update
   $\widetilde X_{k+1}=X_k-\gamma\nabla U(X_k)$, the fixed-step branch of
   Gradient descent.
3. Set
   $$X_{k+1}=\widetilde X_{k+1}+\sqrt{2\gamma}\,Z_{k+1}.$$

The one-step transition law is
$$Q_\gamma(x,\cdot)=N_d(x-\gamma\nabla U(x),2\gamma I_d).$$
The procedure applies the proposal at every step and has no accept/reject
correction. The probability-kernel and density properties of $Q_\gamma$ are
proved in The ULA Gaussian proposal is a probability kernel with a positive density.

## Definition references

[[def-axiom-of-choice]]

[[def-borel-and-lebesgue-measurable-function-on-rn]]

[[def-measure-with-density]]

[[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]

[[def-probability-measure]]

[[def-multivariate-normal-law]]

[[def-standard-normal-and-normal-laws]]

[[def-jacobian-matrix-and-gradient]]

[[alg-gradient-descent]]

[[lem-langevin-gaussian-proposal-kernel]]

## Remarks

The definition only asserts a well-defined Gaussian update. It asserts no
convergence rate, invariant-law existence, or equality of the invariant law
with $\pi_U$; those are separate mathematical claims.
