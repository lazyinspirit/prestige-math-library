---
id: cex-ilu0-product-can-create-fill-outside-input-pattern
kind: counterexample
title: "The product of ILU(0) factors can contain a fill position"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps:
  - alg-ilu0-fixed-pattern-factorization
  - def-csr-matrix-with-stored-entry-semantics
  - def-matrix-product-and-identity-matrix
  - thm-rat-field
justified_by: []
aliases: []
proof_strategy: direct
sources:
  references:
    - title: "Yousef Saad, Iterative Methods for Sparse Linear Systems, 2nd ed., §10.3.2, printed pp. 307–310"
      url: "https://www-users.cse.umn.edu/~saad/IterMethBook_2ndEd.pdf"
    - title: "Richard Barrett et al., Templates for the Solution of Linear Systems: Building Blocks for Iterative Methods, 2nd ed., §3.4.2, printed pp. 39–41"
      url: "https://www.netlib.org/templates/templates.pdf"
dependency_level: 2
---

## Statement refuted

For every successful fixed-pattern ILU(0) factorization, every nonzero entry
of the product $LU$ lies in the nonzero pattern of the input matrix $A$.

## Facts & Assumptions

**Given:** The fixed-pattern ILU(0) recurrence on a canonical sorted CSR input,
and the usual matrix-product convention.

[F1] [[alg-ilu0-fixed-pattern-factorization]]: the algorithm stores strict-lower and upper factor entries only at input-pattern positions and updates a work entry only when both relevant positions are in that pattern.

[F2] [[def-csr-matrix-with-stored-entry-semantics]]: the represented matrix entry is the sum of stored values in its row with the specified column index; canonical records have no repeated columns or stored zeros.

[F3] [[def-matrix-product-and-identity-matrix]]: $(LU)_{ij}=\sum_k L_{ik}U_{kj}$.

[F4] [[thm-rat-field]]: $\mathbb Q$ with its usual operations is a field.

## Counterexample

1.1 Take $$A=\begin{pmatrix}1&1&0\\0&1&0\\1&0&1\end{pmatrix}.$$ By [F4], this is a matrix over a field. Its canonical sorted CSR pattern is $P=\{(1,1),(1,2),(2,2),(3,1),(3,3)\}$, with all diagonal entries equal to $1$. Thus the input satisfies the algorithm's domain and has no missing diagonal. [given, F2, F4, algebra]

2.1 The first row gives $U_{11}=U_{12}=1$. Row 2 has no strict-lower position and gives $U_{22}=1$. In row 3 the only strict-lower position is $(3,1)$, so $L_{31}=1$. The update from this multiplier can reach only a column $j>1$ present in both row 3 and row 1; no such column exists. Hence $L_{32}$ is not stored, $U_{33}=1$, and the procedure returns `ok` with $$L=\begin{pmatrix}1&0&0\\0&1&0\\1&0&1\end{pmatrix},\qquad U=\begin{pmatrix}1&1&0\\0&1&0\\0&0&1\end{pmatrix}.$$ [F1, step 1.1, algebra]

3.1 By [F3], $(LU)_{32}=L_{31}U_{12}+L_{32}U_{22}+L_{33}U_{32}=1$, whereas $A_{32}=0$. Therefore $LU$ has a nonzero outside the input pattern, so the refuted statement is false. [F3, step 2.1, algebra] ∎
