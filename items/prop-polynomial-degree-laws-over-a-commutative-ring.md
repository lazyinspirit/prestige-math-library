---
id: prop-polynomial-degree-laws-over-a-commutative-ring
kind: proposition
title: 'Degree inequalities for sums and products over a commutative ring'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-polynomial-degree-leading-coefficient-and-monic, def-polynomial-ring-over-a-commutative-ring]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: 'Neil Donaldson, Math 120B Notes, Theorem 22.3'
      url: 'https://www.math.uci.edu/~ndonalds/math120b/2poly.pdf'
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring and let $f,g\in R[x]$ be nonzero.

1. If $f+g\ne0$, then $\deg(f+g)\le\max\{\deg f,\deg g\}$.
2. The coefficient of $x^{\deg f+\deg g}$ in $fg$ is $\operatorname{lc}(f)\operatorname{lc}(g)$. If $fg\ne0$, then $\deg(fg)\le\deg f+\deg g$.

## Facts & Assumptions

**Given:** Nonzero polynomials $f=\sum_i a_i x^i$ and $g=\sum_j b_jx^j$ over a commutative ring $R$.

[L1] Degree is the greatest index with nonzero coefficient, and the coefficient there is the leading coefficient ([[def-polynomial-degree-leading-coefficient-and-monic]]).

[L2] Polynomial addition is coefficientwise and the coefficient of $x^k$ in a product is $\sum_{i+j=k}a_i b_j$ ([[def-polynomial-ring-over-a-commutative-ring]]).

## Proof

**Proof technique:** direct.

1.1 For every $k>\max\{\deg f,\deg g\}$ both $a_k$ and $b_k$ vanish, so the coefficient of $x^k$ in $f+g$ vanishes; if the sum is nonzero, [L1] gives the stated inequality. [given, L1, L2]

2.1 Put $m=\deg f$ and $n=\deg g$. For $k>m+n$, every pair $i+j=k$ has $i>m$ or $j>n$, while for $k=m+n$ the only possibly nonzero summand is $a_m b_n$; hence the top displayed coefficient is $\operatorname{lc}(f)\operatorname{lc}(g)$ and any nonzero product has degree at most $m+n$. [given, L1, L2, algebra] ∎
