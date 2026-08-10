---
id: thm-invertible-matrix-theorem
kind: theorem
title: "Invertible matrix theorem: invertibility, full pivot rank, RREF $I$, trivial nullspace and unique solvability are equivalent"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-rref-consistency-and-free-variable-parametrisation, cor-matrix-rank-nullity, cor-matrix-rank-equals-the-rank-of-its-linear-map, def-invertible-matrix-and-general-linear-group, thm-invertible-matrices-correspond-to-linear-isomorphisms, thm-linear-kernel-image-and-injectivity]
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

[L4] Matrix invertibility means existence of a two-sided matrix inverse ([[def-invertible-matrix-and-general-linear-group]]).

[L5] A square matrix is invertible exactly when its multiplication map is a linear isomorphism ([[thm-invertible-matrices-correspond-to-linear-isomorphisms]]).

[L6] A linear map is injective exactly when its kernel is trivial ([[thm-linear-kernel-image-and-injectivity]]).

## Proof

**Proof technique:** direct.

1.1 By [L5], matrix invertibility is equivalent to the multiplication map being an isomorphism; an isomorphism is bijective, and [L6] identifies injectivity with $N(A)=\{0\}$. [L4, L5, L6]

2.1 By [L2] and [L3], trivial nullspace is equivalent to rank $n$, which is equivalent to having $n$ pivots. A square matrix has $n$ pivots exactly when every row and column contains one. [step 1.1, L2, L3]

3.1 An $n\times n$ RREF with a pivot in every row and column is $I_n$. By [L1], RREF $I_n$ is equivalent to the assertion that every right-hand side produces a consistent system with no free variable, hence exactly one solution. [step 2.1, L1]

4.1 The implications in steps 1.1–3.1 are equivalences, so they run in both directions and prove all seven conditions equivalent. For $n=0$, the unique empty matrix is $I_0$, its map on the zero space is bijective, and every condition holds. [step 3.1] ∎

