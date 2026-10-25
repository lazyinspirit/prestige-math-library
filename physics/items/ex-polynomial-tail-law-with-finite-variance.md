---
id: ex-polynomial-tail-law-with-finite-variance
kind: example
title: A polynomial-tail law with finite variance
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 3
deps:
  - thm-finite-variance-geometric-median-mean-bound
  - def-subgaussian-variable-and-vector
  - lem-measurable-minimum-norm-geometric-median-selection
  - def-hilbert-space
  - def-real-and-complex-inner-product-space
  - def-separable-space
  - thm-reals-ordered-field
  - thm-of-square-roots
  - lem-of-abs-value
  - thm-reals-cauchy-complete
  - thm-rationals-countable
  - lem-rat-embeds-dense
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Gábor Lugosi and Shahar Mendelson, Robust Multivariate Mean Estimation:
        The Optimality of Trimmed Mean, §1"
      url: https://arxiv.org/pdf/1907.11391
      locator: PDF pp. 1–3; finite-variance mean-estimation setting.
---

## Example

Let $X$ have density $f(x)=\frac{3}{2(1+|x|)^4}$ on $\mathbb R$. This law has mean $0$ and variance $1$, but it is not sub-Gaussian in the moment-generating-function sense. The geometric-median-of-means theorem therefore applies even though no finite sub-Gaussian proxy exists.

## Facts & Assumptions

**Given:** Countable Choice, the density $f(x)=3/(2(1+|x|)^4)$, and the definitions of sub-Gaussianity and variance. Fix $0<\delta<1$ and a positive integer $n$ for which $k=\lfloor\log(1/\delta)/\psi(7/18;1/10)\rfloor+1\le n/2$, with $\psi$ as defined in [[thm-finite-variance-geometric-median-mean-bound]]. Let $X_1,\ldots,X_n$ be iid Borel real-valued observations with this density, and let $\widehat\mu$ be their geometric-median-of-block-means output using $k$ blocks and the minimum-norm selection rule specified by that theorem. Countable Choice is an explicit hypothesis of [[thm-finite-variance-geometric-median-mean-bound]], whose selector uses [[lem-measurable-minimum-norm-geometric-median-selection]].

[F1] A centered real random variable is sub-Gaussian with proxy $s^2$ only if $E e^{\lambda X}\le e^{\lambda^2s^2/2}$ for every real $\lambda$ ([[def-subgaussian-variable-and-vector]]).

[F2] For the density displayed in the Example, symmetry and finite second moment identify the mean and variance; the geometric-median theorem requires a separable Hilbert-valued iid sample with finite second moment ([[thm-finite-variance-geometric-median-mean-bound]]).

[F3] With inner product $\langle x,y\rangle=xy$, $\mathbb R$ is a real inner-product space: ordered-field arithmetic gives bilinearity, symmetry, and $x^2\ge0$ with equality only for $x=0$ ([[thm-reals-ordered-field]], [[def-real-and-complex-inner-product-space]]). Its induced norm is $\sqrt{x^2}=|x|$ ([[thm-of-square-roots]], [[lem-of-abs-value]]), so completeness of the real line makes it a Hilbert space ([[thm-reals-cauchy-complete]], [[def-hilbert-space]]). The embedded rationals are countable and dense, so this Hilbert space is separable ([[thm-rationals-countable]], [[lem-rat-embeds-dense]], [[def-separable-space]]).

## Verification

**Proof technique:** direct.

**Given:** Countable Choice, the displayed density, the iid sample $X_1,\ldots,X_n$, the admissible confidence parameter $\delta$ and block count $k$, and the estimator $\widehat\mu$ specified in Facts & Assumptions.

1.1 The density is normalized because $\int_{\mathbb R}f(x)\,dx=3\int_0^\infty(1+x)^{-4}\,dx=1$. Its second moment is $3\int_0^\infty x^2(1+x)^{-4}\,dx=3\int_1^\infty(u^{-2}-2u^{-3}+u^{-4})\,du=1$. Since $|x|\le1+x^2$, the first absolute moment is finite, and symmetry then gives $EX=0$. [F2, algebra]

1.2 For every $\lambda>0$, $E e^{\lambda X}\ge\frac32\int_1^\infty e^{\lambda x}(1+x)^{-4}\,dx=\infty$, since $\lambda x-4\log(1+x)\to\infty$ and the integrand is eventually at least $1$. Thus the defining MGF inequality in [F1] fails for every finite proxy. [F1, algebra]

2.1 The law is Borel and takes values in the separable Hilbert space $H=\mathbb R$ by [F3], with finite second moment $1$. For the iid sample and geometric-median-of-means estimator specified in the Given, the admissible $n$, $\delta$, and $k$ therefore satisfy all hypotheses of [[thm-finite-variance-geometric-median-mean-bound]], which gives $P(|\widehat\mu|\ge11\sqrt{\log(7/(5\delta))/n})\le\delta$. The conclusion uses only the finite variance just computed, not a sub-Gaussian assumption. [F2, F3, given, algebra] ∎
