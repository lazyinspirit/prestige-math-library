---
id: lem-products-of-subgaussian-coordinates-are-subexponential
kind: lemma
title: "Products of sub-Gaussian coordinates are sub-exponential"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 2
deps:
  - cor-layer-cake-formulas-for-random-variables
  - def-subgaussian-variable-and-vector
  - thm-monotone-convergence-for-the-integral
  - thm-dominated-convergence
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - thm-finite-subgaussian-maximum-and-epsilon-net
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
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, Chapter 1, Lemma 1.12"
      url: "https://arxiv.org/pdf/2310.19244v1"
    - title: "Philippe Rigollet, 18.S997 High-Dimensional Statistics, Chapter 1, Section 1.3"
      url: "https://ocw.mit.edu/courses/18-s997-high-dimensional-statistics-spring-2015/619e4ae252f1b26cbe0f7a29d5932978_MIT18_S997S15_CourseNotes.pdf"
---

## Statement

Let $U,V$ be centered real random variables, not necessarily independent, each sub-Gaussian with proxy $K^2>0$ as in [[def-subgaussian-variable-and-vector]]. Then $W=UV-\mathbb E[UV]$ is sub-exponential with parameters $(256K^4,16K^2)$ under the restricted-MGF convention of that definition.

## Facts & Assumptions

**Given:** Centered real random variables $U,V$ with sub-Gaussian proxy $K^2>0$.

[F1] A centered sub-Gaussian scalar with proxy $K^2$ has two-sided tail $P(|U|\ge t)\le2e^{-t^2/(2K^2)}$ for $t>0$ ([[def-subgaussian-variable-and-vector]], [[thm-finite-subgaussian-maximum-and-epsilon-net]]).

[F2] For a nonnegative random variable $T$, $\mathbb E T=\int_0^\infty P(T>t)\,dt$ ([[cor-layer-cake-formulas-for-random-variables]]).

[F3] Sub-exponential with parameters $(\nu^2,b)$ means $\mathbb E e^{\lambda W}\le e^{\lambda^2\nu^2/2}$ for $|\lambda|\le1/b$ ([[def-subgaussian-variable-and-vector]]).

[F4] Increasing nonnegative measurable partial sums pass to their pointwise limit under expectation. ([[thm-monotone-convergence-for-the-integral]])

[F5] Measurable partial sums dominated in absolute value by one integrable random variable converge in $L^1$ and in expectation to their pointwise limit. ([[thm-dominated-convergence]])

[F6] Expectation is linear on finite sums of integrable random variables. ([[cor-expectation-linearity-monotonicity-and-modulus-bound]])

## Proof



1.1 For each integer $m\ge1$, [F1]–[F2] and the substitution $u=t^{2m}$ give $\mathbb E|U|^{2m}=2m\int_0^\infty t^{2m-1}P(|U|>t)\,dt\le2(2K^2)^m m!.$ The same bound holds for $V$. The last integral is evaluated by $z=t^2/(2K^2)$ and $m-1$ integrations by parts. [F1, F2, algebra]

2.1 The pointwise inequality $2|U|^m|V|^m\le|U|^{2m}+|V|^{2m}$ and step 1.1 imply $\mathbb E|UV|^m\le2(2K^2)^m m!.$ In particular $|\mathbb E[UV]|\le\mathbb E|UV|\le4K^2$. [step 1.1, algebra]

3.1 For $m\ge2$, $|a-b|^m\le2^{m-1}(|a|^m+|b|^m)$ and step 2.1 give $\mathbb E|W|^m\le2^{m-1}\bigl(2(2K^2)^m m!+(4K^2)^m\bigr)\le(8K^2)^m m!.$ Also $\mathbb E W=0$. [step 2.1, algebra]

4.1 Fix $|\lambda|\le1/(16K^2)$ and put $x=8K^2|\lambda|\le1/2$. The variable $W$ is integrable by step 2.1. The nonnegative measurable partial sums $A_N=\sum_{m=0}^N|\lambda W|^m/m!$ increase pointwise to $e^{|\lambda W|}$. Finite linearity [F6] and monotone convergence [F4], applied only to these nonnegative partial sums, give $$\mathbb E e^{|\lambda W|}=1+|\lambda|\mathbb E|W|+\sum_{m\ge2}\frac{|\lambda|^m\mathbb E|W|^m}{m!}\le1+|\lambda|\mathbb E|W|+\sum_{m\ge2}x^m<\infty.$$ Thus $e^{|\lambda W|}$ is an integrable dominating variable. [F4, F6, step 2.1, step 3.1, algebra]

5.1 The signed partial sums $S_N=\sum_{m=0}^N(\lambda W)^m/m!$ converge pointwise to $e^{\lambda W}$ and satisfy $|S_N|\le A_N\le e^{|\lambda W|}$. Dominated convergence [F5] and finite linearity [F6] therefore justify taking expectations termwise; the resulting scalar series is absolutely convergent by step 4.1. Since $\mathbb EW=0$, step 3.1 gives $$\mathbb E e^{\lambda W}=1+\sum_{m\ge2}\frac{\lambda^m\mathbb EW^m}{m!}\le1+\sum_{m\ge2}x^m\le1+128K^4\lambda^2\le e^{128K^4\lambda^2}.$$ This is the sub-exponential MGF bound in [F3] with $\nu^2=256K^4$ and $b=16K^2$. [F3, F5, F6, step 3.1, step 4.1, algebra] ∎

