---
id: lem-biased-hermite-kernel-is-strictly-positive-definite
kind: lemma
title: Positive bias makes the Hermite feature kernel strictly positive definite on every sphere
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-inner-product-space
  - lem-ac-supplies-sequential-choices-for-probability-constructions
  - lem-gaussian-hermite-covariance-expansion
  - lem-gaussian-ltwo-hermite-completeness
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Arthur Jacot, Franck Gabriel, and Clément Hongler, Neural Tangent Kernel: Convergence and Generalization in Neural Networks"
      url: "https://arxiv.org/pdf/1806.07572"
      locator: "Appendix A.4, printed pp. 16–18; Hermite expansion and positive-bias activation covariance"
    - title: "Tilmann Gneiting, Strictly and non-strictly positive definite functions on spheres"
      url: "https://arxiv.org/pdf/1111.7077"
      locator: "Theorem 1 and sphere conventions, printed pp. 6–8; comparison only, including the separate circle case"
---

## Statement

Assume AC. Fix an integer $n_0\ge1$, a number $\beta>0$, and a globally Lipschitz function $\sigma:\mathbb R\to\mathbb R$ that is not a polynomial. Let $S^{n_0-1}=\{x\in\mathbb R^{n_0}:\|x\|_2=1\}$, put $q=n_0^{-1}+\beta^2$, and define $\mu(z)=\sigma(\sqrt q\,z)$. Let $a_m=\int \mu(z)h_m(z)\,d\gamma(z)$ be its coefficients in the normalized probabilists’ Hermite basis $h_m=H_m/\sqrt{m!}$ of standard Gaussian measure $\gamma$. For $x,y\in S^{n_0-1}$, let $(U_{x,y},V_{x,y})$ be a centered Gaussian pair with variances $q$ and covariance $\beta^2+x\cdot y/n_0$, and set $k(x,y)=\mathbb E[\sigma(U_{x,y})\sigma(V_{x,y})]+\beta^2$. Then $k$ is strictly positive definite on $S^{n_0-1}$: for every finite list of pairwise distinct points $x_1,\ldots,x_N$ and every nonzero $c\in\mathbb R^N$, $\sum_{i,j=1}^N c_i c_j k(x_i,x_j)>0$. The conclusion includes $n_0=1$, for which the sphere consists of the two points $-1$ and $1$.

## Statement references

[Jacot, Gabriel, and Hongler, Appendix A.4, activation covariance expansion and positive definiteness](https://arxiv.org/pdf/1806.07572)

[Gneiting, Theorem 1 and sphere conventions; the proof here treats every dimension directly](https://arxiv.org/pdf/1111.7077)

[[lem-gaussian-hermite-covariance-expansion|Correlated Gaussian Hermite covariance identity and endpoint convergence]]

[[lem-gaussian-ltwo-hermite-completeness|Completeness and Parseval for Gaussian L² Hermite expansions]]

## Facts & Assumptions

**Given:** AC; $n_0\ge1$; $\beta>0$; a globally Lipschitz nonpolynomial activation; and a finite set of distinct unit vectors.

[A1] AC supplies the countable and dependent choice required by the Gaussian and Hermite suppliers ([[def-axiom-of-choice]], [[lem-ac-supplies-sequential-choices-for-probability-constructions]]).

[F1] The normalized probabilists’ Hermite polynomials are a complete orthonormal basis of $L^2(\gamma)$, Parseval gives $\sum_m a_m^2=\|\mu\|_2^2$, and every globally Lipschitz real function belongs to $L^2(\gamma)$ ([[lem-gaussian-ltwo-hermite-completeness]]).

[F2] For a centered unit-variance Gaussian pair of correlation $r\in[-1,1]$, the expectation of two $L^2(\gamma)$ functions with Hermite coefficients $(a_m)$ and $(b_m)$ is $\sum_m a_mb_mr^m$, absolutely convergent at both endpoints ([[lem-gaussian-hermite-covariance-expansion]]).

[F3] Tonelli’s theorem permits interchange of sums of nonnegative terms ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F4] The inner product on $\mathbb R^{n_0}$ is the Euclidean dot product; tensor powers use the induced coordinate inner product ([[def-inner-product-space]]).

## Proof
**Proof technique:** expand the Gaussian feature covariance, show every power coefficient is positive, then separate finitely many points by a polynomial.

1.1 The marginal variance is $q$, and the standardized correlation is $r(x,y)=\frac{\beta^2+(x\cdot y)/n_0}{q}=\alpha(x\cdot y)+\delta,\qquad \alpha=\frac1{1+n_0\beta^2}>0,\quad \delta=\frac{n_0\beta^2}{1+n_0\beta^2}>0,\quad \alpha+\delta=1.$ The correlation lies in $[-1,1]$ because $|x\cdot y|\le1$ and the displayed covariance is a valid two-dimensional Gram covariance of the input and bias features. Applying [F2] to $\mu$ gives $k(x,y)=\beta^2+\sum_{r=0}^{\infty}a_r^2(\alpha x\cdot y+\delta)^r.$ The series is absolutely convergent since $|r(x,y)|\le1$ and $\sum_r a_r^2<\infty$. [A1, F1, F2, given, algebra]

2.1 Expanding each nonnegative power by the binomial theorem and using [F3], define $d_m=\mathbf1_{\{m=0\}}\beta^2+\alpha^m\sum_{r=m}^{\infty}a_r^2\binom rm\delta^{r-m}\quad(m\ge0).$ Then $k(x,y)=\sum_{m=0}^{\infty}d_m(x\cdot y)^m$. Moreover, [F3] and $\alpha+\delta=1$ give $\sum_m d_m=\beta^2+\sum_r a_r^2<\infty$. [F1, F3, step 1.1, algebra]

3.1 The rescaled function $\mu(z)=\sigma(\sqrt q z)$ is continuous and nonpolynomial: if it were a polynomial, then $\sigma(u)=\mu(u/\sqrt q)$ would be a polynomial because $q>0$. It is globally Lipschitz, so [F1] supplies its $L^2(\gamma)$ membership and Parseval. The function $\mu$ has infinitely many nonzero Hermite coefficients: otherwise [F1] would make it equal almost everywhere to a polynomial, and continuity would make that equality hold everywhere, contradicting nonpolynomiality. Thus for each $m$ there is an $r\ge m$ with $a_r\ne0$, and the corresponding term in [F3]’s sum is strictly positive because $\alpha,\delta>0$. Hence $d_m>0$ for every $m$, including $m=0$ because $\beta>0$. [F1, F3, step 2.1, given]

3.2 For any $c\in\mathbb R^N$, the quadratic form is $\sum_{i,j}c_ic_jk(x_i,x_j)=\sum_{m=0}^{\infty}d_m\left\|\sum_{i=1}^N c_i x_i^{\otimes m}\right\|_2^2\ge0.$ Indeed, $\langle x_i^{\otimes m},x_j^{\otimes m}\rangle=(x_i\cdot x_j)^m$ by the induced tensor inner product, and the convergent series may be evaluated termwise because $|x_i\cdot x_j|\le1$ and $\sum_m d_m<\infty$. [F4, step 2.1, algebra]

4.1 If this quadratic form were zero, positivity of every $d_m$ would force $\sum_i c_i x_i^{\otimes m}=0$ for every $m\ge0$. Consequently $\sum_i c_i p(x_i)=0$ for every polynomial $p$ on $\mathbb R^{n_0}$: each monomial of degree $m$ is a coordinate linear functional on $x^{\otimes m}$, and constants correspond to $m=0$. For each index $j$, take $p_j(x)=\prod_{i\ne j}\|x-x_i\|_2^2$, with the empty product equal to $1$. Then $p_j(x_i)=0$ for $i\ne j$ and $p_j(x_j)>0$, so $c_j=0$. This holds for every $j$, contradicting $c\ne0$. Thus the quadratic form in step 3.2 is strictly positive. [F4, step 3.2, algebra] ∎
