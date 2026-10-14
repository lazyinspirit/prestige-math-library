---
id: lem-directional-tail-implies-subgaussian-mgf
kind: lemma
title: "A Gaussian tail bound implies a sub-Gaussian MGF bound"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps:
  - cor-layer-cake-formulas-for-random-variables
  - def-subgaussian-variable-and-vector
  - thm-factorization-of-expectations-for-independent-variables
  - thm-jensen-inequality-for-expectation
  - thm-monotone-convergence-for-the-integral
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "T. Tony Cai and Harrison H. Zhou, Optimal Rates of Convergence for Sparse Covariance Matrix Estimation, equation (2)"
      url: "https://arxiv.org/pdf/1302.3030"
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, Chapter 1, §1.2"
      url: "https://arxiv.org/pdf/2310.19244v1"
---

## Statement

Let $X$ be a centered real random variable and let $\tau>0$. If
$$\mathbb P(|X|>t)\le2e^{-t^2/(2\tau)}\qquad(t>0),$$
then $X$ is sub-Gaussian with proxy $64\tau$ in the MGF convention of [[def-subgaussian-variable-and-vector]]:
$$\mathbb E e^{\lambda X}\le e^{32\tau\lambda^2}\qquad(\lambda\in\mathbb R).$$

## Facts & Assumptions

**Given:** A centered real random variable $X$ with the displayed two-sided tail bound and a constant $\tau>0$.

[F1] Layer cake gives $\mathbb E T=\int_0^\infty\mathbb P(T>t)\,dt$ for nonnegative $T$ ([[cor-layer-cake-formulas-for-random-variables]]).

[F2] A product of two probability laws exists and has the rectangle formula ([[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]).

[F3] Expectations of products of independent real random variables factor ([[thm-factorization-of-expectations-for-independent-variables]]).

[F4] Jensen's inequality gives $\mathbb E e^{-\lambda X}\ge e^{-\lambda\mathbb E X}=1$ ([[thm-jensen-inequality-for-expectation]]).

[F5] Increasing nonnegative functions pass to the limit under expectation ([[thm-monotone-convergence-for-the-integral]]).

[F6] A centered variable is sub-Gaussian with proxy $v$ when $\mathbb E e^{\lambda X}\le e^{v\lambda^2/2}$ for all real $\lambda$ ([[def-subgaussian-variable-and-vector]]).

## Proof

1.1 The tail bound and [F1] imply $\mathbb E e^{a|X|}=1+a\int_0^\infty e^{at}\mathbb P(|X|>t)\,dt\le1+2a\int_0^\infty e^{at-t^2/(2\tau)}\,dt<\infty$ for every $a>0$, since completing the square gives $at-t^2/(2\tau)=-(t-a\tau)^2/(2\tau)+a^2\tau/2$. Thus all MGFs below are finite. [F1, F2, given, algebra]

1.2 Let $X_1,X_2$ be the coordinate variables on the product of two copies of the law of $X$; [F2] gives this probability space, and its rectangle formula makes them independent with law equal to that of $X$. Set $D=X_1-X_2$. Independence [F3] gives $\mathbb E e^{\lambda D}=(\mathbb E e^{\lambda X})(\mathbb E e^{-\lambda X})$. By [F4], the second factor is at least $1$, so $\mathbb E e^{\lambda X}\le\mathbb E e^{\lambda D}$. The product is unchanged when $\lambda$ is replaced by $-\lambda$, hence $\mathbb E e^{\lambda D}=\mathbb E\cosh(\lambda D)$. [F2, F3, F4, given, algebra]

2.1 A union bound gives $\mathbb P(|D|>t)\le4e^{-t^2/(8\tau)}$ because $|D|>t$ implies $|X_1|>t/2$ or $|X_2|>t/2$. For $m\ge1$, [F1] and the substitution $u=t^2/(8\tau)$ yield $\mathbb E|D|^{2m}=2m\int_0^\infty t^{2m-1}\mathbb P(|D|>t)\,dt\le4(8\tau)^m m!.$ The integral is evaluated using $\int_0^\infty t^{2m-1}e^{-t^2/(8\tau)}dt=\tfrac12(8\tau)^m(m-1)!$. [F1, step 1.2, algebra]

3.1 By [F5], the nonnegative power series for $\cosh$ may be integrated term by term. With $x=8\tau\lambda^2$, step 2.1 and $(2m)!\ge(m!)^2$ give $\mathbb E\cosh(\lambda D)\le1+4\sum_{m\ge1}\frac{x^m}{m!}=4e^x-3\le e^{4x}.$ For the last inequality, $f(x)=e^{4x}-4e^x+3$ satisfies $f(0)=0$ and $f'(x)=4(e^{4x}-e^x)\ge0$ for $x\ge0$. Therefore $\mathbb E e^{\lambda X}\le e^{32\tau\lambda^2}$ for every $\lambda$, which is the proxy-$64\tau$ assertion by [F6]. [F5, F6, step 2.1, step 1.2, algebra] ∎
