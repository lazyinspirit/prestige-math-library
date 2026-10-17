---
id: lem-exponential-phi-integral-representations
kind: lemma
title: Integral representations of the first two phi functions
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-phi-functions-by-everywhere-convergent-series
  - lem-phi-series-converges-absolutely
  - def-bounded-linear-operator
  - def-operator-norm
  - cor-finite-dimensional-normed-spaces-are-banach
  - lem-exponential-series-of-a-bounded-operator
  - def-inner-product-norm
  - prop-standard-coordinate-inner-products
  - def-matrix-product-and-identity-matrix
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - cor-operator-norm-submultiplicative-and-t-star-t-identity
  - def-vector-valued-derivative-and-integral
  - thm-linearity-of-the-integral
  - thm-norm-inequality-for-the-vector-valued-integral
  - thm-complex-numbers-are-the-real-coordinate-plane
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Jitse Niesen and Will M. Wright, A Krylov Subspace Algorithm for Evaluating the Phi-Functions Appearing in Exponential Integrators, arXiv:0907.4631v2"
      url: "https://arxiv.org/pdf/0907.4631"
      locator: "§2, equation (1), PDF p. 3; the integral representation is used again in the proof of Lemma 2.1, PDF pp. 3–4."
    - title: "Marlis Hochbruck and Alexander Ostermann, Exponential Integrators, Acta Numerica 19 (2010)"
      url: "https://publikationen.bibliothek.kit.edu/1000024914/1910360"
      locator: "§2.2, equations (2.12)–(2.18), PDF pp. 9–11, printed pp. 218–220."
---

## Statement

For every $d\ge1$ and $X\in M_d(\mathbb C)$, the series-defined functions [[def-phi-functions-by-everywhere-convergent-series]] satisfy
$$\varphi_1(X)=\int_0^1 e^{(1-\theta)X}\,d\theta,\qquad \varphi_2(X)=\int_0^1 \theta e^{(1-\theta)X}\,d\theta.$$
The integrals are componentwise. These formulas define the values at $X=0$ directly and do not use division by $X$.

## Facts & Assumptions

**Given:** $d\ge1$ and $X\in M_d(\mathbb C)$.

[F1] [[def-phi-functions-by-everywhere-convergent-series]]: $\varphi_1(X)=\sum_{j\ge0}X^j/(j+1)!$ and $\varphi_2(X)=\sum_{j\ge0}X^j/(j+2)!$.

[F2] [[lem-phi-series-converges-absolutely]]: these series converge absolutely in operator norm.

[F3] [[def-bounded-linear-operator]], [[def-operator-norm]], [[cor-finite-dimensional-normed-spaces-are-banach]], and [[lem-exponential-series-of-a-bounded-operator]]: a finite matrix acts as a bounded operator on the complete finite-dimensional space, and its exponential series converges locally uniformly in operator norm.

[F4] [[def-vector-valued-derivative-and-integral]], [[prop-standard-coordinate-inner-products]], [[thm-linearity-of-the-integral]], and [[thm-norm-inequality-for-the-vector-valued-integral]]: componentwise complex-vector integrals agree with real integrals in $\mathbb R^{2d}$, finite sums may be integrated termwise, and $\|\int_0^1v(\theta)d\theta\|_2\le\int_0^1\|v(\theta)\|_2d\theta$.

[F5] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]] and [[cor-operator-norm-submultiplicative-and-t-star-t-identity]]: the matrix operator norm is the maximum over unit vectors and $\|X^jv\|_2\le\|X\|_2^j\|v\|_2$.

[F6] [[thm-complex-numbers-are-the-real-coordinate-plane]], [[prop-standard-coordinate-inner-products]], and [[def-inner-product-norm]]: for $v=(v_0,\ldots,v_{d-1})$, the componentwise map $\Phi_d(v):=(\operatorname{Re}v_0,\operatorname{Im}v_0,\ldots,\operatorname{Re}v_{d-1},\operatorname{Im}v_{d-1})$ is real-linear and satisfies $\|\Phi_d(v)\|_{\mathbb R^{2d}}^2=\sum_{j<d}|v_j|^2=\|v\|_2^2$. Thus [F4] applies to these complex matrix-valued integrands with the stated Euclidean norm.


## Proof

1.1 By [F6], the componentwise complex integrals are the real vector integrals to which [F4] applies. For $0\le\theta\le1$, $v$ a unit vector, and either weight $w(\theta)=1$ or $w(\theta)=\theta$, [F5] bounds the exponential-series tail applied to $v$ by $\sum_{j>J}\|X\|_2^j/j!$, which tends to zero by [F3]. By [F4], the norm of the integral of the weighted tail applied to $v$ is at most the same tail, uniformly in unit $v$. Taking the maximum over unit $v$ by [F5] proves that the finite partial-sum integrals converge in operator norm to the corresponding matrix integral. The finite sums may be integrated term by term by componentwise linearity. [F3, F4, F5, F6, algebra]

1.2 Substituting $u=1-\theta$ gives $\int_0^1\theta(1-\theta)^j\,d\theta=\int_0^1(1-u)u^j\,du=1/(j+1)-1/(j+2)=1/((j+1)(j+2))$. [algebra]

2.1 For each integer $j\ge0$, $\int_0^1(1-\theta)^j\,d\theta=1/(j+1)$. Therefore the first integral equals $\sum_{j\ge0}X^j/(j!(j+1))=\sum_{j\ge0}X^j/(j+1)!=\varphi_1(X)$ by [F1]; the equality is legitimate because the phi series converges absolutely by [F2]. [F1, F2, step 1.1, algebra]

3.1 The second integral is consequently $\sum_{j\ge0}X^j/(j!(j+1)(j+2))=\sum_{j\ge0}X^j/(j+2)!=\varphi_2(X)$ by [F1], with convergence justified by [F2]. At $X=0$ the same series gives $I_d$ and $I_d/2$, respectively, so no quotient or invertibility assumption is involved. [F1, F2, step 1.1, step 1.2, algebra] ∎

