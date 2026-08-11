---
id: ex-row-echelon-form-is-not-unique-but-rref-is
kind: example
title: "One matrix has two distinct row echelon forms but one reduced row echelon form"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-reduced-row-echelon-form-is-unique, def-row-echelon-reduced-row-echelon-and-pivots, def-elementary-row-operations-and-row-equivalence]
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
    - title: "J. Hefferon, Linear Algebra, 4th ed., Ch. One, §III.2"
      url: "https://jheffero.w3.uvm.edu/linearalgebra/book.pdf"
pipeline_run: null
---

## Example

Over $\mathbb Q$, the matrix
$$A=\begin{pmatrix}1&1\\1&0\end{pmatrix}$$
has distinct row echelon forms
$$R=\begin{pmatrix}1&1\\0&-1\end{pmatrix},\qquad S=\begin{pmatrix}1&1\\0&1\end{pmatrix},$$
but both reduce to $I_2$.

## Facts & Assumptions

**Given:** The displayed matrix and two proposed reductions.

[L1] Every **finite** matrix **over a field** is row equivalent to exactly one matrix in reduced row echelon form ([[thm-reduced-row-echelon-form-is-unique]]).

[L2] A matrix is in **row echelon form** when every zero row lies below every nonzero row, the leading entry — the leftmost nonzero entry — of each nonzero row lies strictly to the right of the leading entry in the row above it, and every entry below a leading entry is zero. A row echelon matrix is in **reduced row echelon form** when every leading entry equals $1$ and is the only nonzero entry in its column ([[def-row-echelon-reduced-row-echelon-and-pivots]]).

[L3] Over a field $F$, an **elementary row operation** interchanges two distinct rows, replaces $R_p$ by $cR_p$ for a nonzero $c\in F$, or replaces $R_p$ by $R_p+cR_q$ for distinct $p,q$ and $c\in F$; two matrices are **row equivalent** when a finite sequence of elementary row operations transforms one into the other ([[def-elementary-row-operations-and-row-equivalence]]).

## Verification

**Proof technique:** direct.

1.1 The replacement $R_1\leftarrow R_1+(-1)R_0$ is an elementary row operation of the third kind and takes $A$ to $R$; the scaling $R_1\leftarrow(-1)R_1$ is one of the second kind, $-1$ being nonzero in $\mathbb Q$, and takes $R$ to $S$. So $A$ is row equivalent to each of $R$ and $S$ by [L3]. Each has no zero row, leading entries in columns $0$ and $1$ respectively, and $0$ below the leading entry of its first row, so each is in row echelon form by [L2]. Finally $R\ne S$ because $-1\ne1$ in $\mathbb Q$. The ground field matters here and not elsewhere in the example: over $\mathbb F_2$ one has $-1=1$, so $R$ and $S$ coincide and this matrix exhibits no failure of uniqueness. [L2, L3, algebra]

2.1 From $S$, the replacement $R_0\leftarrow R_0+(-1)R_1$ is again elementary of the third kind and gives $I_2$, so $I_2$ is row equivalent to $A$ by [L3] and step 1.1; its two leading entries equal $1$ and each is alone in its column, so it is in reduced row echelon form by [L2]. Applying the same replacement after the scaling of step 1.1 carries $R$ to $I_2$ as well, in agreement with the uniqueness of [L1]. [step 1.1, L1, L2, L3, algebra] ∎
