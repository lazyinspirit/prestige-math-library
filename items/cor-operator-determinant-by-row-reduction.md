---
id: cor-operator-determinant-by-row-reduction
kind: corollary
title: "The determinant of an operator can be computed from any representing matrix by row reduction while tracking swaps and row scalings"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-operator-determinant-is-basis-independent,
       thm-gaussian-elimination-produces-row-echelon-form,
       thm-determinant-under-elementary-row-operations,
       thm-determinant-of-a-triangular-matrix]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Interactive Linear Algebra"
      url: "https://textbooks.math.gatech.edu/ila/ila.pdf"
pipeline_run: null
---

## Statement

Let $T$ be an operator on a positive-dimensional finite-dimensional vector
space over a field. Choose any ordered basis and row-reduce its representing
matrix. Row additions leave $\det(T)$ unchanged, every row swap changes its
sign, every nonzero row scaling by $c$ multiplies it by $c$, and the
determinant of the final triangular matrix is the product of its diagonal
entries.

## Facts & Assumptions

**Given:** $T$, an ordered basis $\mathcal B$, and
$A=[T]_{\mathcal B}$.

[L1] The operator determinant equals the determinant of its representing
matrix in every ordered basis
([[thm-operator-determinant-is-basis-independent]]).

[L2] Gaussian elimination over a field reduces every finite matrix to row
echelon form ([[thm-gaussian-elimination-produces-row-echelon-form]]).

[L3] A row swap negates a determinant, scaling one row by $c$ scales it by
$c$, and adding a scalar multiple of one row to another leaves it unchanged
([[thm-determinant-under-elementary-row-operations]]).

[L4] The determinant of a triangular square matrix is the product of its
diagonal entries ([[thm-determinant-of-a-triangular-matrix]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $\det(T)=\det(A)$, independently of the chosen basis. [L1]
1.2 Apply Gaussian elimination to $A$ and record, in order, every row operation used to reach an echelon matrix $U$. [L2]
2.1 Reversing the recorded effects in [L3] expresses $\det(A)$ in terms of $\det(U)$: each swap contributes a factor $-1$, each forward row scaling by $c\neq0$ contributes a reverse factor $c^{-1}$, and a row addition contributes no factor. [step 1.2, L3, algebra]
3.1 Since the square echelon matrix $U$ is upper triangular, [L4] gives $\det(U)$ as its diagonal product. Combining this with steps 1.1 and 2.1 proves the computation rule. [step 1.1, step 2.1, L4] ∎
