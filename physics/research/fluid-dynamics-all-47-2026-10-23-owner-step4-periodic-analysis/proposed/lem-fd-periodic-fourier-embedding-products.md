---
id: lem-fd-periodic-fourier-embedding-products
kind: lemma
title: "Periodic Fourier embeddings and products"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-fd-periodic-fourier-sobolev-spaces
  - def-countable-choice
dependency_roles:
  def-fd-periodic-fourier-sobolev-spaces: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Erick Schulz, Introduction to the Navier–Stokes Equations, McGill MATH 595 notes (2014)"
      url: "https://www.math.mcgill.ca/gantumur/math595f14/Notes.pdf"
      locator: "§§2.1.1–2.1.2, §2.1.5.2, §4.1.1; Fourier, weak derivatives, product estimate and Leray projection."
    - title: "Terence Tao, 254A Notes 1: Local well-posedness of the Navier–Stokes equations (2018)"
      url: "https://terrytao.wordpress.com/2018/09/16/254a-notes-1-local-well-posedness-of-the-navier-stokes-equations/"
      locator: "Periodic pressure/Leray discussion and Sobolev Proposition 35 / Exercise 36."
---

## Statement

Assume Countable Choice. Let $d\in\{1,2,3\}$ and use $H^\sigma(Q_d)$ with the normalized measure and weights in the Definition. For every integer $j\ge0$ and $\sigma>j+d/2$, each scalar $q\in H^\sigma(Q_d)$ has a $C^j$ representative and $\|q\|_{C^j}\le C_{d,\sigma,j}\|q\|_{H^\sigma}$. For every $\sigma>d/2$, pointwise multiplication extends uniquely from trigonometric polynomials to a continuous bilinear map $H^\sigma\times H^\sigma\to H^\sigma$ satisfying $\|fg\|_{H^\sigma}\le C_{d,\sigma}\|f\|_{H^\sigma}\|g\|_{H^\sigma}$. The assertions extend componentwise to finite-dimensional vector and tensor fields.

## Statement references

[Erick Schulz, Introduction to the Navier–Stokes Equations, McGill MATH 595 notes (2014)](https://www.math.mcgill.ca/gantumur/math595f14/Notes.pdf).

[Terence Tao, 254A Notes 1: Local well-posedness of the Navier–Stokes equations (2018)](https://terrytao.wordpress.com/2018/09/16/254a-notes-1-local-well-posedness-of-the-navier-stokes-equations/).

## Facts & Assumptions

**Given:** The hypotheses and conventions stated in the formulation.

[F1] [[def-fd-periodic-fourier-sobolev-spaces]]: $H^\sigma$ is the weighted Fourier coefficient completion with $w_k=(1+|k|^2)^{1/2}$ on the normalized $2\pi$-periodic torus.

[F2] [[def-countable-choice]]: countable families of nonempty sets admit a choice function. In [F1], finite coefficient arrays and their weighted coefficient completion are choice-free; the normalized measure, integral coefficients, and $L^2$ realization are used under Countable Choice. The present representative and pointwise-product assertions retain that analytic context.

## Proof

**Given:** Countable Choice, $d\in\{1,2,3\}$, and the coefficient norm [F1].

1.1 The number of lattice points in the shell $n\le|k|<n+1$ is at most $C_d(n+1)^{d-1}$, by covering each point with a disjoint unit cube and bounding the volume of a shell of fixed enlarged width. Hence $\sum_k w_k^{-2\alpha}<\infty$ whenever $\alpha>d/2$. Cauchy–Schwarz gives
$\sum_k |k|^j|\widehat q(k)|\le(\sum_k |k|^{2j}w_k^{-2\sigma})^{1/2}\|q\|_{H^\sigma}\le C\|q\|_{H^\sigma}$
when $\sigma>j+d/2$. [given, F1, F2, algebra]

2.1 The derivative Fourier series through order $j$ are absolutely and uniformly convergent by step 1.1. Their partial sums are derivatives of finite Fourier sums; the one-dimensional fundamental theorem of calculus in each coordinate identifies the uniform limits successively as the classical derivatives of the limit. This proves the $C^j$ representative and bound. [given, step 1.1, algebra]

2.2 For polynomials, $\widehat{fg}(k)=\sum_\ell\widehat f(k-\ell)\widehat g(\ell)$. The weight inequality $w_{k+\ell}^{\sigma}\le C_\sigma(w_k^\sigma+w_\ell^\sigma)$ follows from $w_{k+\ell}\le w_k+w_\ell$ and $(a+b)^\sigma\le C_\sigma(a^\sigma+b^\sigma)$. Discrete Young, obtained by Minkowski's inequality on finite translates, yields
$\|fg\|_{H^\sigma}\le C(\|f\|_{H^\sigma}\|\widehat g\|_{\ell^1}+\|\widehat f\|_{\ell^1}\|g\|_{H^\sigma})\le C\|f\|_{H^\sigma}\|g\|_{H^\sigma}$,
since step 1.1 with $j=0$ bounds both coefficient $\ell^1$ norms. [given, F1, step 1.1, algebra]

3.1 Finite Fourier sums are dense by the completion in [F1], so the polynomial product estimate extends uniquely by Cauchy convergence to $H^\sigma$. Since step 1.1 also gives convergence in $C^0$, this extended product agrees pointwise with multiplication of the continuous representatives. Applying the scalar estimate to finitely many components proves the vector and tensor versions. [given, F1, step 1.1, step 2.2, algebra] ∎

