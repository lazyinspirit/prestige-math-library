---
id: lem-author-2e2d9953c21a-sine-enclosures
kind: lemma
title: Rational sine enclosures from a finite factorial sum
domain: mathematics
status: draft
origin: pipeline
deps:
  - math:def-sine-and-cosine-by-power-series
  - math:lem-sine-and-cosine-series-converge-everywhere
  - math:def-factorial-and-falling-factorial
dependency_roles:
  math:def-sine-and-cosine-by-power-series: mathematical-premise
  math:lem-sine-and-cosine-series-converge-everywhere: mathematical-premise
  math:def-factorial-and-falling-factorial: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 0
---

## Statement

For an integer $N\ge0$ and rational $x$, put $S_N(x)=\sum_{k=0}^N(-1)^kx^{2k+1}/(2k+1)!$, $q=x^2/((2N+4)(2N+5))$ and $R_N(x)=|x|^{2N+3}/((2N+3)!(1-q))$. If $q<1$, then $\sin x\in[S_N(x)-R_N(x),S_N(x)+R_N(x)]$. For $0\le x\le1$, also $x-x^3/6\le\sin x\le x$.

## Facts & Assumptions

**Given:** The rational $x$, integer $N$ and $q<1$ above.

[F1] [[math:def-sine-and-cosine-by-power-series]] defines sine by its factorial series, absolutely convergent by [[math:lem-sine-and-cosine-series-converge-everywhere]].

[F2] [[math:def-factorial-and-falling-factorial]] defines $0!=1$ and $(n+1)!=(n+1)n!$ for integers $n\ge0$, and establishes that these factorials are positive and agree with their real-valued products.

## Proof

**Given:** The rational $x$, integer $N$ and $q<1$ above.

**Goal:** Prove the stated rational sine enclosures and elementary bounds.

1.1 Put $a_j=|x|^{2N+3+2j}/(2N+3+2j)!$ for integers $j\ge0$ and $u=a_0$. Factorial recursion gives $a_{j+1}=a_jx^2/((2N+4+2j)(2N+5+2j))\le q a_j$, including when $x=0$. Since $0\le q<1$, induction gives $a_j\le u q^j$. For every integer $m\ge0$, the finite geometric identity $(1-q)\sum_{j=0}^m q^j=1-q^{m+1}\le1$ therefore gives $\sum_{j=0}^m a_j\le u/(1-q)$. Absolute convergence permits passage to the limit and gives $|\sin x-S_N(x)|\le\sum_{j=0}^{\infty}a_j\le u/(1-q)=R_N(x)$. Hence $\sin x$ lies in the stated interval. Its endpoints are rational: factorial denominators and $1-q$ are positive, and all the displayed finite operations on the rational $x$ are exact rational operations. [given, F1, F2, algebra]

2.1 If $0\le x\le1$, put $v_k=x^{2k+1}/(2k+1)!$ for integers $k\ge0$. Then $v_k\ge0$ and factorial recursion gives $v_{k+1}=v_kx^2/((2k+2)(2k+3))\le v_k$, including at $x=0$. In every even-length finite tail after $x-x^3/6$, the consecutive pairs $v_{2j}-v_{2j+1}$ for $j\ge1$ are nonnegative; in every even-length finite tail after $x$, the pairs $-v_{2j+1}+v_{2j+2}$ for $j\ge0$ are nonpositive. Taking limits of these finite tails using the absolutely convergent sine series preserves the two signs. Thus $x-x^3/6\le\sin x\le x$, including $x=0$. [given, F1, F2, algebra] ∎
