---
title: The unshifted lower Laplacian bound excludes a boundary degree
status: published
research_item: lem-author-5d47c15147c9-unshifted-diagonal-obstruction
dependency_level: 7
---

## Prerequisites

- [def-expander-sync-two-sided-expander](item-def-expander-sync-two-sided-expander)
- [def-expander-sync-erdos-renyi](item-def-expander-sync-erdos-renyi)
- [def-expander-sync-rate-function](item-def-expander-sync-rate-function)
- [math:thm-logarithm-slower-than-every-positive-power](https://alphabetamath.cc/item/thm-logarithm-slower-than-every-positive-power)


## Statement

Fix $\gamma>1$. For each positive integer $n$, put $\mu=\gamma\log n$ and $p=\mu/n$, and consider only $n$ for which $p\le1$. Let $c^-\in(-1,0)$ be the unshifted root of $\gamma((1+c)\log(1+c)-c)=1$. Define the scalar function $I(x)=x\log x-x+1$ for $x>0$; thus $I(1+c)=h(c)$ for $c>-1$. Set $a=1+c^-\in(0,1)$ and $k_n=\lceil a\mu-p\rceil-1$. In the loop-free graph $G(n,p)$, any vertex of degree $k_n$ prevents $c^-\mu I\preceq\Delta_L$, where $\Delta_L=D-A-\mu I+pJ$. Consequently it prevents the full $(n,\mu,\alpha,c^-,c^+)$-expander predicate, for every $\alpha,c^+$. Moreover $k_n=a\mu+O(1)$ as $n\to\infty$ at fixed $\gamma$, and $\gamma I(a)=1$.

## Facts & Assumptions

[F1] The expander predicate contains the lower quadratic-form inequality $c^-\mu I\preceq\Delta_L$, with $\Delta_L=D-A-\mu I+pJ$ ([def-expander-sync-two-sided-expander](item-def-expander-sync-two-sided-expander)).

[F2] The Erdős–Rényi graph is loop-free, so $A_{vv}=0$ and $D_{vv}=d(v)$ ([def-expander-sync-erdos-renyi](item-def-expander-sync-erdos-renyi)).

[F3] The function $h(c)=(1+c)\log(1+c)-c$ on $c>-1$ and the unshifted root satisfy $c^-\in(-1,0)$ and $\gamma h(c^-)=1$ ([def-expander-sync-rate-function](item-def-expander-sync-rate-function)).

[F4] At fixed $\gamma$, $p=\gamma\log n/n\to0$ ([math:thm-logarithm-slower-than-every-positive-power](https://alphabetamath.cc/item/thm-logarithm-slower-than-every-positive-power)).

## Proof

**Given:** The parameters, root and integer $k_n$ in the Statement.

**Goal:** Check the exact original diagonal obstruction including the centering term.

1.1 Evaluate the lower quadratic-form inequality in [F1] on the coordinate vector $e_v$ of norm one. By [F2] it requires $d(v)-\mu+p\ge c^-\mu$, equivalently $d(v)\ge a\mu-p$. The integer $k_n=\lceil a\mu-p\rceil-1$ is strictly smaller than $a\mu-p$, including when the latter is itself an integer. Thus $d(v)=k_n$ contradicts this necessary inequality. [F1, F2, given, algebra]

2.1 The defining property of the ceiling gives $-1\le k_n-(a\mu-p)<0$, so $|k_n-a\mu|\le1+p$. By [F4], $p\to0$ at fixed $\gamma$; hence every sufficiently large positive integer $n$ is admissible and $k_n=a\mu+O(1)$. The inline definition gives $I(a)=I(1+c^-)=h(c^-)$, so [F3] yields $\gamma I(a)=1$. These facts prove every assertion, and the unused adjacency bound cannot remove this necessary obstruction. [F1, F3, F4, given, step 1.1, algebra] ∎
