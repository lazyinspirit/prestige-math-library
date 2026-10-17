---
id: def-uniformly-elliptic-affine-random-diffusion
kind: definition
title: Uniformly elliptic affine random diffusion model
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-finite-product-chaos-input
  - def-finite-input-bochner-l2-space
  - lem-parabolic-zero-boundary-sobolev-space-is-separable
  - def-countable-choice
justified_by: [lem-affine-form-integrable-on-bochner-l2]
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: Countable Choice is needed by the H0^1 Hilbert-space supplier and the Lax–Milgram use in the well-posedness theorem; no Axiom of Choice is added.
verification:
  precheck: n/a
sources:
  references:
    - title: Ivo Babuška, Fabio Nobile, and Raúl Tempone, A Stochastic Collocation Method for Elliptic Partial Differential Equations with Random Input Data, §1
      url: https://www.ices.utexas.edu/media/reports/2005/0547.pdf
    - title: Bruno Sudret, Polynomial Chaos Expansions and Stochastic Finite Element Methods, §4
      url: https://ethz.ch/content/dam/ethz/special-interest/baug/ibk/risk-safety-and-uncertainty-dam/publications/reports/RSUQ-2015-008.pdf
---

## Definition

Let $D\subset\mathbb R^m$ be a bounded polyhedral open set and
$V=H_0^1(D;\mathbb R)$ with norm $\|v\|_V=\|\nabla v\|_{L^2(D)}$.
[[lem-parabolic-zero-boundary-sobolev-space-is-separable]] supplies the
separable Hilbert structure under Countable Choice; the gradient norm is
equivalent to its Sobolev norm there.

Let $Y=(Y_1,\ldots,Y_d)$ have the product law $\rho$ of
[[def-finite-product-chaos-input]], and assume its support $\Gamma$ is bounded,
so $|y_j|\le R_j<\infty$ for every $y\in\Gamma$.
For real coefficient functions $a_0,\ldots,a_d\in L^\infty(D)$ define
$$a(x,y)=a_0(x)+\sum_{j=1}^d y_j a_j(x).$$
Assume constants $0<a_*\le a^*<\infty$ satisfy, for every $y\in\Gamma$,
$a_*\le a(x,y)\le a^*$ for almost every $x\in D$. This explicit
all-parameter condition ensures the pointwise variational problem is
well-posed for every stated parameter, not merely almost every one. Let
$F(y)=f_0+\sum_{j=1}^d y_j f_j$ with $f_j\in V^*$.

The pointwise weak form is
$$a_y(u,v)=\int_Da(x,y)\nabla u(x)\cdot\nabla v(x)\,dx=F(y)(v),\qquad v\in V.$$
The Bochner weak form uses the bilinear form
$$\mathcal A(U,W)=\int_\Gamma a_y(U(y),W(y))\,d\rho(y)$$
and the functional $\mathcal F(W)=\int_\Gamma F(y)(W(y))\,d\rho(y)$ on
$L^2_\rho(V)$ from [[def-finite-input-bochner-l2-space]].
