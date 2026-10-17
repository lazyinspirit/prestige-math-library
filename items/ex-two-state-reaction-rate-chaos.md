---
id: ex-two-state-reaction-rate-chaos
kind: example
title: A two-state uncertain reaction rate has an exact degree-one chaos expansion
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-finite-product-chaos-input
  - lem-positive-moment-gram-produces-univariate-chaos-polynomials
  - def-chaos-orthonormal-tensor-basis
  - thm-finite-chaos-projection-parseval-and-moments
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-17}}
proof_strategy: direct
---

## Example

Let $Y$ take the values $-1$ and $1$ with probability $1/2$ each, choose
cutoff $p_1=1$, and let the uncertain positive reaction rate be
$k(Y)=\kappa(1+\eta Y)$ with $\kappa>0$ and $|\eta|<1$. Its degree-one chaos
expansion is exact, with mean $\kappa$ and variance $\kappa^2\eta^2$.

## Facts & Assumptions

**Given:** The symmetric two-point probability law and the rate parameters $\kappa>0$, $|\eta|<1$.

[F1] [[def-finite-product-chaos-input]] requires finite moments and a positive-definite monomial Gram matrix through the chosen cutoff.

[F2] [[lem-positive-moment-gram-produces-univariate-chaos-polynomials]] constructs the normalized degree-zero and degree-one polynomials.

[F3] [[thm-finite-chaos-projection-parseval-and-moments]] identifies the constant and first nonconstant coefficients with mean and variance contributions.

## Verification

1.1 The first two moments are $\mathbb E[Y]=0$ and $\mathbb E[Y^2]=1$, so the degree-one Gram matrix is $\begin{pmatrix}1&0\\0&1\end{pmatrix}$, positive definite. Thus [F1] applies. Gram--Schmidt gives $\psi_0=1$ and $\psi_1=Y$, since $Y$ already has mean zero and unit norm and its leading coefficient is positive. [F1, F2, given, algebra]

2.1 Substitution gives $k(Y)=\kappa\psi_0+\kappa\eta\psi_1$ at both support points, so the degree-one projection residual is identically zero. Its coefficients are $c_0=\mathbb E[k(Y)]=\kappa$ and $c_1=\mathbb E[k(Y)Y]=\kappa\eta$. By [F3], the mean is $c_0$ and variance is $c_1^2=\kappa^2\eta^2$. [F3, step 1.1, algebra]

3.1 The condition $|\eta|<1$ implies $1+\eta Y\ge1-|\eta|>0$ at both states, so the reaction rate is positive on its whole support. Every function on this support also has the exact form $g(Y)=\frac{g(1)+g(-1)}2+\frac{g(1)-g(-1)}2Y$; hence this two-dimensional finite basis spans $L^2(\rho)$ for this particular law. [given, step 1.1, algebra] ∎