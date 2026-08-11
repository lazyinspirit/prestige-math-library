---
id: prop-formal-derivative-laws
kind: proposition
title: 'Linearity, power rule, Leibniz rule and the degree bound for the formal derivative'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-formal-derivative-of-a-polynomial, lem-finite-sum-reindexing-and-fubini]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: 'Brian Conrad, Differential Criterion and Primitivity, Section 1'
      url: 'https://math.stanford.edu/~conrad/210BPage/handouts/sepfield.pdf'
pipeline_run: null
---

## Statement

For a commutative ring $R$, polynomials $f,g\in R[x]$, and $c\in R$:

1. $(f+g)'=f'+g'$ and $(cf)'=cf'$;
2. $(x^n)'=n x^{n-1}$ for every positive $n$, while every constant has derivative $0$;
3. $(fg)'=f'g+fg'$;
4. if $f'$ is nonzero, then $\deg f'\le\deg f-1$.

## Facts & Assumptions

**Given:** A commutative ring $R$ and polynomials $f=\sum_i a_i x^i$ and $g=\sum_j b_jx^j$.

[L1] The coefficient of $x^n$ in $f'$ is $(n+1)a_{n+1}$ ([[def-formal-derivative-of-a-polynomial]]).

[L2] Finite sums may be split, reindexed, and summed in either order over finite products ([[lem-finite-sum-reindexing-and-fubini]]).

## Proof

**Proof technique:** direct.

1.1 Comparing the coefficient at each index in [L1] proves additivity and scalar linearity; applying [L1] to a monomial gives the power rule, including derivative $0$ for constants. [given, L1, algebra]

1.2 The coefficient of $x^n$ in $(fg)'$ is $(n+1)\sum_{i+j=n+1}a_i b_j=\sum_{r+s=n}((r+1)a_{r+1}b_s+a_r(s+1)b_{s+1})$, where [L2] reindexes the two finite sums; these are exactly the coefficients of $f'g+fg'$. [given, L1, L2, algebra]

2.1 If $f$ has degree $d$ and $f'\ne0$, then [L1] makes every coefficient of $f'$ above index $d-1$ zero, so $\deg f'\le d-1$; steps 1.1 and 1.2 establish all remaining claims. [step 1.1, step 1.2, L1] ∎
