---
id: lem-directional-tail-products-are-subexponential
kind: lemma
title: "Products of variables with Gaussian tails are sub-exponential"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps:
  - cor-layer-cake-formulas-for-random-variables
  - def-subgaussian-variable-and-vector
  - thm-monotone-convergence-for-the-integral
  - thm-dominated-convergence
  - cor-expectation-linearity-monotonicity-and-modulus-bound
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
    - title: "T. Tony Cai and Harrison H. Zhou, Optimal Rates of Convergence for Sparse Covariance Matrix Estimation, Section 4, equation (26)"
      url: "https://arxiv.org/pdf/1302.3030"
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, Chapter 1, Lemma 1.12"
      url: "https://arxiv.org/pdf/2310.19244v1"
---

## Statement

Let $U,V$ be real random variables on one probability space, not necessarily independent, and suppose for some $\tau>0$ that
$$\mathbb P(|U|>t)\le e^{-t^2/(2\tau)},\qquad \mathbb P(|V|>t)\le e^{-t^2/(2\tau)}\quad(t>0).$$
Then $W=UV-\mathbb E[UV]$ is well-defined, centered, and sub-exponential with parameters $(1024\tau^2,16\tau)$ in the convention of [[def-subgaussian-variable-and-vector]].

## Facts & Assumptions

**Given:** Real random variables $U,V$ with the displayed directional tail bounds and $\tau>0$.

[F1] Layer cake gives $\mathbb E T=\int_0^\infty\mathbb P(T>t)\,dt$ for nonnegative $T$ ([[cor-layer-cake-formulas-for-random-variables]]).

[F2] Sub-exponentiality with parameters $(\nu^2,b)$ means $\mathbb E e^{\lambda W}\le e^{\nu^2\lambda^2/2}$ for $|\lambda|\le1/b$ ([[def-subgaussian-variable-and-vector]]).

[F3] Increasing nonnegative measurable partial sums pass to their pointwise limit under expectation. ([[thm-monotone-convergence-for-the-integral]])

[F4] Measurable partial sums dominated in absolute value by one integrable random variable converge in $L^1$ and in expectation to their pointwise limit. ([[thm-dominated-convergence]])

[F5] Expectation is linear on finite sums of integrable random variables. ([[cor-expectation-linearity-monotonicity-and-modulus-bound]])

## Proof



1.1 Applying [F1] to $U^2,V^2$ gives $\mathbb E U^2,\mathbb E V^2\le2\tau$. Since $2|UV|\le U^2+V^2$, $UV$ is integrable and $|\mathbb E UV|\le2\tau$. Also, for $x>0$, $|UV|>x$ implies $|U|>\sqrt x$ or $|V|>\sqrt x$, so $\mathbb P(|UV|>x)\le2e^{-x/(2\tau)}$. [F1, given, algebra]

2.1 Put $W=UV-\mathbb E UV$. If $t\ge4\tau$, then $|W|>t$ implies $|UV|>t-|\mathbb E UV|\ge t/2$, so step 1.1 gives $\mathbb P(|W|>t)\le2e^{-t/(4\tau)}\le4e^{-t/(8\tau)}$. If $0<t<4\tau$, then $4e^{-t/(8\tau)}>4e^{-1/2}>1$, so the same final bound follows from $\mathbb P(|W|>t)\le1$. Thus for all $t>0$, $\mathbb P(|W|>t)\le4e^{-t/(8\tau)}$. [step 1.1, algebra, cases]

3.1 By [F1] and step 2.1, for every integer $m\ge2$, $\mathbb E|W|^m=m\int_0^\infty t^{m-1}\mathbb P(|W|>t)\,dt\le4(8\tau)^m m!.$ The identity follows from substitution $u=t/(8\tau)$ and $\int_0^\infty u^{m-1}e^{-u}du=(m-1)!$. [F1, step 2.1, algebra]

4.1 Fix $|\lambda|\le1/(16\tau)$ and put $x=8\tau|\lambda|\le1/2$. The variable $W$ is integrable and centered by step 1.1. The nonnegative measurable partial sums $A_N=\sum_{m=0}^N|\lambda W|^m/m!$ increase pointwise to $e^{|\lambda W|}$. Finite linearity [F5] and monotone convergence [F3], applied only to these nonnegative partial sums, give $$\mathbb E e^{|\lambda W|}=1+|\lambda|\mathbb E|W|+\sum_{m\ge2}\frac{|\lambda|^m\mathbb E|W|^m}{m!}\le1+|\lambda|\mathbb E|W|+4\sum_{m\ge2}x^m<\infty.$$ Thus $e^{|\lambda W|}$ is an integrable dominating variable. [F3, F5, step 1.1, step 3.1, algebra]

5.1 The signed partial sums $S_N=\sum_{m=0}^N(\lambda W)^m/m!$ converge pointwise to $e^{\lambda W}$ and satisfy $|S_N|\le A_N\le e^{|\lambda W|}$. Dominated convergence [F4] and finite linearity [F5] justify taking expectations termwise; the scalar series of expectations is absolutely convergent by step 4.1. Since $\mathbb EW=0$, step 3.1 gives $$\mathbb E e^{\lambda W}=1+\sum_{m\ge2}\frac{\lambda^m\mathbb EW^m}{m!}\le1+4\sum_{m\ge2}x^m=1+\frac{4x^2}{1-x}\le1+8x^2\le e^{8x^2}=e^{512\tau^2\lambda^2}.$$ By [F2] the parameters remain $\nu^2=1024\tau^2$ and $b=16\tau$. [F2, F4, F5, step 3.1, step 4.1, algebra] ∎

