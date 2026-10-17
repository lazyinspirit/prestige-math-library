---
id: ex-ilu0-tridiagonal-factorization
kind: example
title: "ILU(0) factors of a three-row tridiagonal matrix"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps:
  - alg-ilu0-fixed-pattern-factorization
  - def-csr-matrix-with-stored-entry-semantics
  - def-matrix-product-and-identity-matrix
  - thm-rat-field
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pending
sources:
  references:
    - title: "Yousef Saad, Iterative Methods for Sparse Linear Systems, 2nd ed., §10.3.2, printed pp. 307–310"
      url: "https://www-users.cse.umn.edu/~saad/IterMethBook_2ndEd.pdf"
    - title: "Richard Barrett et al., Templates for the Solution of Linear Systems: Building Blocks for Iterative Methods, 2nd ed., §3.4.2, printed pp. 39–41"
      url: "https://www.netlib.org/templates/templates.pdf"
---

## Example

Take
$$A=\begin{pmatrix}4&-1&0\\-1&4&-1\\0&-1&4\end{pmatrix}.$$
In the natural order, fixed-pattern ILU(0) returns
$$L=\begin{pmatrix}1&0&0\\-1/4&1&0\\0&-4/15&1\end{pmatrix},\qquad U=\begin{pmatrix}4&-1&0\\0&15/4&-1\\0&0&56/15\end{pmatrix},$$
and here $LU=A$ exactly.

## Facts & Assumptions

**Given:** The displayed $3\times3$ matrix over $\mathbb Q$, represented by canonical CSR with
strictly increasing column indices in each row, and the fixed natural ordering.

[F1] [[alg-ilu0-fixed-pattern-factorization]]: each lower multiplier is formed by dividing the current work entry by the already computed pivot, and updates are made only at matching positions retained in the input pattern.

[F2] [[def-csr-matrix-with-stored-entry-semantics]]: a canonical CSR record has no repeated column and no stored zero; its row intervals and column indices determine the represented matrix.

[F3] [[def-matrix-product-and-identity-matrix]]: matrix multiplication is defined entrywise by the finite sum $(AB)_{ij}=\sum_k A_{ik}B_{kj}$.

[F4] [[thm-rat-field]]: $\mathbb Q$ with its usual operations is a field.

## Verification

1.1 By [F4], the displayed matrix entries are in a field. Its nonzero pattern is the diagonal together with the four adjacent off-diagonal positions. It is canonical, sorted by column in every row, and contains all three diagonal positions, so the algorithm has no input-pattern or missing-diagonal failure. [given, F2, F4, algebra]

2.1 In row 1 the factors are $U_{11}=4$ and $U_{12}=-1$. In row 2 the multiplier is $L_{21}=-1/4$; the matching update at column 2 gives $U_{22}=4-(-1/4)(-1)=15/4$. The row-2 entry at column 3 remains $U_{23}=-1$ because row 1 has no position at column 3. [F1, step 1.1, algebra]

3.1 Row 3 has no position at column 1. Its multiplier at column 2 is $L_{32}=(-1)/(15/4)=-4/15$. The matching update at column 3 gives $U_{33}=4-(-4/15)(-1)=56/15$. All three pivots are nonzero, so the procedure returns `ok` with the displayed factors. [F1, step 1.1, step 2.1, algebra]

4.1 By [F3], the product has rows $(4,-1,0)$, $(-1,1/4+15/4,-1)$, and $(0,-1,4/15+56/15)$, hence $LU=A$. [F3, step 2.1, step 3.1, algebra] ∎
