---
id: alg-christoffel-weighted-least-squares-collocation
kind: algorithm
title: Christoffel-weighted least-squares polynomial collocation
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-chaos-orthonormal-tensor-basis
  - def-chaos-total-degree-and-hyperbolic-cross-index-sets
justified_by: [lem-christoffel-sampling-law-and-gram-mean]
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: None. Sampling uses a finite product probability measure and finite sums.
verification:
  precheck: n/a
sources:
  references:
    - title: Albert Cohen and Giovanni Migliorati, Optimal Weighted Least-Squares Methods, §§2–3
      url: https://arxiv.org/pdf/1608.00512
    - title: Dongbin Xiu, Fast Numerical Methods for Stochastic Computations, §5
      url: https://publications.sci.utah.edu/publications/xiu09/Xiu_CiCP2009.pdf
---

## Definition

Let $\Lambda$ be finite, contain $0$, and let
$\psi=(\psi_\alpha)_{\alpha\in\Lambda}$ be the real orthonormal basis of
[[def-chaos-orthonormal-tensor-basis]]. Set $N=|\Lambda|$ and
$$K_\Lambda(y)=\sum_{\alpha\in\Lambda}|\psi_\alpha(y)|^2.$$
The algorithm takes an evaluable real function $u$, a positive integer sample
count $M$, and independent samples $X_1,\ldots,X_M$ from the probability law
$d\nu=(K_\Lambda/N)\,d\rho$. It forms
$$G=\frac1M\sum_{i=1}^M\frac{N}{K_\Lambda(X_i)}\psi(X_i)\psi(X_i)^T,\qquad b=\frac1M\sum_{i=1}^M\frac{N}{K_\Lambda(X_i)}u(X_i)\psi(X_i).$$
If every eigenvalue of $G$ lies in $[1/2,3/2]$, return the unique coefficient
vector $c=G^{-1}b$ and polynomial $\hat u=\sum_{\alpha\in\Lambda}c_\alpha\psi_\alpha$.
Otherwise return `unstable-sample` and no coefficients. The weighted empirical
objective minimized on the accepted branch is
$$\frac1M\sum_{i=1}^M\frac{N}{K_\Lambda(X_i)}|u(X_i)-p(X_i)|^2,$$
over $p\in\mathcal P_\Lambda$.
