---
id: cor-matrix-rank-equals-the-rank-of-its-linear-map
kind: corollary
title: 'The rank of a matrix equals the rank of the linear map $x\mapsto Ax$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-row-space-column-space-nullspace-and-matrix-ranks, thm-row-rank-equals-column-rank, def-rank-and-nullity, def-matrix-product-and-identity-matrix, thm-matrix-multiplication-laws]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. Margalit and J. Rabinoff, Interactive Linear Algebra, §3.5"
      url: "https://textbooks.math.gatech.edu/ila/ila.pdf"
pipeline_run: null
---

## Statement

For $A\in M_{m\times n}(F)$, the matrix rank of $A$ equals the rank of the linear map $L_A:F^n\to F^m$ defined by $L_A(x)=Ax$.

## Facts & Assumptions

**Given:** A matrix $A\in M_{m\times n}(F)$ and its associated linear map $L_A$.

[L1] Matrix rank is row rank, which equals column rank ([[def-row-space-column-space-nullspace-and-matrix-ranks]]).

[L2] Row rank equals column rank ([[thm-row-rank-equals-column-rank]]).

[L3] The rank of a linear map is the dimension of its image ([[def-rank-and-nullity]]).

[L4] Matrix multiplication is given entrywise by $(Ax)_i=\sum_{j<n}a_{ij}x_j$ ([[def-matrix-product-and-identity-matrix]]).

[L5] Matrix multiplication distributes over addition and is compatible with scalar multiplication ([[thm-matrix-multiplication-laws]]).

## Proof

**Proof technique:** direct.

1.1 Fact [L5] shows that $L_A(x)=Ax$ is linear. By [L4], every value $Ax$ is a linear combination of the columns of $A$, with coefficients $x_j$, and every such combination is $Ax$ for that coefficient column. Hence $\operatorname{im}L_A=\operatorname{Col}(A)$. [L4, L5, algebra]

2.1 Taking dimensions and using [L1]–[L3] gives $\operatorname{rank}L_A=\dim\operatorname{Col}(A)=\operatorname{rank}A$. [step 1.1, L1, L2, L3] ∎
