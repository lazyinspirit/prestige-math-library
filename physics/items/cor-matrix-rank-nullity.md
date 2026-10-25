---
id: cor-matrix-rank-nullity
kind: corollary
title: 'For an $m\times n$ matrix $A$, $\operatorname{rank}(A)+\dim N(A)=n$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-matrix-rank-equals-the-rank-of-its-linear-map, thm-rank-nullity, def-row-space-column-space-nullspace-and-matrix-ranks]
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
    - title: "D. Margalit and J. Rabinoff, Interactive Linear Algebra, §2.9"
      url: "https://textbooks.math.gatech.edu/ila/ila.pdf"
pipeline_run: null
---

## Statement

For $A\in M_{m\times n}(F)$,
$$\operatorname{rank}(A)+\dim_F N(A)=n.$$

## Facts & Assumptions

**Given:** The linear map $L_A:F^n\to F^m$, $x\mapsto Ax$.

[L1] Matrix rank equals the rank of $L_A$ ([[cor-matrix-rank-equals-the-rank-of-its-linear-map]]).

[L2] Rank–nullity gives $\dim V=\operatorname{rank}T+\dim\ker T$ for a linear map with finite-dimensional domain ([[thm-rank-nullity]]).

[L3] $N(A)=\{x:Ax=0\}$ ([[def-row-space-column-space-nullspace-and-matrix-ranks]]).

## Proof

**Proof technique:** direct.

1.1 Apply rank–nullity to $L_A:F^n\to F^m$ to obtain $n=\operatorname{rank}L_A+\dim\ker L_A$. [L2]

2.1 By [L1] the first term is $\operatorname{rank}A$, and by [L3] the kernel is $N(A)$. Substitution proves the formula, including $n=0$. [step 1.1, L1, L3] ∎
