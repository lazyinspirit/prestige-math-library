---
id: cor-trace-is-invariant-under-similarity
kind: corollary
title: 'Similar matrices have the same trace'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-similar-matrices, thm-trace-of-ab-equals-trace-of-ba,
       def-invertible-matrix-and-general-linear-group, thm-matrix-multiplication-laws]
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
    - title: 'S. Axler, Linear Algebra Done Right, 4th ed., Theorem 8.50'
      url: 'https://linear.axler.net/LADR4e.pdf'
pipeline_run: null
---

## Statement

If square matrices $A$ and $B$ over $F$ are similar, then
$\operatorname{tr}(A)=\operatorname{tr}(B)$.

## Facts & Assumptions

**Given:** Similar matrices $A,B\in M_n(F)$.

[L1] Similarity means $B=P^{-1}AP$ for an invertible matrix $P$ ([[def-similar-matrices]]).

[L2] For conformable rectangular matrices $X,Y$, one has $\operatorname{tr}(XY)=\operatorname{tr}(YX)$ ([[thm-trace-of-ab-equals-trace-of-ba]]).

[L3] Matrix multiplication is associative and unital ([[thm-matrix-multiplication-laws]]).

## Proof

**Proof technique:** direct.

1.1 Choose invertible $P$ with $B=P^{-1}AP$ as in [L1]. [given, L1]

2.1 Apply [L2] to $X=P^{-1}A$ and $Y=P$ to obtain $\operatorname{tr}(B)=\operatorname{tr}(P(P^{-1}A))$. [step 1.1, L1, L2]

3.1 By associativity and unitality from [L3], $P(P^{-1}A)=(PP^{-1})A=I_nA=A$, so $\operatorname{tr}(B)=\operatorname{tr}(A)$. [step 2.1, L1, L2, L3] ∎
