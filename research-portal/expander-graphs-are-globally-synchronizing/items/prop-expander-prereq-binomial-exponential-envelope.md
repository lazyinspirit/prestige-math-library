---
id: prop-expander-prereq-binomial-exponential-envelope
kind: proposition
title: Elementary binomial probability envelopes
domain: mathematics
status: published
origin: pipeline
deps:
  - math:def-probability-measure
  - math:def-random-element-and-real-random-variable
  - math:def-independence-of-finite-random-variables
  - math:def-bernoulli-and-binomial-random-variables
  - math:def-binomial-coefficient
  - math:def-factorial-and-falling-factorial
  - math:lem-binomial-count-law
  - math:thm-binomial-closed-formula
  - math:thm-logarithm-derivative-and-integral
  - math:thm-natural-logarithm-laws
  - math:lem-integral-elementary-bounds
  - math:lem-fundamental-theorem-and-integration-by-parts
  - math:lem-derivative-algebra-and-chain-rules
  - math:def-natural-logarithm
  - math:def-real-exponential-function-and-e
  - math:thm-exponential-addition-formula
  - math:thm-exponential-is-strictly-increasing
  - math:lem-exponential-dominates-one-plus-x
dependency_roles:
  math:def-probability-measure: mathematical-premise
  math:def-random-element-and-real-random-variable: mathematical-premise
  math:def-independence-of-finite-random-variables: mathematical-premise
  math:def-bernoulli-and-binomial-random-variables: mathematical-premise
  math:def-binomial-coefficient: mathematical-premise
  math:def-factorial-and-falling-factorial: mathematical-premise
  math:lem-binomial-count-law: mathematical-premise
  math:thm-binomial-closed-formula: mathematical-premise
  math:thm-logarithm-derivative-and-integral: mathematical-premise
  math:thm-natural-logarithm-laws: mathematical-premise
  math:lem-integral-elementary-bounds: mathematical-premise
  math:lem-fundamental-theorem-and-integration-by-parts: mathematical-premise
  math:lem-derivative-algebra-and-chain-rules: mathematical-premise
  math:def-natural-logarithm: mathematical-premise
  math:def-real-exponential-function-and-e: mathematical-premise
  math:thm-exponential-addition-formula: mathematical-premise
  math:thm-exponential-is-strictly-increasing: mathematical-premise
  math:lem-exponential-dominates-one-plus-x: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 0
---

## Statement

Let $N\ge k\ge1$ be integers and $0<p<1$. A $\operatorname{Bin}(N,p)$ count is the sum of $N$ mutually independent Bernoulli real random variables on a common probability space $(\Omega,\mathcal F,\mathbb P)$, each equal to $1$ with probability $p$ and $0$ otherwise. Then

$$\mathbb P(\operatorname{Bin}(N,p)=k)\le\frac{(Np)^k e^{-p(N-k)}}{k!}\le\exp\{k\log(Np/k)+k-p(N-k)\}.$$

Here $k!=1\cdot2\cdots k$, $e=\exp(1)$, and $\log$ is the inverse of the real exponential. In particular $k!\ge(k/e)^k$, $\binom Nk\le N^k/k!$, and $1-p\le e^{-p}$. Separately, for $N\ge0$ and $0<p<1$, $\mathbb P(\operatorname{Bin}(N,p)=0)=(1-p)^N\le e^{-Np}$; no logarithm of zero is used.

## Facts & Assumptions

[F1] A binomial count is the sum described above, and its mass at $k\in\{0,\ldots,N\}$ is $\binom Nk p^k(1-p)^{N-k}$. The coefficient $\binom Nk$ counts $k$-element subsets of an $N$-element set ([[math:def-probability-measure]], [[math:def-random-element-and-real-random-variable]], [[math:def-independence-of-finite-random-variables]], [[math:def-bernoulli-and-binomial-random-variables]], [[math:lem-binomial-count-law]], [[math:def-binomial-coefficient]]).

[F2] For $0\le k\le N$, $\binom Nk k!=N(N-1)\cdots(N-k+1)$, with the empty product equal to $1$; factorials are positive and $0!=1$ ([[math:thm-binomial-closed-formula]], [[math:def-factorial-and-falling-factorial]]).

[F3] On $(0,\infty)$, $\log$ is continuously differentiable with derivative $1/x$, is strictly increasing, and takes products to sums, with $\log1=0$ ([[math:thm-logarithm-derivative-and-integral]], [[math:thm-natural-logarithm-laws]]).

[F4] A continuous function bounded above by $M$ on $[a,b]$ has integral at most $M(b-a)$; the fundamental theorem evaluates the integral of a continuously differentiable function's derivative, and the product rule differentiates products ([[math:lem-integral-elementary-bounds]], [[math:lem-fundamental-theorem-and-integration-by-parts]], [[math:lem-derivative-algebra-and-chain-rules]]).

[F5] The real exponential is strictly increasing, $\log$ is its inverse, $e=\exp(1)$, and $\exp(u+v)=\exp(u)\exp(v)$ ([[math:def-natural-logarithm]], [[math:def-real-exponential-function-and-e]], [[math:thm-exponential-is-strictly-increasing]], [[math:thm-exponential-addition-formula]]).

[F6] If $0\le p\le1$ and $m$ is a nonnegative integer, then $(1-p)^m\le\exp(-mp)$; also $1+x\le\exp(x)$ for every real $x$ ([[math:lem-exponential-dominates-one-plus-x]]).

## Proof

**Given:** Integers $N\ge k\ge1$ and $0<p<1$; for the final case, an integer $N\ge0$ and $k=0$.

**Goal:** Prove both positive-count bounds, their stated elementary ingredients, and the zero-count bound.

1.1 For each integer $j\ge1$, [F3] gives $\log t\le\log(j+1)$ on $[j,j+1]$. By [F4], $\int_j^{j+1}\log t\,dt\le\log(j+1)$. The product rule and [F3] show that $t\log t-t$ is a continuously differentiable antiderivative of $\log t$ on $(0,\infty)$, so the same integral equals $(j+1)\log(j+1)-(j+1)-j\log j+j$. [F3, F4, algebra]

1.2 Each of the $k$ positive factors in the falling factorial in [F2] is at most $N$, so $\binom Nk\le N^k/k!$. With $m=N-k$, [F6] gives $(1-p)^{N-k}\le e^{-p(N-k)}$ and, at $x=-p$, $1-p\le e^{-p}$. Substituting these bounds into [F1] proves the first displayed inequality. [F1, F2, F6, algebra]

2.1 Sum the inequalities of step 1.1 for $j=1,\ldots,k-1$. The left sides telescope to $k\log k-k+1$, and the right side is $\sum_{i=2}^k\log i=\log(k!)$ by [F2] and [F3]. For $k=1$ the same inequality holds directly. Thus $\log(k!)\ge k\log k-k$. Applying the increasing exponential and [F5] yields $k!\ge(k/e)^k$. [step 1.1, F2, F3, F5, algebra]

3.1 By step 2.1 and positivity, $1/k!\le(e/k)^k$. Multiplying by the nonnegative remaining factors and using the logarithm inverse and exponential addition laws in [F5] gives $\frac{(Np)^k e^{-p(N-k)}}{k!}\le\exp\{k\log(Np/k)+k-p(N-k)\}$. [step 2.1, F5, algebra]

4.1 For $k=0$, [F1] and the boundary value $\binom N0=1$ give probability $(1-p)^N$; [F6] bounds it by $e^{-Np}$. This also holds for $N=0$, when both sides equal $1$. The stated bounds follow. [F1, F6, algebra] ∎

## Remarks

The displayed inequalities are finite bounds. Any later asymptotic replacement of $N=n-1$ or of an integer $k$ by a real threshold requires its own explicit error estimate.
