---
id: cor-duffy-weighted-product-gauss-error
kind: corollary
title: The Duffy weighted product rule has an explicit bound using pure coordinate derivatives
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
deps: [alg-duffy-weighted-product-gauss-quadrature, thm-duffy-weak-singularity-transform, thm-gaussian-product-rule-error-bound, thm-gauss-jacobi-exactness-and-derivative-error, lem-gauss-jacobi-weight-finite-moment-measure, lem-real-power-improper-integral, def-countable-choice, def-factorial-and-falling-factorial, lem-nat-finite-sum-laws-and-the-canonical-embedding]
proof_strategy: direct
axiom_use: Countable Choice is used only through the weighted Gaussian rules.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: Imperial College London, Numerical quadrature, Finite Element course notes, §1.6
      url: https://finite-element.github.io/1_quadrature.html
      locator: §1.6, tensor-product quadrature following the Duffy transformation.
    - title: Christopher J. Bishop, The Riemann Mapping Theorem, Chapter 3 §3, Gauss-Jacobi quadrature lecture notes
      url: https://www.math.stonybrook.edu/~bishop/classes/math401.F09/t.pdf
      locator: Chapter 3 §3, Gauss–Jacobi nodes, weights, and derivative remainder.
---

## Statement

Assume Countable Choice, let $\alpha<2$, $\rho=1-\alpha$, $n\ge1$, and let $G\in C^{2n}$ in each coordinate on $[0,1]^2$. Let $\widetilde p_{n,\rho}$ and $\widetilde p_{n,0}$ be the monic node polynomials of the pushed-forward Gauss–Jacobi rules for $r^\rho dr$ and $ds$, respectively. Define
$$M_\rho=\int_0^1r^\rho dr=\frac1{\rho+1},\quad K_\rho=\frac1{(2n)!_{\mathbb R}}\int_0^1\widetilde p_{n,\rho}(r)^2r^\rho dr,\quad K_0=\frac1{(2n)!_{\mathbb R}}\int_0^1\widetilde p_{n,0}(s)^2ds.$$
Then the rule of [[alg-duffy-weighted-product-gauss-quadrature]] satisfies
$$\left|\int_T\|(x,y)\|_2^{-\alpha}q(x,y)\,dx\,dy-Q_{n,\alpha}^{D}(G)\right| \le K_\rho\|\partial_r^{2n}G\|_\infty+M_\rho K_0\|\partial_s^{2n}G\|_\infty,$$
where $G$ is the transformed amplitude from [[thm-duffy-weak-singularity-transform]].

## Facts & Assumptions

**Given:** Countable Choice, $\alpha<2$, $n\ge1$, continuous $q$ on the reference triangle, the Duffy rule, and the stated coordinate smoothness of its transformed amplitude $G$.

[A1] [[def-countable-choice]]: Countable Choice is used to supply the Lebesgue-density positive measures underlying the two Gaussian rules.

[F1] [[thm-duffy-weak-singularity-transform]]: the singular triangle integral equals $\int_0^1\int_0^1r^\rho G(r,s)dsdr$.

[F2] [[alg-duffy-weighted-product-gauss-quadrature]]: its finite sum is the tensor product of the $n$-node rules for $r^\rho dr$ and $ds$.

[F3] [[thm-gauss-jacobi-exactness-and-derivative-error]]: each pushed-forward one-dimensional rule has error constant $(2n)!^{-1}\int\widetilde p_n^2d\mu$ and integrates the measure mass exactly.

[F4] [[thm-gaussian-product-rule-error-bound]]: the tensor error is bounded by the first coordinate constant times the second mass and the first mass times the second coordinate constant.

[F5] [[lem-gauss-jacobi-weight-finite-moment-measure]]: the weights $(1+t)^\rho$ for $\rho>-1$ and $1$ define finite positive full-support measures with moments of every finite order.

[F6] [[lem-real-power-improper-integral]]: $\int_0^1r^\rho dr=1/(\rho+1)$ for $\rho>-1$.

[F7] [[def-factorial-and-falling-factorial]] and [[lem-nat-finite-sum-laws-and-the-canonical-embedding]]: $(2n)!_{\mathbb R}$ is the positive real image of $\prod_{j=1}^{2n}j$.

## Proof

1.1 The exponent $\rho=1-\alpha$ satisfies $\rho>-1$. By [F5] and [A1], the Jacobi weights $(1+t)^\rho$ and $1$ define finite positive measures with full support; the affine node/weight scalings in [F2] give their Gaussian rules for $r^\rho dr$ and $ds$. [A1, F2, F5, given, algebra]

1.2 The first measure has mass $M_\rho=1/(\rho+1)$ by [F6], and the second has mass $1$. For the first affine pushforward, $r=(1+t)/2$ gives $r^\rho dr=2^{-(\rho+1)}(1+t)^\rho dt$ and its monic node polynomial is $\widetilde p_{n,\rho}(r)=2^{-n}p_{n,\rho}(2r-1)$. Hence its squared-node-polynomial integral is $2^{-(\rho+1+2n)}\int_{-1}^1p_{n,\rho}(t)^2(1+t)^\rho dt$. The derivative of $H((1+t)/2)$ contributes $2^{-2n}$, so [F3] gives exactly $K_\rho$ as defined. The same calculation with $\rho=0$ gives $K_0$. Positivity of the factorial denominator follows from [F7]. [F2, F3, F6, F7, algebra]

2.1 Apply [F4] to the transformed integral and tensor rule identified by [F1]–[F2]. Substituting the masses and constants from step 1.2 yields the displayed error bound. [F1, F2, F4, step 1.2] ∎
