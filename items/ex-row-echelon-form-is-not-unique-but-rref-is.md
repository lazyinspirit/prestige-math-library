---
id: ex-row-echelon-form-is-not-unique-but-rref-is
kind: example
title: "One matrix has two distinct row echelon forms but one reduced row echelon form"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-reduced-row-echelon-form-is-unique, def-row-echelon-reduced-row-echelon-and-pivots]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Hefferon, Linear Algebra, 4th ed., Ch. One, §III.2"
      url: "https://jheffero.w3.uvm.edu/linearalgebra/book.pdf"
pipeline_run: null
---

## Example

The matrix
$$A=\begin{pmatrix}1&1\\1&0\end{pmatrix}$$
has distinct row echelon forms
$$R=\begin{pmatrix}1&1\\0&-1\end{pmatrix},\qquad S=\begin{pmatrix}1&1\\0&1\end{pmatrix},$$
but both reduce to $I_2$.

## Facts & Assumptions

**Given:** The displayed matrix and two proposed reductions.

[L1] Every matrix has a unique reduced row echelon form ([[thm-reduced-row-echelon-form-is-unique]]).

[L2] Echelon form and reduced echelon form have the stated pivot conditions ([[def-row-echelon-reduced-row-echelon-and-pivots]]).

## Verification

**Proof technique:** direct.

1.1 The operation $R_1\leftarrow R_1-R_0$ takes $A$ to $R$, and the additional scaling $R_1\leftarrow-R_1$ takes $R$ to $S$. Both are echelon forms by [L2], and $R\ne S$. [L1, L2, algebra]

2.1 From $S$, replace $R_0$ by $R_0-R_1$ to obtain $I_2$, which satisfies every RREF condition. The same continuation after scaling takes $R$ to $I_2$, in agreement with uniqueness. [step 1.1, L1, L2, algebra] ∎
