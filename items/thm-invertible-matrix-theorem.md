---
id: thm-invertible-matrix-theorem
kind: theorem
title: "Invertible matrix theorem: invertibility, full pivot rank, RREF $I$, trivial nullspace and unique solvability are equivalent"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-rref-consistency-and-free-variable-parametrisation, cor-matrix-rank-nullity, cor-matrix-rank-equals-the-rank-of-its-linear-map, thm-row-rank-equals-column-rank, def-invertible-matrix-and-general-linear-group, thm-invertible-matrices-correspond-to-linear-isomorphisms, thm-linear-kernel-image-and-injectivity, def-linear-isomorphism-and-invertible-linear-map]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. Margalit and J. Rabinoff, Interactive Linear Algebra, §3.6"
      url: "https://textbooks.math.gatech.edu/ila/ila.pdf"
pipeline_run: null
---

## Statement

For $A\in M_n(F)$, the following are equivalent:

1. $A$ is invertible;
2. $x\mapsto Ax$ is a linear isomorphism;
3. $N(A)=\{0\}$;
4. $\operatorname{rank}(A)=n$;
5. $A$ has a pivot in every row and every column;
6. the RREF of $A$ is $I_n$;
7. for every $b\in F^n$, the equation $Ax=b$ has exactly one solution.

## Facts & Assumptions

**Given:** A square matrix $A\in M_n(F)$.

[L1] RREF detects consistency and parametrises solutions by its nonpivot variables ([[thm-rref-consistency-and-free-variable-parametrisation]]).

[L2] Rank–nullity for matrices gives $\operatorname{rank}A+\dim N(A)=n$ ([[cor-matrix-rank-nullity]]).

[L3] Matrix rank equals the rank of $x\mapsto Ax$ ([[cor-matrix-rank-equals-the-rank-of-its-linear-map]]).

[L4] Matrix rank equals the number of pivots in any echelon form ([[thm-row-rank-equals-column-rank]]).

[L5] Matrix invertibility means existence of a two-sided matrix inverse ([[def-invertible-matrix-and-general-linear-group]]).

[L6] A square matrix is invertible exactly when its multiplication map is a linear isomorphism ([[thm-invertible-matrices-correspond-to-linear-isomorphisms]]).

[L7] A linear map is injective exactly when its kernel is trivial ([[thm-linear-kernel-image-and-injectivity]]).

[L8] A linear isomorphism is a linear map with a two-sided linear inverse ([[def-linear-isomorphism-and-invertible-linear-map]]).

## Proof

**Proof technique:** direct.

1.1 By [L6], matrix invertibility is equivalent to the multiplication map being an isomorphism. An isomorphism has a two-sided inverse by [L8], hence is injective, and [L7] then gives $N(A)=\{0\}$. [L5, L6, L7, L8]

2.1 By [L2], trivial nullspace is equivalent to rank $n$, and [L4] makes this equivalent to having $n$ pivots. A square matrix has $n$ pivots exactly when every row and column contains one. [step 1.1, L2, L3, L4]

3.1 An $n\times n$ RREF with a pivot in every row and column is $I_n$. By [L1], RREF $I_n$ is equivalent to the assertion that every right-hand side produces a consistent system with no free variable, hence exactly one solution. [step 2.1, L1]

4.1 Under condition 7, define $S(b)$ to be the unique solution of $Ax=b$. Then $L_A(S(b))=b$, and uniqueness for the right-hand side $Ax$ gives $S(L_A(x))=x$. Moreover, linearity of $L_A$ from [L3] gives $L_A(S(\lambda y+z))=\lambda y+z=L_A(\lambda S(y)+S(z))$; applying the inverse function $S$ proves that $S$ is linear. Thus $L_A$ has a two-sided linear inverse and is a linear isomorphism by [L8], so [L6] returns condition 1. Together with steps 1.1–3.1, this closes the implication cycle and proves all seven conditions equivalent. For $n=0$, the unique empty matrix is $I_0$, its map on the zero space is bijective, and every condition holds. [step 1.1, step 2.1, step 3.1, L3, L6, L8, algebra] ∎
