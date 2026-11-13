---
title: Components between two vertices and half the graph disappear in the window
status: published
research_item: lem-author-c1dce5041ae4-small-component-sum
dependency_level: 1
---

## Prerequisites

- [lem-author-c1dce5041ae4-component-parent-bound](item-lem-author-c1dce5041ae4-component-parent-bound)
- [def-expander-prereq-asymptotic-quantifiers](item-def-expander-prereq-asymptotic-quantifiers)
- [math:thm-logarithm-slower-than-every-positive-power](https://alphabetamath.cc/item/thm-logarithm-slower-than-every-positive-power)
- [math:def-erdos-renyi-random-graph](https://alphabetamath.cc/item/def-erdos-renyi-random-graph)
- [math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)
- [math:def-expectation-on-a-finite-probability-space](https://alphabetamath.cc/item/def-expectation-on-a-finite-probability-space)
- [math:def-binomial-coefficient](https://alphabetamath.cc/item/def-binomial-coefficient)
- [math:def-factorial-and-falling-factorial](https://alphabetamath.cc/item/def-factorial-and-falling-factorial)
- [math:def-indicator-random-variable](https://alphabetamath.cc/item/def-indicator-random-variable)
- [prop-expander-prereq-binomial-exponential-envelope](item-prop-expander-prereq-binomial-exponential-envelope)
- [math:def-natural-logarithm](https://alphabetamath.cc/item/def-natural-logarithm)
- [math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws)
- [math:thm-exponential-is-strictly-increasing](https://alphabetamath.cc/item/thm-exponential-is-strictly-increasing)
- [math:thm-exponential-addition-formula](https://alphabetamath.cc/item/thm-exponential-addition-formula)



## Statement

Suppose $p=(\log n+c_n)/n$, where $(c_n)$ is bounded and $p\in[0,1]$. In $G(n,p)$, the probability of a component of order $k$ with $2\le k\le n/2$ tends to zero.

## Facts & Assumptions

[F1] For the component count $X_k$, $\mathbb EX_k\le\binom nk k^{k-1}p^{k-1}(1-p)^{k(n-k)}$ ([lem-author-c1dce5041ae4-component-parent-bound](item-lem-author-c1dce5041ae4-component-parent-bound)).

[F2] A bounded sequence is eventually bounded in absolute value, and $O$ and $o$ have their stated sequence meanings ([def-expander-prereq-asymptotic-quantifiers](item-def-expander-prereq-asymptotic-quantifiers)).

[F3] For integers $N\ge k\ge1$ and $0<p<1$, the binomial exponential envelope includes $\binom Nk\le N^k/k!$, $k!\ge(k/e)^k$ and $1-p\le e^{-p}$. Here $e=\exp(1)$, and throughout this proof $e^s$ denotes $\exp(s)$ ([prop-expander-prereq-binomial-exponential-envelope](item-prop-expander-prereq-binomial-exponential-envelope)).

[F4] For every $a>0$, $\log n/n^a\to0$ ([math:thm-logarithm-slower-than-every-positive-power](https://alphabetamath.cc/item/thm-logarithm-slower-than-every-positive-power)).

[F5] The model is the simple independent-edge graph ([math:def-erdos-renyi-random-graph](https://alphabetamath.cc/item/def-erdos-renyi-random-graph)).

[F6] Component order is the cardinality of its vertex set ([math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)).

[F7] The expectation is the sum of values times outcome weights ([math:def-expectation-on-a-finite-probability-space](https://alphabetamath.cc/item/def-expectation-on-a-finite-probability-space)).

[F8] The binomial coefficient $\binom nk$ counts the $k$-element subsets of an $n$-element set ([math:def-binomial-coefficient](https://alphabetamath.cc/item/def-binomial-coefficient)).

[F9] The factorial is the positive product $k!=\prod_{j=1}^k j$ ([math:def-factorial-and-falling-factorial](https://alphabetamath.cc/item/def-factorial-and-falling-factorial)).

[F10] The indicator $\mathbf 1_E$ of an event $E$ equals one on $E$ and zero off $E$ ([math:def-indicator-random-variable](https://alphabetamath.cc/item/def-indicator-random-variable)).

[F11] The logarithm is continuous and strictly increasing on $(0,\infty)$, is onto $\mathbb R$, and satisfies $\log1=0$. It is inverse to the exponential, so $\exp(\log x)=x$ for $x>0$ and $\log(\exp s)=s$ for real $s$ ([math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws), [math:def-natural-logarithm](https://alphabetamath.cc/item/def-natural-logarithm)).

[F12] The exponential is continuous and strictly increasing on $\mathbb R$, and $\exp(s+t)=\exp(s)\exp(t)$ for real $s,t$ ([math:thm-exponential-is-strictly-increasing](https://alphabetamath.cc/item/thm-exponential-is-strictly-increasing), [math:thm-exponential-addition-formula](https://alphabetamath.cc/item/thm-exponential-addition-formula)). In the inverse pair in [F11] its values are positive; $\exp(0)=\exp(\log1)=1$, so the addition law also gives $\exp(-s)=1/\exp(s)$.

## Proof

**Given:** The objects and hypotheses of the Statement.

**Goal:** Prove that the probability of any component of order between two and half the graph tends to zero.

1.1 Choose $C>0$ with $|c_n|\le C$ eventually and set $a=np=\log n+c_n$. By [F11], $\log n\to+\infty$: for any real $M$, choose $x_M>0$ with $\log x_M=M$ and then use monotonicity for $n>x_M$. Hence eventually $\tfrac12\log n\le a\le2\log n$, $a>1$ and $0<p<1$, since [F4] with exponent $1$ gives $\log n/n\to0$. For $1\le k\le n$, [F3] with $N=n$ and this admissible $p$ gives $1-p\le\exp(-p)$ and $\binom nk\le(en/k)^k$. These inequalities apply to every component index used below. [F2, F3, F4, F8, F9, F11, algebra]

2.1 Fix an integer $k$ between $2$ and $10$. From [F1] and [F3], raising the nonnegative inequality $1-p\le\exp(-p)$ to the integer power $k(n-k)$ and using the exponential addition law gives $\mathbb EX_k\le(k^{k-1}/k!)n^kp^{k-1}\exp(-pk(n-k))$ for sufficiently large $n$. By [F11] and [F12], $\exp(-pk(n-k))=n^{-k}\exp(-kc_n+k^2a/n)$. Here $a/n\to0$ by step 1.1 and [F4], and $|c_n|\le C$, so the final exponential factor is bounded, for example by $\exp(kC+1)$ eventually. Thus $\mathbb EX_k=O((\log n/n)^{k-1})\to0$. There are only nine such fixed values of $k$, so their sum tends to zero. [F1, F2, F3, F4, F11, F12, step 1.1, algebra]

2.2 For $11\le k\le n/2$, [F1] and step 1.1 give $\mathbb EX_k\le(kp)^{-1}[enp\exp(-np/2)]^k\le p^{-1}q_n^k$, where $q_n=ea\exp(-a/2)$. The inverse relation and addition law imply $\exp(-\log n/2)=1/\sqrt n$: both sides are positive and their squares equal $1/n$. Consequently $q_n=ea\exp(-c_n/2)/\sqrt n=O(\log n/\sqrt n)\to0$ by [F4]. Eventually $0<q_n<1/2$, and $p^{-1}=n/a=O(n/\log n)$. Multiplying a finite geometric sum by $1-q_n$ and discarding its nonnegative last term yields $\sum_{k=11}^{\lfloor n/2\rfloor}\mathbb EX_k\le p^{-1}q_n^{11}/(1-q_n)=O((\log n)^{10}/n^{9/2})\to0$. For the final limit use [F4] with exponent $9/20$ and take the tenth power. An empty index range has sum zero and obeys the same bound. [F1, F2, F4, F11, F12, step 1.1, algebra]

3.1 The indicator that any such component exists is at most $\sum_{k=2}^{\lfloor n/2\rfloor}X_k$, pointwise on the finite graph space. By the finite weighted-sum expectation, its expectation is the event probability and is at most the sum of the component expectations. Steps 2.1 and 2.2 show that this sum tends to zero, proving the Statement. [F5, F6, F7, F10, step 2.1, step 2.2, algebra] ∎
