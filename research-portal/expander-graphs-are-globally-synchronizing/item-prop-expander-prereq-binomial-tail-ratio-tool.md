---
title: Binomial mass ratios and geometric tail domination
status: draft
research_item: prop-expander-prereq-binomial-tail-ratio-tool
dependency_level: 0
---

## Prerequisites

- [math:def-bernoulli-and-binomial-random-variables](https://alphabetamath.cc/item/def-bernoulli-and-binomial-random-variables)
- [math:lem-binomial-count-law](https://alphabetamath.cc/item/lem-binomial-count-law)
- [math:def-binomial-coefficient](https://alphabetamath.cc/item/def-binomial-coefficient)
- [math:thm-binomial-closed-formula](https://alphabetamath.cc/item/thm-binomial-closed-formula)
- [math:def-random-element-and-real-random-variable](https://alphabetamath.cc/item/def-random-element-and-real-random-variable)
- [math:def-probability-measure](https://alphabetamath.cc/item/def-probability-measure)
- [math:def-measure](https://alphabetamath.cc/item/def-measure)
- [math:thm-induction-principle](https://alphabetamath.cc/item/thm-induction-principle)
- [math:thm-geometric-series](https://alphabetamath.cc/item/thm-geometric-series)


## Statement

Let $N$ be a nonnegative integer and $0<p<1$. Let $B\sim\operatorname{Bin}(N,p)$, meaning that $B$ is the sum of $N$ independent Bernoulli$(p)$ variables, and put $f_j=\mathbb P(B=j)$ for $0\le j\le N$. For every integer $1\le j\le N$, $f_j>0$ and $f_{j-1}/f_j=j(1-p)/((N-j+1)p)$. Equivalently, for $0\le j<N$, $f_{j+1}/f_j=(N-j)p/((j+1)(1-p))$.

Let $k$ be an integer with $0\le k\le N$, and let $0\le q<1$. If $f_{j-1}\le qf_j$ for all integers $1\le j\le k$, then $\mathbb P(B\le k)\le f_k/(1-q)$. If $f_{j+1}\le qf_j$ for all integers $k\le j<N$, then $\mathbb P(B\ge k)\le f_k/(1-q)$. Empty index ranges impose no conditions. Thus the conclusions include $k=0$, $k=N$, and $N=0$; every displayed denominator is positive.

## Statement references

[math:def-bernoulli-and-binomial-random-variables](https://alphabetamath.cc/item/def-bernoulli-and-binomial-random-variables)

[math:lem-binomial-count-law](https://alphabetamath.cc/item/lem-binomial-count-law)

[math:def-binomial-coefficient](https://alphabetamath.cc/item/def-binomial-coefficient)

[math:def-random-element-and-real-random-variable](https://alphabetamath.cc/item/def-random-element-and-real-random-variable)

[math:def-probability-measure](https://alphabetamath.cc/item/def-probability-measure)

[math:def-measure](https://alphabetamath.cc/item/def-measure)

## Facts & Assumptions

[F1] Random variables are measurable real-valued maps on a probability space $(\Omega,\mathcal F,\mathbb P)$; probabilities of their values refer to measurable inverse-image events. [math:def-random-element-and-real-random-variable](https://alphabetamath.cc/item/def-random-element-and-real-random-variable) [math:def-probability-measure](https://alphabetamath.cc/item/def-probability-measure) A binomial$(N,p)$ variable is the sum of $N$ independent Bernoulli$(p)$ variables; when $N=0$ the sum is zero. A Bernoulli$(p)$ variable takes values $1$ and $0$ with probabilities $p$ and $1-p$ respectively. [math:def-bernoulli-and-binomial-random-variables](https://alphabetamath.cc/item/def-bernoulli-and-binomial-random-variables)

[F2] For $0\le j\le N$, the mass is $f_j=\binom Nj p^j(1-p)^{N-j}$. [math:lem-binomial-count-law](https://alphabetamath.cc/item/lem-binomial-count-law)

[F3] The binomial coefficient counts $j$-element subsets of an $N$-element set, and for $0\le j\le N$ it satisfies $\binom Nj=N!/(j!(N-j)!)$. [math:def-binomial-coefficient](https://alphabetamath.cc/item/def-binomial-coefficient) [math:thm-binomial-closed-formula](https://alphabetamath.cc/item/thm-binomial-closed-formula)

[F4] On any probability space, $\mathbb P$ is a measure with $\mathbb P(\Omega)=1$. Thus $\mathbb P(\varnothing)=0$ and $\mathbb P$ is countably additive on pairwise disjoint measurable events. [math:def-probability-measure](https://alphabetamath.cc/item/def-probability-measure) [math:def-measure](https://alphabetamath.cc/item/def-measure)

[F5] Induction on a nonnegative integer permits a base case and a successor step. [math:thm-induction-principle](https://alphabetamath.cc/item/thm-induction-principle)

[F6] For $0\le q<1$, $\sum_{r=0}^{\infty}q^r=1/(1-q)$, with $q^0=1$ even when $q=0$. [math:thm-geometric-series](https://alphabetamath.cc/item/thm-geometric-series)

## Proof

**Given:** The hypotheses in the Statement.

**Goal:** Prove the adjacent-mass identities and both tail bounds.

1.1 The factorial formula in [F3] makes every $\binom Nj$ positive for $0\le j\le N$. Since $p$ and $1-p$ are positive, [F2] gives $f_j>0$. For $1\le j\le N$, cancellation in [F2] and [F3] gives $f_{j-1}/f_j=j(1-p)/((N-j+1)p)$. All factors canceled are positive. Taking the reciprocal and replacing $j$ by $j+1$ gives the displayed forward ratio for $0\le j<N$; its denominator is positive. When $N=0$ both ratio ranges are empty. [F2, F3, algebra]

1.2 Let $E_0,\ldots,E_m$ be pairwise disjoint measurable events, and set $E_r=\varnothing$ for $r>m$. Applying countable additivity from [F4] to this sequence gives $\mathbb P(\bigcup_{r=0}^{m}E_r)=\sum_{r=0}^{\infty}\mathbb P(E_r)=\sum_{r=0}^{m}\mathbb P(E_r)$, because each appended term has probability zero. This establishes finite additivity on the underlying probability space without requiring its sample space to be finite. If $A\subseteq C$ are measurable, applying this to $C=A\mathbin{\dot\cup}(C\setminus A)$ and using nonnegativity gives $\mathbb P(A)\le\mathbb P(C)$. Applying it to $\Omega=A\mathbin{\dot\cup}(\Omega\setminus A)$ gives $\mathbb P(\Omega\setminus A)=1-\mathbb P(A)$. [F4]

2.1 Write $B=\sum_{i=1}^N X_i$ as in [F1]. For each $1\le i\le N$, the measurable events $\{X_i=0\}$ and $\{X_i=1\}$ are disjoint and have probabilities $1-p$ and $p$, so step 1.2 gives $\mathbb P(C_i)=0$ for $C_i=\{X_i\notin\{0,1\}\}$. Put $D_i=C_i\setminus\bigcup_{h<i}C_h$. These measurable sets are pairwise disjoint, satisfy $D_i\subseteq C_i$, and have union $E=\bigcup_{i=1}^N C_i$. By monotonicity and finite additivity in step 1.2, $\mathbb P(E)=\sum_{i=1}^N\mathbb P(D_i)=0$. Outside $E$, every summand is $0$ or $1$, so $B\in\{0,\ldots,N\}$. The measurable event $S=\{B\notin\{0,\ldots,N\}\}$ is therefore contained in $E$ and has probability zero by monotonicity. When $N=0$, the unions are empty and $B=0$, so the same conclusion holds. [F1, step 1.2, algebra]

3.1 Under the lower-tail hypothesis, induction on $r$ gives $f_{k-r}\le q^r f_k$ for each $0\le r\le k$: the base case is equality, and the successor step uses $f_{k-r-1}\le qf_{k-r}$ and $q\ge0$. The measurable residual event $R_-=\{B\le k\}\setminus\bigcup_{j=0}^k\{B=j\}$ is contained in $S$ from step 2.1 and hence has probability zero by step 1.2. Thus the tail event is the disjoint union of $R_-$ and the level events $\{B=j\}$ for $0\le j\le k$. Finite additivity gives $\mathbb P(B\le k)=\sum_{j=0}^k f_j\le f_k\sum_{r=0}^k q^r$. The omitted terms of the convergent series in [F6] are nonnegative, so this is at most $f_k/(1-q)$. This reasoning includes $q=0$ and the empty adjacent-mass range when $k=0$. [F1, F5, F6, step 1.2, step 2.1, algebra]

4.1 Under the upper-tail hypothesis, induction on $r$ gives $f_{k+r}\le q^r f_k$ for $0\le r\le N-k$: the base case is equality, and for $r<N-k$ the successor step uses $f_{k+r+1}\le qf_{k+r}$ and $q\ge0$. The measurable residual event $R_+=\{B\ge k\}\setminus\bigcup_{j=k}^N\{B=j\}$ is contained in $S$ from step 2.1 and hence has probability zero by step 1.2. Thus the tail event is the disjoint union of $R_+$ and the level events $\{B=j\}$ for $k\le j\le N$. Finite additivity gives $\mathbb P(B\ge k)=\sum_{j=k}^N f_j\le f_k\sum_{r=0}^{N-k}q^r$. Since the omitted terms are nonnegative, [F6] gives $\sum_{r=0}^{N-k}q^r\le1/(1-q)$. This includes the empty adjacent-mass range when $k=N$. Both tail denominators are positive because $q<1$, completing the proof. [F1, F5, F6, step 1.2, step 2.1, algebra] ∎
