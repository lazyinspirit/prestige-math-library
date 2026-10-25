---
id: thm-dual-family-does-not-span-in-infinite-dimension
kind: theorem
title: 'For an infinite Hamel basis, its dual family is linearly independent but does not span the algebraic dual'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-dual-family-associated-to-a-basis, def-linear-independence, def-linear-basis]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: 'K. Conrad, Infinite-Dimensional Dual Spaces, Theorem 1'
      url: 'https://kconrad.math.uconn.edu/blurbs/linmultialg/dualspaceinfinite.pdf'
pipeline_run: null
---

## Statement

Let $B$ be an infinite Hamel basis of $V$. Its dual family $(b^*)_{b\in B}$ is linearly independent in $V^*$ but does not span $V^*$.

## Facts & Assumptions

**Given:** An infinite Hamel basis $B$ of $V$ and its dual family.

[L1] The dual family satisfies $b^*(c)=\delta_{bc}$ for $b,c\in B$ ([[def-dual-family-associated-to-a-basis]]).

[L2] Linear independence tests only finite linear relations ([[def-linear-independence]]).

[L3] A Hamel basis is a linearly independent spanning set, with span defined through finite linear combinations ([[def-linear-basis]]).

## Proof

**Proof technique:** direct.

1.1 If a finite relation $\sum_{b\in S}a_bb^*=0$ holds, evaluating it at each $c\in S$ gives $a_c=0$ by [L1]. Thus the dual family is linearly independent by [L2]. [L1, L2]

1.2 By [L3], every vector has a finite basis expansion. It is unique after zero coefficients are discarded, because subtracting two such expansions gives a finite relation in the independent set $B$. Hence $\phi(\sum_{b\in S}a_bb)=\sum_{b\in S}a_b$ is well defined and linear, and $\phi(b)=1$ for every $b\in B$. [L3, algebra]

2.1 Every finite linear combination of members of the dual family vanishes at all basis vectors outside its finite support. Since $B$ is infinite while $\phi(b)=1$ for every $b$, $\phi$ is not in their span. [step 1.2, L1, given]

3.1 The dual family is therefore independent but not spanning, so it is not a Hamel basis of $V^*$. [step 1.1, step 2.1] ∎
