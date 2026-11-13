---
title: Normalize the logarithmic random graph for nonbacktracking estimates
status: published
research_item: lem-author-6ad39f024b17-centered-normalization
dependency_level: 3
---

## Prerequisites

- [math:def-adjacency-matrix-of-a-finite-simple-graph](https://alphabetamath.cc/item/def-adjacency-matrix-of-a-finite-simple-graph)
- [math:def-bernoulli-and-binomial-random-variables](https://alphabetamath.cc/item/def-bernoulli-and-binomial-random-variables)
- [math:def-erdos-renyi-random-graph](https://alphabetamath.cc/item/def-erdos-renyi-random-graph)
- [math:def-expectation-on-a-finite-probability-space](https://alphabetamath.cc/item/def-expectation-on-a-finite-probability-space)
- [def-expander-sync-centered-matrices](item-def-expander-sync-centered-matrices)
- [math:thm-logarithm-slower-than-every-positive-power](https://alphabetamath.cc/item/thm-logarithm-slower-than-every-positive-power)
- [math:thm-integral-logarithm-is-unbounded](https://alphabetamath.cc/item/thm-integral-logarithm-is-unbounded)
- [math:cor-integral-logarithm-is-strictly-increasing](https://alphabetamath.cc/item/cor-integral-logarithm-is-strictly-increasing)
- [math:cor-integral-logarithm-agrees-with-natural-logarithm](https://alphabetamath.cc/item/cor-integral-logarithm-agrees-with-natural-logarithm)


## Statement

Fix $\gamma>1$, put $L=\log n$, $\mu=\gamma L$, $p=\mu/n$, and let $A$ be the adjacency matrix of $G(n,p)$. For all sufficiently large integers $n$, $0<p<1$ and $H=(A-\mathbb EA)/\sqrt\mu$ is real symmetric with independent mean-zero upper-triangular entries, zero diagonal, and
$$\max_i\sum_j\mathbb E|H_{ij}|^2\le1,\qquad\max_{i,j}\mathbb E|H_{ij}|^2\le1/n,\qquad\max_{i,j}|H_{ij}|\le1/\sqrt\mu.$$
Also $\mathbb EA=p(J-I)$, $A-pJ=\sqrt\mu H-pI$, and $1\le q=\sqrt\mu\le n^{1/10}$ eventually.

## Facts & Assumptions

[F1] For $G(n,p)$, $A_{ij}=A_{ji}$ for $i\ne j$ is the indicator of the unordered edge $\{i,j\}$, and $A_{ii}=0$. The indicators for distinct unordered edges are independent Bernoulli$(p)$ variables, taking values $1$ and $0$ with probabilities $p$ and $1-p$, respectively ([math:def-erdos-renyi-random-graph](https://alphabetamath.cc/item/def-erdos-renyi-random-graph), [math:def-adjacency-matrix-of-a-finite-simple-graph](https://alphabetamath.cc/item/def-adjacency-matrix-of-a-finite-simple-graph), [math:def-bernoulli-and-binomial-random-variables](https://alphabetamath.cc/item/def-bernoulli-and-binomial-random-variables)).

[F2] Expectation on a finite probability space is the weighted sum over its outcomes ([math:def-expectation-on-a-finite-probability-space](https://alphabetamath.cc/item/def-expectation-on-a-finite-probability-space)).

[F3] The article centers the adjacency matrix at $pJ$ ([def-expander-sync-centered-matrices](item-def-expander-sync-centered-matrices)).

[F4] For every $a>0$, $\log n/n^a\to0$ ([math:thm-logarithm-slower-than-every-positive-power](https://alphabetamath.cc/item/thm-logarithm-slower-than-every-positive-power)).

[F5] The integral logarithm is strictly increasing on $(0,\infty)$ and unbounded above, and equals the natural logarithm there ([math:cor-integral-logarithm-is-strictly-increasing](https://alphabetamath.cc/item/cor-integral-logarithm-is-strictly-increasing), [math:thm-integral-logarithm-is-unbounded](https://alphabetamath.cc/item/thm-integral-logarithm-is-unbounded), [math:cor-integral-logarithm-agrees-with-natural-logarithm](https://alphabetamath.cc/item/cor-integral-logarithm-agrees-with-natural-logarithm)).

## Proof

**Given:** The objects and hypotheses in the Statement.

**Goal:** Prove its conclusions.

1.1 For $i\ne j$, $\mathbb EA_{ij}=p$ and $\mathbb E(A_{ij}-p)^2=p(1-p)$ by the two Bernoulli outcomes. Hence $H_{ij}$ has mean zero, variance $p(1-p)/\mu\le1/n$ and absolute value at most $1/\sqrt\mu$. Its row variance sum is $(n-1)p(1-p)/\mu\le1$. The diagonal vanishes, and symmetry and independence follow from the edge coordinates. The mean matrix and centering identities follow entry by entry. [F1, F2, F3, given, algebra]

2.1 For any real $M$, [F5] gives $b>0$ with $\log b>M$; monotonicity then gives $\log n\ge\log b>M$ for every integer $n\ge b$. Thus $\log n\to\infty$ and $\mu=\gamma\log n\to\infty$. By [F4] with $a=1$ and $a=1/5$, $p=\gamma\log n/n\to0$ and $\mu/n^{1/5}\to0$. Consequently, for all sufficiently large integers $n$, $\mu\ge1$, $0<p<1$, and $\mu\le n^{1/5}$, giving $1\le q=\sqrt\mu\le n^{1/10}$. [F4, F5, step 1.1, algebra] ∎
