---
title: Elementary estimates used for degree expectations
status: published
research_item: lem-expander-sync-elementary-degree-estimates
dependency_level: 1
sources:
  references:
    - title: Expander graphs are globally synchronizing — Abdalla, Bandeira, Kassabov,
        Souza, Strogatz, Townsend (2026)
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 37, proof of Proposition 6.9, binomial and factorial estimates
      statement: The proof uses $1-x\le e^{-x}$, $\binom nk\le n^k/k!$, and
        $k!\ge(k/e)^k$ in estimating degree expectations.
      hypotheses: The displayed binomial estimate is used for the degree-count
        indices; the factorial estimate is used at a positive count and the
        exponential estimate at the edge probability.
      reading_limits: The extracted article text at the cited proof was inspected for
        attribution and use of these estimates. The article is not used as a
        proof of the estimates.
---

PDF p. 37: ` Proof of Proposition 6.9, binomial and factorial estimates `

## Prerequisites

- [prop-expander-prereq-binomial-exponential-envelope](item-prop-expander-prereq-binomial-exponential-envelope)
- [math:def-binomial-coefficient](https://alphabetamath.cc/item/def-binomial-coefficient)
- [math:def-factorial-and-falling-factorial](https://alphabetamath.cc/item/def-factorial-and-falling-factorial)
- [math:def-real-exponential-function-and-e](https://alphabetamath.cc/item/def-real-exponential-function-and-e)
- [math:lem-exponential-dominates-one-plus-x](https://alphabetamath.cc/item/lem-exponential-dominates-one-plus-x)


## Statement

For every real $x$, $1-x\le e^{-x}$. For integers $n\ge0$ and $0\le k\le n$, $\binom nk\le n^k/k!$, with $n^0=1$ even when $n=0$. For every positive integer $k$, $k!\ge(k/e)^k$.

Here $\binom nk$ counts the $k$-element subsets of an $n$-element set, $k!=1\cdot2\cdots k$ with $0!=1$, and $e=\exp(1)$, where $e^t=\exp(t)$.

## Facts & Assumptions

[F1] For every real $t$, $1+t\le\exp(t)$ ([math:lem-exponential-dominates-one-plus-x](https://alphabetamath.cc/item/lem-exponential-dominates-one-plus-x)).

[F2] For integers $N\ge k\ge1$ and any $0<p<1$, the elementary binomial envelope includes $\binom Nk\le N^k/k!$ and $k!\ge(k/e)^k$ ([prop-expander-prereq-binomial-exponential-envelope](item-prop-expander-prereq-binomial-exponential-envelope)).

[F3] The binomial coefficient counts subsets and $\binom n0=1$ for every integer $n\ge0$ ([math:def-binomial-coefficient](https://alphabetamath.cc/item/def-binomial-coefficient)). The factorial has $0!=1$ and is the product of the positive integers through its index ([math:def-factorial-and-falling-factorial](https://alphabetamath.cc/item/def-factorial-and-falling-factorial)). The real exponential notation and $e=\exp(1)$ are as in [math:def-real-exponential-function-and-e](https://alphabetamath.cc/item/def-real-exponential-function-and-e).

## Proof

**Given:** A real $x$, integers $n\ge0$ and $0\le k\le n$, and a positive integer wherever the factorial lower bound is asserted.

**Goal:** Establish the three stated inequalities, including the case $k=0$ in the binomial bound.

1.1 Apply [F1] with $t=-x$. This gives $1-x\le\exp(-x)=e^{-x}$. [F1, F3, algebra]

1.2 If $k\ge1$, choose $p=1/2$ and apply [F2] with $N=n$ to obtain $\binom nk\le n^k/k!$. If $k=0$, [F3] gives $\binom n0=1$ and $0!=1$, while the stated zeroth-power convention gives $n^0=1$; hence the same inequality is equality, including at $n=0$. [F2, F3, algebra]

2.1 For any positive integer $k$, apply [F2] with $N=k$ and $p=1/2$. Its factorial conclusion gives $k!\ge(k/e)^k$. Together with steps 1.1 and 1.2 this proves all three estimates. [F2, step 1.1, step 1.2] ∎

## Source notes

The cited article uses these estimates in the proof of Proposition 6.9 to bound degree expectations; the argument above derives them from the stated mathematical suppliers. In that application the exponential inequality is used with the edge probability $p\in(0,1)$.
