---
title: Finite sieve determines the probability of a zero count
status: published
research_item: lem-author-c1dce5041ae4-finite-sieve-zero-count
dependency_level: 1
---

## Prerequisites

- [math:def-expectation-on-a-finite-probability-space](https://alphabetamath.cc/item/def-expectation-on-a-finite-probability-space)
- [math:def-factorial-and-falling-factorial](https://alphabetamath.cc/item/def-factorial-and-falling-factorial)
- [math:def-real-exponential-function-and-e](https://alphabetamath.cc/item/def-real-exponential-function-and-e)
- [def-expander-prereq-asymptotic-quantifiers](item-def-expander-prereq-asymptotic-quantifiers)
- [math:def-finite-probability-space-and-event](https://alphabetamath.cc/item/def-finite-probability-space-and-event)
- [math:def-finite-real-random-variable-and-distribution](https://alphabetamath.cc/item/def-finite-real-random-variable-and-distribution)
- [math:def-real-power](https://alphabetamath.cc/item/def-real-power)
- [math:def-natural-logarithm](https://alphabetamath.cc/item/def-natural-logarithm)
- [math:def-integer-power](https://alphabetamath.cc/item/def-integer-power)


## Statement

Let $X_n$ be nonnegative integer-valued random variables on finite probability spaces, and define $\binom{x}{r}=(x)_r/r!$ for integers $0\le r\le x$, and zero for $r>x$. Powers $\lambda^r$ use natural integer exponents, with $\lambda^0=1$ also when $\lambda=0$. If, for each fixed $r\ge0$, $\mathbb E(X_n)_r\to\lambda^r$ for a fixed $\lambda\ge0$, then $\mathbb P(X_n=0)\to e^{-\lambda}$. No assertion about other values of $X_n$ is needed.

## Facts & Assumptions

**Given:** The objects and hypotheses of the Statement.

**Goal:** Prove the Statement.

[F1] Expectation is a finite weighted sum, preserving pointwise inequalities ([math:def-expectation-on-a-finite-probability-space](https://alphabetamath.cc/item/def-expectation-on-a-finite-probability-space)).

[F2] Factorials and falling factorials have their finite product definitions ([math:def-factorial-and-falling-factorial](https://alphabetamath.cc/item/def-factorial-and-falling-factorial)).

[F3] The exponential is the everywhere convergent series $\exp(t)=\sum_{r\ge0}t^r/r!$ ([math:def-real-exponential-function-and-e](https://alphabetamath.cc/item/def-real-exponential-function-and-e)).

[F4] Convergence is interpreted along the sequence of finite probability spaces ([def-expander-prereq-asymptotic-quantifiers](item-def-expander-prereq-asymptotic-quantifiers)).

[F5] A finite probability space $(\Omega_n,w_n)$ has nonnegative weights summing to one; every subset is an event whose probability is the sum of its weights. A real random variable is a function $X_n:\Omega_n\to\mathbb R$ ([math:def-finite-probability-space-and-event](https://alphabetamath.cc/item/def-finite-probability-space-and-event), [math:def-finite-real-random-variable-and-distribution](https://alphabetamath.cc/item/def-finite-real-random-variable-and-distribution)).

[F6] For $a>0$ and $t\in\mathbb R$, real powers satisfy $a^t=\exp(t\log a)$, and the inverse logarithm satisfies $\log(\exp(t))=t$ ([math:def-real-power](https://alphabetamath.cc/item/def-real-power), [math:def-natural-logarithm](https://alphabetamath.cc/item/def-natural-logarithm)).

[F7] Natural integer powers satisfy $a^0=1$ and $a^{r+1}=a^r a$ for every real $a$ and integer $r\ge0$, including $a=0$ ([math:def-integer-power](https://alphabetamath.cc/item/def-integer-power)).

## Proof

**Proof technique:** direct.

1.1 For integers $x\ge1$ and $m\ge0$, Pascal's identity, obtained by separating subsets according to whether they contain a specified element, telescopes to $\sum_{r=0}^m(-1)^r\binom xr=(-1)^m\binom{x-1}m$; the binomial coefficient is zero beyond its range. The factorial formula agrees with subset counting because each $r$-subset admits $r!$ orders. For $x=0$, the sum is one. Write $\mathbf1_{\{x=0\}}$ for the function equal to one when $x=0$ and zero otherwise. Thus, for every $M\ge0$, $\sum_{r=0}^{2M+1}(-1)^r\binom xr\le\mathbf1_{\{x=0\}}\le\sum_{r=0}^{2M}(-1)^r\binom xr$. [F2, F7, algebra]

2.1 On $(\Omega_n,w_n)$, the function $\omega\mapsto\mathbf1_{\{X_n(\omega)=0\}}$ has expectation $\sum_{\omega:X_n(\omega)=0}w_n(\omega)=\mathbb P(X_n=0)$. Put $q_n=\mathbb P(X_n=0)$ and $T_{n,k}=\sum_{r=0}^k(-1)^r\mathbb E(X_n)_r/r!$. Taking expectations in step 1.1 and distributing the finite weighted sum over the finite sieve sums gives $T_{n,2M+1}\le q_n\le T_{n,2M}$ for every $M\ge0$. [step 1.1, F1, F2, F5, F7, algebra]

3.1 Put $s_k=\sum_{r=0}^k(-1)^r\lambda^r/r!$ and $L=\exp(-\lambda)$. The natural-power recursion gives $(-\lambda)^r=(-1)^r\lambda^r$ by induction on $r$, starting at $r=0$ with both sides equal to one. Thus $s_k\to L$ by the exponential series, including when $\lambda=0$. Fix $\varepsilon>0$ and choose $M$ so that both $|s_{2M+1}-L|<\varepsilon/3$ and $|s_{2M}-L|<\varepsilon/3$. For each of the finitely many $r\in\{0,\ldots,2M+1\}$, the given moment convergence supplies an $N_r$ such that $|\mathbb E(X_n)_r-\lambda^r|<\varepsilon r!/[3(2M+2)]$ for $n\ge N_r$. For $n\ge N=\max_{0\le r\le2M+1}N_r$, the triangle inequality gives $|T_{n,k}-s_k|\le\sum_{r=0}^k|\mathbb E(X_n)_r-\lambda^r|/r!<\varepsilon/3$ for both $k=2M$ and $k=2M+1$. The bounds from step 2.1 now imply $L-2\varepsilon/3<q_n<L+2\varepsilon/3$, so $|q_n-L|<\varepsilon$. This proves $q_n\to\exp(-\lambda)$ directly from the convergence definition. [step 2.1, F2, F3, F4, F7, given, choose, algebra]

4.1 The series at one gives $e=\exp(1)>0$, and the inverse logarithm gives $\log e=1$; hence $e^{-\lambda}=\exp(-\lambda\log e)=\exp(-\lambda)$ by the real-power definition. Substituting this identity into step 3.1 yields the stated zero-count limit. [step 3.1, F3, F6, algebra] ∎
